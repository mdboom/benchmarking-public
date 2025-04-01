import js

import asyncio
import io
from urllib.parse import urlparse

from bench_runner import result
from bench_runner import plot

base_url = js.document.base_url
head_url = js.document.head_url
base_data = js.document.base_data
head_data = js.document.head_data

base_result = result.Result.from_json(base_url, base_data)
head_result = result.Result.from_json(head_url, head_data)

compare = result.BenchmarkComparison(base_result, head_result, "base")
output = io.StringIO()
plot.plot_diff(compare.get_timing_diff(), output, "timings", ("slower", "faster"))

js.document.write(output.getvalue())
