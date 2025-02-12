# Results

- fork: python/c1f352bf0813803bb795
- version: 3.14.0a4+
- config: 
- commit hash: [c1f352b](https://github.com/python/cpython/commit/c1f352b)
- commit date: 2025-02-08T12:12:21-08:00
- commit merge base: [5ce70ad129d2e34a09f8ae6ee0542f4f996fb8ec](https://github.com/python/cpython/commit/5ce70ad129d2e34a09f8ae6ee0542f4f996fb8ec)
- ref: c1f352bf0813803bb795

## linux aarch64 (arminc)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13286286073)
- cpu model: missing
- platform: Linux-5.15.0-101-generic-aarch64-with-glibc2.35
- [raw results](bm-20250208-arminc-aarch64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b.json)

### vs. 3.10.4

- Geometric mean: 1.330x faster (HPT: reliability of 100.00%, 1.23x faster at 99th %ile)
- Memory usage: 1.30x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpickle, unpickle_list
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250208-arminc-aarch64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.10.4.md)
- [📈time plot](bm-20250208-arminc-aarch64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.045x faster (HPT: reliability of 99.98%, 1.00x faster at 99th %ile)
- Memory usage: 1.05x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpickle, unpickle_list
- new benchmarks: bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250208-arminc-aarch64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.12.0.md)
- [📈time plot](bm-20250208-arminc-aarch64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.041x faster (HPT: reliability of 100.00%, 1.01x faster at 99th %ile)
- Memory usage: 1.03x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- new benchmarks: dulwich_log
- [📄table](bm-20250208-arminc-aarch64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.13.0.md)
- [📈time plot](bm-20250208-arminc-aarch64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.13.0.svg)

## linux x86_64 (linux)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13286281600)
- cpu model: Intel(R) Xeon(R) W-2255 CPU @ 3.70GHz
- platform: Linux-5.4.0-205-generic-x86_64-with-glibc2.31
- [raw results](bm-20250208-linux-x86_64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b.json)

### vs. 3.10.4

- Geometric mean: 1.463x faster (HPT: reliability of 100.00%, 1.33x faster at 99th %ile)
- Memory usage: 1.26x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, djangocms, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250208-linux-x86_64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.10.4.md)
- [📈time plot](bm-20250208-linux-x86_64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.123x faster (HPT: reliability of 100.00%, 1.07x faster at 99th %ile)
- Memory usage: 1.09x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift
- [📄table](bm-20250208-linux-x86_64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.12.0.md)
- [📈time plot](bm-20250208-linux-x86_64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.055x faster (HPT: reliability of 100.00%, 1.02x faster at 99th %ile)
- Memory usage: 1.03x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- [📄table](bm-20250208-linux-x86_64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.13.0.md)
- [📈time plot](bm-20250208-linux-x86_64-python-c1f352bf0813803bb795-3.14.0a4%2B-c1f352b-vs-3.13.0.svg)

