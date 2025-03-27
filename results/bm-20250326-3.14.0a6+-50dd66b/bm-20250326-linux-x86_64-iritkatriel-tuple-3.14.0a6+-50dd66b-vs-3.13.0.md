# Results vs. 3.13.0

- fork: iritkatriel
- ref: tuple
- machine: linux-x86_64
- commit hash: 50dd66b
- commit date: 2025-03-26
- overall geometric mean: 1.039x faster
- HPT reliability: 99.94%
- HPT 99th percentile: 1.00x faster
- Memory change: 1.03x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| 2to3           | 266 ms                                                 | 258 ms: 1.03x faster                                         |
| docutils       | 2.58 sec                                               | 2.61 sec: 1.01x slower                                       |
| sphinx         | 1.03 sec                                               | 1.01 sec: 1.02x faster                                       |
| Geometric mean | (ref)                                                  | 1.01x faster                                                 |

Benchmark hidden because not significant (1): html5lib

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| async_tree_memoization_tg  | 463 ms                                                 | 310 ms: 1.49x faster                                         |
| async_tree_io_tg           | 861 ms                                                 | 612 ms: 1.41x faster                                         |
| async_tree_memoization     | 437 ms                                                 | 311 ms: 1.40x faster                                         |
| async_tree_io              | 838 ms                                                 | 615 ms: 1.36x faster                                         |
| async_tree_none            | 350 ms                                                 | 257 ms: 1.36x faster                                         |
| async_tree_none_tg         | 319 ms                                                 | 248 ms: 1.29x faster                                         |
| async_tree_cpu_io_mixed    | 573 ms                                                 | 489 ms: 1.17x faster                                         |
| async_tree_cpu_io_mixed_tg | 543 ms                                                 | 471 ms: 1.15x faster                                         |
| async_generators           | 433 ms                                                 | 394 ms: 1.10x faster                                         |
| coroutines                 | 22.2 ms                                                | 24.4 ms: 1.10x slower                                        |
| Geometric mean             | (ref)                                                  | 1.23x faster                                                 |

Benchmark hidden because not significant (1): asyncio_websockets

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| float          | 78.7 ms                                                | 70.4 ms: 1.12x faster                                        |
| pidigits       | 186 ms                                                 | 187 ms: 1.00x slower                                         |
| nbody          | 87.7 ms                                                | 98.2 ms: 1.12x slower                                        |
| Geometric mean | (ref)                                                  | 1.00x slower                                                 |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| regex_v8       | 26.9 ms                                                | 23.5 ms: 1.14x faster                                        |
| regex_effbot   | 3.77 ms                                                | 3.51 ms: 1.07x faster                                        |
| regex_compile  | 132 ms                                                 | 126 ms: 1.04x faster                                         |
| regex_dna      | 220 ms                                                 | 226 ms: 1.03x slower                                         |
| Geometric mean | (ref)                                                  | 1.06x faster                                                 |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| xml_etree_parse      | 154 ms                                                 | 143 ms: 1.08x faster                                         |
| tomli_loads          | 2.12 sec                                               | 2.00 sec: 1.06x faster                                       |
| xml_etree_iterparse  | 101 ms                                                 | 98.4 ms: 1.03x faster                                        |
| xml_etree_process    | 60.5 ms                                                | 59.0 ms: 1.03x faster                                        |
| xml_etree_generate   | 86.8 ms                                                | 84.7 ms: 1.03x faster                                        |
| unpickle_pure_python | 213 us                                                 | 219 us: 1.03x slower                                         |
| pickle_pure_python   | 302 us                                                 | 316 us: 1.04x slower                                         |
| json_loads           | 27.2 us                                                | 29.7 us: 1.09x slower                                        |
| json_dumps           | 10.1 ms                                                | 11.4 ms: 1.12x slower                                        |
| Geometric mean       | (ref)                                                  | 1.01x slower                                                 |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| python_startup         | 12.7 ms                                                | 13.1 ms: 1.04x slower                                        |
| python_startup_no_site | 7.00 ms                                                | 8.20 ms: 1.17x slower                                        |
| Geometric mean         | (ref)                                                  | 1.10x slower                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| genshi_text    | 22.6 ms                                                | 21.2 ms: 1.07x faster                                        |
| genshi_xml     | 50.5 ms                                                | 49.2 ms: 1.03x faster                                        |
| mako           | 10.7 ms                                                | 11.5 ms: 1.08x slower                                        |
| Geometric mean | (ref)                                                  | 1.00x faster                                                 |

Benchmark hidden because not significant (1): django_template

All benchmarks:
===============

| Benchmark                  | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| async_tree_memoization_tg  | 463 ms                                                 | 310 ms: 1.49x faster                                         |
| async_tree_io_tg           | 861 ms                                                 | 612 ms: 1.41x faster                                         |
| async_tree_memoization     | 437 ms                                                 | 311 ms: 1.40x faster                                         |
| deepcopy                   | 354 us                                                 | 259 us: 1.37x faster                                         |
| async_tree_io              | 838 ms                                                 | 615 ms: 1.36x faster                                         |
| async_tree_none            | 350 ms                                                 | 257 ms: 1.36x faster                                         |
| deepcopy_memo              | 38.4 us                                                | 29.7 us: 1.29x faster                                        |
| async_tree_none_tg         | 319 ms                                                 | 248 ms: 1.29x faster                                         |
| go                         | 141 ms                                                 | 114 ms: 1.23x faster                                         |
| async_tree_cpu_io_mixed    | 573 ms                                                 | 489 ms: 1.17x faster                                         |
| deepcopy_reduce            | 3.24 us                                                | 2.77 us: 1.17x faster                                        |
| async_tree_cpu_io_mixed_tg | 543 ms                                                 | 471 ms: 1.15x faster                                         |
| regex_v8                   | 26.9 ms                                                | 23.5 ms: 1.14x faster                                        |
| spectral_norm              | 113 ms                                                 | 99.5 ms: 1.14x faster                                        |
| pylint                     | 312 ms                                                 | 275 ms: 1.13x faster                                         |
| float                      | 78.7 ms                                                | 70.4 ms: 1.12x faster                                        |
| dulwich_log                | 64.6 ms                                                | 57.9 ms: 1.12x faster                                        |
| async_generators           | 433 ms                                                 | 394 ms: 1.10x faster                                         |
| richards                   | 47.5 ms                                                | 43.8 ms: 1.08x faster                                        |
| xml_etree_parse            | 154 ms                                                 | 143 ms: 1.08x faster                                         |
| telco                      | 8.40 ms                                                | 7.82 ms: 1.07x faster                                        |
| richards_super             | 53.7 ms                                                | 50.0 ms: 1.07x faster                                        |
| regex_effbot               | 3.77 ms                                                | 3.51 ms: 1.07x faster                                        |
| genshi_text                | 22.6 ms                                                | 21.2 ms: 1.07x faster                                        |
| scimark_sparse_mat_mult    | 5.03 ms                                                | 4.74 ms: 1.06x faster                                        |
| tomli_loads                | 2.12 sec                                               | 2.00 sec: 1.06x faster                                       |
| sqlite_synth               | 2.90 us                                                | 2.76 us: 1.05x faster                                        |
| regex_compile              | 132 ms                                                 | 126 ms: 1.04x faster                                         |
| logging_silent             | 101 ns                                                 | 96.8 ns: 1.04x faster                                        |
| pathlib                    | 17.4 ms                                                | 16.7 ms: 1.04x faster                                        |
| scimark_sor                | 122 ms                                                 | 118 ms: 1.03x faster                                         |
| 2to3                       | 266 ms                                                 | 258 ms: 1.03x faster                                         |
| k_core                     | 2.37 sec                                               | 2.30 sec: 1.03x faster                                       |
| xml_etree_iterparse        | 101 ms                                                 | 98.4 ms: 1.03x faster                                        |
| thrift                     | 800 us                                                 | 778 us: 1.03x faster                                         |
| scimark_fft                | 367 ms                                                 | 357 ms: 1.03x faster                                         |
| xml_etree_process          | 60.5 ms                                                | 59.0 ms: 1.03x faster                                        |
| xml_etree_generate         | 86.8 ms                                                | 84.7 ms: 1.03x faster                                        |
| genshi_xml                 | 50.5 ms                                                | 49.2 ms: 1.03x faster                                        |
| pycparser                  | 1.20 sec                                               | 1.17 sec: 1.02x faster                                       |
| json                       | 5.32 ms                                                | 5.22 ms: 1.02x faster                                        |
| sympy_integrate            | 19.8 ms                                                | 19.4 ms: 1.02x faster                                        |
| sqlalchemy_declarative     | 133 ms                                                 | 130 ms: 1.02x faster                                         |
| sphinx                     | 1.03 sec                                               | 1.01 sec: 1.02x faster                                       |
| logging_format             | 6.23 us                                                | 6.13 us: 1.02x faster                                        |
| sympy_str                  | 273 ms                                                 | 269 ms: 1.02x faster                                         |
| logging_simple             | 5.65 us                                                | 5.57 us: 1.02x faster                                        |
| mdp                        | 2.54 sec                                               | 2.50 sec: 1.02x faster                                       |
| bpe_tokeniser              | 4.69 sec                                               | 4.62 sec: 1.01x faster                                       |
| sympy_sum                  | 150 ms                                                 | 148 ms: 1.01x faster                                         |
| sqlalchemy_imperative      | 16.9 ms                                                | 16.7 ms: 1.01x faster                                        |
| crypto_pyaes               | 74.7 ms                                                | 73.9 ms: 1.01x faster                                        |
| meteor_contest             | 108 ms                                                 | 107 ms: 1.01x faster                                         |
| deltablue                  | 3.19 ms                                                | 3.17 ms: 1.01x faster                                        |
| pyflate                    | 470 ms                                                 | 467 ms: 1.01x faster                                         |
| pidigits                   | 186 ms                                                 | 187 ms: 1.00x slower                                         |
| sympy_expand               | 456 ms                                                 | 458 ms: 1.01x slower                                         |
| comprehensions             | 16.5 us                                                | 16.6 us: 1.01x slower                                        |
| typing_runtime_protocols   | 160 us                                                 | 162 us: 1.01x slower                                         |
| nqueens                    | 80.9 ms                                                | 81.7 ms: 1.01x slower                                        |
| pprint_pformat             | 1.48 sec                                               | 1.49 sec: 1.01x slower                                       |
| docutils                   | 2.58 sec                                               | 2.61 sec: 1.01x slower                                       |
| chaos                      | 58.0 ms                                                | 58.7 ms: 1.01x slower                                        |
| raytrace                   | 262 ms                                                 | 265 ms: 1.01x slower                                         |
| create_gc_cycles           | 2.45 ms                                                | 2.49 ms: 1.02x slower                                        |
| scimark_lu                 | 114 ms                                                 | 116 ms: 1.02x slower                                         |
| gc_traversal               | 4.90 ms                                                | 4.99 ms: 1.02x slower                                        |
| scimark_monte_carlo        | 66.8 ms                                                | 68.1 ms: 1.02x slower                                        |
| connected_components       | 447 ms                                                 | 458 ms: 1.03x slower                                         |
| regex_dna                  | 220 ms                                                 | 226 ms: 1.03x slower                                         |
| shortest_path              | 487 ms                                                 | 501 ms: 1.03x slower                                         |
| unpickle_pure_python       | 213 us                                                 | 219 us: 1.03x slower                                         |
| python_startup             | 12.7 ms                                                | 13.1 ms: 1.04x slower                                        |
| hexiom                     | 6.08 ms                                                | 6.30 ms: 1.04x slower                                        |
| pickle_pure_python         | 302 us                                                 | 316 us: 1.04x slower                                         |
| bench_thread_pool          | 818 us                                                 | 874 us: 1.07x slower                                         |
| mako                       | 10.7 ms                                                | 11.5 ms: 1.08x slower                                        |
| fannkuch                   | 394 ms                                                 | 429 ms: 1.09x slower                                         |
| json_loads                 | 27.2 us                                                | 29.7 us: 1.09x slower                                        |
| coroutines                 | 22.2 ms                                                | 24.4 ms: 1.10x slower                                        |
| coverage                   | 82.8 ms                                                | 91.4 ms: 1.10x slower                                        |
| many_optionals             | 857 us                                                 | 953 us: 1.11x slower                                         |
| nbody                      | 87.7 ms                                                | 98.2 ms: 1.12x slower                                        |
| json_dumps                 | 10.1 ms                                                | 11.4 ms: 1.12x slower                                        |
| python_startup_no_site     | 7.00 ms                                                | 8.20 ms: 1.17x slower                                        |
| subparsers                 | 15.5 ms                                                | 20.8 ms: 1.35x slower                                        |
| bench_mp_pool              | 24.0 ms                                                | 83.1 ms: 3.46x slower                                        |
| Geometric mean             | (ref)                                                  | 1.02x faster                                                 |

Benchmark hidden because not significant (5): html5lib, asyncio_websockets, django_template, pprint_safe_repr, generators
Ignored benchmarks (9) of results/bm-20241007-3.13.0-60403a5/bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5.json: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
Ignored benchmarks (4) of results/bm-20250326-3.14.0a6+-50dd66b/bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b.json: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile

- Geometric mean (including insignificant results): 1.039x faster

# HPT report

- Reliability score: 99.94% likely to be faster
- 90% likely to have a speedup of 1.01x
- 95% likely to have a speedup of 1.00x
- 99% likely to have a speedup of 1.00x

# Memory
- memory change: 1.03x