# Results vs. 3.13.0

- fork: python
- ref: 0cafa97932c6574734bb
- machine: linux-aarch64
- commit hash: 0cafa97
- commit date: 2025-01-04
- overall geometric mean: 1.022x slower
- HPT reliability: 98.08%
- HPT 99th percentile: 1.00x slower
- Memory change: 1.04x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20241007-arminc-aarch64-python-v3.13.0-3.13.0-60403a5 | bm-20250104-arminc-aarch64-python-0cafa97932c6574734bb-3.14.0a3+-0cafa97 |
|----------------|:--------------------------------------------------------:|:------------------------------------------------------------------------:|
| docutils       | 2.96 sec                                                 | 3.27 sec: 1.10x slower                                                   |
| html5lib       | 65.6 ms                                                  | 69.8 ms: 1.06x slower                                                    |
| sphinx         | 1.20 sec                                                 | 1.25 sec: 1.04x slower                                                   |
| Geometric mean | (ref)                                                    | 1.06x slower                                                             |

Benchmark hidden because not significant (1): 2to3

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20241007-arminc-aarch64-python-v3.13.0-3.13.0-60403a5 | bm-20250104-arminc-aarch64-python-0cafa97932c6574734bb-3.14.0a3+-0cafa97 |
|----------------------------|:--------------------------------------------------------:|:------------------------------------------------------------------------:|
| async_tree_memoization_tg  | 663 ms                                                   | 482 ms: 1.37x faster                                                     |
| async_tree_io_tg           | 1.16 sec                                                 | 892 ms: 1.31x faster                                                     |
| async_tree_memoization     | 664 ms                                                   | 510 ms: 1.30x faster                                                     |
| async_tree_none_tg         | 484 ms                                                   | 380 ms: 1.27x faster                                                     |
| async_tree_none            | 504 ms                                                   | 405 ms: 1.24x faster                                                     |
| async_tree_io              | 1.14 sec                                                 | 917 ms: 1.24x faster                                                     |
| async_tree_cpu_io_mixed_tg | 801 ms                                                   | 672 ms: 1.19x faster                                                     |
| async_tree_cpu_io_mixed    | 789 ms                                                   | 698 ms: 1.13x faster                                                     |
| async_generators           | 500 ms                                                   | 528 ms: 1.06x slower                                                     |
| Geometric mean             | (ref)                                                    | 1.17x faster                                                             |

Benchmark hidden because not significant (2): asyncio_websockets, coroutines

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20241007-arminc-aarch64-python-v3.13.0-3.13.0-60403a5 | bm-20250104-arminc-aarch64-python-0cafa97932c6574734bb-3.14.0a3+-0cafa97 |
|----------------|:--------------------------------------------------------:|:------------------------------------------------------------------------:|
| float          | 95.8 ms                                                  | 89.7 ms: 1.07x faster                                                    |
| Geometric mean | (ref)                                                    | 1.01x faster                                                             |

Benchmark hidden because not significant (2): nbody, pidigits

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20241007-arminc-aarch64-python-v3.13.0-3.13.0-60403a5 | bm-20250104-arminc-aarch64-python-0cafa97932c6574734bb-3.14.0a3+-0cafa97 |
|----------------|:--------------------------------------------------------:|:------------------------------------------------------------------------:|
| regex_effbot   | 5.10 ms                                                  | 4.03 ms: 1.27x faster                                                    |
| regex_compile  | 134 ms                                                   | 142 ms: 1.06x slower                                                     |
| Geometric mean | (ref)                                                    | 1.05x faster                                                             |

Benchmark hidden because not significant (2): regex_dna, regex_v8

Benchmarks with tag 'serialize':
================================

| Benchmark           | bm-20241007-arminc-aarch64-python-v3.13.0-3.13.0-60403a5 | bm-20250104-arminc-aarch64-python-0cafa97932c6574734bb-3.14.0a3+-0cafa97 |
|---------------------|:--------------------------------------------------------:|:------------------------------------------------------------------------:|
| xml_etree_iterparse | 159 ms                                                   | 143 ms: 1.11x faster                                                     |
| xml_etree_parse     | 203 ms                                                   | 183 ms: 1.11x faster                                                     |
| tomli_loads         | 2.67 sec                                                 | 2.54 sec: 1.05x faster                                                   |
| Geometric mean      | (ref)                                                    | 1.02x faster                                                             |

Benchmark hidden because not significant (6): json_loads, xml_etree_generate, unpickle_pure_python, xml_etree_process, json_dumps, pickle_pure_python

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20241007-arminc-aarch64-python-v3.13.0-3.13.0-60403a5 | bm-20250104-arminc-aarch64-python-0cafa97932c6574734bb-3.14.0a3+-0cafa97 |
|------------------------|:--------------------------------------------------------:|:------------------------------------------------------------------------:|
| python_startup_no_site | 8.79 ms                                                  | 9.01 ms: 1.02x slower                                                    |
| Geometric mean         | (ref)                                                    | 1.02x slower                                                             |

Benchmark hidden because not significant (1): python_startup

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20241007-arminc-aarch64-python-v3.13.0-3.13.0-60403a5 | bm-20250104-arminc-aarch64-python-0cafa97932c6574734bb-3.14.0a3+-0cafa97 |
|-----------------|:--------------------------------------------------------:|:------------------------------------------------------------------------:|
| django_template | 39.4 ms                                                  | 48.5 ms: 1.23x slower                                                    |
| genshi_text     | 28.6 ms                                                  | 35.4 ms: 1.24x slower                                                    |
| genshi_xml      | 61.6 ms                                                  | 81.5 ms: 1.32x slower                                                    |
| Geometric mean  | (ref)                                                    | 1.19x slower                                                             |

Benchmark hidden because not significant (1): mako

All benchmarks:
===============

| Benchmark                  | bm-20241007-arminc-aarch64-python-v3.13.0-3.13.0-60403a5 | bm-20250104-arminc-aarch64-python-0cafa97932c6574734bb-3.14.0a3+-0cafa97 |
|----------------------------|:--------------------------------------------------------:|:------------------------------------------------------------------------:|
| deepcopy_memo              | 53.0 us                                                  | 38.4 us: 1.38x faster                                                    |
| async_tree_memoization_tg  | 663 ms                                                   | 482 ms: 1.37x faster                                                     |
| async_tree_io_tg           | 1.16 sec                                                 | 892 ms: 1.31x faster                                                     |
| async_tree_memoization     | 664 ms                                                   | 510 ms: 1.30x faster                                                     |
| async_tree_none_tg         | 484 ms                                                   | 380 ms: 1.27x faster                                                     |
| regex_effbot               | 5.10 ms                                                  | 4.03 ms: 1.27x faster                                                    |
| async_tree_none            | 504 ms                                                   | 405 ms: 1.24x faster                                                     |
| async_tree_io              | 1.14 sec                                                 | 917 ms: 1.24x faster                                                     |
| deepcopy                   | 479 us                                                   | 401 us: 1.19x faster                                                     |
| async_tree_cpu_io_mixed_tg | 801 ms                                                   | 672 ms: 1.19x faster                                                     |
| async_tree_cpu_io_mixed    | 789 ms                                                   | 698 ms: 1.13x faster                                                     |
| xml_etree_iterparse        | 159 ms                                                   | 143 ms: 1.11x faster                                                     |
| xml_etree_parse            | 203 ms                                                   | 183 ms: 1.11x faster                                                     |
| scimark_fft                | 463 ms                                                   | 425 ms: 1.09x faster                                                     |
| deepcopy_reduce            | 4.24 us                                                  | 3.95 us: 1.08x faster                                                    |
| float                      | 95.8 ms                                                  | 89.7 ms: 1.07x faster                                                    |
| pathlib                    | 24.3 ms                                                  | 22.8 ms: 1.07x faster                                                    |
| tomli_loads                | 2.67 sec                                                 | 2.54 sec: 1.05x faster                                                   |
| bpe_tokeniser              | 6.02 sec                                                 | 5.83 sec: 1.03x faster                                                   |
| k_core                     | 2.99 sec                                                 | 2.93 sec: 1.02x faster                                                   |
| shortest_path              | 565 ms                                                   | 579 ms: 1.02x slower                                                     |
| python_startup_no_site     | 8.79 ms                                                  | 9.01 ms: 1.02x slower                                                    |
| sphinx                     | 1.20 sec                                                 | 1.25 sec: 1.04x slower                                                   |
| mdp                        | 3.45 sec                                                 | 3.61 sec: 1.05x slower                                                   |
| sqlglot_parse              | 1.43 ms                                                  | 1.51 ms: 1.05x slower                                                    |
| async_generators           | 500 ms                                                   | 528 ms: 1.06x slower                                                     |
| go                         | 164 ms                                                   | 174 ms: 1.06x slower                                                     |
| regex_compile              | 134 ms                                                   | 142 ms: 1.06x slower                                                     |
| html5lib                   | 65.6 ms                                                  | 69.8 ms: 1.06x slower                                                    |
| meteor_contest             | 117 ms                                                   | 125 ms: 1.06x slower                                                     |
| sqlalchemy_imperative      | 16.1 ms                                                  | 17.2 ms: 1.07x slower                                                    |
| fannkuch                   | 478 ms                                                   | 514 ms: 1.07x slower                                                     |
| sympy_sum                  | 151 ms                                                   | 163 ms: 1.08x slower                                                     |
| sympy_integrate            | 21.4 ms                                                  | 23.2 ms: 1.08x slower                                                    |
| create_gc_cycles           | 3.39 ms                                                  | 3.71 ms: 1.09x slower                                                    |
| sqlglot_optimize           | 65.2 ms                                                  | 71.3 ms: 1.09x slower                                                    |
| logging_silent             | 135 ns                                                   | 147 ns: 1.09x slower                                                     |
| sympy_expand               | 472 ms                                                   | 519 ms: 1.10x slower                                                     |
| crypto_pyaes               | 84.9 ms                                                  | 93.4 ms: 1.10x slower                                                    |
| docutils                   | 2.96 sec                                                 | 3.27 sec: 1.10x slower                                                   |
| sqlglot_normalize          | 131 ms                                                   | 145 ms: 1.10x slower                                                     |
| pycparser                  | 1.34 sec                                                 | 1.49 sec: 1.11x slower                                                   |
| logging_format             | 8.10 us                                                  | 9.00 us: 1.11x slower                                                    |
| logging_simple             | 7.25 us                                                  | 8.19 us: 1.13x slower                                                    |
| typing_runtime_protocols   | 197 us                                                   | 224 us: 1.14x slower                                                     |
| deltablue                  | 3.97 ms                                                  | 4.52 ms: 1.14x slower                                                    |
| sympy_str                  | 265 ms                                                   | 308 ms: 1.16x slower                                                     |
| gc_traversal               | 5.92 ms                                                  | 6.91 ms: 1.17x slower                                                    |
| chaos                      | 70.7 ms                                                  | 85.6 ms: 1.21x slower                                                    |
| raytrace                   | 310 ms                                                   | 378 ms: 1.22x slower                                                     |
| comprehensions             | 20.8 us                                                  | 25.5 us: 1.22x slower                                                    |
| django_template            | 39.4 ms                                                  | 48.5 ms: 1.23x slower                                                    |
| genshi_text                | 28.6 ms                                                  | 35.4 ms: 1.24x slower                                                    |
| nqueens                    | 105 ms                                                   | 131 ms: 1.25x slower                                                     |
| generators                 | 40.3 ms                                                  | 51.0 ms: 1.26x slower                                                    |
| pprint_pformat             | 1.99 sec                                                 | 2.58 sec: 1.30x slower                                                   |
| pprint_safe_repr           | 962 ms                                                   | 1.25 sec: 1.30x slower                                                   |
| genshi_xml                 | 61.6 ms                                                  | 81.5 ms: 1.32x slower                                                    |
| hexiom                     | 7.34 ms                                                  | 9.81 ms: 1.34x slower                                                    |
| subparsers                 | 20.3 ms                                                  | 27.8 ms: 1.37x slower                                                    |
| many_optionals             | 626 us                                                   | 859 us: 1.37x slower                                                     |
| bench_mp_pool              | 8.07 ms                                                  | 1.42 sec: 176.54x slower                                                 |
| Geometric mean             | (ref)                                                    | 1.09x slower                                                             |

Benchmark hidden because not significant (34): telco, regex_dna, scimark_sor, mako, json_loads, xml_etree_generate, json, spectral_norm, unpickle_pure_python, connected_components, asyncio_websockets, nbody, regex_v8, coroutines, thrift, scimark_monte_carlo, djangocms, bench_thread_pool, pidigits, scimark_sparse_mat_mult, pylint, xml_etree_process, python_startup, richards_super, 2to3, json_dumps, pyflate, pickle_pure_python, sqlite_synth, richards, sqlalchemy_declarative, sqlglot_transpile, scimark_lu, coverage
Ignored benchmarks (4) of results/bm-20241007-3.13.0-60403a5/bm-20241007-arminc-aarch64-python-v3.13.0-3.13.0-60403a5.json: chameleon, gevent_hub, gunicorn, tornado_http
Ignored benchmarks (2) of results/bm-20250104-3.14.0a3+-0cafa97-JIT/bm-20250104-arminc-aarch64-python-0cafa97932c6574734bb-3.14.0a3+-0cafa97.json: dulwich_log, mypy2

- Geometric mean (including insignificant results): 1.022x slower

# HPT report

- Reliability score: 98.08% likely to be slow
- 90% likely to have a slowdown of 1.00x
- 95% likely to have a slowdown of 1.00x
- 99% likely to have a slowdown of 1.00x

# Memory
- memory change: 1.04x