# Results vs. 3.10.4

- fork: iritkatriel
- ref: tuple
- machine: linux-x86_64
- commit hash: 50dd66b
- commit date: 2025-03-26
- overall geometric mean: 1.435x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.30x faster
- Memory change: 1.28x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| 2to3           | 348 ms                                                 | 258 ms: 1.35x faster                                         |
| docutils       | 3.30 sec                                               | 2.61 sec: 1.26x faster                                       |
| html5lib       | 88.9 ms                                                | 63.2 ms: 1.41x faster                                        |
| Geometric mean | (ref)                                                  | 1.34x faster                                                 |

Benchmarks with tag 'asyncio':
==============================

| Benchmark               | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|-------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| async_tree_io           | 1.77 sec                                               | 615 ms: 2.87x faster                                         |
| async_tree_none         | 728 ms                                                 | 257 ms: 2.83x faster                                         |
| async_tree_memoization  | 870 ms                                                 | 311 ms: 2.79x faster                                         |
| async_tree_cpu_io_mixed | 1.02 sec                                               | 489 ms: 2.08x faster                                         |
| Geometric mean          | (ref)                                                  | 2.62x faster                                                 |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| float          | 117 ms                                                 | 70.4 ms: 1.66x faster                                        |
| nbody          | 154 ms                                                 | 98.2 ms: 1.56x faster                                        |
| pidigits       | 191 ms                                                 | 187 ms: 1.02x faster                                         |
| Geometric mean | (ref)                                                  | 1.38x faster                                                 |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| regex_compile  | 188 ms                                                 | 126 ms: 1.49x faster                                         |
| regex_v8       | 27.8 ms                                                | 23.5 ms: 1.18x faster                                        |
| regex_effbot   | 3.63 ms                                                | 3.51 ms: 1.03x faster                                        |
| regex_dna      | 227 ms                                                 | 226 ms: 1.00x faster                                         |
| Geometric mean | (ref)                                                  | 1.16x faster                                                 |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| tomli_loads          | 3.14 sec                                               | 2.00 sec: 1.57x faster                                       |
| pickle_pure_python   | 484 us                                                 | 316 us: 1.54x faster                                         |
| unpickle_pure_python | 331 us                                                 | 219 us: 1.51x faster                                         |
| xml_etree_process    | 79.1 ms                                                | 59.0 ms: 1.34x faster                                        |
| json_dumps           | 14.2 ms                                                | 11.4 ms: 1.25x faster                                        |
| xml_etree_parse      | 168 ms                                                 | 143 ms: 1.18x faster                                         |
| xml_etree_generate   | 99.4 ms                                                | 84.7 ms: 1.17x faster                                        |
| xml_etree_iterparse  | 115 ms                                                 | 98.4 ms: 1.17x faster                                        |
| json_loads           | 31.2 us                                                | 29.7 us: 1.05x faster                                        |
| Geometric mean       | (ref)                                                  | 1.30x faster                                                 |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| python_startup         | 14.6 ms                                                | 13.1 ms: 1.11x faster                                        |
| python_startup_no_site | 5.93 ms                                                | 8.20 ms: 1.38x slower                                        |
| Geometric mean         | (ref)                                                  | 1.11x slower                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|-----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| django_template | 48.2 ms                                                | 31.7 ms: 1.52x faster                                        |
| genshi_text     | 31.8 ms                                                | 21.2 ms: 1.50x faster                                        |
| mako            | 16.3 ms                                                | 11.5 ms: 1.42x faster                                        |
| genshi_xml      | 66.0 ms                                                | 49.2 ms: 1.34x faster                                        |
| Geometric mean  | (ref)                                                  | 1.45x faster                                                 |

All benchmarks:
===============

| Benchmark                | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|--------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| typing_runtime_protocols | 544 us                                                 | 162 us: 3.37x faster                                         |
| async_tree_io            | 1.77 sec                                               | 615 ms: 2.87x faster                                         |
| async_tree_none          | 728 ms                                                 | 257 ms: 2.83x faster                                         |
| async_tree_memoization   | 870 ms                                                 | 311 ms: 2.79x faster                                         |
| generators               | 80.1 ms                                                | 28.8 ms: 2.78x faster                                        |
| deltablue                | 7.91 ms                                                | 3.17 ms: 2.50x faster                                        |
| go                       | 240 ms                                                 | 114 ms: 2.10x faster                                         |
| async_tree_cpu_io_mixed  | 1.02 sec                                               | 489 ms: 2.08x faster                                         |
| pylint                   | 551 ms                                                 | 275 ms: 2.00x faster                                         |
| deepcopy_memo            | 58.5 us                                                | 29.7 us: 1.97x faster                                        |
| chaos                    | 115 ms                                                 | 58.7 ms: 1.97x faster                                        |
| logging_silent           | 190 ns                                                 | 96.8 ns: 1.96x faster                                        |
| raytrace                 | 507 ms                                                 | 265 ms: 1.91x faster                                         |
| richards_super           | 94.7 ms                                                | 50.0 ms: 1.89x faster                                        |
| scimark_sor              | 220 ms                                                 | 118 ms: 1.86x faster                                         |
| deepcopy                 | 479 us                                                 | 259 us: 1.85x faster                                         |
| richards                 | 79.3 ms                                                | 43.8 ms: 1.81x faster                                        |
| scimark_monte_carlo      | 118 ms                                                 | 68.1 ms: 1.74x faster                                        |
| comprehensions           | 28.8 us                                                | 16.6 us: 1.73x faster                                        |
| crypto_pyaes             | 128 ms                                                 | 73.9 ms: 1.73x faster                                        |
| spectral_norm            | 170 ms                                                 | 99.5 ms: 1.71x faster                                        |
| float                    | 117 ms                                                 | 70.4 ms: 1.66x faster                                        |
| hexiom                   | 10.4 ms                                                | 6.30 ms: 1.65x faster                                        |
| tomli_loads              | 3.14 sec                                               | 2.00 sec: 1.57x faster                                       |
| nbody                    | 154 ms                                                 | 98.2 ms: 1.56x faster                                        |
| pickle_pure_python       | 484 us                                                 | 316 us: 1.54x faster                                         |
| pyflate                  | 716 ms                                                 | 467 ms: 1.53x faster                                         |
| django_template          | 48.2 ms                                                | 31.7 ms: 1.52x faster                                        |
| scimark_lu               | 176 ms                                                 | 116 ms: 1.51x faster                                         |
| unpickle_pure_python     | 331 us                                                 | 219 us: 1.51x faster                                         |
| deepcopy_reduce          | 4.17 us                                                | 2.77 us: 1.51x faster                                        |
| genshi_text              | 31.8 ms                                                | 21.2 ms: 1.50x faster                                        |
| logging_simple           | 8.30 us                                                | 5.57 us: 1.49x faster                                        |
| regex_compile            | 188 ms                                                 | 126 ms: 1.49x faster                                         |
| logging_format           | 9.09 us                                                | 6.13 us: 1.48x faster                                        |
| dulwich_log              | 84.3 ms                                                | 57.9 ms: 1.46x faster                                        |
| coroutines               | 35.1 ms                                                | 24.4 ms: 1.44x faster                                        |
| mako                     | 16.3 ms                                                | 11.5 ms: 1.42x faster                                        |
| pprint_pformat           | 2.10 sec                                               | 1.49 sec: 1.41x faster                                       |
| html5lib                 | 88.9 ms                                                | 63.2 ms: 1.41x faster                                        |
| pprint_safe_repr         | 1.02 sec                                               | 728 ms: 1.40x faster                                         |
| sqlalchemy_imperative    | 23.3 ms                                                | 16.7 ms: 1.40x faster                                        |
| thrift                   | 1.07 ms                                                | 778 us: 1.38x faster                                         |
| scimark_sparse_mat_mult  | 6.47 ms                                                | 4.74 ms: 1.37x faster                                        |
| 2to3                     | 348 ms                                                 | 258 ms: 1.35x faster                                         |
| pycparser                | 1.58 sec                                               | 1.17 sec: 1.35x faster                                       |
| xml_etree_process        | 79.1 ms                                                | 59.0 ms: 1.34x faster                                        |
| genshi_xml               | 66.0 ms                                                | 49.2 ms: 1.34x faster                                        |
| sympy_integrate          | 25.8 ms                                                | 19.4 ms: 1.33x faster                                        |
| sympy_sum                | 196 ms                                                 | 148 ms: 1.32x faster                                         |
| sqlalchemy_declarative   | 172 ms                                                 | 130 ms: 1.32x faster                                         |
| scimark_fft              | 466 ms                                                 | 357 ms: 1.30x faster                                         |
| nqueens                  | 106 ms                                                 | 81.7 ms: 1.30x faster                                        |
| sympy_str                | 346 ms                                                 | 269 ms: 1.29x faster                                         |
| docutils                 | 3.30 sec                                               | 2.61 sec: 1.26x faster                                       |
| json_dumps               | 14.2 ms                                                | 11.4 ms: 1.25x faster                                        |
| fannkuch                 | 532 ms                                                 | 429 ms: 1.24x faster                                         |
| sympy_expand             | 566 ms                                                 | 458 ms: 1.23x faster                                         |
| pathlib                  | 20.5 ms                                                | 16.7 ms: 1.23x faster                                        |
| regex_v8                 | 27.8 ms                                                | 23.5 ms: 1.18x faster                                        |
| xml_etree_parse          | 168 ms                                                 | 143 ms: 1.18x faster                                         |
| xml_etree_generate       | 99.4 ms                                                | 84.7 ms: 1.17x faster                                        |
| xml_etree_iterparse      | 115 ms                                                 | 98.4 ms: 1.17x faster                                        |
| mdp                      | 2.85 sec                                               | 2.50 sec: 1.14x faster                                       |
| bench_thread_pool        | 986 us                                                 | 874 us: 1.13x faster                                         |
| async_generators         | 444 ms                                                 | 394 ms: 1.13x faster                                         |
| meteor_contest           | 120 ms                                                 | 107 ms: 1.11x faster                                         |
| python_startup           | 14.6 ms                                                | 13.1 ms: 1.11x faster                                        |
| sqlite_synth             | 3.02 us                                                | 2.76 us: 1.10x faster                                        |
| json                     | 5.69 ms                                                | 5.22 ms: 1.09x faster                                        |
| json_loads               | 31.2 us                                                | 29.7 us: 1.05x faster                                        |
| regex_effbot             | 3.63 ms                                                | 3.51 ms: 1.03x faster                                        |
| pidigits                 | 191 ms                                                 | 187 ms: 1.02x faster                                         |
| asyncio_websockets       | 559 ms                                                 | 551 ms: 1.01x faster                                         |
| regex_dna                | 227 ms                                                 | 226 ms: 1.00x faster                                         |
| telco                    | 7.27 ms                                                | 7.82 ms: 1.08x slower                                        |
| coverage                 | 79.4 ms                                                | 91.4 ms: 1.15x slower                                        |
| gc_traversal             | 3.62 ms                                                | 4.99 ms: 1.38x slower                                        |
| python_startup_no_site   | 5.93 ms                                                | 8.20 ms: 1.38x slower                                        |
| create_gc_cycles         | 1.62 ms                                                | 2.49 ms: 1.54x slower                                        |
| bench_mp_pool            | 24.0 ms                                                | 83.1 ms: 3.46x slower                                        |
| Geometric mean           | (ref)                                                  | 1.41x faster                                                 |
Ignored benchmarks (20) of results/bm-20220323-3.10.4-9d38120/bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, djangocms, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (15) of results/bm-20250326-3.14.0a6+-50dd66b/bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b.json: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers

- Geometric mean (including insignificant results): 1.435x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.34x
- 95% likely to have a speedup of 1.32x
- 99% likely to have a speedup of 1.30x

# Memory
- memory change: 1.28x