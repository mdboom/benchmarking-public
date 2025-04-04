## Execution counts

<details>
<summary> Execution counts for Tier 1 instructions. </summary>


The "miss ratio" column shows the percentage of times the instruction
executed that it deoptimized. When this happens, the base unspecialized
instruction is not counted.

<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="right">Base Count</th>
<th align="right">Head Count</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">CALL_BUILTIN_O</td>
<td align="right">246,060</td>
<td align="right">333,780</td>
<td align="right">35.6%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">233,280</td>
<td align="right">313,360</td>
<td align="right">34.3%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_LAZY_DICT</td>
<td align="right">233,220</td>
<td align="right">313,260</td>
<td align="right">34.3%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">248,520</td>
<td align="right">328,560</td>
<td align="right">32.2%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_BUILTIN</td>
<td align="right">1,137,120</td>
<td align="right">1,343,280</td>
<td align="right">18.1%</td>
</tr>
<tr>
<td align="left">CALL_LEN</td>
<td align="right">768,420</td>
<td align="right">886,860</td>
<td align="right">15.4%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">802,620</td>
<td align="right">858,300</td>
<td align="right">6.9%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">5,810,580</td>
<td align="right">6,212,460</td>
<td align="right">6.9%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD</td>
<td align="right">2,435,420</td>
<td align="right">2,531,160</td>
<td align="right">3.9%</td>
</tr>
<tr>
<td align="left">GET_ITER</td>
<td align="right">606,840</td>
<td align="right">629,880</td>
<td align="right">3.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">12,917,620</td>
<td align="right">13,364,180</td>
<td align="right">3.5%</td>
</tr>
<tr>
<td align="left">COPY</td>
<td align="right">15,209,880</td>
<td align="right">15,642,660</td>
<td align="right">2.8%</td>
</tr>
<tr>
<td align="left">SWAP</td>
<td align="right">17,140,680</td>
<td align="right">17,615,480</td>
<td align="right">2.8%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_INT</td>
<td align="right">16,540,500</td>
<td align="right">16,995,140</td>
<td align="right">2.7%</td>
</tr>
<tr>
<td align="left">FOR_ITER_LIST</td>
<td align="right">904,620</td>
<td align="right">927,660</td>
<td align="right">2.5%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">18,473,620</td>
<td align="right">18,923,580</td>
<td align="right">2.4%</td>
</tr>
<tr>
<td align="left">RESUME_CHECK</td>
<td align="right">18,580,260</td>
<td align="right">19,030,260</td>
<td align="right">2.4%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_IMMORTAL</td>
<td align="right">13,227,180</td>
<td align="right">13,504,560</td>
<td align="right">2.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">46,838,400</td>
<td align="right">47,817,280</td>
<td align="right">2.1%</td>
</tr>
<tr>
<td align="left">UNARY_INVERT</td>
<td align="right">2,277,060</td>
<td align="right">2,317,920</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">POP_TOP</td>
<td align="right">13,913,080</td>
<td align="right">14,114,160</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">LOAD_FAST</td>
<td align="right">215,547,140</td>
<td align="right">218,229,480</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_LOAD_FAST</td>
<td align="right">20,819,800</td>
<td align="right">21,013,600</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">49,370,560</td>
<td align="right">49,808,940</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">JUMP_FORWARD</td>
<td align="right">3,778,440</td>
<td align="right">3,811,860</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">ENTER_EXECUTOR</td>
<td align="right">14,687,280</td>
<td align="right">14,812,600</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">LOAD_SMALL_INT</td>
<td align="right">91,894,340</td>
<td align="right">92,619,100</td>
<td align="right">0.8%</td>
</tr>
<tr>
<td align="left">RETURN_VALUE</td>
<td align="right">38,395,740</td>
<td align="right">38,668,240</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">CALL_LIST_APPEND</td>
<td align="right">8,175,840</td>
<td align="right">8,231,920</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">8,191,860</td>
<td align="right">8,247,940</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_INT</td>
<td align="right">34,956,120</td>
<td align="right">35,193,000</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_INT</td>
<td align="right">46,155,000</td>
<td align="right">46,466,580</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">STORE_FAST</td>
<td align="right">49,566,120</td>
<td align="right">49,873,380</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_LIST_INT</td>
<td align="right">8,355,420</td>
<td align="right">8,404,900</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">TO_BOOL_BOOL</td>
<td align="right">16,537,620</td>
<td align="right">16,444,740</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_FALSE</td>
<td align="right">54,532,200</td>
<td align="right">54,807,260</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_TRUE</td>
<td align="right">8,787,840</td>
<td align="right">8,829,720</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">16,798,680</td>
<td align="right">16,869,240</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">TO_BOOL_INT</td>
<td align="right">378,900</td>
<td align="right">377,740</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">5,503,520</td>
<td align="right">5,506,920</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">LOAD_CONST</td>
<td align="right">5,505,120</td>
<td align="right">5,508,520</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_MODULE</td>
<td align="right">5,634,180</td>
<td align="right">5,637,580</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">FOR_ITER_RANGE</td>
<td align="right">824,000</td>
<td align="right">824,000</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">NOP</td>
<td align="right">500,340</td>
<td align="right">500,340</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_LIST_INT</td>
<td align="right">491,520</td>
<td align="right">491,520</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_FAST_STORE_FAST</td>
<td align="right">367,800</td>
<td align="right">367,800</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">315,180</td>
<td align="right">315,180</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">261,340</td>
<td align="right">261,340</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_CLASS</td>
<td align="right">121,860</td>
<td align="right">121,860</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_LIST</td>
<td align="right">69,480</td>
<td align="right">69,480</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">EXIT_INIT_CHECK</td>
<td align="right">53,400</td>
<td align="right">53,400</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_TUPLE</td>
<td align="right">53,400</td>
<td align="right">53,400</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_ALLOC_AND_ENTER_INIT</td>
<td align="right">53,400</td>
<td align="right">53,400</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">INTERPRETER_EXIT</td>
<td align="right">52,920</td>
<td align="right">52,920</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_MULTIPLY_INT</td>
<td align="right">33,720</td>
<td align="right">33,720</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST</td>
<td align="right">24,060</td>
<td align="right">24,060</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LIST_APPEND</td>
<td align="right">8,700</td>
<td align="right">8,700</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">1,180</td>
<td align="right">1,180</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">1,120</td>
<td align="right">1,120</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_NON_PY_GENERAL</td>
<td align="right">780</td>
<td align="right">780</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL</td>
<td align="right">720</td>
<td align="right">720</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">PUSH_NULL</td>
<td align="right">480</td>
<td align="right">480</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">380</td>
<td align="right">380</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW_NON_PY</td>
<td align="right">360</td>
<td align="right">360</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS</td>
<td align="right">360</td>
<td align="right">360</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_MODULE</td>
<td align="right">300</td>
<td align="right">300</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">240</td>
<td align="right">240</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">180</td>
<td align="right">180</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">180</td>
<td align="right">180</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">160</td>
<td align="right">160</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">120</td>
<td align="right">120</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_DEREF</td>
<td align="right">120</td>
<td align="right">120</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_AND_CLEAR</td>
<td align="right">120</td>
<td align="right">120</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_ISINSTANCE</td>
<td align="right">120</td>
<td align="right">120</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">MAKE_FUNCTION</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_INTRINSIC_1</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COPY_FREE_VARS</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">IS_OP</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LIST_EXTEND</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_CHECK</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">MAKE_CELL</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NOT_NONE</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_FUNCTION_ATTRIBUTE</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_DEREF</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_FLOAT</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_TUPLE_INT</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_PY_GENERAL</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_STR</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE</td>
<td align="right">20</td>
<td align="right">20</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

## Pair counts

<details>
<summary> Pair counts for top 100 opcode pairs </summary>


Pairs of specialized operations that deoptimize and are then followed by
the corresponding unspecialized instruction are not counted as pairs.

Not included in comparative output.


</details>

## Predecessor/Successor Pairs

<details>
<summary> Top 5 predecessors and successors of each Tier 1 opcode. </summary>


This does not include the unspecialized instructions that occur after a
specialized instruction deoptimizes.

Not included in comparative output.


</details>

## Specialization stats

<details>
<summary> Specialization stats by family </summary>

### BINARY_OP

<details>
<summary> specialization stats for BINARY_OP family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">49,357,980</td>
<td align="right">17.9%</td>
<td align="right">49,796,300</td>
<td align="right">18.0%</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">226,917,180</td>
<td align="right">82.1%</td>
<td align="right">226,917,180</td>
<td align="right">82.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Failure</td>
<td align="right">12,520</td>
<td align="right">100.0%</td>
<td align="right">12,580</td>
<td align="right">100.0%</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Failure kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">lshift</td>
<td align="right">4,700</td>
<td align="right">37.5%</td>
<td align="right">4,760</td>
<td align="right">37.8%</td>
<td align="right">1.3%</td>
</tr>
<tr>
<td align="left">add other</td>
<td align="right">2,820</td>
<td align="right">22.5%</td>
<td align="right">2,820</td>
<td align="right">22.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">and int</td>
<td align="right">2,460</td>
<td align="right">19.6%</td>
<td align="right">2,460</td>
<td align="right">19.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">rshift</td>
<td align="right">1,840</td>
<td align="right">14.7%</td>
<td align="right">1,840</td>
<td align="right">14.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">multiply different types</td>
<td align="right">580</td>
<td align="right">4.6%</td>
<td align="right">580</td>
<td align="right">4.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">or</td>
<td align="right">120</td>
<td align="right">1.0%</td>
<td align="right">120</td>
<td align="right">1.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

### BINARY_SLICE

<details>
<summary> specialization stats for BINARY_SLICE family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">16,798,680</td>
<td align="right">100.0%</td>
<td align="right">16,869,240</td>
<td align="right">100.0%</td>
<td align="right">0.4%</td>
</tr>
</tbody>
</table>


</details>

### BINARY_SUBSCR

<details>
<summary> specialization stats for BINARY_SUBSCR family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">802,320</td>
<td align="right">1.2%</td>
<td align="right">858,000</td>
<td align="right">1.2%</td>
<td align="right">6.9%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">68,517,480</td>
<td align="right">98.8%</td>
<td align="right">68,517,480</td>
<td align="right">98.8%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Success</td>
<td align="right">20</td>
<td align="right">6.7%</td>
<td align="right">20</td>
<td align="right">6.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">280</td>
<td align="right">93.3%</td>
<td align="right">280</td>
<td align="right">93.3%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Failure kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">buffer int</td>
<td align="right">260</td>
<td align="right">92.9%</td>
<td align="right">260</td>
<td align="right">92.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list slice</td>
<td align="right">20</td>
<td align="right">7.1%</td>
<td align="right">20</td>
<td align="right">7.1%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

### CALL

<details>
<summary> specialization stats for CALL family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">191,196,300</td>
<td align="right">100.0%</td>
<td align="right">191,196,300</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Success</td>
<td align="right">1,180</td>
<td align="right">100.0%</td>
<td align="right">1,180</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
</tbody>
</table>


</details>

### COMPARE_OP

<details>
<summary> specialization stats for COMPARE_OP family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">180</td>
<td align="right">0.0%</td>
<td align="right">180</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">241,876,620</td>
<td align="right">100.0%</td>
<td align="right">241,876,620</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Success</td>
<td align="right">160</td>
<td align="right">80.0%</td>
<td align="right">160</td>
<td align="right">80.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">40</td>
<td align="right">20.0%</td>
<td align="right">40</td>
<td align="right">20.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Failure kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">big int</td>
<td align="right">40</td>
<td align="right">100.0%</td>
<td align="right">40</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

### FOR_ITER

<details>
<summary> specialization stats for FOR_ITER family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">1,728,620</td>
<td align="right">86.9%</td>
<td align="right">1,751,660</td>
<td align="right">87.0%</td>
<td align="right">1.3%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">261,240</td>
<td align="right">13.1%</td>
<td align="right">261,240</td>
<td align="right">13.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Success</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">100</td>
<td align="right">100.0%</td>
<td align="right">100</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Failure kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">enumerate</td>
<td align="right">100</td>
<td align="right">100.0%</td>
<td align="right">100</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

### LOAD_ATTR

<details>
<summary> specialization stats for LOAD_ATTR family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">420</td>
<td align="right">0.0%</td>
<td align="right">420</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">460,713,480</td>
<td align="right">100.0%</td>
<td align="right">460,713,480</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Success</td>
<td align="right">660</td>
<td align="right">94.3%</td>
<td align="right">660</td>
<td align="right">94.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">40</td>
<td align="right">5.7%</td>
<td align="right">40</td>
<td align="right">5.7%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Failure kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">non overriding descriptor</td>
<td align="right">20</td>
<td align="right">50.0%</td>
<td align="right">20</td>
<td align="right">50.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

### LOAD_GLOBAL

<details>
<summary> specialization stats for LOAD_GLOBAL family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">6,771,300</td>
<td align="right">100.0%</td>
<td align="right">6,980,860</td>
<td align="right">100.0%</td>
<td align="right">3.1%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Success</td>
<td align="right">720</td>
<td align="right">100.0%</td>
<td align="right">720</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
</tbody>
</table>


</details>

### STORE_ATTR

<details>
<summary> specialization stats for STORE_ATTR family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">35,343,900</td>
<td align="right">100.0%</td>
<td align="right">35,343,900</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Success</td>
<td align="right">160</td>
<td align="right">100.0%</td>
<td align="right">160</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
</tbody>
</table>


</details>

### STORE_SUBSCR

<details>
<summary> specialization stats for STORE_SUBSCR family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">5,502,180</td>
<td align="right">12.0%</td>
<td align="right">5,505,580</td>
<td align="right">12.0%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">40,342,080</td>
<td align="right">88.0%</td>
<td align="right">40,342,080</td>
<td align="right">88.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Success</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">1,340</td>
<td align="right">100.0%</td>
<td align="right">1,340</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Failure kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">list slice</td>
<td align="right">1,340</td>
<td align="right">100.0%</td>
<td align="right">1,340</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

### TO_BOOL

<details>
<summary> specialization stats for TO_BOOL family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">233,160</td>
<td align="right">0.4%</td>
<td align="right">313,200</td>
<td align="right">0.5%</td>
<td align="right">34.3%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">61,789,980</td>
<td align="right">99.6%</td>
<td align="right">61,686,960</td>
<td align="right">99.5%</td>
<td align="right">-0.2%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Failure</td>
<td align="right">60</td>
<td align="right">50.0%</td>
<td align="right">100</td>
<td align="right">62.5%</td>
<td align="right">66.7%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">60</td>
<td align="right">50.0%</td>
<td align="right">60</td>
<td align="right">37.5%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Failure kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">bytes</td>
<td align="right">40</td>
<td align="right">66.7%</td>
<td align="right">80</td>
<td align="right">80.0%</td>
<td align="right">100.0%</td>
</tr>
<tr>
<td align="left">sequence</td>
<td align="right">20</td>
<td align="right">33.3%</td>
<td align="right">20</td>
<td align="right">20.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

### UNPACK_SEQUENCE

<details>
<summary> specialization stats for UNPACK_SEQUENCE family </summary>

<table>
<thead>
<tr>
<th align="left">Kind</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">20,240,460</td>
<td align="right">100.0%</td>
<td align="right">20,240,460</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left">Success</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Success</td>
<td align="right">20</td>
<td align="right">100.0%</td>
<td align="right">20</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
</tbody>
</table>


</details>


</details>

## Specialization effectiveness

<details>
<summary> specialization effectiveness </summary>


All entries are execution counts. Should add up to the total number of
Tier 1 instructions executed.

<table>
<thead>
<tr>
<th align="left">Instructions</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
Specialized misses
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that deopt.
</details>
</td>
<td align="right">220</td>
<td align="right">0.0%</td>
<td align="right">280</td>
<td align="right">0.0%</td>
<td align="right">27.3%</td>
</tr>
<tr>
<td align="left">
Specialized hits
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that complete.
</details>
</td>
<td align="right">266,177,340</td>
<td align="right">29.7%</td>
<td align="right">270,851,480</td>
<td align="right">29.9%</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">
Basic
<details>
<summary>ⓘ</summary>

Instructions that are not and cannot be specialized, e.g. `LOAD_FAST`.
</details>
</td>
<td align="right">556,204,460</td>
<td align="right">62.1%</td>
<td align="right">562,132,500</td>
<td align="right">62.0%</td>
<td align="right">1.1%</td>
</tr>
<tr>
<td align="left">
Not specialized
<details>
<summary>ⓘ</summary>

Instructions that could be specialized but aren't, e.g. `LOAD_ATTR`, `BINARY_SLICE`.
</details>
</td>
<td align="right">72,973,580</td>
<td align="right">8.2%</td>
<td align="right">73,621,680</td>
<td align="right">8.1%</td>
<td align="right">0.9%</td>
</tr>
</tbody>
</table>

### Deferred by instruction

<details>
<summary> Breakdown of deferred (not specialized) instruction counts by family </summary>

<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">233,160</td>
<td align="right">0.3%</td>
<td align="right">313,200</td>
<td align="right">0.4%</td>
<td align="right">34.3%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">802,320</td>
<td align="right">1.1%</td>
<td align="right">858,000</td>
<td align="right">1.2%</td>
<td align="right">6.9%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">49,357,980</td>
<td align="right">67.7%</td>
<td align="right">49,796,300</td>
<td align="right">67.7%</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">16,798,680</td>
<td align="right">23.0%</td>
<td align="right">16,869,240</td>
<td align="right">22.9%</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">5,502,180</td>
<td align="right">7.5%</td>
<td align="right">5,505,580</td>
<td align="right">7.5%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">261,240</td>
<td align="right">0.4%</td>
<td align="right">261,240</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">420</td>
<td align="right">0.0%</td>
<td align="right">420</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">180</td>
<td align="right">0.0%</td>
<td align="right">180</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SLICE</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">CACHE</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
</tbody>
</table>


</details>

### Misses by instruction

<details>
<summary> Breakdown of misses (specialized deopts) instruction counts by family </summary>

<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">RESUME</td>
<td align="right">220</td>
<td align="right">50.0%</td>
<td align="right">280</td>
<td align="right">50.0%</td>
<td align="right">27.3%</td>
</tr>
<tr>
<td align="left">RESUME_CHECK</td>
<td align="right">220</td>
<td align="right">50.0%</td>
<td align="right">280</td>
<td align="right">50.0%</td>
<td align="right">27.3%</td>
</tr>
<tr>
<td align="left">CACHE</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">EXIT_INIT_CHECK</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">GET_ITER</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">INTERPRETER_EXIT</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">MAKE_FUNCTION</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">NOP</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">POP_TOP</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">PUSH_NULL</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
</tbody>
</table>


</details>


</details>

## Call stats

<details>
<summary> Inlined calls and frame stats </summary>


This shows what fraction of calls to Python functions are inlined (i.e.
not having a call at the C level) and for those that are not, where the
call comes from.  The various categories overlap.

Also includes the count of frame objects created.

<table>
<thead>
<tr>
<th align="left"></th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Calls to PyEval_EvalDefault</td>
<td align="right">52,980</td>
<td align="right">0.1%</td>
<td align="right">52,980</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls to Python functions inlined</td>
<td align="right">95,931,300</td>
<td align="right">99.9%</td>
<td align="right">95,931,300</td>
<td align="right">99.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (total)</td>
<td align="right">52,980</td>
<td align="right">0.1%</td>
<td align="right">52,980</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (vector)</td>
<td align="right">52,980</td>
<td align="right">0.1%</td>
<td align="right">52,980</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (generator)</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (legacy)</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function vectorcall)</td>
<td align="right">52,980</td>
<td align="right">0.1%</td>
<td align="right">52,980</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (build class)</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (slot)</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function ex)</td>
<td align="right">60</td>
<td align="right">0.0%</td>
<td align="right">60</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (api)</td>
<td align="right">52,920</td>
<td align="right">0.1%</td>
<td align="right">52,920</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (method)</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Frame objects created</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Frames pushed</td>
<td align="right">96,037,680</td>
<td align="right">100.1%</td>
<td align="right">96,037,680</td>
<td align="right">100.1%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

## Object stats

<details>
<summary> Allocations, frees and dict materializatons </summary>


Below, "allocations" means "allocations that are not from a freelist".
Total allocations = "Allocations from freelist" + "Allocations".

"Inline values" is the number of values arrays inlined into objects.

The cache hit/miss numbers are for the MRO cache, split into dunder and
other names.

<table>
<thead>
<tr>
<th align="left"></th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Method cache collisions</td>
<td align="right">75</td>
<td align="right"></td>
<td align="right">70</td>
<td align="right"></td>
<td align="right">-6.7%</td>
</tr>
<tr>
<td align="left">Method cache misses</td>
<td align="right">76</td>
<td align="right"></td>
<td align="right">71</td>
<td align="right"></td>
<td align="right">-6.6%</td>
</tr>
<tr>
<td align="left">Allocations over 4 kbytes</td>
<td align="right">2,300</td>
<td align="right">0.0%</td>
<td align="right">2,220</td>
<td align="right">0.0%</td>
<td align="right">-3.5%</td>
</tr>
<tr>
<td align="left">Interpreter mortal increfs</td>
<td align="right">189,150,160</td>
<td align="right">3.6%</td>
<td align="right">193,236,760</td>
<td align="right">3.6%</td>
<td align="right">2.2%</td>
</tr>
<tr>
<td align="left">Interpreter immortal increfs</td>
<td align="right">207,128,480</td>
<td align="right">3.9%</td>
<td align="right">208,966,920</td>
<td align="right">3.9%</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">Interpreter immortal decrefs</td>
<td align="right">461,871,360</td>
<td align="right">7.7%</td>
<td align="right">465,069,040</td>
<td align="right">7.7%</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">Interpreter mortal decrefs</td>
<td align="right">491,481,140</td>
<td align="right">8.2%</td>
<td align="right">494,583,360</td>
<td align="right">8.2%</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">Mortal increfs</td>
<td align="right">1,433,910,562</td>
<td align="right">27.0%</td>
<td align="right">1,429,589,835</td>
<td align="right">27.0%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">Mortal decrefs</td>
<td align="right">1,403,896,869</td>
<td align="right">23.4%</td>
<td align="right">1,400,560,105</td>
<td align="right">23.3%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Method cache hits</td>
<td align="right">3,824</td>
<td align="right"></td>
<td align="right">3,829</td>
<td align="right"></td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Immortal decrefs</td>
<td align="right">3,652,499,705</td>
<td align="right">60.8%</td>
<td align="right">3,649,426,499</td>
<td align="right">60.7%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">Immortal increfs</td>
<td align="right">3,470,871,512</td>
<td align="right">65.5%</td>
<td align="right">3,468,918,629</td>
<td align="right">65.4%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">Allocations to 4 kbytes</td>
<td align="right">16,249,300</td>
<td align="right">5.3%</td>
<td align="right">16,249,160</td>
<td align="right">5.3%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Frees</td>
<td align="right">242,175,587</td>
<td align="right"></td>
<td align="right">242,175,210</td>
<td align="right"></td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Allocations</td>
<td align="right">242,174,580</td>
<td align="right">79.3%</td>
<td align="right">242,174,220</td>
<td align="right">79.3%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Allocations to 512 bytes</td>
<td align="right">225,922,980</td>
<td align="right">73.9%</td>
<td align="right">225,922,840</td>
<td align="right">73.9%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Frees to freelist</td>
<td align="right">63,358,900</td>
<td align="right"></td>
<td align="right">63,358,880</td>
<td align="right"></td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Allocations from freelist</td>
<td align="right">63,358,940</td>
<td align="right">20.7%</td>
<td align="right">63,358,920</td>
<td align="right">20.7%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Inline values</td>
<td align="right">53,400</td>
<td align="right"></td>
<td align="right">53,400</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (on request)</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Materialize dict (new key)</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Materialize dict (too big)</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Materialize dict (str subclass)</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Method cache dunder hits</td>
<td align="right">829</td>
<td align="right"></td>
<td align="right">829</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Method cache dunder misses</td>
<td align="right">11</td>
<td align="right"></td>
<td align="right">11</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

## GC stats

<details>
<summary> GC collections and effectiveness </summary>


Collected/visits gives some measure of efficiency.

<table>
<thead>
<tr>
<th align="right">Generation</th>
<th align="right">Base Collections</th>
<th align="right">Base Objects collected</th>
<th align="right">Base Object visits</th>
<th align="right">Head Collections</th>
<th align="right">Head Objects collected</th>
<th align="right">Head Object visits</th>
</tr>
</thead>
<tbody>
<tr>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
</tr>
<tr>
<td align="right">1</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
</tr>
<tr>
<td align="right">2</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">0</td>
</tr>
</tbody>
</table>


</details>

## Optimization (Tier 2) stats

<details>
<summary> statistics about the Tier 2 optimizer </summary>

<table>
<thead>
<tr>
<th align="left"></th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
Low confidence
<details>
<summary>ⓘ</summary>

A trace is abandoned because the likelihood of the jump to top being taken is too low.
</details>
</td>
<td align="right">240</td>
<td align="right">3.0%</td>
<td align="right">160</td>
<td align="right">2.5%</td>
<td align="right">-33.3%</td>
</tr>
<tr>
<td align="left">
Trace stack underflow
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it pops more frames than it pushes.
</details>
</td>
<td align="right">6,600</td>
<td align="right">82.3%</td>
<td align="right">5,040</td>
<td align="right">79.0%</td>
<td align="right">-23.6%</td>
</tr>
<tr>
<td align="left">
Trace too short
<details>
<summary>ⓘ</summary>

A potential trace is abandoced because it it too short.
</details>
</td>
<td align="right">5,840</td>
<td align="right">72.8%</td>
<td align="right">4,560</td>
<td align="right">71.5%</td>
<td align="right">-21.9%</td>
</tr>
<tr>
<td align="left">
Optimization attempts
<details>
<summary>ⓘ</summary>

The number of times a potential trace is identified.  Specifically, this occurs in the JUMP BACKWARD instruction when the counter reaches a threshold.
</details>
</td>
<td align="right">8,020</td>
<td align="right"></td>
<td align="right">6,380</td>
<td align="right"></td>
<td align="right">-20.4%</td>
</tr>
<tr>
<td align="left">
Traces created
<details>
<summary>ⓘ</summary>

The number of traces that were successfully created.
</details>
</td>
<td align="right">2,180</td>
<td align="right">27.2%</td>
<td align="right">1,820</td>
<td align="right">28.5%</td>
<td align="right">-16.5%</td>
</tr>
<tr>
<td align="left">
Traces executed
<details>
<summary>ⓘ</summary>

The number of traces that were executed
</details>
</td>
<td align="right">58,394,640</td>
<td align="right"></td>
<td align="right">58,036,140</td>
<td align="right"></td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">
Uops executed
<details>
<summary>ⓘ</summary>

The total number of uops (micro-operations) that were executed
</details>
</td>
<td align="right">6,426,530,620</td>
<td align="right">11,005.3%</td>
<td align="right">6,406,293,880</td>
<td align="right">11,038.5%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">
Trace stack overflow
<details>
<summary>ⓘ</summary>

A trace is truncated because it would require more than 5 stack frames.
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
Trace too long
<details>
<summary>ⓘ</summary>

A trace is truncated because it is longer than the instruction buffer.
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
Inner loop found
<details>
<summary>ⓘ</summary>

A trace is truncated because it has an inner loop
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
Recursive call
<details>
<summary>ⓘ</summary>

A trace is truncated because it has a recursive call.
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
Executors invalidated
<details>
<summary>ⓘ</summary>

The number of executors that were invalidated due to watched dictionary changes.
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left"></th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
Optimizer attempts
<details>
<summary>ⓘ</summary>

The number of times the trace optimizer (_Py_uop_analyze_and_optimize) was run.
</details>
</td>
<td align="right">2,180</td>
<td align="right"></td>
<td align="right">1,820</td>
<td align="right"></td>
<td align="right">-16.5%</td>
</tr>
<tr>
<td align="left">
Optimizer successes
<details>
<summary>ⓘ</summary>

The number of traces that were successfully optimized.
</details>
</td>
<td align="right">2,180</td>
<td align="right">100.0%</td>
<td align="right">1,820</td>
<td align="right">100.0%</td>
<td align="right">-16.5%</td>
</tr>
<tr>
<td align="left">
Optimizer no memory
<details>
<summary>ⓘ</summary>

The number of optimizations that failed due to no memory.
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
Remove globals builtins changed
<details>
<summary>ⓘ</summary>

The builtins changed during optimization
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
Remove globals incorrect keys
<details>
<summary>ⓘ</summary>

The keys in the globals dictionary aren't what was expected
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
</tbody>
</table>

### Trace length histogram

<details>
<summary> trace length histogram </summary>

<table>
<thead>
<tr>
<th align="left">Range</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><= 1</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 2</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 4</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 8</td>
<td align="right">320</td>
<td align="right">14.7%</td>
<td align="right">180</td>
<td align="right">9.9%</td>
<td align="right">-43.8%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">160</td>
<td align="right">7.3%</td>
<td align="right">160</td>
<td align="right">8.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">420</td>
<td align="right">19.3%</td>
<td align="right">300</td>
<td align="right">16.5%</td>
<td align="right">-28.6%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">220</td>
<td align="right">10.1%</td>
<td align="right">220</td>
<td align="right">12.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left"><= 256</td>
<td align="right">980</td>
<td align="right">45.0%</td>
<td align="right">920</td>
<td align="right">50.5%</td>
<td align="right">-6.1%</td>
</tr>
<tr>
<td align="left"><= 512</td>
<td align="right">80</td>
<td align="right">3.7%</td>
<td align="right">40</td>
<td align="right">2.2%</td>
<td align="right">-50.0%</td>
</tr>
</tbody>
</table>


</details>

### Optimized trace length histogram

<details>
<summary> optimized trace length histogram </summary>

<table>
<thead>
<tr>
<th align="left">Range</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><= 1</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 2</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 4</td>
<td align="right">100</td>
<td align="right">4.6%</td>
<td align="right">120</td>
<td align="right">6.6%</td>
<td align="right">20.0%</td>
</tr>
<tr>
<td align="left"><= 8</td>
<td align="right">220</td>
<td align="right">10.1%</td>
<td align="right">60</td>
<td align="right">3.3%</td>
<td align="right">-72.7%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">40</td>
<td align="right">1.8%</td>
<td align="right">40</td>
<td align="right">2.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">360</td>
<td align="right">16.5%</td>
<td align="right">300</td>
<td align="right">16.5%</td>
<td align="right">-16.7%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">340</td>
<td align="right">15.6%</td>
<td align="right">280</td>
<td align="right">15.4%</td>
<td align="right">-17.6%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">720</td>
<td align="right">33.0%</td>
<td align="right">700</td>
<td align="right">38.5%</td>
<td align="right">-2.8%</td>
</tr>
<tr>
<td align="left"><= 256</td>
<td align="right">400</td>
<td align="right">18.3%</td>
<td align="right">320</td>
<td align="right">17.6%</td>
<td align="right">-20.0%</td>
</tr>
</tbody>
</table>


</details>

### Trace run length histogram

<details>
<summary> trace run length histogram </summary>

<table>
<thead>
<tr>
<th align="left">Range</th>
<th align="right">Base Count</th>
<th align="right">Base Ratio</th>
<th align="right">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><= 1</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
</tbody>
</table>


</details>

### Uop execution stats

<details>
<summary> uop execution stats </summary>

<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="right">Base Count</th>
<th align="right">Head Count</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">_DEOPT</td>
<td align="right">140</td>
<td align="right">180</td>
<td align="right">28.6%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_6</td>
<td align="right">624,960</td>
<td align="right">555,520</td>
<td align="right">-11.1%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_6</td>
<td align="right">159,840</td>
<td align="right">151,560</td>
<td align="right">-5.2%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_INLINE</td>
<td align="right">66,000</td>
<td align="right">62,600</td>
<td align="right">-5.2%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE</td>
<td align="right">66,000</td>
<td align="right">62,600</td>
<td align="right">-5.2%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR</td>
<td align="right">66,000</td>
<td align="right">62,600</td>
<td align="right">-5.2%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_3</td>
<td align="right">541,500</td>
<td align="right">524,400</td>
<td align="right">-3.2%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_2</td>
<td align="right">1,022,820</td>
<td align="right">999,600</td>
<td align="right">-2.3%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_0</td>
<td align="right">3,820,660</td>
<td align="right">3,740,600</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">3,820,620</td>
<td align="right">3,740,580</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">_CHECK_ATTR_METHOD_LAZY_DICT</td>
<td align="right">3,820,620</td>
<td align="right">3,740,580</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_LAZY_DICT</td>
<td align="right">3,820,620</td>
<td align="right">3,740,580</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">_TO_BOOL</td>
<td align="right">3,820,620</td>
<td align="right">3,740,580</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_O</td>
<td align="right">4,320,420</td>
<td align="right">4,232,700</td>
<td align="right">-2.0%</td>
</tr>
<tr>
<td align="left">_GUARD_DORV_NO_DICT</td>
<td align="right">29,533,320</td>
<td align="right">29,131,440</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">_STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">29,533,320</td>
<td align="right">29,131,440</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_2</td>
<td align="right">11,008,560</td>
<td align="right">10,887,660</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW</td>
<td align="right">33,024,000</td>
<td align="right">32,746,620</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT</td>
<td align="right">27,663,060</td>
<td align="right">27,441,540</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE_OPERAND</td>
<td align="right">34,131,240</td>
<td align="right">34,403,240</td>
<td align="right">0.8%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION</td>
<td align="right">25,729,860</td>
<td align="right">25,535,660</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_INT</td>
<td align="right">159,960</td>
<td align="right">161,120</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_0</td>
<td align="right">200,931,020</td>
<td align="right">199,617,160</td>
<td align="right">-0.7%</td>
</tr>
<tr>
<td align="left">_EXIT_TRACE</td>
<td align="right">58,394,500</td>
<td align="right">58,035,960</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_START_EXECUTOR</td>
<td align="right">58,394,640</td>
<td align="right">58,036,140</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_TRUE_POP</td>
<td align="right">61,090,060</td>
<td align="right">60,730,220</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_GUARD_TOS_INT</td>
<td align="right">9,524,940</td>
<td align="right">9,468,840</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_RESUME_CHECK</td>
<td align="right">77,404,160</td>
<td align="right">76,954,200</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_PUSH_FRAME</td>
<td align="right">77,404,160</td>
<td align="right">76,954,200</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_SAVE_RETURN_OFFSET</td>
<td align="right">77,404,160</td>
<td align="right">76,954,200</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_EXACT_ARGS</td>
<td align="right">77,338,160</td>
<td align="right">76,891,600</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION</td>
<td align="right">77,338,160</td>
<td align="right">76,891,600</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_GUARD_DORV_VALUES_INST_ATTR_FROM_DICT</td>
<td align="right">77,338,160</td>
<td align="right">76,891,600</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_GUARD_KEYS_VERSION</td>
<td align="right">77,338,160</td>
<td align="right">76,891,600</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">77,338,160</td>
<td align="right">76,891,600</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_UNARY_INVERT</td>
<td align="right">7,125,420</td>
<td align="right">7,084,560</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_POP_TOP</td>
<td align="right">35,131,320</td>
<td align="right">34,930,240</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_JUMP_TO_TOP</td>
<td align="right">84,808,140</td>
<td align="right">85,259,040</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_1</td>
<td align="right">65,120,260</td>
<td align="right">64,776,800</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_ADD_INT</td>
<td align="right">88,374,960</td>
<td align="right">87,920,320</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">_SWAP</td>
<td align="right">95,234,700</td>
<td align="right">94,759,900</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">_COPY</td>
<td align="right">88,269,240</td>
<td align="right">87,836,460</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_WITH_NULL</td>
<td align="right">44,092,200</td>
<td align="right">43,882,640</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">_RETURN_VALUE</td>
<td align="right">57,641,940</td>
<td align="right">57,369,440</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">_BINARY_OP</td>
<td align="right">96,069,300</td>
<td align="right">95,630,980</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">_STORE_FAST</td>
<td align="right">26,726,580</td>
<td align="right">26,604,780</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_1</td>
<td align="right">222,367,080</td>
<td align="right">221,402,920</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_BINARY_SLICE</td>
<td align="right">18,539,340</td>
<td align="right">18,468,780</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_GUARD_NOS_INT</td>
<td align="right">110,828,140</td>
<td align="right">110,410,760</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_GUARD_TYPE_VERSION</td>
<td align="right">203,120,720</td>
<td align="right">202,372,880</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_CHECK_MANAGED_OBJECT_HAS_VALUES</td>
<td align="right">273,540,120</td>
<td align="right">272,561,240</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_INSTANCE_VALUE_0</td>
<td align="right">273,540,120</td>
<td align="right">272,561,240</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_SET_IP</td>
<td align="right">415,623,700</td>
<td align="right">414,176,140</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_1</td>
<td align="right">23,745,900</td>
<td align="right">23,665,860</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_2</td>
<td align="right">8,463,240</td>
<td align="right">8,436,800</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_1</td>
<td align="right">146,628,640</td>
<td align="right">146,175,920</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_CALL_LEN</td>
<td align="right">39,705,780</td>
<td align="right">39,587,340</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY</td>
<td align="right">338,219,480</td>
<td align="right">337,221,880</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY_AND_SET_IP</td>
<td align="right">34,933,020</td>
<td align="right">34,836,820</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_GET_ITER</td>
<td align="right">8,397,240</td>
<td align="right">8,374,200</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBTRACT_INT</td>
<td align="right">87,011,820</td>
<td align="right">86,774,940</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_INT</td>
<td align="right">169,603,740</td>
<td align="right">169,204,340</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">_CHECK_PERIODIC</td>
<td align="right">122,288,840</td>
<td align="right">122,025,380</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST</td>
<td align="right">244,741,680</td>
<td align="right">244,250,640</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_2</td>
<td align="right">167,915,160</td>
<td align="right">167,613,900</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_INT</td>
<td align="right">195,721,560</td>
<td align="right">195,409,980</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">_CALL_LIST_APPEND</td>
<td align="right">37,832,820</td>
<td align="right">37,776,740</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">37,832,820</td>
<td align="right">37,776,740</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_0</td>
<td align="right">8,676,240</td>
<td align="right">8,666,040</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR</td>
<td align="right">57,214,680</td>
<td align="right">57,159,000</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_LIST_INT</td>
<td align="right">60,162,000</td>
<td align="right">60,112,520</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_MAKE_WARM</td>
<td align="right">143,202,780</td>
<td align="right">143,295,180</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_3</td>
<td align="right">40,822,080</td>
<td align="right">40,845,480</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_4</td>
<td align="right">40,884,600</td>
<td align="right">40,908,000</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_4</td>
<td align="right">64,880,520</td>
<td align="right">64,915,700</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_LIST</td>
<td align="right">52,272,660</td>
<td align="right">52,249,620</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_LIST</td>
<td align="right">52,272,660</td>
<td align="right">52,249,620</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_LIST</td>
<td align="right">52,272,660</td>
<td align="right">52,249,620</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_3</td>
<td align="right">92,380,260</td>
<td align="right">92,350,420</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_5</td>
<td align="right">72,333,900</td>
<td align="right">72,310,860</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_FALSE_POP</td>
<td align="right">228,023,960</td>
<td align="right">227,953,700</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_5</td>
<td align="right">183,322,140</td>
<td align="right">183,273,460</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_BOOL</td>
<td align="right">44,713,500</td>
<td align="right">44,703,360</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR_LIST_INT</td>
<td align="right">39,850,560</td>
<td align="right">39,850,560</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_RANGE</td>
<td align="right">20,072,980</td>
<td align="right">20,072,980</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_RANGE</td>
<td align="right">20,072,980</td>
<td align="right">20,072,980</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_RANGE</td>
<td align="right">20,061,240</td>
<td align="right">20,061,240</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_FOR_ITER_TIER_TWO</td>
<td align="right">19,925,340</td>
<td align="right">19,925,340</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">19,925,280</td>
<td align="right">19,925,280</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

### Pair counts

<details>
<summary> Pair counts for top 100 Non-JIT uop pairs </summary>


Pairs of specialized operations that deoptimize and are then followed by
the corresponding unspecialized instruction are not counted as pairs.

Not included in comparative output.


</details>

### Unsupported opcodes

<details>
<summary> unsupported opcodes </summary>


</details>

### Optimizer errored out with opcode

<details>
<summary> Optimization stopped after encountering this opcode </summary>


</details>


</details>

## Rare events

<details>
<summary> Counts of rare/unlikely events </summary>

<table>
<thead>
<tr>
<th align="left">Event</th>
<th align="right">Base Count</th>
<th align="right">Head Count</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
set class
<details>
<summary>ⓘ</summary>

Setting an object's class, `obj.__class__ = ...`
</details>
</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
set bases
<details>
<summary>ⓘ</summary>

Setting the bases of a class, `cls.__bases__ = ...`
</details>
</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
set eval frame func
<details>
<summary>ⓘ</summary>

Setting the PEP 523 frame eval function `_PyInterpreterState_SetFrameEvalFunc()`
</details>
</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
builtin dict
<details>
<summary>ⓘ</summary>

Modifying the builtins, `__builtins__.__dict__[var] = ...`
</details>
</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
func modification
<details>
<summary>ⓘ</summary>

Modifying a function, e.g. `func.__defaults__ = ...`, etc.
</details>
</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
watched dict modification
<details>
<summary>ⓘ</summary>

A watched dict has been modified
</details>
</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
watched globals modification
<details>
<summary>ⓘ</summary>

A watched `globals()` dict has been modified
</details>
</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right"></td>
</tr>
</tbody>
</table>


</details>

## Meta stats

<details>
<summary> Meta statistics </summary>

<table>
<thead>
<tr>
<th align="left"></th>
<th align="right">Base Count</th>
<th align="right">Head Count</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Number of data files</td>
<td align="right">20</td>
<td align="right">20</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

---
Stats gathered on: 2024-11-21
