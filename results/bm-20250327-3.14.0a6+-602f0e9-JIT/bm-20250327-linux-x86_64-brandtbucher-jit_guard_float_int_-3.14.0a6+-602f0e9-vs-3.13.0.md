# Results vs. 3.13.0

- fork: brandtbucher
- ref: jit_guard_float_int_
- machine: linux-x86_64
- commit hash: 602f0e9
- commit date: 2025-03-27
- overall geometric mean: 1.059x faster
- HPT reliability: 99.92%
- HPT 99th percentile: 1.00x faster
- Memory change: 1.05x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| 2to3           | 266 ms                                                 | 261 ms: 1.02x faster                                                         |
| docutils       | 2.58 sec                                               | 2.66 sec: 1.03x slower                                                       |
| html5lib       | 63.4 ms                                                | 61.7 ms: 1.03x faster                                                        |
| Geometric mean | (ref)                                                  | 1.01x faster                                                                 |

Benchmark hidden because not significant (1): sphinx

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| async_tree_memoization_tg  | 463 ms                                                 | 316 ms: 1.47x faster                                                         |
| async_tree_io_tg           | 861 ms                                                 | 620 ms: 1.39x faster                                                         |
| async_tree_memoization     | 437 ms                                                 | 316 ms: 1.38x faster                                                         |
| async_tree_io              | 838 ms                                                 | 617 ms: 1.36x faster                                                         |
| async_tree_none            | 350 ms                                                 | 261 ms: 1.34x faster                                                         |
| async_tree_none_tg         | 319 ms                                                 | 251 ms: 1.27x faster                                                         |
| async_tree_cpu_io_mixed    | 573 ms                                                 | 488 ms: 1.17x faster                                                         |
| async_tree_cpu_io_mixed_tg | 543 ms                                                 | 476 ms: 1.14x faster                                                         |
| async_generators           | 433 ms                                                 | 416 ms: 1.04x faster                                                         |
| coroutines                 | 22.2 ms                                                | 22.9 ms: 1.03x slower                                                        |
| Geometric mean             | (ref)                                                  | 1.22x faster                                                                 |

Benchmark hidden because not significant (1): asyncio_websockets

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| float          | 78.7 ms                                                | 63.6 ms: 1.24x faster                                                        |
| nbody          | 87.7 ms                                                | 85.7 ms: 1.02x faster                                                        |
| pidigits       | 186 ms                                                 | 186 ms: 1.00x faster                                                         |
| Geometric mean | (ref)                                                  | 1.08x faster                                                                 |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| regex_v8       | 26.9 ms                                                | 22.2 ms: 1.21x faster                                                        |
| regex_effbot   | 3.77 ms                                                | 3.18 ms: 1.18x faster                                                        |
| regex_compile  | 132 ms                                                 | 127 ms: 1.04x faster                                                         |
| regex_dna      | 220 ms                                                 | 217 ms: 1.01x faster                                                         |
| Geometric mean | (ref)                                                  | 1.11x faster                                                                 |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| tomli_loads          | 2.12 sec                                               | 1.88 sec: 1.12x faster                                                       |
| xml_etree_parse      | 154 ms                                                 | 140 ms: 1.10x faster                                                         |
| xml_etree_generate   | 86.8 ms                                                | 79.3 ms: 1.10x faster                                                        |
| xml_etree_process    | 60.5 ms                                                | 56.0 ms: 1.08x faster                                                        |
| xml_etree_iterparse  | 101 ms                                                 | 97.3 ms: 1.04x faster                                                        |
| unpickle_pure_python | 213 us                                                 | 211 us: 1.01x faster                                                         |
| pickle_pure_python   | 302 us                                                 | 326 us: 1.08x slower                                                         |
| json_loads           | 27.2 us                                                | 29.8 us: 1.10x slower                                                        |
| json_dumps           | 10.1 ms                                                | 11.5 ms: 1.14x slower                                                        |
| Geometric mean       | (ref)                                                  | 1.02x faster                                                                 |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| python_startup         | 12.7 ms                                                | 13.1 ms: 1.04x slower                                                        |
| python_startup_no_site | 7.00 ms                                                | 8.23 ms: 1.17x slower                                                        |
| Geometric mean         | (ref)                                                  | 1.10x slower                                                                 |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|-----------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| genshi_text     | 22.6 ms                                                | 20.9 ms: 1.08x faster                                                        |
| genshi_xml      | 50.5 ms                                                | 49.2 ms: 1.03x faster                                                        |
| django_template | 31.7 ms                                                | 32.3 ms: 1.02x slower                                                        |
| mako            | 10.7 ms                                                | 10.9 ms: 1.02x slower                                                        |
| Geometric mean  | (ref)                                                  | 1.01x faster                                                                 |

All benchmarks:
===============

| Benchmark                  | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9 |
|----------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------------:|
| mdp                        | 2.54 sec                                               | 1.24 sec: 2.04x faster                                                       |
| async_tree_memoization_tg  | 463 ms                                                 | 316 ms: 1.47x faster                                                         |
| async_tree_io_tg           | 861 ms                                                 | 620 ms: 1.39x faster                                                         |
| async_tree_memoization     | 437 ms                                                 | 316 ms: 1.38x faster                                                         |
| deepcopy                   | 354 us                                                 | 258 us: 1.37x faster                                                         |
| async_tree_io              | 838 ms                                                 | 617 ms: 1.36x faster                                                         |
| richards                   | 47.5 ms                                                | 35.4 ms: 1.34x faster                                                        |
| async_tree_none            | 350 ms                                                 | 261 ms: 1.34x faster                                                         |
| richards_super             | 53.7 ms                                                | 40.4 ms: 1.33x faster                                                        |
| deepcopy_memo              | 38.4 us                                                | 29.2 us: 1.31x faster                                                        |
| async_tree_none_tg         | 319 ms                                                 | 251 ms: 1.27x faster                                                         |
| float                      | 78.7 ms                                                | 63.6 ms: 1.24x faster                                                        |
| deepcopy_reduce            | 3.24 us                                                | 2.67 us: 1.21x faster                                                        |
| regex_v8                   | 26.9 ms                                                | 22.2 ms: 1.21x faster                                                        |
| regex_effbot               | 3.77 ms                                                | 3.18 ms: 1.18x faster                                                        |
| async_tree_cpu_io_mixed    | 573 ms                                                 | 488 ms: 1.17x faster                                                         |
| spectral_norm              | 113 ms                                                 | 96.9 ms: 1.17x faster                                                        |
| scimark_fft                | 367 ms                                                 | 317 ms: 1.16x faster                                                         |
| async_tree_cpu_io_mixed_tg | 543 ms                                                 | 476 ms: 1.14x faster                                                         |
| scimark_sparse_mat_mult    | 5.03 ms                                                | 4.44 ms: 1.13x faster                                                        |
| tomli_loads                | 2.12 sec                                               | 1.88 sec: 1.12x faster                                                       |
| go                         | 141 ms                                                 | 126 ms: 1.11x faster                                                         |
| pylint                     | 312 ms                                                 | 280 ms: 1.11x faster                                                         |
| xml_etree_parse            | 154 ms                                                 | 140 ms: 1.10x faster                                                         |
| xml_etree_generate         | 86.8 ms                                                | 79.3 ms: 1.10x faster                                                        |
| genshi_text                | 22.6 ms                                                | 20.9 ms: 1.08x faster                                                        |
| xml_etree_process          | 60.5 ms                                                | 56.0 ms: 1.08x faster                                                        |
| pyflate                    | 470 ms                                                 | 435 ms: 1.08x faster                                                         |
| dulwich_log                | 64.6 ms                                                | 60.3 ms: 1.07x faster                                                        |
| telco                      | 8.40 ms                                                | 7.89 ms: 1.06x faster                                                        |
| sqlite_synth               | 2.90 us                                                | 2.73 us: 1.06x faster                                                        |
| pycparser                  | 1.20 sec                                               | 1.14 sec: 1.05x faster                                                       |
| gc_traversal               | 4.90 ms                                                | 4.68 ms: 1.05x faster                                                        |
| async_generators           | 433 ms                                                 | 416 ms: 1.04x faster                                                         |
| bpe_tokeniser              | 4.69 sec                                               | 4.50 sec: 1.04x faster                                                       |
| pathlib                    | 17.4 ms                                                | 16.7 ms: 1.04x faster                                                        |
| regex_compile              | 132 ms                                                 | 127 ms: 1.04x faster                                                         |
| deltablue                  | 3.19 ms                                                | 3.07 ms: 1.04x faster                                                        |
| xml_etree_iterparse        | 101 ms                                                 | 97.3 ms: 1.04x faster                                                        |
| logging_silent             | 101 ns                                                 | 97.5 ns: 1.04x faster                                                        |
| html5lib                   | 63.4 ms                                                | 61.7 ms: 1.03x faster                                                        |
| genshi_xml                 | 50.5 ms                                                | 49.2 ms: 1.03x faster                                                        |
| nbody                      | 87.7 ms                                                | 85.7 ms: 1.02x faster                                                        |
| k_core                     | 2.37 sec                                               | 2.32 sec: 1.02x faster                                                       |
| 2to3                       | 266 ms                                                 | 261 ms: 1.02x faster                                                         |
| regex_dna                  | 220 ms                                                 | 217 ms: 1.01x faster                                                         |
| logging_format             | 6.23 us                                                | 6.15 us: 1.01x faster                                                        |
| scimark_sor                | 122 ms                                                 | 121 ms: 1.01x faster                                                         |
| unpickle_pure_python       | 213 us                                                 | 211 us: 1.01x faster                                                         |
| sqlalchemy_declarative     | 133 ms                                                 | 132 ms: 1.01x faster                                                         |
| generators                 | 28.8 ms                                                | 28.5 ms: 1.01x faster                                                        |
| pidigits                   | 186 ms                                                 | 186 ms: 1.00x faster                                                         |
| sympy_integrate            | 19.8 ms                                                | 19.9 ms: 1.00x slower                                                        |
| sqlalchemy_imperative      | 16.9 ms                                                | 17.1 ms: 1.01x slower                                                        |
| coverage                   | 82.8 ms                                                | 83.6 ms: 1.01x slower                                                        |
| scimark_lu                 | 114 ms                                                 | 116 ms: 1.01x slower                                                         |
| raytrace                   | 262 ms                                                 | 264 ms: 1.01x slower                                                         |
| connected_components       | 447 ms                                                 | 452 ms: 1.01x slower                                                         |
| sympy_sum                  | 150 ms                                                 | 153 ms: 1.01x slower                                                         |
| crypto_pyaes               | 74.7 ms                                                | 75.8 ms: 1.01x slower                                                        |
| create_gc_cycles           | 2.45 ms                                                | 2.49 ms: 1.02x slower                                                        |
| django_template            | 31.7 ms                                                | 32.3 ms: 1.02x slower                                                        |
| mako                       | 10.7 ms                                                | 10.9 ms: 1.02x slower                                                        |
| docutils                   | 2.58 sec                                               | 2.66 sec: 1.03x slower                                                       |
| coroutines                 | 22.2 ms                                                | 22.9 ms: 1.03x slower                                                        |
| nqueens                    | 80.9 ms                                                | 83.5 ms: 1.03x slower                                                        |
| sympy_expand               | 456 ms                                                 | 471 ms: 1.03x slower                                                         |
| python_startup             | 12.7 ms                                                | 13.1 ms: 1.04x slower                                                        |
| fannkuch                   | 394 ms                                                 | 410 ms: 1.04x slower                                                         |
| typing_runtime_protocols   | 160 us                                                 | 168 us: 1.05x slower                                                         |
| pprint_safe_repr           | 727 ms                                                 | 763 ms: 1.05x slower                                                         |
| pprint_pformat             | 1.48 sec                                               | 1.58 sec: 1.07x slower                                                       |
| bench_thread_pool          | 818 us                                                 | 878 us: 1.07x slower                                                         |
| pickle_pure_python         | 302 us                                                 | 326 us: 1.08x slower                                                         |
| json_loads                 | 27.2 us                                                | 29.8 us: 1.10x slower                                                        |
| hexiom                     | 6.08 ms                                                | 6.77 ms: 1.11x slower                                                        |
| many_optionals             | 857 us                                                 | 964 us: 1.13x slower                                                         |
| json_dumps                 | 10.1 ms                                                | 11.5 ms: 1.14x slower                                                        |
| comprehensions             | 16.5 us                                                | 18.8 us: 1.14x slower                                                        |
| python_startup_no_site     | 7.00 ms                                                | 8.23 ms: 1.17x slower                                                        |
| subparsers                 | 15.5 ms                                                | 20.6 ms: 1.33x slower                                                        |
| bench_mp_pool              | 24.0 ms                                                | 83.4 ms: 3.48x slower                                                        |
| Geometric mean             | (ref)                                                  | 1.04x faster                                                                 |

Benchmark hidden because not significant (9): sphinx, logging_simple, shortest_path, chaos, meteor_contest, asyncio_websockets, json, sympy_str, scimark_monte_carlo
Ignored benchmarks (10) of results/bm-20241007-3.13.0-60403a5/bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5.json: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, thrift, tornado_http
Ignored benchmarks (4) of results/bm-20250327-3.14.0a6+-602f0e9-JIT/bm-20250327-linux-x86_64-brandtbucher-jit_guard_float_int_-3.14.0a6+-602f0e9.json: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile

- Geometric mean (including insignificant results): 1.059x faster

# HPT report

- Reliability score: 99.92% likely to be faster
- 90% likely to have a speedup of 1.01x
- 95% likely to have a speedup of 1.00x
- 99% likely to have a speedup of 1.00x

# Memory
- memory change: 1.05x