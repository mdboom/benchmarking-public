# Results vs. 3.10.4

- fork: kumaraditya303
- ref: future_iter
- machine: darwin-arm64
- commit hash: 82b905d
- commit date: 2025-01-05
- overall geometric mean: 1.315x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.22x faster
- Memory change: 1.34x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250105-darwin-arm64-kumaraditya303-future_iter-3.14.0a3+-82b905d |
|----------------|:------------------------------------------------------:|:---------------------------------------------------------------------:|
| 2to3           | 192 ms                                                 | 186 ms: 1.03x faster                                                  |
| docutils       | 1.73 sec                                               | 1.40 sec: 1.24x faster                                                |
| html5lib       | 42.4 ms                                                | 29.0 ms: 1.46x faster                                                 |
| Geometric mean | (ref)                                                  | 1.23x faster                                                          |

Benchmarks with tag 'asyncio':
==============================

| Benchmark               | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250105-darwin-arm64-kumaraditya303-future_iter-3.14.0a3+-82b905d |
|-------------------------|:------------------------------------------------------:|:---------------------------------------------------------------------:|
| async_tree_io           | 980 ms                                                 | 348 ms: 2.82x faster                                                  |
| async_tree_none         | 388 ms                                                 | 156 ms: 2.49x faster                                                  |
| async_tree_memoization  | 474 ms                                                 | 193 ms: 2.46x faster                                                  |
| async_tree_cpu_io_mixed | 649 ms                                                 | 409 ms: 1.59x faster                                                  |
| Geometric mean          | (ref)                                                  | 2.29x faster                                                          |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250105-darwin-arm64-kumaraditya303-future_iter-3.14.0a3+-82b905d |
|----------------|:------------------------------------------------------:|:---------------------------------------------------------------------:|
| float          | 69.0 ms                                                | 46.3 ms: 1.49x faster                                                 |
| nbody          | 93.0 ms                                                | 67.6 ms: 1.38x faster                                                 |
| pidigits       | 282 ms                                                 | 283 ms: 1.00x slower                                                  |
| Geometric mean | (ref)                                                  | 1.27x faster                                                          |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250105-darwin-arm64-kumaraditya303-future_iter-3.14.0a3+-82b905d |
|----------------|:------------------------------------------------------:|:---------------------------------------------------------------------:|
| regex_compile  | 95.3 ms                                                | 66.7 ms: 1.43x faster                                                 |
| regex_dna      | 174 ms                                                 | 135 ms: 1.30x faster                                                  |
| regex_effbot   | 2.46 ms                                                | 2.05 ms: 1.20x faster                                                 |
| regex_v8       | 17.1 ms                                                | 15.9 ms: 1.08x faster                                                 |
| Geometric mean | (ref)                                                  | 1.24x faster                                                          |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250105-darwin-arm64-kumaraditya303-future_iter-3.14.0a3+-82b905d |
|----------------------|:------------------------------------------------------:|:---------------------------------------------------------------------:|
| pickle_pure_python   | 281 us                                                 | 196 us: 1.43x faster                                                  |
| tomli_loads          | 1.71 sec                                               | 1.20 sec: 1.43x faster                                                |
| unpickle_pure_python | 194 us                                                 | 137 us: 1.42x faster                                                  |
| xml_etree_process    | 46.5 ms                                                | 38.0 ms: 1.23x faster                                                 |
| json_dumps           | 8.11 ms                                                | 7.27 ms: 1.11x faster                                                 |
| xml_etree_parse      | 108 ms                                                 | 104 ms: 1.04x faster                                                  |
| xml_etree_generate   | 53.5 ms                                                | 52.2 ms: 1.03x faster                                                 |
| xml_etree_iterparse  | 72.1 ms                                                | 71.4 ms: 1.01x faster                                                 |
| json_loads           | 16.4 us                                                | 16.5 us: 1.00x slower                                                 |
| Geometric mean       | (ref)                                                  | 1.17x faster                                                          |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250105-darwin-arm64-kumaraditya303-future_iter-3.14.0a3+-82b905d |
|------------------------|:------------------------------------------------------:|:---------------------------------------------------------------------:|
| python_startup_no_site | 7.91 ms                                                | 13.5 ms: 1.70x slower                                                 |
| python_startup         | 10.9 ms                                                | 18.5 ms: 1.70x slower                                                 |
| Geometric mean         | (ref)                                                  | 1.70x slower                                                          |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250105-darwin-arm64-kumaraditya303-future_iter-3.14.0a3+-82b905d |
|-----------------|:------------------------------------------------------:|:---------------------------------------------------------------------:|
| mako            | 9.87 ms                                                | 6.95 ms: 1.42x faster                                                 |
| genshi_text     | 17.3 ms                                                | 13.4 ms: 1.29x faster                                                 |
| django_template | 26.4 ms                                                | 20.9 ms: 1.26x faster                                                 |
| genshi_xml      | 33.8 ms                                                | 28.2 ms: 1.20x faster                                                 |
| Geometric mean  | (ref)                                                  | 1.29x faster                                                          |

All benchmarks:
===============

| Benchmark                | bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120 | bm-20250105-darwin-arm64-kumaraditya303-future_iter-3.14.0a3+-82b905d |
|--------------------------|:------------------------------------------------------:|:---------------------------------------------------------------------:|
| typing_runtime_protocols | 323 us                                                 | 94.8 us: 3.41x faster                                                 |
| async_tree_io            | 980 ms                                                 | 348 ms: 2.82x faster                                                  |
| async_tree_none          | 388 ms                                                 | 156 ms: 2.49x faster                                                  |
| async_tree_memoization   | 474 ms                                                 | 193 ms: 2.46x faster                                                  |
| deltablue                | 4.91 ms                                                | 2.34 ms: 2.10x faster                                                 |
| deepcopy_memo            | 34.7 us                                                | 18.0 us: 1.93x faster                                                 |
| go                       | 151 ms                                                 | 78.1 ms: 1.93x faster                                                 |
| deepcopy                 | 272 us                                                 | 148 us: 1.83x faster                                                  |
| logging_silent           | 117 ns                                                 | 65.0 ns: 1.80x faster                                                 |
| raytrace                 | 301 ms                                                 | 169 ms: 1.78x faster                                                  |
| chaos                    | 65.8 ms                                                | 37.8 ms: 1.74x faster                                                 |
| pylint                   | 277 ms                                                 | 160 ms: 1.73x faster                                                  |
| asyncio_websockets       | 410 ms                                                 | 244 ms: 1.68x faster                                                  |
| richards_super           | 57.8 ms                                                | 35.1 ms: 1.65x faster                                                 |
| scimark_sor              | 128 ms                                                 | 78.5 ms: 1.63x faster                                                 |
| sqlglot_parse            | 1.24 ms                                                | 763 us: 1.63x faster                                                  |
| async_tree_cpu_io_mixed  | 649 ms                                                 | 409 ms: 1.59x faster                                                  |
| scimark_monte_carlo      | 65.6 ms                                                | 41.8 ms: 1.57x faster                                                 |
| sqlglot_transpile        | 1.44 ms                                                | 927 us: 1.56x faster                                                  |
| richards                 | 48.7 ms                                                | 31.5 ms: 1.54x faster                                                 |
| spectral_norm            | 94.8 ms                                                | 61.8 ms: 1.53x faster                                                 |
| deepcopy_reduce          | 2.33 us                                                | 1.54 us: 1.51x faster                                                 |
| hexiom                   | 6.19 ms                                                | 4.15 ms: 1.49x faster                                                 |
| float                    | 69.0 ms                                                | 46.3 ms: 1.49x faster                                                 |
| pyflate                  | 427 ms                                                 | 290 ms: 1.47x faster                                                  |
| html5lib                 | 42.4 ms                                                | 29.0 ms: 1.46x faster                                                 |
| generators               | 32.3 ms                                                | 22.6 ms: 1.43x faster                                                 |
| pickle_pure_python       | 281 us                                                 | 196 us: 1.43x faster                                                  |
| regex_compile            | 95.3 ms                                                | 66.7 ms: 1.43x faster                                                 |
| tomli_loads              | 1.71 sec                                               | 1.20 sec: 1.43x faster                                                |
| unpickle_pure_python     | 194 us                                                 | 137 us: 1.42x faster                                                  |
| mako                     | 9.87 ms                                                | 6.95 ms: 1.42x faster                                                 |
| pprint_pformat           | 1.30 sec                                               | 918 ms: 1.42x faster                                                  |
| scimark_lu               | 103 ms                                                 | 72.7 ms: 1.42x faster                                                 |
| pprint_safe_repr         | 641 ms                                                 | 455 ms: 1.41x faster                                                  |
| logging_simple           | 4.45 us                                                | 3.17 us: 1.40x faster                                                 |
| logging_format           | 4.83 us                                                | 3.48 us: 1.39x faster                                                 |
| pycparser                | 877 ms                                                 | 635 ms: 1.38x faster                                                  |
| sqlalchemy_imperative    | 8.86 ms                                                | 6.44 ms: 1.38x faster                                                 |
| nbody                    | 93.0 ms                                                | 67.6 ms: 1.38x faster                                                 |
| comprehensions           | 16.9 us                                                | 12.4 us: 1.36x faster                                                 |
| crypto_pyaes             | 71.8 ms                                                | 53.0 ms: 1.36x faster                                                 |
| thrift                   | 572 us                                                 | 435 us: 1.32x faster                                                  |
| dulwich_log              | 35.3 ms                                                | 27.0 ms: 1.31x faster                                                 |
| scimark_fft              | 224 ms                                                 | 173 ms: 1.30x faster                                                  |
| regex_dna                | 174 ms                                                 | 135 ms: 1.30x faster                                                  |
| coroutines               | 20.7 ms                                                | 16.0 ms: 1.29x faster                                                 |
| genshi_text              | 17.3 ms                                                | 13.4 ms: 1.29x faster                                                 |
| scimark_sparse_mat_mult  | 3.42 ms                                                | 2.67 ms: 1.28x faster                                                 |
| sympy_sum                | 92.2 ms                                                | 72.9 ms: 1.27x faster                                                 |
| django_template          | 26.4 ms                                                | 20.9 ms: 1.26x faster                                                 |
| sqlalchemy_declarative   | 73.3 ms                                                | 58.1 ms: 1.26x faster                                                 |
| docutils                 | 1.73 sec                                               | 1.40 sec: 1.24x faster                                                |
| fannkuch                 | 303 ms                                                 | 246 ms: 1.23x faster                                                  |
| xml_etree_process        | 46.5 ms                                                | 38.0 ms: 1.23x faster                                                 |
| genshi_xml               | 33.8 ms                                                | 28.2 ms: 1.20x faster                                                 |
| sympy_str                | 165 ms                                                 | 138 ms: 1.20x faster                                                  |
| regex_effbot             | 2.46 ms                                                | 2.05 ms: 1.20x faster                                                 |
| sympy_integrate          | 13.1 ms                                                | 11.1 ms: 1.19x faster                                                 |
| mypy2                    | 607 ms                                                 | 516 ms: 1.18x faster                                                  |
| sympy_expand             | 269 ms                                                 | 233 ms: 1.15x faster                                                  |
| nqueens                  | 63.8 ms                                                | 55.8 ms: 1.14x faster                                                 |
| sqlglot_optimize         | 36.8 ms                                                | 32.5 ms: 1.13x faster                                                 |
| json_dumps               | 8.11 ms                                                | 7.27 ms: 1.11x faster                                                 |
| bench_thread_pool        | 527 us                                                 | 475 us: 1.11x faster                                                  |
| mdp                      | 1.63 sec                                               | 1.48 sec: 1.10x faster                                                |
| pathlib                  | 24.5 ms                                                | 22.3 ms: 1.10x faster                                                 |
| meteor_contest           | 77.7 ms                                                | 71.5 ms: 1.09x faster                                                 |
| json                     | 3.08 ms                                                | 2.85 ms: 1.08x faster                                                 |
| regex_v8                 | 17.1 ms                                                | 15.9 ms: 1.08x faster                                                 |
| sqlglot_normalize        | 190 ms                                                 | 178 ms: 1.07x faster                                                  |
| xml_etree_parse          | 108 ms                                                 | 104 ms: 1.04x faster                                                  |
| 2to3                     | 192 ms                                                 | 186 ms: 1.03x faster                                                  |
| xml_etree_generate       | 53.5 ms                                                | 52.2 ms: 1.03x faster                                                 |
| xml_etree_iterparse      | 72.1 ms                                                | 71.4 ms: 1.01x faster                                                 |
| json_loads               | 16.4 us                                                | 16.5 us: 1.00x slower                                                 |
| pidigits                 | 282 ms                                                 | 283 ms: 1.00x slower                                                  |
| sqlite_synth             | 1.46 us                                                | 1.54 us: 1.05x slower                                                 |
| coverage                 | 41.5 ms                                                | 46.1 ms: 1.11x slower                                                 |
| async_generators         | 231 ms                                                 | 277 ms: 1.20x slower                                                  |
| telco                    | 3.49 ms                                                | 4.51 ms: 1.29x slower                                                 |
| gc_traversal             | 2.36 ms                                                | 3.08 ms: 1.30x slower                                                 |
| create_gc_cycles         | 860 us                                                 | 1.28 ms: 1.48x slower                                                 |
| bench_mp_pool            | 37.4 ms                                                | 60.2 ms: 1.61x slower                                                 |
| python_startup_no_site   | 7.91 ms                                                | 13.5 ms: 1.70x slower                                                 |
| python_startup           | 10.9 ms                                                | 18.5 ms: 1.70x slower                                                 |
| Geometric mean           | (ref)                                                  | 1.31x faster                                                          |
Ignored benchmarks (14) of results/bm-20220323-3.10.4-9d38120/bm-20220323-darwin-arm64-python-v3.10.4-3.10.4-9d38120.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, flaskblogging, gunicorn, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (19) of results/bm-20250105-3.14.0a3+-82b905d/bm-20250105-darwin-arm64-kumaraditya303-future_iter-3.14.0a3+-82b905d.json: async_tree_cpu_io_mixed_tg, async_tree_eager, async_tree_eager_cpu_io_mixed, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io, async_tree_eager_io_tg, async_tree_eager_memoization, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers

- Geometric mean (including insignificant results): 1.315x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.26x
- 95% likely to have a speedup of 1.24x
- 99% likely to have a speedup of 1.22x

# Memory
- memory change: 1.34x