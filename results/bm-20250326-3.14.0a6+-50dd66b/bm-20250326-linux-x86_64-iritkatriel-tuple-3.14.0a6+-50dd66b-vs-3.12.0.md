# Results vs. 3.12.0

- fork: iritkatriel
- ref: tuple
- machine: linux-x86_64
- commit hash: 50dd66b
- commit date: 2025-03-26
- overall geometric mean: 1.108x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.04x faster
- Memory change: 1.10x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| 2to3           | 274 ms                                                 | 258 ms: 1.06x faster                                         |
| docutils       | 2.77 sec                                               | 2.61 sec: 1.06x faster                                       |
| Geometric mean | (ref)                                                  | 1.06x faster                                                 |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 612 ms: 1.93x faster                                         |
| async_tree_io              | 1.16 sec                                               | 615 ms: 1.88x faster                                         |
| async_tree_memoization     | 578 ms                                                 | 311 ms: 1.85x faster                                         |
| async_tree_memoization_tg  | 575 ms                                                 | 310 ms: 1.85x faster                                         |
| async_tree_none            | 472 ms                                                 | 257 ms: 1.83x faster                                         |
| async_tree_none_tg         | 450 ms                                                 | 248 ms: 1.81x faster                                         |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 471 ms: 1.54x faster                                         |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 489 ms: 1.48x faster                                         |
| Geometric mean             | (ref)                                                  | 1.77x faster                                                 |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| float          | 84.7 ms                                                | 70.4 ms: 1.20x faster                                        |
| pidigits       | 187 ms                                                 | 187 ms: 1.00x faster                                         |
| nbody          | 97.0 ms                                                | 98.2 ms: 1.01x slower                                        |
| Geometric mean | (ref)                                                  | 1.06x faster                                                 |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| regex_compile  | 148 ms                                                 | 126 ms: 1.17x faster                                         |
| regex_effbot   | 3.61 ms                                                | 3.51 ms: 1.03x faster                                        |
| regex_v8       | 23.1 ms                                                | 23.5 ms: 1.02x slower                                        |
| regex_dna      | 212 ms                                                 | 226 ms: 1.07x slower                                         |
| Geometric mean | (ref)                                                  | 1.03x faster                                                 |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| tomli_loads          | 2.33 sec                                               | 2.00 sec: 1.17x faster                                       |
| xml_etree_parse      | 159 ms                                                 | 143 ms: 1.12x faster                                         |
| xml_etree_iterparse  | 107 ms                                                 | 98.4 ms: 1.09x faster                                        |
| xml_etree_generate   | 89.2 ms                                                | 84.7 ms: 1.05x faster                                        |
| unpickle_pure_python | 230 us                                                 | 219 us: 1.05x faster                                         |
| xml_etree_process    | 61.7 ms                                                | 59.0 ms: 1.05x faster                                        |
| pickle_pure_python   | 324 us                                                 | 316 us: 1.03x faster                                         |
| json_loads           | 28.5 us                                                | 29.7 us: 1.04x slower                                        |
| json_dumps           | 10.4 ms                                                | 11.4 ms: 1.10x slower                                        |
| Geometric mean       | (ref)                                                  | 1.04x faster                                                 |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| python_startup_no_site | 6.94 ms                                                | 8.20 ms: 1.18x slower                                        |
| python_startup         | 9.55 ms                                                | 13.1 ms: 1.37x slower                                        |
| Geometric mean         | (ref)                                                  | 1.27x slower                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|-----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| django_template | 34.6 ms                                                | 31.7 ms: 1.09x faster                                        |
| mako            | 11.9 ms                                                | 11.5 ms: 1.04x faster                                        |
| Geometric mean  | (ref)                                                  | 1.06x faster                                                 |

All benchmarks:
===============

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 612 ms: 1.93x faster                                         |
| async_tree_io              | 1.16 sec                                               | 615 ms: 1.88x faster                                         |
| async_tree_memoization     | 578 ms                                                 | 311 ms: 1.85x faster                                         |
| async_tree_memoization_tg  | 575 ms                                                 | 310 ms: 1.85x faster                                         |
| async_tree_none            | 472 ms                                                 | 257 ms: 1.83x faster                                         |
| async_tree_none_tg         | 450 ms                                                 | 248 ms: 1.81x faster                                         |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 471 ms: 1.54x faster                                         |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 489 ms: 1.48x faster                                         |
| deepcopy                   | 371 us                                                 | 259 us: 1.43x faster                                         |
| deepcopy_memo              | 40.7 us                                                | 29.7 us: 1.37x faster                                        |
| comprehensions             | 21.8 us                                                | 16.6 us: 1.31x faster                                        |
| go                         | 139 ms                                                 | 114 ms: 1.22x faster                                         |
| deepcopy_reduce            | 3.35 us                                                | 2.77 us: 1.21x faster                                        |
| float                      | 84.7 ms                                                | 70.4 ms: 1.20x faster                                        |
| dulwich_log                | 68.5 ms                                                | 57.9 ms: 1.18x faster                                        |
| logging_format             | 7.23 us                                                | 6.13 us: 1.18x faster                                        |
| raytrace                   | 312 ms                                                 | 265 ms: 1.18x faster                                         |
| async_generators           | 463 ms                                                 | 394 ms: 1.17x faster                                         |
| regex_compile              | 148 ms                                                 | 126 ms: 1.17x faster                                         |
| deltablue                  | 3.72 ms                                                | 3.17 ms: 1.17x faster                                        |
| tomli_loads                | 2.33 sec                                               | 2.00 sec: 1.17x faster                                       |
| logging_simple             | 6.46 us                                                | 5.57 us: 1.16x faster                                        |
| pathlib                    | 19.3 ms                                                | 16.7 ms: 1.16x faster                                        |
| spectral_norm              | 115 ms                                                 | 99.5 ms: 1.15x faster                                        |
| chaos                      | 67.0 ms                                                | 58.7 ms: 1.14x faster                                        |
| sympy_sum                  | 169 ms                                                 | 148 ms: 1.14x faster                                         |
| sqlalchemy_declarative     | 147 ms                                                 | 130 ms: 1.13x faster                                         |
| sqlalchemy_imperative      | 18.7 ms                                                | 16.7 ms: 1.12x faster                                        |
| xml_etree_parse            | 159 ms                                                 | 143 ms: 1.12x faster                                         |
| sympy_str                  | 300 ms                                                 | 269 ms: 1.12x faster                                         |
| crypto_pyaes               | 81.9 ms                                                | 73.9 ms: 1.11x faster                                        |
| scimark_monte_carlo        | 75.1 ms                                                | 68.1 ms: 1.10x faster                                        |
| sympy_integrate            | 21.4 ms                                                | 19.4 ms: 1.10x faster                                        |
| scimark_sor                | 129 ms                                                 | 118 ms: 1.09x faster                                         |
| django_template            | 34.6 ms                                                | 31.7 ms: 1.09x faster                                        |
| xml_etree_iterparse        | 107 ms                                                 | 98.4 ms: 1.09x faster                                        |
| generators                 | 31.2 ms                                                | 28.8 ms: 1.08x faster                                        |
| logging_silent             | 104 ns                                                 | 96.8 ns: 1.08x faster                                        |
| scimark_fft                | 382 ms                                                 | 357 ms: 1.07x faster                                         |
| scimark_sparse_mat_mult    | 5.06 ms                                                | 4.74 ms: 1.07x faster                                        |
| pprint_safe_repr           | 776 ms                                                 | 728 ms: 1.07x faster                                         |
| 2to3                       | 274 ms                                                 | 258 ms: 1.06x faster                                         |
| docutils                   | 2.77 sec                                               | 2.61 sec: 1.06x faster                                       |
| xml_etree_generate         | 89.2 ms                                                | 84.7 ms: 1.05x faster                                        |
| mdp                        | 2.63 sec                                               | 2.50 sec: 1.05x faster                                       |
| pprint_pformat             | 1.57 sec                                               | 1.49 sec: 1.05x faster                                       |
| unpickle_pure_python       | 230 us                                                 | 219 us: 1.05x faster                                         |
| xml_etree_process          | 61.7 ms                                                | 59.0 ms: 1.05x faster                                        |
| meteor_contest             | 112 ms                                                 | 107 ms: 1.05x faster                                         |
| richards                   | 45.8 ms                                                | 43.8 ms: 1.05x faster                                        |
| sympy_expand               | 478 ms                                                 | 458 ms: 1.04x faster                                         |
| mako                       | 11.9 ms                                                | 11.5 ms: 1.04x faster                                        |
| pyflate                    | 482 ms                                                 | 467 ms: 1.03x faster                                         |
| richards_super             | 51.5 ms                                                | 50.0 ms: 1.03x faster                                        |
| regex_effbot               | 3.61 ms                                                | 3.51 ms: 1.03x faster                                        |
| sqlite_synth               | 2.83 us                                                | 2.76 us: 1.03x faster                                        |
| pickle_pure_python         | 324 us                                                 | 316 us: 1.03x faster                                         |
| nqueens                    | 83.3 ms                                                | 81.7 ms: 1.02x faster                                        |
| hexiom                     | 6.41 ms                                                | 6.30 ms: 1.02x faster                                        |
| scimark_lu                 | 118 ms                                                 | 116 ms: 1.01x faster                                         |
| json                       | 5.26 ms                                                | 5.22 ms: 1.01x faster                                        |
| pidigits                   | 187 ms                                                 | 187 ms: 1.00x faster                                         |
| nbody                      | 97.0 ms                                                | 98.2 ms: 1.01x slower                                        |
| regex_v8                   | 23.1 ms                                                | 23.5 ms: 1.02x slower                                        |
| typing_runtime_protocols   | 158 us                                                 | 162 us: 1.02x slower                                         |
| fannkuch                   | 417 ms                                                 | 429 ms: 1.03x slower                                         |
| bench_thread_pool          | 842 us                                                 | 874 us: 1.04x slower                                         |
| json_loads                 | 28.5 us                                                | 29.7 us: 1.04x slower                                        |
| coroutines                 | 23.2 ms                                                | 24.4 ms: 1.05x slower                                        |
| regex_dna                  | 212 ms                                                 | 226 ms: 1.07x slower                                         |
| json_dumps                 | 10.4 ms                                                | 11.4 ms: 1.10x slower                                        |
| telco                      | 7.10 ms                                                | 7.82 ms: 1.10x slower                                        |
| python_startup_no_site     | 6.94 ms                                                | 8.20 ms: 1.18x slower                                        |
| coverage                   | 72.7 ms                                                | 91.4 ms: 1.26x slower                                        |
| gc_traversal               | 3.79 ms                                                | 4.99 ms: 1.31x slower                                        |
| python_startup             | 9.55 ms                                                | 13.1 ms: 1.37x slower                                        |
| create_gc_cycles           | 1.48 ms                                                | 2.49 ms: 1.68x slower                                        |
| bench_mp_pool              | 24.0 ms                                                | 83.1 ms: 3.46x slower                                        |
| Geometric mean             | (ref)                                                  | 1.09x faster                                                 |

Benchmark hidden because not significant (2): pycparser, asyncio_websockets
Ignored benchmarks (18) of results/bm-20231002-3.12.0-0fb18b0/bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (16) of results/bm-20250326-3.14.0a6+-50dd66b/bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b.json: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers, thrift

- Geometric mean (including insignificant results): 1.108x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.06x
- 95% likely to have a speedup of 1.05x
- 99% likely to have a speedup of 1.04x

# Memory
- memory change: 1.10x