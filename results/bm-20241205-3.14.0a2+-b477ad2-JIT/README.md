# Results

- fork: brandtbucher/justin_cold_19
- version: 3.14.0a2+
- config: JIT
- commit hash: [b477ad2](https://github.com/brandtbucher/cpython/commit/b477ad2)
- commit date: 2024-12-05T15:50:00-08:00
- commit merge base: [94b8f8b40943bf38cf5c454773a3fb8f4ff71e01](https://github.com/python/cpython/commit/94b8f8b40943bf38cf5c454773a3fb8f4ff71e01)
- ref: justin_cold_19

## linux x86_64 (azure)

- [pystats raw](bm-20241205-azure-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-pystats.json)
- [pystats table](bm-20241205-azure-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-pystats.md)

### vs. base

- [pystats diff](bm-20241205-azure-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-pystats-vs-base.md)

## linux x86_64 (linux)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/12190123931)
- cpu model: Intel(R) Xeon(R) W-2255 CPU @ 3.70GHz
- platform: Linux-5.4.0-196-generic-x86_64-with-glibc2.31
- [raw results](bm-20241205-linux-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2.json)

### vs. 3.10.4

- Geometric mean: 1.433x faster (HPT: reliability of 100.00%, 1.28x faster at 99th %ile)
- Memory usage: 1.28x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20241205-linux-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-vs-3.10.4.md)
- [📈time plot](bm-20241205-linux-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.103x faster (HPT: reliability of 100.00%, 1.03x faster at 99th %ile)
- Memory usage: 1.10x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: bpe_tokeniser, connected_components, djangocms, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift
- [📄table](bm-20241205-linux-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-vs-3.12.0.md)
- [📈time plot](bm-20241205-linux-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.031x faster (HPT: reliability of 97.59%, 1.00x faster at 99th %ile)
- Memory usage: 1.04x
- missing benchmarks: chameleon, gevent_hub, gunicorn, tornado_http
- [📄table](bm-20241205-linux-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-vs-3.13.0.md)
- [📈time plot](bm-20241205-linux-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-vs-3.13.0.svg)

### vs. base

- Geometric mean: 1.003x slower (HPT: reliability of 99.83%, 1.00x slower at 99th %ile)
- Memory usage: 1.00x
- missing benchmarks: 🔴 mypy2
- [🧠memory plot](bm-20241205-linux-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-vs-base-mem.svg)
- [📄table](bm-20241205-linux-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-vs-base.md)
- [📈time plot](bm-20241205-linux-x86_64-brandtbucher-justin_cold_19-3.14.0a2%2B-b477ad2-vs-base.svg)

