# Results vs. 3.13.0

- fork: kumaraditya303
- ref: per_thread_tasks
- machine: linux-x86_64
- commit hash: cca4057
- commit date: 2025-01-12
- overall geometric mean: 1.042x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.01x faster
- Memory change: 1.02x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250112-linux-x86_64-kumaraditya303-per_thread_tasks-3.14.0a3+-cca4057 |
|----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| 2to3           | 266 ms                                                 | 255 ms: 1.04x faster                                                       |
| docutils       | 2.58 sec                                               | 2.61 sec: 1.01x slower                                                     |
| html5lib       | 63.4 ms                                                | 61.9 ms: 1.02x faster                                                      |
| sphinx         | 1.03 sec                                               | 1.01 sec: 1.02x faster                                                     |
| Geometric mean | (ref)                                                  | 1.02x faster                                                               |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250112-linux-x86_64-kumaraditya303-per_thread_tasks-3.14.0a3+-cca4057 |
|----------------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| async_tree_memoization_tg  | 463 ms                                                 | 306 ms: 1.51x faster                                                       |
| async_tree_io_tg           | 861 ms                                                 | 591 ms: 1.46x faster                                                       |
| async_tree_io              | 838 ms                                                 | 604 ms: 1.39x faster                                                       |
| async_tree_none            | 350 ms                                                 | 260 ms: 1.35x faster                                                       |
| async_tree_memoization     | 437 ms                                                 | 326 ms: 1.34x faster                                                       |
| async_tree_none_tg         | 319 ms                                                 | 247 ms: 1.29x faster                                                       |
| async_tree_cpu_io_mixed    | 573 ms                                                 | 485 ms: 1.18x faster                                                       |
| async_tree_cpu_io_mixed_tg | 543 ms                                                 | 460 ms: 1.18x faster                                                       |
| async_generators           | 433 ms                                                 | 426 ms: 1.02x faster                                                       |
| coroutines                 | 22.2 ms                                                | 23.7 ms: 1.07x slower                                                      |
| Geometric mean             | (ref)                                                  | 1.23x faster                                                               |

Benchmark hidden because not significant (1): asyncio_websockets

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250112-linux-x86_64-kumaraditya303-per_thread_tasks-3.14.0a3+-cca4057 |
|----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| float          | 78.7 ms                                                | 72.7 ms: 1.08x faster                                                      |
| pidigits       | 186 ms                                                 | 190 ms: 1.02x slower                                                       |
| nbody          | 87.7 ms                                                | 96.0 ms: 1.09x slower                                                      |
| Geometric mean | (ref)                                                  | 1.01x slower                                                               |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250112-linux-x86_64-kumaraditya303-per_thread_tasks-3.14.0a3+-cca4057 |
|----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| regex_effbot   | 3.77 ms                                                | 3.34 ms: 1.13x faster                                                      |
| regex_v8       | 26.9 ms                                                | 25.0 ms: 1.07x faster                                                      |
| regex_dna      | 220 ms                                                 | 210 ms: 1.05x faster                                                       |
| regex_compile  | 132 ms                                                 | 128 ms: 1.03x faster                                                       |
| Geometric mean | (ref)                                                  | 1.07x faster                                                               |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250112-linux-x86_64-kumaraditya303-per_thread_tasks-3.14.0a3+-cca4057 |
|----------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| xml_etree_parse      | 154 ms                                                 | 137 ms: 1.12x faster                                                       |
| tomli_loads          | 2.12 sec                                               | 1.98 sec: 1.07x faster                                                     |
| xml_etree_iterparse  | 101 ms                                                 | 96.4 ms: 1.05x faster                                                      |
| json_loads           | 27.2 us                                                | 26.3 us: 1.03x faster                                                      |
| xml_etree_process    | 60.5 ms                                                | 59.6 ms: 1.01x faster                                                      |
| xml_etree_generate   | 86.8 ms                                                | 85.8 ms: 1.01x faster                                                      |
| unpickle_pure_python | 213 us                                                 | 220 us: 1.03x slower                                                       |
| pickle_pure_python   | 302 us                                                 | 324 us: 1.07x slower                                                       |
| json_dumps           | 10.1 ms                                                | 11.4 ms: 1.13x slower                                                      |
| Geometric mean       | (ref)                                                  | 1.01x faster                                                               |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250112-linux-x86_64-kumaraditya303-per_thread_tasks-3.14.0a3+-cca4057 |
|------------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| python_startup_no_site | 7.00 ms                                                | 7.05 ms: 1.01x slower                                                      |
| python_startup         | 12.7 ms                                                | 12.8 ms: 1.01x slower                                                      |
| Geometric mean         | (ref)                                                  | 1.01x slower                                                               |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250112-linux-x86_64-kumaraditya303-per_thread_tasks-3.14.0a3+-cca4057 |
|-----------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| genshi_xml      | 50.5 ms                                                | 49.8 ms: 1.01x faster                                                      |
| genshi_text     | 22.6 ms                                                | 22.3 ms: 1.01x faster                                                      |
| django_template | 31.7 ms                                                | 31.5 ms: 1.01x faster                                                      |
| mako            | 10.7 ms                                                | 11.5 ms: 1.07x slower                                                      |
| Geometric mean  | (ref)                                                  | 1.01x slower                                                               |

All benchmarks:
===============

| Benchmark                  | bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5 | bm-20250112-linux-x86_64-kumaraditya303-per_thread_tasks-3.14.0a3+-cca4057 |
|----------------------------|:------------------------------------------------------:|:--------------------------------------------------------------------------:|
| async_tree_memoization_tg  | 463 ms                                                 | 306 ms: 1.51x faster                                                       |
| async_tree_io_tg           | 861 ms                                                 | 591 ms: 1.46x faster                                                       |
| async_tree_io              | 838 ms                                                 | 604 ms: 1.39x faster                                                       |
| deepcopy                   | 354 us                                                 | 260 us: 1.36x faster                                                       |
| async_tree_none            | 350 ms                                                 | 260 ms: 1.35x faster                                                       |
| async_tree_memoization     | 437 ms                                                 | 326 ms: 1.34x faster                                                       |
| async_tree_none_tg         | 319 ms                                                 | 247 ms: 1.29x faster                                                       |
| deepcopy_memo              | 38.4 us                                                | 30.6 us: 1.26x faster                                                      |
| deepcopy_reduce            | 3.24 us                                                | 2.67 us: 1.22x faster                                                      |
| async_tree_cpu_io_mixed    | 573 ms                                                 | 485 ms: 1.18x faster                                                       |
| async_tree_cpu_io_mixed_tg | 543 ms                                                 | 460 ms: 1.18x faster                                                       |
| go                         | 141 ms                                                 | 119 ms: 1.18x faster                                                       |
| regex_effbot               | 3.77 ms                                                | 3.34 ms: 1.13x faster                                                      |
| pylint                     | 312 ms                                                 | 277 ms: 1.13x faster                                                       |
| xml_etree_parse            | 154 ms                                                 | 137 ms: 1.12x faster                                                       |
| pathlib                    | 17.4 ms                                                | 15.9 ms: 1.09x faster                                                      |
| json                       | 5.32 ms                                                | 4.88 ms: 1.09x faster                                                      |
| float                      | 78.7 ms                                                | 72.7 ms: 1.08x faster                                                      |
| telco                      | 8.40 ms                                                | 7.80 ms: 1.08x faster                                                      |
| regex_v8                   | 26.9 ms                                                | 25.0 ms: 1.07x faster                                                      |
| scimark_sparse_mat_mult    | 5.03 ms                                                | 4.69 ms: 1.07x faster                                                      |
| tomli_loads                | 2.12 sec                                               | 1.98 sec: 1.07x faster                                                     |
| richards                   | 47.5 ms                                                | 44.7 ms: 1.06x faster                                                      |
| scimark_fft                | 367 ms                                                 | 346 ms: 1.06x faster                                                       |
| gc_traversal               | 4.90 ms                                                | 4.62 ms: 1.06x faster                                                      |
| spectral_norm              | 113 ms                                                 | 107 ms: 1.06x faster                                                       |
| generators                 | 28.8 ms                                                | 27.3 ms: 1.05x faster                                                      |
| richards_super             | 53.7 ms                                                | 51.0 ms: 1.05x faster                                                      |
| xml_etree_iterparse        | 101 ms                                                 | 96.4 ms: 1.05x faster                                                      |
| regex_dna                  | 220 ms                                                 | 210 ms: 1.05x faster                                                       |
| k_core                     | 2.37 sec                                               | 2.27 sec: 1.05x faster                                                     |
| sqlglot_normalize          | 108 ms                                                 | 104 ms: 1.04x faster                                                       |
| 2to3                       | 266 ms                                                 | 255 ms: 1.04x faster                                                       |
| crypto_pyaes               | 74.7 ms                                                | 71.9 ms: 1.04x faster                                                      |
| thrift                     | 800 us                                                 | 771 us: 1.04x faster                                                       |
| bpe_tokeniser              | 4.69 sec                                               | 4.52 sec: 1.04x faster                                                     |
| json_loads                 | 27.2 us                                                | 26.3 us: 1.03x faster                                                      |
| regex_compile              | 132 ms                                                 | 128 ms: 1.03x faster                                                       |
| sqlalchemy_declarative     | 133 ms                                                 | 129 ms: 1.03x faster                                                       |
| sqlite_synth               | 2.90 us                                                | 2.83 us: 1.02x faster                                                      |
| sqlalchemy_imperative      | 16.9 ms                                                | 16.5 ms: 1.02x faster                                                      |
| html5lib                   | 63.4 ms                                                | 61.9 ms: 1.02x faster                                                      |
| dulwich_log                | 64.6 ms                                                | 63.1 ms: 1.02x faster                                                      |
| pycparser                  | 1.20 sec                                               | 1.18 sec: 1.02x faster                                                     |
| pyflate                    | 470 ms                                                 | 460 ms: 1.02x faster                                                       |
| sqlglot_optimize           | 53.4 ms                                                | 52.4 ms: 1.02x faster                                                      |
| sphinx                     | 1.03 sec                                               | 1.01 sec: 1.02x faster                                                     |
| async_generators           | 433 ms                                                 | 426 ms: 1.02x faster                                                       |
| meteor_contest             | 108 ms                                                 | 107 ms: 1.02x faster                                                       |
| sympy_str                  | 273 ms                                                 | 269 ms: 1.01x faster                                                       |
| nqueens                    | 80.9 ms                                                | 79.7 ms: 1.01x faster                                                      |
| xml_etree_process          | 60.5 ms                                                | 59.6 ms: 1.01x faster                                                      |
| sympy_sum                  | 150 ms                                                 | 148 ms: 1.01x faster                                                       |
| genshi_xml                 | 50.5 ms                                                | 49.8 ms: 1.01x faster                                                      |
| genshi_text                | 22.6 ms                                                | 22.3 ms: 1.01x faster                                                      |
| connected_components       | 447 ms                                                 | 441 ms: 1.01x faster                                                       |
| logging_format             | 6.23 us                                                | 6.15 us: 1.01x faster                                                      |
| xml_etree_generate         | 86.8 ms                                                | 85.8 ms: 1.01x faster                                                      |
| logging_simple             | 5.65 us                                                | 5.59 us: 1.01x faster                                                      |
| shortest_path              | 487 ms                                                 | 482 ms: 1.01x faster                                                       |
| django_template            | 31.7 ms                                                | 31.5 ms: 1.01x faster                                                      |
| sympy_expand               | 456 ms                                                 | 455 ms: 1.00x faster                                                       |
| pprint_safe_repr           | 727 ms                                                 | 730 ms: 1.00x slower                                                       |
| python_startup_no_site     | 7.00 ms                                                | 7.05 ms: 1.01x slower                                                      |
| sqlglot_transpile          | 1.57 ms                                                | 1.58 ms: 1.01x slower                                                      |
| scimark_monte_carlo        | 66.8 ms                                                | 67.4 ms: 1.01x slower                                                      |
| docutils                   | 2.58 sec                                               | 2.61 sec: 1.01x slower                                                     |
| comprehensions             | 16.5 us                                                | 16.7 us: 1.01x slower                                                      |
| pprint_pformat             | 1.48 sec                                               | 1.50 sec: 1.01x slower                                                     |
| python_startup             | 12.7 ms                                                | 12.8 ms: 1.01x slower                                                      |
| scimark_sor                | 122 ms                                                 | 124 ms: 1.01x slower                                                       |
| coverage                   | 82.8 ms                                                | 84.0 ms: 1.01x slower                                                      |
| typing_runtime_protocols   | 160 us                                                 | 163 us: 1.02x slower                                                       |
| pidigits                   | 186 ms                                                 | 190 ms: 1.02x slower                                                       |
| hexiom                     | 6.08 ms                                                | 6.22 ms: 1.02x slower                                                      |
| fannkuch                   | 394 ms                                                 | 406 ms: 1.03x slower                                                       |
| deltablue                  | 3.19 ms                                                | 3.29 ms: 1.03x slower                                                      |
| unpickle_pure_python       | 213 us                                                 | 220 us: 1.03x slower                                                       |
| mdp                        | 2.54 sec                                               | 2.67 sec: 1.05x slower                                                     |
| chaos                      | 58.0 ms                                                | 61.0 ms: 1.05x slower                                                      |
| raytrace                   | 262 ms                                                 | 275 ms: 1.05x slower                                                       |
| bench_thread_pool          | 818 us                                                 | 863 us: 1.06x slower                                                       |
| logging_silent             | 101 ns                                                 | 107 ns: 1.06x slower                                                       |
| coroutines                 | 22.2 ms                                                | 23.7 ms: 1.07x slower                                                      |
| pickle_pure_python         | 302 us                                                 | 324 us: 1.07x slower                                                       |
| mako                       | 10.7 ms                                                | 11.5 ms: 1.07x slower                                                      |
| nbody                      | 87.7 ms                                                | 96.0 ms: 1.09x slower                                                      |
| many_optionals             | 857 us                                                 | 947 us: 1.11x slower                                                       |
| json_dumps                 | 10.1 ms                                                | 11.4 ms: 1.13x slower                                                      |
| subparsers                 | 15.5 ms                                                | 20.7 ms: 1.34x slower                                                      |
| bench_mp_pool              | 24.0 ms                                                | 82.1 ms: 3.42x slower                                                      |
| Geometric mean             | (ref)                                                  | 1.03x faster                                                               |

Benchmark hidden because not significant (5): sqlglot_parse, asyncio_websockets, create_gc_cycles, sympy_integrate, scimark_lu
Ignored benchmarks (5) of results/bm-20241007-3.13.0-60403a5/bm-20241007-linux-x86_64-python-v3.13.0-3.13.0-60403a5.json: chameleon, djangocms, gevent_hub, gunicorn, tornado_http

- Geometric mean (including insignificant results): 1.042x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.01x
- 95% likely to have a speedup of 1.01x
- 99% likely to have a speedup of 1.01x

# Memory
- memory change: 1.02x