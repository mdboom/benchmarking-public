# Results

- fork: zooba/gh_91349
- version: 3.14.0a6+
- config: 
- commit hash: [548daa7](https://github.com/zooba/cpython/commit/548daa7)
- commit date: 2025-03-19T13:44:20+00:00
- commit merge base: [d783d7b51d31db568de6b3438f4e805acff663da](https://github.com/python/cpython/commit/d783d7b51d31db568de6b3438f4e805acff663da)
- ref: gh_91349

## darwin arm64 (darwin)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13948931188)
- cpu model: missing
- platform: macOS-15.3.2-arm64-arm-64bit-Mach-O
- [raw results](bm-20250319-darwin-arm64-zooba-gh_91349-3.14.0a6%2B-548daa7.json)

### vs. 3.10.4

- Geometric mean: 1.358x faster (HPT: reliability of 100.00%, 1.20x faster at 99th %ile)
- Memory usage: 1.15x
- missing benchmarks: chameleon, djangocms, gevent_hub, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io_tg, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250319-darwin-arm64-zooba-gh_91349-3.14.0a6%2B-548daa7-vs-3.10.4.md)
- [📈time plot](bm-20250319-darwin-arm64-zooba-gh_91349-3.14.0a6%2B-548daa7-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.070x faster (HPT: reliability of 99.98%, 1.01x faster at 99th %ile)
- Memory usage: 1.11x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250319-darwin-arm64-zooba-gh_91349-3.14.0a6%2B-548daa7-vs-3.12.0.md)
- [📈time plot](bm-20250319-darwin-arm64-zooba-gh_91349-3.14.0a6%2B-548daa7-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.071x faster (HPT: reliability of 100.00%, 1.03x faster at 99th %ile)
- Memory usage: 1.09x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250319-darwin-arm64-zooba-gh_91349-3.14.0a6%2B-548daa7-vs-3.13.0.md)
- [📈time plot](bm-20250319-darwin-arm64-zooba-gh_91349-3.14.0a6%2B-548daa7-vs-3.13.0.svg)

