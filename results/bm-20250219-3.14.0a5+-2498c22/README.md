# Results

- fork: python/2498c22fa0a2b560491b
- version: 3.14.0a5+
- config: 
- commit hash: [2498c22](https://github.com/python/cpython/commit/2498c22)
- commit date: 2025-02-19T11:44:57+00:00
- commit merge base: [c637bce20aaaf836ab2cfbb123b9472e5ad0ab47](https://github.com/python/cpython/commit/c637bce20aaaf836ab2cfbb123b9472e5ad0ab47)
- ref: 2498c22fa0a2b560491b

## darwin arm64 (darwin)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13441573807)
- cpu model: missing
- platform: macOS-15.3-arm64-arm-64bit-Mach-O
- [raw results](bm-20250219-darwin-arm64-python-2498c22fa0a2b560491b-3.14.0a5%2B-2498c22.json)

### vs. 3.10.4

- Geometric mean: 1.257x faster (HPT: reliability of 100.00%, 1.10x faster at 99th %ile)
- Memory usage: 1.14x
- missing benchmarks: chameleon, djangocms, gevent_hub, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io_tg, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg
- [📄table](bm-20250219-darwin-arm64-python-2498c22fa0a2b560491b-3.14.0a5%2B-2498c22-vs-3.10.4.md)
- [📈time plot](bm-20250219-darwin-arm64-python-2498c22fa0a2b560491b-3.14.0a5%2B-2498c22-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.013x slower (HPT: reliability of 98.43%, 1.00x slower at 99th %ile)
- Memory usage: 1.12x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- [📄table](bm-20250219-darwin-arm64-python-2498c22fa0a2b560491b-3.14.0a5%2B-2498c22-vs-3.12.0.md)
- [📈time plot](bm-20250219-darwin-arm64-python-2498c22fa0a2b560491b-3.14.0a5%2B-2498c22-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.009x slower (HPT: reliability of 62.94%, 1.00x slower at 99th %ile)
- Memory usage: 1.08x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- [📄table](bm-20250219-darwin-arm64-python-2498c22fa0a2b560491b-3.14.0a5%2B-2498c22-vs-3.13.0.md)
- [📈time plot](bm-20250219-darwin-arm64-python-2498c22fa0a2b560491b-3.14.0a5%2B-2498c22-vs-3.13.0.svg)

