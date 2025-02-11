# Results

- fork: kumaraditya303/current_task
- version: 3.14.0a3+
- config: 
- commit hash: [b20a605](https://github.com/kumaraditya303/cpython/commit/b20a605)
- commit date: 2025-01-02T14:33:04+00:00
- commit merge base: [e1baa778f602ede66831eb34b9ef17f21e4d4347](https://github.com/python/cpython/commit/e1baa778f602ede66831eb34b9ef17f21e4d4347)
- ref: current_task

## linux x86_64 (linux)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/12696203820)
- cpu model: Intel(R) Xeon(R) W-2255 CPU @ 3.70GHz
- platform: Linux-5.4.0-196-generic-x86_64-with-glibc2.31
- [raw results](bm-20250102-linux-x86_64-kumaraditya303-current_task-3.14.0a3%2B-b20a605.json)

### vs. 3.10.4

- Geometric mean: 1.448x faster (HPT: reliability of 100.00%, 1.32x faster at 99th %ile)
- Memory usage: 1.26x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, flaskblogging, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250102-linux-x86_64-kumaraditya303-current_task-3.14.0a3%2B-b20a605-vs-3.10.4.md)
- [📈time plot](bm-20250102-linux-x86_64-kumaraditya303-current_task-3.14.0a3%2B-b20a605-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.113x faster (HPT: reliability of 100.00%, 1.05x faster at 99th %ile)
- Memory usage: 1.09x
- missing benchmarks: aiohttp, asyncio_tcp, asyncio_tcp_ssl, chameleon, dask, gunicorn, mypy2, pickle, pickle_dict, pickle_list, tornado_http, unpack_sequence, unpickle, unpickle_list
- new benchmarks: bpe_tokeniser, connected_components, djangocms, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift
- [📄table](bm-20250102-linux-x86_64-kumaraditya303-current_task-3.14.0a3%2B-b20a605-vs-3.12.0.md)
- [📈time plot](bm-20250102-linux-x86_64-kumaraditya303-current_task-3.14.0a3%2B-b20a605-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.044x faster (HPT: reliability of 100.00%, 1.01x faster at 99th %ile)
- Memory usage: 1.02x
- missing benchmarks: chameleon, gevent_hub, gunicorn, tornado_http
- [📄table](bm-20250102-linux-x86_64-kumaraditya303-current_task-3.14.0a3%2B-b20a605-vs-3.13.0.md)
- [📈time plot](bm-20250102-linux-x86_64-kumaraditya303-current_task-3.14.0a3%2B-b20a605-vs-3.13.0.svg)

### vs. base

- Geometric mean: 1.005x faster (HPT: reliability of 99.71%, 1.00x faster at 99th %ile)
- Memory usage: 1.00x
- [🧠memory plot](bm-20250102-linux-x86_64-kumaraditya303-current_task-3.14.0a3%2B-b20a605-vs-base-mem.svg)
- [📄table](bm-20250102-linux-x86_64-kumaraditya303-current_task-3.14.0a3%2B-b20a605-vs-base.md)
- [📈time plot](bm-20250102-linux-x86_64-kumaraditya303-current_task-3.14.0a3%2B-b20a605-vs-base.svg)

