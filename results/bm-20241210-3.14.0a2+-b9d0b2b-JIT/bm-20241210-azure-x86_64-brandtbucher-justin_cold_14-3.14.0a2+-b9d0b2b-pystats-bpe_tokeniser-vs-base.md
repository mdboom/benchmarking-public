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
<td align="left">COPY</td>
<td align="right">949,488</td>
<td align="right">703,927,718</td>
<td align="right">74,037.6%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">474,885</td>
<td align="right">352,049,825</td>
<td align="right">74,033.7%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">621,604</td>
<td align="right">348,038,011</td>
<td align="right">55,890.3%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_INT</td>
<td align="right">1,891,666</td>
<td align="right">974,020,615</td>
<td align="right">51,390.1%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_FALSE</td>
<td align="right">2,614,354</td>
<td align="right">1,322,074,887</td>
<td align="right">50,469.8%</td>
</tr>
<tr>
<td align="left">CALL_LEN</td>
<td align="right">1,990,289</td>
<td align="right">974,119,238</td>
<td align="right">48,843.6%</td>
</tr>
<tr>
<td align="left">BUILD_TUPLE</td>
<td align="right">720,229</td>
<td align="right">348,051,813</td>
<td align="right">48,225.2%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_INT</td>
<td align="right">2,671,232</td>
<td align="right">974,081,414</td>
<td align="right">36,365.6%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD</td>
<td align="right">3,804,824</td>
<td align="right">1,331,870,376</td>
<td align="right">34,904.8%</td>
</tr>
<tr>
<td align="left">FOR_ITER_LIST</td>
<td align="right">1,825,114</td>
<td align="right">630,247,028</td>
<td align="right">34,431.9%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_BUILTIN</td>
<td align="right">4,515,512</td>
<td align="right">1,292,902,256</td>
<td align="right">28,532.5%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_LIST_INT</td>
<td align="right">4,773,664</td>
<td align="right">1,355,386,108</td>
<td align="right">28,293.0%</td>
</tr>
<tr>
<td align="left">LOAD_CONST</td>
<td align="right">2,398,225</td>
<td align="right">633,866,503</td>
<td align="right">26,330.7%</td>
</tr>
<tr>
<td align="left">CALL_LIST_APPEND</td>
<td align="right">3,859,670</td>
<td align="right">973,932,480</td>
<td align="right">25,133.6%</td>
</tr>
<tr>
<td align="left">SWAP</td>
<td align="right">3,139,968</td>
<td align="right">705,481,352</td>
<td align="right">22,367.8%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">3,050,585</td>
<td align="right">671,202,825</td>
<td align="right">21,902.4%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_INT</td>
<td align="right">4,917,196</td>
<td align="right">1,048,026,696</td>
<td align="right">21,213.5%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_LOAD_FAST</td>
<td align="right">6,656,246</td>
<td align="right">1,355,601,059</td>
<td align="right">20,265.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">5,855,019</td>
<td align="right">974,779,402</td>
<td align="right">16,548.6%</td>
</tr>
<tr>
<td align="left">CALL_NON_PY_GENERAL</td>
<td align="right">1,947,323</td>
<td align="right">318,772,181</td>
<td align="right">16,269.8%</td>
</tr>
<tr>
<td align="left">STORE_FAST</td>
<td align="right">13,539,682</td>
<td align="right">1,958,961,955</td>
<td align="right">14,368.3%</td>
</tr>
<tr>
<td align="left">GET_ITER</td>
<td align="right">2,862,619</td>
<td align="right">317,916,505</td>
<td align="right">11,005.8%</td>
</tr>
<tr>
<td align="left">BUILD_LIST</td>
<td align="right">3,278,703</td>
<td align="right">315,592,888</td>
<td align="right">9,525.5%</td>
</tr>
<tr>
<td align="left">LOAD_FAST</td>
<td align="right">148,511,651</td>
<td align="right">5,038,775,881</td>
<td align="right">3,292.8%</td>
</tr>
<tr>
<td align="left">LOAD_SMALL_INT</td>
<td align="right">125,512,888</td>
<td align="right">2,451,266,662</td>
<td align="right">1,853.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">118,460,288</td>
<td align="right">1,101,766,790</td>
<td align="right">830.1%</td>
</tr>
<tr>
<td align="left">LOAD_DEREF</td>
<td align="right">116,755,328</td>
<td align="right">468,244,443</td>
<td align="right">301.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_CLASS</td>
<td align="right">576,208</td>
<td align="right">9,145</td>
<td align="right">-98.4%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">1,056,280</td>
<td align="right">16,843</td>
<td align="right">-98.4%</td>
</tr>
<tr>
<td align="left">NOP</td>
<td align="right">577,339</td>
<td align="right">10,276</td>
<td align="right">-98.2%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">263,465</td>
<td align="right">5,543</td>
<td align="right">-97.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">263,606</td>
<td align="right">5,684</td>
<td align="right">-97.8%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_TRUE</td>
<td align="right">735,503</td>
<td align="right">16,736</td>
<td align="right">-97.7%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NONE</td>
<td align="right">1,265,824</td>
<td align="right">68,194</td>
<td align="right">-94.6%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NOT_NONE</td>
<td align="right">3,369,182</td>
<td align="right">182,747</td>
<td align="right">-94.6%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_TUPLE_INT</td>
<td align="right">2,210,369</td>
<td align="right">131,495</td>
<td align="right">-94.1%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">4,162,819</td>
<td align="right">275,845</td>
<td align="right">-93.4%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">2,037,568</td>
<td align="right">139,840</td>
<td align="right">-93.1%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">1,121,769</td>
<td align="right">82,332</td>
<td align="right">-92.7%</td>
</tr>
<tr>
<td align="left">STORE_FAST_STORE_FAST</td>
<td align="right">1,121,886</td>
<td align="right">82,449</td>
<td align="right">-92.7%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_IMMORTAL</td>
<td align="right">3,292,565</td>
<td align="right">260,711</td>
<td align="right">-92.1%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_MODULE</td>
<td align="right">314,852</td>
<td align="right">56,930</td>
<td align="right">-81.9%</td>
</tr>
<tr>
<td align="left">ENTER_EXECUTOR</td>
<td align="right">10,373,936</td>
<td align="right">2,954,006</td>
<td align="right">-71.5%</td>
</tr>
<tr>
<td align="left">POP_TOP</td>
<td align="right">2,900,254</td>
<td align="right">870,222</td>
<td align="right">-70.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_DICT</td>
<td align="right">514,446</td>
<td align="right">157,215</td>
<td align="right">-69.4%</td>
</tr>
<tr>
<td align="left">JUMP_FORWARD</td>
<td align="right">413,695</td>
<td align="right">155,311</td>
<td align="right">-62.5%</td>
</tr>
<tr>
<td align="left">LIST_APPEND</td>
<td align="right">1,774,592</td>
<td align="right">2,551,487</td>
<td align="right">43.8%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_AND_CLEAR</td>
<td align="right">938,240</td>
<td align="right">570,866</td>
<td align="right">-39.2%</td>
</tr>
<tr>
<td align="left">STORE_FAST_LOAD_FAST</td>
<td align="right">778,140</td>
<td align="right">569,841</td>
<td align="right">-26.8%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST_WITH_KEYWORDS</td>
<td align="right">524,604</td>
<td align="right">415,614</td>
<td align="right">-20.8%</td>
</tr>
<tr>
<td align="left">RESUME_CHECK</td>
<td align="right">232,728,697</td>
<td align="right">232,470,775</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">RETURN_VALUE</td>
<td align="right">232,879,830</td>
<td align="right">232,879,830</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">INTERPRETER_EXIT</td>
<td align="right">232,463,659</td>
<td align="right">232,463,659</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COPY_FREE_VARS</td>
<td align="right">116,280,384</td>
<td align="right">116,280,384</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">413,950</td>
<td align="right">413,950</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">PUSH_NULL</td>
<td align="right">100,148</td>
<td align="right">100,148</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">EXTENDED_ARG</td>
<td align="right">98,658</td>
<td align="right">98,658</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_DICT</td>
<td align="right">65,537</td>
<td align="right">65,537</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">MAP_ADD</td>
<td align="right">65,536</td>
<td align="right">65,536</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_MODULE</td>
<td align="right">50,624</td>
<td align="right">50,624</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">50,535</td>
<td align="right">50,535</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">49,536</td>
<td align="right">49,536</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">49,395</td>
<td align="right">49,395</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW_NON_PY</td>
<td align="right">49,342</td>
<td align="right">49,342</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_MAP</td>
<td align="right">49,282</td>
<td align="right">49,282</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">MAKE_FUNCTION</td>
<td align="right">49,280</td>
<td align="right">49,280</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_FUNCTION_ATTRIBUTE</td>
<td align="right">49,280</td>
<td align="right">49,280</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_DEREF</td>
<td align="right">49,216</td>
<td align="right">49,216</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DICT_MERGE</td>
<td align="right">49,152</td>
<td align="right">49,152</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_METHOD</td>
<td align="right">49,151</td>
<td align="right">49,151</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">FOR_ITER_RANGE</td>
<td align="right">16,722</td>
<td align="right">16,722</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_STR</td>
<td align="right">2,765</td>
<td align="right">2,765</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_STR</td>
<td align="right">2,313</td>
<td align="right">2,313</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_BOOL</td>
<td align="right">1,386</td>
<td align="right">1,386</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_ISINSTANCE</td>
<td align="right">983</td>
<td align="right">983</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS</td>
<td align="right">961</td>
<td align="right">961</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_SLOT</td>
<td align="right">956</td>
<td align="right">956</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">900</td>
<td align="right">900</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">835</td>
<td align="right">835</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">797</td>
<td align="right">797</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">IS_OP</td>
<td align="right">750</td>
<td align="right">750</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">677</td>
<td align="right">677</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">643</td>
<td align="right">643</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">480</td>
<td align="right">480</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_PROPERTY</td>
<td align="right">446</td>
<td align="right">446</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL</td>
<td align="right">410</td>
<td align="right">410</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_UNICODE</td>
<td align="right">385</td>
<td align="right">385</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_PY_GENERAL</td>
<td align="right">380</td>
<td align="right">380</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">368</td>
<td align="right">368</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_TYPE_1</td>
<td align="right">322</td>
<td align="right">322</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">YIELD_VALUE</td>
<td align="right">320</td>
<td align="right">320</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_NO_DICT</td>
<td align="right">320</td>
<td align="right">320</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">262</td>
<td align="right">262</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TUPLE</td>
<td align="right">257</td>
<td align="right">257</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_O</td>
<td align="right">235</td>
<td align="right">235</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CHECK_EXC_MATCH</td>
<td align="right">195</td>
<td align="right">195</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">POP_EXCEPT</td>
<td align="right">195</td>
<td align="right">195</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">PUSH_EXC_INFO</td>
<td align="right">195</td>
<td align="right">195</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">MAKE_CELL</td>
<td align="right">192</td>
<td align="right">192</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">183</td>
<td align="right">183</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_LIST</td>
<td align="right">164</td>
<td align="right">164</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_NONE</td>
<td align="right">143</td>
<td align="right">143</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_INPLACE_ADD_UNICODE</td>
<td align="right">134</td>
<td align="right">134</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_INT</td>
<td align="right">131</td>
<td align="right">131</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SPECIAL</td>
<td align="right">128</td>
<td align="right">128</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW_PY</td>
<td align="right">126</td>
<td align="right">126</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_STR_INT</td>
<td align="right">118</td>
<td align="right">118</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_SET</td>
<td align="right">116</td>
<td align="right">116</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW</td>
<td align="right">113</td>
<td align="right">113</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">94</td>
<td align="right">94</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_GETITEM</td>
<td align="right">83</td>
<td align="right">83</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST</td>
<td align="right">66</td>
<td align="right">66</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_CHECK</td>
<td align="right">65</td>
<td align="right">65</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RETURN_GENERATOR</td>
<td align="right">64</td>
<td align="right">64</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_INTRINSIC_1</td>
<td align="right">64</td>
<td align="right">64</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LIST_EXTEND</td>
<td align="right">64</td>
<td align="right">64</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_STR_1</td>
<td align="right">64</td>
<td align="right">64</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_FLOAT</td>
<td align="right">63</td>
<td align="right">63</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_LIST_INT</td>
<td align="right">40</td>
<td align="right">40</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE</td>
<td align="right">26</td>
<td align="right">26</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RESUME</td>
<td align="right">26</td>
<td align="right">26</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNARY_NOT</td>
<td align="right">25</td>
<td align="right">25</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">EXIT_INIT_CHECK</td>
<td align="right">24</td>
<td align="right">24</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_ALLOC_AND_ENTER_INIT</td>
<td align="right">24</td>
<td align="right">24</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_MULTIPLY_INT</td>
<td align="right">11</td>
<td align="right">11</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_DICT</td>
<td align="right">10</td>
<td align="right">10</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS_WITH_METACLASS_CHECK</td>
<td align="right">3</td>
<td align="right">3</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR</td>
<td align="right">2</td>
<td align="right">2</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_TUPLE_1</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">4,161,636</td>
<td align="right">0.2%</td>
<td align="right">275,607</td>
<td align="right">0.0%</td>
<td align="right">-93.4%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">2,050,544,419</td>
<td align="right">99.8%</td>
<td align="right">2,050,544,419</td>
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
<td align="left">Failure</td>
<td align="right">1,154</td>
<td align="right">97.5%</td>
<td align="right">209</td>
<td align="right">87.8%</td>
<td align="right">-81.9%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">29</td>
<td align="right">2.5%</td>
<td align="right">29</td>
<td align="right">12.2%</td>
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
<td align="left">add other</td>
<td align="right">1,111</td>
<td align="right">96.3%</td>
<td align="right">166</td>
<td align="right">79.4%</td>
<td align="right">-85.1%</td>
</tr>
<tr>
<td align="left">true divide different types</td>
<td align="right">42</td>
<td align="right">3.6%</td>
<td align="right">42</td>
<td align="right">20.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">and int</td>
<td align="right">1</td>
<td align="right">0.1%</td>
<td align="right">1</td>
<td align="right">0.5%</td>
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
<td align="right">2,037,568</td>
<td align="right">100.0%</td>
<td align="right">139,840</td>
<td align="right">100.0%</td>
<td align="right">-93.1%</td>
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
<td align="right">118,431,269</td>
<td align="right">7.9%</td>
<td align="right">1,101,497,652</td>
<td align="right">44.2%</td>
<td align="right">830.1%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">1,388,646,210</td>
<td align="right">92.1%</td>
<td align="right">1,388,646,210</td>
<td align="right">55.8%</td>
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
<td align="right">22</td>
<td align="right">0.0%</td>
<td align="right">22</td>
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
<td align="right">28,965</td>
<td align="right">99.8%</td>
<td align="right">269,084</td>
<td align="right">100.0%</td>
<td align="right">829.0%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">54</td>
<td align="right">0.2%</td>
<td align="right">54</td>
<td align="right">0.0%</td>
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
<td align="right">445</td>
<td align="right">1.5%</td>
<td align="right">154,739</td>
<td align="right">57.5%</td>
<td align="right">34,672.8%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">28,520</td>
<td align="right">98.5%</td>
<td align="right">114,345</td>
<td align="right">42.5%</td>
<td align="right">300.9%</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">59</td>
<td align="right">0.0%</td>
<td align="right">59</td>
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
<td align="right">1,984,339,835</td>
<td align="right">100.0%</td>
<td align="right">1,984,339,835</td>
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
<td align="right">66</td>
<td align="right">0.0%</td>
<td align="right">66</td>
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
<td align="right">845</td>
<td align="right">100.0%</td>
<td align="right">845</td>
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
<td align="right">6</td>
<td align="right">5.3%</td>
<td align="right">6</td>
<td align="right">5.3%</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">621,398</td>
<td align="right">0.1%</td>
<td align="right">347,952,982</td>
<td align="right">26.0%</td>
<td align="right">55,895.2%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">989,880,949</td>
<td align="right">99.9%</td>
<td align="right">989,880,949</td>
<td align="right">74.0%</td>
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
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">1</td>
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
<td align="right">161</td>
<td align="right">77.8%</td>
<td align="right">84,984</td>
<td align="right">99.9%</td>
<td align="right">52,685.1%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">46</td>
<td align="right">22.2%</td>
<td align="right">46</td>
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
<td align="left">tuple</td>
<td align="right">159</td>
<td align="right">98.8%</td>
<td align="right">84,982</td>
<td align="right">100.0%</td>
<td align="right">53,347.8%</td>
</tr>
<tr>
<td align="left">different types</td>
<td align="right">2</td>
<td align="right">1.2%</td>
<td align="right">2</td>
<td align="right">0.0%</td>
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
<td align="right">93</td>
<td align="right">42.3%</td>
<td align="right">93</td>
<td align="right">42.3%</td>
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
<td align="right">126</td>
<td align="right">57.3%</td>
<td align="right">126</td>
<td align="right">57.3%</td>
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
<td align="right">1</td>
<td align="right">100.0%</td>
<td align="right">1</td>
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
<td align="left">str</td>
<td align="right">1</td>
<td align="right">100.0%</td>
<td align="right">1</td>
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
<td align="right">1,842,671</td>
<td align="right">37.7%</td>
<td align="right">630,264,585</td>
<td align="right">48.4%</td>
<td align="right">34,103.9%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">3,049,781</td>
<td align="right">62.3%</td>
<td align="right">671,038,876</td>
<td align="right">51.6%</td>
<td align="right">21,902.9%</td>
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
<td align="right">796</td>
<td align="right">99.0%</td>
<td align="right">163,941</td>
<td align="right">100.0%</td>
<td align="right">20,495.6%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">8</td>
<td align="right">1.0%</td>
<td align="right">8</td>
<td align="right">0.0%</td>
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
<td align="left">zip</td>
<td align="right">138</td>
<td align="right">17.3%</td>
<td align="right">163,283</td>
<td align="right">99.6%</td>
<td align="right">118,221.0%</td>
</tr>
<tr>
<td align="left">bytes</td>
<td align="right">276</td>
<td align="right">34.7%</td>
<td align="right">591</td>
<td align="right">0.4%</td>
<td align="right">114.1%</td>
</tr>
<tr>
<td align="left">enumerate</td>
<td align="right">330</td>
<td align="right">41.5%</td>
<td align="right">15</td>
<td align="right">0.0%</td>
<td align="right">-95.5%</td>
</tr>
<tr>
<td align="left">dict items</td>
<td align="right">51</td>
<td align="right">6.4%</td>
<td align="right">51</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">dict values</td>
<td align="right">1</td>
<td align="right">0.1%</td>
<td align="right">1</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">49,796</td>
<td align="right">0.0%</td>
<td align="right">49,796</td>
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
<td align="right">994,487,900</td>
<td align="right">100.0%</td>
<td align="right">994,487,900</td>
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
<td align="right">193</td>
<td align="right">0.0%</td>
<td align="right">193</td>
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
<td align="right">603</td>
<td align="right">81.6%</td>
<td align="right">603</td>
<td align="right">81.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">136</td>
<td align="right">18.4%</td>
<td align="right">136</td>
<td align="right">18.4%</td>
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
<td align="left">method</td>
<td align="right">51</td>
<td align="right">37.5%</td>
<td align="right">51</td>
<td align="right">37.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">non overriding descriptor</td>
<td align="right">21</td>
<td align="right">15.4%</td>
<td align="right">21</td>
<td align="right">15.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not managed dict</td>
<td align="right">21</td>
<td align="right">15.4%</td>
<td align="right">21</td>
<td align="right">15.4%</td>
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
<td align="right">4,830,352</td>
<td align="right">100.0%</td>
<td align="right">1,292,959,174</td>
<td align="right">100.0%</td>
<td align="right">26,667.4%</td>
</tr>
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
<td align="right">32</td>
<td align="right">0.0%</td>
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
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">1</td>
<td align="right">0.0%</td>
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
<td align="right">12</td>
<td align="right">0.0%</td>
<td align="right">12</td>
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
<td align="right">378</td>
<td align="right">100.0%</td>
<td align="right">378</td>
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
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">1</td>
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
<td align="right">49,151</td>
<td align="right">100.0%</td>
<td align="right">49,151</td>
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
<td align="right">1</td>
<td align="right">100.0%</td>
<td align="right">1</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">15</td>
<td align="right">0.8%</td>
<td align="right">15</td>
<td align="right">0.8%</td>
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
<td align="right">1,633</td>
<td align="right">89.9%</td>
<td align="right">1,633</td>
<td align="right">89.9%</td>
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
<td align="right">168</td>
<td align="right">100.0%</td>
<td align="right">168</td>
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
<td align="right">474,746</td>
<td align="right">87.8%</td>
<td align="right">351,963,861</td>
<td align="right">100.0%</td>
<td align="right">74,037.3%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">65,577</td>
<td align="right">12.1%</td>
<td align="right">65,577</td>
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
<td align="right">137</td>
<td align="right">98.6%</td>
<td align="right">85,962</td>
<td align="right">100.0%</td>
<td align="right">62,646.0%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">2</td>
<td align="right">1.4%</td>
<td align="right">2</td>
<td align="right">0.0%</td>
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
<td align="right">137</td>
<td align="right">100.0%</td>
<td align="right">85,962</td>
<td align="right">100.0%</td>
<td align="right">62,646.0%</td>
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
<td align="right">49,259</td>
<td align="right">91.2%</td>
<td align="right">49,259</td>
<td align="right">91.2%</td>
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
<td align="right">4,582</td>
<td align="right">8.5%</td>
<td align="right">4,582</td>
<td align="right">8.5%</td>
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
<td align="right">7</td>
<td align="right">0.0%</td>
<td align="right">7</td>
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
<td align="right">64</td>
<td align="right">47.1%</td>
<td align="right">64</td>
<td align="right">47.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">72</td>
<td align="right">52.9%</td>
<td align="right">72</td>
<td align="right">52.9%</td>
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
<td align="left">dict</td>
<td align="right">50</td>
<td align="right">69.4%</td>
<td align="right">50</td>
<td align="right">69.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">sequence</td>
<td align="right">21</td>
<td align="right">29.2%</td>
<td align="right">21</td>
<td align="right">29.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">mapping</td>
<td align="right">1</td>
<td align="right">1.4%</td>
<td align="right">1</td>
<td align="right">1.4%</td>
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
<td align="right">3</td>
<td align="right">0.0%</td>
<td align="right">3</td>
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
<td align="right">5,338,794</td>
<td align="right">100.0%</td>
<td align="right">5,338,794</td>
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
<td align="right">23</td>
<td align="right">100.0%</td>
<td align="right">23</td>
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
Specialized hits
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that complete.
</details>
</td>
<td align="right">277,775,742</td>
<td align="right">19.2%</td>
<td align="right">9,750,541,901</td>
<td align="right">32.8%</td>
<td align="right">3,410.2%</td>
</tr>
<tr>
<td align="left">
Not specialized
<details>
<summary>ⓘ</summary>

Instructions that could be specialized but aren't, e.g. `LOAD_ATTR`, `BINARY_SLICE`.
</details>
</td>
<td align="right">128,909,304</td>
<td align="right">8.9%</td>
<td align="right">2,473,574,691</td>
<td align="right">8.3%</td>
<td align="right">1,818.8%</td>
</tr>
<tr>
<td align="left">
Basic
<details>
<summary>ⓘ</summary>

Instructions that are not and cannot be specialized, e.g. `LOAD_FAST`.
</details>
</td>
<td align="right">1,037,179,064</td>
<td align="right">71.8%</td>
<td align="right">17,541,850,445</td>
<td align="right">58.9%</td>
<td align="right">1,591.3%</td>
</tr>
<tr>
<td align="left">
Specialized misses
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that deopt.
</details>
</td>
<td align="right">301</td>
<td align="right">0.0%</td>
<td align="right">301</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
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
<td align="right">474,746</td>
<td align="right">0.4%</td>
<td align="right">351,963,861</td>
<td align="right">14.2%</td>
<td align="right">74,037.3%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">621,398</td>
<td align="right">0.5%</td>
<td align="right">347,952,982</td>
<td align="right">14.1%</td>
<td align="right">55,895.2%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">3,049,781</td>
<td align="right">2.4%</td>
<td align="right">671,038,876</td>
<td align="right">27.1%</td>
<td align="right">21,902.9%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">118,431,269</td>
<td align="right">91.9%</td>
<td align="right">1,101,497,652</td>
<td align="right">44.5%</td>
<td align="right">830.1%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">4,161,636</td>
<td align="right">3.2%</td>
<td align="right">275,607</td>
<td align="right">0.0%</td>
<td align="right">-93.4%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">2,037,568</td>
<td align="right">1.6%</td>
<td align="right">139,840</td>
<td align="right">0.0%</td>
<td align="right">-93.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">49,796</td>
<td align="right">0.0%</td>
<td align="right">49,796</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">49,259</td>
<td align="right">0.0%</td>
<td align="right">49,259</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">93</td>
<td align="right">0.0%</td>
<td align="right">93</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">59</td>
<td align="right">0.0%</td>
<td align="right">59</td>
<td align="right">0.0%</td>
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
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">192</td>
<td align="right">63.8%</td>
<td align="right">192</td>
<td align="right">63.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">63</td>
<td align="right">20.9%</td>
<td align="right">63</td>
<td align="right">20.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_LIST_INT</td>
<td align="right">21</td>
<td align="right">7.0%</td>
<td align="right">21</td>
<td align="right">7.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_BUILTIN</td>
<td align="right">6</td>
<td align="right">2.0%</td>
<td align="right">6</td>
<td align="right">2.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_MODULE</td>
<td align="right">6</td>
<td align="right">2.0%</td>
<td align="right">6</td>
<td align="right">2.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_LIST</td>
<td align="right">3</td>
<td align="right">1.0%</td>
<td align="right">3</td>
<td align="right">1.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_NONE</td>
<td align="right">3</td>
<td align="right">1.0%</td>
<td align="right">3</td>
<td align="right">1.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST</td>
<td align="right">2</td>
<td align="right">0.7%</td>
<td align="right">2</td>
<td align="right">0.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">1</td>
<td align="right">0.3%</td>
<td align="right">1</td>
<td align="right">0.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_STR</td>
<td align="right">1</td>
<td align="right">0.3%</td>
<td align="right">1</td>
<td align="right">0.3%</td>
<td align="right">0.0%</td>
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
<td align="right">232,463,744</td>
<td align="right">99.8%</td>
<td align="right">232,463,744</td>
<td align="right">99.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls to Python functions inlined</td>
<td align="right">416,467</td>
<td align="right">0.2%</td>
<td align="right">416,467</td>
<td align="right">0.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (total)</td>
<td align="right">232,463,744</td>
<td align="right">99.8%</td>
<td align="right">232,463,744</td>
<td align="right">99.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (vector)</td>
<td align="right">232,463,360</td>
<td align="right">99.8%</td>
<td align="right">232,463,360</td>
<td align="right">99.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (generator)</td>
<td align="right">384</td>
<td align="right">0.0%</td>
<td align="right">384</td>
<td align="right">0.0%</td>
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
<td align="right">232,463,360</td>
<td align="right">99.8%</td>
<td align="right">232,463,360</td>
<td align="right">99.8%</td>
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
<td align="right">312</td>
<td align="right">0.0%</td>
<td align="right">312</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function ex)</td>
<td align="right">128</td>
<td align="right">0.0%</td>
<td align="right">128</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (api)</td>
<td align="right">116,182,022</td>
<td align="right">49.9%</td>
<td align="right">116,182,022</td>
<td align="right">49.9%</td>
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
<td align="right">237</td>
<td align="right">0.0%</td>
<td align="right">237</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Frames pushed</td>
<td align="right">232,879,851</td>
<td align="right">100.0%</td>
<td align="right">232,879,851</td>
<td align="right">100.0%</td>
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
<td align="left">Interpreter immortal decrefs</td>
<td align="right">41,504,881</td>
<td align="right">0.1%</td>
<td align="right">9,030,796,028</td>
<td align="right">25.1%</td>
<td align="right">21,658.4%</td>
</tr>
<tr>
<td align="left">Interpreter immortal increfs</td>
<td align="right">25,202,606</td>
<td align="right">0.1%</td>
<td align="right">3,518,719,366</td>
<td align="right">13.6%</td>
<td align="right">13,861.7%</td>
</tr>
<tr>
<td align="left">Interpreter mortal decrefs</td>
<td align="right">1,239,019,996</td>
<td align="right">3.3%</td>
<td align="right">12,362,737,943</td>
<td align="right">34.4%</td>
<td align="right">897.8%</td>
</tr>
<tr>
<td align="left">Interpreter mortal increfs</td>
<td align="right">1,219,990,287</td>
<td align="right">4.5%</td>
<td align="right">11,224,410,845</td>
<td align="right">43.5%</td>
<td align="right">820.0%</td>
</tr>
<tr>
<td align="left">Mortal increfs</td>
<td align="right">17,775,259,419</td>
<td align="right">65.7%</td>
<td align="right">6,233,156,488</td>
<td align="right">24.1%</td>
<td align="right">-64.9%</td>
</tr>
<tr>
<td align="left">Immortal decrefs</td>
<td align="right">14,130,463,627</td>
<td align="right">37.7%</td>
<td align="right">5,134,083,549</td>
<td align="right">14.3%</td>
<td align="right">-63.7%</td>
</tr>
<tr>
<td align="left">Mortal decrefs</td>
<td align="right">22,103,597,690</td>
<td align="right">58.9%</td>
<td align="right">9,442,178,060</td>
<td align="right">26.3%</td>
<td align="right">-57.3%</td>
</tr>
<tr>
<td align="left">Immortal increfs</td>
<td align="right">8,022,971,316</td>
<td align="right">29.7%</td>
<td align="right">4,845,313,877</td>
<td align="right">18.8%</td>
<td align="right">-39.6%</td>
</tr>
<tr>
<td align="left">Method cache misses</td>
<td align="right">179</td>
<td align="right"></td>
<td align="right">221</td>
<td align="right"></td>
<td align="right">23.5%</td>
</tr>
<tr>
<td align="left">Method cache collisions</td>
<td align="right">208</td>
<td align="right"></td>
<td align="right">252</td>
<td align="right"></td>
<td align="right">21.2%</td>
</tr>
<tr>
<td align="left">Method cache dunder misses</td>
<td align="right">71</td>
<td align="right"></td>
<td align="right">77</td>
<td align="right"></td>
<td align="right">8.5%</td>
</tr>
<tr>
<td align="left">Allocations to 4 kbytes</td>
<td align="right">149,718</td>
<td align="right">0.0%</td>
<td align="right">148,379</td>
<td align="right">0.0%</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">Method cache hits</td>
<td align="right">54,028</td>
<td align="right"></td>
<td align="right">53,986</td>
<td align="right"></td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">Method cache dunder hits</td>
<td align="right">944,047,344</td>
<td align="right"></td>
<td align="right">944,218,988</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations from freelist</td>
<td align="right">2,924,473,392</td>
<td align="right">63.0%</td>
<td align="right">2,924,455,553</td>
<td align="right">63.0%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Frees to freelist</td>
<td align="right">2,924,475,186</td>
<td align="right"></td>
<td align="right">2,924,457,347</td>
<td align="right"></td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Allocations</td>
<td align="right">1,715,270,709</td>
<td align="right">37.0%</td>
<td align="right">1,715,269,269</td>
<td align="right">37.0%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Frees</td>
<td align="right">2,034,908,574</td>
<td align="right"></td>
<td align="right">2,034,906,886</td>
<td align="right"></td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Allocations to 512 bytes</td>
<td align="right">1,714,878,047</td>
<td align="right">37.0%</td>
<td align="right">1,714,877,946</td>
<td align="right">37.0%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Allocations over 4 kbytes</td>
<td align="right">242,944</td>
<td align="right">0.0%</td>
<td align="right">242,944</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Inline values</td>
<td align="right">49,304</td>
<td align="right"></td>
<td align="right">49,304</td>
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
<td align="right">147,649</td>
<td align="right">372</td>
<td align="right">2,036,509,902</td>
<td align="right">131,198,495</td>
<td align="right">236,954,150</td>
<td align="right">147,649</td>
<td align="right">372</td>
<td align="right">2,036,562,566</td>
<td align="right">131,198,807</td>
<td align="right">236,968,351</td>
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
Low confidence
<details>
<summary>ⓘ</summary>

A trace is abandoned because the likelihood of the jump to top being taken is too low.
</details>
</td>
<td align="right">64</td>
<td align="right">3.2%</td>
<td align="right">1</td>
<td align="right">0.2%</td>
<td align="right">-98.4%</td>
</tr>
<tr>
<td align="left">
Traces executed
<details>
<summary>ⓘ</summary>

The number of traces that were executed
</details>
</td>
<td align="right">1,556,203,108</td>
<td align="right"></td>
<td align="right">25,773,183</td>
<td align="right"></td>
<td align="right">-98.3%</td>
</tr>
<tr>
<td align="left">
Uops executed
<details>
<summary>ⓘ</summary>

The total number of uops (micro-operations) that were executed
</details>
</td>
<td align="right">54,483,758,837</td>
<td align="right">3,501.1%</td>
<td align="right">938,785,539</td>
<td align="right">3,642.5%</td>
<td align="right">-98.3%</td>
</tr>
<tr>
<td align="left">
Traces created
<details>
<summary>ⓘ</summary>

The number of traces that were successfully created.
</details>
</td>
<td align="right">2,005</td>
<td align="right">100.0%</td>
<td align="right">565</td>
<td align="right">87.1%</td>
<td align="right">-71.8%</td>
</tr>
<tr>
<td align="left">
Optimization attempts
<details>
<summary>ⓘ</summary>

The number of times a potential trace is identified.  Specifically, this occurs in the JUMP BACKWARD instruction when the counter reaches a threshold.
</details>
</td>
<td align="right">2,005</td>
<td align="right"></td>
<td align="right">649</td>
<td align="right"></td>
<td align="right">-67.6%</td>
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
Trace stack underflow
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it pops more frames than it pushes.
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">105</td>
<td align="right">16.2%</td>
<td align="right">105 / 0 !!</td>
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
Trace too short
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it it too short.
</details>
</td>
<td align="right">0</td>
<td align="right">0.0%</td>
<td align="right">84</td>
<td align="right">12.9%</td>
<td align="right">84 / 0 !!</td>
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
<td align="right">2,005</td>
<td align="right"></td>
<td align="right">565</td>
<td align="right"></td>
<td align="right">-71.8%</td>
</tr>
<tr>
<td align="left">
Optimizer successes
<details>
<summary>ⓘ</summary>

The number of traces that were successfully optimized.
</details>
</td>
<td align="right">2,005</td>
<td align="right">100.0%</td>
<td align="right">565</td>
<td align="right">100.0%</td>
<td align="right">-71.8%</td>
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
<td align="right">128</td>
<td align="right">6.4%</td>
<td align="right">48</td>
<td align="right">8.5%</td>
<td align="right">-62.5%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">256</td>
<td align="right">12.8%</td>
<td align="right">109</td>
<td align="right">19.3%</td>
<td align="right">-57.4%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">597</td>
<td align="right">29.8%</td>
<td align="right">86</td>
<td align="right">15.2%</td>
<td align="right">-85.6%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">640</td>
<td align="right">31.9%</td>
<td align="right">148</td>
<td align="right">26.2%</td>
<td align="right">-76.9%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">384</td>
<td align="right">19.2%</td>
<td align="right">174</td>
<td align="right">30.8%</td>
<td align="right">-54.7%</td>
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
<td align="right">6.4%</td>
<td align="right">48</td>
<td align="right">8.5%</td>
<td align="right">-62.5%</td>
</tr>
<tr>
<td align="left"><= 8</td>
<td align="right">128</td>
<td align="right">6.4%</td>
<td align="right">107</td>
<td align="right">18.9%</td>
<td align="right">-16.4%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">469</td>
<td align="right">23.4%</td>
<td align="right">24</td>
<td align="right">4.2%</td>
<td align="right">-94.9%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">576</td>
<td align="right">28.7%</td>
<td align="right">145</td>
<td align="right">25.7%</td>
<td align="right">-74.8%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">704</td>
<td align="right">35.1%</td>
<td align="right">241</td>
<td align="right">42.7%</td>
<td align="right">-65.8%</td>
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
<td align="left">_STORE_FAST_3</td>
<td align="right">416,960</td>
<td align="right">1,674,902</td>
<td align="right">301.7%</td>
</tr>
<tr>
<td align="left">_BINARY_SLICE</td>
<td align="right">634,752</td>
<td align="right">2,532,480</td>
<td align="right">299.0%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_DICT</td>
<td align="right">147,776</td>
<td align="right">505,007</td>
<td align="right">241.7%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_2</td>
<td align="right">462,691</td>
<td align="right">1,266,240</td>
<td align="right">173.7%</td>
</tr>
<tr>
<td align="left">_RESUME_CHECK</td>
<td align="right">151,424</td>
<td align="right">409,346</td>
<td align="right">170.3%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_INLINE</td>
<td align="right">151,424</td>
<td align="right">409,346</td>
<td align="right">170.3%</td>
</tr>
<tr>
<td align="left">_CHECK_MANAGED_OBJECT_HAS_VALUES</td>
<td align="right">151,424</td>
<td align="right">409,346</td>
<td align="right">170.3%</td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE_OPERAND</td>
<td align="right">151,424</td>
<td align="right">409,346</td>
<td align="right">170.3%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_2</td>
<td align="right">151,424</td>
<td align="right">409,346</td>
<td align="right">170.3%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_INSTANCE_VALUE_0</td>
<td align="right">151,424</td>
<td align="right">409,346</td>
<td align="right">170.3%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_1</td>
<td align="right">151,424</td>
<td align="right">409,346</td>
<td align="right">170.3%</td>
</tr>
<tr>
<td align="left">_PUSH_FRAME</td>
<td align="right">151,424</td>
<td align="right">409,346</td>
<td align="right">170.3%</td>
</tr>
<tr>
<td align="left">_SAVE_RETURN_OFFSET</td>
<td align="right">151,424</td>
<td align="right">409,346</td>
<td align="right">170.3%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_3</td>
<td align="right">3,616,768</td>
<td align="right">8,804,734</td>
<td align="right">143.4%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_AND_CLEAR</td>
<td align="right">302,720</td>
<td align="right">670,094</td>
<td align="right">121.4%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW</td>
<td align="right">2,982,016</td>
<td align="right">6,013,870</td>
<td align="right">101.7%</td>
</tr>
<tr>
<td align="left">_COPY</td>
<td align="right">706,642,816</td>
<td align="right">3,664,586</td>
<td align="right">-99.5%</td>
</tr>
<tr>
<td align="left">_LOAD_DEREF</td>
<td align="right">353,321,408</td>
<td align="right">1,832,293</td>
<td align="right">-99.5%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR</td>
<td align="right">353,321,408</td>
<td align="right">1,832,293</td>
<td align="right">-99.5%</td>
</tr>
<tr>
<td align="left">_SWAP</td>
<td align="right">707,347,712</td>
<td align="right">5,006,328</td>
<td align="right">-99.3%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR</td>
<td align="right">990,090,046</td>
<td align="right">7,023,663</td>
<td align="right">-99.3%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE</td>
<td align="right">637,071,358</td>
<td align="right">5,603,080</td>
<td align="right">-99.1%</td>
</tr>
<tr>
<td align="left">_POP_TOP</td>
<td align="right">317,553,471</td>
<td align="right">3,142,071</td>
<td align="right">-99.0%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_LIST</td>
<td align="right">634,871,870</td>
<td align="right">6,388,195</td>
<td align="right">-99.0%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_LIST</td>
<td align="right">635,222,206</td>
<td align="right">6,800,292</td>
<td align="right">-98.9%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_LIST</td>
<td align="right">635,222,206</td>
<td align="right">6,800,292</td>
<td align="right">-98.9%</td>
</tr>
<tr>
<td align="left">_GET_ITER</td>
<td align="right">318,989,759</td>
<td align="right">3,935,873</td>
<td align="right">-98.8%</td>
</tr>
<tr>
<td align="left">_GUARD_NOS_INT</td>
<td align="right">2,008,898,878</td>
<td align="right">26,549,586</td>
<td align="right">-98.7%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST</td>
<td align="right">2,646,102,784</td>
<td align="right">36,022,192</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_ADD_INT</td>
<td align="right">1,057,572,231</td>
<td align="right">14,462,731</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_CALL_LIST_APPEND</td>
<td align="right">983,644,822</td>
<td align="right">13,572,012</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_STORE_FAST</td>
<td align="right">992,107,326</td>
<td align="right">13,872,517</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_CALL_LEN</td>
<td align="right">986,162,733</td>
<td align="right">14,033,784</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBTRACT_INT</td>
<td align="right">986,162,733</td>
<td align="right">14,033,784</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_TRUE_POP</td>
<td align="right">985,768,167</td>
<td align="right">14,033,750</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_CALL_NON_PY_GENERAL</td>
<td align="right">321,434,751</td>
<td align="right">4,609,893</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_CHECK_IS_NOT_PY_CALLABLE</td>
<td align="right">321,434,751</td>
<td align="right">4,609,893</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_BUILD_TUPLE</td>
<td align="right">352,389,138</td>
<td align="right">5,057,554</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP</td>
<td align="right">352,389,138</td>
<td align="right">5,057,554</td>
<td align="right">-98.6%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION</td>
<td align="right">1,307,748,908</td>
<td align="right">19,052,996</td>
<td align="right">-98.5%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_WITH_NULL</td>
<td align="right">986,314,157</td>
<td align="right">14,443,130</td>
<td align="right">-98.5%</td>
</tr>
<tr>
<td align="left">_SET_IP</td>
<td align="right">5,767,399,854</td>
<td align="right">87,673,707</td>
<td align="right">-98.5%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_1</td>
<td align="right">2,047,489,041</td>
<td align="right">32,486,480</td>
<td align="right">-98.4%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_LIST_INT</td>
<td align="right">1,372,566,240</td>
<td align="right">21,953,796</td>
<td align="right">-98.4%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_INT</td>
<td align="right">987,207,405</td>
<td align="right">15,797,223</td>
<td align="right">-98.4%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY</td>
<td align="right">5,094,337,242</td>
<td align="right">82,345,481</td>
<td align="right">-98.4%</td>
</tr>
<tr>
<td align="left">_EXIT_TRACE</td>
<td align="right">1,556,203,108</td>
<td align="right">25,773,183</td>
<td align="right">-98.3%</td>
</tr>
<tr>
<td align="left">_START_EXECUTOR</td>
<td align="right">1,556,203,108</td>
<td align="right">25,773,183</td>
<td align="right">-98.3%</td>
</tr>
<tr>
<td align="left">_MAKE_WARM</td>
<td align="right">1,985,646,499</td>
<td align="right">32,962,912</td>
<td align="right">-98.3%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_5</td>
<td align="right">2,361,104,013</td>
<td align="right">39,293,592</td>
<td align="right">-98.3%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_4</td>
<td align="right">2,711,059,458</td>
<td align="right">45,236,050</td>
<td align="right">-98.3%</td>
</tr>
<tr>
<td align="left">_JUMP_TO_TOP</td>
<td align="right">429,443,391</td>
<td align="right">7,189,729</td>
<td align="right">-98.3%</td>
</tr>
<tr>
<td align="left">_FOR_ITER_TIER_TWO</td>
<td align="right">680,178,388</td>
<td align="right">12,189,293</td>
<td align="right">-98.2%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_FALSE_POP</td>
<td align="right">353,828,376</td>
<td align="right">6,821,027</td>
<td align="right">-98.1%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">988,164,310</td>
<td align="right">19,239,927</td>
<td align="right">-98.1%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW_WITH_NULL</td>
<td align="right">322,608,383</td>
<td align="right">6,350,588</td>
<td align="right">-98.0%</td>
</tr>
<tr>
<td align="left">_GUARD_TYPE_VERSION</td>
<td align="right">988,315,734</td>
<td align="right">19,649,273</td>
<td align="right">-98.0%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_4</td>
<td align="right">670,187,892</td>
<td align="right">13,463,064</td>
<td align="right">-98.0%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY_AND_SET_IP</td>
<td align="right">1,323,123,474</td>
<td align="right">26,912,407</td>
<td align="right">-98.0%</td>
</tr>
<tr>
<td align="left">_CHECK_PERIODIC</td>
<td align="right">1,677,401,360</td>
<td align="right">34,225,807</td>
<td align="right">-98.0%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_5</td>
<td align="right">319,112,255</td>
<td align="right">8,425,024</td>
<td align="right">-97.4%</td>
</tr>
<tr>
<td align="left">_BUILD_LIST</td>
<td align="right">320,881,215</td>
<td align="right">8,567,030</td>
<td align="right">-97.3%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_0</td>
<td align="right">321,427,455</td>
<td align="right">9,872,693</td>
<td align="right">-96.9%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_NOT_NONE_POP</td>
<td align="right">3,472,896</td>
<td align="right">6,518,631</td>
<td align="right">87.7%</td>
</tr>
<tr>
<td align="left">_BINARY_OP</td>
<td align="right">5,168,896</td>
<td align="right">9,054,925</td>
<td align="right">75.2%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_INT</td>
<td align="right">1,044,672</td>
<td align="right">1,763,439</td>
<td align="right">68.8%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_CLASS</td>
<td align="right">1,173,632</td>
<td align="right">1,740,695</td>
<td align="right">48.3%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_2</td>
<td align="right">1,625,152</td>
<td align="right">2,399,044</td>
<td align="right">47.6%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_0</td>
<td align="right">4,515,968</td>
<td align="right">6,170,558</td>
<td align="right">36.6%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_FAST_WITH_KEYWORDS</td>
<td align="right">302,720</td>
<td align="right">411,710</td>
<td align="right">36.0%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_NONE_POP</td>
<td align="right">2,723,648</td>
<td align="right">3,667,157</td>
<td align="right">34.6%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_2</td>
<td align="right">1,525,568</td>
<td align="right">1,990,382</td>
<td align="right">30.5%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_TUPLE_INT</td>
<td align="right">8,433,536</td>
<td align="right">10,512,410</td>
<td align="right">24.7%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_7</td>
<td align="right">8,433,536</td>
<td align="right">10,512,410</td>
<td align="right">24.7%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">4,216,768</td>
<td align="right">5,256,205</td>
<td align="right">24.7%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">4,216,768</td>
<td align="right">5,256,205</td>
<td align="right">24.7%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_7</td>
<td align="right">4,216,768</td>
<td align="right">5,256,205</td>
<td align="right">24.7%</td>
</tr>
<tr>
<td align="left">_LIST_APPEND</td>
<td align="right">3,297,664</td>
<td align="right">2,520,769</td>
<td align="right">-23.6%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_6</td>
<td align="right">1,950,080</td>
<td align="right">1,679,957</td>
<td align="right">-13.9%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_6</td>
<td align="right">5,841,088</td>
<td align="right">5,281,585</td>
<td align="right">-9.6%</td>
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
<td align="right">21</td>
<td align="right">21</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

---
Stats gathered on: 2024-12-11
