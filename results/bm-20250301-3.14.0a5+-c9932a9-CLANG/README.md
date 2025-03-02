# Results

- fork: python/c9932a9ec8a3077933a8
- version: 3.14.0a5+
- config: CLANG
- commit hash: [c9932a9](https://github.com/python/cpython/commit/c9932a9)
- commit date: 2025-03-01T21:25:38+00:00
- commit merge base: [a55dffd66dbddfd50c8f3de195218d041d26bd3c](https://github.com/python/cpython/commit/a55dffd66dbddfd50c8f3de195218d041d26bd3c)
- ref: c9932a9ec8a3077933a8

## linux x86_64 (linux)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13610054065)
- cpu model: Intel(R) Xeon(R) W-2255 CPU @ 3.70GHz
- platform: Linux-5.4.0-205-generic-x86_64-with-glibc2.31
- [raw results](bm-20250301-linux-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9.json)

### vs. 3.10.4

- Geometric mean: 1.489x faster (HPT: reliability of 100.00%, 1.35x faster at 99th %ile)
- Memory usage: 1.27x
- missing benchmarks: aiohttp, chameleon, dask, djangocms, flaskblogging, gunicorn, mypy2, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250301-linux-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.10.4.md)
- [📈time plot](bm-20250301-linux-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.142x faster (HPT: reliability of 100.00%, 1.08x faster at 99th %ile)
- Memory usage: 1.10x
- missing benchmarks: aiohttp, chameleon, dask, gunicorn, mypy2, tornado_http
- new benchmarks: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift
- [📄table](bm-20250301-linux-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.12.0.md)
- [📈time plot](bm-20250301-linux-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.072x faster (HPT: reliability of 100.00%, 1.03x faster at 99th %ile)
- Memory usage: 1.03x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250301-linux-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.13.0.md)
- [📈time plot](bm-20250301-linux-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.13.0.svg)

### vs. base

- Geometric mean: 1.020x faster (HPT: reliability of 99.96%, 1.00x faster at 99th %ile)
- Memory usage: 1.00x
- [🧠memory plot](bm-20250301-linux-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-base-mem.svg)
- [📄table](bm-20250301-linux-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-base.md)
- [📈time plot](bm-20250301-linux-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-base.svg)

## linux x86_64 (pythonperf2)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13610054065)
- cpu model: 12th Gen Intel(R) Core(TM) i9-12900
- platform: Linux-5.15.0-125-generic-x86_64-with-glibc2.35
- [raw results](bm-20250301-pythonperf2-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9.json)

### vs. 3.10.4

- Geometric mean: 1.406x faster (HPT: reliability of 100.00%, 1.28x faster at 99th %ile)
- Memory usage: 1.33x
- missing benchmarks: aiohttp, chameleon, dask, flaskblogging, gunicorn, mypy2, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, bpe_tokeniser, connected_components, k_core, many_optionals, shortest_path, sphinx, subparsers
- [📄table](bm-20250301-pythonperf2-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.10.4.md)
- [📈time plot](bm-20250301-pythonperf2-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.087x faster (HPT: reliability of 100.00%, 1.04x faster at 99th %ile)
- Memory usage: 1.08x
- missing benchmarks: aiohttp, chameleon, dask, gunicorn, mypy2, tornado_http
- new benchmarks: bpe_tokeniser, connected_components, genshi_text, genshi_xml, html5lib, k_core, many_optionals, pylint, shortest_path, sphinx, subparsers, thrift
- [📄table](bm-20250301-pythonperf2-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.12.0.md)
- [📈time plot](bm-20250301-pythonperf2-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.101x faster (HPT: reliability of 100.00%, 1.05x faster at 99th %ile)
- Memory usage: 1.06x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250301-pythonperf2-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.13.0.md)
- [📈time plot](bm-20250301-pythonperf2-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.13.0.svg)

### vs. base

- Geometric mean: 1.050x faster (HPT: reliability of 100.00%, 1.02x faster at 99th %ile)
- Memory usage: 1.03x
- [🧠memory plot](bm-20250301-pythonperf2-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-base-mem.svg)
- [📄table](bm-20250301-pythonperf2-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-base.md)
- [📈time plot](bm-20250301-pythonperf2-x86_64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-base.svg)

## darwin arm64 (darwin)

- [GitHub Action run](https://github.com/faster-cpython/benchmarking/actions/runs/13610054065)
- cpu model: missing
- platform: macOS-15.3-arm64-arm-64bit-Mach-O
- [raw results](bm-20250301-darwin-arm64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9.json)

### vs. 3.10.4

- Geometric mean: 1.470x faster (HPT: reliability of 100.00%, 1.28x faster at 99th %ile)
- Memory usage: 1.12x
- missing benchmarks: chameleon, djangocms, gevent_hub, tornado_http
- new benchmarks: async_tree_cpu_io_mixed_tg, async_tree_eager_cpu_io_mixed_tg, async_tree_eager_io_tg, async_tree_eager_memoization_tg, async_tree_eager_tg, async_tree_io_tg, async_tree_memoization_tg, async_tree_none_tg, asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250301-darwin-arm64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.10.4.md)
- [📈time plot](bm-20250301-darwin-arm64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.10.4.svg)

### vs. 3.12.0

- Geometric mean: 1.154x faster (HPT: reliability of 100.00%, 1.09x faster at 99th %ile)
- Memory usage: 1.07x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250301-darwin-arm64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.12.0.md)
- [📈time plot](bm-20250301-darwin-arm64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.12.0.svg)

### vs. 3.13.0

- Geometric mean: 1.158x faster (HPT: reliability of 100.00%, 1.11x faster at 99th %ile)
- Memory usage: 1.08x
- missing benchmarks: chameleon, djangocms, gevent_hub, gunicorn, tornado_http
- new benchmarks: asyncio_tcp, asyncio_tcp_ssl, pickle, pickle_dict, pickle_list, unpack_sequence, unpickle, unpickle_list
- [📄table](bm-20250301-darwin-arm64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.13.0.md)
- [📈time plot](bm-20250301-darwin-arm64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-3.13.0.svg)

### vs. base

- Geometric mean: 1.173x faster (HPT: reliability of 100.00%, 1.13x faster at 99th %ile)
- Memory usage: 0.98x
- [🧠memory plot](bm-20250301-darwin-arm64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-base-mem.svg)
- [📄table](bm-20250301-darwin-arm64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-base.md)
- [📈time plot](bm-20250301-darwin-arm64-python-c9932a9ec8a3077933a8-3.14.0a5%2B-c9932a9-vs-base.svg)

