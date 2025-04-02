import io

from bench_runner import plot
from bench_runner import result


def plot_diff(base_url, base_data, head_url, head_data):
    """
    Plot the diff between two benchmark results.
    """

    # Convert the JSON data to Result objects

    base_result = result.Result.from_json(base_url, base_data)
    head_result = result.Result.from_json(head_url, head_data)

    compare = result.BenchmarkComparison(base_result, head_result, "base")
    output = io.StringIO()
    plot.plot_diff(compare.get_timing_diff(), output, "timings", ("slower", "faster"))

    return output.getvalue()


plot_diff
