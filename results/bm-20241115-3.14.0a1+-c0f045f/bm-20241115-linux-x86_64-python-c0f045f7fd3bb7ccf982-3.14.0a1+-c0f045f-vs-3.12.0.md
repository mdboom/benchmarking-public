# Results vs. 3.12.0

- fork: python
- ref: c0f045f7fd3bb7ccf982
- machine: linux-x86_64
- commit hash: c0f045f
- commit date: 2024-11-15
- overall geometric mean: 1.062x faster
- HPT reliability: 100.00%
- HPT 99th percentile: 1.02x faster
- Memory change: 1.09x

Benchmarks with tag 'apps':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241115-linux-x86_64-python-c0f045f7fd3bb7ccf982-3.14.0a1+-c0f045f |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| 2to3           | 274 ms                                                 | 256 ms: 1.07x faster                                                   |
| docutils       | 2.77 sec                                               | 2.70 sec: 1.03x faster                                                 |
| Geometric mean | (ref)                                                  | 1.05x faster                                                           |

Benchmarks with tag 'asyncio':
==============================

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241115-linux-x86_64-python-c0f045f7fd3bb7ccf982-3.14.0a1+-c0f045f |
|----------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| async_tree_memoization_tg  | 575 ms                                                 | 380 ms: 1.51x faster                                                   |
| async_tree_none            | 472 ms                                                 | 330 ms: 1.43x faster                                                   |
| async_tree_memoization     | 578 ms                                                 | 414 ms: 1.40x faster                                                   |
| async_tree_none_tg         | 450 ms                                                 | 324 ms: 1.39x faster                                                   |
| async_tree_io              | 1.16 sec                                               | 855 ms: 1.35x faster                                                   |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 566 ms: 1.28x faster                                                   |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 571 ms: 1.27x faster                                                   |
| async_tree_io_tg           | 1.18 sec                                               | 976 ms: 1.21x faster                                                   |
| Geometric mean             | (ref)                                                  | 1.35x faster                                                           |

Benchmarks with tag 'math':
===========================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241115-linux-x86_64-python-c0f045f7fd3bb7ccf982-3.14.0a1+-c0f045f |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| float          | 84.7 ms                                                | 80.2 ms: 1.06x faster                                                  |
| pidigits       | 187 ms                                                 | 188 ms: 1.00x slower                                                   |
| Geometric mean | (ref)                                                  | 1.02x faster                                                           |

Benchmark hidden because not significant (1): nbody

Benchmarks with tag 'regex':
============================

| Benchmark      | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241115-linux-x86_64-python-c0f045f7fd3bb7ccf982-3.14.0a1+-c0f045f |
|----------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| regex_compile  | 148 ms                                                 | 130 ms: 1.14x faster                                                   |
| regex_dna      | 212 ms                                                 | 225 ms: 1.06x slower                                                   |
| regex_effbot   | 3.61 ms                                                | 3.83 ms: 1.06x slower                                                  |
| regex_v8       | 23.1 ms                                                | 24.6 ms: 1.06x slower                                                  |
| Geometric mean | (ref)                                                  | 1.01x slower                                                           |

Benchmarks with tag 'serialize':
================================

| Benchmark            | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241115-linux-x86_64-python-c0f045f7fd3bb7ccf982-3.14.0a1+-c0f045f |
|----------------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| tomli_loads          | 2.33 sec                                               | 2.09 sec: 1.11x faster                                                 |
| json_loads           | 28.5 us                                                | 26.8 us: 1.06x faster                                                  |
| unpickle_pure_python | 230 us                                                 | 219 us: 1.05x faster                                                   |
| xml_etree_generate   | 89.2 ms                                                | 85.5 ms: 1.04x faster                                                  |
| xml_etree_process    | 61.7 ms                                                | 59.2 ms: 1.04x faster                                                  |
| pickle_pure_python   | 324 us                                                 | 329 us: 1.02x slower                                                   |
| json_dumps           | 10.4 ms                                                | 11.3 ms: 1.09x slower                                                  |
| Geometric mean       | (ref)                                                  | 1.02x faster                                                           |

Benchmark hidden because not significant (2): xml_etree_iterparse, xml_etree_parse

Benchmarks with tag 'startup':
==============================

| Benchmark              | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241115-linux-x86_64-python-c0f045f7fd3bb7ccf982-3.14.0a1+-c0f045f |
|------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| python_startup_no_site | 6.94 ms                                                | 7.02 ms: 1.01x slower                                                  |
| python_startup         | 9.55 ms                                                | 12.7 ms: 1.33x slower                                                  |
| Geometric mean         | (ref)                                                  | 1.16x slower                                                           |

Benchmarks with tag 'template':
===============================

| Benchmark       | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241115-linux-x86_64-python-c0f045f7fd3bb7ccf982-3.14.0a1+-c0f045f |
|-----------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| django_template | 34.6 ms                                                | 32.1 ms: 1.08x faster                                                  |
| mako            | 11.9 ms                                                | 11.4 ms: 1.04x faster                                                  |
| Geometric mean  | (ref)                                                  | 1.06x faster                                                           |

All benchmarks:
===============

| Benchmark                  | bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0 | bm-20241115-linux-x86_64-python-c0f045f7fd3bb7ccf982-3.14.0a1+-c0f045f |
|----------------------------|:------------------------------------------------------:|:----------------------------------------------------------------------:|
| async_tree_memoization_tg  | 575 ms                                                 | 380 ms: 1.51x faster                                                   |
| deepcopy                   | 371 us                                                 | 259 us: 1.43x faster                                                   |
| async_tree_none            | 472 ms                                                 | 330 ms: 1.43x faster                                                   |
| async_tree_memoization     | 578 ms                                                 | 414 ms: 1.40x faster                                                   |
| async_tree_none_tg         | 450 ms                                                 | 324 ms: 1.39x faster                                                   |
| async_tree_io              | 1.16 sec                                               | 855 ms: 1.35x faster                                                   |
| deepcopy_memo              | 40.7 us                                                | 30.4 us: 1.34x faster                                                  |
| async_tree_cpu_io_mixed_tg | 726 ms                                                 | 566 ms: 1.28x faster                                                   |
| comprehensions             | 21.8 us                                                | 17.1 us: 1.27x faster                                                  |
| async_tree_cpu_io_mixed    | 726 ms                                                 | 571 ms: 1.27x faster                                                   |
| deepcopy_reduce            | 3.35 us                                                | 2.70 us: 1.24x faster                                                  |
| pathlib                    | 19.3 ms                                                | 16.0 ms: 1.21x faster                                                  |
| async_tree_io_tg           | 1.18 sec                                               | 976 ms: 1.21x faster                                                   |
| logging_format             | 7.23 us                                                | 6.18 us: 1.17x faster                                                  |
| logging_simple             | 6.46 us                                                | 5.55 us: 1.16x faster                                                  |
| sympy_sum                  | 169 ms                                                 | 147 ms: 1.15x faster                                                   |
| sqlalchemy_declarative     | 147 ms                                                 | 128 ms: 1.14x faster                                                   |
| regex_compile              | 148 ms                                                 | 130 ms: 1.14x faster                                                   |
| raytrace                   | 312 ms                                                 | 275 ms: 1.14x faster                                                   |
| go                         | 139 ms                                                 | 123 ms: 1.14x faster                                                   |
| tomli_loads                | 2.33 sec                                               | 2.09 sec: 1.11x faster                                                 |
| sympy_str                  | 300 ms                                                 | 270 ms: 1.11x faster                                                   |
| crypto_pyaes               | 81.9 ms                                                | 73.8 ms: 1.11x faster                                                  |
| deltablue                  | 3.72 ms                                                | 3.37 ms: 1.10x faster                                                  |
| sqlalchemy_imperative      | 18.7 ms                                                | 17.0 ms: 1.10x faster                                                  |
| chaos                      | 67.0 ms                                                | 61.4 ms: 1.09x faster                                                  |
| scimark_monte_carlo        | 75.1 ms                                                | 69.3 ms: 1.08x faster                                                  |
| generators                 | 31.2 ms                                                | 28.8 ms: 1.08x faster                                                  |
| async_generators           | 463 ms                                                 | 429 ms: 1.08x faster                                                   |
| django_template            | 34.6 ms                                                | 32.1 ms: 1.08x faster                                                  |
| sympy_integrate            | 21.4 ms                                                | 20.0 ms: 1.07x faster                                                  |
| 2to3                       | 274 ms                                                 | 256 ms: 1.07x faster                                                   |
| pprint_safe_repr           | 776 ms                                                 | 726 ms: 1.07x faster                                                   |
| json_loads                 | 28.5 us                                                | 26.8 us: 1.06x faster                                                  |
| pprint_pformat             | 1.57 sec                                               | 1.48 sec: 1.06x faster                                                 |
| float                      | 84.7 ms                                                | 80.2 ms: 1.06x faster                                                  |
| json                       | 5.26 ms                                                | 4.99 ms: 1.05x faster                                                  |
| meteor_contest             | 112 ms                                                 | 107 ms: 1.05x faster                                                   |
| scimark_fft                | 382 ms                                                 | 363 ms: 1.05x faster                                                   |
| sqlglot_transpile          | 1.68 ms                                                | 1.60 ms: 1.05x faster                                                  |
| unpickle_pure_python       | 230 us                                                 | 219 us: 1.05x faster                                                   |
| sympy_expand               | 478 ms                                                 | 457 ms: 1.05x faster                                                   |
| sqlglot_parse              | 1.36 ms                                                | 1.30 ms: 1.04x faster                                                  |
| nqueens                    | 83.3 ms                                                | 79.8 ms: 1.04x faster                                                  |
| mako                       | 11.9 ms                                                | 11.4 ms: 1.04x faster                                                  |
| xml_etree_generate         | 89.2 ms                                                | 85.5 ms: 1.04x faster                                                  |
| xml_etree_process          | 61.7 ms                                                | 59.2 ms: 1.04x faster                                                  |
| dulwich_log                | 68.5 ms                                                | 65.8 ms: 1.04x faster                                                  |
| pyflate                    | 482 ms                                                 | 467 ms: 1.03x faster                                                   |
| pycparser                  | 1.18 sec                                               | 1.14 sec: 1.03x faster                                                 |
| sqlglot_normalize          | 110 ms                                                 | 107 ms: 1.03x faster                                                   |
| sqlglot_optimize           | 54.8 ms                                                | 53.4 ms: 1.03x faster                                                  |
| docutils                   | 2.77 sec                                               | 2.70 sec: 1.03x faster                                                 |
| fannkuch                   | 417 ms                                                 | 410 ms: 1.02x faster                                                   |
| scimark_sparse_mat_mult    | 5.06 ms                                                | 5.00 ms: 1.01x faster                                                  |
| hexiom                     | 6.41 ms                                                | 6.35 ms: 1.01x faster                                                  |
| scimark_lu                 | 118 ms                                                 | 117 ms: 1.01x faster                                                   |
| pidigits                   | 187 ms                                                 | 188 ms: 1.00x slower                                                   |
| richards                   | 45.8 ms                                                | 46.3 ms: 1.01x slower                                                  |
| python_startup_no_site     | 6.94 ms                                                | 7.02 ms: 1.01x slower                                                  |
| bench_thread_pool          | 842 us                                                 | 853 us: 1.01x slower                                                   |
| pickle_pure_python         | 324 us                                                 | 329 us: 1.02x slower                                                   |
| mdp                        | 2.63 sec                                               | 2.68 sec: 1.02x slower                                                 |
| typing_runtime_protocols   | 158 us                                                 | 161 us: 1.02x slower                                                   |
| richards_super             | 51.5 ms                                                | 53.1 ms: 1.03x slower                                                  |
| coroutines                 | 23.2 ms                                                | 24.0 ms: 1.04x slower                                                  |
| regex_dna                  | 212 ms                                                 | 225 ms: 1.06x slower                                                   |
| regex_effbot               | 3.61 ms                                                | 3.83 ms: 1.06x slower                                                  |
| regex_v8                   | 23.1 ms                                                | 24.6 ms: 1.06x slower                                                  |
| json_dumps                 | 10.4 ms                                                | 11.3 ms: 1.09x slower                                                  |
| telco                      | 7.10 ms                                                | 7.81 ms: 1.10x slower                                                  |
| coverage                   | 72.7 ms                                                | 84.6 ms: 1.16x slower                                                  |
| gc_traversal               | 3.79 ms                                                | 4.61 ms: 1.21x slower                                                  |
| python_startup             | 9.55 ms                                                | 12.7 ms: 1.33x slower                                                  |
| create_gc_cycles           | 1.48 ms                                                | 2.70 ms: 1.83x slower                                                  |
| bench_mp_pool              | 24.0 ms                                                | 78.4 ms: 3.26x slower                                                  |
| Geometric mean             | (ref)                                                  | 1.05x faster                                                           |

Benchmark hidden because not significant (8): xml_etree_iterparse, xml_etree_parse, spectral_norm, scimark_sor, asyncio_websockets, logging_silent, sqlite_synth, nbody
Ignored benchmarks (14) of results/bm-20231002-3.12.0-0fb18b0/bm-20231002-linux-x86_64-python-v3.12.0-3.12.0-0fb18b0.json: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
Ignored benchmarks (13) of results/bm-20241115-3.14.0a1+-c0f045f/bm-20241115-linux-x86_64-python-c0f045f7fd3bb7ccf982-3.14.0a1+-c0f045f.json: bpe_tokeniser, connected_components, djangocms, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift

- Geometric mean (including insignificant results): 1.062x faster
# HPT report

- Reliability score: 100.00% likely to be faster
- 90% likely to have a speedup of 1.04x
- 95% likely to have a speedup of 1.03x
- 99% likely to have a speedup of 1.02x

# Memory
- memory change: 1.09x