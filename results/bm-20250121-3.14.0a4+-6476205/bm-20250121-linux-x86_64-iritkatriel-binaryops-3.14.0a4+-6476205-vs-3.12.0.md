# Results vs. 3.12.0

- fork: iritkatriel
- ref: binaryops
- machine: linux-x86_64
- commit hash: 6476205
- commit date: 2025-01-21
- overall geometric mean: 1.117x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.05x faster
- Memory change: 1.09x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250121-linux-x86_64-iritkatriel-binaryops-3.14.0a4+-6476205 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------:|
| 2to3           | 274 ms                                                 | 254 ms: 1.08x faster                                             |
| docutils       | 2.77 sec                                               | 2.59 sec: 1.07x faster                                           |
| Geometric mean | (ref)                                                  | 1.07x faster                                                     |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250121-linux-x86_64-iritkatriel-binaryops-3.14.0a4+-6476205 |
|----------------------------|:------------------------------------------------------:|:----------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 581 ms: 2.03x faster                                             |
| async_tree_io              | 1.16 sec                                               | 600 ms: 1.93x faster                                             |
| async_tree_memoization_tg  | 575 ms                                                 | 304 ms: 1.89x faster                                             |
| async_tree_none_tg         | 450 ms                                                 | 245 ms: 1.84x faster                                             |
| async_tree_none            | 472 ms                                                 | 257 ms: 1.83x faster                                             |
| async_tree_memoization     | 578 ms                                                 | 327 ms: 1.77x faster                                             |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 457 ms: 1.59x faster                                             |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 481 ms: 1.51x faster                                             |
| Geometric mean             | (ref)                                                  | 1.79x faster                                                     |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250121-linux-x86_64-iritkatriel-binaryops-3.14.0a4+-6476205 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------:|
| float          | 84.7 ms                                                | 70.6 ms: 1.20x faster                                            |
| nbody          | 97.0 ms                                                | 94.1 ms: 1.03x faster                                            |
| pidigits       | 187 ms                                                 | 186 ms: 1.01x faster                                             |
| Geometric mean | (ref)                                                  | 1.08x faster                                                     |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250121-linux-x86_64-iritkatriel-binaryops-3.14.0a4+-6476205 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------:|
| regex_compile  | 148 ms                                                 | 127 ms: 1.17x faster                                             |
| regex_effbot   | 3.61 ms                                                | 3.15 ms: 1.14x faster                                            |
| regex_dna      | 212 ms                                                 | 210 ms: 1.01x faster                                             |
| regex_v8       | 23.1 ms                                                | 25.1 ms: 1.08x slower                                            |
| Geometric mean | (ref)                                                  | 1.06x faster                                                     |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250121-linux-x86_64-iritkatriel-binaryops-3.14.0a4+-6476205 |
|----------------------|:------------------------------------------------------:|:----------------------------------------------------------------:|
| tomli_loads          | 2.33 sec                                               | 1.98 sec: 1.18x faster                                           |
| xml_etree_parse      | 159 ms                                                 | 138 ms: 1.15x faster                                             |
| xml_etree_iterparse  | 107 ms                                                 | 96.9 ms: 1.10x faster                                            |
| unpickle_pure_python | 230 us                                                 | 216 us: 1.06x faster                                             |
| xml_etree_generate   | 89.2 ms                                                | 84.2 ms: 1.06x faster                                            |
| xml_etree_process    | 61.7 ms                                                | 59.4 ms: 1.04x faster                                            |
| pickle_pure_python   | 324 us                                                 | 320 us: 1.01x faster                                             |
| json_loads           | 28.5 us                                                | 29.6 us: 1.04x slower                                            |
| json_dumps           | 10.4 ms                                                | 12.1 ms: 1.16x slower                                            |
| Geometric mean       | (ref)                                                  | 1.04x faster                                                     |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250121-linux-x86_64-iritkatriel-binaryops-3.14.0a4+-6476205 |
|------------------------|:------------------------------------------------------:|:----------------------------------------------------------------:|
| python_startup_no_site | 6.94 ms                                                | 7.06 ms: 1.02x slower                                            |
| python_startup         | 9.55 ms                                                | 12.9 ms: 1.35x slower                                            |
| Geometric mean         | (ref)                                                  | 1.17x slower                                                     |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250121-linux-x86_64-iritkatriel-binaryops-3.14.0a4+-6476205 |
|-----------------|:------------------------------------------------------:|:----------------------------------------------------------------:|
| django_template | 34.6 ms                                                | 32.1 ms: 1.08x faster                                            |
| mako            | 11.9 ms                                                | 11.3 ms: 1.05x faster                                            |
| Geometric mean  | (ref)                                                  | 1.07x faster                                                     |

All benchmarks:
===============

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250121-linux-x86_64-iritkatriel-binaryops-3.14.0a4+-6476205 |
|----------------------------|:------------------------------------------------------:|:----------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 581 ms: 2.03x faster                                             |
| async_tree_io              | 1.16 sec                                               | 600 ms: 1.93x faster                                             |
| async_tree_memoization_tg  | 575 ms                                                 | 304 ms: 1.89x faster                                             |
| async_tree_none_tg         | 450 ms                                                 | 245 ms: 1.84x faster                                             |
| async_tree_none            | 472 ms                                                 | 257 ms: 1.83x faster                                             |
| async_tree_memoization     | 578 ms                                                 | 327 ms: 1.77x faster                                             |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 457 ms: 1.59x faster                                             |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 481 ms: 1.51x faster                                             |
| deepcopy                   | 371 us                                                 | 258 us: 1.44x faster                                             |
| deepcopy_memo              | 40.7 us                                                | 31.2 us: 1.31x faster                                            |
| comprehensions             | 21.8 us                                                | 16.9 us: 1.29x faster                                            |
| deepcopy_reduce            | 3.35 us                                                | 2.61 us: 1.28x faster                                            |
| pathlib                    | 19.3 ms                                                | 16.0 ms: 1.21x faster                                            |
| float                      | 84.7 ms                                                | 70.6 ms: 1.20x faster                                            |
| logging_format             | 7.23 us                                                | 6.04 us: 1.20x faster                                            |
| async_generators           | 463 ms                                                 | 389 ms: 1.19x faster                                             |
| go                         | 139 ms                                                 | 117 ms: 1.19x faster                                             |
| spectral_norm              | 115 ms                                                 | 97.0 ms: 1.18x faster                                            |
| tomli_loads                | 2.33 sec                                               | 1.98 sec: 1.18x faster                                           |
| logging_simple             | 6.46 us                                                | 5.49 us: 1.18x faster                                            |
| regex_compile              | 148 ms                                                 | 127 ms: 1.17x faster                                             |
| deltablue                  | 3.72 ms                                                | 3.20 ms: 1.16x faster                                            |
| chaos                      | 67.0 ms                                                | 57.8 ms: 1.16x faster                                            |
| raytrace                   | 312 ms                                                 | 269 ms: 1.16x faster                                             |
| xml_etree_parse            | 159 ms                                                 | 138 ms: 1.15x faster                                             |
| sympy_sum                  | 169 ms                                                 | 147 ms: 1.15x faster                                             |
| crypto_pyaes               | 81.9 ms                                                | 71.3 ms: 1.15x faster                                            |
| generators                 | 31.2 ms                                                | 27.3 ms: 1.15x faster                                            |
| regex_effbot               | 3.61 ms                                                | 3.15 ms: 1.14x faster                                            |
| sqlalchemy_imperative      | 18.7 ms                                                | 16.4 ms: 1.14x faster                                            |
| sqlalchemy_declarative     | 147 ms                                                 | 129 ms: 1.14x faster                                             |
| sympy_str                  | 300 ms                                                 | 267 ms: 1.12x faster                                             |
| scimark_monte_carlo        | 75.1 ms                                                | 67.3 ms: 1.12x faster                                            |
| scimark_fft                | 382 ms                                                 | 346 ms: 1.10x faster                                             |
| xml_etree_iterparse        | 107 ms                                                 | 96.9 ms: 1.10x faster                                            |
| sqlglot_parse              | 1.36 ms                                                | 1.25 ms: 1.09x faster                                            |
| sympy_integrate            | 21.4 ms                                                | 19.8 ms: 1.08x faster                                            |
| 2to3                       | 274 ms                                                 | 254 ms: 1.08x faster                                             |
| django_template            | 34.6 ms                                                | 32.1 ms: 1.08x faster                                            |
| sqlglot_transpile          | 1.68 ms                                                | 1.56 ms: 1.08x faster                                            |
| scimark_sparse_mat_mult    | 5.06 ms                                                | 4.70 ms: 1.08x faster                                            |
| pprint_safe_repr           | 776 ms                                                 | 722 ms: 1.07x faster                                             |
| dulwich_log                | 68.5 ms                                                | 64.0 ms: 1.07x faster                                            |
| docutils                   | 2.77 sec                                               | 2.59 sec: 1.07x faster                                           |
| unpickle_pure_python       | 230 us                                                 | 216 us: 1.06x faster                                             |
| scimark_sor                | 129 ms                                                 | 122 ms: 1.06x faster                                             |
| sympy_expand               | 478 ms                                                 | 451 ms: 1.06x faster                                             |
| xml_etree_generate         | 89.2 ms                                                | 84.2 ms: 1.06x faster                                            |
| mdp                        | 2.63 sec                                               | 2.49 sec: 1.06x faster                                           |
| pprint_pformat             | 1.57 sec                                               | 1.49 sec: 1.05x faster                                           |
| mako                       | 11.9 ms                                                | 11.3 ms: 1.05x faster                                            |
| meteor_contest             | 112 ms                                                 | 107 ms: 1.05x faster                                             |
| sqlglot_normalize          | 110 ms                                                 | 105 ms: 1.05x faster                                             |
| pycparser                  | 1.18 sec                                               | 1.12 sec: 1.05x faster                                           |
| sqlglot_optimize           | 54.8 ms                                                | 52.6 ms: 1.04x faster                                            |
| richards                   | 45.8 ms                                                | 44.1 ms: 1.04x faster                                            |
| nqueens                    | 83.3 ms                                                | 80.2 ms: 1.04x faster                                            |
| xml_etree_process          | 61.7 ms                                                | 59.4 ms: 1.04x faster                                            |
| nbody                      | 97.0 ms                                                | 94.1 ms: 1.03x faster                                            |
| scimark_lu                 | 118 ms                                                 | 115 ms: 1.03x faster                                             |
| hexiom                     | 6.41 ms                                                | 6.25 ms: 1.03x faster                                            |
| pyflate                    | 482 ms                                                 | 470 ms: 1.03x faster                                             |
| sqlite_synth               | 2.83 us                                                | 2.77 us: 1.02x faster                                            |
| richards_super             | 51.5 ms                                                | 50.6 ms: 1.02x faster                                            |
| pickle_pure_python         | 324 us                                                 | 320 us: 1.01x faster                                             |
| regex_dna                  | 212 ms                                                 | 210 ms: 1.01x faster                                             |
| fannkuch                   | 417 ms                                                 | 413 ms: 1.01x faster                                             |
| pidigits                   | 187 ms                                                 | 186 ms: 1.01x faster                                             |
| python_startup_no_site     | 6.94 ms                                                | 7.06 ms: 1.02x slower                                            |
| typing_runtime_protocols   | 158 us                                                 | 161 us: 1.02x slower                                             |
| logging_silent             | 104 ns                                                 | 107 ns: 1.02x slower                                             |
| coroutines                 | 23.2 ms                                                | 23.8 ms: 1.03x slower                                            |
| bench_thread_pool          | 842 us                                                 | 866 us: 1.03x slower                                             |
| json_loads                 | 28.5 us                                                | 29.6 us: 1.04x slower                                            |
| regex_v8                   | 23.1 ms                                                | 25.1 ms: 1.08x slower                                            |
| telco                      | 7.10 ms                                                | 7.97 ms: 1.12x slower                                            |
| json_dumps                 | 10.4 ms                                                | 12.1 ms: 1.16x slower                                            |
| gc_traversal               | 3.79 ms                                                | 4.58 ms: 1.21x slower                                            |
| coverage                   | 72.7 ms                                                | 90.7 ms: 1.25x slower                                            |
| python_startup             | 9.55 ms                                                | 12.9 ms: 1.35x slower                                            |
| create_gc_cycles           | 1.48 ms                                                | 2.44 ms: 1.66x slower                                            |
| bench_mp_pool              | 24.0 ms                                                | 81.5 ms: 3.39x slower                                            |
| Geometric mean             | (ref)                                                  | 1.10x faster                                                     |

Benchmark hidden because not significant (2): asyncio_websockets, json
Ignored benchmarks (14) of results/bm-20231002-3.12.0-0fb18b0/bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (12) of results/bm-20250121-3.14.0a4+-6476205/bm-20250121-linux-x86_64-iritkatriel-binaryops-3.14.0a4+-6476205.json: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift

- Geometric mean (including insignificant results): 1.117x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.06x
- 95% likely to have a speedup of 1.06x
- 99% likely to have a speedup of 1.05x

# Memory
- memory change: 1.09x