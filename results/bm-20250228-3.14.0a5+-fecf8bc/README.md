# Results

- fork: python/fecf8bc8f2fd09a9a4c5
- version: 3.14.0a5+
- config: 
- commit hash: [fecf8bc](https://github.com/python/cpython/commit/fecf8bc)
- commit date: 2025-02-28T08:58:50+00:00
- commit merge base: [24c52cb14c4b044154bd46bd1b2a9c37076caeb9](https://github.com/python/cpython/commit/24c52cb14c4b044154bd46bd1b2a9c37076caeb9)
- ref: fecf8bc8f2fd09a9a4c5

## darwin arm64 (darwin)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13587429778)
- cpu model: missing
- platform: macOS-15.3-arm64-arm-64bit-Mach-O
- [raw results](bm-20250228-darwin-arm64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5%2B-fecf8bc.json)

### vs. 3.10.4

- Geometric mean: 1.257x faster (HPT: reliability of 100.00%, 1.10x faster at 99th %ile)
- Memory usage: 1.14x
- missing benchmarks: chameleon, djangocms, gevent_hub, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io_tg, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg
- [📄table](bm-20250228-darwin-arm64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5%2B-fecf8bc-vs-3.10.4.md)
- [📈time plot](bm-20250228-darwin-arm64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5%2B-fecf8bc-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.012x slower (HPT: reliability of 98.35%, 1.00x slower at 99th %ile)
- Memory usage: 1.12x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- [📄table](bm-20250228-darwin-arm64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5%2B-fecf8bc-vs-3.12.0.md)
- [📈time plot](bm-20250228-darwin-arm64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5%2B-fecf8bc-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.009x slower (HPT: reliability of 77.35%, 1.00x slower at 99th %ile)
- Memory usage: 1.08x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- [📄table](bm-20250228-darwin-arm64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5%2B-fecf8bc-vs-3.13.0.md)
- [📈time plot](bm-20250228-darwin-arm64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5%2B-fecf8bc-vs-3.13.0.svg)

