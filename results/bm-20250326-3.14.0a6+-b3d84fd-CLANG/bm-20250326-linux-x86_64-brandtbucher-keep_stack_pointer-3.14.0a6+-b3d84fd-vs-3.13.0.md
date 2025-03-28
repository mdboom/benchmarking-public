# Results vs. 3.13.0

- fork: brandtbucher
- ref: keep_stack_pointer
- machine: linux-x86_64
- commit hash: b3d84fd
- commit date: 2025-03-26
- overall geometric mean: 1.077x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.03x faster
- Memory change: 1.04x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| 2to3           | 266 ms                                                 | 248 ms: 1.07x faster                                                       |
| docutils       | 2.58 sec                                               | 2.56 sec: 1.01x faster                                                     |
| html5lib       | 63.4 ms                                                | 58.5 ms: 1.08x faster                                                      |
| sphinx         | 1.03 sec                                               | 982 ms: 1.05x faster                                                       |
| Geometric mean | (ref)                                                  | 1.05x faster                                                               |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| async_tree_memoization_tg  | 463 ms                                                 | 302 ms: 1.53x faster                                                       |
| async_tree_memoization     | 437 ms                                                 | 306 ms: 1.43x faster                                                       |
| async_tree_io_tg           | 861 ms                                                 | 611 ms: 1.41x faster                                                       |
| async_tree_none            | 350 ms                                                 | 249 ms: 1.40x faster                                                       |
| async_tree_io              | 838 ms                                                 | 601 ms: 1.39x faster                                                       |
| async_tree_none_tg         | 319 ms                                                 | 240 ms: 1.33x faster                                                       |
| async_tree_cpu_io_mixed    | 573 ms                                                 | 490 ms: 1.17x faster                                                       |
| async_tree_cpu_io_mixed_tg | 543 ms                                                 | 473 ms: 1.15x faster                                                       |
| async_generators           | 433 ms                                                 | 379 ms: 1.14x faster                                                       |
| coroutines                 | 22.2 ms                                                | 22.4 ms: 1.01x slower                                                      |
| Geometric mean             | (ref)                                                  | 1.26x faster                                                               |

Benchmark hidden because not significant (1): asyncio_websockets

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| float          | 78.7 ms                                                | 66.6 ms: 1.18x faster                                                      |
| nbody          | 87.7 ms                                                | 82.8 ms: 1.06x faster                                                      |
| pidigits       | 186 ms                                                 | 201 ms: 1.08x slower                                                       |
| Geometric mean | (ref)                                                  | 1.05x faster                                                               |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| regex_effbot   | 3.77 ms                                                | 3.11 ms: 1.21x faster                                                      |
| regex_dna      | 220 ms                                                 | 186 ms: 1.18x faster                                                       |
| regex_v8       | 26.9 ms                                                | 22.8 ms: 1.18x faster                                                      |
| regex_compile  | 132 ms                                                 | 127 ms: 1.04x faster                                                       |
| Geometric mean | (ref)                                                  | 1.15x faster                                                               |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| tomli_loads          | 2.12 sec                                               | 1.92 sec: 1.10x faster                                                     |
| xml_etree_process    | 60.5 ms                                                | 59.7 ms: 1.01x faster                                                      |
| unpickle_pure_python | 213 us                                                 | 212 us: 1.01x faster                                                       |
| pickle_pure_python   | 302 us                                                 | 301 us: 1.00x faster                                                       |
| xml_etree_generate   | 86.8 ms                                                | 87.8 ms: 1.01x slower                                                      |
| xml_etree_parse      | 154 ms                                                 | 157 ms: 1.02x slower                                                       |
| json_loads           | 27.2 us                                                | 28.3 us: 1.04x slower                                                      |
| json_dumps           | 10.1 ms                                                | 12.5 ms: 1.23x slower                                                      |
| Geometric mean       | (ref)                                                  | 1.02x slower                                                               |

Benchmark hidden because not significant (1): xml_etree_iterparse

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|------------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| python_startup         | 12.7 ms                                                | 12.9 ms: 1.02x slower                                                      |
| python_startup_no_site | 7.00 ms                                                | 8.12 ms: 1.16x slower                                                      |
| Geometric mean         | (ref)                                                  | 1.09x slower                                                               |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|-----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| genshi_text     | 22.6 ms                                                | 20.4 ms: 1.11x faster                                                      |
| genshi_xml      | 50.5 ms                                                | 47.1 ms: 1.07x faster                                                      |
| django_template | 31.7 ms                                                | 30.9 ms: 1.03x faster                                                      |
| mako            | 10.7 ms                                                | 11.7 ms: 1.10x slower                                                      |
| Geometric mean  | (ref)                                                  | 1.03x faster                                                               |

All benchmarks:
===============

| Benchmark                  | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd |
|----------------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| async_tree_memoization_tg  | 463 ms                                                 | 302 ms: 1.53x faster                                                       |
| deepcopy                   | 354 us                                                 | 245 us: 1.45x faster                                                       |
| async_tree_memoization     | 437 ms                                                 | 306 ms: 1.43x faster                                                       |
| async_tree_io_tg           | 861 ms                                                 | 611 ms: 1.41x faster                                                       |
| async_tree_none            | 350 ms                                                 | 249 ms: 1.40x faster                                                       |
| async_tree_io              | 838 ms                                                 | 601 ms: 1.39x faster                                                       |
| spectral_norm              | 113 ms                                                 | 83.6 ms: 1.36x faster                                                      |
| async_tree_none_tg         | 319 ms                                                 | 240 ms: 1.33x faster                                                       |
| deepcopy_memo              | 38.4 us                                                | 29.2 us: 1.31x faster                                                      |
| go                         | 141 ms                                                 | 108 ms: 1.30x faster                                                       |
| deepcopy_reduce            | 3.24 us                                                | 2.62 us: 1.24x faster                                                      |
| scimark_fft                | 367 ms                                                 | 299 ms: 1.23x faster                                                       |
| regex_effbot               | 3.77 ms                                                | 3.11 ms: 1.21x faster                                                      |
| scimark_sparse_mat_mult    | 5.03 ms                                                | 4.25 ms: 1.18x faster                                                      |
| float                      | 78.7 ms                                                | 66.6 ms: 1.18x faster                                                      |
| regex_dna                  | 220 ms                                                 | 186 ms: 1.18x faster                                                       |
| regex_v8                   | 26.9 ms                                                | 22.8 ms: 1.18x faster                                                      |
| async_tree_cpu_io_mixed    | 573 ms                                                 | 490 ms: 1.17x faster                                                       |
| logging_silent             | 101 ns                                                 | 86.8 ns: 1.16x faster                                                      |
| richards                   | 47.5 ms                                                | 40.9 ms: 1.16x faster                                                      |
| pathlib                    | 17.4 ms                                                | 15.0 ms: 1.16x faster                                                      |
| scimark_sor                | 122 ms                                                 | 106 ms: 1.15x faster                                                       |
| pylint                     | 312 ms                                                 | 271 ms: 1.15x faster                                                       |
| async_tree_cpu_io_mixed_tg | 543 ms                                                 | 473 ms: 1.15x faster                                                       |
| async_generators           | 433 ms                                                 | 379 ms: 1.14x faster                                                       |
| pyflate                    | 470 ms                                                 | 412 ms: 1.14x faster                                                       |
| telco                      | 8.40 ms                                                | 7.41 ms: 1.13x faster                                                      |
| richards_super             | 53.7 ms                                                | 47.6 ms: 1.13x faster                                                      |
| dulwich_log                | 64.6 ms                                                | 57.4 ms: 1.12x faster                                                      |
| genshi_text                | 22.6 ms                                                | 20.4 ms: 1.11x faster                                                      |
| scimark_monte_carlo        | 66.8 ms                                                | 60.1 ms: 1.11x faster                                                      |
| tomli_loads                | 2.12 sec                                               | 1.92 sec: 1.10x faster                                                     |
| deltablue                  | 3.19 ms                                                | 2.92 ms: 1.09x faster                                                      |
| html5lib                   | 63.4 ms                                                | 58.5 ms: 1.08x faster                                                      |
| sqlite_synth               | 2.90 us                                                | 2.69 us: 1.08x faster                                                      |
| chaos                      | 58.0 ms                                                | 53.9 ms: 1.08x faster                                                      |
| pycparser                  | 1.20 sec                                               | 1.12 sec: 1.07x faster                                                     |
| genshi_xml                 | 50.5 ms                                                | 47.1 ms: 1.07x faster                                                      |
| 2to3                       | 266 ms                                                 | 248 ms: 1.07x faster                                                       |
| scimark_lu                 | 114 ms                                                 | 107 ms: 1.07x faster                                                       |
| sympy_integrate            | 19.8 ms                                                | 18.7 ms: 1.06x faster                                                      |
| nbody                      | 87.7 ms                                                | 82.8 ms: 1.06x faster                                                      |
| crypto_pyaes               | 74.7 ms                                                | 70.5 ms: 1.06x faster                                                      |
| hexiom                     | 6.08 ms                                                | 5.74 ms: 1.06x faster                                                      |
| bpe_tokeniser              | 4.69 sec                                               | 4.43 sec: 1.06x faster                                                     |
| logging_format             | 6.23 us                                                | 5.92 us: 1.05x faster                                                      |
| thrift                     | 800 us                                                 | 760 us: 1.05x faster                                                       |
| raytrace                   | 262 ms                                                 | 249 ms: 1.05x faster                                                       |
| sphinx                     | 1.03 sec                                               | 982 ms: 1.05x faster                                                       |
| sqlalchemy_declarative     | 133 ms                                                 | 127 ms: 1.05x faster                                                       |
| generators                 | 28.8 ms                                                | 27.4 ms: 1.05x faster                                                      |
| sympy_str                  | 273 ms                                                 | 261 ms: 1.05x faster                                                       |
| regex_compile              | 132 ms                                                 | 127 ms: 1.04x faster                                                       |
| logging_simple             | 5.65 us                                                | 5.42 us: 1.04x faster                                                      |
| sqlalchemy_imperative      | 16.9 ms                                                | 16.2 ms: 1.04x faster                                                      |
| sympy_sum                  | 150 ms                                                 | 144 ms: 1.04x faster                                                       |
| comprehensions             | 16.5 us                                                | 15.9 us: 1.04x faster                                                      |
| typing_runtime_protocols   | 160 us                                                 | 155 us: 1.03x faster                                                       |
| k_core                     | 2.37 sec                                               | 2.30 sec: 1.03x faster                                                     |
| nqueens                    | 80.9 ms                                                | 78.6 ms: 1.03x faster                                                      |
| sympy_expand               | 456 ms                                                 | 444 ms: 1.03x faster                                                       |
| django_template            | 31.7 ms                                                | 30.9 ms: 1.03x faster                                                      |
| coverage                   | 82.8 ms                                                | 80.9 ms: 1.02x faster                                                      |
| gc_traversal               | 4.90 ms                                                | 4.81 ms: 1.02x faster                                                      |
| json                       | 5.32 ms                                                | 5.25 ms: 1.01x faster                                                      |
| xml_etree_process          | 60.5 ms                                                | 59.7 ms: 1.01x faster                                                      |
| docutils                   | 2.58 sec                                               | 2.56 sec: 1.01x faster                                                     |
| unpickle_pure_python       | 213 us                                                 | 212 us: 1.01x faster                                                       |
| pickle_pure_python         | 302 us                                                 | 301 us: 1.00x faster                                                       |
| coroutines                 | 22.2 ms                                                | 22.4 ms: 1.01x slower                                                      |
| xml_etree_generate         | 86.8 ms                                                | 87.8 ms: 1.01x slower                                                      |
| xml_etree_parse            | 154 ms                                                 | 157 ms: 1.02x slower                                                       |
| bench_thread_pool          | 818 us                                                 | 835 us: 1.02x slower                                                       |
| python_startup             | 12.7 ms                                                | 12.9 ms: 1.02x slower                                                      |
| pprint_pformat             | 1.48 sec                                               | 1.52 sec: 1.03x slower                                                     |
| pprint_safe_repr           | 727 ms                                                 | 752 ms: 1.03x slower                                                       |
| fannkuch                   | 394 ms                                                 | 409 ms: 1.04x slower                                                       |
| shortest_path              | 487 ms                                                 | 506 ms: 1.04x slower                                                       |
| create_gc_cycles           | 2.45 ms                                                | 2.55 ms: 1.04x slower                                                      |
| json_loads                 | 27.2 us                                                | 28.3 us: 1.04x slower                                                      |
| connected_components       | 447 ms                                                 | 470 ms: 1.05x slower                                                       |
| pidigits                   | 186 ms                                                 | 201 ms: 1.08x slower                                                       |
| many_optionals             | 857 us                                                 | 929 us: 1.08x slower                                                       |
| mako                       | 10.7 ms                                                | 11.7 ms: 1.10x slower                                                      |
| mdp                        | 2.54 sec                                               | 2.88 sec: 1.13x slower                                                     |
| python_startup_no_site     | 7.00 ms                                                | 8.12 ms: 1.16x slower                                                      |
| json_dumps                 | 10.1 ms                                                | 12.5 ms: 1.23x slower                                                      |
| subparsers                 | 15.5 ms                                                | 20.4 ms: 1.32x slower                                                      |
| bench_mp_pool              | 24.0 ms                                                | 81.5 ms: 3.40x slower                                                      |
| Geometric mean             | (ref)                                                  | 1.06x faster                                                               |

Benchmark hidden because not significant (3): asyncio_websockets, xml_etree_iterparse, meteor_contest
Ignored benchmarks (9) of results/bm-20241007-3.13.0-60403a5/bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5.json: chameleon, djangocms, gevent_hub, gunicorn, sqlglot_normalize, sqlglot_optimize, sqlglot_parse, sqlglot_transpile, tornado_http
Ignored benchmarks (4) of results/bm-20250326-3.14.0a6+-b3d84fd-CLANG/bm-20250326-linux-x86_64-brandtbucher-keep_stack_pointer-3.14.0a6+-b3d84fd.json: sqlglot_v2_normalize, sqlglot_v2_optimize, sqlglot_v2_parse, sqlglot_v2_transpile

- Geometric mean (including insignificant results): 1.077x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.04x
- 95% likely to have a speedup of 1.04x
- 99% likely to have a speedup of 1.03x

# Memory
- memory change: 1.04x