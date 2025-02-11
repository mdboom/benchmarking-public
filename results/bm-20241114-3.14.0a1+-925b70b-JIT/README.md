# Results

- fork: brandtbucher/justin_frame_pointer
- version: 3.14.0a1+
- config: JIT
- commit hash: [925b70b](https://github.com/brandtbucher/cpython/commit/925b70b)
- commit date: 2024-11-14T11:07:10-08:00
- commit merge base: [09d6f5dc7824c74672add512619e978844ff8051](https://github.com/python/cpython/commit/09d6f5dc7824c74672add512619e978844ff8051)
- ref: justin_frame_pointer

## linux x86_64 (linux)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/11846676851)
- cpu model: Intel(R) Xeon(R) W-2255 CPU @ 3.70GHz
- platform: Linux-5.4.0-196-generic-x86_64-with-glibc2.31
- [raw results](bm-20241114-linux-x86_64-brandtbucher-justin_frame_pointer-3.14.0a1%2B-925b70b.json)

### vs. 3.10.4

- Geometric mean: 1.348x faster (HPT: reliability of 100.00%, 1.21x faster at 99th %ile)
- Memory usage: 1.34x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, shortest_path, sphinx
- [📄table](bm-20241114-linux-x86_64-brandtbucher-justin_frame_pointer-3.14.0a1%2B-925b70b-vs-3.10.4.md)
- [📈time plot](bm-20241114-linux-x86_64-brandtbucher-justin_frame_pointer-3.14.0a1%2B-925b70b-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.029x faster (HPT: reliability of 98.45%, 1.00x faster at 99th %ile)
- Memory usage: 1.15x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: bpe_tokeniser, connected_components, djangocms, genshi_text, genshi_xml, html5lib, k_core, pylint, shortest_path, sphinx, thrift
- [📄table](bm-20241114-linux-x86_64-brandtbucher-justin_frame_pointer-3.14.0a1%2B-925b70b-vs-3.12.0.md)
- [📈time plot](bm-20241114-linux-x86_64-brandtbucher-justin_frame_pointer-3.14.0a1%2B-925b70b-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.031x slower (HPT: reliability of 99.99%, 1.01x slower at 99th %ile)
- Memory usage: 1.08x
- missing benchmarks: chameleon, gevent_hub, gunicorn, many_optionals, subparsers, tornado_http
- [📄table](bm-20241114-linux-x86_64-brandtbucher-justin_frame_pointer-3.14.0a1%2B-925b70b-vs-3.13.0.md)
- [📈time plot](bm-20241114-linux-x86_64-brandtbucher-justin_frame_pointer-3.14.0a1%2B-925b70b-vs-3.13.0.svg)

### vs. base

- Geometric mean: 1.023x slower (HPT: reliability of 100.00%, 1.01x slower at 99th %ile)
- Memory usage: 1.00x
- missing benchmarks: 🔴 many_optionals, subparsers
- [🧠memory plot](bm-20241114-linux-x86_64-brandtbucher-justin_frame_pointer-3.14.0a1%2B-925b70b-vs-base-mem.svg)
- [📄table](bm-20241114-linux-x86_64-brandtbucher-justin_frame_pointer-3.14.0a1%2B-925b70b-vs-base.md)
- [📈time plot](bm-20241114-linux-x86_64-brandtbucher-justin_frame_pointer-3.14.0a1%2B-925b70b-vs-base.svg)

