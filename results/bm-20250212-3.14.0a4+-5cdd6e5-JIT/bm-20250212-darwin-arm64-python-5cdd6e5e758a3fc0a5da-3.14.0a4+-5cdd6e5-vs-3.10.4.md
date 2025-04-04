# Results vs. 3.10.4

- fork: python
- ref: 5cdd6e5e758a3fc0a5da
- machine: darwin-arm64
- commit hash: 5cdd6e5
- commit date: 2025-02-12
- overall geometric mean: 1.376x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.20x faster
- Memory change: 1.15x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250212-darwin-arm64-python-5cdd6e5e758a3fc0a5da-3.14.0a4+-5cdd6e5 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| 2to3           | 201 ms                                                 | 164 ms: 1.23x faster                                                   |
| docutils       | 1.74 sec                                               | 1.45 sec: 1.19x faster                                                 |
| html5lib       | 43.5 ms                                                | 29.5 ms: 1.48x faster                                                  |
| sphinx         | 729 ms                                                 | 568 ms: 1.28x faster                                                   |
| Geometric mean | (ref)                                                  | 1.29x faster                                                           |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                     | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250212-darwin-arm64-python-5cdd6e5e758a3fc0a5da-3.14.0a4+-5cdd6e5 |
|-------------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| async_tree_eager              | 392 ms                                                 | 65.9 ms: 5.95x faster                                                  |
| async_tree_eager_memoization  | 483 ms                                                 | 145 ms: 3.33x faster                                                   |
| async_tree_eager_io           | 1.01 sec                                               | 364 ms: 2.78x faster                                                   |
| async_tree_io                 | 1.02 sec                                               | 372 ms: 2.74x faster                                                   |
| async_tree_memoization        | 481 ms                                                 | 197 ms: 2.45x faster                                                   |
| async_tree_none               | 391 ms                                                 | 162 ms: 2.41x faster                                                   |
| async_tree_eager_cpu_io_mixed | 669 ms                                                 | 363 ms: 1.84x faster                                                   |
| async_tree_cpu_io_mixed       | 668 ms                                                 | 416 ms: 1.61x faster                                                   |
| coroutines                    | 20.5 ms                                                | 15.8 ms: 1.30x faster                                                  |
| async_generators              | 233 ms                                                 | 273 ms: 1.17x slower                                                   |
| Geometric mean                | (ref)                                                  | 2.07x faster                                                           |

Benchmark hidden because not significant (1): asyncio_websockets

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250212-darwin-arm64-python-5cdd6e5e758a3fc0a5da-3.14.0a4+-5cdd6e5 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| float          | 72.4 ms                                                | 46.9 ms: 1.54x faster                                                  |
| nbody          | 92.5 ms                                                | 65.6 ms: 1.41x faster                                                  |
| pidigits       | 280 ms                                                 | 283 ms: 1.01x slower                                                   |
| Geometric mean | (ref)                                                  | 1.29x faster                                                           |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250212-darwin-arm64-python-5cdd6e5e758a3fc0a5da-3.14.0a4+-5cdd6e5 |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| regex_compile  | 95.6 ms                                                | 67.9 ms: 1.41x faster                                                  |
| regex_dna      | 175 ms                                                 | 140 ms: 1.25x faster                                                   |
| regex_v8       | 19.1 ms                                                | 16.7 ms: 1.15x faster                                                  |
| regex_effbot   | 2.34 ms                                                | 2.24 ms: 1.04x faster                                                  |
| Geometric mean | (ref)                                                  | 1.20x faster                                                           |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250212-darwin-arm64-python-5cdd6e5e758a3fc0a5da-3.14.0a4+-5cdd6e5 |
|----------------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| unpickle_pure_python | 198 us                                                 | 130 us: 1.53x faster                                                   |
| pickle_pure_python   | 285 us                                                 | 194 us: 1.46x faster                                                   |
| tomli_loads          | 1.72 sec                                               | 1.21 sec: 1.42x faster                                                 |
| xml_etree_process    | 44.6 ms                                                | 35.5 ms: 1.26x faster                                                  |
| json_dumps           | 8.31 ms                                                | 7.30 ms: 1.14x faster                                                  |
| xml_etree_parse      | 109 ms                                                 | 98.6 ms: 1.11x faster                                                  |
| xml_etree_generate   | 53.9 ms                                                | 49.9 ms: 1.08x faster                                                  |
| xml_etree_iterparse  | 74.5 ms                                                | 69.6 ms: 1.07x faster                                                  |
| json_loads           | 16.6 us                                                | 17.8 us: 1.07x slower                                                  |
| Geometric mean       | (ref)                                                  | 1.21x faster                                                           |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250212-darwin-arm64-python-5cdd6e5e758a3fc0a5da-3.14.0a4+-5cdd6e5 |
|------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| python_startup         | 19.6 ms                                                | 19.2 ms: 1.02x faster                                                  |
| python_startup_no_site | 12.8 ms                                                | 14.3 ms: 1.12x slower                                                  |
| Geometric mean         | (ref)                                                  | 1.05x slower                                                           |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250212-darwin-arm64-python-5cdd6e5e758a3fc0a5da-3.14.0a4+-5cdd6e5 |
|-----------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| mako            | 9.81 ms                                                | 6.46 ms: 1.52x faster                                                  |
| genshi_text     | 17.7 ms                                                | 13.6 ms: 1.30x faster                                                  |
| genshi_xml      | 35.1 ms                                                | 29.3 ms: 1.20x faster                                                  |
| django_template | 24.4 ms                                                | 21.0 ms: 1.16x faster                                                  |
| Geometric mean  | (ref)                                                  | 1.29x faster                                                           |

All benchmarks:
===============

| Benchmark                     | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250212-darwin-arm64-python-5cdd6e5e758a3fc0a5da-3.14.0a4+-5cdd6e5 |
|-------------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| async_tree_eager              | 392 ms                                                 | 65.9 ms: 5.95x faster                                                  |
| typing_runtime_protocols      | 326 us                                                 | 95.3 us: 3.42x faster                                                  |
| async_tree_eager_memoization  | 483 ms                                                 | 145 ms: 3.33x faster                                                   |
| subparsers                    | 39.8 ms                                                | 12.0 ms: 3.32x faster                                                  |
| async_tree_eager_io           | 1.01 sec                                               | 364 ms: 2.78x faster                                                   |
| async_tree_io                 | 1.02 sec                                               | 372 ms: 2.74x faster                                                   |
| async_tree_memoization        | 481 ms                                                 | 197 ms: 2.45x faster                                                   |
| async_tree_none               | 391 ms                                                 | 162 ms: 2.41x faster                                                   |
| deltablue                     | 4.99 ms                                                | 2.35 ms: 2.12x faster                                                  |
| go                            | 163 ms                                                 | 80.5 ms: 2.03x faster                                                  |
| raytrace                      | 327 ms                                                 | 171 ms: 1.91x faster                                                   |
| deepcopy_memo                 | 34.7 us                                                | 18.3 us: 1.90x faster                                                  |
| async_tree_eager_cpu_io_mixed | 669 ms                                                 | 363 ms: 1.84x faster                                                   |
| deepcopy                      | 276 us                                                 | 150 us: 1.84x faster                                                   |
| scimark_sor                   | 140 ms                                                 | 77.7 ms: 1.80x faster                                                  |
| richards_super                | 61.0 ms                                                | 35.1 ms: 1.74x faster                                                  |
| logging_silent                | 117 ns                                                 | 67.4 ns: 1.74x faster                                                  |
| chaos                         | 67.7 ms                                                | 39.2 ms: 1.73x faster                                                  |
| scimark_monte_carlo           | 72.4 ms                                                | 42.5 ms: 1.70x faster                                                  |
| richards                      | 52.3 ms                                                | 31.4 ms: 1.66x faster                                                  |
| sqlglot_parse                 | 1.35 ms                                                | 828 us: 1.63x faster                                                   |
| async_tree_cpu_io_mixed       | 668 ms                                                 | 416 ms: 1.61x faster                                                   |
| pyflate                       | 448 ms                                                 | 284 ms: 1.58x faster                                                   |
| sqlglot_transpile             | 1.56 ms                                                | 997 us: 1.56x faster                                                   |
| spectral_norm                 | 95.3 ms                                                | 61.3 ms: 1.55x faster                                                  |
| float                         | 72.4 ms                                                | 46.9 ms: 1.54x faster                                                  |
| unpickle_pure_python          | 198 us                                                 | 130 us: 1.53x faster                                                   |
| mako                          | 9.81 ms                                                | 6.46 ms: 1.52x faster                                                  |
| html5lib                      | 43.5 ms                                                | 29.5 ms: 1.48x faster                                                  |
| deepcopy_reduce               | 2.32 us                                                | 1.58 us: 1.47x faster                                                  |
| logging_simple                | 4.59 us                                                | 3.13 us: 1.47x faster                                                  |
| logging_format                | 5.03 us                                                | 3.44 us: 1.46x faster                                                  |
| pickle_pure_python            | 285 us                                                 | 194 us: 1.46x faster                                                   |
| pylint                        | 231 ms                                                 | 161 ms: 1.43x faster                                                   |
| tomli_loads                   | 1.72 sec                                               | 1.21 sec: 1.42x faster                                                 |
| nbody                         | 92.5 ms                                                | 65.6 ms: 1.41x faster                                                  |
| regex_compile                 | 95.6 ms                                                | 67.9 ms: 1.41x faster                                                  |
| comprehensions                | 17.3 us                                                | 12.3 us: 1.40x faster                                                  |
| scimark_lu                    | 103 ms                                                 | 73.5 ms: 1.40x faster                                                  |
| crypto_pyaes                  | 73.3 ms                                                | 52.7 ms: 1.39x faster                                                  |
| generators                    | 31.7 ms                                                | 22.9 ms: 1.38x faster                                                  |
| sqlalchemy_imperative         | 9.07 ms                                                | 6.63 ms: 1.37x faster                                                  |
| hexiom                        | 6.25 ms                                                | 4.67 ms: 1.34x faster                                                  |
| k_core                        | 2.01 sec                                               | 1.53 sec: 1.32x faster                                                 |
| pycparser                     | 887 ms                                                 | 677 ms: 1.31x faster                                                   |
| scimark_fft                   | 225 ms                                                 | 173 ms: 1.31x faster                                                   |
| genshi_text                   | 17.7 ms                                                | 13.6 ms: 1.30x faster                                                  |
| coroutines                    | 20.5 ms                                                | 15.8 ms: 1.30x faster                                                  |
| thrift                        | 562 us                                                 | 434 us: 1.30x faster                                                   |
| pprint_pformat                | 1.33 sec                                               | 1.03 sec: 1.30x faster                                                 |
| sqlalchemy_declarative        | 75.7 ms                                                | 58.9 ms: 1.29x faster                                                  |
| sphinx                        | 729 ms                                                 | 568 ms: 1.28x faster                                                   |
| dulwich_log                   | 35.6 ms                                                | 27.9 ms: 1.28x faster                                                  |
| xml_etree_process             | 44.6 ms                                                | 35.5 ms: 1.26x faster                                                  |
| pprint_safe_repr              | 648 ms                                                 | 519 ms: 1.25x faster                                                   |
| regex_dna                     | 175 ms                                                 | 140 ms: 1.25x faster                                                   |
| sympy_sum                     | 92.7 ms                                                | 74.7 ms: 1.24x faster                                                  |
| 2to3                          | 201 ms                                                 | 164 ms: 1.23x faster                                                   |
| genshi_xml                    | 35.1 ms                                                | 29.3 ms: 1.20x faster                                                  |
| bpe_tokeniser                 | 3.44 sec                                               | 2.87 sec: 1.20x faster                                                 |
| docutils                      | 1.74 sec                                               | 1.45 sec: 1.19x faster                                                 |
| sympy_str                     | 166 ms                                                 | 141 ms: 1.18x faster                                                   |
| scimark_sparse_mat_mult       | 3.42 ms                                                | 2.90 ms: 1.18x faster                                                  |
| django_template               | 24.4 ms                                                | 21.0 ms: 1.16x faster                                                  |
| sympy_integrate               | 13.2 ms                                                | 11.4 ms: 1.15x faster                                                  |
| regex_v8                      | 19.1 ms                                                | 16.7 ms: 1.15x faster                                                  |
| json_dumps                    | 8.31 ms                                                | 7.30 ms: 1.14x faster                                                  |
| sympy_expand                  | 269 ms                                                 | 239 ms: 1.12x faster                                                   |
| sqlglot_optimize              | 37.2 ms                                                | 33.2 ms: 1.12x faster                                                  |
| fannkuch                      | 303 ms                                                 | 271 ms: 1.11x faster                                                   |
| pathlib                       | 25.7 ms                                                | 23.1 ms: 1.11x faster                                                  |
| xml_etree_parse               | 109 ms                                                 | 98.6 ms: 1.11x faster                                                  |
| bench_thread_pool             | 545 us                                                 | 497 us: 1.10x faster                                                   |
| many_optionals                | 486 us                                                 | 446 us: 1.09x faster                                                   |
| xml_etree_generate            | 53.9 ms                                                | 49.9 ms: 1.08x faster                                                  |
| mdp                           | 1.65 sec                                               | 1.53 sec: 1.08x faster                                                 |
| xml_etree_iterparse           | 74.5 ms                                                | 69.6 ms: 1.07x faster                                                  |
| connected_components          | 318 ms                                                 | 298 ms: 1.07x faster                                                   |
| sqlglot_normalize             | 192 ms                                                 | 182 ms: 1.06x faster                                                   |
| regex_effbot                  | 2.34 ms                                                | 2.24 ms: 1.04x faster                                                  |
| json                          | 3.10 ms                                                | 2.98 ms: 1.04x faster                                                  |
| nqueens                       | 63.8 ms                                                | 61.6 ms: 1.04x faster                                                  |
| meteor_contest                | 77.8 ms                                                | 75.1 ms: 1.04x faster                                                  |
| dask                          | 789 ms                                                 | 768 ms: 1.03x faster                                                   |
| python_startup                | 19.6 ms                                                | 19.2 ms: 1.02x faster                                                  |
| pidigits                      | 280 ms                                                 | 283 ms: 1.01x slower                                                   |
| sqlite_synth                  | 1.48 us                                                | 1.53 us: 1.03x slower                                                  |
| bench_mp_pool                 | 56.0 ms                                                | 58.9 ms: 1.05x slower                                                  |
| json_loads                    | 16.6 us                                                | 17.8 us: 1.07x slower                                                  |
| create_gc_cycles              | 1.16 ms                                                | 1.28 ms: 1.10x slower                                                  |
| coverage                      | 41.2 ms                                                | 46.1 ms: 1.12x slower                                                  |
| python_startup_no_site        | 12.8 ms                                                | 14.3 ms: 1.12x slower                                                  |
| gc_traversal                  | 2.71 ms                                                | 3.12 ms: 1.15x slower                                                  |
| async_generators              | 233 ms                                                 | 273 ms: 1.17x slower                                                   |
| telco                         | 3.49 ms                                                | 4.57 ms: 1.31x slower                                                  |
| Geometric mean                | (ref)                                                  | 1.37x faster                                                           |

Benchmark hidden because not significant (2): asyncio_websockets, shortest_path
Ignored benchmarks (4) of results/bm-20220323-3.10.4-9d38120/bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120.json: chameleon, djangocms, gevent_hub, tornado_http
Ignored benchmarks (8) of results/bm-20250212-3.14.0a4+-5cdd6e5-JIT/bm-20250212-darwin-arm64-python-5cdd6e5e758a3fc0a5da-3.14.0a4+-5cdd6e5.json: async_tree_cpu_io_mixed_tg, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io_tg, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg

- Geometric mean (including insignificant results): 1.376x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.25x
- 95% likely to have a speedup of 1.23x
- 99% likely to have a speedup of 1.20x

# Memory
- memory change: 1.15x