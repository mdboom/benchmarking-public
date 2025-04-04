# Results vs. 3.12.0

- fork: faster-cpython
- ref: use_stackrefs
- machine: linux-x86_64
- commit hash: ad7e1e6
- commit date: 2024-12-20
- overall geometric mean: 1.085x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.03x faster
- Memory change: 1.10x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241220-linux-x86_64-faster%2dcpython-use_stackrefs-3.14.0a3+-ad7e1e6 |
|----------------|:------------------------------------------------------:|:-------------------------------------------------------------------------:|
| 2to3           | 274 ms                                                 | 257 ms: 1.07x faster                                                      |
| docutils       | 2.77 sec                                               | 2.64 sec: 1.05x faster                                                    |
| Geometric mean | (ref)                                                  | 1.06x faster                                                              |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241220-linux-x86_64-faster%2dcpython-use_stackrefs-3.14.0a3+-ad7e1e6 |
|----------------------------|:------------------------------------------------------:|:-------------------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 629 ms: 1.88x faster                                                      |
| async_tree_io              | 1.16 sec                                               | 629 ms: 1.84x faster                                                      |
| async_tree_memoization_tg  | 575 ms                                                 | 316 ms: 1.82x faster                                                      |
| async_tree_none_tg         | 450 ms                                                 | 252 ms: 1.78x faster                                                      |
| async_tree_none            | 472 ms                                                 | 270 ms: 1.75x faster                                                      |
| async_tree_memoization     | 578 ms                                                 | 342 ms: 1.69x faster                                                      |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 478 ms: 1.52x faster                                                      |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 496 ms: 1.46x faster                                                      |
| Geometric mean             | (ref)                                                  | 1.71x faster                                                              |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241220-linux-x86_64-faster%2dcpython-use_stackrefs-3.14.0a3+-ad7e1e6 |
|----------------|:------------------------------------------------------:|:-------------------------------------------------------------------------:|
| float          | 84.7 ms                                                | 78.1 ms: 1.08x faster                                                     |
| pidigits       | 187 ms                                                 | 187 ms: 1.00x faster                                                      |
| nbody          | 97.0 ms                                                | 100 ms: 1.03x slower                                                      |
| Geometric mean | (ref)                                                  | 1.02x faster                                                              |

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241220-linux-x86_64-faster%2dcpython-use_stackrefs-3.14.0a3+-ad7e1e6 |
|----------------|:------------------------------------------------------:|:-------------------------------------------------------------------------:|
| regex_compile  | 148 ms                                                 | 129 ms: 1.15x faster                                                      |
| regex_effbot   | 3.61 ms                                                | 3.54 ms: 1.02x faster                                                     |
| regex_dna      | 212 ms                                                 | 223 ms: 1.05x slower                                                      |
| regex_v8       | 23.1 ms                                                | 26.5 ms: 1.15x slower                                                     |
| Geometric mean | (ref)                                                  | 1.01x slower                                                              |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241220-linux-x86_64-faster%2dcpython-use_stackrefs-3.14.0a3+-ad7e1e6 |
|----------------------|:------------------------------------------------------:|:-------------------------------------------------------------------------:|
| tomli_loads          | 2.33 sec                                               | 1.98 sec: 1.18x faster                                                    |
| xml_etree_parse      | 159 ms                                                 | 138 ms: 1.15x faster                                                      |
| xml_etree_iterparse  | 107 ms                                                 | 98.2 ms: 1.09x faster                                                     |
| json_loads           | 28.5 us                                                | 26.5 us: 1.08x faster                                                     |
| xml_etree_generate   | 89.2 ms                                                | 84.7 ms: 1.05x faster                                                     |
| unpickle_pure_python | 230 us                                                 | 221 us: 1.04x faster                                                      |
| xml_etree_process    | 61.7 ms                                                | 59.4 ms: 1.04x faster                                                     |
| pickle_pure_python   | 324 us                                                 | 331 us: 1.02x slower                                                      |
| json_dumps           | 10.4 ms                                                | 11.6 ms: 1.11x slower                                                     |
| Geometric mean       | (ref)                                                  | 1.05x faster                                                              |

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241220-linux-x86_64-faster%2dcpython-use_stackrefs-3.14.0a3+-ad7e1e6 |
|------------------------|:------------------------------------------------------:|:-------------------------------------------------------------------------:|
| python_startup_no_site | 6.94 ms                                                | 7.08 ms: 1.02x slower                                                     |
| python_startup         | 9.55 ms                                                | 12.9 ms: 1.35x slower                                                     |
| Geometric mean         | (ref)                                                  | 1.17x slower                                                              |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241220-linux-x86_64-faster%2dcpython-use_stackrefs-3.14.0a3+-ad7e1e6 |
|-----------------|:------------------------------------------------------:|:-------------------------------------------------------------------------:|
| django_template | 34.6 ms                                                | 33.0 ms: 1.05x faster                                                     |
| mako            | 11.9 ms                                                | 12.2 ms: 1.02x slower                                                     |
| Geometric mean  | (ref)                                                  | 1.01x faster                                                              |

All benchmarks:
===============

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241220-linux-x86_64-faster%2dcpython-use_stackrefs-3.14.0a3+-ad7e1e6 |
|----------------------------|:------------------------------------------------------:|:-------------------------------------------------------------------------:|
| async_tree_io_tg           | 1.18 sec                                               | 629 ms: 1.88x faster                                                      |
| async_tree_io              | 1.16 sec                                               | 629 ms: 1.84x faster                                                      |
| async_tree_memoization_tg  | 575 ms                                                 | 316 ms: 1.82x faster                                                      |
| async_tree_none_tg         | 450 ms                                                 | 252 ms: 1.78x faster                                                      |
| async_tree_none            | 472 ms                                                 | 270 ms: 1.75x faster                                                      |
| async_tree_memoization     | 578 ms                                                 | 342 ms: 1.69x faster                                                      |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 478 ms: 1.52x faster                                                      |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 496 ms: 1.46x faster                                                      |
| deepcopy                   | 371 us                                                 | 267 us: 1.39x faster                                                      |
| deepcopy_memo              | 40.7 us                                                | 31.0 us: 1.31x faster                                                     |
| comprehensions             | 21.8 us                                                | 17.5 us: 1.24x faster                                                     |
| deepcopy_reduce            | 3.35 us                                                | 2.76 us: 1.21x faster                                                     |
| go                         | 139 ms                                                 | 117 ms: 1.19x faster                                                      |
| tomli_loads                | 2.33 sec                                               | 1.98 sec: 1.18x faster                                                    |
| pathlib                    | 19.3 ms                                                | 16.8 ms: 1.15x faster                                                     |
| xml_etree_parse            | 159 ms                                                 | 138 ms: 1.15x faster                                                      |
| regex_compile              | 148 ms                                                 | 129 ms: 1.15x faster                                                      |
| raytrace                   | 312 ms                                                 | 273 ms: 1.14x faster                                                      |
| logging_format             | 7.23 us                                                | 6.33 us: 1.14x faster                                                     |
| sympy_sum                  | 169 ms                                                 | 149 ms: 1.13x faster                                                      |
| logging_simple             | 6.46 us                                                | 5.77 us: 1.12x faster                                                     |
| sqlalchemy_imperative      | 18.7 ms                                                | 16.7 ms: 1.12x faster                                                     |
| deltablue                  | 3.72 ms                                                | 3.34 ms: 1.11x faster                                                     |
| sqlalchemy_declarative     | 147 ms                                                 | 132 ms: 1.11x faster                                                      |
| crypto_pyaes               | 81.9 ms                                                | 73.7 ms: 1.11x faster                                                     |
| sympy_str                  | 300 ms                                                 | 272 ms: 1.10x faster                                                      |
| generators                 | 31.2 ms                                                | 28.3 ms: 1.10x faster                                                     |
| xml_etree_iterparse        | 107 ms                                                 | 98.2 ms: 1.09x faster                                                     |
| float                      | 84.7 ms                                                | 78.1 ms: 1.08x faster                                                     |
| spectral_norm              | 115 ms                                                 | 106 ms: 1.08x faster                                                      |
| scimark_fft                | 382 ms                                                 | 353 ms: 1.08x faster                                                      |
| async_generators           | 463 ms                                                 | 429 ms: 1.08x faster                                                      |
| json_loads                 | 28.5 us                                                | 26.5 us: 1.08x faster                                                     |
| scimark_monte_carlo        | 75.1 ms                                                | 69.8 ms: 1.08x faster                                                     |
| chaos                      | 67.0 ms                                                | 62.6 ms: 1.07x faster                                                     |
| sympy_integrate            | 21.4 ms                                                | 20.0 ms: 1.07x faster                                                     |
| 2to3                       | 274 ms                                                 | 257 ms: 1.07x faster                                                      |
| mdp                        | 2.63 sec                                               | 2.48 sec: 1.06x faster                                                    |
| dulwich_log                | 68.5 ms                                                | 64.7 ms: 1.06x faster                                                     |
| sqlglot_parse              | 1.36 ms                                                | 1.29 ms: 1.06x faster                                                     |
| json                       | 5.26 ms                                                | 4.99 ms: 1.05x faster                                                     |
| xml_etree_generate         | 89.2 ms                                                | 84.7 ms: 1.05x faster                                                     |
| django_template            | 34.6 ms                                                | 33.0 ms: 1.05x faster                                                     |
| meteor_contest             | 112 ms                                                 | 107 ms: 1.05x faster                                                      |
| docutils                   | 2.77 sec                                               | 2.64 sec: 1.05x faster                                                    |
| sqlglot_transpile          | 1.68 ms                                                | 1.61 ms: 1.05x faster                                                     |
| logging_silent             | 104 ns                                                 | 100 ns: 1.04x faster                                                      |
| unpickle_pure_python       | 230 us                                                 | 221 us: 1.04x faster                                                      |
| xml_etree_process          | 61.7 ms                                                | 59.4 ms: 1.04x faster                                                     |
| scimark_sor                | 129 ms                                                 | 124 ms: 1.04x faster                                                      |
| pycparser                  | 1.18 sec                                               | 1.14 sec: 1.04x faster                                                    |
| sqlglot_normalize          | 110 ms                                                 | 107 ms: 1.03x faster                                                      |
| sympy_expand               | 478 ms                                                 | 463 ms: 1.03x faster                                                      |
| scimark_sparse_mat_mult    | 5.06 ms                                                | 4.90 ms: 1.03x faster                                                     |
| richards                   | 45.8 ms                                                | 44.5 ms: 1.03x faster                                                     |
| sqlglot_optimize           | 54.8 ms                                                | 53.5 ms: 1.03x faster                                                     |
| regex_effbot               | 3.61 ms                                                | 3.54 ms: 1.02x faster                                                     |
| pyflate                    | 482 ms                                                 | 475 ms: 1.02x faster                                                      |
| pprint_safe_repr           | 776 ms                                                 | 767 ms: 1.01x faster                                                      |
| pprint_pformat             | 1.57 sec                                               | 1.55 sec: 1.01x faster                                                    |
| richards_super             | 51.5 ms                                                | 51.1 ms: 1.01x faster                                                     |
| sqlite_synth               | 2.83 us                                                | 2.81 us: 1.01x faster                                                     |
| pidigits                   | 187 ms                                                 | 187 ms: 1.00x faster                                                      |
| nqueens                    | 83.3 ms                                                | 83.5 ms: 1.00x slower                                                     |
| scimark_lu                 | 118 ms                                                 | 119 ms: 1.01x slower                                                      |
| pickle_pure_python         | 324 us                                                 | 331 us: 1.02x slower                                                      |
| python_startup_no_site     | 6.94 ms                                                | 7.08 ms: 1.02x slower                                                     |
| mako                       | 11.9 ms                                                | 12.2 ms: 1.02x slower                                                     |
| fannkuch                   | 417 ms                                                 | 427 ms: 1.02x slower                                                      |
| coroutines                 | 23.2 ms                                                | 23.8 ms: 1.03x slower                                                     |
| nbody                      | 97.0 ms                                                | 100 ms: 1.03x slower                                                      |
| bench_thread_pool          | 842 us                                                 | 873 us: 1.04x slower                                                      |
| typing_runtime_protocols   | 158 us                                                 | 165 us: 1.04x slower                                                      |
| regex_dna                  | 212 ms                                                 | 223 ms: 1.05x slower                                                      |
| telco                      | 7.10 ms                                                | 7.88 ms: 1.11x slower                                                     |
| json_dumps                 | 10.4 ms                                                | 11.6 ms: 1.11x slower                                                     |
| regex_v8                   | 23.1 ms                                                | 26.5 ms: 1.15x slower                                                     |
| mypy2                      | 830 ms                                                 | 951 ms: 1.15x slower                                                      |
| coverage                   | 72.7 ms                                                | 83.8 ms: 1.15x slower                                                     |
| gc_traversal               | 3.79 ms                                                | 4.92 ms: 1.30x slower                                                     |
| python_startup             | 9.55 ms                                                | 12.9 ms: 1.35x slower                                                     |
| create_gc_cycles           | 1.48 ms                                                | 2.44 ms: 1.66x slower                                                     |
| bench_mp_pool              | 24.0 ms                                                | 81.9 ms: 3.41x slower                                                     |
| Geometric mean             | (ref)                                                  | 1.07x faster                                                              |

Benchmark hidden because not significant (2): hexiom, asyncio_websockets
Ignored benchmarks (13) of results/bm-20231002-3.12.0-0fb18b0/bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (13) of results/bm-20241220-3.14.0a3+-ad7e1e6/bm-20241220-linux-x86_64-faster%2dcpython-use_stackrefs-3.14.0a3+-ad7e1e6.json: bpe_tokeniser, connected_components, djangocms, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift

- Geometric mean (including insignificant results): 1.085x faster

# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.04x
- 95% likely to have a speedup of 1.03x
- 99% likely to have a speedup of 1.03x

# Memory
- memory change: 1.10x