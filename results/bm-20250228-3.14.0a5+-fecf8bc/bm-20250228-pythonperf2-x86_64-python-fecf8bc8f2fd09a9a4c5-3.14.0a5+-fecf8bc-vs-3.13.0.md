# Results vs. 3.13.0

- fork: python
- ref: fecf8bc8f2fd09a9a4c5
- machine: linux-x86_64
- commit hash: fecf8bc
- commit date: 2025-02-28
- overall geometric mean: 1.049x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.01x faster
- Memory change: 1.02x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20241007-pythonperf2-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250228-pythonperf2-x86_64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5+-fecf8bc |
|----------------|:------------------------------------------------------------:|:----------------------------------------------------------------------------:|
| 2to3           | 293 ms                                                       | 284 ms: 1.03x faster                                                         |
| docutils       | 2.83 sec                                                     | 2.87 sec: 1.02x slower                                                       |
| html5lib       | 73.5 ms                                                      | 68.7 ms: 1.07x faster                                                        |
| sphinx         | 1.12 sec                                                     | 1.10 sec: 1.02x faster                                                       |
| Geometric mean | (ref)                                                        | 1.03x faster                                                                 |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20241007-pythonperf2-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250228-pythonperf2-x86_64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5+-fecf8bc |
|----------------------------|:------------------------------------------------------------:|:----------------------------------------------------------------------------:|
| async_tree_memoization_tg  | 466 ms                                                       | 335 ms: 1.39x faster                                                         |
| async_tree_io              | 843 ms                                                       | 641 ms: 1.32x faster                                                         |
| async_tree_none            | 376 ms                                                       | 286 ms: 1.31x faster                                                         |
| async_tree_memoization     | 453 ms                                                       | 348 ms: 1.30x faster                                                         |
| async_tree_io_tg           | 831 ms                                                       | 646 ms: 1.29x faster                                                         |
| async_tree_none_tg         | 346 ms                                                       | 277 ms: 1.25x faster                                                         |
| async_tree_cpu_io_mixed    | 604 ms                                                       | 519 ms: 1.16x faster                                                         |
| async_tree_cpu_io_mixed_tg | 581 ms                                                       | 507 ms: 1.15x faster                                                         |
| async_generators           | 457 ms                                                       | 407 ms: 1.12x faster                                                         |
| coroutines                 | 21.6 ms                                                      | 21.2 ms: 1.02x faster                                                        |
| asyncio_websockets         | 388 ms                                                       | 385 ms: 1.01x faster                                                         |
| Geometric mean             | (ref)                                                        | 1.20x faster                                                                 |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20241007-pythonperf2-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250228-pythonperf2-x86_64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5+-fecf8bc |
|----------------|:------------------------------------------------------------:|:----------------------------------------------------------------------------:|
| float          | 81.3 ms                                                      | 69.9 ms: 1.16x faster                                                        |
| pidigits       | 252 ms                                                       | 255 ms: 1.01x slower                                                         |
| nbody          | 89.3 ms                                                      | 101 ms: 1.13x slower                                                         |
| Geometric mean | (ref)                                                        | 1.01x faster                                                                 |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20241007-pythonperf2-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250228-pythonperf2-x86_64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5+-fecf8bc |
|----------------|:------------------------------------------------------------:|:----------------------------------------------------------------------------:|
| regex_effbot   | 3.67 ms                                                      | 3.05 ms: 1.20x faster                                                        |
| regex_compile  | 143 ms                                                       | 135 ms: 1.06x faster                                                         |
| regex_dna      | 247 ms                                                       | 238 ms: 1.04x faster                                                         |
| Geometric mean | (ref)                                                        | 1.07x faster                                                                 |

Benchmark hidden because not significant (1): regex_v8

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20241007-pythonperf2-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250228-pythonperf2-x86_64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5+-fecf8bc |
|----------------------|:------------------------------------------------------------:|:----------------------------------------------------------------------------:|
| tomli_loads          | 2.46 sec                                                     | 2.11 sec: 1.17x faster                                                       |
| xml_etree_parse      | 150 ms                                                       | 138 ms: 1.09x faster                                                         |
| xml_etree_iterparse  | 103 ms                                                       | 97.3 ms: 1.06x faster                                                        |
| xml_etree_generate   | 86.5 ms                                                      | 83.4 ms: 1.04x faster                                                        |
| unpickle_pure_python | 217 us                                                       | 212 us: 1.02x faster                                                         |
| xml_etree_process    | 61.2 ms                                                      | 60.0 ms: 1.02x faster                                                        |
| pickle_pure_python   | 323 us                                                       | 333 us: 1.03x slower                                                         |
| json_dumps           | 11.1 ms                                                      | 11.6 ms: 1.04x slower                                                        |
| json_loads           | 24.7 us                                                      | 26.1 us: 1.06x slower                                                        |
| Geometric mean       | (ref)                                                        | 1.03x faster                                                                 |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20241007-pythonperf2-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250228-pythonperf2-x86_64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5+-fecf8bc |
|------------------------|:------------------------------------------------------------:|:----------------------------------------------------------------------------:|
| python_startup_no_site | 8.96 ms                                                      | 9.15 ms: 1.02x slower                                                        |
| python_startup         | 15.9 ms                                                      | 16.3 ms: 1.02x slower                                                        |
| Geometric mean         | (ref)                                                        | 1.02x slower                                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark      | bm-20241007-pythonperf2-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250228-pythonperf2-x86_64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5+-fecf8bc |
|----------------|:------------------------------------------------------------:|:----------------------------------------------------------------------------:|
| genshi_text    | 26.2 ms                                                      | 24.8 ms: 1.06x faster                                                        |
| genshi_xml     | 57.1 ms                                                      | 56.2 ms: 1.02x faster                                                        |
| mako           | 10.4 ms                                                      | 10.9 ms: 1.05x slower                                                        |
| Geometric mean | (ref)                                                        | 1.01x faster                                                                 |

Benchmark hidden because not significant (1): django_template

All benchmarks:
===============

| Benchmark                  | bm-20241007-pythonperf2-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250228-pythonperf2-x86_64-python-fecf8bc8f2fd09a9a4c5-3.14.0a5+-fecf8bc |
|----------------------------|:------------------------------------------------------------:|:----------------------------------------------------------------------------:|
| deepcopy                   | 392 us                                                       | 281 us: 1.40x faster                                                         |
| async_tree_memoization_tg  | 466 ms                                                       | 335 ms: 1.39x faster                                                         |
| async_tree_io              | 843 ms                                                       | 641 ms: 1.32x faster                                                         |
| async_tree_none            | 376 ms                                                       | 286 ms: 1.31x faster                                                         |
| async_tree_memoization     | 453 ms                                                       | 348 ms: 1.30x faster                                                         |
| deepcopy_memo              | 38.6 us                                                      | 29.9 us: 1.29x faster                                                        |
| async_tree_io_tg           | 831 ms                                                       | 646 ms: 1.29x faster                                                         |
| go                         | 162 ms                                                       | 129 ms: 1.26x faster                                                         |
| async_tree_none_tg         | 346 ms                                                       | 277 ms: 1.25x faster                                                         |
| regex_effbot               | 3.67 ms                                                      | 3.05 ms: 1.20x faster                                                        |
| deepcopy_reduce            | 3.54 us                                                      | 2.95 us: 1.20x faster                                                        |
| generators                 | 33.6 ms                                                      | 28.4 ms: 1.19x faster                                                        |
| tomli_loads                | 2.46 sec                                                     | 2.11 sec: 1.17x faster                                                       |
| float                      | 81.3 ms                                                      | 69.9 ms: 1.16x faster                                                        |
| async_tree_cpu_io_mixed    | 604 ms                                                       | 519 ms: 1.16x faster                                                         |
| async_tree_cpu_io_mixed_tg | 581 ms                                                       | 507 ms: 1.15x faster                                                         |
| richards                   | 52.9 ms                                                      | 47.0 ms: 1.13x faster                                                        |
| async_generators           | 457 ms                                                       | 407 ms: 1.12x faster                                                         |
| richards_super             | 59.6 ms                                                      | 53.2 ms: 1.12x faster                                                        |
| pyflate                    | 503 ms                                                       | 449 ms: 1.12x faster                                                         |
| scimark_sor                | 123 ms                                                       | 111 ms: 1.11x faster                                                         |
| spectral_norm              | 97.0 ms                                                      | 87.6 ms: 1.11x faster                                                        |
| pylint                     | 347 ms                                                       | 317 ms: 1.09x faster                                                         |
| xml_etree_parse            | 150 ms                                                       | 138 ms: 1.09x faster                                                         |
| bpe_tokeniser              | 5.09 sec                                                     | 4.67 sec: 1.09x faster                                                       |
| telco                      | 8.79 ms                                                      | 8.09 ms: 1.09x faster                                                        |
| hexiom                     | 6.55 ms                                                      | 6.11 ms: 1.07x faster                                                        |
| html5lib                   | 73.5 ms                                                      | 68.7 ms: 1.07x faster                                                        |
| pprint_pformat             | 1.72 sec                                                     | 1.61 sec: 1.07x faster                                                       |
| json                       | 5.69 ms                                                      | 5.34 ms: 1.06x faster                                                        |
| pathlib                    | 17.5 ms                                                      | 16.5 ms: 1.06x faster                                                        |
| regex_compile              | 143 ms                                                       | 135 ms: 1.06x faster                                                         |
| genshi_text                | 26.2 ms                                                      | 24.8 ms: 1.06x faster                                                        |
| pprint_safe_repr           | 843 ms                                                       | 797 ms: 1.06x faster                                                         |
| xml_etree_iterparse        | 103 ms                                                       | 97.3 ms: 1.06x faster                                                        |
| thrift                     | 901 us                                                       | 861 us: 1.05x faster                                                         |
| meteor_contest             | 130 ms                                                       | 124 ms: 1.05x faster                                                         |
| connected_components       | 432 ms                                                       | 415 ms: 1.04x faster                                                         |
| k_core                     | 2.17 sec                                                     | 2.08 sec: 1.04x faster                                                       |
| xml_etree_generate         | 86.5 ms                                                      | 83.4 ms: 1.04x faster                                                        |
| regex_dna                  | 247 ms                                                       | 238 ms: 1.04x faster                                                         |
| shortest_path              | 460 ms                                                       | 446 ms: 1.03x faster                                                         |
| sqlite_synth               | 2.91 us                                                      | 2.81 us: 1.03x faster                                                        |
| 2to3                       | 293 ms                                                       | 284 ms: 1.03x faster                                                         |
| sympy_str                  | 298 ms                                                       | 290 ms: 1.03x faster                                                         |
| sqlglot_parse              | 1.40 ms                                                      | 1.36 ms: 1.03x faster                                                        |
| sqlalchemy_declarative     | 148 ms                                                       | 145 ms: 1.03x faster                                                         |
| sympy_expand               | 509 ms                                                       | 497 ms: 1.02x faster                                                         |
| unpickle_pure_python       | 217 us                                                       | 212 us: 1.02x faster                                                         |
| sympy_integrate            | 23.6 ms                                                      | 23.0 ms: 1.02x faster                                                        |
| sqlalchemy_imperative      | 18.3 ms                                                      | 17.9 ms: 1.02x faster                                                        |
| deltablue                  | 3.42 ms                                                      | 3.35 ms: 1.02x faster                                                        |
| sqlglot_transpile          | 1.79 ms                                                      | 1.76 ms: 1.02x faster                                                        |
| xml_etree_process          | 61.2 ms                                                      | 60.0 ms: 1.02x faster                                                        |
| sympy_sum                  | 155 ms                                                       | 152 ms: 1.02x faster                                                         |
| mdp                        | 2.54 sec                                                     | 2.50 sec: 1.02x faster                                                       |
| sphinx                     | 1.12 sec                                                     | 1.10 sec: 1.02x faster                                                       |
| coroutines                 | 21.6 ms                                                      | 21.2 ms: 1.02x faster                                                        |
| genshi_xml                 | 57.1 ms                                                      | 56.2 ms: 1.02x faster                                                        |
| asyncio_websockets         | 388 ms                                                       | 385 ms: 1.01x faster                                                         |
| sqlglot_optimize           | 59.3 ms                                                      | 58.9 ms: 1.01x faster                                                        |
| scimark_monte_carlo        | 66.1 ms                                                      | 65.8 ms: 1.01x faster                                                        |
| sqlglot_normalize          | 119 ms                                                       | 120 ms: 1.01x slower                                                         |
| logging_format             | 6.94 us                                                      | 7.00 us: 1.01x slower                                                        |
| pidigits                   | 252 ms                                                       | 255 ms: 1.01x slower                                                         |
| scimark_fft                | 328 ms                                                       | 333 ms: 1.02x slower                                                         |
| docutils                   | 2.83 sec                                                     | 2.87 sec: 1.02x slower                                                       |
| comprehensions             | 17.0 us                                                      | 17.3 us: 1.02x slower                                                        |
| scimark_lu                 | 98.7 ms                                                      | 100 ms: 1.02x slower                                                         |
| nqueens                    | 90.7 ms                                                      | 92.4 ms: 1.02x slower                                                        |
| bench_thread_pool          | 942 us                                                       | 961 us: 1.02x slower                                                         |
| python_startup_no_site     | 8.96 ms                                                      | 9.15 ms: 1.02x slower                                                        |
| python_startup             | 15.9 ms                                                      | 16.3 ms: 1.02x slower                                                        |
| raytrace                   | 273 ms                                                       | 280 ms: 1.03x slower                                                         |
| pickle_pure_python         | 323 us                                                       | 333 us: 1.03x slower                                                         |
| json_dumps                 | 11.1 ms                                                      | 11.6 ms: 1.04x slower                                                        |
| scimark_sparse_mat_mult    | 4.77 ms                                                      | 4.97 ms: 1.04x slower                                                        |
| mako                       | 10.4 ms                                                      | 10.9 ms: 1.05x slower                                                        |
| crypto_pyaes               | 73.3 ms                                                      | 76.9 ms: 1.05x slower                                                        |
| coverage                   | 80.0 ms                                                      | 84.5 ms: 1.06x slower                                                        |
| json_loads                 | 24.7 us                                                      | 26.1 us: 1.06x slower                                                        |
| many_optionals             | 930 us                                                       | 1.01 ms: 1.09x slower                                                        |
| nbody                      | 89.3 ms                                                      | 101 ms: 1.13x slower                                                         |
| subparsers                 | 17.5 ms                                                      | 22.6 ms: 1.29x slower                                                        |
| gc_traversal               | 4.74 ms                                                      | 6.27 ms: 1.32x slower                                                        |
| bench_mp_pool              | 5.12 ms                                                      | 1.29 sec: 252.56x slower                                                     |
| Geometric mean             | (ref)                                                        | 1.01x slower                                                                 |

Benchmark hidden because not significant (10): pycparser, regex_v8, django_template, dulwich_log, logging_silent, logging_simple, typing_runtime_protocols, fannkuch, create_gc_cycles, chaos
Ignored benchmarks (5) of results/bm-20241007-3.13.0-60403a5/bm-20241007-pythonperf2-x86_64-python-v3.13.0-3.13.0-60403a5.json: chameleon, djangocms, gevent_hub, gunicorn, tornado_http

- Geometric mean (including insignificant results): 1.049x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.02x
- 95% likely to have a speedup of 1.02x
- 99% likely to have a speedup of 1.01x

# Memory
- memory change: 1.02x