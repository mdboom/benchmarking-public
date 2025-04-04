# Results

- fork: python/61b35f74aa4a6ac60663
- version: 3.14.0a4+
- config: 
- commit hash: [61b35f7](https://github.com/python/cpython/commit/61b35f7)
- commit date: 2025-01-18T16:53:06-05:00
- commit merge base: [e8092e5cdcd6707ac0b16d8fb37fa080a88bcc97](https://github.com/python/cpython/commit/e8092e5cdcd6707ac0b16d8fb37fa080a88bcc97)
- ref: 61b35f74aa4a6ac60663

## linux aarch64 (arminc)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/12848484134)
- cpu model: missing
- platform: Linux-5.15.0-101-generic-aarch64-with-glibc2.35
- [raw results](bm-20250118-arminc-aarch64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7.json)

### vs. 3.10.4

- Geometric mean: 1.327x faster (HPT: reliability of 100.00%, 1.23x faster at 99th %ile)
- Memory usage: 1.30x
- missing benchmarks: aiohttp, chameleon, dask, flaskblogging, gunicorn, mypy2, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers, unpack_sequence
- [📄table](bm-20250118-arminc-aarch64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.md)
- [📈time plot](bm-20250118-arminc-aarch64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.044x faster (HPT: reliability of 99.99%, 1.01x faster at 99th %ile)
- Memory usage: 1.04x
- missing benchmarks: aiohttp, chameleon, dask, gunicorn, mypy2, tornado_http
- new benchmarks: bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers, unpack_sequence
- [📄table](bm-20250118-arminc-aarch64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.md)
- [📈time plot](bm-20250118-arminc-aarch64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.044x faster (HPT: reliability of 100.00%, 1.01x faster at 99th %ile)
- Memory usage: 1.02x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, dulwich_log, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250118-arminc-aarch64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.md)
- [📈time plot](bm-20250118-arminc-aarch64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.svg)

## linux x86_64 (azure)

- [pystats raw](bm-20250118-azure-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-pystats.json)
- [pystats table](bm-20250118-azure-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-pystats.md)

## linux x86_64 (linux)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/12848484134)
- cpu model: Intel(R) Xeon(R) W-2255 CPU @ 3.70GHz
- platform: Linux-5.4.0-196-generic-x86_64-with-glibc2.31
- [raw results](bm-20250118-linux-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7.json)

### vs. 3.10.4

- Geometric mean: 1.449x faster (HPT: reliability of 100.00%, 1.32x faster at 99th %ile)
- Memory usage: 1.26x
- missing benchmarks: aiohttp, chameleon, dask, djangocms, flaskblogging, gunicorn, mypy2, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250118-linux-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.md)
- [📈time plot](bm-20250118-linux-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.114x faster (HPT: reliability of 100.00%, 1.05x faster at 99th %ile)
- Memory usage: 1.09x
- missing benchmarks: aiohttp, chameleon, dask, gunicorn, mypy2, tornado_http
- new benchmarks: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift
- [📄table](bm-20250118-linux-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.md)
- [📈time plot](bm-20250118-linux-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.046x faster (HPT: reliability of 100.00%, 1.01x faster at 99th %ile)
- Memory usage: 1.02x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250118-linux-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.md)
- [📈time plot](bm-20250118-linux-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.svg)

## linux x86_64 (pythonperf2)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/12848484134)
- cpu model: 12th Gen Intel(R) Core(TM) i9-12900
- platform: Linux-5.15.0-125-generic-x86_64-with-glibc2.35
- [raw results](bm-20250118-pythonperf2-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7.json)

### vs. 3.10.4

- Geometric mean: 1.361x faster (HPT: reliability of 100.00%, 1.24x faster at 99th %ile)
- Memory usage: 1.27x
- missing benchmarks: aiohttp, chameleon, dask, flaskblogging, gunicorn, mypy2, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250118-pythonperf2-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.md)
- [📈time plot](bm-20250118-pythonperf2-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.056x faster (HPT: reliability of 100.00%, 1.01x faster at 99th %ile)
- Memory usage: 1.04x
- missing benchmarks: aiohttp, chameleon, dask, gunicorn, mypy2, tornado_http
- new benchmarks: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift
- [📄table](bm-20250118-pythonperf2-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.md)
- [📈time plot](bm-20250118-pythonperf2-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.068x faster (HPT: reliability of 100.00%, 1.03x faster at 99th %ile)
- Memory usage: 1.02x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250118-pythonperf2-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.md)
- [📈time plot](bm-20250118-pythonperf2-x86_64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.svg)

## windows amd64 (pythonperf1)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/12848484134)
- cpu model: missing
- platform: Windows-11-10.0.22631-SP0
- [raw results](bm-20250118-pythonperf1-amd64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7.json)

### vs. 3.10.4

- Geometric mean: 1.146x faster (HPT: reliability of 100.00%, 1.05x faster at 99th %ile)
- Memory usage: unknown
- missing benchmarks: aiohttp, chameleon, dask, flaskblogging, mypy2, sqlalchemy_declarative, sqlalchemy_imperative, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, asyncio_websockets, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250118-pythonperf1-amd64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.md)
- [📈time plot](bm-20250118-pythonperf1-amd64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.028x slower (HPT: reliability of 99.78%, 1.01x slower at 99th %ile)
- Memory usage: unknown
- missing benchmarks: aiohttp, chameleon, dask, mypy2, sqlalchemy_declarative, sqlalchemy_imperative, tornado_http
- new benchmarks: asyncio_websockets, bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift
- [📄table](bm-20250118-pythonperf1-amd64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.md)
- [📈time plot](bm-20250118-pythonperf1-amd64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.054x slower (HPT: reliability of 100.00%, 1.06x slower at 99th %ile)
- Memory usage: unknown
- missing benchmarks: chameleon, djangocms, gevent_hub, sqlalchemy_declarative, sqlalchemy_imperative, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250118-pythonperf1-amd64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.md)
- [📈time plot](bm-20250118-pythonperf1-amd64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.svg)

## windows x86 (pythonperf1_win32)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/12848484134)
- cpu model: missing
- platform: Windows-11-10.0.22631-SP0
- [raw results](bm-20250118-pythonperf1_win32-x86-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7.json)

### vs. 3.10.4

- Geometric mean: 1.025x faster (HPT: reliability of 91.42%, 1.00x slower at 99th %ile)
- Memory usage: unknown
- missing benchmarks: aiohttp, chameleon, dask, flaskblogging, mypy2, sqlalchemy_declarative, sqlalchemy_imperative, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, asyncio_websockets, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250118-pythonperf1_win32-x86-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.md)
- [📈time plot](bm-20250118-pythonperf1_win32-x86-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.037x faster (HPT: reliability of 99.06%, 1.00x faster at 99th %ile)
- Memory usage: unknown
- missing benchmarks: aiohttp, chameleon, dask, mypy2, sqlalchemy_declarative, sqlalchemy_imperative, tornado_http
- new benchmarks: asyncio_websockets, bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift
- [📄table](bm-20250118-pythonperf1_win32-x86-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.md)
- [📈time plot](bm-20250118-pythonperf1_win32-x86-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.079x slower (HPT: reliability of 100.00%, 1.09x slower at 99th %ile)
- Memory usage: unknown
- missing benchmarks: chameleon, djangocms, gevent_hub, sqlalchemy_declarative, sqlalchemy_imperative, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250118-pythonperf1_win32-x86-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.md)
- [📈time plot](bm-20250118-pythonperf1_win32-x86-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.svg)

## darwin arm64 (darwin)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/12848484134)
- cpu model: missing
- platform: macOS-15.2-arm64-arm-64bit-Mach-O
- [raw results](bm-20250118-darwin-arm64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7.json)

### vs. 3.10.4

- Geometric mean: 1.404x faster (HPT: reliability of 100.00%, 1.23x faster at 99th %ile)
- Memory usage: 1.13x
- missing benchmarks: chameleon, djangocms, gevent_hub, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io_tg, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250118-darwin-arm64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.md)
- [📈time plot](bm-20250118-darwin-arm64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.120x faster (HPT: reliability of 100.00%, 1.04x faster at 99th %ile)
- Memory usage: 1.04x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250118-darwin-arm64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.md)
- [📈time plot](bm-20250118-darwin-arm64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.124x faster (HPT: reliability of 100.00%, 1.07x faster at 99th %ile)
- Memory usage: 1.02x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250118-darwin-arm64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.md)
- [📈time plot](bm-20250118-darwin-arm64-python-61b35f74aa4a6ac60663-3.14.0a4%2B-61b35f7-vs-3.13.0.svg)

