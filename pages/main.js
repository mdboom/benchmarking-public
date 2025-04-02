const ORGANIZATION = "faster-cpython";
const REPO = "benchmarking-public";
const BRANCH = "main";
const REPO_URL = `https://raw.githubusercontent.com/${ORGANIZATION}/${REPO}/refs/heads/${BRANCH}/results/`;

let head_idx = null;
let base_idx = null;
let plot_diff = null;
let worker = null;
let python_ready = false;
let gridOptions = null;
let head_grid = null;
let base_grid = null;

function update_buttons() {
    document.querySelector("#go").disabled = !(
        python_ready &&
        head_idx !== null &&
        base_idx !== null
    );
    document.querySelector("#merge_base").disabled = !(
        head_idx !== null &&
        gridOptions !== null &&
        gridOptions._bases[head_idx] !== null
    );
    document.querySelector("#head_ready").innerHTML =
        head_idx === null ? "" : "Head";
    document.querySelector("#base_ready").innerHTML =
        base_idx === null ? "" : "Base";
}

async function setup_grid() {
    gridOptions = await fetch("index.json").then((response) => {
        return response.json();
    });

    let quick_select = document.querySelector("#quick_select");
    for (base of gridOptions._bases) {
        let button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-outline-primary";
        button.innerText = base;
        quick_select.appendChild(button);
        button.addEventListener("click", async (e) => {
            await base_grid.setColumnFilterModel("ref", {
                filterType: "text",
                type: "equals",
                filter: "v" + e.srcElement.innerText,
            });
            await base_grid.onFilterChanged();
        });
    }

    document
        .querySelector("#merge_base")
        .addEventListener("click", async () => {
            let base = gridOptions._base_results[head_idx];
            base_grid.forEachNode((node) => {
                if (node.sourceRowIndex == base) {
                    node.setSelected(true);
                    base_grid.ensureNodeVisible(node);
                } else {
                    node.setSelected(false);
                }
            });
        });

    update_buttons();

    gridOptions.columnDefs = [
        { field: "date", filter: "agDateColumnFilter", width: 150 },
        { field: "hash", width: 100 },
        { field: "fork", width: 150 },
        { field: "ref", width: 150 },
        { field: "runner", width: 200 },
        { field: "flags", width: 150 },
    ];

    gridOptions.defaultColDef = {
        filter: "agTextColumnFilter",
        floatingFilter: true,
        sortable: true,
    };

    gridOptions.rowSelection = { mode: "singleRow" };

    gridOptions.onRowSelected = function (event) {
        let nodes = head_grid.getSelectedNodes();
        if (nodes.length == 1) {
            head_idx = nodes[0].sourceRowIndex;
        } else {
            head_idx = null;
        }
        update_buttons();
    };

    const head_grid_element = document.querySelector("#head_grid");
    head_grid = agGrid.createGrid(head_grid_element, gridOptions);

    gridOptions.onRowSelected = function (event) {
        let nodes = base_grid.getSelectedNodes();
        if (nodes.length == 1) {
            base_idx = nodes[0].sourceRowIndex;
        } else {
            base_idx = null;
        }
        update_buttons();
    };

    const base_grid_element = document.querySelector("#base_grid");
    base_grid = agGrid.createGrid(base_grid_element, gridOptions);

    document.querySelector("#go").addEventListener("click", async () => {
        document.querySelector("#go").innerHTML = "Loading...";
        let head_url = REPO_URL + gridOptions._index[head_idx];
        let base_url = REPO_URL + gridOptions._index[base_idx];
        let [head_data, base_data] = await Promise.all([
            fetch(head_url).then((response) => {
                return response.text();
            }),
            fetch(base_url).then((response) => {
                return response.text();
            }),
        ]);

        worker.postMessage([base_url, base_data, head_url, head_data]);
    });
}

async function main() {
    worker = new Worker("worker.js", { type: "module" });

    worker.onmessage = (e) => {
        if (e.data == "READY") {
            console.log("READY");
            python_ready = true;
            document.querySelector("#ready").innerHTML = "Ready";
            update_buttons();
        } else {
            document.querySelector("#go").innerHTML = "Go";
            document.querySelector("#plot").innerHTML = e.data;
        }
    };

    await setup_grid();
}
