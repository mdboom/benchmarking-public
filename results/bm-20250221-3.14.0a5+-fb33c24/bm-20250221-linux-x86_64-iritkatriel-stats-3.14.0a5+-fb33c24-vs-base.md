# Results vs. base

- fork: iritkatriel
- ref: stats
- machine: linux-x86_64
- commit hash: fb33c24
- commit date: 2025-02-21
- overall geometric mean: 1.001x slower
- HPT reliability: 77.50%
- HPT 99th percentile: 1.00x faster
- Memory change: 0.99x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20250221-linux-x86_64-python-5d66c55c8ad0a0aeff8d-3.14.0a5+-5d66c55 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| 2to3           | 253 ms                                                                 | 254 ms: 1.00x slower                                         |
| docutils       | 2.56 sec                                                               | 2.59 sec: 1.01x slower                                       |
| html5lib       | 59.8 ms                                                                | 60.6 ms: 1.01x slower                                        |
| Geometric mean | (ref)                                                                  | 1.01x slower                                                 |

Benchmark hidden because not significant (1): sphinx

Benchmarks with tag 'asyncio':
==============================

| Benchmark        | bm-20250221-linux-x86_64-python-5d66c55c8ad0a0aeff8d-3.14.0a5+-5d66c55 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|------------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| coroutines       | 23.5 ms                                                                | 23.0 ms: 1.02x faster                                        |
| async_generators | 389 ms                                                                 | 384 ms: 1.01x faster                                         |
| Geometric mean   | (ref)                                                                  | 1.00x faster                                                 |

Benchmark hidden because not significant (9): async_tree_memoization_tg, async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization, async_tree_cpu_io_mixed, asyncio_websockets, async_tree_none_tg, async_tree_none, async_tree_io

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20250221-linux-x86_64-python-5d66c55c8ad0a0aeff8d-3.14.0a5+-5d66c55 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| nbody          | 93.6 ms                                                                | 90.3 ms: 1.04x faster                                        |
| Geometric mean | (ref)                                                                  | 1.01x faster                                                 |

Benchmark hidden because not significant (2): float, pidigits

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20250221-linux-x86_64-python-5d66c55c8ad0a0aeff8d-3.14.0a5+-5d66c55 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| regex_dna      | 216 ms                                                                 | 213 ms: 1.02x faster                                         |
| regex_v8       | 25.4 ms                                                                | 25.6 ms: 1.01x slower                                        |
| regex_effbot   | 3.06 ms                                                                | 3.37 ms: 1.10x slower                                        |
| Geometric mean | (ref)                                                                  | 1.02x slower                                                 |

Benchmark hidden because not significant (1): regex_compile

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20250221-linux-x86_64-python-5d66c55c8ad0a0aeff8d-3.14.0a5+-5d66c55 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| tomli_loads          | 1.96 sec                                                               | 1.90 sec: 1.03x faster                                       |
| json_dumps           | 11.5 ms                                                                | 11.3 ms: 1.02x faster                                        |
| json_loads           | 30.0 us                                                                | 29.7 us: 1.01x faster                                        |
| pickle_pure_python   | 315 us                                                                 | 316 us: 1.00x slower                                         |
| xml_etree_generate   | 84.0 ms                                                                | 84.5 ms: 1.01x slower                                        |
| unpickle_pure_python | 219 us                                                                 | 221 us: 1.01x slower                                         |
| xml_etree_process    | 58.6 ms                                                                | 59.1 ms: 1.01x slower                                        |
| Geometric mean       | (ref)                                                                  | 1.00x faster                                                 |

Benchmark hidden because not significant (2): xml_etree_parse, xml_etree_iterparse

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20250221-linux-x86_64-python-5d66c55c8ad0a0aeff8d-3.14.0a5+-5d66c55 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|------------------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| python_startup_no_site | 7.07 ms                                                                | 7.05 ms: 1.00x faster                                        |
| python_startup         | 12.9 ms                                                                | 12.9 ms: 1.00x faster                                        |
| Geometric mean         | (ref)                                                                  | 1.00x faster                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark      | bm-20250221-linux-x86_64-python-5d66c55c8ad0a0aeff8d-3.14.0a5+-5d66c55 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| genshi_text    | 21.5 ms                                                                | 21.2 ms: 1.02x faster                                        |
| mako           | 11.0 ms                                                                | 10.8 ms: 1.02x faster                                        |
| Geometric mean | (ref)                                                                  | 1.01x faster                                                 |

Benchmark hidden because not significant (2): django_template, genshi_xml

All benchmarks:
===============

| Benchmark                | bm-20250221-linux-x86_64-python-5d66c55c8ad0a0aeff8d-3.14.0a5+-5d66c55 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|--------------------------|:----------------------------------------------------------------------:|:------------------------------------------------------------:|
| nbody                    | 93.6 ms                                                                | 90.3 ms: 1.04x faster                                        |
| tomli_loads              | 1.96 sec                                                               | 1.90 sec: 1.03x faster                                       |
| nqueens                  | 83.3 ms                                                                | 81.0 ms: 1.03x faster                                        |
| coroutines               | 23.5 ms                                                                | 23.0 ms: 1.02x faster                                        |
| meteor_contest           | 108 ms                                                                 | 106 ms: 1.02x faster                                         |
| genshi_text              | 21.5 ms                                                                | 21.2 ms: 1.02x faster                                        |
| json_dumps               | 11.5 ms                                                                | 11.3 ms: 1.02x faster                                        |
| mako                     | 11.0 ms                                                                | 10.8 ms: 1.02x faster                                        |
| regex_dna                | 216 ms                                                                 | 213 ms: 1.02x faster                                         |
| logging_simple           | 5.58 us                                                                | 5.49 us: 1.02x faster                                        |
| typing_runtime_protocols | 159 us                                                                 | 157 us: 1.01x faster                                         |
| async_generators         | 389 ms                                                                 | 384 ms: 1.01x faster                                         |
| spectral_norm            | 98.0 ms                                                                | 96.9 ms: 1.01x faster                                        |
| sqlglot_normalize        | 105 ms                                                                 | 104 ms: 1.01x faster                                         |
| crypto_pyaes             | 72.8 ms                                                                | 72.0 ms: 1.01x faster                                        |
| hexiom                   | 6.15 ms                                                                | 6.09 ms: 1.01x faster                                        |
| sympy_str                | 267 ms                                                                 | 264 ms: 1.01x faster                                         |
| sympy_expand             | 454 ms                                                                 | 450 ms: 1.01x faster                                         |
| pathlib                  | 16.9 ms                                                                | 16.7 ms: 1.01x faster                                        |
| pprint_pformat           | 1.47 sec                                                               | 1.45 sec: 1.01x faster                                       |
| json_loads               | 30.0 us                                                                | 29.7 us: 1.01x faster                                        |
| sympy_integrate          | 19.7 ms                                                                | 19.6 ms: 1.01x faster                                        |
| scimark_fft              | 343 ms                                                                 | 341 ms: 1.01x faster                                         |
| sqlglot_optimize         | 52.6 ms                                                                | 52.2 ms: 1.01x faster                                        |
| thrift                   | 758 us                                                                 | 754 us: 1.01x faster                                         |
| sqlalchemy_imperative    | 16.4 ms                                                                | 16.3 ms: 1.00x faster                                        |
| deepcopy                 | 255 us                                                                 | 254 us: 1.00x faster                                         |
| dulwich_log              | 64.8 ms                                                                | 64.6 ms: 1.00x faster                                        |
| pprint_safe_repr         | 714 ms                                                                 | 712 ms: 1.00x faster                                         |
| python_startup_no_site   | 7.07 ms                                                                | 7.05 ms: 1.00x faster                                        |
| python_startup           | 12.9 ms                                                                | 12.9 ms: 1.00x faster                                        |
| 2to3                     | 253 ms                                                                 | 254 ms: 1.00x slower                                         |
| many_optionals           | 934 us                                                                 | 937 us: 1.00x slower                                         |
| pickle_pure_python       | 315 us                                                                 | 316 us: 1.00x slower                                         |
| generators               | 27.9 ms                                                                | 28.0 ms: 1.00x slower                                        |
| richards_super           | 50.3 ms                                                                | 50.5 ms: 1.00x slower                                        |
| deepcopy_reduce          | 2.65 us                                                                | 2.67 us: 1.01x slower                                        |
| logging_silent           | 102 ns                                                                 | 102 ns: 1.01x slower                                         |
| xml_etree_generate       | 84.0 ms                                                                | 84.5 ms: 1.01x slower                                        |
| create_gc_cycles         | 2.45 ms                                                                | 2.46 ms: 1.01x slower                                        |
| unpickle_pure_python     | 219 us                                                                 | 221 us: 1.01x slower                                         |
| sqlglot_transpile        | 1.55 ms                                                                | 1.57 ms: 1.01x slower                                        |
| go                       | 115 ms                                                                 | 116 ms: 1.01x slower                                         |
| regex_v8                 | 25.4 ms                                                                | 25.6 ms: 1.01x slower                                        |
| docutils                 | 2.56 sec                                                               | 2.59 sec: 1.01x slower                                       |
| xml_etree_process        | 58.6 ms                                                                | 59.1 ms: 1.01x slower                                        |
| richards                 | 43.7 ms                                                                | 44.1 ms: 1.01x slower                                        |
| scimark_sparse_mat_mult  | 4.75 ms                                                                | 4.80 ms: 1.01x slower                                        |
| chaos                    | 58.3 ms                                                                | 58.9 ms: 1.01x slower                                        |
| scimark_sor              | 120 ms                                                                 | 121 ms: 1.01x slower                                         |
| deltablue                | 3.14 ms                                                                | 3.18 ms: 1.01x slower                                        |
| scimark_lu               | 116 ms                                                                 | 117 ms: 1.01x slower                                         |
| html5lib                 | 59.8 ms                                                                | 60.6 ms: 1.01x slower                                        |
| sqlglot_parse            | 1.24 ms                                                                | 1.26 ms: 1.01x slower                                        |
| comprehensions           | 16.3 us                                                                | 16.6 us: 1.01x slower                                        |
| scimark_monte_carlo      | 67.1 ms                                                                | 68.1 ms: 1.01x slower                                        |
| subparsers               | 20.4 ms                                                                | 20.7 ms: 1.01x slower                                        |
| gc_traversal             | 4.79 ms                                                                | 4.96 ms: 1.04x slower                                        |
| pyflate                  | 433 ms                                                                 | 450 ms: 1.04x slower                                         |
| pycparser                | 1.11 sec                                                               | 1.16 sec: 1.05x slower                                       |
| regex_effbot             | 3.06 ms                                                                | 3.37 ms: 1.10x slower                                        |
| Geometric mean           | (ref)                                                                  | 1.00x slower                                                 |

Benchmark hidden because not significant (35): k_core, async_tree_memoization_tg, connected_components, pylint, shortest_path, async_tree_cpu_io_mixed_tg, float, mdp, django_template, bpe_tokeniser, logging_format, async_tree_io_tg, async_tree_memoization, regex_compile, genshi_xml, json, xml_etree_parse, raytrace, sympy_sum, fannkuch, bench_mp_pool, sqlite_synth, coverage, pidigits, bench_thread_pool, async_tree_cpu_io_mixed, sqlalchemy_declarative, asyncio_websockets, async_tree_none_tg, deepcopy_memo, telco, async_tree_none, xml_etree_iterparse, async_tree_io, sphinx

- Geometric mean (including insignificant results): 1.001x slower

# HPT report

- Reliability score: 77.50% likely to be faster
- 90% likely to have a speedup of 1.00x
- 95% likely to have a speedup of 1.00x
- 99% likely to have a speedup of 1.00x

# Memory
- memory change: 0.99x