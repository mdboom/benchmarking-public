# Results

- fork: python/1b27f36eb0ef146aa60b
- version: 3.14.0a5+
- config: CLANG,JIT
- commit hash: [1b27f36](https://github.com/python/cpython/commit/1b27f36)
- commit date: 2025-02-13T02:18:36+08:00
- commit merge base: [11bb08e4ec7b546d57b0ab7a8f199747bef6e422](https://github.com/python/cpython/commit/11bb08e4ec7b546d57b0ab7a8f199747bef6e422)
- ref: 1b27f36eb0ef146aa60b

## darwin arm64 (darwin)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13309151630)
- cpu model: missing
- platform: macOS-15.3-arm64-arm-64bit-Mach-O
- [raw results](bm-20250213-darwin-arm64-python-1b27f36eb0ef146aa60b-3.14.0a5%2B-1b27f36.json)

### vs. 3.10.4

- Geometric mean: 1.435x faster (HPT: reliability of 100.00%, 1.24x faster at 99th %ile)
- Memory usage: 1.14x
- missing benchmarks: chameleon, djangocms, gevent_hub, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io_tg, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg
- [📄table](bm-20250213-darwin-arm64-python-1b27f36eb0ef146aa60b-3.14.0a5%2B-1b27f36-vs-3.10.4.md)
- [📈time plot](bm-20250213-darwin-arm64-python-1b27f36eb0ef146aa60b-3.14.0a5%2B-1b27f36-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.127x faster (HPT: reliability of 100.00%, 1.06x faster at 99th %ile)
- Memory usage: 1.12x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- [📄table](bm-20250213-darwin-arm64-python-1b27f36eb0ef146aa60b-3.14.0a5%2B-1b27f36-vs-3.12.0.md)
- [📈time plot](bm-20250213-darwin-arm64-python-1b27f36eb0ef146aa60b-3.14.0a5%2B-1b27f36-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.131x faster (HPT: reliability of 100.00%, 1.08x faster at 99th %ile)
- Memory usage: 1.08x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- [📄table](bm-20250213-darwin-arm64-python-1b27f36eb0ef146aa60b-3.14.0a5%2B-1b27f36-vs-3.13.0.md)
- [📈time plot](bm-20250213-darwin-arm64-python-1b27f36eb0ef146aa60b-3.14.0a5%2B-1b27f36-vs-3.13.0.svg)

