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
<td align="left">LOAD_SUPER_ATTR</td>
<td align="right">62</td>
<td align="right">60</td>
<td align="right">-3.2%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE</td>
<td align="right">8,899</td>
<td align="right">9,026</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">879,977</td>
<td align="right">867,497</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">17,606,915</td>
<td align="right">17,812,472</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">YIELD_VALUE</td>
<td align="right">17,546,635</td>
<td align="right">17,745,285</td>
<td align="right">1.1%</td>
</tr>
<tr>
<td align="left">IS_OP</td>
<td align="right">34,615,476</td>
<td align="right">34,814,836</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">4,597,223</td>
<td align="right">4,572,917</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_DICT</td>
<td align="right">5,676,669</td>
<td align="right">5,706,335</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL</td>
<td align="right">18,191</td>
<td align="right">18,111</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">BUILD_SET</td>
<td align="right">40,130</td>
<td align="right">40,300</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">POP_TOP</td>
<td align="right">54,116,820</td>
<td align="right">54,318,117</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">ENTER_EXECUTOR</td>
<td align="right">70,198,981</td>
<td align="right">70,441,092</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NONE</td>
<td align="right">5,058,484</td>
<td align="right">5,046,998</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">INTERPRETER_EXIT</td>
<td align="right">97,743,467</td>
<td align="right">97,946,414</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">END_FOR</td>
<td align="right">17,010</td>
<td align="right">17,045</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">15,463,927</td>
<td align="right">15,490,604</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">36,560</td>
<td align="right">36,499</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">FOR_ITER_LIST</td>
<td align="right">15,249,901</td>
<td align="right">15,274,546</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD</td>
<td align="right">18,980,323</td>
<td align="right">18,950,938</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">13,179,278</td>
<td align="right">13,160,830</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">CALL_KW</td>
<td align="right">1,446</td>
<td align="right">1,448</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS_WITH_METACLASS_CHECK</td>
<td align="right">2,828,595</td>
<td align="right">2,832,348</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">RESUME_CHECK</td>
<td align="right">171,067,450</td>
<td align="right">171,266,973</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">COPY_FREE_VARS</td>
<td align="right">18,472,725</td>
<td align="right">18,493,245</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">LOAD_DEREF</td>
<td align="right">40,058,693</td>
<td align="right">40,101,605</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_GETITEM</td>
<td align="right">20,672</td>
<td align="right">20,694</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">33,475,772</td>
<td align="right">33,508,481</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">CALL_LIST_APPEND</td>
<td align="right">17,724,972</td>
<td align="right">17,739,347</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">NOP</td>
<td align="right">23,355,470</td>
<td align="right">23,374,164</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">FOR_ITER_GEN</td>
<td align="right">147,581</td>
<td align="right">147,696</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">175,193</td>
<td align="right">175,325</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">SET_FUNCTION_ATTRIBUTE</td>
<td align="right">3,428,018</td>
<td align="right">3,430,587</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">1,222,323</td>
<td align="right">1,221,452</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">RAISE_VARARGS</td>
<td align="right">83,061</td>
<td align="right">83,119</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">41,848,358</td>
<td align="right">41,876,901</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">STORE_FAST_STORE_FAST</td>
<td align="right">43,914,226</td>
<td align="right">43,942,413</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">GET_ITER</td>
<td align="right">55,905,815</td>
<td align="right">55,940,053</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">MAKE_FUNCTION</td>
<td align="right">5,052,947</td>
<td align="right">5,055,978</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_TRUE</td>
<td align="right">49,861,555</td>
<td align="right">49,890,829</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">RETURN_GENERATOR</td>
<td align="right">5,176,300</td>
<td align="right">5,179,196</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">25,986,553</td>
<td align="right">25,972,041</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">41,222,866</td>
<td align="right">41,244,319</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_SET</td>
<td align="right">78,635</td>
<td align="right">78,675</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">LOAD_FAST</td>
<td align="right">595,326,003</td>
<td align="right">595,617,267</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CHECK_EXC_MATCH</td>
<td align="right">654,974</td>
<td align="right">655,266</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">POP_EXCEPT</td>
<td align="right">654,974</td>
<td align="right">655,266</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">PUSH_EXC_INFO</td>
<td align="right">654,974</td>
<td align="right">655,266</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_O</td>
<td align="right">16,318,455</td>
<td align="right">16,311,239</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">STORE_FAST_LOAD_FAST</td>
<td align="right">1,787,036</td>
<td align="right">1,787,687</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_GENERAL</td>
<td align="right">165,603</td>
<td align="right">165,543</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">PUSH_NULL</td>
<td align="right">24,132,325</td>
<td align="right">24,123,687</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_ALWAYS_TRUE</td>
<td align="right">172,034</td>
<td align="right">172,093</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">8,394,110</td>
<td align="right">8,391,293</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">60,524,874</td>
<td align="right">60,544,146</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_INTRINSIC_1</td>
<td align="right">1,028,211</td>
<td align="right">1,028,530</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LIST_EXTEND</td>
<td align="right">1,028,816</td>
<td align="right">1,029,135</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_TUPLE</td>
<td align="right">32,821,216</td>
<td align="right">32,831,006</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_MODULE</td>
<td align="right">493,463</td>
<td align="right">493,321</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_LIST_INT</td>
<td align="right">18,587,312</td>
<td align="right">18,592,513</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_LIST</td>
<td align="right">16,040,651</td>
<td align="right">16,044,769</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NOT_NONE</td>
<td align="right">17,492,331</td>
<td align="right">17,496,776</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LIST_APPEND</td>
<td align="right">2,199,628</td>
<td align="right">2,200,169</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">61,582,271</td>
<td align="right">61,597,031</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNARY_NEGATIVE</td>
<td align="right">456,411</td>
<td align="right">456,518</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_CONST</td>
<td align="right">19,942,856</td>
<td align="right">19,947,104</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_PROPERTY</td>
<td align="right">20,334,464</td>
<td align="right">20,338,570</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_LIST</td>
<td align="right">141,384</td>
<td align="right">141,412</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_IMMORTAL</td>
<td align="right">103,969,824</td>
<td align="right">103,950,186</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">MAKE_CELL</td>
<td align="right">4,496,776</td>
<td align="right">4,497,588</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_LIST_INT</td>
<td align="right">15,911,049</td>
<td align="right">15,913,902</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_FALSE</td>
<td align="right">171,678,477</td>
<td align="right">171,648,015</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_INT</td>
<td align="right">1,758,760</td>
<td align="right">1,758,469</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TUPLE</td>
<td align="right">1,287,833</td>
<td align="right">1,287,626</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">IMPORT_FROM</td>
<td align="right">6,588,643</td>
<td align="right">6,589,611</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">IMPORT_NAME</td>
<td align="right">5,752,290</td>
<td align="right">5,753,093</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS</td>
<td align="right">1,389,526</td>
<td align="right">1,389,711</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_ALLOC_AND_ENTER_INIT</td>
<td align="right">642,588</td>
<td align="right">642,667</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">6,034,893</td>
<td align="right">6,035,621</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">EXIT_INIT_CHECK</td>
<td align="right">642,572</td>
<td align="right">642,647</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_ATTR</td>
<td align="right">942,547</td>
<td align="right">942,655</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_INT</td>
<td align="right">29,764,360</td>
<td align="right">29,767,686</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_CLASS</td>
<td align="right">6,641,864</td>
<td align="right">6,642,573</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_PY_GENERAL</td>
<td align="right">3,438,430</td>
<td align="right">3,438,779</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_SLOT</td>
<td align="right">6,621,862</td>
<td align="right">6,622,472</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_NONE</td>
<td align="right">1,966,134</td>
<td align="right">1,966,314</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">2,281,022</td>
<td align="right">2,281,220</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SWAP</td>
<td align="right">30,245,445</td>
<td align="right">30,248,008</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_NO_DICT</td>
<td align="right">43,425,862</td>
<td align="right">43,429,526</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_TYPE_1</td>
<td align="right">10,960,999</td>
<td align="right">10,961,863</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_DICT</td>
<td align="right">2,587,938</td>
<td align="right">2,588,139</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD_NO_INTERRUPT</td>
<td align="right">745,863</td>
<td align="right">745,916</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_BUILTIN</td>
<td align="right">158,249,383</td>
<td align="right">158,260,446</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">EXTENDED_ARG</td>
<td align="right">12,121,266</td>
<td align="right">12,122,052</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW_PY</td>
<td align="right">7,516,511</td>
<td align="right">7,516,994</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_INT</td>
<td align="right">3,431,063</td>
<td align="right">3,430,848</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">15,281,258</td>
<td align="right">15,282,205</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_BOOL</td>
<td align="right">114,622,802</td>
<td align="right">114,629,752</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">FOR_ITER_RANGE</td>
<td align="right">2,069,616</td>
<td align="right">2,069,738</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_MODULE</td>
<td align="right">85,018,515</td>
<td align="right">85,023,488</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_TUPLE_INT</td>
<td align="right">6,744,050</td>
<td align="right">6,744,441</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST</td>
<td align="right">29,887,330</td>
<td align="right">29,889,051</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">60,264,858</td>
<td align="right">60,268,225</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_INT</td>
<td align="right">15,567,179</td>
<td align="right">15,566,319</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">STORE_FAST</td>
<td align="right">202,771,102</td>
<td align="right">202,782,269</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_DEREF</td>
<td align="right">6,227,824</td>
<td align="right">6,228,163</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">21,976,208</td>
<td align="right">21,977,403</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RETURN_VALUE</td>
<td align="right">182,072,001</td>
<td align="right">182,081,525</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_ISINSTANCE</td>
<td align="right">42,948,020</td>
<td align="right">42,950,197</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">GET_YIELD_FROM_ITER</td>
<td align="right">389,902</td>
<td align="right">389,883</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">4,469,280</td>
<td align="right">4,469,066</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_LIST</td>
<td align="right">1,521,589</td>
<td align="right">1,521,660</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNARY_NOT</td>
<td align="right">4,181,522</td>
<td align="right">4,181,705</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">12,106,581</td>
<td align="right">12,107,106</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">2,675,922</td>
<td align="right">2,676,038</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_NON_PY_GENERAL</td>
<td align="right">16,054,815</td>
<td align="right">16,055,449</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_MULTIPLY_INT</td>
<td align="right">2,195,157</td>
<td align="right">2,195,072</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW_NON_PY</td>
<td align="right">597,609</td>
<td align="right">597,632</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_AND_CLEAR</td>
<td align="right">11,876,765</td>
<td align="right">11,877,211</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DICT_MERGE</td>
<td align="right">12,801,327</td>
<td align="right">12,801,801</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_LEN</td>
<td align="right">21,740,379</td>
<td align="right">21,741,158</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_STR</td>
<td align="right">10,500,127</td>
<td align="right">10,500,471</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_FLOAT</td>
<td align="right">427,540</td>
<td align="right">427,551</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SEND_GEN</td>
<td align="right">746,319</td>
<td align="right">746,300</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">BUILD_MAP</td>
<td align="right">21,097,595</td>
<td align="right">21,098,109</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">27,280,034</td>
<td align="right">27,279,402</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">COPY</td>
<td align="right">3,550,050</td>
<td align="right">3,550,124</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_TUPLE_1</td>
<td align="right">4,587,414</td>
<td align="right">4,587,504</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SMALL_INT</td>
<td align="right">42,390,672</td>
<td align="right">42,391,484</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_LOAD_FAST</td>
<td align="right">140,505,614</td>
<td align="right">140,502,997</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">JUMP_FORWARD</td>
<td align="right">4,609,683</td>
<td align="right">4,609,604</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">9,938,724</td>
<td align="right">9,938,868</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_CHECK</td>
<td align="right">1,244,509</td>
<td align="right">1,244,527</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_DICT</td>
<td align="right">1,754,441</td>
<td align="right">1,754,462</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">MAP_ADD</td>
<td align="right">3,728,193</td>
<td align="right">3,728,177</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_METHOD</td>
<td align="right">1,323,181</td>
<td align="right">1,323,180</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">DELETE_FAST</td>
<td align="right">1,036,043</td>
<td align="right">1,036,043</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_UNICODE</td>
<td align="right">389,282</td>
<td align="right">389,282</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">END_SEND</td>
<td align="right">372,870</td>
<td align="right">372,870</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_STR</td>
<td align="right">338,565</td>
<td align="right">338,565</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SEND</td>
<td align="right">270,096</td>
<td align="right">270,096</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">FORMAT_SIMPLE</td>
<td align="right">178,536</td>
<td align="right">178,536</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CONVERT_VALUE</td>
<td align="right">178,534</td>
<td align="right">178,534</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_STR_1</td>
<td align="right">133,724</td>
<td align="right">133,724</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_STRING</td>
<td align="right">89,010</td>
<td align="right">89,010</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_ADD</td>
<td align="right">14,629</td>
<td align="right">14,629</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_NAME</td>
<td align="right">9,212</td>
<td align="right">9,212</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_NAME</td>
<td align="right">8,941</td>
<td align="right">8,941</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">8,858</td>
<td align="right">8,858</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SPECIAL</td>
<td align="right">3,742</td>
<td align="right">3,742</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RESUME</td>
<td align="right">2,972</td>
<td align="right">2,972</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST_WITH_KEYWORDS</td>
<td align="right">2,645</td>
<td align="right">2,645</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RERAISE</td>
<td align="right">1,679</td>
<td align="right">1,679</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_STR_INT</td>
<td align="right">1,455</td>
<td align="right">1,455</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_SUBSCR</td>
<td align="right">1,055</td>
<td align="right">1,055</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SLICE</td>
<td align="right">591</td>
<td align="right">591</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_FLOAT</td>
<td align="right">447</td>
<td align="right">447</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW_BOUND_METHOD</td>
<td align="right">394</td>
<td align="right">394</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_FLOAT</td>
<td align="right">255</td>
<td align="right">255</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_BUILD_CLASS</td>
<td align="right">133</td>
<td align="right">133</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_LOCALS</td>
<td align="right">127</td>
<td align="right">127</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_INPLACE_ADD_UNICODE</td>
<td align="right">102</td>
<td align="right">102</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_LAZY_DICT</td>
<td align="right">92</td>
<td align="right">92</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_NAME</td>
<td align="right">6</td>
<td align="right">6</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_MULTIPLY_FLOAT</td>
<td align="right">3</td>
<td align="right">3</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DICT_UPDATE</td>
<td align="right">1</td>
<td align="right">1</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_GLOBAL</td>
<td align="right">1</td>
<td align="right">1</td>
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
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">14,385,726</td>
<td align="right">34.5%</td>
<td align="right">14,386,466</td>
<td align="right">34.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">27,259,219</td>
<td align="right">65.4%</td>
<td align="right">27,258,657</td>
<td align="right">65.4%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">126</td>
<td align="right">0.0%</td>
<td align="right">126</td>
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
<td align="right">1,310</td>
<td align="right">6.3%</td>
<td align="right">1,271</td>
<td align="right">6.1%</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">19,505</td>
<td align="right">93.7%</td>
<td align="right">19,474</td>
<td align="right">93.9%</td>
<td align="right">-0.2%</td>
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
<td align="right">94</td>
<td align="right">0.5%</td>
<td align="right">91</td>
<td align="right">0.5%</td>
<td align="right">-3.2%</td>
</tr>
<tr>
<td align="left">floor divide</td>
<td align="right">367</td>
<td align="right">1.9%</td>
<td align="right">363</td>
<td align="right">1.9%</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">power</td>
<td align="right">989</td>
<td align="right">5.1%</td>
<td align="right">981</td>
<td align="right">5.0%</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">subtract different types</td>
<td align="right">565</td>
<td align="right">2.9%</td>
<td align="right">568</td>
<td align="right">2.9%</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">xor</td>
<td align="right">189</td>
<td align="right">1.0%</td>
<td align="right">188</td>
<td align="right">1.0%</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">and other</td>
<td align="right">210</td>
<td align="right">1.1%</td>
<td align="right">209</td>
<td align="right">1.1%</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">and int</td>
<td align="right">1,290</td>
<td align="right">6.6%</td>
<td align="right">1,286</td>
<td align="right">6.6%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">remainder</td>
<td align="right">704</td>
<td align="right">3.6%</td>
<td align="right">702</td>
<td align="right">3.6%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">multiply different types</td>
<td align="right">2,577</td>
<td align="right">13.2%</td>
<td align="right">2,570</td>
<td align="right">13.2%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">add different types</td>
<td align="right">1,002</td>
<td align="right">5.1%</td>
<td align="right">1,000</td>
<td align="right">5.1%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">rshift</td>
<td align="right">1,213</td>
<td align="right">6.2%</td>
<td align="right">1,211</td>
<td align="right">6.2%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">true divide different types</td>
<td align="right">1,087</td>
<td align="right">5.6%</td>
<td align="right">1,086</td>
<td align="right">5.6%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">add other</td>
<td align="right">2,900</td>
<td align="right">14.9%</td>
<td align="right">2,902</td>
<td align="right">14.9%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">subtract other</td>
<td align="right">3,221</td>
<td align="right">16.5%</td>
<td align="right">3,221</td>
<td align="right">16.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">or</td>
<td align="right">2,225</td>
<td align="right">11.4%</td>
<td align="right">2,225</td>
<td align="right">11.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">multiply other</td>
<td align="right">716</td>
<td align="right">3.7%</td>
<td align="right">716</td>
<td align="right">3.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">true divide other</td>
<td align="right">155</td>
<td align="right">0.8%</td>
<td align="right">155</td>
<td align="right">0.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">true divide float</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
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
<td align="right">8,858</td>
<td align="right">100.0%</td>
<td align="right">8,858</td>
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
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">10,726</td>
<td align="right">0.0%</td>
<td align="right">10,775</td>
<td align="right">0.0%</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">32,732,665</td>
<td align="right">79.6%</td>
<td align="right">32,758,837</td>
<td align="right">79.6%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">8,388,089</td>
<td align="right">20.4%</td>
<td align="right">8,385,280</td>
<td align="right">20.4%</td>
<td align="right">-0.0%</td>
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
<td align="right">988</td>
<td align="right">15.9%</td>
<td align="right">982</td>
<td align="right">15.8%</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">5,233</td>
<td align="right">84.1%</td>
<td align="right">5,231</td>
<td align="right">84.2%</td>
<td align="right">-0.0%</td>
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
<td align="right">273</td>
<td align="right">5.2%</td>
<td align="right">274</td>
<td align="right">5.2%</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">tuple slice</td>
<td align="right">690</td>
<td align="right">13.2%</td>
<td align="right">689</td>
<td align="right">13.2%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">3,699</td>
<td align="right">70.7%</td>
<td align="right">3,697</td>
<td align="right">70.7%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">out of range</td>
<td align="right">422</td>
<td align="right">8.1%</td>
<td align="right">422</td>
<td align="right">8.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">buffer int</td>
<td align="right">148</td>
<td align="right">2.8%</td>
<td align="right">148</td>
<td align="right">2.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">array int</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">1</td>
<td align="right">0.0%</td>
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
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">24,620,558</td>
<td align="right">7.7%</td>
<td align="right">24,824,244</td>
<td align="right">7.7%</td>
<td align="right">0.8%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">20,245</td>
<td align="right">0.0%</td>
<td align="right">20,217</td>
<td align="right">0.0%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">295,962,124</td>
<td align="right">92.3%</td>
<td align="right">296,024,482</td>
<td align="right">92.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
deopt
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">13,673</td>
<td align="right">0.0%</td>
<td align="right">13,673</td>
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
<td align="right">481,228</td>
<td align="right">99.9%</td>
<td align="right">485,045</td>
<td align="right">99.9%</td>
<td align="right">0.8%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">536</td>
<td align="right">0.1%</td>
<td align="right">536</td>
<td align="right">0.1%</td>
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
<td align="left">out of versions</td>
<td align="right">536</td>
<td align="right">100.0%</td>
<td align="right">536</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">init not inline values</td>
<td align="right">536</td>
<td align="right">100.0%</td>
<td align="right">536</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

### CALL_KW

<details>
<summary> specialization stats for CALL_KW family </summary>

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
<td align="right">401</td>
<td align="right">9.4%</td>
<td align="right">399</td>
<td align="right">9.4%</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">2,805</td>
<td align="right">66.0%</td>
<td align="right">2,805</td>
<td align="right">66.0%</td>
<td align="right">0.0%</td>
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
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">409,686</td>
<td align="right">0.5%</td>
<td align="right">410,752</td>
<td align="right">0.5%</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">25,949,062</td>
<td align="right">33.5%</td>
<td align="right">25,934,493</td>
<td align="right">33.5%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">51,029,513</td>
<td align="right">65.9%</td>
<td align="right">51,033,337</td>
<td align="right">65.9%</td>
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
<td align="right">36,309</td>
<td align="right">80.4%</td>
<td align="right">36,374</td>
<td align="right">80.4%</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">8,855</td>
<td align="right">19.6%</td>
<td align="right">8,867</td>
<td align="right">19.6%</td>
<td align="right">0.1%</td>
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
<td align="left">baseobject</td>
<td align="right">115</td>
<td align="right">0.3%</td>
<td align="right">116</td>
<td align="right">0.3%</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">different types</td>
<td align="right">4,239</td>
<td align="right">11.7%</td>
<td align="right">4,269</td>
<td align="right">11.7%</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">big int</td>
<td align="right">14,098</td>
<td align="right">38.8%</td>
<td align="right">14,137</td>
<td align="right">38.9%</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">3,152</td>
<td align="right">8.7%</td>
<td align="right">3,145</td>
<td align="right">8.6%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">6,405</td>
<td align="right">17.6%</td>
<td align="right">6,407</td>
<td align="right">17.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">string</td>
<td align="right">7,480</td>
<td align="right">20.6%</td>
<td align="right">7,480</td>
<td align="right">20.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">bool</td>
<td align="right">410</td>
<td align="right">1.1%</td>
<td align="right">410</td>
<td align="right">1.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">float long</td>
<td align="right">138</td>
<td align="right">0.4%</td>
<td align="right">138</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">137</td>
<td align="right">0.4%</td>
<td align="right">137</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list</td>
<td align="right">91</td>
<td align="right">0.3%</td>
<td align="right">91</td>
<td align="right">0.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">long float</td>
<td align="right">44</td>
<td align="right">0.1%</td>
<td align="right">44</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">4,593,282</td>
<td align="right">16.3%</td>
<td align="right">4,568,984</td>
<td align="right">16.3%</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">23,499,278</td>
<td align="right">83.6%</td>
<td align="right">23,500,043</td>
<td align="right">83.7%</td>
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
<td align="right">1,020</td>
<td align="right">0.0%</td>
<td align="right">1,020</td>
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
<td align="left">Failure</td>
<td align="right">3,819</td>
<td align="right">96.9%</td>
<td align="right">3,811</td>
<td align="right">96.9%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">122</td>
<td align="right">3.1%</td>
<td align="right">122</td>
<td align="right">3.1%</td>
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
<td align="left">other</td>
<td align="right">1,910</td>
<td align="right">50.0%</td>
<td align="right">1,902</td>
<td align="right">49.9%</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">1,473</td>
<td align="right">38.6%</td>
<td align="right">1,473</td>
<td align="right">38.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list</td>
<td align="right">299</td>
<td align="right">7.8%</td>
<td align="right">299</td>
<td align="right">7.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">str</td>
<td align="right">137</td>
<td align="right">3.6%</td>
<td align="right">137</td>
<td align="right">3.6%</td>
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
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">742,599</td>
<td align="right">1.2%</td>
<td align="right">741,329</td>
<td align="right">1.2%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">33,424,026</td>
<td align="right">52.1%</td>
<td align="right">33,457,188</td>
<td align="right">52.1%</td>
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
<td align="right">29,903,777</td>
<td align="right">46.6%</td>
<td align="right">29,911,481</td>
<td align="right">46.6%</td>
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
<td align="right">51,028</td>
<td align="right">77.7%</td>
<td align="right">50,580</td>
<td align="right">77.6%</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">14,641</td>
<td align="right">22.3%</td>
<td align="right">14,618</td>
<td align="right">22.4%</td>
<td align="right">-0.2%</td>
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
<td align="left">dict items</td>
<td align="right">42,137</td>
<td align="right">82.6%</td>
<td align="right">41,676</td>
<td align="right">82.4%</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">enumerate</td>
<td align="right">1,330</td>
<td align="right">2.6%</td>
<td align="right">1,336</td>
<td align="right">2.6%</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">2,859</td>
<td align="right">5.6%</td>
<td align="right">2,866</td>
<td align="right">5.7%</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">zip</td>
<td align="right">2,709</td>
<td align="right">5.3%</td>
<td align="right">2,709</td>
<td align="right">5.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">itertools</td>
<td align="right">758</td>
<td align="right">1.5%</td>
<td align="right">758</td>
<td align="right">1.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">557</td>
<td align="right">1.1%</td>
<td align="right">557</td>
<td align="right">1.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">dict keys</td>
<td align="right">382</td>
<td align="right">0.7%</td>
<td align="right">382</td>
<td align="right">0.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">reversed list</td>
<td align="right">243</td>
<td align="right">0.5%</td>
<td align="right">243</td>
<td align="right">0.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">dict values</td>
<td align="right">29</td>
<td align="right">0.1%</td>
<td align="right">29</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">ascii string</td>
<td align="right">24</td>
<td align="right">0.0%</td>
<td align="right">24</td>
<td align="right">0.0%</td>
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
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">221,656,742</td>
<td align="right">68.2%</td>
<td align="right">221,855,782</td>
<td align="right">68.2%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">43,144,099</td>
<td align="right">13.3%</td>
<td align="right">43,156,434</td>
<td align="right">13.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">60,204,608</td>
<td align="right">18.5%</td>
<td align="right">60,207,899</td>
<td align="right">18.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
deopt
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">18,588</td>
<td align="right">0.0%</td>
<td align="right">18,588</td>
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
<td align="left">Failure</td>
<td align="right">45,077</td>
<td align="right">5.2%</td>
<td align="right">45,115</td>
<td align="right">5.2%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">826,869</td>
<td align="right">94.8%</td>
<td align="right">827,108</td>
<td align="right">94.8%</td>
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
<td align="right">3,159</td>
<td align="right">7.0%</td>
<td align="right">3,176</td>
<td align="right">7.0%</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">method</td>
<td align="right">3,003</td>
<td align="right">6.7%</td>
<td align="right">3,006</td>
<td align="right">6.7%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">overridden</td>
<td align="right">3,097</td>
<td align="right">6.9%</td>
<td align="right">3,100</td>
<td align="right">6.9%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">mutable class</td>
<td align="right">21,160</td>
<td align="right">46.9%</td>
<td align="right">21,175</td>
<td align="right">46.9%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">class method obj</td>
<td align="right">4,059</td>
<td align="right">9.0%</td>
<td align="right">4,057</td>
<td align="right">9.0%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">metaclass attribute</td>
<td align="right">6,812</td>
<td align="right">15.1%</td>
<td align="right">6,812</td>
<td align="right">15.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">expected error</td>
<td align="right">2,363</td>
<td align="right">5.2%</td>
<td align="right">2,363</td>
<td align="right">5.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">builtin class method</td>
<td align="right">247</td>
<td align="right">0.5%</td>
<td align="right">247</td>
<td align="right">0.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">non object slot</td>
<td align="right">148</td>
<td align="right">0.3%</td>
<td align="right">148</td>
<td align="right">0.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">property</td>
<td align="right">46</td>
<td align="right">0.1%</td>
<td align="right">46</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">overriding descriptor</td>
<td align="right">7</td>
<td align="right">0.0%</td>
<td align="right">7</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">module attr not found</td>
<td align="right">2</td>
<td align="right">0.0%</td>
<td align="right">2</td>
<td align="right">0.0%</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">4,595</td>
<td align="right">0.0%</td>
<td align="right">4,554</td>
<td align="right">0.0%</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">244,530,429</td>
<td align="right">100.0%</td>
<td align="right">244,546,482</td>
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
<td align="right">1,294</td>
<td align="right">0.0%</td>
<td align="right">1,294</td>
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
<td align="right">13,644</td>
<td align="right">100.0%</td>
<td align="right">13,605</td>
<td align="right">100.0%</td>
<td align="right">-0.3%</td>
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

### LOAD_SUPER_ATTR

<details>
<summary> specialization stats for LOAD_SUPER_ATTR family </summary>

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
<td align="right">32</td>
<td align="right">0.0%</td>
<td align="right">30</td>
<td align="right">0.0%</td>
<td align="right">-6.2%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">2,265,728</td>
<td align="right">100.0%</td>
<td align="right">2,265,835</td>
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
<td align="right">30</td>
<td align="right">100.0%</td>
<td align="right">30</td>
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

### SEND

<details>
<summary> specialization stats for SEND family </summary>

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
<td align="right">731,608</td>
<td align="right">72.0%</td>
<td align="right">731,589</td>
<td align="right">72.0%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">268,986</td>
<td align="right">26.5%</td>
<td align="right">268,986</td>
<td align="right">26.5%</td>
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
<td align="right">14,711</td>
<td align="right">1.4%</td>
<td align="right">14,711</td>
<td align="right">1.4%</td>
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
<td align="right">274</td>
<td align="right">19.8%</td>
<td align="right">274</td>
<td align="right">19.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">1,108</td>
<td align="right">80.2%</td>
<td align="right">1,108</td>
<td align="right">80.2%</td>
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
<td align="left">list</td>
<td align="right">1,108</td>
<td align="right">100.0%</td>
<td align="right">1,108</td>
<td align="right">100.0%</td>
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
<td align="right">173,889</td>
<td align="right">1.9%</td>
<td align="right">174,009</td>
<td align="right">1.9%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">1,576,287</td>
<td align="right">17.4%</td>
<td align="right">1,577,097</td>
<td align="right">17.4%</td>
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
<td align="right">7,326,597</td>
<td align="right">80.7%</td>
<td align="right">7,326,595</td>
<td align="right">80.7%</td>
<td align="right">-0.0%</td>
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
<td align="right">969</td>
<td align="right">3.1%</td>
<td align="right">981</td>
<td align="right">3.2%</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">29,985</td>
<td align="right">96.9%</td>
<td align="right">29,994</td>
<td align="right">96.8%</td>
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
<td align="left">overridden</td>
<td align="right">156</td>
<td align="right">16.1%</td>
<td align="right">162</td>
<td align="right">16.5%</td>
<td align="right">3.8%</td>
</tr>
<tr>
<td align="left">not managed dict</td>
<td align="right">292</td>
<td align="right">30.1%</td>
<td align="right">298</td>
<td align="right">30.4%</td>
<td align="right">2.1%</td>
</tr>
<tr>
<td align="left">class attr simple</td>
<td align="right">518</td>
<td align="right">53.5%</td>
<td align="right">518</td>
<td align="right">52.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not in keys</td>
<td align="right">3</td>
<td align="right">0.3%</td>
<td align="right">3</td>
<td align="right">0.3%</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

### STORE_SLICE

<details>
<summary> specialization stats for STORE_SLICE family </summary>

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
<td align="right">591</td>
<td align="right">100.0%</td>
<td align="right">591</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
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
<td align="right">878,265</td>
<td align="right">4.7%</td>
<td align="right">865,790</td>
<td align="right">4.7%</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">17,738,842</td>
<td align="right">95.3%</td>
<td align="right">17,741,716</td>
<td align="right">95.3%</td>
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
<td align="right">578</td>
<td align="right">33.8%</td>
<td align="right">576</td>
<td align="right">33.7%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">1,134</td>
<td align="right">66.2%</td>
<td align="right">1,131</td>
<td align="right">66.3%</td>
<td align="right">-0.3%</td>
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
<td align="left">dict subclass no override</td>
<td align="right">1,134</td>
<td align="right">100.0%</td>
<td align="right">1,131</td>
<td align="right">100.0%</td>
<td align="right">-0.3%</td>
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
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">442,376</td>
<td align="right">0.3%</td>
<td align="right">442,564</td>
<td align="right">0.3%</td>
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
<td align="right">153,521,906</td>
<td align="right">93.7%</td>
<td align="right">153,548,978</td>
<td align="right">93.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">9,919,278</td>
<td align="right">6.1%</td>
<td align="right">9,919,433</td>
<td align="right">6.1%</td>
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
<td align="right">11,779</td>
<td align="right">43.2%</td>
<td align="right">11,766</td>
<td align="right">43.2%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">15,472</td>
<td align="right">56.8%</td>
<td align="right">15,471</td>
<td align="right">56.8%</td>
<td align="right">-0.0%</td>
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
<td align="left">number</td>
<td align="right">1,263</td>
<td align="right">10.7%</td>
<td align="right">1,256</td>
<td align="right">10.7%</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">dict</td>
<td align="right">722</td>
<td align="right">6.1%</td>
<td align="right">719</td>
<td align="right">6.1%</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">716</td>
<td align="right">6.1%</td>
<td align="right">718</td>
<td align="right">6.1%</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">1,890</td>
<td align="right">16.0%</td>
<td align="right">1,893</td>
<td align="right">16.1%</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">6,219</td>
<td align="right">52.8%</td>
<td align="right">6,211</td>
<td align="right">52.8%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">mapping</td>
<td align="right">883</td>
<td align="right">7.5%</td>
<td align="right">883</td>
<td align="right">7.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">sequence</td>
<td align="right">84</td>
<td align="right">0.7%</td>
<td align="right">84</td>
<td align="right">0.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">float</td>
<td align="right">2</td>
<td align="right">0.0%</td>
<td align="right">2</td>
<td align="right">0.0%</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">6,193</td>
<td align="right">0.0%</td>
<td align="right">6,330</td>
<td align="right">0.0%</td>
<td align="right">2.2%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">83,515,161</td>
<td align="right">100.0%</td>
<td align="right">83,743,424</td>
<td align="right">100.0%</td>
<td align="right">0.3%</td>
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
<td align="right">302</td>
<td align="right">11.2%</td>
<td align="right">304</td>
<td align="right">11.3%</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">2,404</td>
<td align="right">88.8%</td>
<td align="right">2,392</td>
<td align="right">88.7%</td>
<td align="right">-0.5%</td>
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
<td align="left">sequence</td>
<td align="right">259</td>
<td align="right">85.8%</td>
<td align="right">261</td>
<td align="right">85.9%</td>
<td align="right">0.8%</td>
</tr>
<tr>
<td align="left">iterator</td>
<td align="right">43</td>
<td align="right">14.2%</td>
<td align="right">43</td>
<td align="right">14.1%</td>
<td align="right">0.0%</td>
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
<td align="right">70,966,652</td>
<td align="right">1.9%</td>
<td align="right">71,183,491</td>
<td align="right">2.0%</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">
Basic
<details>
<summary>ⓘ</summary>

Instructions that are not and cannot be specialized, e.g. `LOAD_FAST`.
</details>
</td>
<td align="right">2,151,438,332</td>
<td align="right">59.0%</td>
<td align="right">2,152,930,063</td>
<td align="right">59.0%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">
Specialized hits
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that complete.
</details>
</td>
<td align="right">1,253,219,886</td>
<td align="right">34.4%</td>
<td align="right">1,253,598,070</td>
<td align="right">34.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
Not specialized
<details>
<summary>ⓘ</summary>

Instructions that could be specialized but aren't, e.g. `LOAD_ATTR`, `BINARY_SLICE`.
</details>
</td>
<td align="right">171,337,147</td>
<td align="right">4.7%</td>
<td align="right">171,318,738</td>
<td align="right">4.7%</td>
<td align="right">-0.0%</td>
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
<td align="left">STORE_SUBSCR</td>
<td align="right">878,265</td>
<td align="right">0.5%</td>
<td align="right">865,790</td>
<td align="right">0.5%</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">4,593,282</td>
<td align="right">2.7%</td>
<td align="right">4,568,984</td>
<td align="right">2.7%</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">33,424,026</td>
<td align="right">19.5%</td>
<td align="right">33,457,188</td>
<td align="right">19.6%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">173,889</td>
<td align="right">0.1%</td>
<td align="right">174,009</td>
<td align="right">0.1%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">25,949,062</td>
<td align="right">15.2%</td>
<td align="right">25,934,493</td>
<td align="right">15.2%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">8,388,089</td>
<td align="right">4.9%</td>
<td align="right">8,385,280</td>
<td align="right">4.9%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">60,204,608</td>
<td align="right">35.2%</td>
<td align="right">60,207,899</td>
<td align="right">35.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">27,259,219</td>
<td align="right">15.9%</td>
<td align="right">27,258,657</td>
<td align="right">15.9%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">9,919,278</td>
<td align="right">5.8%</td>
<td align="right">9,919,433</td>
<td align="right">5.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SEND</td>
<td align="right">268,986</td>
<td align="right">0.2%</td>
<td align="right">268,986</td>
<td align="right">0.2%</td>
<td align="right">0.0%</td>
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
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">527,823</td>
<td align="right">0.7%</td>
<td align="right">516,986</td>
<td align="right">0.7%</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">11,194,051</td>
<td align="right">15.8%</td>
<td align="right">11,395,799</td>
<td align="right">16.0%</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_PROPERTY</td>
<td align="right">3,164,134</td>
<td align="right">4.5%</td>
<td align="right">3,166,693</td>
<td align="right">4.4%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_SLOT</td>
<td align="right">1,575,508</td>
<td align="right">2.2%</td>
<td align="right">1,576,318</td>
<td align="right">2.2%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">20,598,283</td>
<td align="right">29.0%</td>
<td align="right">20,605,430</td>
<td align="right">28.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_NO_DICT</td>
<td align="right">11,806,664</td>
<td align="right">16.6%</td>
<td align="right">11,809,284</td>
<td align="right">16.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">6,113,083</td>
<td align="right">8.6%</td>
<td align="right">6,114,038</td>
<td align="right">8.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">7,157,531</td>
<td align="right">10.1%</td>
<td align="right">7,157,800</td>
<td align="right">10.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_O</td>
<td align="right">2,103,561</td>
<td align="right">3.0%</td>
<td align="right">2,103,603</td>
<td align="right">3.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">5,102,566</td>
<td align="right">7.2%</td>
<td align="right">5,102,551</td>
<td align="right">7.2%</td>
<td align="right">-0.0%</td>
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
<td align="left">Calls via PyEval_EvalFrame (generator)</td>
<td align="right">22,269,026</td>
<td align="right">10.6%</td>
<td align="right">22,467,665</td>
<td align="right">10.7%</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">Calls to PyEval_EvalDefault</td>
<td align="right">97,897,887</td>
<td align="right">46.5%</td>
<td align="right">98,100,830</td>
<td align="right">46.6%</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (total)</td>
<td align="right">97,897,887</td>
<td align="right">46.5%</td>
<td align="right">98,100,830</td>
<td align="right">46.6%</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">Calls to Python functions inlined</td>
<td align="right">112,483,742</td>
<td align="right">53.5%</td>
<td align="right">112,512,329</td>
<td align="right">53.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Frames pushed</td>
<td align="right">187,867,633</td>
<td align="right">89.3%</td>
<td align="right">187,900,503</td>
<td align="right">89.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Frame objects created</td>
<td align="right">950,142</td>
<td align="right">0.5%</td>
<td align="right">950,281</td>
<td align="right">0.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (api)</td>
<td align="right">41,333,370</td>
<td align="right">19.6%</td>
<td align="right">41,336,168</td>
<td align="right">19.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function vectorcall)</td>
<td align="right">75,628,076</td>
<td align="right">35.9%</td>
<td align="right">75,632,380</td>
<td align="right">35.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (vector)</td>
<td align="right">75,628,861</td>
<td align="right">35.9%</td>
<td align="right">75,633,165</td>
<td align="right">35.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (slot)</td>
<td align="right">18,490,331</td>
<td align="right">8.8%</td>
<td align="right">18,491,070</td>
<td align="right">8.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function ex)</td>
<td align="right">9,331,774</td>
<td align="right">4.4%</td>
<td align="right">9,332,119</td>
<td align="right">4.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (legacy)</td>
<td align="right">652</td>
<td align="right">0.0%</td>
<td align="right">652</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (build class)</td>
<td align="right">133</td>
<td align="right">0.0%</td>
<td align="right">133</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (method)</td>
<td align="right">348</td>
<td align="right">0.0%</td>
<td align="right">348</td>
<td align="right">0.0%</td>
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
<td align="left">Method cache misses</td>
<td align="right">2,163,892</td>
<td align="right"></td>
<td align="right">2,456,879</td>
<td align="right"></td>
<td align="right">13.5%</td>
</tr>
<tr>
<td align="left">Method cache collisions</td>
<td align="right">2,915,803</td>
<td align="right"></td>
<td align="right">3,304,641</td>
<td align="right"></td>
<td align="right">13.3%</td>
</tr>
<tr>
<td align="left">Method cache dunder misses</td>
<td align="right">753,446</td>
<td align="right"></td>
<td align="right">849,436</td>
<td align="right"></td>
<td align="right">12.7%</td>
</tr>
<tr>
<td align="left">Allocations to 4 kbytes</td>
<td align="right">762,151</td>
<td align="right">0.1%</td>
<td align="right">766,864</td>
<td align="right">0.1%</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">Immortal decrefs</td>
<td align="right">1,279,245,576</td>
<td align="right">22.2%</td>
<td align="right">1,274,176,687</td>
<td align="right">22.2%</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">Method cache hits</td>
<td align="right">147,921,881</td>
<td align="right"></td>
<td align="right">147,649,358</td>
<td align="right"></td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Mortal increfs</td>
<td align="right">1,662,447,467</td>
<td align="right">33.7%</td>
<td align="right">1,665,376,722</td>
<td align="right">33.7%</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">Mortal decrefs</td>
<td align="right">1,761,121,336</td>
<td align="right">30.6%</td>
<td align="right">1,763,528,285</td>
<td align="right">30.7%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Interpreter immortal increfs</td>
<td align="right">440,938,681</td>
<td align="right">8.9%</td>
<td align="right">441,434,954</td>
<td align="right">8.9%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Immortal increfs</td>
<td align="right">1,177,955,862</td>
<td align="right">23.9%</td>
<td align="right">1,179,167,031</td>
<td align="right">23.9%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Interpreter immortal decrefs</td>
<td align="right">704,527,571</td>
<td align="right">12.2%</td>
<td align="right">705,173,142</td>
<td align="right">12.3%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Interpreter mortal decrefs</td>
<td align="right">2,006,472,461</td>
<td align="right">34.9%</td>
<td align="right">2,007,653,415</td>
<td align="right">34.9%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Allocations</td>
<td align="right">232,842,115</td>
<td align="right">45.3%</td>
<td align="right">232,934,801</td>
<td align="right">45.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations to 512 bytes</td>
<td align="right">232,071,334</td>
<td align="right">45.1%</td>
<td align="right">232,159,307</td>
<td align="right">45.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Frees</td>
<td align="right">245,488,772</td>
<td align="right"></td>
<td align="right">245,581,516</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Interpreter mortal increfs</td>
<td align="right">1,650,756,753</td>
<td align="right">33.5%</td>
<td align="right">1,651,292,251</td>
<td align="right">33.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Method cache dunder hits</td>
<td align="right">265,538,321</td>
<td align="right"></td>
<td align="right">265,453,623</td>
<td align="right"></td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Inline values</td>
<td align="right">866,058</td>
<td align="right"></td>
<td align="right">866,284</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Frees to freelist</td>
<td align="right">281,724,324</td>
<td align="right"></td>
<td align="right">281,761,601</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations from freelist</td>
<td align="right">281,693,141</td>
<td align="right">54.7%</td>
<td align="right">281,730,412</td>
<td align="right">54.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations over 4 kbytes</td>
<td align="right">8,630</td>
<td align="right">0.0%</td>
<td align="right">8,630</td>
<td align="right">0.0%</td>
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
Inner loop found
<details>
<summary>ⓘ</summary>

A trace is truncated because it has an inner loop
</details>
</td>
<td align="right">222</td>
<td align="right">1.3%</td>
<td align="right">207</td>
<td align="right">1.2%</td>
<td align="right">-6.8%</td>
</tr>
<tr>
<td align="left">
Low confidence
<details>
<summary>ⓘ</summary>

A trace is abandoned because the likelihood of the jump to top being taken is too low.
</details>
</td>
<td align="right">238</td>
<td align="right">1.3%</td>
<td align="right">235</td>
<td align="right">1.3%</td>
<td align="right">-1.3%</td>
</tr>
<tr>
<td align="left">
Uops executed
<details>
<summary>ⓘ</summary>

The total number of uops (micro-operations) that were executed
</details>
</td>
<td align="right">2,683,435,517</td>
<td align="right">1,957.4%</td>
<td align="right">2,713,937,558</td>
<td align="right">1,962.0%</td>
<td align="right">1.1%</td>
</tr>
<tr>
<td align="left">
Traces executed
<details>
<summary>ⓘ</summary>

The number of traces that were executed
</details>
</td>
<td align="right">137,095,164</td>
<td align="right"></td>
<td align="right">138,325,782</td>
<td align="right"></td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">
Trace too short
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it it too short.
</details>
</td>
<td align="right">10,633</td>
<td align="right">60.1%</td>
<td align="right">10,679</td>
<td align="right">60.2%</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">
Optimization attempts
<details>
<summary>ⓘ</summary>

The number of times a potential trace is identified.  Specifically, this occurs in the JUMP BACKWARD instruction when the counter reaches a threshold.
</details>
</td>
<td align="right">17,694</td>
<td align="right"></td>
<td align="right">17,731</td>
<td align="right"></td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">
Traces created
<details>
<summary>ⓘ</summary>

The number of traces that were successfully created.
</details>
</td>
<td align="right">7,061</td>
<td align="right">39.9%</td>
<td align="right">7,052</td>
<td align="right">39.8%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">
Trace stack underflow
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it pops more frames than it pushes.
</details>
</td>
<td align="right">10,843</td>
<td align="right">61.3%</td>
<td align="right">10,847</td>
<td align="right">61.2%</td>
<td align="right">0.0%</td>
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
Optimizer successes
<details>
<summary>ⓘ</summary>

The number of traces that were successfully optimized.
</details>
</td>
<td align="right">6,973</td>
<td align="right">98.8%</td>
<td align="right">6,964</td>
<td align="right">98.8%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">
Optimizer attempts
<details>
<summary>ⓘ</summary>

The number of times the trace optimizer (_Py_uop_analyze_and_optimize) was run.
</details>
</td>
<td align="right">7,061</td>
<td align="right"></td>
<td align="right">7,052</td>
<td align="right"></td>
<td align="right">-0.1%</td>
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
<td align="right">975</td>
<td align="right">13.8%</td>
<td align="right">978</td>
<td align="right">13.9%</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">1,141</td>
<td align="right">16.2%</td>
<td align="right">1,145</td>
<td align="right">16.2%</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">2,652</td>
<td align="right">37.6%</td>
<td align="right">2,511</td>
<td align="right">35.6%</td>
<td align="right">-5.3%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">1,491</td>
<td align="right">21.1%</td>
<td align="right">1,634</td>
<td align="right">23.2%</td>
<td align="right">9.6%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">781</td>
<td align="right">11.1%</td>
<td align="right">763</td>
<td align="right">10.8%</td>
<td align="right">-2.3%</td>
</tr>
<tr>
<td align="left"><= 256</td>
<td align="right">21</td>
<td align="right">0.3%</td>
<td align="right">21</td>
<td align="right">0.3%</td>
<td align="right">0.0%</td>
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
<td align="right">128</td>
<td align="right">1.8%</td>
<td align="right">131</td>
<td align="right">1.9%</td>
<td align="right">2.3%</td>
</tr>
<tr>
<td align="left"><= 8</td>
<td align="right">1,062</td>
<td align="right">15.0%</td>
<td align="right">1,062</td>
<td align="right">15.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">1,479</td>
<td align="right">20.9%</td>
<td align="right">1,487</td>
<td align="right">21.1%</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">3,091</td>
<td align="right">43.8%</td>
<td align="right">3,071</td>
<td align="right">43.5%</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">1,087</td>
<td align="right">15.4%</td>
<td align="right">1,023</td>
<td align="right">14.5%</td>
<td align="right">-5.9%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">126</td>
<td align="right">1.8%</td>
<td align="right">169</td>
<td align="right">2.4%</td>
<td align="right">34.1%</td>
</tr>
<tr>
<td align="left"><= 256</td>
<td align="right"></td>
<td align="right"></td>
<td align="right">21</td>
<td align="right">0.3%</td>
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
<td align="left">_DEOPT</td>
<td align="right">513</td>
<td align="right">1,409</td>
<td align="right">174.7%</td>
</tr>
<tr>
<td align="left">_POP_TOP</td>
<td align="right">14,399,658</td>
<td align="right">15,696,364</td>
<td align="right">9.0%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">12,588,804</td>
<td align="right">13,374,103</td>
<td align="right">6.2%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_INLINE</td>
<td align="right">98,568</td>
<td align="right">100,971</td>
<td align="right">2.4%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">8,542,742</td>
<td align="right">8,713,946</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">_GUARD_DORV_VALUES_INST_ATTR_FROM_DICT</td>
<td align="right">8,543,370</td>
<td align="right">8,714,574</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">_GUARD_KEYS_VERSION</td>
<td align="right">8,543,370</td>
<td align="right">8,714,574</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">_LOAD_DEREF</td>
<td align="right">13,059,417</td>
<td align="right">13,216,113</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">_CALL_LIST_APPEND</td>
<td align="right">1,352,292</td>
<td align="right">1,337,673</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">_EXIT_TRACE</td>
<td align="right">122,903,165</td>
<td align="right">124,149,598</td>
<td align="right">1.0%</td>
</tr>
<tr>
<td align="left">_RESUME_CHECK</td>
<td align="right">1,643,591</td>
<td align="right">1,627,286</td>
<td align="right">-1.0%</td>
</tr>
<tr>
<td align="left">_START_EXECUTOR</td>
<td align="right">137,095,164</td>
<td align="right">138,325,782</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR</td>
<td align="right">1,704,611</td>
<td align="right">1,717,520</td>
<td align="right">0.8%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_TRUE_POP</td>
<td align="right">23,627,089</td>
<td align="right">23,789,934</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">_MAKE_WARM</td>
<td align="right">179,642,171</td>
<td align="right">180,746,634</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_2</td>
<td align="right">39,096,939</td>
<td align="right">39,296,355</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">40,237,586</td>
<td align="right">40,437,485</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_1</td>
<td align="right">42,369,707</td>
<td align="right">42,562,104</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_SET_FUNCTION_ATTRIBUTE</td>
<td align="right">4,643,619</td>
<td align="right">4,664,025</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_7</td>
<td align="right">12,426,717</td>
<td align="right">12,372,890</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_LIST_INT</td>
<td align="right">4,773,144</td>
<td align="right">4,793,550</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">_SET_IP</td>
<td align="right">276,960,849</td>
<td align="right">278,109,895</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_6</td>
<td align="right">8,249,744</td>
<td align="right">8,218,432</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_1</td>
<td align="right">64,650,025</td>
<td align="right">64,888,240</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_6</td>
<td align="right">8,842,231</td>
<td align="right">8,810,850</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_2</td>
<td align="right">4,883,159</td>
<td align="right">4,866,158</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_LIST</td>
<td align="right">34,199,917</td>
<td align="right">34,318,296</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">_RETURN_GENERATOR</td>
<td align="right">5,907,444</td>
<td align="right">5,927,867</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">_MAKE_FUNCTION</td>
<td align="right">5,941,674</td>
<td align="right">5,962,097</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE_OPERAND</td>
<td align="right">5,941,674</td>
<td align="right">5,962,097</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_7</td>
<td align="right">8,941,530</td>
<td align="right">8,911,030</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_BUILD_LIST</td>
<td align="right">900,640</td>
<td align="right">897,643</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_0</td>
<td align="right">6,452,771</td>
<td align="right">6,473,194</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">_STORE_FAST</td>
<td align="right">27,494,220</td>
<td align="right">27,579,294</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">_ERROR_POP_N</td>
<td align="right">39,083</td>
<td align="right">38,965</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY_AND_SET_IP</td>
<td align="right">67,483,833</td>
<td align="right">67,685,789</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">_JUMP_TO_TOP</td>
<td align="right">42,547,007</td>
<td align="right">42,420,852</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_FOR_ITER_TIER_TWO</td>
<td align="right">48,353,851</td>
<td align="right">48,496,794</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_FALSE_POP</td>
<td align="right">44,442,979</td>
<td align="right">44,314,088</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP</td>
<td align="right">4,463,454</td>
<td align="right">4,475,244</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_TUPLE</td>
<td align="right">14,608,259</td>
<td align="right">14,641,119</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY</td>
<td align="right">228,512,929</td>
<td align="right">229,005,517</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_GET_ITER</td>
<td align="right">8,348,857</td>
<td align="right">8,366,284</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW</td>
<td align="right">12,831,941</td>
<td align="right">12,858,498</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_GUARD_TYPE_VERSION</td>
<td align="right">64,935,248</td>
<td align="right">65,064,640</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP</td>
<td align="right">12,779,492</td>
<td align="right">12,804,797</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_O</td>
<td align="right">17,359,689</td>
<td align="right">17,392,570</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST</td>
<td align="right">28,106,747</td>
<td align="right">28,156,797</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_BUILD_TUPLE</td>
<td align="right">11,996,845</td>
<td align="right">12,017,158</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP_DICT</td>
<td align="right">17,744,994</td>
<td align="right">17,716,053</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_LIST</td>
<td align="right">27,180,926</td>
<td align="right">27,224,358</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_NOT_NONE_POP</td>
<td align="right">7,730,142</td>
<td align="right">7,742,254</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_LIST</td>
<td align="right">33,040,955</td>
<td align="right">33,091,328</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_5</td>
<td align="right">2,287,928</td>
<td align="right">2,284,861</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_0</td>
<td align="right">50,661,334</td>
<td align="right">50,726,979</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE</td>
<td align="right">12,182,329</td>
<td align="right">12,166,663</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_WITH_NULL</td>
<td align="right">18,160,767</td>
<td align="right">18,183,972</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">11,417,648</td>
<td align="right">11,403,434</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_DYNAMIC_EXIT</td>
<td align="right">14,152,403</td>
<td align="right">14,135,810</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_CHECK_PERIODIC</td>
<td align="right">133,143,696</td>
<td align="right">133,294,923</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_4</td>
<td align="right">11,607,506</td>
<td align="right">11,620,006</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_BOOL</td>
<td align="right">19,391,560</td>
<td align="right">19,412,335</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_SLOT_0</td>
<td align="right">13,804,915</td>
<td align="right">13,790,443</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_TIER2_RESUME_CHECK</td>
<td align="right">26,584,199</td>
<td align="right">26,609,161</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR</td>
<td align="right">10,154,998</td>
<td align="right">10,163,772</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_2</td>
<td align="right">58,008,172</td>
<td align="right">58,056,296</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_COPY_FREE_VARS</td>
<td align="right">6,252,980</td>
<td align="right">6,257,081</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_PUSH_NULL</td>
<td align="right">22,801,473</td>
<td align="right">22,815,268</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE</td>
<td align="right">31,941,461</td>
<td align="right">31,958,884</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION</td>
<td align="right">38,157,876</td>
<td align="right">38,177,809</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_NONE_POP</td>
<td align="right">15,786,946</td>
<td align="right">15,794,391</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_3</td>
<td align="right">28,195,560</td>
<td align="right">28,183,575</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_4</td>
<td align="right">27,632,865</td>
<td align="right">27,643,426</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_LIST</td>
<td align="right">320,291</td>
<td align="right">320,406</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_TUPLE</td>
<td align="right">13,908,419</td>
<td align="right">13,912,675</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CHECK_ATTR_CLASS</td>
<td align="right">13,188,059</td>
<td align="right">13,184,783</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_CLASS_0</td>
<td align="right">13,188,059</td>
<td align="right">13,184,783</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_MAP_ADD</td>
<td align="right">2,513,454</td>
<td align="right">2,513,982</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_RANGE</td>
<td align="right">6,503,676</td>
<td align="right">6,505,007</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_RANGE</td>
<td align="right">6,908,098</td>
<td align="right">6,909,509</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_RANGE</td>
<td align="right">6,908,098</td>
<td align="right">6,909,509</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CHECK_CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">6,524,653</td>
<td align="right">6,525,984</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">6,524,653</td>
<td align="right">6,525,984</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_ADD_INT</td>
<td align="right">6,558,336</td>
<td align="right">6,559,667</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_1</td>
<td align="right">6,746,288</td>
<td align="right">6,747,619</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_PUSH_FRAME</td>
<td align="right">20,094,077</td>
<td align="right">20,097,907</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_SAVE_RETURN_OFFSET</td>
<td align="right">20,094,077</td>
<td align="right">20,097,907</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_EXACT_ARGS</td>
<td align="right">18,027,299</td>
<td align="right">18,029,653</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION</td>
<td align="right">18,589,175</td>
<td align="right">18,591,529</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_INT</td>
<td align="right">10,047,485</td>
<td align="right">10,048,652</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_INT</td>
<td align="right">10,331,042</td>
<td align="right">10,332,209</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_3</td>
<td align="right">19,150,211</td>
<td align="right">19,152,329</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_STR</td>
<td align="right">416,130</td>
<td align="right">416,172</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_UNICODE</td>
<td align="right">416,130</td>
<td align="right">416,172</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">7,844,090</td>
<td align="right">7,844,591</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_1</td>
<td align="right">6,787,887</td>
<td align="right">6,788,295</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CALL_ISINSTANCE</td>
<td align="right">9,164,703</td>
<td align="right">9,165,066</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR</td>
<td align="right">17,912,123</td>
<td align="right">17,912,683</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_BINARY_OP</td>
<td align="right">651,742</td>
<td align="right">651,732</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_GLOBALS_VERSION_PUSH_KEYS</td>
<td align="right">1,263,825</td>
<td align="right">1,263,842</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_GLOBAL_MODULE_FROM_KEYS</td>
<td align="right">1,263,825</td>
<td align="right">1,263,842</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CALL_NON_PY_GENERAL</td>
<td align="right">1,393,789</td>
<td align="right">1,393,806</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CHECK_IS_NOT_PY_CALLABLE</td>
<td align="right">1,393,789</td>
<td align="right">1,393,806</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LIST_APPEND</td>
<td align="right">1,828,461</td>
<td align="right">1,828,481</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_FAST</td>
<td align="right">3,257,538</td>
<td align="right">3,257,571</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CALL_TYPE_1</td>
<td align="right">1,747,665</td>
<td align="right">1,747,682</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_IS_OP</td>
<td align="right">2,451,929</td>
<td align="right">2,451,950</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_5</td>
<td align="right">2,158,187</td>
<td align="right">2,158,205</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_TUPLE</td>
<td align="right">8,402,156</td>
<td align="right">8,402,224</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW_WITH_NULL</td>
<td align="right">1,988,318</td>
<td align="right">1,988,334</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_CLASS</td>
<td align="right">188,164</td>
<td align="right">188,163</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_SWAP</td>
<td align="right">5,190,254</td>
<td align="right">5,190,273</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_AND_CLEAR</td>
<td align="right">1,285,622</td>
<td align="right">1,285,620</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_NONDESCRIPTOR_NO_DICT</td>
<td align="right">3,163,771</td>
<td align="right">3,163,772</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_DICT_MERGE</td>
<td align="right">5,512,338</td>
<td align="right">5,512,339</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_BUILD_MAP</td>
<td align="right">5,632,290</td>
<td align="right">5,632,291</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_PROPERTY_FRAME</td>
<td align="right">1,382,788</td>
<td align="right">1,382,788</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">630,363</td>
<td align="right">630,363</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_PY_FRAME_GENERAL</td>
<td align="right">563,070</td>
<td align="right">563,070</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_STORE_DEREF</td>
<td align="right">559,109</td>
<td align="right">559,109</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_NOS_INT</td>
<td align="right">389,868</td>
<td align="right">389,868</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CALL_LEN</td>
<td align="right">245,074</td>
<td align="right">245,074</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_INT</td>
<td align="right">174,242</td>
<td align="right">174,242</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_0</td>
<td align="right">159,560</td>
<td align="right">159,560</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_COPY</td>
<td align="right">144,184</td>
<td align="right">144,184</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR_LIST_INT</td>
<td align="right">73,352</td>
<td align="right">73,352</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBTRACT_INT</td>
<td align="right">52,447</td>
<td align="right">52,447</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_DICT</td>
<td align="right">28,820</td>
<td align="right">28,820</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CALL_TUPLE_1</td>
<td align="right">26,932</td>
<td align="right">26,932</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_KW</td>
<td align="right">24,402</td>
<td align="right">24,402</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_PY_FRAME_KW</td>
<td align="right">24,402</td>
<td align="right">24,402</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_TOS_INT</td>
<td align="right">18,228</td>
<td align="right">18,228</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_UNARY_NEGATIVE</td>
<td align="right">5,166</td>
<td align="right">5,166</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_STR</td>
<td align="right">744</td>
<td align="right">744</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">628</td>
<td align="right">628</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_SWAP_2</td>
<td align="right"></td>
<td align="right">7,263,846</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_POP_TOP_INT</td>
<td align="right"></td>
<td align="right">6,620,818</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_POP_TOP_IMMORTAL</td>
<td align="right"></td>
<td align="right">6,603,410</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_POP_TOP_UNICODE</td>
<td align="right"></td>
<td align="right">8,922</td>
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
<td align="left">CALL</td>
<td align="right">755</td>
<td align="right">797</td>
<td align="right">5.6%</td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">1,792</td>
<td align="right">1,792</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SEND</td>
<td align="right">21</td>
<td align="right">21</td>
<td align="right">0.0%</td>
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
<td align="right">84</td>
<td align="right">84</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

---
Stats gathered on: 2024-12-12
