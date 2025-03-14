# Results

- fork: python/e0bc9d2a0c448cf46df2
- version: 3.14.0a5+
- config: JIT
- commit hash: [e0bc9d2](https://github.com/python/cpython/commit/e0bc9d2)
- commit date: 2025-03-11T12:45:31-04:00
- commit merge base: [9d759b63d8028a987ffad4e8750b13ecfa934967](https://github.com/python/cpython/commit/9d759b63d8028a987ffad4e8750b13ecfa934967)
- ref: e0bc9d2a0c448cf46df2

## darwin arm64 (darwin)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13842614400)
- cpu model: missing
- platform: macOS-15.3-arm64-arm-64bit-Mach-O
- [raw results](bm-20250311-darwin-arm64-python-e0bc9d2a0c448cf46df2-3.14.0a5%2B-e0bc9d2.json)

### vs. 3.10.4

- Geometric mean: 1.279x faster (HPT: reliability of 100.00%, 1.13x faster at 99th %ile)
- Memory usage: 1.15x
- missing benchmarks: chameleon, djangocms, gevent_hub, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io_tg, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250311-darwin-arm64-python-e0bc9d2a0c448cf46df2-3.14.0a5%2B-e0bc9d2-vs-3.10.4.md)
- [📈time plot](bm-20250311-darwin-arm64-python-e0bc9d2a0c448cf46df2-3.14.0a5%2B-e0bc9d2-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.008x faster (HPT: reliability of 86.57%, 1.00x slower at 99th %ile)
- Memory usage: 1.09x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250311-darwin-arm64-python-e0bc9d2a0c448cf46df2-3.14.0a5%2B-e0bc9d2-vs-3.12.0.md)
- [📈time plot](bm-20250311-darwin-arm64-python-e0bc9d2a0c448cf46df2-3.14.0a5%2B-e0bc9d2-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.009x faster (HPT: reliability of 85.78%, 1.00x faster at 99th %ile)
- Memory usage: 1.08x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250311-darwin-arm64-python-e0bc9d2a0c448cf46df2-3.14.0a5%2B-e0bc9d2-vs-3.13.0.md)
- [📈time plot](bm-20250311-darwin-arm64-python-e0bc9d2a0c448cf46df2-3.14.0a5%2B-e0bc9d2-vs-3.13.0.svg)

