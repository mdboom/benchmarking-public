# Results vs. 3.12.0

- fork: python
- ref: 0ac40acec045c4ce780c
- machine: windows-amd64
- commit hash: 0ac40ac
- commit date: 2024-12-14
- overall geometric mean: 1.070x faster
- HPT reliability: 97.50%
- HPT 99th percentile: 1.00x faster
- Memory change: unknown

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20231002-pythonperf1-amd64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241214-pythonperf1-amd64-python-0ac40acec045c4ce780c-3.14.0a2+-0ac40ac |
|----------------|:-----------------------------------------------------------:|:---------------------------------------------------------------------------:|
| docutils       | 1.66 sec                                                    | 1.72 sec: 1.04x slower                                                      |
| Geometric mean | (ref)                                                       | 1.02x slower                                                                |

Benchmark hidden because not significant (1): 2to3

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20231002-pythonperf1-amd64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241214-pythonperf1-amd64-python-0ac40acec045c4ce780c-3.14.0a2+-0ac40ac |
|----------------------------|:-----------------------------------------------------------:|:---------------------------------------------------------------------------:|
| async_tree_io_tg           | 771 ms                                                      | 400 ms: 1.93x faster                                                        |
| async_tree_io              | 731 ms                                                      | 405 ms: 1.81x faster                                                        |
| async_tree_memoization_tg  | 367 ms                                                      | 215 ms: 1.70x faster                                                        |
| async_tree_none_tg         | 285 ms                                                      | 170 ms: 1.68x faster                                                        |
| async_tree_none            | 291 ms                                                      | 185 ms: 1.58x faster                                                        |
| async_tree_memoization     | 339 ms                                                      | 224 ms: 1.52x faster                                                        |
| async_tree_cpu_io_mixed_tg | 502 ms                                                      | 355 ms: 1.42x faster                                                        |
| async_tree_cpu_io_mixed    | 489 ms                                                      | 362 ms: 1.35x faster                                                        |
| Geometric mean             | (ref)                                                       | 1.61x faster                                                                |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20231002-pythonperf1-amd64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241214-pythonperf1-amd64-python-0ac40acec045c4ce780c-3.14.0a2+-0ac40ac |
|----------------|:-----------------------------------------------------------:|:---------------------------------------------------------------------------:|
| nbody          | 71.9 ms                                                     | 54.6 ms: 1.32x faster                                                       |
| float          | 56.8 ms                                                     | 43.8 ms: 1.30x faster                                                       |
| pidigits       | 152 ms                                                      | 147 ms: 1.04x faster                                                        |
| Geometric mean | (ref)                                                       | 1.21x faster                                                                |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20231002-pythonperf1-amd64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241214-pythonperf1-amd64-python-0ac40acec045c4ce780c-3.14.0a2+-0ac40ac |
|----------------|:-----------------------------------------------------------:|:---------------------------------------------------------------------------:|
| regex_effbot   | 1.62 ms                                                     | 1.45 ms: 1.12x faster                                                       |
| regex_compile  | 87.5 ms                                                     | 79.6 ms: 1.10x faster                                                       |
| regex_dna      | 126 ms                                                      | 116 ms: 1.09x faster                                                        |
| regex_v8       | 14.2 ms                                                     | 22.5 ms: 1.58x slower                                                       |
| Geometric mean | (ref)                                                       | 1.04x slower                                                                |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20231002-pythonperf1-amd64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241214-pythonperf1-amd64-python-0ac40acec045c4ce780c-3.14.0a2+-0ac40ac |
|----------------------|:-----------------------------------------------------------:|:---------------------------------------------------------------------------:|
| unpickle_pure_python | 133 us                                                      | 112 us: 1.19x faster                                                        |
| tomli_loads          | 1.37 sec                                                    | 1.21 sec: 1.13x faster                                                      |
| xml_etree_generate   | 55.8 ms                                                     | 49.9 ms: 1.12x faster                                                       |
| xml_etree_iterparse  | 65.2 ms                                                     | 59.1 ms: 1.10x faster                                                       |
| xml_etree_parse      | 93.0 ms                                                     | 86.4 ms: 1.08x faster                                                       |
| xml_etree_process    | 37.7 ms                                                     | 35.3 ms: 1.07x faster                                                       |
| json_loads           | 13.9 us                                                     | 14.2 us: 1.02x slower                                                       |
| pickle_pure_python   | 195 us                                                      | 205 us: 1.05x slower                                                        |
| json_dumps           | 5.70 ms                                                     | 6.30 ms: 1.11x slower                                                       |
| Geometric mean       | (ref)                                                       | 1.05x faster                                                                |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20231002-pythonperf1-amd64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241214-pythonperf1-amd64-python-0ac40acec045c4ce780c-3.14.0a2+-0ac40ac |
|------------------------|:-----------------------------------------------------------:|:---------------------------------------------------------------------------:|
| python_startup_no_site | 16.2 ms                                                     | 17.2 ms: 1.06x slower                                                       |
| python_startup         | 19.5 ms                                                     | 23.3 ms: 1.20x slower                                                       |
| Geometric mean         | (ref)                                                       | 1.13x slower                                                                |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20231002-pythonperf1-amd64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241214-pythonperf1-amd64-python-0ac40acec045c4ce780c-3.14.0a2+-0ac40ac |
|-----------------|:-----------------------------------------------------------:|:---------------------------------------------------------------------------:|
| mako            | 7.09 ms                                                     | 5.04 ms: 1.41x faster                                                       |
| django_template | 22.9 ms                                                     | 27.0 ms: 1.18x slower                                                       |
| Geometric mean  | (ref)                                                       | 1.09x faster                                                                |

All benchmarks:
===============

| Benchmark                  | bm-20231002-pythonperf1-amd64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241214-pythonperf1-amd64-python-0ac40acec045c4ce780c-3.14.0a2+-0ac40ac |
|----------------------------|:-----------------------------------------------------------:|:---------------------------------------------------------------------------:|
| async_tree_io_tg           | 771 ms                                                      | 400 ms: 1.93x faster                                                        |
| async_tree_io              | 731 ms                                                      | 405 ms: 1.81x faster                                                        |
| async_tree_memoization_tg  | 367 ms                                                      | 215 ms: 1.70x faster                                                        |
| async_tree_none_tg         | 285 ms                                                      | 170 ms: 1.68x faster                                                        |
| async_tree_none            | 291 ms                                                      | 185 ms: 1.58x faster                                                        |
| async_tree_memoization     | 339 ms                                                      | 224 ms: 1.52x faster                                                        |
| deepcopy_memo              | 23.7 us                                                     | 16.1 us: 1.47x faster                                                       |
| spectral_norm              | 66.9 ms                                                     | 46.9 ms: 1.43x faster                                                       |
| async_tree_cpu_io_mixed_tg | 502 ms                                                      | 355 ms: 1.42x faster                                                        |
| mako                       | 7.09 ms                                                     | 5.04 ms: 1.41x faster                                                       |
| async_tree_cpu_io_mixed    | 489 ms                                                      | 362 ms: 1.35x faster                                                        |
| nbody                      | 71.9 ms                                                     | 54.6 ms: 1.32x faster                                                       |
| scimark_fft                | 184 ms                                                      | 142 ms: 1.30x faster                                                        |
| float                      | 56.8 ms                                                     | 43.8 ms: 1.30x faster                                                       |
| deepcopy                   | 238 us                                                      | 186 us: 1.28x faster                                                        |
| scimark_sparse_mat_mult    | 2.56 ms                                                     | 2.00 ms: 1.28x faster                                                       |
| scimark_sor                | 78.8 ms                                                     | 62.6 ms: 1.26x faster                                                       |
| scimark_monte_carlo        | 43.7 ms                                                     | 35.8 ms: 1.22x faster                                                       |
| comprehensions             | 14.1 us                                                     | 11.8 us: 1.19x faster                                                       |
| unpickle_pure_python       | 133 us                                                      | 112 us: 1.19x faster                                                        |
| crypto_pyaes               | 48.5 ms                                                     | 41.0 ms: 1.18x faster                                                       |
| deepcopy_reduce            | 2.09 us                                                     | 1.83 us: 1.15x faster                                                       |
| sqlite_synth               | 1.76 us                                                     | 1.56 us: 1.13x faster                                                       |
| tomli_loads                | 1.37 sec                                                    | 1.21 sec: 1.13x faster                                                      |
| xml_etree_generate         | 55.8 ms                                                     | 49.9 ms: 1.12x faster                                                       |
| regex_effbot               | 1.62 ms                                                     | 1.45 ms: 1.12x faster                                                       |
| logging_silent             | 60.5 ns                                                     | 54.8 ns: 1.10x faster                                                       |
| xml_etree_iterparse        | 65.2 ms                                                     | 59.1 ms: 1.10x faster                                                       |
| regex_compile              | 87.5 ms                                                     | 79.6 ms: 1.10x faster                                                       |
| dulwich_log                | 44.3 ms                                                     | 40.6 ms: 1.09x faster                                                       |
| pprint_pformat             | 1.05 sec                                                    | 962 ms: 1.09x faster                                                        |
| regex_dna                  | 126 ms                                                      | 116 ms: 1.09x faster                                                        |
| xml_etree_parse            | 93.0 ms                                                     | 86.4 ms: 1.08x faster                                                       |
| coroutines                 | 14.3 ms                                                     | 13.3 ms: 1.07x faster                                                       |
| json                       | 3.05 ms                                                     | 2.84 ms: 1.07x faster                                                       |
| xml_etree_process          | 37.7 ms                                                     | 35.3 ms: 1.07x faster                                                       |
| pathlib                    | 80.5 ms                                                     | 75.7 ms: 1.06x faster                                                       |
| bench_thread_pool          | 857 us                                                      | 816 us: 1.05x faster                                                        |
| pprint_safe_repr           | 513 ms                                                      | 489 ms: 1.05x faster                                                        |
| chaos                      | 43.3 ms                                                     | 41.5 ms: 1.04x faster                                                       |
| pyflate                    | 295 ms                                                      | 282 ms: 1.04x faster                                                        |
| go                         | 91.6 ms                                                     | 88.1 ms: 1.04x faster                                                       |
| pidigits                   | 152 ms                                                      | 147 ms: 1.04x faster                                                        |
| scimark_lu                 | 58.9 ms                                                     | 56.8 ms: 1.04x faster                                                       |
| sympy_sum                  | 91.5 ms                                                     | 90.5 ms: 1.01x faster                                                       |
| meteor_contest             | 74.6 ms                                                     | 75.1 ms: 1.01x slower                                                       |
| generators                 | 22.5 ms                                                     | 22.8 ms: 1.01x slower                                                       |
| nqueens                    | 62.8 ms                                                     | 64.0 ms: 1.02x slower                                                       |
| json_loads                 | 13.9 us                                                     | 14.2 us: 1.02x slower                                                       |
| fannkuch                   | 247 ms                                                      | 253 ms: 1.03x slower                                                        |
| pycparser                  | 699 ms                                                      | 722 ms: 1.03x slower                                                        |
| sqlglot_parse              | 804 us                                                      | 833 us: 1.04x slower                                                        |
| docutils                   | 1.66 sec                                                    | 1.72 sec: 1.04x slower                                                      |
| async_generators           | 239 ms                                                      | 249 ms: 1.04x slower                                                        |
| sympy_integrate            | 13.0 ms                                                     | 13.5 ms: 1.04x slower                                                       |
| deltablue                  | 2.16 ms                                                     | 2.26 ms: 1.05x slower                                                       |
| pickle_pure_python         | 195 us                                                      | 205 us: 1.05x slower                                                        |
| sqlglot_transpile          | 1.02 ms                                                     | 1.07 ms: 1.05x slower                                                       |
| telco                      | 4.13 ms                                                     | 4.34 ms: 1.05x slower                                                       |
| sympy_expand               | 284 ms                                                      | 301 ms: 1.06x slower                                                        |
| python_startup_no_site     | 16.2 ms                                                     | 17.2 ms: 1.06x slower                                                       |
| sqlglot_optimize           | 34.5 ms                                                     | 37.2 ms: 1.08x slower                                                       |
| sqlglot_normalize          | 187 ms                                                      | 202 ms: 1.08x slower                                                        |
| raytrace                   | 192 ms                                                      | 209 ms: 1.09x slower                                                        |
| coverage                   | 40.8 ms                                                     | 44.7 ms: 1.10x slower                                                       |
| json_dumps                 | 5.70 ms                                                     | 6.30 ms: 1.11x slower                                                       |
| mdp                        | 1.37 sec                                                    | 1.55 sec: 1.13x slower                                                      |
| django_template            | 22.9 ms                                                     | 27.0 ms: 1.18x slower                                                       |
| richards_super             | 32.1 ms                                                     | 38.0 ms: 1.18x slower                                                       |
| bench_mp_pool              | 69.2 ms                                                     | 82.1 ms: 1.19x slower                                                       |
| richards                   | 28.4 ms                                                     | 33.7 ms: 1.19x slower                                                       |
| typing_runtime_protocols   | 95.1 us                                                     | 114 us: 1.19x slower                                                        |
| python_startup             | 19.5 ms                                                     | 23.3 ms: 1.20x slower                                                       |
| hexiom                     | 4.10 ms                                                     | 4.95 ms: 1.21x slower                                                       |
| mypy2                      | 509 ms                                                      | 631 ms: 1.24x slower                                                        |
| gc_traversal               | 1.52 ms                                                     | 1.97 ms: 1.29x slower                                                       |
| regex_v8                   | 14.2 ms                                                     | 22.5 ms: 1.58x slower                                                       |
| create_gc_cycles           | 752 us                                                      | 1.21 ms: 1.61x slower                                                       |
| Geometric mean             | (ref)                                                       | 1.07x faster                                                                |

Benchmark hidden because not significant (4): logging_format, sympy_str, logging_simple, 2to3
Ignored benchmarks (14) of results/bm-20231002-3.12.0-0fb18b0/bm-20231002-pythonperf1-amd64-python-v3.12.0-3.12.0-0fb18b0.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, pickle, pickle_dict, pickle_list, sqlalchemy_declarative, sqlalchemy_imperative, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (13) of results/bm-20241214-3.14.0a2+-0ac40ac-JIT/bm-20241214-pythonperf1-amd64-python-0ac40acec045c4ce780c-3.14.0a2+-0ac40ac.json: asyncio_websockets, bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift

- Geometric mean (including insignificant results): 1.070x faster

# HPT report

- Reliability score: 97.50% likely to be faster
- 90% likely to have a speedup of 1.02x
- 95% likely to have a speedup of 1.01x
- 99% likely to have a speedup of 1.00x

# Memory
- memory change: unknown