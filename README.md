# Faster CPython Benchmark Infrastructure

🔒 [▶️ START A BENCHMARK RUN](../../actions/workflows/benchmark.yml)

## Results

Here are some recent and important revisions. 👉 [Complete list of results](RESULTS.md).

[Currently failing benchmarks](failures.md).

**Key:** 📄: table, 📈: time plot, 🧠: memory plot

<!-- START table -->
[Most recent pystats on main (f963239)](results/bm-20250225-3.14.0a5%2B-f963239-JIT/bm-20250225-azure-x86_64-python-f963239ff1f986742d4c-3.14.0a5%2B-f963239-pystats.md)

## linux aarch64 (arminc)
| date | fork/ref | hash/flags | vs. 3.10.4: | vs. 3.12.0: | vs. 3.13.0: | vs. base: |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| [2025-02-25](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG) | Fidget-Spinner/disable_tailcall | da5ad58 (CLANG) | 1.181x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-arminc-aarch64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-arminc-aarch64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.svg) | 1.067x ↓<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-arminc-aarch64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-arminc-aarch64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.svg) | 1.063x ↓<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-arminc-aarch64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-arminc-aarch64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.svg) | 1.119x ↓<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-arminc-aarch64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-arminc-aarch64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.svg)[🧠](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-arminc-aarch64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8) | python/5ec4bf86b7f4455432ae | 5ec4bf8 | 1.312x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.029x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.033x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) |  |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (JIT) | 1.268x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.003x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.001x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.025x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (CLANG) | 1.355x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.059x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.061x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.021x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (NOGIL) | 1.108x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.118x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.121x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.150x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-arminc-aarch64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base-mem.svg) |

## linux x86_64 (linux)
| date | fork/ref | hash/flags | vs. 3.10.4: | vs. 3.12.0: | vs. 3.13.0: | vs. base: |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| [2025-02-25](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG) | Fidget-Spinner/disable_tailcall | da5ad58 (CLANG) | 1.310x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-linux-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-linux-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.svg) | 1.008x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-linux-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-linux-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.svg) | 1.051x ↓<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-linux-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-linux-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.svg) | 1.116x ↓<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-linux-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-linux-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.svg)[🧠](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-linux-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base-mem.svg) |
| [2025-02-25](results/bm-20250225-3.14.0a5%2B-f963239-JIT) | python/f963239ff1f986742d4c | f963239 (JIT) | 1.442x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-f963239-JIT/bm-20250225-linux-x86_64-python-f963239ff1f986742d4c-3.14.0a5%2B-f963239-vs-3.10.4.md)[📈](results/bm-20250225-3.14.0a5%2B-f963239-JIT/bm-20250225-linux-x86_64-python-f963239ff1f986742d4c-3.14.0a5%2B-f963239-vs-3.10.4.svg) | 1.108x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-f963239-JIT/bm-20250225-linux-x86_64-python-f963239ff1f986742d4c-3.14.0a5%2B-f963239-vs-3.12.0.md)[📈](results/bm-20250225-3.14.0a5%2B-f963239-JIT/bm-20250225-linux-x86_64-python-f963239ff1f986742d4c-3.14.0a5%2B-f963239-vs-3.12.0.svg) | 1.040x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-f963239-JIT/bm-20250225-linux-x86_64-python-f963239ff1f986742d4c-3.14.0a5%2B-f963239-vs-3.13.0.md)[📈](results/bm-20250225-3.14.0a5%2B-f963239-JIT/bm-20250225-linux-x86_64-python-f963239ff1f986742d4c-3.14.0a5%2B-f963239-vs-3.13.0.svg) |  |
| [2025-02-25](results/bm-20250225-3.14.0a5%2B-91d0090-JIT) | brandtbucher/jit_recursion | 91d0090 (JIT) | 1.432x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-91d0090-JIT/bm-20250225-linux-x86_64-brandtbucher-jit_recursion-3.14.0a5%2B-91d0090-vs-3.10.4.md)[📈](results/bm-20250225-3.14.0a5%2B-91d0090-JIT/bm-20250225-linux-x86_64-brandtbucher-jit_recursion-3.14.0a5%2B-91d0090-vs-3.10.4.svg) | 1.101x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-91d0090-JIT/bm-20250225-linux-x86_64-brandtbucher-jit_recursion-3.14.0a5%2B-91d0090-vs-3.12.0.md)[📈](results/bm-20250225-3.14.0a5%2B-91d0090-JIT/bm-20250225-linux-x86_64-brandtbucher-jit_recursion-3.14.0a5%2B-91d0090-vs-3.12.0.svg) | 1.034x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-91d0090-JIT/bm-20250225-linux-x86_64-brandtbucher-jit_recursion-3.14.0a5%2B-91d0090-vs-3.13.0.md)[📈](results/bm-20250225-3.14.0a5%2B-91d0090-JIT/bm-20250225-linux-x86_64-brandtbucher-jit_recursion-3.14.0a5%2B-91d0090-vs-3.13.0.svg) | 1.006x ↓<br>[📄](results/bm-20250225-3.14.0a5%2B-91d0090-JIT/bm-20250225-linux-x86_64-brandtbucher-jit_recursion-3.14.0a5%2B-91d0090-vs-base.md)[📈](results/bm-20250225-3.14.0a5%2B-91d0090-JIT/bm-20250225-linux-x86_64-brandtbucher-jit_recursion-3.14.0a5%2B-91d0090-vs-base.svg)[🧠](results/bm-20250225-3.14.0a5%2B-91d0090-JIT/bm-20250225-linux-x86_64-brandtbucher-jit_recursion-3.14.0a5%2B-91d0090-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8) | python/5ec4bf86b7f4455432ae | 5ec4bf8 | 1.451x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.116x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.046x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) |  |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (JIT) | 1.450x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.114x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.045x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.001x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (CLANG) | 1.489x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.144x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.074x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.026x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (NOGIL) | 1.269x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.012x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.077x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.118x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-linux-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base-mem.svg) |

## linux x86_64 (pythonperf2)
| date | fork/ref | hash/flags | vs. 3.10.4: | vs. 3.12.0: | vs. 3.13.0: | vs. base: |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| [2025-02-25](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG) | Fidget-Spinner/disable_tailcall | da5ad58 (CLANG) | 1.186x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf2-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf2-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.svg) | 1.082x ↓<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf2-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf2-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.svg) | 1.064x ↓<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf2-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf2-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.svg) | 1.153x ↓<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf2-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf2-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.svg)[🧠](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf2-x86_64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8) | python/5ec4bf86b7f4455432ae | 5ec4bf8 | 1.352x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.048x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.060x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) |  |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (CLANG) | 1.412x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.093x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.105x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.042x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (NOGIL) | 1.209x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.052x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.044x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.099x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5%2B-5ec4bf8-NOGIL/bm-20250222-pythonperf2-x86_64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5-b856d47-JIT) | brandtbucher/hack_night | b856d47 (JIT) | 1.332x ↑<br>[📄](results/bm-20250222-3.14.0a5-b856d47-JIT/bm-20250222-pythonperf2-x86_64-brandtbucher-hack_night-3.14.0a5-b856d47-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5-b856d47-JIT/bm-20250222-pythonperf2-x86_64-brandtbucher-hack_night-3.14.0a5-b856d47-vs-3.10.4.svg) | 1.033x ↑<br>[📄](results/bm-20250222-3.14.0a5-b856d47-JIT/bm-20250222-pythonperf2-x86_64-brandtbucher-hack_night-3.14.0a5-b856d47-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5-b856d47-JIT/bm-20250222-pythonperf2-x86_64-brandtbucher-hack_night-3.14.0a5-b856d47-vs-3.12.0.svg) | 1.046x ↑<br>[📄](results/bm-20250222-3.14.0a5-b856d47-JIT/bm-20250222-pythonperf2-x86_64-brandtbucher-hack_night-3.14.0a5-b856d47-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5-b856d47-JIT/bm-20250222-pythonperf2-x86_64-brandtbucher-hack_night-3.14.0a5-b856d47-vs-3.13.0.svg) | 1.001x ↑<br>[📄](results/bm-20250222-3.14.0a5-b856d47-JIT/bm-20250222-pythonperf2-x86_64-brandtbucher-hack_night-3.14.0a5-b856d47-vs-base.md)[📈](results/bm-20250222-3.14.0a5-b856d47-JIT/bm-20250222-pythonperf2-x86_64-brandtbucher-hack_night-3.14.0a5-b856d47-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5-b856d47-JIT/bm-20250222-pythonperf2-x86_64-brandtbucher-hack_night-3.14.0a5-b856d47-vs-base-mem.svg) |

## windows amd64 (pythonperf1)
| date | fork/ref | hash/flags | vs. 3.10.4: | vs. 3.12.0: | vs. 3.13.0: | vs. base: |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| [2025-02-25](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG) | Fidget-Spinner/disable_tailcall | da5ad58 (CLANG) | 1.234x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1-amd64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1-amd64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.svg) | 1.046x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1-amd64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1-amd64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.svg) | 1.012x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1-amd64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1-amd64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.svg) | 1.002x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1-amd64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1-amd64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.svg) |
| [2025-02-25](results/bm-20250225-3.14.0a5%2B-0142236) | python/014223649c33b2febbcc | 0142236 | 1.239x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-0142236/bm-20250225-pythonperf1-amd64-python-014223649c33b2febbcc-3.14.0a5%2B-0142236-vs-3.10.4.md)[📈](results/bm-20250225-3.14.0a5%2B-0142236/bm-20250225-pythonperf1-amd64-python-014223649c33b2febbcc-3.14.0a5%2B-0142236-vs-3.10.4.svg) | 1.051x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-0142236/bm-20250225-pythonperf1-amd64-python-014223649c33b2febbcc-3.14.0a5%2B-0142236-vs-3.12.0.md)[📈](results/bm-20250225-3.14.0a5%2B-0142236/bm-20250225-pythonperf1-amd64-python-014223649c33b2febbcc-3.14.0a5%2B-0142236-vs-3.12.0.svg) | 1.017x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-0142236/bm-20250225-pythonperf1-amd64-python-014223649c33b2febbcc-3.14.0a5%2B-0142236-vs-3.13.0.md)[📈](results/bm-20250225-3.14.0a5%2B-0142236/bm-20250225-pythonperf1-amd64-python-014223649c33b2febbcc-3.14.0a5%2B-0142236-vs-3.13.0.svg) |  |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (JIT) | 1.260x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.069x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.032x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) |  |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (CLANG) | 1.231x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.043x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.010x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1-amd64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) |  |

## windows x86 (pythonperf1_win32)
| date | fork/ref | hash/flags | vs. 3.10.4: | vs. 3.12.0: | vs. 3.13.0: | vs. base: |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| [2025-02-25](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG) | Fidget-Spinner/disable_tailcall | da5ad58 (CLANG) | 1.287x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1_win32-x86-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1_win32-x86-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.svg) | 1.292x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1_win32-x86-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1_win32-x86-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.svg) | 1.148x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1_win32-x86-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1_win32-x86-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.svg) | 1.001x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1_win32-x86-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-pythonperf1_win32-x86-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8) | python/5ec4bf86b7f4455432ae | 5ec4bf8 | 1.135x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.144x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.014x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) |  |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (JIT) | 1.065x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.071x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.050x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.063x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (CLANG) | 1.286x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.292x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.146x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.130x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-pythonperf1_win32-x86-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg) |

## darwin arm64 (darwin)
| date | fork/ref | hash/flags | vs. 3.10.4: | vs. 3.12.0: | vs. 3.13.0: | vs. base: |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| [2025-02-25](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG) | Fidget-Spinner/disable_tailcall | da5ad58 (CLANG) | 1.308x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-darwin-arm64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-darwin-arm64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.10.4.svg) | 1.030x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-darwin-arm64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-darwin-arm64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.12.0.svg) | 1.033x ↑<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-darwin-arm64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-darwin-arm64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-3.13.0.svg) | 1.106x ↓<br>[📄](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-darwin-arm64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.md)[📈](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-darwin-arm64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base.svg)[🧠](results/bm-20250225-3.14.0a5%2B-da5ad58-CLANG/bm-20250225-darwin-arm64-Fidget%252dSpinner-disable_tailcall-3.14.0a5%2B-da5ad58-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8) | python/5ec4bf86b7f4455432ae | 5ec4bf8 | 1.257x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.012x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.009x ↓<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) |  |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (JIT) | 1.371x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.077x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.080x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.090x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5%2B-5ec4bf8-JIT/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base-mem.svg) |
| [2025-02-22](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG) | python/5ec4bf86b7f4455432ae | 5ec4bf8 (CLANG) | 1.473x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.10.4.svg) | 1.156x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.12.0.svg) | 1.160x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-3.13.0.svg) | 1.170x ↑<br>[📄](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.md)[📈](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base.svg)[🧠](results/bm-20250222-3.14.0a5%2B-5ec4bf8-CLANG/bm-20250222-darwin-arm64-python-5ec4bf86b7f4455432ae-3.14.0a5%2B-5ec4bf8-vs-base-mem.svg) |


<!-- END table -->

`*` indicates that the exact same versions of pyperformance was not used.

For the results above, the "faster/slower" result is a geometric mean of each of the benchmarks.

## Longitudinal results

Below are longitudinal timing results. There are also [🧠 longitudinal memory results](memory.md).

![Longitudinal speed improvement](/longitudinal.svg)

![Effect of different configurations](/configs.svg)

The results have a resolution of 0.001 (0.1%).

- linux: Intel® Xeon® W-2255 CPU @ 3.70GHz, running Ubuntu 20.04 LTS, gcc 9.4.0
- linux2: 12th Gen Intel® Core™ i9-12900 @ 2.40 GHz, running Ubuntu 22.04 LTS, gcc 11.3.0
- linux-aarch64: ARM Neoverse N1, running Ubuntu 22.04 LTS, gcc 11.4.0
- macos: M1 arm64 Mac® Mini, running macOS 13.2.1, clang 1400.0.29.202
- windows: 12th Gen Intel® Core™ i9-12900 @ 2.40 GHz, running Windows 11 Pro (21H2, 22000.1696), MSVC v143

## Data changes

This is a CHANGELOG of how any derived data has changed:

- 2024-11-26: The longitudinal plots and index tables now use geometric mean rather than HPT.
- 2024-06-27: The HPT values (and the longitudinal plots that are based on them) now correctly exclude any benchmarks in `excluded_benchmarks.txt`.

## Documentation

### Running benchmarks from the GitHub web UI

Visit the 🔒 [benchmark action](../../actions/workflows/benchmark.yml) and click the "Run Workflow" button.

The available parameters are:

- `fork`: The fork of CPython to benchmark.
  If benchmarking a pull request, this would normally be your GitHub username.
- `ref`: The branch, tag or commit SHA to benchmark.
  If a SHA, it must be the full SHA, since finding it by a prefix is not supported.
- `machine`: The machine to run on.
  One of `linux-amd64` (default), `windows-amd64`, `darwin-arm64` or `all`.
- `benchmark_base`: If checked, the base of the selected branch will also be benchmarked.
  The base is determined by running `git merge-base upstream/main $ref`.
- `pystats`: If checked, collect the pystats from running the benchmarks.
- A choice of configurations (documented below).

To watch the progress of the benchmark, select it from the 🔒 [benchmark action page](../../actions/workflows/benchmark.yml).
It may be canceled from there as well.
To show only your benchmark workflows, select your GitHub ID from the "Actor" dropdown.

When the benchmarking is complete, the results are published to this repository and will appear in the [master table](RESULTS.md).
Each set of benchmarks will have:

- The raw `.json` results from pyperformance.
- Comparisons against important reference releases, as well as the merge base of the branch if `benchmark_base` was selected. These include
  - A markdown table produced by `pyperf compare_to`.
  - A set of "violin" plots showing the distribution of results for each benchmark.
  - A set of plots showing the memory change for each benchmark (for immediate bases only, on non-Windows platforms).

The most convenient way to get results locally is to clone this repo and `git pull` from it.

### Running benchmarks from the GitHub CLI

To automate benchmarking runs, it may be more convenient to use the [GitHub CLI](https://cli.github.com/).
Once you have `gh` installed and configured, you can run benchmarks by cloning this repository and then from inside it:

```bash
$ gh workflow run benchmark.yml -f fork=me -f ref=my_branch
```

Any of the parameters described above are available at the commandline using the `-f key=value` syntax.

### Collecting Linux perf profiling data

To collect Linux perf sampling profile data for a benchmarking run, run the `_benchmark` action and check the `perf` checkbox.

The results will be available as "artifacts" on the run page after the run -- they are not committed directly to the repository.

The `python -m bench_runner profiling_plot` command can be used to turn the raw perf results into tables and graphs.

### Creating a custom comparison

If the default comparisons generated by this tool aren't sufficient, you can check
out the repo and use the same infrastructure to generate any arbitrary
comparison.

Check out a local copy of this repo:

```sh
$ git clone https://github.com/faster-cpython/benchmarking-public
```

Create a new virtual environment, activate it and install the dependencies into it:

```sh
$ cd benchmarking-public
$ python -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```

Run `bench_runner`'s `compare` tool:

```text
usage:
        Generate a set of comparisons between arbitrary commits. The commits
        must already exist in the dataset.

       [-h] --output-dir OUTPUT_DIR [--type {1:n,n:n}] commit [commit ...]

positional arguments:
  commit                Commits to compare. Must be a git commit hash prefix. May optionally have a friendly name
                        after a comma, e.g. c0ffee,main. If ends with a "T", use the Tier 2 run for that commit. If
                        ends with a "J", use the JIT run for that commit. If ends with a "N", use the NOGIL run for
                        that commit.

options:
  -h, --help            show this help message and exit
  --output-dir OUTPUT_DIR
                        Directory to output results to.
  --type {1:n,n:n}      Compare the first commit to all others, or do the full product of all commits
```

For example:

```sh
$ python -m bench_runner compare e418fc3,default e418fc3J,jit --output comparison --type 1:n
```

### Developer docs

The infrastructure to make all of this work is the [bench_runner
project](https://github.com/faster-cpython/bench_runner). Look there for more
detailed developer docs.

### Details about how results are collected

The easiest way to reproduce what is here is to use the [bench_runner
project](https://github.com/faster-cpython/bench_runner) library directly, but
if you want to run parts of it in a different context or better understand how the
numbers are calculated, this section describes some of the things that the
benchmarking infrastructure does.

#### Benchmarks from pyperformance and python-macrobenchmarks

These results combine benchmarks that live in the
[pyperformance](https://github.com/python/pyperformance) and
[pyston/python-macrobenchmarks](https://github.com/pyston/python-macrobenchmarks)
projects, so running the default set from `pyperformance` will definitely
produce different results. To combine these benchmarks in the same run, clone
both repos side-by-side in the same directory and [use a manifest
file](https://github.com/faster-cpython/bench_runner/blob/main/bench_runner/templates/benchmarks.manifest)
to combine them. This file should be passed to `pyperformance run`:

```
pyperformance run --manifest benchmarks.manifest
```

#### Different configurations

Benchmarks and stats collection can happen in three different configurations.
Here "configuration" may be a combination of both build-time and run-time flags:

- Default: A PGO build of CPython (`./configure --enable-optimizations
--with-lto=yes`).
- Tier 2: The same build as above, but with the `PYTHON_UOPS` environment
  variable set at runtime to use the Tier 2 interpreter.
- JIT: A JIT and PGO build of CPython (`./configure --enable-optimizations
--with-lto=yes --enable-experimental-jit`).
- Free-threading: Build a free-threaded build of CPython (`./configure --enable-free-threading`).
- Tail-calling: Build with the latest Clang, and build Python with the tail-calling
  interpreter (`./configure --with-tail-call`).

Information about the configuration of the run is in the `README.md` at the root
of each run directory. The directory name will also include `PYTHON_UOPS` for
Tier 2, `JIT` for JIT, `NOGIL` for free-threading and `CLANG` for tail calling.

To reduce the number of unknown variables when comparing results, runs are
always compared against runs of the same configuration. Be aware that sometimes
the base commit on main may predate the configuration becoming available, for
example, before the JIT compiler was merged into main. (Exception to this
rule are the weekly benchmarks of upstream main, there Tier 2, JIT, NOGIL and CLANG
configurations are compared against default configurations of the same commit,
but that isn't relevant for the common case of testing a pull request).

An additional sharp edge is that, by default, `pyperformance` does not pass
environment variables to the child process that actually does the work.
Therefore for a Tier 2 configuration, the `--inherit-environ=PYTHON_UOPS` flag
must be passed to `pyperformance run` when running benchmarks.

For detailed information, see how configurations affect [build time flags in the
Github Actions
configuration.](https://github.com/faster-cpython/bench_runner/blob/main/bench_runner/templates/_benchmark.src.yml).

#### Timing benchmarks

Timing benchmarks are notoriously noisy. There are a few techniques to reduce this:

- Where available (on Linux), we use [`pyperf
tune`](https://pyperf.readthedocs.io/en/latest/system.html) to set CPU
  affinity and other things that make the benchmarks more reproducible. For
  this reason, we know that the benchmarks are more predictable on Linux than on
  the other platforms.
- `pyperf` has the concept of "warmup" runs, while caches are warming up and
  other things about the system are still stabilizing. These runs are excluded
  from the timing results. This is generally effective at reducing variability,
  but also may exclude real work done during optimization, for example.

#### pystats

`pystats` are a set of counters in CPython that measure things like the number
of times each bytecode instruction is executed. (Detailed documentation of all
of the counters should be added to CPython in the future).

Checking the `pystats` box will generate pystats results automatically.

##### Collecting pystats locally

Collecting `pystats` requires a special build of CPython with `pystats` enabled:
(`./configure --enable-pystats`).

`pystats` must also be enabled at runtime, either using the `-Xpystats` command
line argument or `sys._stats_on()`. `pyperformance`/`pyperf` handles this step
automatically when running on a pystats-enabled build. Stats collection is
enabled during actual benchmarking code, and disabled while running the
"benchmarking harness" code in `pyperf` itself. `pyperf` has the concept of
"warmup" runs, which allow things like cache lines to warmup before actually
timing benchmarks. While they aren't included in the timing benchmarks, these
warmup runs are included in pystats collection since often Tier 2/JIT traces are
created during warmup, and we don't want the stats to appear as if the traces
ran but were not created.

Any statistics collected are then dumped at exit to the `/tmp/py_stats`
directory with a random filename. Lastly, the `Tools/scripts/summarize_stats.py`
script (in the CPython repo) is used to read all of the files from
`/tmp/py_stats` and produce a human-readable markdown summary and a JSON file
with aggregate data. Because of this design, it is imperative that:

- The `/tmp/py_stats` directory is cleared before data collection.
- No other Python processes are run that could also produce pystats data.
  Especially, this means benchmarks can not run in parallel.

For more information, see the actual code to [collect
pystats](https://github.com/faster-cpython/bench_runner/blob/main/bench_runner/templates/_pystats.src.yml).

### HPT

Hierarchical performance testing (HPT) is a method introduced in this paper:

> T. Chen, Y. Chen, Q. Guo, O. Temam, Y. Wu and W. Hu,
> "Statistical performance comparisons of computers,"
> IEEE International Symposium on High-Performance Comp Architecture,
> New Orleans, LA, USA, 2012, pp. 1-12,
> doi: 10.1109/HPCA.2012.6169043.

From the abstract:

> In traditional performance comparisons, the impact of performance variability
> is usually ignored (i.e., the means of performance measurements are compared
> regardless of the variability), or in the few cases where it is factored in
> using parametric confidence techniques, the confidence is either erroneously
> computed based on the distribution of performance measurements (with the
> implicit assumption that it obeys the normal law), instead of the distribution
> of sample mean of performance measurements, or too few measurements are
> considered for the distribution of sample mean to be normal. … We propose a
> non-parametric Hierarchical Performance Testing (HPT) framework for
> performance comparison, which is significantly more practical than standard
> parametric techniques because it does not require to collect a large number of
> measurements in order to achieve a normal distribution of the sample mean.

For each result, we compute a reliability score, as well as the estimated
speedup at the 90th, 95th and 99th percentile.

**The inclusion of HPT scores is considered experimental as we learn about their
usefulness for decision-making.**
