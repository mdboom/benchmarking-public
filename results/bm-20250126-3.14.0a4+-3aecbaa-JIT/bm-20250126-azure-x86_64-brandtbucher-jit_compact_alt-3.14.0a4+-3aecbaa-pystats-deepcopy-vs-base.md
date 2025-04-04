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
<td align="left">TO_BOOL_NONE</td>
<td align="right">30,720</td>
<td align="right">921,600</td>
<td align="right">2,900.0%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD</td>
<td align="right">317,620</td>
<td align="right">6,174,900</td>
<td align="right">1,844.1%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">61,660</td>
<td align="right">725,700</td>
<td align="right">1,076.9%</td>
</tr>
<tr>
<td align="left">POP_ITER</td>
<td align="right">282,960</td>
<td align="right">2,457,960</td>
<td align="right">768.7%</td>
</tr>
<tr>
<td align="left">FOR_ITER_RANGE</td>
<td align="right">187,900</td>
<td align="right">1,597,620</td>
<td align="right">750.3%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">129,800</td>
<td align="right">1,014,100</td>
<td align="right">681.3%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_LIST_INT</td>
<td align="right">64,840</td>
<td align="right">460,800</td>
<td align="right">610.7%</td>
</tr>
<tr>
<td align="left">LOAD_SMALL_INT</td>
<td align="right">253,160</td>
<td align="right">1,567,300</td>
<td align="right">519.1%</td>
</tr>
<tr>
<td align="left">BUILD_MAP</td>
<td align="right">123,120</td>
<td align="right">725,700</td>
<td align="right">489.4%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">1,137,180</td>
<td align="right">4,443,980</td>
<td align="right">290.8%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST</td>
<td align="right">1,075,200</td>
<td align="right">3,686,400</td>
<td align="right">242.9%</td>
</tr>
<tr>
<td align="left">STORE_FAST_STORE_FAST</td>
<td align="right">1,075,420</td>
<td align="right">3,521,220</td>
<td align="right">227.4%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">1,075,420</td>
<td align="right">3,521,220</td>
<td align="right">227.4%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_TRUE</td>
<td align="right">952,500</td>
<td align="right">2,795,700</td>
<td align="right">193.5%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_MODULE</td>
<td align="right">2,096,360</td>
<td align="right">5,591,640</td>
<td align="right">166.7%</td>
</tr>
<tr>
<td align="left">NOP</td>
<td align="right">5,744,820</td>
<td align="right">180</td>
<td align="right">-100.0%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NOT_NONE</td>
<td align="right">61,680</td>
<td align="right">180</td>
<td align="right">-99.7%</td>
</tr>
<tr>
<td align="left">FOR_ITER_LIST</td>
<td align="right">1,904,640</td>
<td align="right">19,880</td>
<td align="right">-99.0%</td>
</tr>
<tr>
<td align="left">COPY_FREE_VARS</td>
<td align="right">952,560</td>
<td align="right">30,960</td>
<td align="right">-96.7%</td>
</tr>
<tr>
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">2,071,840</td>
<td align="right">4,053,060</td>
<td align="right">95.6%</td>
</tr>
<tr>
<td align="left">CALL_INTRINSIC_1</td>
<td align="right">952,500</td>
<td align="right">1,843,380</td>
<td align="right">93.5%</td>
</tr>
<tr>
<td align="left">LIST_EXTEND</td>
<td align="right">952,620</td>
<td align="right">1,843,500</td>
<td align="right">93.5%</td>
</tr>
<tr>
<td align="left">RETURN_VALUE</td>
<td align="right">48,508,400</td>
<td align="right">4,763,120</td>
<td align="right">-90.2%</td>
</tr>
<tr>
<td align="left">LOAD_METHOD_NO_DICT</td>
<td align="right">5,002,380</td>
<td align="right">725,880</td>
<td align="right">-85.5%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_DICT</td>
<td align="right">18,032,680</td>
<td align="right">2,680,760</td>
<td align="right">-85.1%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_O</td>
<td align="right">23,255,140</td>
<td align="right">3,602,360</td>
<td align="right">-84.5%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">6,666,960</td>
<td align="right">1,075,920</td>
<td align="right">-83.9%</td>
</tr>
<tr>
<td align="left">POP_TOP</td>
<td align="right">24,023,940</td>
<td align="right">4,731,780</td>
<td align="right">-80.3%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_LOAD_FAST</td>
<td align="right">40,344,840</td>
<td align="right">8,340,520</td>
<td align="right">-79.3%</td>
</tr>
<tr>
<td align="left">JUMP_FORWARD</td>
<td align="right">6,758,600</td>
<td align="right">1,874,100</td>
<td align="right">-72.3%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NONE</td>
<td align="right">4,909,780</td>
<td align="right">1,873,920</td>
<td align="right">-61.8%</td>
</tr>
<tr>
<td align="left">RESUME_CHECK</td>
<td align="right">12,627,740</td>
<td align="right">5,229,960</td>
<td align="right">-58.6%</td>
</tr>
<tr>
<td align="left">IS_OP</td>
<td align="right">8,571,100</td>
<td align="right">3,748,020</td>
<td align="right">-56.3%</td>
</tr>
<tr>
<td align="left">LOAD_FAST</td>
<td align="right">75,010,600</td>
<td align="right">34,134,560</td>
<td align="right">-54.5%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">2,984,480</td>
<td align="right">1,433,820</td>
<td align="right">-52.0%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_FALSE</td>
<td align="right">15,483,440</td>
<td align="right">7,588,020</td>
<td align="right">-51.0%</td>
</tr>
<tr>
<td align="left">CALL_PY_GENERAL</td>
<td align="right">16,398,700</td>
<td align="right">8,113,580</td>
<td align="right">-50.5%</td>
</tr>
<tr>
<td align="left">PUSH_NULL</td>
<td align="right">39,977,420</td>
<td align="right">20,157,780</td>
<td align="right">-49.6%</td>
</tr>
<tr>
<td align="left">LOAD_DEREF</td>
<td align="right">5,683,620</td>
<td align="right">2,918,820</td>
<td align="right">-48.6%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_BUILTIN</td>
<td align="right">17,729,520</td>
<td align="right">10,330,280</td>
<td align="right">-41.7%</td>
</tr>
<tr>
<td align="left">TO_BOOL_BOOL</td>
<td align="right">4,792,500</td>
<td align="right">2,857,140</td>
<td align="right">-40.4%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_MORTAL</td>
<td align="right">1,018,240</td>
<td align="right">1,414,200</td>
<td align="right">38.9%</td>
</tr>
<tr>
<td align="left">STORE_FAST</td>
<td align="right">22,897,300</td>
<td align="right">15,410,100</td>
<td align="right">-32.7%</td>
</tr>
<tr>
<td align="left">STORE_FAST_LOAD_FAST</td>
<td align="right">986,440</td>
<td align="right">704,580</td>
<td align="right">-28.6%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_CLASS</td>
<td align="right">95,740</td>
<td align="right">123,060</td>
<td align="right">28.5%</td>
</tr>
<tr>
<td align="left">SWAP</td>
<td align="right">1,904,640</td>
<td align="right">1,409,160</td>
<td align="right">-26.0%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_AND_CLEAR</td>
<td align="right">952,320</td>
<td align="right">704,580</td>
<td align="right">-26.0%</td>
</tr>
<tr>
<td align="left">BUILD_LIST</td>
<td align="right">5,714,340</td>
<td align="right">4,472,720</td>
<td align="right">-21.7%</td>
</tr>
<tr>
<td align="left">CALL_NON_PY_GENERAL</td>
<td align="right">3,844,180</td>
<td align="right">4,639,500</td>
<td align="right">20.7%</td>
</tr>
<tr>
<td align="left">GET_ITER</td>
<td align="right">6,857,580</td>
<td align="right">5,564,660</td>
<td align="right">-18.9%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_IMMORTAL</td>
<td align="right">8,757,720</td>
<td align="right">7,528,920</td>
<td align="right">-14.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_MODULE</td>
<td align="right">8,204,800</td>
<td align="right">7,435,080</td>
<td align="right">-9.4%</td>
</tr>
<tr>
<td align="left">CALL_ISINSTANCE</td>
<td align="right">952,320</td>
<td align="right">921,600</td>
<td align="right">-3.2%</td>
</tr>
<tr>
<td align="left">ENTER_EXECUTOR</td>
<td align="right">39,830,500</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_DICT</td>
<td align="right">5,744,640</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">CALL_LIST_APPEND</td>
<td align="right">3,809,280</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">CHECK_EXC_MATCH</td>
<td align="right">2,856,960</td>
<td align="right">2,856,960</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">POP_EXCEPT</td>
<td align="right">2,856,960</td>
<td align="right">2,856,960</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">PUSH_EXC_INFO</td>
<td align="right">2,856,960</td>
<td align="right">2,856,960</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LIST_APPEND</td>
<td align="right">2,856,960</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">2,826,600</td>
<td align="right">2,826,600</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">MAKE_CELL</td>
<td align="right">1,904,940</td>
<td align="right">1,904,940</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">INTERPRETER_EXIT</td>
<td align="right">1,904,740</td>
<td align="right">1,904,740</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_FLOAT</td>
<td align="right">1,843,320</td>
<td align="right">1,843,320</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_FLOAT</td>
<td align="right">1,843,200</td>
<td align="right">1,843,200</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">952,900</td>
<td align="right">952,900</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_TUPLE</td>
<td align="right">952,860</td>
<td align="right">952,860</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">MAKE_FUNCTION</td>
<td align="right">922,020</td>
<td align="right">922,020</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_FUNCTION_ATTRIBUTE</td>
<td align="right">921,900</td>
<td align="right">921,900</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RETURN_GENERATOR</td>
<td align="right">921,600</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">YIELD_VALUE</td>
<td align="right">921,600</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS</td>
<td align="right">921,600</td>
<td align="right">921,600</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_TYPE_1</td>
<td align="right">184,660</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">CONTAINS_OP_SET</td>
<td align="right">184,660</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">178,940</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">61,860</td>
<td align="right">61,860</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_METHOD_WITH_VALUES</td>
<td align="right">31,140</td>
<td align="right">31,140</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">NOT_TAKEN</td>
<td align="right">30,720</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">CALL_TUPLE_1</td>
<td align="right">30,720</td>
<td align="right">30,720</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">800</td>
<td align="right">800</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">720</td>
<td align="right">720</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_METHOD</td>
<td align="right">480</td>
<td align="right">480</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_NAME</td>
<td align="right">480</td>
<td align="right">480</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL</td>
<td align="right">360</td>
<td align="right">360</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_DEREF</td>
<td align="right">300</td>
<td align="right">300</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">200</td>
<td align="right">200</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_TUPLE_INT</td>
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
<td align="left">CALL_ALLOC_AND_ENTER_INIT</td>
<td align="right">120</td>
<td align="right">120</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">EXIT_INIT_CHECK</td>
<td align="right">80</td>
<td align="right">80</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_BUILD_CLASS</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_LOCALS</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_NAME</td>
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">60</td>
<td align="right">60</td>
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
<td align="right">120</td>
<td align="right">0.0%</td>
<td align="right">120</td>
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
<td align="right">3,686,460</td>
<td align="right">100.0%</td>
<td align="right">3,686,460</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">60</td>
<td align="right">0.0%</td>
<td align="right">60</td>
<td align="right">0.0%</td>
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
<td align="right">40</td>
<td align="right">50.0%</td>
<td align="right">40</td>
<td align="right">50.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">40</td>
<td align="right">50.0%</td>
<td align="right">40</td>
<td align="right">50.0%</td>
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
<td align="left">multiply different types</td>
<td align="right">40</td>
<td align="right">100.0%</td>
<td align="right">40</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
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
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">6,666,420</td>
<td align="right">100.0%</td>
<td align="right">6,666,420</td>
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
<td align="right">60</td>
<td align="right">100.0%</td>
<td align="right">60</td>
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
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">2,228,120</td>
<td align="right">2.1%</td>
<td align="right">1,477,920</td>
<td align="right">1.4%</td>
<td align="right">-33.7%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">106,384,760</td>
<td align="right">97.9%</td>
<td align="right">106,384,760</td>
<td align="right">98.6%</td>
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
<td align="right">42,840</td>
<td align="right">100.0%</td>
<td align="right">28,700</td>
<td align="right">100.0%</td>
<td align="right">-33.0%</td>
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

### CONTAINS_OP

<details>
<summary> specialization stats for CONTAINS_OP family </summary>

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
<td align="right">34,222,080</td>
<td align="right">100.0%</td>
<td align="right">34,222,080</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">1,136,820</td>
<td align="right">21.4%</td>
<td align="right">4,442,820</td>
<td align="right">43.9%</td>
<td align="right">290.8%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">4,164,380</td>
<td align="right">78.6%</td>
<td align="right">5,670,560</td>
<td align="right">56.1%</td>
<td align="right">36.2%</td>
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
<td align="right">360</td>
<td align="right">100.0%</td>
<td align="right">1,160</td>
<td align="right">100.0%</td>
<td align="right">222.2%</td>
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
<td align="left">zip</td>
<td align="right">280</td>
<td align="right">77.8%</td>
<td align="right">940</td>
<td align="right">81.0%</td>
<td align="right">235.7%</td>
</tr>
<tr>
<td align="left">dict items</td>
<td align="right">80</td>
<td align="right">22.2%</td>
<td align="right">220</td>
<td align="right">19.0%</td>
<td align="right">175.0%</td>
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
<td align="right">2,983,240</td>
<td align="right">10.6%</td>
<td align="right">1,433,000</td>
<td align="right">4.8%</td>
<td align="right">-52.0%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">25,134,680</td>
<td align="right">89.4%</td>
<td align="right">28,629,960</td>
<td align="right">95.2%</td>
<td align="right">13.9%</td>
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
<td align="right">860</td>
<td align="right">69.4%</td>
<td align="right">440</td>
<td align="right">53.7%</td>
<td align="right">-48.8%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">380</td>
<td align="right">30.6%</td>
<td align="right">380</td>
<td align="right">46.3%</td>
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
<td align="left">overriding descriptor</td>
<td align="right">320</td>
<td align="right">37.2%</td>
<td align="right">40</td>
<td align="right">9.1%</td>
<td align="right">-87.5%</td>
</tr>
<tr>
<td align="left">method</td>
<td align="right">540</td>
<td align="right">62.8%</td>
<td align="right">280</td>
<td align="right">63.6%</td>
<td align="right">-48.1%</td>
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
<td align="right">25,934,320</td>
<td align="right">100.0%</td>
<td align="right">122,819,640</td>
<td align="right">100.0%</td>
<td align="right">373.6%</td>
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
<td align="right">360</td>
<td align="right">100.0%</td>
<td align="right">360</td>
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

### LOAD_METHOD

<details>
<summary> specialization stats for LOAD_METHOD family </summary>

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
<td align="right">4.9%</td>
<td align="right">180</td>
<td align="right">4.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">3,180</td>
<td align="right">86.9%</td>
<td align="right">3,180</td>
<td align="right">86.9%</td>
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
<td align="right">300</td>
<td align="right">83.3%</td>
<td align="right">300</td>
<td align="right">83.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">60</td>
<td align="right">16.7%</td>
<td align="right">60</td>
<td align="right">16.7%</td>
<td align="right">0.0%</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">129,680</td>
<td align="right">67.7%</td>
<td align="right">1,013,760</td>
<td align="right">94.2%</td>
<td align="right">681.7%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">55,500</td>
<td align="right">29.0%</td>
<td align="right">55,500</td>
<td align="right">5.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">6,360</td>
<td align="right">3.3%</td>
<td align="right">6,360</td>
<td align="right">0.6%</td>
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
<td align="right">60</td>
<td align="right">25.0%</td>
<td align="right">280</td>
<td align="right">60.9%</td>
<td align="right">366.7%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">180</td>
<td align="right">75.0%</td>
<td align="right">180</td>
<td align="right">39.1%</td>
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
<td align="left">split dict</td>
<td align="right">60</td>
<td align="right">100.0%</td>
<td align="right">280</td>
<td align="right">100.0%</td>
<td align="right">366.7%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right"></td>
<td align="right"></td>
<td align="right">120</td>
<td align="right">42.9%</td>
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
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">21,258,240</td>
<td align="right">100.0%</td>
<td align="right">21,135,360</td>
<td align="right">100.0%</td>
<td align="right">-0.6%</td>
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
<td align="right">952,500</td>
<td align="right">11.2%</td>
<td align="right">952,500</td>
<td align="right">11.2%</td>
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
<td align="right">7,588,020</td>
<td align="right">88.8%</td>
<td align="right">7,588,020</td>
<td align="right">88.8%</td>
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
<td align="right">60</td>
<td align="right">15.0%</td>
<td align="right">60</td>
<td align="right">15.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">340</td>
<td align="right">85.0%</td>
<td align="right">340</td>
<td align="right">85.0%</td>
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
<td align="left">tuple</td>
<td align="right">280</td>
<td align="right">82.4%</td>
<td align="right">280</td>
<td align="right">82.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">sequence</td>
<td align="right">60</td>
<td align="right">17.6%</td>
<td align="right">60</td>
<td align="right">17.6%</td>
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
<td align="right">10,291,380</td>
<td align="right">100.0%</td>
<td align="right">10,291,380</td>
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
<td align="right">60</td>
<td align="right">100.0%</td>
<td align="right">60</td>
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
Basic
<details>
<summary>ⓘ</summary>

Instructions that are not and cannot be specialized, e.g. `LOAD_FAST`.
</details>
</td>
<td align="right">382,819,680</td>
<td align="right">71.0%</td>
<td align="right">157,362,400</td>
<td align="right">63.7%</td>
<td align="right">-58.9%</td>
</tr>
<tr>
<td align="left">
Not specialized
<details>
<summary>ⓘ</summary>

Instructions that could be specialized but aren't, e.g. `LOAD_ATTR`, `BINARY_SLICE`.
</details>
</td>
<td align="right">5,206,320</td>
<td align="right">1.0%</td>
<td align="right">7,846,760</td>
<td align="right">3.2%</td>
<td align="right">50.7%</td>
</tr>
<tr>
<td align="left">
Specialized hits
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that complete.
</details>
</td>
<td align="right">148,544,340</td>
<td align="right">27.6%</td>
<td align="right">80,501,740</td>
<td align="right">32.6%</td>
<td align="right">-45.8%</td>
</tr>
<tr>
<td align="left">
Specialized misses
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that deopt.
</details>
</td>
<td align="right">2,238,140</td>
<td align="right">0.4%</td>
<td align="right">1,487,520</td>
<td align="right">0.6%</td>
<td align="right">-33.5%</td>
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
<td align="left">STORE_ATTR</td>
<td align="right">129,680</td>
<td align="right">2.5%</td>
<td align="right">1,013,760</td>
<td align="right">12.9%</td>
<td align="right">681.7%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">1,136,820</td>
<td align="right">21.9%</td>
<td align="right">4,442,820</td>
<td align="right">56.7%</td>
<td align="right">290.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">2,983,240</td>
<td align="right">57.3%</td>
<td align="right">1,433,000</td>
<td align="right">18.3%</td>
<td align="right">-52.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">952,500</td>
<td align="right">18.3%</td>
<td align="right">952,500</td>
<td align="right">12.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_METHOD</td>
<td align="right">180</td>
<td align="right">0.0%</td>
<td align="right">180</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">120</td>
<td align="right">0.0%</td>
<td align="right">120</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
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
<tr>
<td align="left">BINARY_SUBSCR</td>
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
<td align="left">CALL_PY_GENERAL</td>
<td align="right">2,228,080</td>
<td align="right">99.5%</td>
<td align="right">1,477,880</td>
<td align="right">99.4%</td>
<td align="right">-33.7%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">6,360</td>
<td align="right">0.3%</td>
<td align="right">6,360</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_METHOD_WITH_VALUES</td>
<td align="right">3,180</td>
<td align="right">0.1%</td>
<td align="right">3,180</td>
<td align="right">0.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RESUME</td>
<td align="right">420</td>
<td align="right">0.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">RESUME_CHECK</td>
<td align="right">420</td>
<td align="right">0.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_FLOAT</td>
<td align="right">60</td>
<td align="right">0.0%</td>
<td align="right">60</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_ALLOC_AND_ENTER_INIT</td>
<td align="right">40</td>
<td align="right">0.0%</td>
<td align="right">40</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
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
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">CHECK_EXC_MATCH</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">EXIT_INIT_CHECK</td>
<td align="right"></td>
<td align="right"></td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">GET_ITER</td>
<td align="right"></td>
<td align="right"></td>
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
<td align="right">1,904,920</td>
<td align="right">3.8%</td>
<td align="right">1,904,920</td>
<td align="right">3.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls to Python functions inlined</td>
<td align="right">48,446,600</td>
<td align="right">96.2%</td>
<td align="right">48,446,600</td>
<td align="right">96.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (total)</td>
<td align="right">1,904,920</td>
<td align="right">3.8%</td>
<td align="right">1,904,920</td>
<td align="right">3.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (vector)</td>
<td align="right">61,720</td>
<td align="right">0.1%</td>
<td align="right">61,720</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (generator)</td>
<td align="right">1,843,200</td>
<td align="right">3.7%</td>
<td align="right">1,843,200</td>
<td align="right">3.7%</td>
<td align="right">0.0%</td>
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
<td align="right">61,660</td>
<td align="right">0.1%</td>
<td align="right">61,660</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (build class)</td>
<td align="right">60</td>
<td align="right">0.0%</td>
<td align="right">60</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
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
<td align="right">1,874,100</td>
<td align="right">3.7%</td>
<td align="right">1,874,100</td>
<td align="right">3.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (api)</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
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
<td align="right">2,856,960</td>
<td align="right">5.7%</td>
<td align="right">2,856,960</td>
<td align="right">5.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Frames pushed</td>
<td align="right">48,508,400</td>
<td align="right">96.3%</td>
<td align="right">48,508,400</td>
<td align="right">96.3%</td>
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
<td align="left">Interpreter mortal increfs</td>
<td align="right">313,413,780</td>
<td align="right">27.5%</td>
<td align="right">168,133,220</td>
<td align="right">15.8%</td>
<td align="right">-46.4%</td>
</tr>
<tr>
<td align="left">Allocations to 4 kbytes</td>
<td align="right">340</td>
<td align="right">0.0%</td>
<td align="right">240</td>
<td align="right">0.0%</td>
<td align="right">-29.4%</td>
</tr>
<tr>
<td align="left">Interpreter mortal decrefs</td>
<td align="right">440,603,480</td>
<td align="right">35.2%</td>
<td align="right">343,031,760</td>
<td align="right">31.1%</td>
<td align="right">-22.1%</td>
</tr>
<tr>
<td align="left">Immortal increfs</td>
<td align="right">295,878,397</td>
<td align="right">26.0%</td>
<td align="right">335,341,859</td>
<td align="right">31.4%</td>
<td align="right">13.3%</td>
</tr>
<tr>
<td align="left">Method cache misses</td>
<td align="right">207</td>
<td align="right"></td>
<td align="right">234</td>
<td align="right"></td>
<td align="right">13.0%</td>
</tr>
<tr>
<td align="left">Immortal decrefs</td>
<td align="right">246,205,429</td>
<td align="right">19.7%</td>
<td align="right">215,524,838</td>
<td align="right">19.6%</td>
<td align="right">-12.5%</td>
</tr>
<tr>
<td align="left">Interpreter immortal decrefs</td>
<td align="right">112,578,380</td>
<td align="right">9.0%</td>
<td align="right">100,633,240</td>
<td align="right">9.1%</td>
<td align="right">-10.6%</td>
</tr>
<tr>
<td align="left">Interpreter immortal increfs</td>
<td align="right">36,514,540</td>
<td align="right">3.2%</td>
<td align="right">32,958,880</td>
<td align="right">3.1%</td>
<td align="right">-9.7%</td>
</tr>
<tr>
<td align="left">Mortal increfs</td>
<td align="right">493,432,471</td>
<td align="right">43.3%</td>
<td align="right">529,981,378</td>
<td align="right">49.7%</td>
<td align="right">7.4%</td>
</tr>
<tr>
<td align="left">Method cache collisions</td>
<td align="right">498</td>
<td align="right"></td>
<td align="right">534</td>
<td align="right"></td>
<td align="right">7.2%</td>
</tr>
<tr>
<td align="left">Mortal decrefs</td>
<td align="right">453,450,099</td>
<td align="right">36.2%</td>
<td align="right">442,289,340</td>
<td align="right">40.2%</td>
<td align="right">-2.5%</td>
</tr>
<tr>
<td align="left">Method cache dunder misses</td>
<td align="right">457</td>
<td align="right"></td>
<td align="right">464</td>
<td align="right"></td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">Frees to freelist</td>
<td align="right">34,056,320</td>
<td align="right"></td>
<td align="right">34,055,460</td>
<td align="right"></td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Allocations from freelist</td>
<td align="right">34,056,840</td>
<td align="right">35.2%</td>
<td align="right">34,055,980</td>
<td align="right">35.2%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Method cache dunder hits</td>
<td align="right">13,213,383</td>
<td align="right"></td>
<td align="right">13,213,096</td>
<td align="right"></td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Method cache hits</td>
<td align="right">5,260,593</td>
<td align="right"></td>
<td align="right">5,260,646</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations</td>
<td align="right">62,610,380</td>
<td align="right">64.8%</td>
<td align="right">62,610,260</td>
<td align="right">64.8%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Allocations to 512 bytes</td>
<td align="right">62,610,040</td>
<td align="right">64.8%</td>
<td align="right">62,610,020</td>
<td align="right">64.8%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Frees</td>
<td align="right">65,466,260</td>
<td align="right"></td>
<td align="right">65,466,263</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations over 4 kbytes</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">Inline values</td>
<td align="right">952,440</td>
<td align="right"></td>
<td align="right">952,440</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (on request)</td>
<td align="right">952,440</td>
<td align="right">100.0%</td>
<td align="right">952,440</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
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
<th align="right">Base Reachable from roots</th>
<th align="right">Base Not reachable from roots</th>
<th align="right">Head Collections</th>
<th align="right">Head Objects collected</th>
<th align="right">Head Object visits</th>
<th align="right">Head Reachable from roots</th>
<th align="right">Head Not reachable from roots</th>
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
Optimization attempts
<details>
<summary>ⓘ</summary>

The number of times a potential trace is identified.  Specifically, this occurs in the JUMP BACKWARD instruction when the counter reaches a threshold.
</details>
</td>
<td align="right">9,580</td>
<td align="right"></td>
<td align="right">0</td>
<td align="right"></td>
<td align="right">-100.0%</td>
</tr>
<tr>
<td align="left">
Traces created
<details>
<summary>ⓘ</summary>

The number of traces that were successfully created.
</details>
</td>
<td align="right">120</td>
<td align="right">1.3%</td>
<td align="right">0</td>
<td align="right"></td>
<td align="right">-100.0%</td>
</tr>
<tr>
<td align="left">
Trace stack underflow
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it pops more frames than it pushes.
</details>
</td>
<td align="right">8,300</td>
<td align="right">86.6%</td>
<td align="right">0</td>
<td align="right"></td>
<td align="right">-100.0%</td>
</tr>
<tr>
<td align="left">
Trace too short
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it it too short.
</details>
</td>
<td align="right">9,460</td>
<td align="right">98.7%</td>
<td align="right">0</td>
<td align="right"></td>
<td align="right">-100.0%</td>
</tr>
<tr>
<td align="left">
Uops executed
<details>
<summary>ⓘ</summary>

The total number of uops (micro-operations) that were executed
</details>
</td>
<td align="right">1,899,139,240</td>
<td align="right">2,257.4%</td>
<td align="right">2,981,330,260</td>
<td align="right">3,252.5%</td>
<td align="right">57.0%</td>
</tr>
<tr>
<td align="left">
Traces executed
<details>
<summary>ⓘ</summary>

The number of traces that were executed
</details>
</td>
<td align="right">84,131,140</td>
<td align="right"></td>
<td align="right">91,662,360</td>
<td align="right"></td>
<td align="right">9.0%</td>
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
<td align="right"></td>
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
<td align="right"></td>
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
<td align="right"></td>
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
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">
Low confidence
<details>
<summary>ⓘ</summary>

A trace is abandoned because the likelihood of the jump to top being taken is too low.
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">0</td>
<td align="right"></td>
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
<td align="right"></td>
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
<td align="right">120</td>
<td align="right"></td>
<td align="right">0</td>
<td align="right"></td>
<td align="right">-100.0%</td>
</tr>
<tr>
<td align="left">
Optimizer successes
<details>
<summary>ⓘ</summary>

The number of traces that were successfully optimized.
</details>
</td>
<td align="right">120</td>
<td align="right">100.0%</td>
<td align="right">0</td>
<td align="right"></td>
<td align="right">-100.0%</td>
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
<td align="right"></td>
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
<td align="right"></td>
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
<td align="right"></td>
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
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 2</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 4</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 8</td>
<td align="right">20</td>
<td align="right">16.7%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">60</td>
<td align="right">50.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">20</td>
<td align="right">16.7%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">20</td>
<td align="right">16.7%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
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
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 2</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 4</td>
<td align="right">20</td>
<td align="right">16.7%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 8</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">80</td>
<td align="right">66.7%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">20</td>
<td align="right">16.7%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
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
<td align="left">_LOAD_FAST</td>
<td align="right">3,123,240</td>
<td align="right">397,858,220</td>
<td align="right">12,638.6%</td>
</tr>
<tr>
<td align="left">_STORE_FAST</td>
<td align="right">2,201,640</td>
<td align="right">106,913,940</td>
<td align="right">4,756.1%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_DICT</td>
<td align="right">921,600</td>
<td align="right">6,666,240</td>
<td align="right">623.3%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR_DICT</td>
<td align="right">2,764,760</td>
<td align="right">17,993,800</td>
<td align="right">550.8%</td>
</tr>
<tr>
<td align="left">_ERROR_POP_N</td>
<td align="right">921,600</td>
<td align="right">2,856,960</td>
<td align="right">210.0%</td>
</tr>
<tr>
<td align="left">_POP_TOP</td>
<td align="right">8,779,800</td>
<td align="right">24,975,360</td>
<td align="right">184.5%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_O</td>
<td align="right">14,315,420</td>
<td align="right">33,968,200</td>
<td align="right">137.3%</td>
</tr>
<tr>
<td align="left">_BUILD_LIST</td>
<td align="right">921,600</td>
<td align="right">2,163,220</td>
<td align="right">134.7%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR</td>
<td align="right">1,317,560</td>
<td align="right">2,867,800</td>
<td align="right">117.7%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_BOOL</td>
<td align="right">1,843,200</td>
<td align="right">3,778,560</td>
<td align="right">105.0%</td>
</tr>
<tr>
<td align="left">_GUARD_TYPE_VERSION</td>
<td align="right">10,598,320</td>
<td align="right">21,392,880</td>
<td align="right">101.9%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT</td>
<td align="right">948,920</td>
<td align="right">30,740</td>
<td align="right">-96.8%</td>
</tr>
<tr>
<td align="left">_CALL_INTRINSIC_1</td>
<td align="right">921,600</td>
<td align="right">30,720</td>
<td align="right">-96.7%</td>
</tr>
<tr>
<td align="left">_LIST_EXTEND</td>
<td align="right">921,600</td>
<td align="right">30,720</td>
<td align="right">-96.7%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_NONE</td>
<td align="right">921,600</td>
<td align="right">30,720</td>
<td align="right">-96.7%</td>
</tr>
<tr>
<td align="left">_EXIT_TRACE</td>
<td align="right">59,660,380</td>
<td align="right">5,806,100</td>
<td align="right">-90.3%</td>
</tr>
<tr>
<td align="left">_DYNAMIC_EXIT</td>
<td align="right">23,548,800</td>
<td align="right">2,826,240</td>
<td align="right">-88.0%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_FAST</td>
<td align="right">3,686,400</td>
<td align="right">1,075,200</td>
<td align="right">-70.8%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_TRUE_POP</td>
<td align="right">37,263,000</td>
<td align="right">62,300,160</td>
<td align="right">67.2%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION</td>
<td align="right">25,499,580</td>
<td align="right">41,189,380</td>
<td align="right">61.5%</td>
</tr>
<tr>
<td align="left">_PUSH_FRAME</td>
<td align="right">23,548,800</td>
<td align="right">37,410,820</td>
<td align="right">58.9%</td>
</tr>
<tr>
<td align="left">_SAVE_RETURN_OFFSET</td>
<td align="right">23,548,800</td>
<td align="right">37,410,820</td>
<td align="right">58.9%</td>
</tr>
<tr>
<td align="left">_IS_OP</td>
<td align="right">9,676,760</td>
<td align="right">14,499,840</td>
<td align="right">49.8%</td>
</tr>
<tr>
<td align="left">_CALL_NON_PY_GENERAL</td>
<td align="right">1,747,640</td>
<td align="right">952,320</td>
<td align="right">-45.5%</td>
</tr>
<tr>
<td align="left">_CHECK_IS_NOT_PY_CALLABLE</td>
<td align="right">1,747,640</td>
<td align="right">952,320</td>
<td align="right">-45.5%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY</td>
<td align="right">179,612,820</td>
<td align="right">260,489,900</td>
<td align="right">45.0%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY_AND_SET_IP</td>
<td align="right">89,331,800</td>
<td align="right">126,788,720</td>
<td align="right">41.9%</td>
</tr>
<tr>
<td align="left">_GET_ITER</td>
<td align="right">3,188,040</td>
<td align="right">4,480,960</td>
<td align="right">40.6%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_TUPLE</td>
<td align="right">5,085,920</td>
<td align="right">3,104,700</td>
<td align="right">-39.0%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_TUPLE</td>
<td align="right">5,085,920</td>
<td align="right">3,104,700</td>
<td align="right">-39.0%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_FALSE_POP</td>
<td align="right">8,294,380</td>
<td align="right">11,366,400</td>
<td align="right">37.0%</td>
</tr>
<tr>
<td align="left">_PY_FRAME_GENERAL</td>
<td align="right">23,548,800</td>
<td align="right">31,819,780</td>
<td align="right">35.1%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">9,215,960</td>
<td align="right">6,770,160</td>
<td align="right">-26.5%</td>
</tr>
<tr>
<td align="left">_FOR_ITER_TIER_TWO</td>
<td align="right">12,902,400</td>
<td align="right">9,596,400</td>
<td align="right">-25.6%</td>
</tr>
<tr>
<td align="left">_LOAD_METHOD_NO_DICT</td>
<td align="right">17,085,660</td>
<td align="right">21,362,160</td>
<td align="right">25.0%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">2,764,760</td>
<td align="right">2,100,720</td>
<td align="right">-24.0%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_TUPLE</td>
<td align="right">2,754,600</td>
<td align="right">2,152,380</td>
<td align="right">-21.9%</td>
</tr>
<tr>
<td align="left">_SET_IP</td>
<td align="right">214,263,560</td>
<td align="right">259,408,580</td>
<td align="right">21.1%</td>
</tr>
<tr>
<td align="left">_PUSH_NULL</td>
<td align="right">94,516,780</td>
<td align="right">114,336,420</td>
<td align="right">21.0%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_LIST</td>
<td align="right">10,690,560</td>
<td align="right">12,575,320</td>
<td align="right">17.6%</td>
</tr>
<tr>
<td align="left">_CHECK_PERIODIC</td>
<td align="right">65,667,640</td>
<td align="right">75,544,120</td>
<td align="right">15.0%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_LIST</td>
<td align="right">12,595,200</td>
<td align="right">14,479,960</td>
<td align="right">15.0%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_LIST</td>
<td align="right">12,595,200</td>
<td align="right">14,479,960</td>
<td align="right">15.0%</td>
</tr>
<tr>
<td align="left">_BUILD_MAP</td>
<td align="right">4,607,940</td>
<td align="right">4,005,360</td>
<td align="right">-13.1%</td>
</tr>
<tr>
<td align="left">_CALL_ISINSTANCE</td>
<td align="right">921,600</td>
<td align="right">952,320</td>
<td align="right">3.3%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">14,320,900</td>
<td align="right">14,499,840</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">_CALL_TYPE_1</td>
<td align="right">34,037,420</td>
<td align="right">34,222,080</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP_SET</td>
<td align="right">34,037,420</td>
<td align="right">34,222,080</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_MAKE_WARM</td>
<td align="right">85,974,340</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_START_EXECUTOR</td>
<td align="right">84,131,140</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_0</td>
<td align="right">83,778,100</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE</td>
<td align="right">63,339,420</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_3</td>
<td align="right">51,611,240</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION</td>
<td align="right">51,058,240</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_1</td>
<td align="right">48,539,440</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW</td>
<td align="right">40,515,940</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_FAST_3</td>
<td align="right">39,594,300</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_2</td>
<td align="right">37,737,760</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_TIER2_RESUME_CHECK</td>
<td align="right">36,802,540</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_5</td>
<td align="right">30,873,500</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_FAST_5</td>
<td align="right">28,630,960</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_4</td>
<td align="right">19,445,720</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_FAST_4</td>
<td align="right">18,923,420</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_GUARD_IS_NOT_NONE_POP</td>
<td align="right">15,273,220</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_6</td>
<td align="right">14,817,880</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_FAST_6</td>
<td align="right">10,999,780</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_7</td>
<td align="right">2,764,800</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_GUARD_IS_NONE_POP</td>
<td align="right">2,764,780</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_JUMP_TO_TOP</td>
<td align="right">1,843,200</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_FAST_7</td>
<td align="right">1,843,200</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_FAST_1</td>
<td align="right">1,843,180</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_INLINE</td>
<td align="right">1,747,640</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_RANGE</td>
<td align="right">1,409,720</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_ITER_CHECK_RANGE</td>
<td align="right">1,409,720</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_ITER_NEXT_RANGE</td>
<td align="right">1,286,840</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_ATTR</td>
<td align="right">884,080</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR_LIST_INT</td>
<td align="right">395,960</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_0</td>
<td align="right">395,960</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_CLASS</td>
<td align="right">27,320</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_DEOPT</td>
<td align="right">360</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_NOP</td>
<td align="right"></td>
<td align="right">606,328,140</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_GUARD_BUILTINS_VERSION_PUSH_KEYS</td>
<td align="right"></td>
<td align="right">58,544,200</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_GUARD_GLOBALS_VERSION</td>
<td align="right"></td>
<td align="right">58,544,200</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_GLOBAL_BUILTINS_FROM_KEYS</td>
<td align="right"></td>
<td align="right">58,544,200</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_GUARD_GLOBALS_VERSION_PUSH_KEYS</td>
<td align="right"></td>
<td align="right">46,510,080</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_GLOBAL_MODULE_FROM_KEYS</td>
<td align="right"></td>
<td align="right">46,510,080</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_RESUME_CHECK</td>
<td align="right"></td>
<td align="right">44,199,960</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_RETURN_VALUE</td>
<td align="right"></td>
<td align="right">43,745,280</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CHECK_PEP_523</td>
<td align="right"></td>
<td align="right">41,189,380</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_JUMP</td>
<td align="right"></td>
<td align="right">30,597,120</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_IS_NONE</td>
<td align="right"></td>
<td align="right">21,135,360</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_CONST_IMMORTAL</td>
<td align="right"></td>
<td align="right">5,836,800</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_EXACT_ARGS</td>
<td align="right"></td>
<td align="right">5,591,040</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE</td>
<td align="right"></td>
<td align="right">5,591,040</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS</td>
<td align="right"></td>
<td align="right">5,591,040</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CALL_LIST_APPEND</td>
<td align="right"></td>
<td align="right">3,809,280</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LIST_APPEND</td>
<td align="right"></td>
<td align="right">2,856,960</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_DEREF</td>
<td align="right"></td>
<td align="right">2,764,800</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_GLOBAL</td>
<td align="right"></td>
<td align="right">1,966,080</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_RETURN_GENERATOR</td>
<td align="right"></td>
<td align="right">921,600</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_COPY_FREE_VARS</td>
<td align="right"></td>
<td align="right">921,600</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_YIELD_VALUE</td>
<td align="right"></td>
<td align="right">921,600</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_SWAP</td>
<td align="right"></td>
<td align="right">495,480</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_AND_CLEAR</td>
<td align="right"></td>
<td align="right">247,740</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR</td>
<td align="right"></td>
<td align="right">122,880</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_GUARD_TYPE_VERSION_AND_LOCK</td>
<td align="right"></td>
<td align="right">20</td>
<td align="right"></td>
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

<table>
<thead>
<tr>
<th align="left">Opcode</th>
<th align="right">Base Count</th>
<th align="right">Head Count</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">240</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">240</td>
<td align="right"></td>
<td align="right"></td>
</tr>
</tbody>
</table>


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
<td align="right">60</td>
<td align="right">60</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

---
Stats gathered on: 2025-01-27
