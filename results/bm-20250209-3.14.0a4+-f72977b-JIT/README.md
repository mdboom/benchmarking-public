# Results

- fork: python/f72977b2f4a29063ae30
- version: 3.14.0a4+
- config: JIT
- commit hash: [f72977b](https://github.com/python/cpython/commit/f72977b)
- commit date: 2025-02-09T06:13:43+00:00
- commit merge base: [29f8a67ae00081a36fdc97f2f2f96f971393a22a](https://github.com/python/cpython/commit/29f8a67ae00081a36fdc97f2f2f96f971393a22a)
- ref: f72977b2f4a29063ae30

## linux x86_64 (linux)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13271271258)
- cpu model: Intel(R) Xeon(R) W-2255 CPU @ 3.70GHz
- platform: Linux-5.4.0-205-generic-x86_64-with-glibc2.31
- [raw results](bm-20250209-linux-x86_64-python-f72977b2f4a29063ae30-3.14.0a4%2B-f72977b.json)

### vs. 3.10.4

- Geometric mean: 1.448x faster (HPT: reliability of 100.00%, 1.31x faster at 99th %ile)
- Memory usage: 1.28x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, djangocms, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250209-linux-x86_64-python-f72977b2f4a29063ae30-3.14.0a4%2B-f72977b-vs-3.10.4.md)
- [📈time plot](bm-20250209-linux-x86_64-python-f72977b2f4a29063ae30-3.14.0a4%2B-f72977b-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.112x faster (HPT: reliability of 100.00%, 1.04x faster at 99th %ile)
- Memory usage: 1.11x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift
- [📄table](bm-20250209-linux-x86_64-python-f72977b2f4a29063ae30-3.14.0a4%2B-f72977b-vs-3.12.0.md)
- [📈time plot](bm-20250209-linux-x86_64-python-f72977b2f4a29063ae30-3.14.0a4%2B-f72977b-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.044x faster (HPT: reliability of 99.96%, 1.00x faster at 99th %ile)
- Memory usage: 1.04x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- [📄table](bm-20250209-linux-x86_64-python-f72977b2f4a29063ae30-3.14.0a4%2B-f72977b-vs-3.13.0.md)
- [📈time plot](bm-20250209-linux-x86_64-python-f72977b2f4a29063ae30-3.14.0a4%2B-f72977b-vs-3.13.0.svg)

### vs. base

- Geometric mean: 1.001x faster (HPT: reliability of 62.08%, 1.00x slower at 99th %ile)
- Memory usage: 1.00x
- missing benchmarks: 🔴 asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [🧠memory plot](bm-20250209-linux-x86_64-python-f72977b2f4a29063ae30-3.14.0a4%2B-f72977b-vs-base-mem.svg)
- [📄table](bm-20250209-linux-x86_64-python-f72977b2f4a29063ae30-3.14.0a4%2B-f72977b-vs-base.md)
- [📈time plot](bm-20250209-linux-x86_64-python-f72977b2f4a29063ae30-3.14.0a4%2B-f72977b-vs-base.svg)

