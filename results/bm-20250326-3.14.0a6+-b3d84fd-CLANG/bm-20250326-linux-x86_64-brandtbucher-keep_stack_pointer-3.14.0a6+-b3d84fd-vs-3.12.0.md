# Results vs. 3.12.0

- fork: brandtbucher
- ref: keep_stack_pointer
- machine: linux-x86_64
- commit hash: b3d84fd
- commit date: 2025-03-26
- overall geometric mean: 1.151x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.08x faster
- Memory change: 1.11x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| 2to3           | 274 ms                                                 | 248 ms: 1.11x faster                                                       |
| docutils       | 2.77 sec                                               | 2.56 sec: 1.08x faster                                                     |
| Geometric mean | (ref)                                                  | 1.09x faster                                                               |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 611 ms: 1.94x faster                                                       |
| async_tree_io              | 1.16 sec                                               | 601 ms: 1.92x faster                                                       |
| async_tree_memoization_tg  | 575 ms                                                 | 302 ms: 1.90x faster                                                       |
| async_tree_none            | 472 ms                                                 | 249 ms: 1.89x faster                                                       |
| async_tree_memoization     | 578 ms                                                 | 306 ms: 1.89x faster                                                       |
| async_tree_none_tg         | 450 ms                                                 | 240 ms: 1.87x faster                                                       |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 473 ms: 1.53x faster                                                       |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 490 ms: 1.48x faster                                                       |
| Geometric mean             | (ref)                                                  | 1.79x faster                                                               |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| float          | 84.7 ms                                                | 66.6 ms: 1.27x faster                                                      |
| nbody          | 97.0 ms                                                | 82.8 ms: 1.17x faster                                                      |
| pidigits       | 187 ms                                                 | 201 ms: 1.08x slower                                                       |
| Geometric mean | (ref)                                                  | 1.11x faster                                                               |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| regex_compile  | 148 ms                                                 | 127 ms: 1.17x faster                                                       |
| regex_effbot   | 3.61 ms                                                | 3.11 ms: 1.16x faster                                                      |
| regex_dna      | 212 ms                                                 | 186 ms: 1.14x faster                                                       |
| regex_v8       | 23.1 ms                                                | 22.8 ms: 1.01x faster                                                      |
| Geometric mean | (ref)                                                  | 1.12x faster                                                               |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| tomli_loads          | 2.33 sec                                               | 1.92 sec: 1.22x faster                                                     |
| unpickle_pure_python | 230 us                                                 | 212 us: 1.09x faster                                                       |
| pickle_pure_python   | 324 us                                                 | 301 us: 1.08x faster                                                       |
| xml_etree_iterparse  | 107 ms                                                 | 101 ms: 1.05x faster                                                       |
| xml_etree_process    | 61.7 ms                                                | 59.7 ms: 1.03x faster                                                      |
| xml_etree_parse      | 159 ms                                                 | 157 ms: 1.02x faster                                                       |
| xml_etree_generate   | 89.2 ms                                                | 87.8 ms: 1.02x faster                                                      |
| json_loads           | 28.5 us                                                | 28.3 us: 1.01x faster                                                      |
| json_dumps           | 10.4 ms                                                | 12.5 ms: 1.20x slower                                                      |
| Geometric mean       | (ref)                                                  | 1.03x faster                                                               |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|------------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| python_startup_no_site | 6.94 ms                                                | 8.12 ms: 1.17x slower                                                      |
| python_startup         | 9.55 ms                                                | 12.9 ms: 1.35x slower                                                      |
| Geometric mean         | (ref)                                                  | 1.26x slower                                                               |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|-----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| django_template | 34.6 ms                                                | 30.9 ms: 1.12x faster                                                      |
| mako            | 11.9 ms                                                | 11.7 ms: 1.02x faster                                                      |
| Geometric mean  | (ref)                                                  | 1.07x faster                                                               |

All benchmarks:
===============

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 611 ms: 1.94x faster                                                       |
| async_tree_io              | 1.16 sec                                               | 601 ms: 1.92x faster                                                       |
| async_tree_memoization_tg  | 575 ms                                                 | 302 ms: 1.90x faster                                                       |
| async_tree_none            | 472 ms                                                 | 249 ms: 1.89x faster                                                       |
| async_tree_memoization     | 578 ms                                                 | 306 ms: 1.89x faster                                                       |
| async_tree_none_tg         | 450 ms                                                 | 240 ms: 1.87x faster                                                       |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 473 ms: 1.53x faster                                                       |
| deepcopy                   | 371 us                                                 | 245 us: 1.51x faster                                                       |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 490 ms: 1.48x faster                                                       |
| deepcopy_memo              | 40.7 us                                                | 29.2 us: 1.39x faster                                                      |
| spectral_norm              | 115 ms                                                 | 83.6 ms: 1.37x faster                                                      |
| comprehensions             | 21.8 us                                                | 15.9 us: 1.37x faster                                                      |
| pathlib                    | 19.3 ms                                                | 15.0 ms: 1.29x faster                                                      |
| go                         | 139 ms                                                 | 108 ms: 1.29x faster                                                       |
| scimark_fft                | 382 ms                                                 | 299 ms: 1.28x faster                                                       |
| deepcopy_reduce            | 3.35 us                                                | 2.62 us: 1.28x faster                                                      |
| float                      | 84.7 ms                                                | 66.6 ms: 1.27x faster                                                      |
| deltablue                  | 3.72 ms                                                | 2.92 ms: 1.27x faster                                                      |
| raytrace                   | 312 ms                                                 | 249 ms: 1.26x faster                                                       |
| scimark_monte_carlo        | 75.1 ms                                                | 60.1 ms: 1.25x faster                                                      |
| chaos                      | 67.0 ms                                                | 53.9 ms: 1.24x faster                                                      |
| async_generators           | 463 ms                                                 | 379 ms: 1.22x faster                                                       |
| logging_format             | 7.23 us                                                | 5.92 us: 1.22x faster                                                      |
| tomli_loads                | 2.33 sec                                               | 1.92 sec: 1.22x faster                                                     |
| scimark_sor                | 129 ms                                                 | 106 ms: 1.21x faster                                                       |
| logging_silent             | 104 ns                                                 | 86.8 ns: 1.20x faster                                                      |
| dulwich_log                | 68.5 ms                                                | 57.4 ms: 1.19x faster                                                      |
| logging_simple             | 6.46 us                                                | 5.42 us: 1.19x faster                                                      |
| scimark_sparse_mat_mult    | 5.06 ms                                                | 4.25 ms: 1.19x faster                                                      |
| regex_compile              | 148 ms                                                 | 127 ms: 1.17x faster                                                       |
| nbody                      | 97.0 ms                                                | 82.8 ms: 1.17x faster                                                      |
| sympy_sum                  | 169 ms                                                 | 144 ms: 1.17x faster                                                       |
| pyflate                    | 482 ms                                                 | 412 ms: 1.17x faster                                                       |
| regex_effbot               | 3.61 ms                                                | 3.11 ms: 1.16x faster                                                      |
| crypto_pyaes               | 81.9 ms                                                | 70.5 ms: 1.16x faster                                                      |
| sqlalchemy_declarative     | 147 ms                                                 | 127 ms: 1.16x faster                                                       |
| sqlalchemy_imperative      | 18.7 ms                                                | 16.2 ms: 1.15x faster                                                      |
| sympy_str                  | 300 ms                                                 | 261 ms: 1.15x faster                                                       |
| sympy_integrate            | 21.4 ms                                                | 18.7 ms: 1.15x faster                                                      |
| regex_dna                  | 212 ms                                                 | 186 ms: 1.14x faster                                                       |
| generators                 | 31.2 ms                                                | 27.4 ms: 1.14x faster                                                      |
| richards                   | 45.8 ms                                                | 40.9 ms: 1.12x faster                                                      |
| django_template            | 34.6 ms                                                | 30.9 ms: 1.12x faster                                                      |
| hexiom                     | 6.41 ms                                                | 5.74 ms: 1.12x faster                                                      |
| 2to3                       | 274 ms                                                 | 248 ms: 1.11x faster                                                       |
| scimark_lu                 | 118 ms                                                 | 107 ms: 1.10x faster                                                       |
| unpickle_pure_python       | 230 us                                                 | 212 us: 1.09x faster                                                       |
| richards_super             | 51.5 ms                                                | 47.6 ms: 1.08x faster                                                      |
| docutils                   | 2.77 sec                                               | 2.56 sec: 1.08x faster                                                     |
| sympy_expand               | 478 ms                                                 | 444 ms: 1.08x faster                                                       |
| pickle_pure_python         | 324 us                                                 | 301 us: 1.08x faster                                                       |
| nqueens                    | 83.3 ms                                                | 78.6 ms: 1.06x faster                                                      |
| pycparser                  | 1.18 sec                                               | 1.12 sec: 1.06x faster                                                     |
| sqlite_synth               | 2.83 us                                                | 2.69 us: 1.06x faster                                                      |
| xml_etree_iterparse        | 107 ms                                                 | 101 ms: 1.05x faster                                                       |
| meteor_contest             | 112 ms                                                 | 108 ms: 1.04x faster                                                       |
| coroutines                 | 23.2 ms                                                | 22.4 ms: 1.04x faster                                                      |
| xml_etree_process          | 61.7 ms                                                | 59.7 ms: 1.03x faster                                                      |
| pprint_safe_repr           | 776 ms                                                 | 752 ms: 1.03x faster                                                       |
| pprint_pformat             | 1.57 sec                                               | 1.52 sec: 1.03x faster                                                     |
| fannkuch                   | 417 ms                                                 | 409 ms: 1.02x faster                                                       |
| typing_runtime_protocols   | 158 us                                                 | 155 us: 1.02x faster                                                       |
| mako                       | 11.9 ms                                                | 11.7 ms: 1.02x faster                                                      |
| xml_etree_parse            | 159 ms                                                 | 157 ms: 1.02x faster                                                       |
| xml_etree_generate         | 89.2 ms                                                | 87.8 ms: 1.02x faster                                                      |
| regex_v8                   | 23.1 ms                                                | 22.8 ms: 1.01x faster                                                      |
| bench_thread_pool          | 842 us                                                 | 835 us: 1.01x faster                                                       |
| json_loads                 | 28.5 us                                                | 28.3 us: 1.01x faster                                                      |
| telco                      | 7.10 ms                                                | 7.41 ms: 1.04x slower                                                      |
| pidigits                   | 187 ms                                                 | 201 ms: 1.08x slower                                                       |
| mdp                        | 2.63 sec                                               | 2.88 sec: 1.09x slower                                                     |
| coverage                   | 72.7 ms                                                | 80.9 ms: 1.11x slower                                                      |
| python_startup_no_site     | 6.94 ms                                                | 8.12 ms: 1.17x slower                                                      |
| json_dumps                 | 10.4 ms                                                | 12.5 ms: 1.20x slower                                                      |
| gc_traversal               | 3.79 ms                                                | 4.81 ms: 1.27x slower                                                      |
| python_startup             | 9.55 ms                                                | 12.9 ms: 1.35x slower                                                      |
| create_gc_cycles           | 1.48 ms                                                | 2.55 ms: 1.73x slower                                                      |
| bench_mp_pool              | 24.0 ms                                                | 81.5 ms: 3.39x slower                                                      |
| Geometric mean             | (ref)                                                  | 1.13x faster                                                               |

Benchmark hidden because not significant (2): json, asyncio_websockets
Ignored benchmarks (18) of results/bm-20231002-3.12.0-0fb18b0/bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (16) of results/bm-20250326-3.14.0a6+-b3d84fd-CLANG/bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd.json: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers, thrift

- Geometric mean (including insignificant results): 1.151x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.10x
- 95% likely to have a speedup of 1.09x
- 99% likely to have a speedup of 1.08x

# Memory
- memory change: 1.11x