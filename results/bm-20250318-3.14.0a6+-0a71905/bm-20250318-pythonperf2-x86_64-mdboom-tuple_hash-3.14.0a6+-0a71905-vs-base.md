# Results vs. base

- fork: mdboom
- ref: tuple_hash
- machine: linux-x86_64
- commit hash: 0a71905
- commit date: 2025-03-18
- overall geometric mean: 1.007x faster
- HPT reliability: 84.13%
- HPT 99th percentile: 1.00x faster
- Memory change: 0.98x

| Benchmark | bm-20250318-pythonperf2-x86_64-python-f81990024554a75e2ab3-3.14.0a6+-f819900 | bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6+-0a71905 |
|-----------|:----------------------------------------------------------------------------:|:------------------------------------------------------------------:|
| mdp       | 2.52 sec                                                                     | 2.51 sec: 1.01x faster                                             |
Ignored benchmarks (95) of results/bm-20250318-3.14.0a6+-0a71905/bm-20250318-pythonperf2-x86_64-mdboom-tuple_hash-3.14.0a6+-0a71905.json: 2to3, async_generators, async_tree_cpu_io_mixed, async_tree_cpu_io_mixed_tg, async_tree_io, async_tree_io_tg, async_tree_memoization, async_tree_memoization_tg, async_tree_none, async_tree_none_tg, asyncio_websockets, bench_mp_pool, bench_thread_pool, bpe_tokeniser, chaos, comprehensions, connected_components, coroutines, coverage, create_gc_cycles, crypto_pyaes, deepcopy, deepcopy_memo, deepcopy_reduce, deltablue, django_template, docutils, dulwich_log, fannkuch, float, gc_traversal, generators, genshi_text, genshi_xml, go, hexiom, html5lib, json, json_dumps, json_loads, k_core, logging_format, logging_silent, logging_simple, mako, many_optionals, meteor_contest, nbody, nqueens, pathlib, pickle_pure_python, pidigits, pprint_pformat, pprint_safe_repr, pycparser, pyflate, pylint, python_startup, python_startup_no_site, raytrace, regex_compile, regex_dna, regex_effbot, regex_v8, richards, richards_super, scimark_fft, scimark_lu, scimark_monte_carlo, scimark_sor, scimark_sparse_mat_mult, shortest_path, spectral_norm, sphinx, sqlalchemy_declarative, sqlalchemy_imperative, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, sqlite_synth, subparsers, sympy_expand, sympy_integrate, sympy_str, sympy_sum, telco, thrift, tomli_loads, typing_runtime_protocols, unpickle_pure_python, xml_etree_generate, xml_etree_iterparse, xml_etree_parse, xml_etree_process

- Geometric mean (including insignificant results): 1.007x faster

# HPT report

- Reliability score: 84.13% likely to be faster
- 90% likely to have a speedup of 1.00x
- 95% likely to have a speedup of 1.00x
- 99% likely to have a speedup of 1.00x

# Memory
- memory change: 0.98x