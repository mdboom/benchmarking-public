
# Pystats results

- benchmark: unpack_sequence
- fork: python
- ref: v3.13.0a4
- commit hash: 9d34f60
- commit date: 2024-02-15T14:38:42+01:00

## Execution counts

<details>
<summary> execution counts for all instructions </summary>

|Name | Count | Self | Cumulative | Miss ratio | 
|---|---:|---:|---:|---:|
| STORE_FAST_STORE_FAST | 2,535,640,240 | 71.4% | 71.4% |  |
| LOAD_FAST | 505,949,600 | 14.3% | 85.7% |  |
| UNPACK_SEQUENCE_LIST | 261,752,000 | 7.4% | 93.1% | 0.5% |
| UNPACK_SEQUENCE_TUPLE | 244,896,840 | 6.9% | 100.0% | 0.7% |
| ENTER_EXECUTOR | 1,310,400 | 0.0% | 100.0% |  |
| UNPACK_SEQUENCE | 16,000 | 0.0% | 100.0% |  |
| STORE_FAST | 1,120 | 0.0% | 100.0% |  |
| EXTENDED_ARG | 980 | 0.0% | 100.0% |  |
| CALL | 860 | 0.0% | 100.0% |  |
| FOR_ITER_RANGE | 620 | 0.0% | 100.0% |  |
| LOAD_GLOBAL_MODULE | 580 | 0.0% | 100.0% |  |
| PUSH_NULL | 560 | 0.0% | 100.0% |  |
| RETURN_VALUE | 480 | 0.0% | 100.0% |  |
| LOAD_GLOBAL | 480 | 0.0% | 100.0% |  |
| LOAD_GLOBAL_BUILTIN | 380 | 0.0% | 100.0% |  |
| RESUME_CHECK | 380 | 0.0% | 100.0% |  |
| JUMP_BACKWARD | 340 | 0.0% | 100.0% |  |
| LOAD_ATTR_MODULE | 340 | 0.0% | 100.0% |  |
| CALL_BUILTIN_CLASS | 320 | 0.0% | 100.0% |  |
| LOAD_DEREF | 240 | 0.0% | 100.0% |  |
| LOAD_FAST_LOAD_FAST | 240 | 0.0% | 100.0% |  |
| CALL_PY_EXACT_ARGS | 240 | 0.0% | 100.0% |  |
| GET_ITER | 160 | 0.0% | 100.0% |  |
| CALL_FUNCTION_EX | 160 | 0.0% | 100.0% |  |
| LOAD_CONST | 160 | 0.0% | 100.0% |  |
| BINARY_OP_SUBTRACT_FLOAT | 140 | 0.0% | 100.0% |  |
| LOAD_ATTR | 120 | 0.0% | 100.0% |  |
| RESUME | 100 | 0.0% | 100.0% |  |
| NOP | 80 | 0.0% | 100.0% |  |
| POP_TOP | 80 | 0.0% | 100.0% |  |
| BINARY_OP | 80 | 0.0% | 100.0% |  |
| BUILD_LIST | 80 | 0.0% | 100.0% |  |
| CALL_INTRINSIC_1 | 80 | 0.0% | 100.0% |  |
| COPY_FREE_VARS | 80 | 0.0% | 100.0% |  |
| LIST_EXTEND | 80 | 0.0% | 100.0% |  |
| BINARY_OP_ADD_FLOAT | 60 | 0.0% | 100.0% |  |
| CALL_TUPLE_1 | 60 | 0.0% | 100.0% |  |
| FOR_ITER | 40 | 0.0% | 100.0% |  |


</details>

## Pair counts

<details>
<summary> Pair counts for top 100 pairs </summary>

|Pair | Count | Self | Cumulative | 
|---|---:|---:|---:|
| STORE_FAST_STORE_FAST STORE_FAST_STORE_FAST | 2,028,381,200 | 57.1% | 57.1% |
| STORE_FAST_STORE_FAST LOAD_FAST | 505,948,320 | 14.3% | 71.4% |
| UNPACK_SEQUENCE_LIST STORE_FAST_STORE_FAST | 261,729,620 | 7.4% | 78.8% |
| LOAD_FAST UNPACK_SEQUENCE_LIST | 261,067,380 | 7.4% | 86.1% |
| UNPACK_SEQUENCE_TUPLE STORE_FAST_STORE_FAST | 244,866,460 | 6.9% | 93.0% |
| LOAD_FAST UNPACK_SEQUENCE_TUPLE | 244,865,420 | 6.9% | 99.9% |
| STORE_FAST_STORE_FAST ENTER_EXECUTOR | 1,310,380 | 0.0% | 100.0% |
| ENTER_EXECUTOR STORE_FAST_STORE_FAST | 654,960 | 0.0% | 100.0% |
| ENTER_EXECUTOR UNPACK_SEQUENCE_LIST | 654,240 | 0.0% | 100.0% |
| UNPACK_SEQUENCE_TUPLE UNPACK_SEQUENCE_LIST | 30,380 | 0.0% | 100.0% |
| UNPACK_SEQUENCE_LIST UNPACK_SEQUENCE_TUPLE | 22,380 | 0.0% | 100.0% |
| LOAD_FAST UNPACK_SEQUENCE | 16,000 | 0.0% | 100.0% |
| UNPACK_SEQUENCE STORE_FAST_STORE_FAST | 8,000 | 0.0% | 100.0% |
| UNPACK_SEQUENCE UNPACK_SEQUENCE_TUPLE | 8,000 | 0.0% | 100.0% |
| ENTER_EXECUTOR UNPACK_SEQUENCE_TUPLE | 1,040 | 0.0% | 100.0% |
| STORE_FAST LOAD_FAST | 640 | 0.0% | 100.0% |
| EXTENDED_ARG FOR_ITER_RANGE | 600 | 0.0% | 100.0% |
| FOR_ITER_RANGE STORE_FAST | 460 | 0.0% | 100.0% |
| PUSH_NULL CALL | 400 | 0.0% | 100.0% |
| EXTENDED_ARG JUMP_BACKWARD | 340 | 0.0% | 100.0% |
| STORE_FAST_STORE_FAST EXTENDED_ARG | 340 | 0.0% | 100.0% |
| LOAD_ATTR_MODULE PUSH_NULL | 340 | 0.0% | 100.0% |
| JUMP_BACKWARD EXTENDED_ARG | 320 | 0.0% | 100.0% |
| LOAD_GLOBAL_MODULE LOAD_ATTR_MODULE | 280 | 0.0% | 100.0% |
| RETURN_VALUE RETURN_VALUE | 240 | 0.0% | 100.0% |
| STORE_FAST LOAD_GLOBAL_MODULE | 240 | 0.0% | 100.0% |
| CALL_PY_EXACT_ARGS RESUME_CHECK | 240 | 0.0% | 100.0% |
| CALL STORE_FAST | 220 | 0.0% | 100.0% |
| CALL_BUILTIN_CLASS STORE_FAST | 200 | 0.0% | 100.0% |
| RESUME_CHECK LOAD_GLOBAL_BUILTIN | 200 | 0.0% | 100.0% |
| GET_ITER EXTENDED_ARG | 160 | 0.0% | 100.0% |
| PUSH_NULL LOAD_FAST | 160 | 0.0% | 100.0% |
| RETURN_VALUE STORE_FAST | 160 | 0.0% | 100.0% |
| CALL LOAD_FAST | 160 | 0.0% | 100.0% |
| ENTER_EXECUTOR EXTENDED_ARG | 160 | 0.0% | 100.0% |
| LOAD_DEREF PUSH_NULL | 160 | 0.0% | 100.0% |
| LOAD_FAST GET_ITER | 160 | 0.0% | 100.0% |
| STORE_FAST LOAD_GLOBAL | 160 | 0.0% | 100.0% |
| CALL CALL | 140 | 0.0% | 100.0% |
| LOAD_GLOBAL LOAD_GLOBAL_MODULE | 140 | 0.0% | 100.0% |
| BINARY_OP_SUBTRACT_FLOAT RETURN_VALUE | 140 | 0.0% | 100.0% |
| LOAD_GLOBAL_BUILTIN LOAD_FAST | 140 | 0.0% | 100.0% |
| LOAD_FAST CALL | 120 | 0.0% | 100.0% |
| LOAD_FAST BINARY_OP_SUBTRACT_FLOAT | 120 | 0.0% | 100.0% |
| LOAD_FAST CALL_BUILTIN_CLASS | 120 | 0.0% | 100.0% |
| FOR_ITER_RANGE LOAD_GLOBAL_MODULE | 120 | 0.0% | 100.0% |
| LOAD_GLOBAL_BUILTIN LOAD_CONST | 120 | 0.0% | 100.0% |
| LOAD_GLOBAL_MODULE LOAD_FAST | 120 | 0.0% | 100.0% |
| LOAD_GLOBAL_MODULE LOAD_FAST_LOAD_FAST | 120 | 0.0% | 100.0% |
| LOAD_GLOBAL LOAD_GLOBAL_BUILTIN | 100 | 0.0% | 100.0% |
| NOP LOAD_DEREF | 80 | 0.0% | 100.0% |
| POP_TOP NOP | 80 | 0.0% | 100.0% |
| BUILD_LIST LOAD_DEREF | 80 | 0.0% | 100.0% |
| CALL POP_TOP | 80 | 0.0% | 100.0% |
| CALL CALL_BUILTIN_CLASS | 80 | 0.0% | 100.0% |
| CALL CALL_PY_EXACT_ARGS | 80 | 0.0% | 100.0% |
| CALL_FUNCTION_EX COPY_FREE_VARS | 80 | 0.0% | 100.0% |
| CALL_INTRINSIC_1 CALL_FUNCTION_EX | 80 | 0.0% | 100.0% |
| LIST_EXTEND CALL_INTRINSIC_1 | 80 | 0.0% | 100.0% |
| LOAD_CONST CALL | 80 | 0.0% | 100.0% |
| LOAD_CONST CALL_BUILTIN_CLASS | 80 | 0.0% | 100.0% |
| LOAD_DEREF LIST_EXTEND | 80 | 0.0% | 100.0% |
| LOAD_FAST BUILD_LIST | 80 | 0.0% | 100.0% |
| LOAD_FAST CALL_FUNCTION_EX | 80 | 0.0% | 100.0% |
| LOAD_FAST CALL_PY_EXACT_ARGS | 80 | 0.0% | 100.0% |
| LOAD_FAST_LOAD_FAST CALL | 80 | 0.0% | 100.0% |
| LOAD_FAST_LOAD_FAST CALL_PY_EXACT_ARGS | 80 | 0.0% | 100.0% |
| STORE_FAST LOAD_FAST_LOAD_FAST | 80 | 0.0% | 100.0% |
| RESUME LOAD_GLOBAL | 80 | 0.0% | 100.0% |
| LOAD_GLOBAL_BUILTIN LOAD_GLOBAL_BUILTIN | 80 | 0.0% | 100.0% |
| RESUME_CHECK LOAD_GLOBAL | 80 | 0.0% | 100.0% |
| CALL RESUME | 60 | 0.0% | 100.0% |
| CALL_FUNCTION_EX RESUME_CHECK | 60 | 0.0% | 100.0% |
| COPY_FREE_VARS RESUME_CHECK | 60 | 0.0% | 100.0% |
| LOAD_ATTR PUSH_NULL | 60 | 0.0% | 100.0% |
| LOAD_ATTR LOAD_ATTR_MODULE | 60 | 0.0% | 100.0% |
| LOAD_GLOBAL LOAD_ATTR | 60 | 0.0% | 100.0% |
| LOAD_GLOBAL LOAD_FAST | 60 | 0.0% | 100.0% |
| BINARY_OP_ADD_FLOAT RETURN_VALUE | 60 | 0.0% | 100.0% |
| CALL_TUPLE_1 STORE_FAST | 60 | 0.0% | 100.0% |
| LOAD_GLOBAL_MODULE LOAD_ATTR | 60 | 0.0% | 100.0% |
| RESUME_CHECK LOAD_DEREF | 60 | 0.0% | 100.0% |
| RETURN_VALUE LOAD_GLOBAL | 40 | 0.0% | 100.0% |
| RETURN_VALUE LOAD_GLOBAL_MODULE | 40 | 0.0% | 100.0% |
| BINARY_OP RETURN_VALUE | 40 | 0.0% | 100.0% |
| EXTENDED_ARG FOR_ITER | 40 | 0.0% | 100.0% |
| LOAD_FAST BINARY_OP | 40 | 0.0% | 100.0% |
| LOAD_FAST_LOAD_FAST BINARY_OP | 40 | 0.0% | 100.0% |
| LOAD_FAST_LOAD_FAST BINARY_OP_ADD_FLOAT | 40 | 0.0% | 100.0% |
| LOAD_GLOBAL LOAD_CONST | 40 | 0.0% | 100.0% |
| LOAD_GLOBAL LOAD_FAST_LOAD_FAST | 40 | 0.0% | 100.0% |
| LOAD_GLOBAL LOAD_GLOBAL | 40 | 0.0% | 100.0% |
| CALL_BUILTIN_CLASS CALL | 40 | 0.0% | 100.0% |
| CALL_BUILTIN_CLASS CALL_BUILTIN_CLASS | 40 | 0.0% | 100.0% |
| CALL_BUILTIN_CLASS CALL_TUPLE_1 | 40 | 0.0% | 100.0% |
| FOR_ITER_RANGE LOAD_GLOBAL | 40 | 0.0% | 100.0% |
| LOAD_GLOBAL_BUILTIN LOAD_GLOBAL | 40 | 0.0% | 100.0% |
| RESUME_CHECK LOAD_GLOBAL_MODULE | 40 | 0.0% | 100.0% |
| BINARY_OP BINARY_OP_ADD_FLOAT | 20 | 0.0% | 100.0% |
| BINARY_OP BINARY_OP_SUBTRACT_FLOAT | 20 | 0.0% | 100.0% |


</details>

## Predecessor/Successor Pairs

<details>
<summary> Top 5 predecessors and successors of each opcode </summary>

### GET_ITER

<details>
<summary> Successors and predecessors for GET_ITER </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST | 160 | 100.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| EXTENDED_ARG | 160 | 100.0% |


</details>

### NOP

<details>
<summary> Successors and predecessors for NOP </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| POP_TOP | 80 | 100.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| LOAD_DEREF | 80 | 100.0% |


</details>

### POP_TOP

<details>
<summary> Successors and predecessors for POP_TOP </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| CALL | 80 | 100.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| NOP | 80 | 100.0% |


</details>

### PUSH_NULL

<details>
<summary> Successors and predecessors for PUSH_NULL </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_ATTR_MODULE | 340 | 60.7% |
| LOAD_DEREF | 160 | 28.6% |
| LOAD_ATTR | 60 | 10.7% |

|Successors | Count | Percentage | 
|---|---:|---:|
| CALL | 400 | 71.4% |
| LOAD_FAST | 160 | 28.6% |


</details>

### RETURN_VALUE

<details>
<summary> Successors and predecessors for RETURN_VALUE </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| RETURN_VALUE | 240 | 50.0% |
| BINARY_OP_SUBTRACT_FLOAT | 140 | 29.2% |
| BINARY_OP_ADD_FLOAT | 60 | 12.5% |
| BINARY_OP | 40 | 8.3% |

|Successors | Count | Percentage | 
|---|---:|---:|
| RETURN_VALUE | 240 | 50.0% |
| STORE_FAST | 160 | 33.3% |
| LOAD_GLOBAL | 40 | 8.3% |
| LOAD_GLOBAL_MODULE | 40 | 8.3% |


</details>

### BINARY_OP

<details>
<summary> Successors and predecessors for BINARY_OP </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST | 40 | 50.0% |
| LOAD_FAST_LOAD_FAST | 40 | 50.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| RETURN_VALUE | 40 | 50.0% |
| BINARY_OP_ADD_FLOAT | 20 | 25.0% |
| BINARY_OP_SUBTRACT_FLOAT | 20 | 25.0% |


</details>

### BUILD_LIST

<details>
<summary> Successors and predecessors for BUILD_LIST </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST | 80 | 100.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| LOAD_DEREF | 80 | 100.0% |


</details>

### CALL

<details>
<summary> Successors and predecessors for CALL </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| PUSH_NULL | 400 | 46.5% |
| CALL | 140 | 16.3% |
| LOAD_FAST | 120 | 14.0% |
| LOAD_CONST | 80 | 9.3% |
| LOAD_FAST_LOAD_FAST | 80 | 9.3% |

|Successors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST | 220 | 25.6% |
| LOAD_FAST | 160 | 18.6% |
| CALL | 140 | 16.3% |
| POP_TOP | 80 | 9.3% |
| CALL_BUILTIN_CLASS | 80 | 9.3% |


</details>

### CALL_FUNCTION_EX

<details>
<summary> Successors and predecessors for CALL_FUNCTION_EX </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| CALL_INTRINSIC_1 | 80 | 50.0% |
| LOAD_FAST | 80 | 50.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| COPY_FREE_VARS | 80 | 50.0% |
| RESUME_CHECK | 60 | 37.5% |
| RESUME | 20 | 12.5% |


</details>

### CALL_INTRINSIC_1

<details>
<summary> Successors and predecessors for CALL_INTRINSIC_1 </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LIST_EXTEND | 80 | 100.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| CALL_FUNCTION_EX | 80 | 100.0% |


</details>

### COPY_FREE_VARS

<details>
<summary> Successors and predecessors for COPY_FREE_VARS </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| CALL_FUNCTION_EX | 80 | 100.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| RESUME_CHECK | 60 | 75.0% |
| RESUME | 20 | 25.0% |


</details>

### ENTER_EXECUTOR

<details>
<summary> Successors and predecessors for ENTER_EXECUTOR </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST_STORE_FAST | 1,310,380 | 100.0% |
| JUMP_BACKWARD | 20 | 0.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST_STORE_FAST | 654,960 | 50.0% |
| UNPACK_SEQUENCE_LIST | 654,240 | 49.9% |
| UNPACK_SEQUENCE_TUPLE | 1,040 | 0.1% |
| EXTENDED_ARG | 160 | 0.0% |


</details>

### EXTENDED_ARG

<details>
<summary> Successors and predecessors for EXTENDED_ARG </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST_STORE_FAST | 340 | 34.7% |
| JUMP_BACKWARD | 320 | 32.7% |
| GET_ITER | 160 | 16.3% |
| ENTER_EXECUTOR | 160 | 16.3% |

|Successors | Count | Percentage | 
|---|---:|---:|
| FOR_ITER_RANGE | 600 | 61.2% |
| JUMP_BACKWARD | 340 | 34.7% |
| FOR_ITER | 40 | 4.1% |


</details>

### FOR_ITER

<details>
<summary> Successors and predecessors for FOR_ITER </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| EXTENDED_ARG | 40 | 100.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST | 20 | 50.0% |
| FOR_ITER_RANGE | 20 | 50.0% |


</details>

### JUMP_BACKWARD

<details>
<summary> Successors and predecessors for JUMP_BACKWARD </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| EXTENDED_ARG | 340 | 100.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| EXTENDED_ARG | 320 | 94.1% |
| ENTER_EXECUTOR | 20 | 5.9% |


</details>

### LIST_EXTEND

<details>
<summary> Successors and predecessors for LIST_EXTEND </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_DEREF | 80 | 100.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| CALL_INTRINSIC_1 | 80 | 100.0% |


</details>

### LOAD_ATTR

<details>
<summary> Successors and predecessors for LOAD_ATTR </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_GLOBAL | 60 | 50.0% |
| LOAD_GLOBAL_MODULE | 60 | 50.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| PUSH_NULL | 60 | 50.0% |
| LOAD_ATTR_MODULE | 60 | 50.0% |


</details>

### LOAD_CONST

<details>
<summary> Successors and predecessors for LOAD_CONST </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_GLOBAL_BUILTIN | 120 | 75.0% |
| LOAD_GLOBAL | 40 | 25.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| CALL | 80 | 50.0% |
| CALL_BUILTIN_CLASS | 80 | 50.0% |


</details>

### LOAD_DEREF

<details>
<summary> Successors and predecessors for LOAD_DEREF </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| NOP | 80 | 33.3% |
| BUILD_LIST | 80 | 33.3% |
| RESUME_CHECK | 60 | 25.0% |
| RESUME | 20 | 8.3% |

|Successors | Count | Percentage | 
|---|---:|---:|
| PUSH_NULL | 160 | 66.7% |
| LIST_EXTEND | 80 | 33.3% |


</details>

### LOAD_FAST

<details>
<summary> Successors and predecessors for LOAD_FAST </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST_STORE_FAST | 505,948,320 | 100.0% |
| STORE_FAST | 640 | 0.0% |
| PUSH_NULL | 160 | 0.0% |
| CALL | 160 | 0.0% |
| LOAD_GLOBAL_BUILTIN | 140 | 0.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| UNPACK_SEQUENCE_LIST | 261,067,380 | 51.6% |
| UNPACK_SEQUENCE_TUPLE | 244,865,420 | 48.4% |
| UNPACK_SEQUENCE | 16,000 | 0.0% |
| GET_ITER | 160 | 0.0% |
| CALL | 120 | 0.0% |


</details>

### LOAD_FAST_LOAD_FAST

<details>
<summary> Successors and predecessors for LOAD_FAST_LOAD_FAST </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_GLOBAL_MODULE | 120 | 50.0% |
| STORE_FAST | 80 | 33.3% |
| LOAD_GLOBAL | 40 | 16.7% |

|Successors | Count | Percentage | 
|---|---:|---:|
| CALL | 80 | 33.3% |
| CALL_PY_EXACT_ARGS | 80 | 33.3% |
| BINARY_OP | 40 | 16.7% |
| BINARY_OP_ADD_FLOAT | 40 | 16.7% |


</details>

### LOAD_GLOBAL

<details>
<summary> Successors and predecessors for LOAD_GLOBAL </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST | 160 | 33.3% |
| RESUME | 80 | 16.7% |
| RESUME_CHECK | 80 | 16.7% |
| RETURN_VALUE | 40 | 8.3% |
| LOAD_GLOBAL | 40 | 8.3% |

|Successors | Count | Percentage | 
|---|---:|---:|
| LOAD_GLOBAL_MODULE | 140 | 29.2% |
| LOAD_GLOBAL_BUILTIN | 100 | 20.8% |
| LOAD_ATTR | 60 | 12.5% |
| LOAD_FAST | 60 | 12.5% |
| LOAD_CONST | 40 | 8.3% |


</details>

### STORE_FAST

<details>
<summary> Successors and predecessors for STORE_FAST </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| FOR_ITER_RANGE | 460 | 41.1% |
| CALL | 220 | 19.6% |
| CALL_BUILTIN_CLASS | 200 | 17.9% |
| RETURN_VALUE | 160 | 14.3% |
| CALL_TUPLE_1 | 60 | 5.4% |

|Successors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST | 640 | 57.1% |
| LOAD_GLOBAL_MODULE | 240 | 21.4% |
| LOAD_GLOBAL | 160 | 14.3% |
| LOAD_FAST_LOAD_FAST | 80 | 7.1% |


</details>

### STORE_FAST_STORE_FAST

<details>
<summary> Successors and predecessors for STORE_FAST_STORE_FAST </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST_STORE_FAST | 2,028,381,200 | 80.0% |
| UNPACK_SEQUENCE_LIST | 261,729,620 | 10.3% |
| UNPACK_SEQUENCE_TUPLE | 244,866,460 | 9.7% |
| ENTER_EXECUTOR | 654,960 | 0.0% |
| UNPACK_SEQUENCE | 8,000 | 0.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST_STORE_FAST | 2,028,381,200 | 80.0% |
| LOAD_FAST | 505,948,320 | 20.0% |
| ENTER_EXECUTOR | 1,310,380 | 0.1% |
| EXTENDED_ARG | 340 | 0.0% |


</details>

### UNPACK_SEQUENCE

<details>
<summary> Successors and predecessors for UNPACK_SEQUENCE </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST | 16,000 | 100.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST_STORE_FAST | 8,000 | 50.0% |
| UNPACK_SEQUENCE_TUPLE | 8,000 | 50.0% |


</details>

### RESUME

<details>
<summary> Successors and predecessors for RESUME </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| CALL | 60 | 60.0% |
| CALL_FUNCTION_EX | 20 | 20.0% |
| COPY_FREE_VARS | 20 | 20.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| LOAD_GLOBAL | 80 | 80.0% |
| LOAD_DEREF | 20 | 20.0% |


</details>

### BINARY_OP_ADD_FLOAT

<details>
<summary> Successors and predecessors for BINARY_OP_ADD_FLOAT </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST_LOAD_FAST | 40 | 66.7% |
| BINARY_OP | 20 | 33.3% |

|Successors | Count | Percentage | 
|---|---:|---:|
| RETURN_VALUE | 60 | 100.0% |


</details>

### BINARY_OP_SUBTRACT_FLOAT

<details>
<summary> Successors and predecessors for BINARY_OP_SUBTRACT_FLOAT </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST | 120 | 85.7% |
| BINARY_OP | 20 | 14.3% |

|Successors | Count | Percentage | 
|---|---:|---:|
| RETURN_VALUE | 140 | 100.0% |


</details>

### CALL_BUILTIN_CLASS

<details>
<summary> Successors and predecessors for CALL_BUILTIN_CLASS </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST | 120 | 37.5% |
| CALL | 80 | 25.0% |
| LOAD_CONST | 80 | 25.0% |
| CALL_BUILTIN_CLASS | 40 | 12.5% |

|Successors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST | 200 | 62.5% |
| CALL | 40 | 12.5% |
| CALL_BUILTIN_CLASS | 40 | 12.5% |
| CALL_TUPLE_1 | 40 | 12.5% |


</details>

### CALL_PY_EXACT_ARGS

<details>
<summary> Successors and predecessors for CALL_PY_EXACT_ARGS </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| CALL | 80 | 33.3% |
| LOAD_FAST | 80 | 33.3% |
| LOAD_FAST_LOAD_FAST | 80 | 33.3% |

|Successors | Count | Percentage | 
|---|---:|---:|
| RESUME_CHECK | 240 | 100.0% |


</details>

### CALL_TUPLE_1

<details>
<summary> Successors and predecessors for CALL_TUPLE_1 </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| CALL_BUILTIN_CLASS | 40 | 66.7% |
| CALL | 20 | 33.3% |

|Successors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST | 60 | 100.0% |


</details>

### FOR_ITER_RANGE

<details>
<summary> Successors and predecessors for FOR_ITER_RANGE </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| EXTENDED_ARG | 600 | 96.8% |
| FOR_ITER | 20 | 3.2% |

|Successors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST | 460 | 74.2% |
| LOAD_GLOBAL_MODULE | 120 | 19.4% |
| LOAD_GLOBAL | 40 | 6.5% |


</details>

### LOAD_ATTR_MODULE

<details>
<summary> Successors and predecessors for LOAD_ATTR_MODULE </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_GLOBAL_MODULE | 280 | 82.4% |
| LOAD_ATTR | 60 | 17.6% |

|Successors | Count | Percentage | 
|---|---:|---:|
| PUSH_NULL | 340 | 100.0% |


</details>

### LOAD_GLOBAL_BUILTIN

<details>
<summary> Successors and predecessors for LOAD_GLOBAL_BUILTIN </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| RESUME_CHECK | 200 | 52.6% |
| LOAD_GLOBAL | 100 | 26.3% |
| LOAD_GLOBAL_BUILTIN | 80 | 21.1% |

|Successors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST | 140 | 36.8% |
| LOAD_CONST | 120 | 31.6% |
| LOAD_GLOBAL_BUILTIN | 80 | 21.1% |
| LOAD_GLOBAL | 40 | 10.5% |


</details>

### LOAD_GLOBAL_MODULE

<details>
<summary> Successors and predecessors for LOAD_GLOBAL_MODULE </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST | 240 | 41.4% |
| LOAD_GLOBAL | 140 | 24.1% |
| FOR_ITER_RANGE | 120 | 20.7% |
| RETURN_VALUE | 40 | 6.9% |
| RESUME_CHECK | 40 | 6.9% |

|Successors | Count | Percentage | 
|---|---:|---:|
| LOAD_ATTR_MODULE | 280 | 48.3% |
| LOAD_FAST | 120 | 20.7% |
| LOAD_FAST_LOAD_FAST | 120 | 20.7% |
| LOAD_ATTR | 60 | 10.3% |


</details>

### RESUME_CHECK

<details>
<summary> Successors and predecessors for RESUME_CHECK </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| CALL_PY_EXACT_ARGS | 240 | 63.2% |
| CALL_FUNCTION_EX | 60 | 15.8% |
| COPY_FREE_VARS | 60 | 15.8% |
| CALL | 20 | 5.3% |

|Successors | Count | Percentage | 
|---|---:|---:|
| LOAD_GLOBAL_BUILTIN | 200 | 52.6% |
| LOAD_GLOBAL | 80 | 21.1% |
| LOAD_DEREF | 60 | 15.8% |
| LOAD_GLOBAL_MODULE | 40 | 10.5% |


</details>

### UNPACK_SEQUENCE_LIST

<details>
<summary> Successors and predecessors for UNPACK_SEQUENCE_LIST </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST | 261,067,380 | 99.7% |
| ENTER_EXECUTOR | 654,240 | 0.2% |
| UNPACK_SEQUENCE_TUPLE | 30,380 | 0.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST_STORE_FAST | 261,729,620 | 100.0% |
| UNPACK_SEQUENCE_TUPLE | 22,380 | 0.0% |


</details>

### UNPACK_SEQUENCE_TUPLE

<details>
<summary> Successors and predecessors for UNPACK_SEQUENCE_TUPLE </summary>

|Predecessors | Count | Percentage | 
|---|---:|---:|
| LOAD_FAST | 244,865,420 | 100.0% |
| UNPACK_SEQUENCE_LIST | 22,380 | 0.0% |
| UNPACK_SEQUENCE | 8,000 | 0.0% |
| ENTER_EXECUTOR | 1,040 | 0.0% |

|Successors | Count | Percentage | 
|---|---:|---:|
| STORE_FAST_STORE_FAST | 244,866,460 | 100.0% |
| UNPACK_SEQUENCE_LIST | 30,380 | 0.0% |


</details>


</details>

## Specialization stats

<details>
<summary> specialization stats by family </summary>

### BINARY_OP

<details>
<summary> specialization stats for BINARY_OP family </summary>

|Kind | Count | Ratio | 
|---|---:|---:|
|     deferred | 40 | 14.3% |
|          hit | 200 | 71.4% |

| | Count | Ratio | 
|---|---:|---:|
| Success | 40 | 100.0% |
| Failure | 0 | 0.0% |


</details>

### CALL

<details>
<summary> specialization stats for CALL family </summary>

|Kind | Count | Ratio | 
|---|---:|---:|
|     deferred | 580 | 39.2% |
|          hit | 620 | 41.9% |

| | Count | Ratio | 
|---|---:|---:|
| Success | 180 | 64.3% |
| Failure | 100 | 35.7% |

|Failure kind | Count | Ratio | 
|---|---:|---:|
| cfunc noargs | 100 | 100.0% |


</details>

### FOR_ITER

<details>
<summary> specialization stats for FOR_ITER family </summary>

|Kind | Count | Ratio | 
|---|---:|---:|
|     deferred | 20 | 3.0% |
|          hit | 620 | 93.9% |

| | Count | Ratio | 
|---|---:|---:|
| Success | 20 | 100.0% |
| Failure | 0 | 0.0% |


</details>

### LOAD_ATTR

<details>
<summary> specialization stats for LOAD_ATTR family </summary>

|Kind | Count | Ratio | 
|---|---:|---:|
|     deferred | 60 | 13.0% |
|          hit | 340 | 73.9% |

| | Count | Ratio | 
|---|---:|---:|
| Success | 60 | 100.0% |
| Failure | 0 | 0.0% |


</details>

### LOAD_GLOBAL

<details>
<summary> specialization stats for LOAD_GLOBAL family </summary>

|Kind | Count | Ratio | 
|---|---:|---:|
|     deferred | 240 | 16.7% |
|          hit | 960 | 66.7% |

| | Count | Ratio | 
|---|---:|---:|
| Success | 240 | 100.0% |
| Failure | 0 | 0.0% |


</details>

### UNPACK_SEQUENCE

<details>
<summary> specialization stats for UNPACK_SEQUENCE family </summary>

|Kind | Count | Ratio | 
|---|---:|---:|
|     deferred | 2,753,140 | 0.5% |
|          hit | 521,534,860 | 99.5% |
|         miss | 2,797,900 | 0.5% |

| | Count | Ratio | 
|---|---:|---:|
| Success | 60,760 | 100.0% |
| Failure | 0 | 0.0% |


</details>


</details>

## Specialization effectiveness

<details>
<summary> specialization effectiveness </summary>

|Instructions | Count | Ratio | 
|---|---:|---:|
| Basic | 3,042,905,260 | 85.7% |
| Not specialized | 17,580 | 0.0% |
| Specialized hits | 503,854,060 | 14.2% |
| Specialized misses | 2,797,900 | 0.1% |

### Deferred by instruction

<details>
<summary> deferred by instruction </summary>

|Name | Count | Ratio | 
|---|---:|---:|
| UNPACK_SEQUENCE | 2,753,140 | 100.0% |
| CALL | 580 | 0.0% |
| LOAD_GLOBAL | 240 | 0.0% |
| LOAD_ATTR | 60 | 0.0% |
| BINARY_OP | 40 | 0.0% |
| FOR_ITER | 20 | 0.0% |
| BINARY_SLICE | 0 | 0.0% |
| STORE_SLICE | 0 | 0.0% |
| BINARY_SUBSCR | 0 | 0.0% |
| GET_ITER | 0 | 0.0% |


</details>

### Misses by instruction

<details>
<summary> misses by instruction </summary>

|Name | Count | Ratio | 
|---|---:|---:|
| UNPACK_SEQUENCE_TUPLE | 1,610,140 | 57.5% |
| UNPACK_SEQUENCE_LIST | 1,187,760 | 42.5% |
| GET_ITER | 0 | 0.0% |
| NOP | 0 | 0.0% |
| POP_TOP | 0 | 0.0% |
| PUSH_NULL | 0 | 0.0% |
| RETURN_VALUE | 0 | 0.0% |
| BUILD_LIST | 0 | 0.0% |
| CALL_FUNCTION_EX | 0 | 0.0% |
| CALL_INTRINSIC_1 | 0 | 0.0% |


</details>


</details>

## Call stats

<details>
<summary> Inlined calls and frame stats </summary>

| | Count | Ratio | 
|---|---:|---:|
| Calls to PyEval_EvalDefault | 0 | 0.0% |
| Calls to Python functions inlined | 480 | 100.0% |
| Calls via PyEval_EvalFrame (total) | 0 | 0.0% |
| Calls via PyEval_EvalFrame (vector) | 0 | 0.0% |
| Calls via PyEval_EvalFrame (generator) | 0 | 0.0% |
| Calls via PyEval_EvalFrame (legacy) | 0 | 0.0% |
| Calls via PyEval_EvalFrame (function vectorcall) | 0 | 0.0% |
| Calls via PyEval_EvalFrame (build class) | 0 | 0.0% |
| Calls via PyEval_EvalFrame (slot) | 0 | 0.0% |
| Calls via PyEval_EvalFrame (function ex) | 160 | 33.3% |
| Calls via PyEval_EvalFrame (api) | 0 | 0.0% |
| Calls via PyEval_EvalFrame (method) | 0 | 0.0% |
| Frame objects created | 0 | 0.0% |
| Frames pushed | 480 | 100.0% |


</details>

## Object stats

<details>
<summary> allocations, frees and dict materializatons </summary>

| | Count | Ratio | 
|---|---:|---:|
| Allocations from freelist | 600 | 0.0% |
| Frees to freelist | 660 |  |
| Allocations | 4,023,860 | 100.0% |
| Allocations to 512 bytes | 4,023,840 | 100.0% |
| Allocations to 4 kbytes | 0 | 0.0% |
| Allocations over 4 kbytes | 20 | 0.0% |
| Frees | 4,023,700 |  |
| New values | 0 |  |
| Interpreter increfs | 507,262,580 | 96.0% |
| Interpreter decrefs | 510,672,280 | 95.9% |
| Increfs | 21,092,720 | 4.0% |
| Decrefs | 21,707,220 | 4.1% |
| Materialize dict (on request) | 0 |  |
| Materialize dict (new key) | 0 |  |
| Materialize dict (too big) | 0 |  |
| Materialize dict (str subclass) | 0 |  |
| Dematerialize dict | 0 |  |
| Method cache hits | 39 |  |
| Method cache misses | 21 |  |
| Method cache collisions | 21 |  |
| Method cache dunder hits | 0 |  |
| Method cache dunder misses | 0 |  |


</details>

## GC stats

<details>
<summary> GC collections and effectiveness </summary>

|Generation | Collections | Objects collected | Object visits | 
|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 |
| 2 | 0 | 0 | 0 |


</details>

## Optimization (Tier 2) stats

<details>
<summary> statistics about the Tier 2 optimizer </summary>

| | Count | Ratio | 
|---|---:|---:|
| Optimization attempts | 20 |  |
| Traces created | 20 | 100.0% |
| Trace stack overflow | 0 | 0.0% |
| Trace stack underflow | 0 | 0.0% |
| Trace too long | 20 | 100.0% |
| Trace too short | 0 | 0.0% |
| Inner loop found | 0 | 0.0% |
| Recursive call | 0 | 0.0% |
| Low confidence | 0 | 0.0% |
| Traces executed | 0 |  |
| Uops executed | 0 |  |

### Trace length histogram

<details>
<summary> trace length histogram </summary>

|Range | Count | Ratio | 
|---|---:|---:|
| <= 1 | 0 | 0.0% |
| <= 2 | 0 | 0.0% |
| <= 4 | 0 | 0.0% |
| <= 8 | 0 | 0.0% |
| <= 16 | 0 | 0.0% |
| <= 32 | 0 | 0.0% |
| <= 64 | 0 | 0.0% |
| <= 128 | 0 | 0.0% |
| <= 256 | 0 | 0.0% |
| <= 512 | 20 | 100.0% |


</details>

### Optimized trace length histogram

<details>
<summary> optimized trace length histogram </summary>

|Range | Count | Ratio | 
|---|---:|---:|
| <= 1 | 0 | 0.0% |
| <= 2 | 0 | 0.0% |
| <= 4 | 0 | 0.0% |
| <= 8 | 0 | 0.0% |
| <= 16 | 0 | 0.0% |
| <= 32 | 0 | 0.0% |
| <= 64 | 0 | 0.0% |
| <= 128 | 0 | 0.0% |
| <= 256 | 0 | 0.0% |
| <= 512 | 20 | 100.0% |


</details>

### Trace run length histogram

<details>
<summary> trace run length histogram </summary>

|Range | Count | Ratio | 
|---|---:|---:|
| <= 1 | 0 |  |


</details>

### Uop execution stats

<details>
<summary> uop execution stats </summary>


</details>

### Unsupported opcodes

<details>
<summary> unsupported opcodes </summary>


</details>


</details>

## Rare events

<details>
<summary> Counts of rare/unlikely events </summary>

|Event | Count | 
|---|---:|
| set class | 0 |
| set bases | 0 |
| set eval frame func | 0 |
| builtin dict | 0 |
| func modification | 0 |
| watched dict modification | 0 |
| watched globals modification | 0 |


</details>

## Meta stats

<details>
<summary> Meta statistics </summary>

| | Count | 
|---|---:|
| Number of data files | 20 |


</details>

---
Stats gathered on: 2024-09-10
