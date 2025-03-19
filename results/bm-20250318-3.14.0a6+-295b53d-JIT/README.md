# Results

- fork: python/295b53df2aa18deb625a
- version: 3.14.0a6+
- config: JIT
- commit hash: [295b53d](https://github.com/python/cpython/commit/295b53d)
- commit date: 2025-03-18T12:07:17+01:00
- commit merge base: [ab6333f7f56554bfd6c01eff567ddfb163a3dae6](https://github.com/python/cpython/commit/ab6333f7f56554bfd6c01eff567ddfb163a3dae6)
- ref: 295b53df2aa18deb625a

## darwin arm64 (darwin)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13950825369)
- cpu model: missing
- platform: macOS-15.3.2-arm64-arm-64bit-Mach-O
- [raw results](bm-20250318-darwin-arm64-python-295b53df2aa18deb625a-3.14.0a6%2B-295b53d.json)

### vs. 3.10.4

- Geometric mean: 1.315x faster (HPT: reliability of 100.00%, 1.16x faster at 99th %ile)
- Memory usage: 1.16x
- missing benchmarks: chameleon, djangocms, gevent_hub, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io_tg, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250318-darwin-arm64-python-295b53df2aa18deb625a-3.14.0a6%2B-295b53d-vs-3.10.4.md)
- [📈time plot](bm-20250318-darwin-arm64-python-295b53df2aa18deb625a-3.14.0a6%2B-295b53d-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.036x faster (HPT: reliability of 81.92%, 1.00x faster at 99th %ile)
- Memory usage: 1.11x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250318-darwin-arm64-python-295b53df2aa18deb625a-3.14.0a6%2B-295b53d-vs-3.12.0.md)
- [📈time plot](bm-20250318-darwin-arm64-python-295b53df2aa18deb625a-3.14.0a6%2B-295b53d-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.037x faster (HPT: reliability of 99.98%, 1.01x faster at 99th %ile)
- Memory usage: 1.10x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250318-darwin-arm64-python-295b53df2aa18deb625a-3.14.0a6%2B-295b53d-vs-3.13.0.md)
- [📈time plot](bm-20250318-darwin-arm64-python-295b53df2aa18deb625a-3.14.0a6%2B-295b53d-vs-3.13.0.svg)

