# Results vs. base

- fork: iritkatriel
- ref: tuple
- machine: linux-x86_64
- commit hash: 50dd66b
- commit date: 2025-03-26
- overall geometric mean: 1.001x slower
- HPT reliability: 86.73%
- HPT 99th percentile: 1.00x slower
- Memory change: 1.00x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20250326-linux-x86_64-python-52b5eb95b770fa00ebbd-3.14.0a6+-52b5eb9 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| 2to3           | 258 ms                                                                 | 258 ms: 1.00x faster                                         |
| docutils       | 2.63 sec                                                               | 2.61 sec: 1.01x faster                                       |
| html5lib       | 61.9 ms                                                                | 63.2 ms: 1.02x slower                                        |
| Geometric mean | (ref)                                                                  | 1.00x slower                                                 |

Benchmark hidden because not significant (1): sphinx

Benchmarks with tag 'asyncio':
==============================

| Benchmark               | bm-20250326-linux-x86_64-python-52b5eb95b770fa00ebbd-3.14.0a6+-52b5eb9 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|-------------------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| async_tree_cpu_io_mixed | 487 ms                                                                 | 489 ms: 1.01x slower                                         |
| async_generators        | 389 ms                                                                 | 394 ms: 1.01x slower                                         |
| coroutines              | 23.5 ms                                                                | 24.4 ms: 1.04x slower                                        |
| Geometric mean          | (ref)                                                                  | 1.01x slower                                                 |

Benchmark hidden because not significant (8): asyncio_websockets, async_tree_cpu_io_mixed_tg, async_tree_memoization, async_tree_none, async_tree_memoization_tg, async_tree_io_tg, async_tree_none_tg, async_tree_io

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20250326-linux-x86_64-python-52b5eb95b770fa00ebbd-3.14.0a6+-52b5eb9 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| pidigits       | 186 ms                                                                 | 187 ms: 1.01x slower                                         |
| nbody          | 97.3 ms                                                                | 98.2 ms: 1.01x slower                                        |
| Geometric mean | (ref)                                                                  | 1.00x slower                                                 |

Benchmark hidden because not significant (1): float

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20250326-linux-x86_64-python-52b5eb95b770fa00ebbd-3.14.0a6+-52b5eb9 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| regex_compile  | 127 ms                                                                 | 126 ms: 1.00x faster                                         |
| regex_dna      | 224 ms                                                                 | 226 ms: 1.01x slower                                         |
| regex_effbot   | 3.47 ms                                                                | 3.51 ms: 1.01x slower                                        |
| regex_v8       | 23.0 ms                                                                | 23.5 ms: 1.02x slower                                        |
| Geometric mean | (ref)                                                                  | 1.01x slower                                                 |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20250326-linux-x86_64-python-52b5eb95b770fa00ebbd-3.14.0a6+-52b5eb9 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|----------------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| json_dumps           | 11.7 ms                                                                | 11.4 ms: 1.03x faster                                        |
| pickle_pure_python   | 319 us                                                                 | 316 us: 1.01x faster                                         |
| json_loads           | 30.0 us                                                                | 29.7 us: 1.01x faster                                        |
| xml_etree_iterparse  | 99.0 ms                                                                | 98.4 ms: 1.01x faster                                        |
| xml_etree_generate   | 85.2 ms                                                                | 84.7 ms: 1.01x faster                                        |
| xml_etree_process    | 59.3 ms                                                                | 59.0 ms: 1.01x faster                                        |
| unpickle_pure_python | 218 us                                                                 | 219 us: 1.00x slower                                         |
| tomli_loads          | 1.97 sec                                                               | 2.00 sec: 1.01x slower                                       |
| Geometric mean       | (ref)                                                                  | 1.01x faster                                                 |

Benchmark hidden because not significant (1): xml_etree_parse

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20250326-linux-x86_64-python-52b5eb95b770fa00ebbd-3.14.0a6+-52b5eb9 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|------------------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| python_startup_no_site | 8.19 ms                                                                | 8.20 ms: 1.00x slower                                        |
| python_startup         | 13.1 ms                                                                | 13.1 ms: 1.00x slower                                        |
| Geometric mean         | (ref)                                                                  | 1.00x slower                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20250326-linux-x86_64-python-52b5eb95b770fa00ebbd-3.14.0a6+-52b5eb9 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|-----------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| genshi_xml      | 50.0 ms                                                                | 49.2 ms: 1.02x faster                                        |
| genshi_text     | 21.4 ms                                                                | 21.2 ms: 1.01x faster                                        |
| django_template | 32.0 ms                                                                | 31.7 ms: 1.01x faster                                        |
| mako            | 11.3 ms                                                                | 11.5 ms: 1.02x slower                                        |
| Geometric mean  | (ref)                                                                  | 1.00x faster                                                 |

All benchmarks:
===============

| Benchmark               | bm-20250326-linux-x86_64-python-52b5eb95b770fa00ebbd-3.14.0a6+-52b5eb9 | bm-20250326-linux-x86_64-iritkatriel-tuple-3.14.0a6+-50dd66b |
|-------------------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| logging_silent          | 99.9 ns                                                                | 96.8 ns: 1.03x faster                                        |
| json_dumps              | 11.7 ms                                                                | 11.4 ms: 1.03x faster                                        |
| go                      | 117 ms                                                                 | 114 ms: 1.02x faster                                         |
| json                    | 5.32 ms                                                                | 5.22 ms: 1.02x faster                                        |
| richards_super          | 51.0 ms                                                                | 50.0 ms: 1.02x faster                                        |
| sqlglot_v2_parse        | 1.27 ms                                                                | 1.24 ms: 1.02x faster                                        |
| comprehensions          | 16.9 us                                                                | 16.6 us: 1.02x faster                                        |
| genshi_xml              | 50.0 ms                                                                | 49.2 ms: 1.02x faster                                        |
| richards                | 44.5 ms                                                                | 43.8 ms: 1.02x faster                                        |
| sqlglot_v2_transpile    | 1.58 ms                                                                | 1.56 ms: 1.01x faster                                        |
| telco                   | 7.93 ms                                                                | 7.82 ms: 1.01x faster                                        |
| scimark_sor             | 120 ms                                                                 | 118 ms: 1.01x faster                                         |
| nqueens                 | 82.7 ms                                                                | 81.7 ms: 1.01x faster                                        |
| genshi_text             | 21.4 ms                                                                | 21.2 ms: 1.01x faster                                        |
| pickle_pure_python      | 319 us                                                                 | 316 us: 1.01x faster                                         |
| django_template         | 32.0 ms                                                                | 31.7 ms: 1.01x faster                                        |
| json_loads              | 30.0 us                                                                | 29.7 us: 1.01x faster                                        |
| crypto_pyaes            | 74.5 ms                                                                | 73.9 ms: 1.01x faster                                        |
| docutils                | 2.63 sec                                                               | 2.61 sec: 1.01x faster                                       |
| xml_etree_iterparse     | 99.0 ms                                                                | 98.4 ms: 1.01x faster                                        |
| xml_etree_generate      | 85.2 ms                                                                | 84.7 ms: 1.01x faster                                        |
| xml_etree_process       | 59.3 ms                                                                | 59.0 ms: 1.01x faster                                        |
| sympy_integrate         | 19.5 ms                                                                | 19.4 ms: 1.01x faster                                        |
| create_gc_cycles        | 2.50 ms                                                                | 2.49 ms: 1.00x faster                                        |
| dulwich_log             | 58.1 ms                                                                | 57.9 ms: 1.00x faster                                        |
| regex_compile           | 127 ms                                                                 | 126 ms: 1.00x faster                                         |
| 2to3                    | 258 ms                                                                 | 258 ms: 1.00x faster                                         |
| python_startup_no_site  | 8.19 ms                                                                | 8.20 ms: 1.00x slower                                        |
| python_startup          | 13.1 ms                                                                | 13.1 ms: 1.00x slower                                        |
| bench_thread_pool       | 870 us                                                                 | 874 us: 1.00x slower                                         |
| deltablue               | 3.16 ms                                                                | 3.17 ms: 1.00x slower                                        |
| bpe_tokeniser           | 4.60 sec                                                               | 4.62 sec: 1.00x slower                                       |
| unpickle_pure_python    | 218 us                                                                 | 219 us: 1.00x slower                                         |
| pprint_pformat          | 1.49 sec                                                               | 1.49 sec: 1.01x slower                                       |
| meteor_contest          | 107 ms                                                                 | 107 ms: 1.01x slower                                         |
| async_tree_cpu_io_mixed | 487 ms                                                                 | 489 ms: 1.01x slower                                         |
| pidigits                | 186 ms                                                                 | 187 ms: 1.01x slower                                         |
| scimark_fft             | 355 ms                                                                 | 357 ms: 1.01x slower                                         |
| thrift                  | 772 us                                                                 | 778 us: 1.01x slower                                         |
| hexiom                  | 6.25 ms                                                                | 6.30 ms: 1.01x slower                                        |
| regex_dna               | 224 ms                                                                 | 226 ms: 1.01x slower                                         |
| mdp                     | 2.48 sec                                                               | 2.50 sec: 1.01x slower                                       |
| nbody                   | 97.3 ms                                                                | 98.2 ms: 1.01x slower                                        |
| generators              | 28.6 ms                                                                | 28.8 ms: 1.01x slower                                        |
| sqlglot_v2_normalize    | 105 ms                                                                 | 107 ms: 1.01x slower                                         |
| async_generators        | 389 ms                                                                 | 394 ms: 1.01x slower                                         |
| shortest_path           | 494 ms                                                                 | 501 ms: 1.01x slower                                         |
| regex_effbot            | 3.47 ms                                                                | 3.51 ms: 1.01x slower                                        |
| deepcopy_memo           | 29.3 us                                                                | 29.7 us: 1.01x slower                                        |
| tomli_loads             | 1.97 sec                                                               | 2.00 sec: 1.01x slower                                       |
| mako                    | 11.3 ms                                                                | 11.5 ms: 1.02x slower                                        |
| html5lib                | 61.9 ms                                                                | 63.2 ms: 1.02x slower                                        |
| connected_components    | 449 ms                                                                 | 458 ms: 1.02x slower                                         |
| regex_v8                | 23.0 ms                                                                | 23.5 ms: 1.02x slower                                        |
| fannkuch                | 418 ms                                                                 | 429 ms: 1.03x slower                                         |
| deepcopy_reduce         | 2.69 us                                                                | 2.77 us: 1.03x slower                                        |
| gc_traversal            | 4.84 ms                                                                | 4.99 ms: 1.03x slower                                        |
| coroutines              | 23.5 ms                                                                | 24.4 ms: 1.04x slower                                        |
| pyflate                 | 442 ms                                                                 | 467 ms: 1.06x slower                                         |
| Geometric mean          | (ref)                                                                  | 1.00x slower                                                 |

Benchmark hidden because not significant (37): coverage, scimark_lu, pycparser, logging_format, sphinx, pylint, sqlalchemy_imperative, sympy_sum, asyncio_websockets, pathlib, chaos, sqlalchemy_declarative, float, raytrace, deepcopy, scimark_monte_carlo, sqlglot_v2_optimize, sympy_str, subparsers, pprint_safe_repr, typing_runtime_protocols, logging_simple, sympy_expand, bench_mp_pool, async_tree_cpu_io_mixed_tg, async_tree_memoization, async_tree_none, many_optionals, sqlite_synth, async_tree_memoization_tg, scimark_sparse_mat_mult, async_tree_io_tg, spectral_norm, xml_etree_parse, async_tree_none_tg, async_tree_io, k_core

- Geometric mean (including insignificant results): 1.001x slower

# HPT report

- Reliability score: 86.73% likely to be slow
- 90% likely to have a slowdown of 1.00x
- 95% likely to have a slowdown of 1.00x
- 99% likely to have a slowdown of 1.00x

# Memory
- memory change: 1.00x