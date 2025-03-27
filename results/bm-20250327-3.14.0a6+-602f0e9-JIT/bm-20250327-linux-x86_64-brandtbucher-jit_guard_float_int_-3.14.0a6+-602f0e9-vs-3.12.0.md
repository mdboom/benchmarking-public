# Results vs. 3.12.0

- fork: brandtbucher
- ref: jit_guard_float_int_
- machine: linux-x86_64
- commit hash: 602f0e9
- commit date: 2025-03-27
- overall geometric mean: 1.133x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.06x faster
- Memory change: 1.12x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| 2to3           | 274 ms                                                 | 261 ms: 1.05x faster                                                         |
| docutils       | 2.77 sec                                               | 2.66 sec: 1.04x faster                                                       |
| Geometric mean | (ref)                                                  | 1.05x faster                                                                 |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 620 ms: 1.91x faster                                                         |
| async_tree_io              | 1.16 sec                                               | 617 ms: 1.87x faster                                                         |
| async_tree_memoization     | 578 ms                                                 | 316 ms: 1.83x faster                                                         |
| async_tree_memoization_tg  | 575 ms                                                 | 316 ms: 1.82x faster                                                         |
| async_tree_none            | 472 ms                                                 | 261 ms: 1.81x faster                                                         |
| async_tree_none_tg         | 450 ms                                                 | 251 ms: 1.79x faster                                                         |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 476 ms: 1.52x faster                                                         |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 488 ms: 1.49x faster                                                         |
| Geometric mean             | (ref)                                                  | 1.75x faster                                                                 |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| float          | 84.7 ms                                                | 63.6 ms: 1.33x faster                                                        |
| nbody          | 97.0 ms                                                | 85.7 ms: 1.13x faster                                                        |
| pidigits       | 187 ms                                                 | 186 ms: 1.01x faster                                                         |
| Geometric mean | (ref)                                                  | 1.15x faster                                                                 |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| regex_compile  | 148 ms                                                 | 127 ms: 1.17x faster                                                         |
| regex_effbot   | 3.61 ms                                                | 3.18 ms: 1.13x faster                                                        |
| regex_v8       | 23.1 ms                                                | 22.2 ms: 1.04x faster                                                        |
| regex_dna      | 212 ms                                                 | 217 ms: 1.02x slower                                                         |
| Geometric mean | (ref)                                                  | 1.08x faster                                                                 |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| tomli_loads          | 2.33 sec                                               | 1.88 sec: 1.24x faster                                                       |
| xml_etree_parse      | 159 ms                                                 | 140 ms: 1.14x faster                                                         |
| xml_etree_generate   | 89.2 ms                                                | 79.3 ms: 1.12x faster                                                        |
| xml_etree_process    | 61.7 ms                                                | 56.0 ms: 1.10x faster                                                        |
| xml_etree_iterparse  | 107 ms                                                 | 97.3 ms: 1.10x faster                                                        |
| unpickle_pure_python | 230 us                                                 | 211 us: 1.09x faster                                                         |
| json_loads           | 28.5 us                                                | 29.8 us: 1.05x slower                                                        |
| json_dumps           | 10.4 ms                                                | 11.5 ms: 1.11x slower                                                        |
| Geometric mean       | (ref)                                                  | 1.07x faster                                                                 |

Benchmark hidden because not significant (1): pickle_pure_python

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| python_startup_no_site | 6.94 ms                                                | 8.23 ms: 1.19x slower                                                        |
| python_startup         | 9.55 ms                                                | 13.1 ms: 1.37x slower                                                        |
| Geometric mean         | (ref)                                                  | 1.28x slower                                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|-----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| mako            | 11.9 ms                                                | 10.9 ms: 1.09x faster                                                        |
| django_template | 34.6 ms                                                | 32.3 ms: 1.07x faster                                                        |
| Geometric mean  | (ref)                                                  | 1.08x faster                                                                 |

All benchmarks:
===============

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| mdp                        | 2.63 sec                                               | 1.24 sec: 2.12x faster                                                       |
| async_tree_io_tg           | 1.18 sec                                               | 620 ms: 1.91x faster                                                         |
| async_tree_io              | 1.16 sec                                               | 617 ms: 1.87x faster                                                         |
| async_tree_memoization     | 578 ms                                                 | 316 ms: 1.83x faster                                                         |
| async_tree_memoization_tg  | 575 ms                                                 | 316 ms: 1.82x faster                                                         |
| async_tree_none            | 472 ms                                                 | 261 ms: 1.81x faster                                                         |
| async_tree_none_tg         | 450 ms                                                 | 251 ms: 1.79x faster                                                         |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 476 ms: 1.52x faster                                                         |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 488 ms: 1.49x faster                                                         |
| deepcopy                   | 371 us                                                 | 258 us: 1.44x faster                                                         |
| deepcopy_memo              | 40.7 us                                                | 29.2 us: 1.39x faster                                                        |
| float                      | 84.7 ms                                                | 63.6 ms: 1.33x faster                                                        |
| richards                   | 45.8 ms                                                | 35.4 ms: 1.29x faster                                                        |
| richards_super             | 51.5 ms                                                | 40.4 ms: 1.28x faster                                                        |
| deepcopy_reduce            | 3.35 us                                                | 2.67 us: 1.25x faster                                                        |
| tomli_loads                | 2.33 sec                                               | 1.88 sec: 1.24x faster                                                       |
| deltablue                  | 3.72 ms                                                | 3.07 ms: 1.21x faster                                                        |
| scimark_fft                | 382 ms                                                 | 317 ms: 1.21x faster                                                         |
| spectral_norm              | 115 ms                                                 | 96.9 ms: 1.18x faster                                                        |
| raytrace                   | 312 ms                                                 | 264 ms: 1.18x faster                                                         |
| logging_format             | 7.23 us                                                | 6.15 us: 1.17x faster                                                        |
| regex_compile              | 148 ms                                                 | 127 ms: 1.17x faster                                                         |
| pathlib                    | 19.3 ms                                                | 16.7 ms: 1.16x faster                                                        |
| comprehensions             | 21.8 us                                                | 18.8 us: 1.16x faster                                                        |
| chaos                      | 67.0 ms                                                | 58.0 ms: 1.15x faster                                                        |
| logging_simple             | 6.46 us                                                | 5.63 us: 1.15x faster                                                        |
| xml_etree_parse            | 159 ms                                                 | 140 ms: 1.14x faster                                                         |
| scimark_sparse_mat_mult    | 5.06 ms                                                | 4.44 ms: 1.14x faster                                                        |
| dulwich_log                | 68.5 ms                                                | 60.3 ms: 1.14x faster                                                        |
| regex_effbot               | 3.61 ms                                                | 3.18 ms: 1.13x faster                                                        |
| nbody                      | 97.0 ms                                                | 85.7 ms: 1.13x faster                                                        |
| xml_etree_generate         | 89.2 ms                                                | 79.3 ms: 1.12x faster                                                        |
| scimark_monte_carlo        | 75.1 ms                                                | 67.0 ms: 1.12x faster                                                        |
| sqlalchemy_declarative     | 147 ms                                                 | 132 ms: 1.12x faster                                                         |
| async_generators           | 463 ms                                                 | 416 ms: 1.11x faster                                                         |
| pyflate                    | 482 ms                                                 | 435 ms: 1.11x faster                                                         |
| sympy_sum                  | 169 ms                                                 | 153 ms: 1.11x faster                                                         |
| go                         | 139 ms                                                 | 126 ms: 1.11x faster                                                         |
| xml_etree_process          | 61.7 ms                                                | 56.0 ms: 1.10x faster                                                        |
| xml_etree_iterparse        | 107 ms                                                 | 97.3 ms: 1.10x faster                                                        |
| sqlalchemy_imperative      | 18.7 ms                                                | 17.1 ms: 1.10x faster                                                        |
| generators                 | 31.2 ms                                                | 28.5 ms: 1.10x faster                                                        |
| sympy_str                  | 300 ms                                                 | 274 ms: 1.10x faster                                                         |
| unpickle_pure_python       | 230 us                                                 | 211 us: 1.09x faster                                                         |
| mako                       | 11.9 ms                                                | 10.9 ms: 1.09x faster                                                        |
| crypto_pyaes               | 81.9 ms                                                | 75.8 ms: 1.08x faster                                                        |
| sympy_integrate            | 21.4 ms                                                | 19.9 ms: 1.08x faster                                                        |
| logging_silent             | 104 ns                                                 | 97.5 ns: 1.07x faster                                                        |
| django_template            | 34.6 ms                                                | 32.3 ms: 1.07x faster                                                        |
| scimark_sor                | 129 ms                                                 | 121 ms: 1.07x faster                                                         |
| 2to3                       | 274 ms                                                 | 261 ms: 1.05x faster                                                         |
| regex_v8                   | 23.1 ms                                                | 22.2 ms: 1.04x faster                                                        |
| docutils                   | 2.77 sec                                               | 2.66 sec: 1.04x faster                                                       |
| sqlite_synth               | 2.83 us                                                | 2.73 us: 1.04x faster                                                        |
| meteor_contest             | 112 ms                                                 | 108 ms: 1.04x faster                                                         |
| pycparser                  | 1.18 sec                                               | 1.14 sec: 1.03x faster                                                       |
| scimark_lu                 | 118 ms                                                 | 116 ms: 1.02x faster                                                         |
| fannkuch                   | 417 ms                                                 | 410 ms: 1.02x faster                                                         |
| pprint_safe_repr           | 776 ms                                                 | 763 ms: 1.02x faster                                                         |
| sympy_expand               | 478 ms                                                 | 471 ms: 1.01x faster                                                         |
| coroutines                 | 23.2 ms                                                | 22.9 ms: 1.01x faster                                                        |
| pidigits                   | 187 ms                                                 | 186 ms: 1.01x faster                                                         |
| pprint_pformat             | 1.57 sec                                               | 1.58 sec: 1.01x slower                                                       |
| json                       | 5.26 ms                                                | 5.33 ms: 1.01x slower                                                        |
| regex_dna                  | 212 ms                                                 | 217 ms: 1.02x slower                                                         |
| bench_thread_pool          | 842 us                                                 | 878 us: 1.04x slower                                                         |
| json_loads                 | 28.5 us                                                | 29.8 us: 1.05x slower                                                        |
| hexiom                     | 6.41 ms                                                | 6.77 ms: 1.06x slower                                                        |
| typing_runtime_protocols   | 158 us                                                 | 168 us: 1.06x slower                                                         |
| json_dumps                 | 10.4 ms                                                | 11.5 ms: 1.11x slower                                                        |
| telco                      | 7.10 ms                                                | 7.89 ms: 1.11x slower                                                        |
| coverage                   | 72.7 ms                                                | 83.6 ms: 1.15x slower                                                        |
| python_startup_no_site     | 6.94 ms                                                | 8.23 ms: 1.19x slower                                                        |
| gc_traversal               | 3.79 ms                                                | 4.68 ms: 1.23x slower                                                        |
| python_startup             | 9.55 ms                                                | 13.1 ms: 1.37x slower                                                        |
| create_gc_cycles           | 1.48 ms                                                | 2.49 ms: 1.68x slower                                                        |
| bench_mp_pool              | 24.0 ms                                                | 83.4 ms: 3.47x slower                                                        |
| Geometric mean             | (ref)                                                  | 1.11x faster                                                                 |

Benchmark hidden because not significant (3): asyncio_websockets, nqueens, pickle_pure_python
Ignored benchmarks (18) of results/bm-20231002-3.12.0-0fb18b0/bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (15) of results/bm-20250327-3.14.0a6+-602f0e9-JIT/bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9.json: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers

- Geometric mean (including insignificant results): 1.133x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.08x
- 95% likely to have a speedup of 1.08x
- 99% likely to have a speedup of 1.06x

# Memory
- memory change: 1.12x