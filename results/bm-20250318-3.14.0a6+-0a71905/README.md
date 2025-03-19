# Results

- fork: mdboom/tuple_hash
- version: 3.14.0a6+
- config: 
- commit hash: [0a71905](https://github.com/mdboom/cpython/commit/0a71905)
- commit date: 2025-03-18T17:44:03-04:00
- commit merge base: [f81990024554a75e2ab31133a72d9f0954690435](https://github.com/python/cpython/commit/f81990024554a75e2ab31133a72d9f0954690435)
- ref: tuple_hash

## linux x86_64 (linux)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13934097220)
- cpu model: Intel(R) Xeon(R) W-2255 CPU @ 3.70GHz
- platform: Linux-5.4.0-208-generic-x86_64-with-glibc2.31
- [raw results](bm-20250318-linux-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905.json)

### vs. 3.10.4

- Geometric mean: 1.439x faster (HPT: reliability of 100.00%, 1.31x faster at 99th %ile)
- Memory usage: 1.28x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, djangocms, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers
- [📄table](bm-20250318-linux-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.10.4.md)
- [📈time plot](bm-20250318-linux-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.111x faster (HPT: reliability of 100.00%, 1.06x faster at 99th %ile)
- Memory usage: 1.10x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers, thrift
- [📄table](bm-20250318-linux-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.12.0.md)
- [📈time plot](bm-20250318-linux-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.041x faster (HPT: reliability of 99.98%, 1.00x faster at 99th %ile)
- Memory usage: 1.03x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250318-linux-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.13.0.md)
- [📈time plot](bm-20250318-linux-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.13.0.svg)

### vs. base

- Geometric mean: 1.002x faster (HPT: reliability of 99.24%, 1.00x faster at 99th %ile)
- Memory usage: 1.00x
- [🧠memory plot](bm-20250318-linux-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-base-mem.svg)
- [📄table](bm-20250318-linux-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-base.md)
- [📈time plot](bm-20250318-linux-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-base.svg)

## linux x86_64 (pythonperf2)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13937961230)
- cpu model: 12th Gen Intel(R) Core(TM) i9-12900
- platform: Linux-5.15.0-125-generic-x86_64-with-glibc2.35
- [raw results](bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905.json)

### vs. 3.10.4

- Geometric mean: 1.310x faster (HPT: reliability of 100.00%, 1.22x faster at 99th %ile)
- Memory usage: 1.28x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers
- [📄table](bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.10.4.md)
- [📈time plot](bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.019x faster (HPT: reliability of 66.25%, 1.00x faster at 99th %ile)
- Memory usage: 1.05x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers, thrift
- [📄table](bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.12.0.md)
- [📈time plot](bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.031x faster (HPT: reliability of 99.99%, 1.00x faster at 99th %ile)
- Memory usage: 1.03x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
- new benchmarks: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile
- [📄table](bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.13.0.md)
- [📈time plot](bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-3.13.0.svg)

### vs. base

- Geometric mean: 1.007x faster (HPT: reliability of 84.13%, 1.00x faster at 99th %ile)
- Memory usage: 0.98x
- new benchmarks: 2to3, async_generators, async_tree_cpu_io_mixed, async_tree_cpu_io_mixed_tg, async_tree_io, async_tree_io_tg, async_tree_memoization, async_tree_memoization_tg, async_tree_none, async_tree_none_tg, asyncio_websockets, bench_mp_pool, bench_thread_pool, bpe_tokeniser, chaos, comprehensions, connected_components, coroutines, coverage, create_gc_cycles, crypto_pyaes, deepcopy, deepcopy_memo, deepcopy_reduce, deltablue, django_template, docutils, dulwich_log, fannkuch, float, gc_traversal, generators, genshi_text, genshi_xml, go, hexiom, html5lib, json, json_dumps, json_loads, k_core, logging_format, logging_silent, logging_simple, mako, many_optionals, meteor_contest, nbody, nqueens, pathlib, pickle_pure_python, pidigits, pprint_pformat, pprint_safe_repr, pycparser, pyflate, pylint, python_startup, python_startup_no_site, raytrace, regex_compile, regex_dna, regex_effbot, regex_v8, richards, richards_super, scimark_fft, scimark_lu, scimark_monte_carlo, scimark_sor, scimark_sparse_mat_mult, shortest_path, spectral_norm, sphinx, sqlalchemy_declarative, sqlalchemy_imperative, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, sqlite_synth, subparsers, sympy_expand, sympy_integrate, sympy_str, sympy_sum, telco, thrift, tomli_loads, typing_runtime_protocols, unpickle_pure_python, xml_etree_generate, xml_etree_iterparse, xml_etree_parse, xml_etree_process
- [🧠memory plot](bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-base-mem.svg)
- [📄table](bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-base.md)
- [📈time plot](bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6%2B-0a71905-vs-base.svg)

