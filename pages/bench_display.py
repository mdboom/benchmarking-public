import io

from bench_runner import result
from bench_runner import plot

from pyodide.http import pyfetch

base_url = "https://raw.githubusercontent.com/faster-cpython/benchmarking-public/refs/heads/main/results/bm-20250331-3.14.0a6%2B-008b481-JIT/bm-20250331-linux-x86_64-brandtbucher-jit_up_8_6-3.14.0a6%2B-008b481.json"
head_url = "https://raw.githubusercontent.com/faster-cpython/benchmarking-public/refs/heads/main/results/bm-20250324-3.14.0a6%2B-a123245-JIT/bm-20250324-linux-x86_64-python-a1232459860235f4fb78-3.14.0a6%2B-a123245.json"

base_data = await pyfetch(base_url)
head_data = await pyfetch(head_url)

base_result = result.Result.from_json(base_url, await base_data.string())
head_result = result.Result.from_json(head_url, await head_data.string())

compare = result.BenchmarkComparison(base_result, head_result, "base")
output = io.StringIO()
plot.plot_diff(compare.get_timing_diff(), output, "timings", ("slower", "faster"))

import js

js.console.log(output.getvalue()[:100])
js.document.write(output.getvalue())
