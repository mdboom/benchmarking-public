# Results vs. 3.10.4

- fork: iritkatriel
- ref: stats
- machine: linux-x86_64
- commit hash: fb33c24
- commit date: 2025-02-21
- overall geometric mean: 1.454x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.32x faster
- Memory change: 1.27x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| 2to3           | 348 ms                                                 | 254 ms: 1.37x faster                                         |
| docutils       | 3.30 sec                                               | 2.59 sec: 1.27x faster                                       |
| html5lib       | 88.9 ms                                                | 60.6 ms: 1.47x faster                                        |
| Geometric mean | (ref)                                                  | 1.37x faster                                                 |

Benchmarks with tag 'asyncio':
==============================

| Benchmark               | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|-------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| async_tree_io           | 1.77 sec                                               | 608 ms: 2.91x faster                                         |
| async_tree_none         | 728 ms                                                 | 261 ms: 2.79x faster                                         |
| async_tree_memoization  | 870 ms                                                 | 326 ms: 2.67x faster                                         |
| async_tree_cpu_io_mixed | 1.02 sec                                               | 484 ms: 2.10x faster                                         |
| Geometric mean          | (ref)                                                  | 2.60x faster                                                 |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| nbody          | 154 ms                                                 | 90.3 ms: 1.70x faster                                        |
| float          | 117 ms                                                 | 69.6 ms: 1.68x faster                                        |
| pidigits       | 191 ms                                                 | 186 ms: 1.03x faster                                         |
| Geometric mean | (ref)                                                  | 1.43x faster                                                 |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| regex_compile  | 188 ms                                                 | 125 ms: 1.51x faster                                         |
| regex_v8       | 27.8 ms                                                | 25.6 ms: 1.09x faster                                        |
| regex_effbot   | 3.63 ms                                                | 3.37 ms: 1.08x faster                                        |
| regex_dna      | 227 ms                                                 | 213 ms: 1.06x faster                                         |
| Geometric mean | (ref)                                                  | 1.17x faster                                                 |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|----------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| tomli_loads          | 3.14 sec                                               | 1.90 sec: 1.65x faster                                       |
| pickle_pure_python   | 484 us                                                 | 316 us: 1.53x faster                                         |
| unpickle_pure_python | 331 us                                                 | 221 us: 1.50x faster                                         |
| xml_etree_process    | 79.1 ms                                                | 59.1 ms: 1.34x faster                                        |
| json_dumps           | 14.2 ms                                                | 11.3 ms: 1.25x faster                                        |
| xml_etree_parse      | 168 ms                                                 | 141 ms: 1.19x faster                                         |
| xml_etree_generate   | 99.4 ms                                                | 84.5 ms: 1.18x faster                                        |
| xml_etree_iterparse  | 115 ms                                                 | 98.2 ms: 1.18x faster                                        |
| json_loads           | 31.2 us                                                | 29.7 us: 1.05x faster                                        |
| Geometric mean       | (ref)                                                  | 1.30x faster                                                 |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| python_startup         | 14.6 ms                                                | 12.9 ms: 1.13x faster                                        |
| python_startup_no_site | 5.93 ms                                                | 7.05 ms: 1.19x slower                                        |
| Geometric mean         | (ref)                                                  | 1.03x slower                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|-----------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| django_template | 48.2 ms                                                | 31.6 ms: 1.52x faster                                        |
| mako            | 16.3 ms                                                | 10.8 ms: 1.51x faster                                        |
| genshi_text     | 31.8 ms                                                | 21.2 ms: 1.50x faster                                        |
| genshi_xml      | 66.0 ms                                                | 48.3 ms: 1.37x faster                                        |
| Geometric mean  | (ref)                                                  | 1.48x faster                                                 |

All benchmarks:
===============

| Benchmark                | bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120 | bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24 |
|--------------------------|:------------------------------------------------------:|:------------------------------------------------------------:|
| typing_runtime_protocols | 544 us                                                 | 157 us: 3.47x faster                                         |
| async_tree_io            | 1.77 sec                                               | 608 ms: 2.91x faster                                         |
| generators               | 80.1 ms                                                | 28.0 ms: 2.86x faster                                        |
| async_tree_none          | 728 ms                                                 | 261 ms: 2.79x faster                                         |
| async_tree_memoization   | 870 ms                                                 | 326 ms: 2.67x faster                                         |
| deltablue                | 7.91 ms                                                | 3.18 ms: 2.49x faster                                        |
| async_tree_cpu_io_mixed  | 1.02 sec                                               | 484 ms: 2.10x faster                                         |
| go                       | 240 ms                                                 | 116 ms: 2.07x faster                                         |
| pylint                   | 551 ms                                                 | 272 ms: 2.02x faster                                         |
| chaos                    | 115 ms                                                 | 58.9 ms: 1.96x faster                                        |
| deepcopy_memo            | 58.5 us                                                | 29.8 us: 1.96x faster                                        |
| deepcopy                 | 479 us                                                 | 254 us: 1.88x faster                                         |
| richards_super           | 94.7 ms                                                | 50.5 ms: 1.88x faster                                        |
| raytrace                 | 507 ms                                                 | 272 ms: 1.86x faster                                         |
| logging_silent           | 190 ns                                                 | 102 ns: 1.86x faster                                         |
| scimark_sor              | 220 ms                                                 | 121 ms: 1.82x faster                                         |
| richards                 | 79.3 ms                                                | 44.1 ms: 1.80x faster                                        |
| crypto_pyaes             | 128 ms                                                 | 72.0 ms: 1.77x faster                                        |
| spectral_norm            | 170 ms                                                 | 96.9 ms: 1.75x faster                                        |
| scimark_monte_carlo      | 118 ms                                                 | 68.1 ms: 1.74x faster                                        |
| comprehensions           | 28.8 us                                                | 16.6 us: 1.74x faster                                        |
| sqlglot_parse            | 2.17 ms                                                | 1.26 ms: 1.72x faster                                        |
| hexiom                   | 10.4 ms                                                | 6.09 ms: 1.71x faster                                        |
| nbody                    | 154 ms                                                 | 90.3 ms: 1.70x faster                                        |
| float                    | 117 ms                                                 | 69.6 ms: 1.68x faster                                        |
| tomli_loads              | 3.14 sec                                               | 1.90 sec: 1.65x faster                                       |
| sqlglot_transpile        | 2.57 ms                                                | 1.57 ms: 1.64x faster                                        |
| pyflate                  | 716 ms                                                 | 450 ms: 1.59x faster                                         |
| deepcopy_reduce          | 4.17 us                                                | 2.67 us: 1.56x faster                                        |
| pickle_pure_python       | 484 us                                                 | 316 us: 1.53x faster                                         |
| coroutines               | 35.1 ms                                                | 23.0 ms: 1.53x faster                                        |
| django_template          | 48.2 ms                                                | 31.6 ms: 1.52x faster                                        |
| regex_compile            | 188 ms                                                 | 125 ms: 1.51x faster                                         |
| mako                     | 16.3 ms                                                | 10.8 ms: 1.51x faster                                        |
| logging_simple           | 8.30 us                                                | 5.49 us: 1.51x faster                                        |
| genshi_text              | 31.8 ms                                                | 21.2 ms: 1.50x faster                                        |
| scimark_lu               | 176 ms                                                 | 117 ms: 1.50x faster                                         |
| unpickle_pure_python     | 331 us                                                 | 221 us: 1.50x faster                                         |
| logging_format           | 9.09 us                                                | 6.13 us: 1.48x faster                                        |
| html5lib                 | 88.9 ms                                                | 60.6 ms: 1.47x faster                                        |
| pprint_pformat           | 2.10 sec                                               | 1.45 sec: 1.45x faster                                       |
| pprint_safe_repr         | 1.02 sec                                               | 712 ms: 1.43x faster                                         |
| sqlalchemy_imperative    | 23.3 ms                                                | 16.3 ms: 1.43x faster                                        |
| thrift                   | 1.07 ms                                                | 754 us: 1.42x faster                                         |
| 2to3                     | 348 ms                                                 | 254 ms: 1.37x faster                                         |
| sqlglot_normalize        | 143 ms                                                 | 104 ms: 1.37x faster                                         |
| genshi_xml               | 66.0 ms                                                | 48.3 ms: 1.37x faster                                        |
| scimark_fft              | 466 ms                                                 | 341 ms: 1.37x faster                                         |
| pycparser                | 1.58 sec                                               | 1.16 sec: 1.35x faster                                       |
| scimark_sparse_mat_mult  | 6.47 ms                                                | 4.80 ms: 1.35x faster                                        |
| sqlalchemy_declarative   | 172 ms                                                 | 128 ms: 1.35x faster                                         |
| xml_etree_process        | 79.1 ms                                                | 59.1 ms: 1.34x faster                                        |
| sympy_sum                | 196 ms                                                 | 147 ms: 1.33x faster                                         |
| sqlglot_optimize         | 69.2 ms                                                | 52.2 ms: 1.32x faster                                        |
| fannkuch                 | 532 ms                                                 | 402 ms: 1.32x faster                                         |
| sympy_integrate          | 25.8 ms                                                | 19.6 ms: 1.32x faster                                        |
| sympy_str                | 346 ms                                                 | 264 ms: 1.31x faster                                         |
| nqueens                  | 106 ms                                                 | 81.0 ms: 1.31x faster                                        |
| dulwich_log              | 84.3 ms                                                | 64.6 ms: 1.31x faster                                        |
| docutils                 | 3.30 sec                                               | 2.59 sec: 1.27x faster                                       |
| sympy_expand             | 566 ms                                                 | 450 ms: 1.26x faster                                         |
| json_dumps               | 14.2 ms                                                | 11.3 ms: 1.25x faster                                        |
| pathlib                  | 20.5 ms                                                | 16.7 ms: 1.22x faster                                        |
| xml_etree_parse          | 168 ms                                                 | 141 ms: 1.19x faster                                         |
| xml_etree_generate       | 99.4 ms                                                | 84.5 ms: 1.18x faster                                        |
| xml_etree_iterparse      | 115 ms                                                 | 98.2 ms: 1.18x faster                                        |
| async_generators         | 444 ms                                                 | 384 ms: 1.15x faster                                         |
| mdp                      | 2.85 sec                                               | 2.48 sec: 1.15x faster                                       |
| bench_thread_pool        | 986 us                                                 | 863 us: 1.14x faster                                         |
| python_startup           | 14.6 ms                                                | 12.9 ms: 1.13x faster                                        |
| meteor_contest           | 120 ms                                                 | 106 ms: 1.12x faster                                         |
| sqlite_synth             | 3.02 us                                                | 2.76 us: 1.09x faster                                        |
| regex_v8                 | 27.8 ms                                                | 25.6 ms: 1.09x faster                                        |
| regex_effbot             | 3.63 ms                                                | 3.37 ms: 1.08x faster                                        |
| regex_dna                | 227 ms                                                 | 213 ms: 1.06x faster                                         |
| json                     | 5.69 ms                                                | 5.35 ms: 1.06x faster                                        |
| json_loads               | 31.2 us                                                | 29.7 us: 1.05x faster                                        |
| pidigits                 | 191 ms                                                 | 186 ms: 1.03x faster                                         |
| asyncio_websockets       | 559 ms                                                 | 552 ms: 1.01x faster                                         |
| telco                    | 7.27 ms                                                | 7.82 ms: 1.08x slower                                        |
| coverage                 | 79.4 ms                                                | 89.5 ms: 1.13x slower                                        |
| python_startup_no_site   | 5.93 ms                                                | 7.05 ms: 1.19x slower                                        |
| gc_traversal             | 3.62 ms                                                | 4.96 ms: 1.37x slower                                        |
| create_gc_cycles         | 1.62 ms                                                | 2.46 ms: 1.52x slower                                        |
| bench_mp_pool            | 24.0 ms                                                | 81.9 ms: 3.41x slower                                        |
| Geometric mean           | (ref)                                                  | 1.43x faster                                                 |
Ignored benchmarks (16) of results/bm-20220323-3.10.4-9d38120/bm-20220323-linux-x86_64-python-v3.10.4-3.10.4-9d38120.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, djangocms, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (11) of results/bm-20250221-3.14.0a5+-fb33c24/bm-20250221-linux-x86_64-iritkatriel-stats-3.14.0a5+-fb33c24.json: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers

- Geometric mean (including insignificant results): 1.454x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.35x
- 95% likely to have a speedup of 1.34x
- 99% likely to have a speedup of 1.32x

# Memory
- memory change: 1.27x