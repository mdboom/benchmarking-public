# Results

- fork: python/d783d7b51d31db568de6
- version: 3.14.0a6+
- config: 
- commit hash: [d783d7b](https://github.com/python/cpython/commit/d783d7b)
- commit date: 2025-03-18T23:37:12+00:00
- commit merge base: [01b5abbc53b2a9ee8d85e0518c98efce27dbd061](https://github.com/python/cpython/commit/01b5abbc53b2a9ee8d85e0518c98efce27dbd061)
- ref: d783d7b51d31db568de6

## windows amd64 (pythonperf1)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13948931188)
- cpu model: missing
- platform: Windows-11-10.0.26100-SP0
- [raw results](bm-20250318-pythonperf1-amd64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b.json)

### vs. 3.10.4

- Geometric mean: 1.209x faster (HPT: reliability of 100.00%, 1.10x faster at 99th %ile)
- Memory usage: unknown
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, flaskblogging, mypy2, pickle, pickle_dict, pickle_list, sqlalchemy_declarative, sqlalchemy_imperative, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, asyncio_websockets, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers
- [📄table](bm-20250318-pythonperf1-amd64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.10.4.md)
- [📈time plot](bm-20250318-pythonperf1-amd64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.033x faster (HPT: reliability of 67.69%, 1.00x slower at 99th %ile)
- Memory usage: unknown
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, mypy2, pickle, pickle_dict, pickle_list, sqlalchemy_declarative, sqlalchemy_imperative, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: asyncio_websockets, bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers, thrift
- [📄table](bm-20250318-pythonperf1-amd64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.12.0.md)
- [📈time plot](bm-20250318-pythonperf1-amd64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.002x slower (HPT: reliability of 100.00%, 1.03x slower at 99th %ile)
- Memory usage: unknown
- missing benchmarks: chameleon, djangocms, gevent_hub, sqlalchemy_declarative, sqlalchemy_imperative, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250318-pythonperf1-amd64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.13.0.md)
- [📈time plot](bm-20250318-pythonperf1-amd64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.13.0.svg)

## darwin arm64 (darwin)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13948931188)
- cpu model: missing
- platform: macOS-15.3.2-arm64-arm-64bit-Mach-O
- [raw results](bm-20250318-darwin-arm64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b.json)

### vs. 3.10.4

- Geometric mean: 1.358x faster (HPT: reliability of 100.00%, 1.20x faster at 99th %ile)
- Memory usage: 1.15x
- missing benchmarks: chameleon, djangocms, gevent_hub, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io_tg, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250318-darwin-arm64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.10.4.md)
- [📈time plot](bm-20250318-darwin-arm64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.069x faster (HPT: reliability of 99.98%, 1.01x faster at 99th %ile)
- Memory usage: 1.11x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250318-darwin-arm64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.12.0.md)
- [📈time plot](bm-20250318-darwin-arm64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.071x faster (HPT: reliability of 100.00%, 1.03x faster at 99th %ile)
- Memory usage: 1.09x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250318-darwin-arm64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.13.0.md)
- [📈time plot](bm-20250318-darwin-arm64-python-d783d7b51d31db568de6-3.14.0a6%2B-d783d7b-vs-3.13.0.svg)

