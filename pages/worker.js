import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v0.27.4/full/pyodide.mjs";

let plot_diff = null;

async function setup_python() {
    let pyodide = await loadPyodide();
    let result = await Promise.all([
        fetch("bench_display.py").then((response) => {
            return response.text();
        }),
        pyodide.loadPackage("numpy"),
        pyodide.loadPackage("matplotlib"),
        pyodide.loadPackage(
            "https://files.pythonhosted.org/packages/19/29/ce5d2dcb095debb3bed0654950c45207a7d138e194abef0ded4b86de1dc1/pyperf-2.9.0-py3-none-any.whl"
        ),
        pyodide.loadPackage(
            "./bench_runner-1.6.4.dev6+g50e19d0.d20250401-py3-none-any.whl"
        ),
    ]);

    plot_diff = await pyodide.runPythonAsync(await result[0]);

    postMessage("READY");

    return pyodide;
}

onmessage = (e) => {
    const workerResult = plot_diff(e.data[0], e.data[1], e.data[2], e.data[3]);
    postMessage(workerResult);
};

setup_python();