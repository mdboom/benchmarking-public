# Results vs. 3.12.0

- fork: iritkatriel
- ref: stats
- machine: linux-x86_64
- commit hash: fb33c24
- commit date: 2025-02-21
- overall geometric mean: 1.117x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.06x faster
- Memory change: 1.09x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| 2to3           | 274 ms                                                 | 254 ms: 1.08x faster                                         |
| docutils       | 2.77 sec                                               | 2.59 sec: 1.07x faster                                       |
| Geometric mean | (ref)                                                  | 1.08x faster                                                 |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 621 ms: 1.90x faster                                         |
| async_tree_io              | 1.16 sec                                               | 608 ms: 1.90x faster                                         |
| async_tree_memoization_tg  | 575 ms                                                 | 313 ms: 1.84x faster                                         |
| async_tree_none_tg         | 450 ms                                                 | 247 ms: 1.82x faster                                         |
| async_tree_none            | 472 ms                                                 | 261 ms: 1.81x faster                                         |
| async_tree_memoization     | 578 ms                                                 | 326 ms: 1.77x faster                                         |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 471 ms: 1.54x faster                                         |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 484 ms: 1.50x faster                                         |
| Geometric mean             | (ref)                                                  | 1.75x faster                                                 |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| float          | 84.7 ms                                                | 69.6 ms: 1.22x faster                                        |
| nbody          | 97.0 ms                                                | 90.3 ms: 1.07x faster                                        |
| pidigits       | 187 ms                                                 | 186 ms: 1.01x faster                                         |
| Geometric mean | (ref)                                                  | 1.10x faster                                                 |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| regex_compile  | 148 ms                                                 | 125 ms: 1.19x faster                                         |
| regex_effbot   | 3.61 ms                                                | 3.37 ms: 1.07x faster                                        |
| regex_dna      | 212 ms                                                 | 213 ms: 1.00x slower                                         |
| regex_v8       | 23.1 ms                                                | 25.6 ms: 1.11x slower                                        |
| Geometric mean | (ref)                                                  | 1.04x faster                                                 |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| tomli_loads          | 2.33 sec                                               | 1.90 sec: 1.23x faster                                       |
| xml_etree_parse      | 159 ms                                                 | 141 ms: 1.13x faster                                         |
| xml_etree_iterparse  | 107 ms                                                 | 98.2 ms: 1.09x faster                                        |
| xml_etree_generate   | 89.2 ms                                                | 84.5 ms: 1.05x faster                                        |
| xml_etree_process    | 61.7 ms                                                | 59.1 ms: 1.04x faster                                        |
| unpickle_pure_python | 230 us                                                 | 221 us: 1.04x faster                                         |
| pickle_pure_python   | 324 us                                                 | 316 us: 1.02x faster                                         |
| json_loads           | 28.5 us                                                | 29.7 us: 1.04x slower                                        |
| json_dumps           | 10.4 ms                                                | 11.3 ms: 1.09x slower                                        |
| Geometric mean       | (ref)                                                  | 1.05x faster                                                 |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| python_startup_no_site | 6.94 ms                                                | 7.05 ms: 1.02x slower                                        |
| python_startup         | 9.55 ms                                                | 12.9 ms: 1.35x slower                                        |
| Geometric mean         | (ref)                                                  | 1.17x slower                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|-----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| mako            | 11.9 ms                                                | 10.8 ms: 1.10x faster                                        |
| django_template | 34.6 ms                                                | 31.6 ms: 1.09x faster                                        |
| Geometric mean  | (ref)                                                  | 1.10x faster                                                 |

All benchmarks:
===============

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 621 ms: 1.90x faster                                         |
| async_tree_io              | 1.16 sec                                               | 608 ms: 1.90x faster                                         |
| async_tree_memoization_tg  | 575 ms                                                 | 313 ms: 1.84x faster                                         |
| async_tree_none_tg         | 450 ms                                                 | 247 ms: 1.82x faster                                         |
| async_tree_none            | 472 ms                                                 | 261 ms: 1.81x faster                                         |
| async_tree_memoization     | 578 ms                                                 | 326 ms: 1.77x faster                                         |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 471 ms: 1.54x faster                                         |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 484 ms: 1.50x faster                                         |
| deepcopy                   | 371 us                                                 | 254 us: 1.46x faster                                         |
| deepcopy_memo              | 40.7 us                                                | 29.8 us: 1.36x faster                                        |
| comprehensions             | 21.8 us                                                | 16.6 us: 1.31x faster                                        |
| deepcopy_reduce            | 3.35 us                                                | 2.67 us: 1.25x faster                                        |
| tomli_loads                | 2.33 sec                                               | 1.90 sec: 1.23x faster                                       |
| float                      | 84.7 ms                                                | 69.6 ms: 1.22x faster                                        |
| async_generators           | 463 ms                                                 | 384 ms: 1.20x faster                                         |
| go                         | 139 ms                                                 | 116 ms: 1.20x faster                                         |
| regex_compile              | 148 ms                                                 | 125 ms: 1.19x faster                                         |
| spectral_norm              | 115 ms                                                 | 96.9 ms: 1.19x faster                                        |
| logging_format             | 7.23 us                                                | 6.13 us: 1.18x faster                                        |
| logging_simple             | 6.46 us                                                | 5.49 us: 1.18x faster                                        |
| deltablue                  | 3.72 ms                                                | 3.18 ms: 1.17x faster                                        |
| pathlib                    | 19.3 ms                                                | 16.7 ms: 1.16x faster                                        |
| sqlalchemy_declarative     | 147 ms                                                 | 128 ms: 1.15x faster                                         |
| sympy_sum                  | 169 ms                                                 | 147 ms: 1.15x faster                                         |
| raytrace                   | 312 ms                                                 | 272 ms: 1.15x faster                                         |
| sqlalchemy_imperative      | 18.7 ms                                                | 16.3 ms: 1.14x faster                                        |
| crypto_pyaes               | 81.9 ms                                                | 72.0 ms: 1.14x faster                                        |
| chaos                      | 67.0 ms                                                | 58.9 ms: 1.14x faster                                        |
| sympy_str                  | 300 ms                                                 | 264 ms: 1.13x faster                                         |
| xml_etree_parse            | 159 ms                                                 | 141 ms: 1.13x faster                                         |
| scimark_fft                | 382 ms                                                 | 341 ms: 1.12x faster                                         |
| generators                 | 31.2 ms                                                | 28.0 ms: 1.12x faster                                        |
| scimark_monte_carlo        | 75.1 ms                                                | 68.1 ms: 1.10x faster                                        |
| mako                       | 11.9 ms                                                | 10.8 ms: 1.10x faster                                        |
| sympy_integrate            | 21.4 ms                                                | 19.6 ms: 1.09x faster                                        |
| django_template            | 34.6 ms                                                | 31.6 ms: 1.09x faster                                        |
| pprint_safe_repr           | 776 ms                                                 | 712 ms: 1.09x faster                                         |
| xml_etree_iterparse        | 107 ms                                                 | 98.2 ms: 1.09x faster                                        |
| 2to3                       | 274 ms                                                 | 254 ms: 1.08x faster                                         |
| sqlglot_parse              | 1.36 ms                                                | 1.26 ms: 1.08x faster                                        |
| pprint_pformat             | 1.57 sec                                               | 1.45 sec: 1.08x faster                                       |
| sqlglot_transpile          | 1.68 ms                                                | 1.57 ms: 1.07x faster                                        |
| nbody                      | 97.0 ms                                                | 90.3 ms: 1.07x faster                                        |
| pyflate                    | 482 ms                                                 | 450 ms: 1.07x faster                                         |
| docutils                   | 2.77 sec                                               | 2.59 sec: 1.07x faster                                       |
| regex_effbot               | 3.61 ms                                                | 3.37 ms: 1.07x faster                                        |
| scimark_sor                | 129 ms                                                 | 121 ms: 1.07x faster                                         |
| sympy_expand               | 478 ms                                                 | 450 ms: 1.06x faster                                         |
| mdp                        | 2.63 sec                                               | 2.48 sec: 1.06x faster                                       |
| dulwich_log                | 68.5 ms                                                | 64.6 ms: 1.06x faster                                        |
| sqlglot_normalize          | 110 ms                                                 | 104 ms: 1.06x faster                                         |
| meteor_contest             | 112 ms                                                 | 106 ms: 1.06x faster                                         |
| xml_etree_generate         | 89.2 ms                                                | 84.5 ms: 1.05x faster                                        |
| hexiom                     | 6.41 ms                                                | 6.09 ms: 1.05x faster                                        |
| scimark_sparse_mat_mult    | 5.06 ms                                                | 4.80 ms: 1.05x faster                                        |
| sqlglot_optimize           | 54.8 ms                                                | 52.2 ms: 1.05x faster                                        |
| xml_etree_process          | 61.7 ms                                                | 59.1 ms: 1.04x faster                                        |
| unpickle_pure_python       | 230 us                                                 | 221 us: 1.04x faster                                         |
| richards                   | 45.8 ms                                                | 44.1 ms: 1.04x faster                                        |
| fannkuch                   | 417 ms                                                 | 402 ms: 1.04x faster                                         |
| nqueens                    | 83.3 ms                                                | 81.0 ms: 1.03x faster                                        |
| sqlite_synth               | 2.83 us                                                | 2.76 us: 1.03x faster                                        |
| pickle_pure_python         | 324 us                                                 | 316 us: 1.02x faster                                         |
| logging_silent             | 104 ns                                                 | 102 ns: 1.02x faster                                         |
| richards_super             | 51.5 ms                                                | 50.5 ms: 1.02x faster                                        |
| pycparser                  | 1.18 sec                                               | 1.16 sec: 1.01x faster                                       |
| coroutines                 | 23.2 ms                                                | 23.0 ms: 1.01x faster                                        |
| pidigits                   | 187 ms                                                 | 186 ms: 1.01x faster                                         |
| scimark_lu                 | 118 ms                                                 | 117 ms: 1.00x faster                                         |
| regex_dna                  | 212 ms                                                 | 213 ms: 1.00x slower                                         |
| python_startup_no_site     | 6.94 ms                                                | 7.05 ms: 1.02x slower                                        |
| json                       | 5.26 ms                                                | 5.35 ms: 1.02x slower                                        |
| bench_thread_pool          | 842 us                                                 | 863 us: 1.03x slower                                         |
| json_loads                 | 28.5 us                                                | 29.7 us: 1.04x slower                                        |
| json_dumps                 | 10.4 ms                                                | 11.3 ms: 1.09x slower                                        |
| telco                      | 7.10 ms                                                | 7.82 ms: 1.10x slower                                        |
| regex_v8                   | 23.1 ms                                                | 25.6 ms: 1.11x slower                                        |
| coverage                   | 72.7 ms                                                | 89.5 ms: 1.23x slower                                        |
| gc_traversal               | 3.79 ms                                                | 4.96 ms: 1.31x slower                                        |
| python_startup             | 9.55 ms                                                | 12.9 ms: 1.35x slower                                        |
| create_gc_cycles           | 1.48 ms                                                | 2.46 ms: 1.67x slower                                        |
| bench_mp_pool              | 24.0 ms                                                | 81.9 ms: 3.41x slower                                        |
| Geometric mean             | (ref)                                                  | 1.10x faster                                                 |

Benchmark hidden because not significant (2): typing_runtime_protocols, asyncio_websockets
Ignored benchmarks (14) of results/bm-20231002-3.12.0-0fb18b0/bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (12) of results/bm-20250221-3.14.0a5+-fb33c24/bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24.json: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift

- Geometric mean (including insignificant results): 1.117x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.07x
- 95% likely to have a speedup of 1.07x
- 99% likely to have a speedup of 1.06x

# Memory
- memory change: 1.09x