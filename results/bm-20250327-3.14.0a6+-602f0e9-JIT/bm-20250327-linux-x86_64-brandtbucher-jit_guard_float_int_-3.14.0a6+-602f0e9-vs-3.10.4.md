# Results vs. 3.10.4

- fork: brandtbucher
- ref: jit_guard_float_int_
- machine: linux-x86_64
- commit hash: 602f0e9
- commit date: 2025-03-27
- overall geometric mean: 1.469x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.32x faster
- Memory change: 1.30x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| 2to3           | 348 ms                                                 | 261 ms: 1.34x faster                                                         |
| docutils       | 3.30 sec                                               | 2.66 sec: 1.24x faster                                                       |
| html5lib       | 88.9 ms                                                | 61.7 ms: 1.44x faster                                                        |
| Geometric mean | (ref)                                                  | 1.34x faster                                                                 |

Benchmarks with tag 'asyncio':
==============================

| Benchmark               | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|-------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| async_tree_io           | 1.77 sec                                               | 617 ms: 2.87x faster                                                         |
| async_tree_none         | 728 ms                                                 | 261 ms: 2.79x faster                                                         |
| async_tree_memoization  | 870 ms                                                 | 316 ms: 2.75x faster                                                         |
| async_tree_cpu_io_mixed | 1.02 sec                                               | 488 ms: 2.08x faster                                                         |
| Geometric mean          | (ref)                                                  | 2.60x faster                                                                 |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| float          | 117 ms                                                 | 63.6 ms: 1.84x faster                                                        |
| nbody          | 154 ms                                                 | 85.7 ms: 1.79x faster                                                        |
| pidigits       | 191 ms                                                 | 186 ms: 1.03x faster                                                         |
| Geometric mean | (ref)                                                  | 1.50x faster                                                                 |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| regex_compile  | 188 ms                                                 | 127 ms: 1.49x faster                                                         |
| regex_v8       | 27.8 ms                                                | 22.2 ms: 1.25x faster                                                        |
| regex_effbot   | 3.63 ms                                                | 3.18 ms: 1.14x faster                                                        |
| regex_dna      | 227 ms                                                 | 217 ms: 1.05x faster                                                         |
| Geometric mean | (ref)                                                  | 1.22x faster                                                                 |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| tomli_loads          | 3.14 sec                                               | 1.88 sec: 1.67x faster                                                       |
| unpickle_pure_python | 331 us                                                 | 211 us: 1.57x faster                                                         |
| pickle_pure_python   | 484 us                                                 | 326 us: 1.49x faster                                                         |
| xml_etree_process    | 79.1 ms                                                | 56.0 ms: 1.41x faster                                                        |
| xml_etree_generate   | 99.4 ms                                                | 79.3 ms: 1.25x faster                                                        |
| json_dumps           | 14.2 ms                                                | 11.5 ms: 1.23x faster                                                        |
| xml_etree_parse      | 168 ms                                                 | 140 ms: 1.20x faster                                                         |
| xml_etree_iterparse  | 115 ms                                                 | 97.3 ms: 1.19x faster                                                        |
| json_loads           | 31.2 us                                                | 29.8 us: 1.05x faster                                                        |
| Geometric mean       | (ref)                                                  | 1.33x faster                                                                 |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| python_startup         | 14.6 ms                                                | 13.1 ms: 1.11x faster                                                        |
| python_startup_no_site | 5.93 ms                                                | 8.23 ms: 1.39x slower                                                        |
| Geometric mean         | (ref)                                                  | 1.12x slower                                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|-----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| genshi_text     | 31.8 ms                                                | 20.9 ms: 1.52x faster                                                        |
| mako            | 16.3 ms                                                | 10.9 ms: 1.49x faster                                                        |
| django_template | 48.2 ms                                                | 32.3 ms: 1.49x faster                                                        |
| genshi_xml      | 66.0 ms                                                | 49.2 ms: 1.34x faster                                                        |
| Geometric mean  | (ref)                                                  | 1.46x faster                                                                 |

All benchmarks:
===============

| Benchmark                | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|--------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| typing_runtime_protocols | 544 us                                                 | 168 us: 3.24x faster                                                         |
| async_tree_io            | 1.77 sec                                               | 617 ms: 2.87x faster                                                         |
| generators               | 80.1 ms                                                | 28.5 ms: 2.81x faster                                                        |
| async_tree_none          | 728 ms                                                 | 261 ms: 2.79x faster                                                         |
| async_tree_memoization   | 870 ms                                                 | 316 ms: 2.75x faster                                                         |
| deltablue                | 7.91 ms                                                | 3.07 ms: 2.58x faster                                                        |
| richards_super           | 94.7 ms                                                | 40.4 ms: 2.34x faster                                                        |
| mdp                      | 2.85 sec                                               | 1.24 sec: 2.29x faster                                                       |
| richards                 | 79.3 ms                                                | 35.4 ms: 2.24x faster                                                        |
| async_tree_cpu_io_mixed  | 1.02 sec                                               | 488 ms: 2.08x faster                                                         |
| deepcopy_memo            | 58.5 us                                                | 29.2 us: 2.00x faster                                                        |
| chaos                    | 115 ms                                                 | 58.0 ms: 1.99x faster                                                        |
| pylint                   | 551 ms                                                 | 280 ms: 1.97x faster                                                         |
| logging_silent           | 190 ns                                                 | 97.5 ns: 1.95x faster                                                        |
| raytrace                 | 507 ms                                                 | 264 ms: 1.92x faster                                                         |
| go                       | 240 ms                                                 | 126 ms: 1.90x faster                                                         |
| deepcopy                 | 479 us                                                 | 258 us: 1.86x faster                                                         |
| float                    | 117 ms                                                 | 63.6 ms: 1.84x faster                                                        |
| scimark_sor              | 220 ms                                                 | 121 ms: 1.82x faster                                                         |
| nbody                    | 154 ms                                                 | 85.7 ms: 1.79x faster                                                        |
| scimark_monte_carlo      | 118 ms                                                 | 67.0 ms: 1.77x faster                                                        |
| spectral_norm            | 170 ms                                                 | 96.9 ms: 1.75x faster                                                        |
| crypto_pyaes             | 128 ms                                                 | 75.8 ms: 1.69x faster                                                        |
| tomli_loads              | 3.14 sec                                               | 1.88 sec: 1.67x faster                                                       |
| pyflate                  | 716 ms                                                 | 435 ms: 1.65x faster                                                         |
| unpickle_pure_python     | 331 us                                                 | 211 us: 1.57x faster                                                         |
| deepcopy_reduce          | 4.17 us                                                | 2.67 us: 1.56x faster                                                        |
| hexiom                   | 10.4 ms                                                | 6.77 ms: 1.54x faster                                                        |
| comprehensions           | 28.8 us                                                | 18.8 us: 1.53x faster                                                        |
| coroutines               | 35.1 ms                                                | 22.9 ms: 1.53x faster                                                        |
| scimark_lu               | 176 ms                                                 | 116 ms: 1.52x faster                                                         |
| genshi_text              | 31.8 ms                                                | 20.9 ms: 1.52x faster                                                        |
| mako                     | 16.3 ms                                                | 10.9 ms: 1.49x faster                                                        |
| django_template          | 48.2 ms                                                | 32.3 ms: 1.49x faster                                                        |
| regex_compile            | 188 ms                                                 | 127 ms: 1.49x faster                                                         |
| pickle_pure_python       | 484 us                                                 | 326 us: 1.49x faster                                                         |
| logging_format           | 9.09 us                                                | 6.15 us: 1.48x faster                                                        |
| logging_simple           | 8.30 us                                                | 5.63 us: 1.48x faster                                                        |
| scimark_fft              | 466 ms                                                 | 317 ms: 1.47x faster                                                         |
| scimark_sparse_mat_mult  | 6.47 ms                                                | 4.44 ms: 1.46x faster                                                        |
| html5lib                 | 88.9 ms                                                | 61.7 ms: 1.44x faster                                                        |
| xml_etree_process        | 79.1 ms                                                | 56.0 ms: 1.41x faster                                                        |
| dulwich_log              | 84.3 ms                                                | 60.3 ms: 1.40x faster                                                        |
| pycparser                | 1.58 sec                                               | 1.14 sec: 1.38x faster                                                       |
| sqlalchemy_imperative    | 23.3 ms                                                | 17.1 ms: 1.37x faster                                                        |
| genshi_xml               | 66.0 ms                                                | 49.2 ms: 1.34x faster                                                        |
| 2to3                     | 348 ms                                                 | 261 ms: 1.34x faster                                                         |
| pprint_safe_repr         | 1.02 sec                                               | 763 ms: 1.33x faster                                                         |
| pprint_pformat           | 2.10 sec                                               | 1.58 sec: 1.33x faster                                                       |
| sqlalchemy_declarative   | 172 ms                                                 | 132 ms: 1.31x faster                                                         |
| sympy_integrate          | 25.8 ms                                                | 19.9 ms: 1.30x faster                                                        |
| fannkuch                 | 532 ms                                                 | 410 ms: 1.30x faster                                                         |
| sympy_sum                | 196 ms                                                 | 153 ms: 1.29x faster                                                         |
| nqueens                  | 106 ms                                                 | 83.5 ms: 1.27x faster                                                        |
| sympy_str                | 346 ms                                                 | 274 ms: 1.26x faster                                                         |
| xml_etree_generate       | 99.4 ms                                                | 79.3 ms: 1.25x faster                                                        |
| regex_v8                 | 27.8 ms                                                | 22.2 ms: 1.25x faster                                                        |
| docutils                 | 3.30 sec                                               | 2.66 sec: 1.24x faster                                                       |
| json_dumps               | 14.2 ms                                                | 11.5 ms: 1.23x faster                                                        |
| pathlib                  | 20.5 ms                                                | 16.7 ms: 1.23x faster                                                        |
| xml_etree_parse          | 168 ms                                                 | 140 ms: 1.20x faster                                                         |
| sympy_expand             | 566 ms                                                 | 471 ms: 1.20x faster                                                         |
| xml_etree_iterparse      | 115 ms                                                 | 97.3 ms: 1.19x faster                                                        |
| regex_effbot             | 3.63 ms                                                | 3.18 ms: 1.14x faster                                                        |
| bench_thread_pool        | 986 us                                                 | 878 us: 1.12x faster                                                         |
| python_startup           | 14.6 ms                                                | 13.1 ms: 1.11x faster                                                        |
| sqlite_synth             | 3.02 us                                                | 2.73 us: 1.11x faster                                                        |
| meteor_contest           | 120 ms                                                 | 108 ms: 1.10x faster                                                         |
| async_generators         | 444 ms                                                 | 416 ms: 1.07x faster                                                         |
| json                     | 5.69 ms                                                | 5.33 ms: 1.07x faster                                                        |
| json_loads               | 31.2 us                                                | 29.8 us: 1.05x faster                                                        |
| regex_dna                | 227 ms                                                 | 217 ms: 1.05x faster                                                         |
| pidigits                 | 191 ms                                                 | 186 ms: 1.03x faster                                                         |
| asyncio_websockets       | 559 ms                                                 | 552 ms: 1.01x faster                                                         |
| coverage                 | 79.4 ms                                                | 83.6 ms: 1.05x slower                                                        |
| telco                    | 7.27 ms                                                | 7.89 ms: 1.09x slower                                                        |
| gc_traversal             | 3.62 ms                                                | 4.68 ms: 1.29x slower                                                        |
| python_startup_no_site   | 5.93 ms                                                | 8.23 ms: 1.39x slower                                                        |
| create_gc_cycles         | 1.62 ms                                                | 2.49 ms: 1.53x slower                                                        |
| bench_mp_pool            | 24.0 ms                                                | 83.4 ms: 3.47x slower                                                        |
| Geometric mean           | (ref)                                                  | 1.44x faster                                                                 |
Ignored benchmarks (21) of results/bm-20220323-3.10.4-9d38120/bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, djangocms, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, thrift, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (15) of results/bm-20250327-3.14.0a6+-602f0e9-JIT/bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9.json: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile, subparsers

- Geometric mean (including insignificant results): 1.469x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.35x
- 95% likely to have a speedup of 1.34x
- 99% likely to have a speedup of 1.32x

# Memory
- memory change: 1.30x