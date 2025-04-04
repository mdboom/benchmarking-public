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
<td align="left">CALL_TUPLE_1</td>
<td align="right">180,132</td>
<td align="right">129,512</td>
<td align="right">-28.1%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD_NO_INTERRUPT</td>
<td align="right">1,521,686</td>
<td align="right">1,931,621</td>
<td align="right">26.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">3,045,763</td>
<td align="right">3,648,645</td>
<td align="right">19.8%</td>
</tr>
<tr>
<td align="left">DELETE_SUBSCR</td>
<td align="right">72,038</td>
<td align="right">85,254</td>
<td align="right">18.3%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NONE</td>
<td align="right">4,793,911</td>
<td align="right">5,655,205</td>
<td align="right">18.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">644,257</td>
<td align="right">735,183</td>
<td align="right">14.1%</td>
</tr>
<tr>
<td align="left">CALL_KW_PY</td>
<td align="right">2,318,932</td>
<td align="right">2,575,141</td>
<td align="right">11.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_LIST_INT</td>
<td align="right">3,195,331</td>
<td align="right">3,538,608</td>
<td align="right">10.7%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD</td>
<td align="right">12,306,350</td>
<td align="right">11,149,441</td>
<td align="right">-9.4%</td>
</tr>
<tr>
<td align="left">STORE_FAST_LOAD_FAST</td>
<td align="right">1,065,397</td>
<td align="right">971,059</td>
<td align="right">-8.9%</td>
</tr>
<tr>
<td align="left">TO_BOOL_ALWAYS_TRUE</td>
<td align="right">3,420,691</td>
<td align="right">3,722,965</td>
<td align="right">8.8%</td>
</tr>
<tr>
<td align="left">CALL_INTRINSIC_1</td>
<td align="right">430,766</td>
<td align="right">394,402</td>
<td align="right">-8.4%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">1,775,698</td>
<td align="right">1,919,728</td>
<td align="right">8.1%</td>
</tr>
<tr>
<td align="left">IS_OP</td>
<td align="right">2,603,173</td>
<td align="right">2,404,243</td>
<td align="right">-7.6%</td>
</tr>
<tr>
<td align="left">CALL_PY_GENERAL</td>
<td align="right">4,191,174</td>
<td align="right">4,504,919</td>
<td align="right">7.5%</td>
</tr>
<tr>
<td align="left">LOAD_SMALL_INT</td>
<td align="right">8,292,111</td>
<td align="right">8,886,188</td>
<td align="right">7.2%</td>
</tr>
<tr>
<td align="left">LOAD_CONST</td>
<td align="right">8,321,640</td>
<td align="right">8,908,702</td>
<td align="right">7.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">5,956,530</td>
<td align="right">6,355,198</td>
<td align="right">6.7%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_LIST_INT</td>
<td align="right">484,461</td>
<td align="right">514,769</td>
<td align="right">6.3%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_INT</td>
<td align="right">1,613,498</td>
<td align="right">1,705,703</td>
<td align="right">5.7%</td>
</tr>
<tr>
<td align="left">FOR_ITER_GEN</td>
<td align="right">7,083,125</td>
<td align="right">6,684,783</td>
<td align="right">-5.6%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_INT</td>
<td align="right">1,088,443</td>
<td align="right">1,149,140</td>
<td align="right">5.6%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_WITH_HINT</td>
<td align="right">15,926,436</td>
<td align="right">16,766,923</td>
<td align="right">5.3%</td>
</tr>
<tr>
<td align="left">RERAISE</td>
<td align="right">724,049</td>
<td align="right">687,685</td>
<td align="right">-5.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">627,436</td>
<td align="right">657,744</td>
<td align="right">4.8%</td>
</tr>
<tr>
<td align="left">RESUME_CHECK</td>
<td align="right">49,118,636</td>
<td align="right">51,362,784</td>
<td align="right">4.6%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">28,067,266</td>
<td align="right">29,335,142</td>
<td align="right">4.5%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NOT_NONE</td>
<td align="right">9,622,991</td>
<td align="right">10,019,523</td>
<td align="right">4.1%</td>
</tr>
<tr>
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">2,139,212</td>
<td align="right">2,053,581</td>
<td align="right">-4.0%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_CHECK</td>
<td align="right">217,009</td>
<td align="right">225,565</td>
<td align="right">3.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">24,263,847</td>
<td align="right">25,086,497</td>
<td align="right">3.4%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_AND_CLEAR</td>
<td align="right">1,097,239</td>
<td align="right">1,060,111</td>
<td align="right">-3.4%</td>
</tr>
<tr>
<td align="left">POP_TOP</td>
<td align="right">36,814,533</td>
<td align="right">38,055,113</td>
<td align="right">3.4%</td>
</tr>
<tr>
<td align="left">FOR_ITER_LIST</td>
<td align="right">9,599,078</td>
<td align="right">9,280,267</td>
<td align="right">-3.3%</td>
</tr>
<tr>
<td align="left">ENTER_EXECUTOR</td>
<td align="right">11,143,667</td>
<td align="right">11,509,519</td>
<td align="right">3.3%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">3,403,926</td>
<td align="right">3,514,609</td>
<td align="right">3.3%</td>
</tr>
<tr>
<td align="left">SWAP</td>
<td align="right">3,551,060</td>
<td align="right">3,441,128</td>
<td align="right">-3.1%</td>
</tr>
<tr>
<td align="left">LIST_APPEND</td>
<td align="right">1,151,266</td>
<td align="right">1,116,163</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TUPLE</td>
<td align="right">105,832</td>
<td align="right">108,982</td>
<td align="right">3.0%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST</td>
<td align="right">2,989,025</td>
<td align="right">2,906,813</td>
<td align="right">-2.8%</td>
</tr>
<tr>
<td align="left">STORE_FAST_STORE_FAST</td>
<td align="right">4,404,782</td>
<td align="right">4,518,615</td>
<td align="right">2.6%</td>
</tr>
<tr>
<td align="left">LOAD_FAST</td>
<td align="right">166,762,328</td>
<td align="right">170,998,538</td>
<td align="right">2.5%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_TUPLE_INT</td>
<td align="right">1,391,032</td>
<td align="right">1,424,440</td>
<td align="right">2.4%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_BUILTIN</td>
<td align="right">26,361,050</td>
<td align="right">25,730,817</td>
<td align="right">-2.4%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">2,057,744</td>
<td align="right">2,010,227</td>
<td align="right">-2.3%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_PROPERTY</td>
<td align="right">2,695,615</td>
<td align="right">2,756,927</td>
<td align="right">2.3%</td>
</tr>
<tr>
<td align="left">GET_YIELD_FROM_ITER</td>
<td align="right">7,709,559</td>
<td align="right">7,884,853</td>
<td align="right">2.3%</td>
</tr>
<tr>
<td align="left">MAKE_CELL</td>
<td align="right">4,037,423</td>
<td align="right">3,948,224</td>
<td align="right">-2.2%</td>
</tr>
<tr>
<td align="left">MAKE_FUNCTION</td>
<td align="right">1,708,651</td>
<td align="right">1,744,549</td>
<td align="right">2.1%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_SET</td>
<td align="right">1,970,050</td>
<td align="right">1,929,712</td>
<td align="right">-2.0%</td>
</tr>
<tr>
<td align="left">JUMP_FORWARD</td>
<td align="right">1,762,534</td>
<td align="right">1,798,439</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">1,046,136</td>
<td align="right">1,065,635</td>
<td align="right">1.9%</td>
</tr>
<tr>
<td align="left">CALL_ISINSTANCE</td>
<td align="right">14,619,644</td>
<td align="right">14,349,329</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">COPY</td>
<td align="right">6,634,617</td>
<td align="right">6,754,074</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_TRUE</td>
<td align="right">16,078,191</td>
<td align="right">16,360,737</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">CALL_KW_BOUND_METHOD</td>
<td align="right">134,036</td>
<td align="right">136,376</td>
<td align="right">1.7%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_STR_INT</td>
<td align="right">302,260</td>
<td align="right">307,447</td>
<td align="right">1.7%</td>
</tr>
<tr>
<td align="left">CALL_LIST_APPEND</td>
<td align="right">942,420</td>
<td align="right">958,150</td>
<td align="right">1.7%</td>
</tr>
<tr>
<td align="left">CALL_LEN</td>
<td align="right">1,527,980</td>
<td align="right">1,553,150</td>
<td align="right">1.6%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_IMMORTAL</td>
<td align="right">44,613,799</td>
<td align="right">45,336,562</td>
<td align="right">1.6%</td>
</tr>
<tr>
<td align="left">PUSH_NULL</td>
<td align="right">4,845,142</td>
<td align="right">4,767,676</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">TO_BOOL_BOOL</td>
<td align="right">28,383,006</td>
<td align="right">28,800,102</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">SET_FUNCTION_ATTRIBUTE</td>
<td align="right">1,524,076</td>
<td align="right">1,546,198</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">CALL_NON_PY_GENERAL</td>
<td align="right">2,551,793</td>
<td align="right">2,587,900</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">TO_BOOL_STR</td>
<td align="right">904,142</td>
<td align="right">915,770</td>
<td align="right">1.3%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_DICT</td>
<td align="right">1,919,980</td>
<td align="right">1,943,817</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">CALL_TYPE_1</td>
<td align="right">293,402</td>
<td align="right">296,941</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">4,081,669</td>
<td align="right">4,036,709</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_INT</td>
<td align="right">6,622,325</td>
<td align="right">6,688,744</td>
<td align="right">1.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_LIST</td>
<td align="right">2,013,777</td>
<td align="right">1,994,587</td>
<td align="right">-1.0%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">26,320,706</td>
<td align="right">26,569,640</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">BUILD_LIST</td>
<td align="right">2,879,783</td>
<td align="right">2,906,020</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_FALSE</td>
<td align="right">41,818,846</td>
<td align="right">42,180,358</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_STR</td>
<td align="right">8,037,703</td>
<td align="right">8,095,610</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_CLASS</td>
<td align="right">1,971,083</td>
<td align="right">1,984,596</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_DICT</td>
<td align="right">4,289,355</td>
<td align="right">4,314,470</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">COPY_FREE_VARS</td>
<td align="right">2,592,261</td>
<td align="right">2,606,889</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">NOP</td>
<td align="right">9,736,817</td>
<td align="right">9,682,550</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">BUILD_TUPLE</td>
<td align="right">5,560,347</td>
<td align="right">5,532,158</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">LOAD_DEREF</td>
<td align="right">7,556,995</td>
<td align="right">7,525,209</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">LIST_EXTEND</td>
<td align="right">82,406</td>
<td align="right">82,706</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">GET_ITER</td>
<td align="right">14,424,914</td>
<td align="right">14,476,823</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">9,297,009</td>
<td align="right">9,326,920</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">DICT_MERGE</td>
<td align="right">995,339</td>
<td align="right">998,489</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">4,658,122</td>
<td align="right">4,672,848</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">9,580,068</td>
<td align="right">9,608,114</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_GENERAL</td>
<td align="right">63,801</td>
<td align="right">63,972</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">BUILD_MAP</td>
<td align="right">2,849,115</td>
<td align="right">2,856,171</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_LOAD_FAST</td>
<td align="right">31,168,606</td>
<td align="right">31,099,220</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">POP_EXCEPT</td>
<td align="right">613,940</td>
<td align="right">615,293</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_MODULE</td>
<td align="right">28,868,868</td>
<td align="right">28,930,136</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">SEND_GEN</td>
<td align="right">5,325,159</td>
<td align="right">5,334,244</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_MODULE</td>
<td align="right">15,077,805</td>
<td align="right">15,102,170</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS</td>
<td align="right">2,645,929</td>
<td align="right">2,649,835</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">7,089,278</td>
<td align="right">7,099,309</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">EXTENDED_ARG</td>
<td align="right">4,023,794</td>
<td align="right">4,027,544</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_O</td>
<td align="right">1,639,212</td>
<td align="right">1,640,673</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">CALL_KW_NON_PY</td>
<td align="right">973,327</td>
<td align="right">974,042</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">TO_BOOL_NONE</td>
<td align="right">1,974,807</td>
<td align="right">1,973,490</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">RETURN_VALUE</td>
<td align="right">46,158,400</td>
<td align="right">46,182,322</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">STORE_FAST</td>
<td align="right">41,340,608</td>
<td align="right">41,324,227</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">2,411,976</td>
<td align="right">2,411,176</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">RETURN_GENERATOR</td>
<td align="right">11,215,716</td>
<td align="right">11,217,948</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">446,194</td>
<td align="right">446,275</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_UNICODE</td>
<td align="right">667,235</td>
<td align="right">667,297</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_INPLACE_ADD_UNICODE</td>
<td align="right">42,340</td>
<td align="right">42,343</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_GETITEM</td>
<td align="right">50,226</td>
<td align="right">50,229</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_DICT</td>
<td align="right">1,499,192</td>
<td align="right">1,499,254</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">661,953</td>
<td align="right">661,930</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">1,805,974</td>
<td align="right">1,806,036</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">581,705</td>
<td align="right">581,708</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">END_FOR</td>
<td align="right">4,697,740</td>
<td align="right">4,697,756</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">INTERPRETER_EXIT</td>
<td align="right">11,582,417</td>
<td align="right">11,582,399</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">YIELD_VALUE</td>
<td align="right">11,705,169</td>
<td align="right">11,705,169</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">END_SEND</td>
<td align="right">8,152,860</td>
<td align="right">8,152,860</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SEND</td>
<td align="right">6,493,719</td>
<td align="right">6,493,719</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_SLOT</td>
<td align="right">5,644,147</td>
<td align="right">5,644,147</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">FORMAT_SIMPLE</td>
<td align="right">1,623,476</td>
<td align="right">1,623,476</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">1,221,880</td>
<td align="right">1,221,880</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">1,045,334</td>
<td align="right">1,045,334</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE</td>
<td align="right">849,965</td>
<td align="right">849,965</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_STRING</td>
<td align="right">822,988</td>
<td align="right">822,988</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_INT</td>
<td align="right">703,475</td>
<td align="right">703,475</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CHECK_EXC_MATCH</td>
<td align="right">690,199</td>
<td align="right">690,199</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">PUSH_EXC_INFO</td>
<td align="right">615,293</td>
<td align="right">615,293</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_ALLOC_AND_ENTER_INIT</td>
<td align="right">582,464</td>
<td align="right">582,464</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">EXIT_INIT_CHECK</td>
<td align="right">579,585</td>
<td align="right">579,585</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_METHOD</td>
<td align="right">555,766</td>
<td align="right">555,766</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST_WITH_KEYWORDS</td>
<td align="right">465,944</td>
<td align="right">465,944</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_DEREF</td>
<td align="right">438,777</td>
<td align="right">438,777</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_SET</td>
<td align="right">353,669</td>
<td align="right">353,669</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">IMPORT_NAME</td>
<td align="right">281,324</td>
<td align="right">281,324</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">IMPORT_FROM</td>
<td align="right">280,898</td>
<td align="right">280,898</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">FOR_ITER_RANGE</td>
<td align="right">258,617</td>
<td align="right">258,617</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_NO_DICT</td>
<td align="right">254,030</td>
<td align="right">254,030</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_ATTR</td>
<td align="right">165,604</td>
<td align="right">165,604</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_ATTR</td>
<td align="right">163,174</td>
<td align="right">163,174</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SPECIAL</td>
<td align="right">127,250</td>
<td align="right">127,250</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RAISE_VARARGS</td>
<td align="right">122,558</td>
<td align="right">122,558</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CLEANUP_THROW</td>
<td align="right">98,224</td>
<td align="right">98,224</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">84,680</td>
<td align="right">84,680</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNARY_NOT</td>
<td align="right">84,374</td>
<td align="right">84,374</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_STR_1</td>
<td align="right">76,258</td>
<td align="right">76,258</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_UPDATE</td>
<td align="right">72,426</td>
<td align="right">72,426</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_GETATTRIBUTE_OVERRIDDEN</td>
<td align="right">56,672</td>
<td align="right">56,672</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS_WITH_METACLASS_CHECK</td>
<td align="right">55,563</td>
<td align="right">55,563</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_FAST</td>
<td align="right">43,007</td>
<td align="right">43,007</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_ADD</td>
<td align="right">31,479</td>
<td align="right">31,479</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">27,512</td>
<td align="right">27,512</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL</td>
<td align="right">23,418</td>
<td align="right">23,418</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNARY_NEGATIVE</td>
<td align="right">19,679</td>
<td align="right">19,679</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_WITH_HINT</td>
<td align="right">19,017</td>
<td align="right">19,017</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_NAME</td>
<td align="right">10,977</td>
<td align="right">10,977</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CONVERT_VALUE</td>
<td align="right">5,655</td>
<td align="right">5,655</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_NAME</td>
<td align="right">5,547</td>
<td align="right">5,547</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RESUME</td>
<td align="right">3,042</td>
<td align="right">3,042</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_LIST</td>
<td align="right">2,949</td>
<td align="right">2,949</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW</td>
<td align="right">2,428</td>
<td align="right">2,428</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">MAP_ADD</td>
<td align="right">1,305</td>
<td align="right">1,305</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_LAZY_DICT</td>
<td align="right">1,133</td>
<td align="right">1,133</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">WITH_EXCEPT_START</td>
<td align="right">1,081</td>
<td align="right">1,081</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_FLOAT</td>
<td align="right">954</td>
<td align="right">954</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_BUILD_CLASS</td>
<td align="right">893</td>
<td align="right">893</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_MULTIPLY_INT</td>
<td align="right">777</td>
<td align="right">777</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNARY_INVERT</td>
<td align="right">723</td>
<td align="right">723</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR</td>
<td align="right">589</td>
<td align="right">589</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_LOCALS</td>
<td align="right">235</td>
<td align="right">235</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DICT_UPDATE</td>
<td align="right">214</td>
<td align="right">214</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">FORMAT_WITH_SPEC</td>
<td align="right">192</td>
<td align="right">192</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_FLOAT</td>
<td align="right">126</td>
<td align="right">126</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_FLOAT</td>
<td align="right">63</td>
<td align="right">63</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SETUP_ANNOTATIONS</td>
<td align="right">33</td>
<td align="right">33</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SLICE</td>
<td align="right">25</td>
<td align="right">25</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_NAME</td>
<td align="right">18</td>
<td align="right">18</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_GLOBAL</td>
<td align="right">15</td>
<td align="right">15</td>
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
<td align="right">641,420</td>
<td align="right">9.6%</td>
<td align="right">732,344</td>
<td align="right">10.8%</td>
<td align="right">14.2%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">6,066,087</td>
<td align="right">90.4%</td>
<td align="right">6,066,087</td>
<td align="right">89.2%</td>
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
<td align="right">2,357</td>
<td align="right">100.0%</td>
<td align="right">2,359</td>
<td align="right">100.0%</td>
<td align="right">0.1%</td>
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
<td align="left">multiply different types</td>
<td align="right">231</td>
<td align="right">9.8%</td>
<td align="right">232</td>
<td align="right">9.8%</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">add other</td>
<td align="right">1,018</td>
<td align="right">43.2%</td>
<td align="right">1,019</td>
<td align="right">43.2%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">remainder</td>
<td align="right">210</td>
<td align="right">8.9%</td>
<td align="right">210</td>
<td align="right">8.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">true divide different types</td>
<td align="right">173</td>
<td align="right">7.3%</td>
<td align="right">173</td>
<td align="right">7.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">add different types</td>
<td align="right">160</td>
<td align="right">6.8%</td>
<td align="right">160</td>
<td align="right">6.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">and int</td>
<td align="right">156</td>
<td align="right">6.6%</td>
<td align="right">156</td>
<td align="right">6.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">or</td>
<td align="right">148</td>
<td align="right">6.3%</td>
<td align="right">148</td>
<td align="right">6.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">xor</td>
<td align="right">120</td>
<td align="right">5.1%</td>
<td align="right">120</td>
<td align="right">5.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">subtract other</td>
<td align="right">66</td>
<td align="right">2.8%</td>
<td align="right">66</td>
<td align="right">2.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">and other</td>
<td align="right">36</td>
<td align="right">1.5%</td>
<td align="right">36</td>
<td align="right">1.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">true divide other</td>
<td align="right">21</td>
<td align="right">0.9%</td>
<td align="right">21</td>
<td align="right">0.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">lshift</td>
<td align="right">10</td>
<td align="right">0.4%</td>
<td align="right">10</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">rshift</td>
<td align="right">3</td>
<td align="right">0.1%</td>
<td align="right">3</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">and different types</td>
<td align="right">2</td>
<td align="right">0.1%</td>
<td align="right">2</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">floor divide</td>
<td align="right">2</td>
<td align="right">0.1%</td>
<td align="right">2</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">power</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">1</td>
<td align="right">0.0%</td>
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
<td align="right">446,194</td>
<td align="right">100.0%</td>
<td align="right">446,275</td>
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
<td align="right">69,475</td>
<td align="right">0.5%</td>
<td align="right">62,797</td>
<td align="right">0.5%</td>
<td align="right">-9.6%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">1,768,535</td>
<td align="right">13.1%</td>
<td align="right">1,912,348</td>
<td align="right">14.0%</td>
<td align="right">8.1%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">11,671,281</td>
<td align="right">86.3%</td>
<td align="right">11,644,911</td>
<td align="right">85.5%</td>
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
<td align="left">Success</td>
<td align="right">2,767</td>
<td align="right">32.7%</td>
<td align="right">2,641</td>
<td align="right">30.9%</td>
<td align="right">-4.6%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">5,695</td>
<td align="right">67.3%</td>
<td align="right">5,912</td>
<td align="right">69.1%</td>
<td align="right">3.8%</td>
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
<td align="left">out of range</td>
<td align="right">2,474</td>
<td align="right">43.4%</td>
<td align="right">2,690</td>
<td align="right">45.5%</td>
<td align="right">8.7%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">773</td>
<td align="right">13.6%</td>
<td align="right">774</td>
<td align="right">13.1%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">string slice</td>
<td align="right">887</td>
<td align="right">15.6%</td>
<td align="right">887</td>
<td align="right">15.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list slice</td>
<td align="right">803</td>
<td align="right">14.1%</td>
<td align="right">803</td>
<td align="right">13.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">buffer int</td>
<td align="right">690</td>
<td align="right">12.1%</td>
<td align="right">690</td>
<td align="right">11.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">code complex parameters</td>
<td align="right">32</td>
<td align="right">0.6%</td>
<td align="right">32</td>
<td align="right">0.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">sequence int</td>
<td align="right">21</td>
<td align="right">0.4%</td>
<td align="right">21</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">tuple slice</td>
<td align="right">14</td>
<td align="right">0.2%</td>
<td align="right">14</td>
<td align="right">0.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">buffer slice</td>
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
<td align="right">7,661,090</td>
<td align="right">11.3%</td>
<td align="right">7,741,376</td>
<td align="right">11.4%</td>
<td align="right">1.0%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">60,396,093</td>
<td align="right">88.7%</td>
<td align="right">60,375,606</td>
<td align="right">88.6%</td>
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
<td align="right">7,320</td>
<td align="right">0.0%</td>
<td align="right">7,320</td>
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
<td align="right">8,513</td>
<td align="right">0.0%</td>
<td align="right">8,513</td>
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
<td align="right">174,474</td>
<td align="right">100.0%</td>
<td align="right">178,609</td>
<td align="right">100.0%</td>
<td align="right">2.4%</td>
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
<td align="left">init not simple</td>
<td align="right">62</td>
<td align="right">62 / 0 !!</td>
<td align="right">62</td>
<td align="right">62 / 0 !!</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">init not inline values</td>
<td align="right">35</td>
<td align="right">35 / 0 !!</td>
<td align="right">35</td>
<td align="right">35 / 0 !!</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">init not python</td>
<td align="right">21</td>
<td align="right">21 / 0 !!</td>
<td align="right">21</td>
<td align="right">21 / 0 !!</td>
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
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">435,985</td>
<td align="right">99.4%</td>
<td align="right">573,498</td>
<td align="right">99.6%</td>
<td align="right">31.5%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">568</td>
<td align="right">0.1%</td>
<td align="right">568</td>
<td align="right">0.1%</td>
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
<td align="right">3,105</td>
<td align="right">0.0%</td>
<td align="right">3,370</td>
<td align="right">0.0%</td>
<td align="right">8.5%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">1,042,068</td>
<td align="right">5.7%</td>
<td align="right">1,061,557</td>
<td align="right">5.8%</td>
<td align="right">1.9%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">17,217,515</td>
<td align="right">94.3%</td>
<td align="right">17,217,507</td>
<td align="right">94.2%</td>
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
<td align="right">2,576</td>
<td align="right">62.4%</td>
<td align="right">2,586</td>
<td align="right">62.4%</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">1,554</td>
<td align="right">37.6%</td>
<td align="right">1,559</td>
<td align="right">37.6%</td>
<td align="right">0.3%</td>
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
<td align="left">different types</td>
<td align="right">1,102</td>
<td align="right">42.8%</td>
<td align="right">1,112</td>
<td align="right">43.0%</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">baseobject</td>
<td align="right">673</td>
<td align="right">26.1%</td>
<td align="right">673</td>
<td align="right">26.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">244</td>
<td align="right">9.5%</td>
<td align="right">244</td>
<td align="right">9.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">183</td>
<td align="right">7.1%</td>
<td align="right">183</td>
<td align="right">7.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list</td>
<td align="right">168</td>
<td align="right">6.5%</td>
<td align="right">168</td>
<td align="right">6.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">90</td>
<td align="right">3.5%</td>
<td align="right">90</td>
<td align="right">3.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">bool</td>
<td align="right">51</td>
<td align="right">2.0%</td>
<td align="right">51</td>
<td align="right">2.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">string</td>
<td align="right">48</td>
<td align="right">1.9%</td>
<td align="right">48</td>
<td align="right">1.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">big int</td>
<td align="right">16</td>
<td align="right">0.6%</td>
<td align="right">16</td>
<td align="right">0.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">float long</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">1</td>
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
<td align="right">2,405,050</td>
<td align="right">36.8%</td>
<td align="right">2,404,248</td>
<td align="right">36.8%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">4,103,526</td>
<td align="right">62.7%</td>
<td align="right">4,103,526</td>
<td align="right">62.7%</td>
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
<td align="right">26,561</td>
<td align="right">0.4%</td>
<td align="right">26,561</td>
<td align="right">0.4%</td>
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
<td align="right">6,211</td>
<td align="right">100.0%</td>
<td align="right">6,213</td>
<td align="right">100.0%</td>
<td align="right">0.0%</td>
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
<td align="left">list</td>
<td align="right">1,213</td>
<td align="right">19.5%</td>
<td align="right">1,194</td>
<td align="right">19.2%</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">3,228</td>
<td align="right">52.0%</td>
<td align="right">3,249</td>
<td align="right">52.3%</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">str</td>
<td align="right">1,241</td>
<td align="right">20.0%</td>
<td align="right">1,241</td>
<td align="right">20.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">529</td>
<td align="right">8.5%</td>
<td align="right">529</td>
<td align="right">8.5%</td>
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
<td align="right">202,035</td>
<td align="right">0.7%</td>
<td align="right">224,728</td>
<td align="right">0.8%</td>
<td align="right">11.2%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">23,151,117</td>
<td align="right">84.4%</td>
<td align="right">22,724,018</td>
<td align="right">84.2%</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">4,072,743</td>
<td align="right">14.8%</td>
<td align="right">4,026,917</td>
<td align="right">14.9%</td>
<td align="right">-1.1%</td>
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
<td align="right">7,772</td>
<td align="right">61.1%</td>
<td align="right">8,638</td>
<td align="right">61.6%</td>
<td align="right">11.1%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">4,951</td>
<td align="right">38.9%</td>
<td align="right">5,389</td>
<td align="right">38.4%</td>
<td align="right">8.8%</td>
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
<td align="left">set</td>
<td align="right">3,361</td>
<td align="right">43.2%</td>
<td align="right">4,243</td>
<td align="right">49.1%</td>
<td align="right">26.2%</td>
</tr>
<tr>
<td align="left">enumerate</td>
<td align="right">1,206</td>
<td align="right">15.5%</td>
<td align="right">1,190</td>
<td align="right">13.8%</td>
<td align="right">-1.3%</td>
</tr>
<tr>
<td align="left">dict items</td>
<td align="right">1,408</td>
<td align="right">18.1%</td>
<td align="right">1,408</td>
<td align="right">16.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">itertools</td>
<td align="right">604</td>
<td align="right">7.8%</td>
<td align="right">604</td>
<td align="right">7.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">dict values</td>
<td align="right">306</td>
<td align="right">3.9%</td>
<td align="right">306</td>
<td align="right">3.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">zip</td>
<td align="right">276</td>
<td align="right">3.6%</td>
<td align="right">276</td>
<td align="right">3.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">dict keys</td>
<td align="right">253</td>
<td align="right">3.3%</td>
<td align="right">253</td>
<td align="right">2.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">reversed list</td>
<td align="right">140</td>
<td align="right">1.8%</td>
<td align="right">140</td>
<td align="right">1.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">97</td>
<td align="right">1.2%</td>
<td align="right">97</td>
<td align="right">1.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">callable</td>
<td align="right">44</td>
<td align="right">0.6%</td>
<td align="right">44</td>
<td align="right">0.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">ascii string</td>
<td align="right">42</td>
<td align="right">0.5%</td>
<td align="right">42</td>
<td align="right">0.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">seq iter</td>
<td align="right">17</td>
<td align="right">0.2%</td>
<td align="right">17</td>
<td align="right">0.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">bytes</td>
<td align="right">11</td>
<td align="right">0.1%</td>
<td align="right">11</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">map</td>
<td align="right">7</td>
<td align="right">0.1%</td>
<td align="right">7</td>
<td align="right">0.1%</td>
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
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">30,441,168</td>
<td align="right">25.0%</td>
<td align="right">33,085,528</td>
<td align="right">26.7%</td>
<td align="right">8.7%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">81,840,109</td>
<td align="right">67.2%</td>
<td align="right">81,342,005</td>
<td align="right">65.6%</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">9,499,723</td>
<td align="right">7.8%</td>
<td align="right">9,527,519</td>
<td align="right">7.7%</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">
deopt
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">207,304</td>
<td align="right">0.2%</td>
<td align="right">207,304</td>
<td align="right">0.2%</td>
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
<td align="right">634,166</td>
<td align="right">97.5%</td>
<td align="right">684,257</td>
<td align="right">97.7%</td>
<td align="right">7.9%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">16,261</td>
<td align="right">2.5%</td>
<td align="right">16,284</td>
<td align="right">2.3%</td>
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
<td align="left">mutable class</td>
<td align="right">5,309</td>
<td align="right">32.6%</td>
<td align="right">5,331</td>
<td align="right">32.7%</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">overriding descriptor</td>
<td align="right">3,651</td>
<td align="right">22.5%</td>
<td align="right">3,652</td>
<td align="right">22.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">method</td>
<td align="right">1,553</td>
<td align="right">9.6%</td>
<td align="right">1,553</td>
<td align="right">9.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">class attr simple</td>
<td align="right">1,337</td>
<td align="right">8.2%</td>
<td align="right">1,337</td>
<td align="right">8.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">metaclass attribute</td>
<td align="right">990</td>
<td align="right">6.1%</td>
<td align="right">990</td>
<td align="right">6.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">non overriding descriptor</td>
<td align="right">836</td>
<td align="right">5.1%</td>
<td align="right">836</td>
<td align="right">5.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">class method obj</td>
<td align="right">392</td>
<td align="right">2.4%</td>
<td align="right">392</td>
<td align="right">2.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">overridden</td>
<td align="right">318</td>
<td align="right">2.0%</td>
<td align="right">318</td>
<td align="right">2.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">wrong number arguments</td>
<td align="right">235</td>
<td align="right">1.4%</td>
<td align="right">235</td>
<td align="right">1.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">builtin class method</td>
<td align="right">204</td>
<td align="right">1.3%</td>
<td align="right">204</td>
<td align="right">1.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not managed dict</td>
<td align="right">102</td>
<td align="right">0.6%</td>
<td align="right">102</td>
<td align="right">0.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">module attr not found</td>
<td align="right">64</td>
<td align="right">0.4%</td>
<td align="right">64</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not in dict</td>
<td align="right">42</td>
<td align="right">0.3%</td>
<td align="right">42</td>
<td align="right">0.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">split dict</td>
<td align="right">11</td>
<td align="right">0.1%</td>
<td align="right">11</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">expected error</td>
<td align="right">3</td>
<td align="right">0.0%</td>
<td align="right">3</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">non object slot</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">1</td>
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
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">55,220,135</td>
<td align="right">99.9%</td>
<td align="right">54,651,170</td>
<td align="right">99.9%</td>
<td align="right">-1.0%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">5,293</td>
<td align="right">0.0%</td>
<td align="right">5,293</td>
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
<td align="right">571</td>
<td align="right">0.0%</td>
<td align="right">571</td>
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
<td align="right">9,783</td>
<td align="right">0.0%</td>
<td align="right">9,783</td>
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
<td align="right">18,260</td>
<td align="right">100.0%</td>
<td align="right">18,260</td>
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
<td align="right">138</td>
<td align="right">0.0%</td>
<td align="right">138</td>
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
<td align="right">721,370</td>
<td align="right">99.9%</td>
<td align="right">721,370</td>
<td align="right">99.9%</td>
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
<td align="right">451</td>
<td align="right">100.0%</td>
<td align="right">451</td>
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
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">6,490,754</td>
<td align="right">54.9%</td>
<td align="right">6,490,754</td>
<td align="right">54.9%</td>
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
<td align="right">5,334,244</td>
<td align="right">45.1%</td>
<td align="right">5,334,244</td>
<td align="right">45.1%</td>
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
<td align="right">104</td>
<td align="right">3.5%</td>
<td align="right">104</td>
<td align="right">3.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">2,861</td>
<td align="right">96.5%</td>
<td align="right">2,861</td>
<td align="right">96.5%</td>
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
<td align="right">2,058</td>
<td align="right">71.9%</td>
<td align="right">2,058</td>
<td align="right">71.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">752</td>
<td align="right">26.3%</td>
<td align="right">752</td>
<td align="right">26.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">51</td>
<td align="right">1.8%</td>
<td align="right">51</td>
<td align="right">1.8%</td>
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
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">1,974,587</td>
<td align="right">14.1%</td>
<td align="right">1,976,601</td>
<td align="right">14.1%</td>
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
<td align="right">10,788,405</td>
<td align="right">77.1%</td>
<td align="right">10,786,429</td>
<td align="right">77.1%</td>
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
<td align="right">1,214,557</td>
<td align="right">8.7%</td>
<td align="right">1,214,557</td>
<td align="right">8.7%</td>
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
<td align="right">41,796</td>
<td align="right">94.0%</td>
<td align="right">41,834</td>
<td align="right">94.0%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">2,659</td>
<td align="right">6.0%</td>
<td align="right">2,659</td>
<td align="right">6.0%</td>
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
<td align="left">not managed dict</td>
<td align="right">1,397</td>
<td align="right">52.5%</td>
<td align="right">1,397</td>
<td align="right">52.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not in dict</td>
<td align="right">440</td>
<td align="right">16.5%</td>
<td align="right">440</td>
<td align="right">16.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">class attr simple</td>
<td align="right">284</td>
<td align="right">10.7%</td>
<td align="right">284</td>
<td align="right">10.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">property</td>
<td align="right">230</td>
<td align="right">8.6%</td>
<td align="right">230</td>
<td align="right">8.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">overridden</td>
<td align="right">129</td>
<td align="right">4.9%</td>
<td align="right">129</td>
<td align="right">4.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not in keys</td>
<td align="right">107</td>
<td align="right">4.0%</td>
<td align="right">107</td>
<td align="right">4.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">overriding descriptor</td>
<td align="right">39</td>
<td align="right">1.5%</td>
<td align="right">39</td>
<td align="right">1.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">split dict</td>
<td align="right">16</td>
<td align="right">0.6%</td>
<td align="right">16</td>
<td align="right">0.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">no dict</td>
<td align="right">8</td>
<td align="right">0.3%</td>
<td align="right">8</td>
<td align="right">0.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">non object slot</td>
<td align="right">6</td>
<td align="right">0.2%</td>
<td align="right">6</td>
<td align="right">0.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">method</td>
<td align="right">2</td>
<td align="right">0.1%</td>
<td align="right">2</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">mutable class</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">1</td>
<td align="right">0.0%</td>
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
<td align="right">25</td>
<td align="right">100.0%</td>
<td align="right">25</td>
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
<td align="right">83,907</td>
<td align="right">3.1%</td>
<td align="right">83,907</td>
<td align="right">3.1%</td>
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
<td align="right">2,586,147</td>
<td align="right">96.8%</td>
<td align="right">2,586,147</td>
<td align="right">96.8%</td>
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
<td align="right">343</td>
<td align="right">44.4%</td>
<td align="right">343</td>
<td align="right">44.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">430</td>
<td align="right">55.6%</td>
<td align="right">430</td>
<td align="right">55.6%</td>
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
<td align="left">dict subclass no override</td>
<td align="right">240</td>
<td align="right">55.8%</td>
<td align="right">240</td>
<td align="right">55.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list slice</td>
<td align="right">92</td>
<td align="right">21.4%</td>
<td align="right">92</td>
<td align="right">21.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">out of range</td>
<td align="right">47</td>
<td align="right">10.9%</td>
<td align="right">47</td>
<td align="right">10.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">25</td>
<td align="right">5.8%</td>
<td align="right">25</td>
<td align="right">5.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">bytearray int</td>
<td align="right">18</td>
<td align="right">4.2%</td>
<td align="right">18</td>
<td align="right">4.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">py simple</td>
<td align="right">8</td>
<td align="right">1.9%</td>
<td align="right">8</td>
<td align="right">1.9%</td>
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
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">2,747,206</td>
<td align="right">6.5%</td>
<td align="right">2,980,896</td>
<td align="right">7.0%</td>
<td align="right">8.5%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">39,031,196</td>
<td align="right">92.1%</td>
<td align="right">39,051,658</td>
<td align="right">91.6%</td>
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
<td align="right">565,579</td>
<td align="right">1.3%</td>
<td align="right">565,582</td>
<td align="right">1.3%</td>
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
<td align="right">59,022</td>
<td align="right">87.3%</td>
<td align="right">63,413</td>
<td align="right">88.1%</td>
<td align="right">7.4%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">8,576</td>
<td align="right">12.7%</td>
<td align="right">8,576</td>
<td align="right">11.9%</td>
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
<td align="left">set</td>
<td align="right">5,830</td>
<td align="right">68.0%</td>
<td align="right">5,830</td>
<td align="right">68.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">804</td>
<td align="right">9.4%</td>
<td align="right">804</td>
<td align="right">9.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">mapping</td>
<td align="right">665</td>
<td align="right">7.8%</td>
<td align="right">665</td>
<td align="right">7.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">number</td>
<td align="right">564</td>
<td align="right">6.6%</td>
<td align="right">564</td>
<td align="right">6.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">dict</td>
<td align="right">325</td>
<td align="right">3.8%</td>
<td align="right">325</td>
<td align="right">3.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">317</td>
<td align="right">3.7%</td>
<td align="right">317</td>
<td align="right">3.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">bytes</td>
<td align="right">50</td>
<td align="right">0.6%</td>
<td align="right">50</td>
<td align="right">0.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">sequence</td>
<td align="right">21</td>
<td align="right">0.2%</td>
<td align="right">21</td>
<td align="right">0.2%</td>
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
<td align="right">7,966,485</td>
<td align="right">90.4%</td>
<td align="right">7,965,797</td>
<td align="right">90.4%</td>
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
<td align="right">848,872</td>
<td align="right">9.6%</td>
<td align="right">848,872</td>
<td align="right">9.6%</td>
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
<td align="right">847</td>
<td align="right">77.5%</td>
<td align="right">847</td>
<td align="right">77.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">246</td>
<td align="right">22.5%</td>
<td align="right">246</td>
<td align="right">22.5%</td>
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
<td align="left">sequence</td>
<td align="right">222</td>
<td align="right">90.2%</td>
<td align="right">222</td>
<td align="right">90.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">iterator</td>
<td align="right">24</td>
<td align="right">9.8%</td>
<td align="right">24</td>
<td align="right">9.8%</td>
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
<td align="right">43,571,846</td>
<td align="right">4.1%</td>
<td align="right">46,685,975</td>
<td align="right">4.4%</td>
<td align="right">7.1%</td>
</tr>
<tr>
<td align="left">
Basic
<details>
<summary>ⓘ</summary>

Instructions that are not and cannot be specialized, e.g. `LOAD_FAST`.
</details>
</td>
<td align="right">585,875,906</td>
<td align="right">55.5%</td>
<td align="right">593,798,580</td>
<td align="right">55.4%</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">
Specialized hits
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that complete.
</details>
</td>
<td align="right">396,353,626</td>
<td align="right">37.6%</td>
<td align="right">400,940,351</td>
<td align="right">37.4%</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">
Not specialized
<details>
<summary>ⓘ</summary>

Instructions that could be specialized but aren't, e.g. `LOAD_ATTR`, `BINARY_SLICE`.
</details>
</td>
<td align="right">29,271,919</td>
<td align="right">2.8%</td>
<td align="right">29,508,744</td>
<td align="right">2.8%</td>
<td align="right">0.8%</td>
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
<td align="left">BINARY_OP</td>
<td align="right">641,420</td>
<td align="right">2.2%</td>
<td align="right">732,344</td>
<td align="right">2.5%</td>
<td align="right">14.2%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">1,768,535</td>
<td align="right">6.1%</td>
<td align="right">1,912,348</td>
<td align="right">6.5%</td>
<td align="right">8.1%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">1,042,068</td>
<td align="right">3.6%</td>
<td align="right">1,061,557</td>
<td align="right">3.6%</td>
<td align="right">1.9%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">4,072,743</td>
<td align="right">14.0%</td>
<td align="right">4,026,917</td>
<td align="right">13.7%</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">9,499,723</td>
<td align="right">32.7%</td>
<td align="right">9,527,519</td>
<td align="right">32.5%</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">2,405,050</td>
<td align="right">8.3%</td>
<td align="right">2,404,248</td>
<td align="right">8.2%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">565,579</td>
<td align="right">1.9%</td>
<td align="right">565,582</td>
<td align="right">1.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SEND</td>
<td align="right">6,490,754</td>
<td align="right">22.3%</td>
<td align="right">6,490,754</td>
<td align="right">22.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">1,214,557</td>
<td align="right">4.2%</td>
<td align="right">1,214,557</td>
<td align="right">4.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE</td>
<td align="right">848,872</td>
<td align="right">2.9%</td>
<td align="right">848,872</td>
<td align="right">2.9%</td>
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
<td align="left">LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">2,554,223</td>
<td align="right">5.9%</td>
<td align="right">3,109,855</td>
<td align="right">6.7%</td>
<td align="right">21.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_WITH_HINT</td>
<td align="right">4,715,776</td>
<td align="right">10.8%</td>
<td align="right">5,215,654</td>
<td align="right">11.2%</td>
<td align="right">10.6%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">7,027,623</td>
<td align="right">16.1%</td>
<td align="right">7,752,342</td>
<td align="right">16.6%</td>
<td align="right">10.3%</td>
</tr>
<tr>
<td align="left">TO_BOOL_ALWAYS_TRUE</td>
<td align="right">2,340,002</td>
<td align="right">5.4%</td>
<td align="right">2,576,501</td>
<td align="right">5.5%</td>
<td align="right">10.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">833,286</td>
<td align="right">1.9%</td>
<td align="right">900,357</td>
<td align="right">1.9%</td>
<td align="right">8.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">15,244,738</td>
<td align="right">35.0%</td>
<td align="right">16,041,688</td>
<td align="right">34.4%</td>
<td align="right">5.2%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">1,224,514</td>
<td align="right">2.8%</td>
<td align="right">1,166,818</td>
<td align="right">2.5%</td>
<td align="right">-4.7%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">5,677,332</td>
<td align="right">13.0%</td>
<td align="right">5,780,793</td>
<td align="right">12.4%</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">1,974,455</td>
<td align="right">4.5%</td>
<td align="right">1,976,469</td>
<td align="right">4.2%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">410,035</td>
<td align="right">0.9%</td>
<td align="right"></td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">CALL_KW_PY</td>
<td align="right"></td>
<td align="right"></td>
<td align="right">533,301</td>
<td align="right">1.1%</td>
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
<td align="left">Frame objects created</td>
<td align="right">1,202,496</td>
<td align="right">1.7%</td>
<td align="right">1,166,251</td>
<td align="right">1.7%</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (generator)</td>
<td align="right">5,435,752</td>
<td align="right">7.8%</td>
<td align="right">5,399,367</td>
<td align="right">7.8%</td>
<td align="right">-0.7%</td>
</tr>
<tr>
<td align="left">Calls to PyEval_EvalDefault</td>
<td align="right">11,994,104</td>
<td align="right">17.3%</td>
<td align="right">11,957,722</td>
<td align="right">17.3%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (total)</td>
<td align="right">11,994,104</td>
<td align="right">17.3%</td>
<td align="right">11,957,722</td>
<td align="right">17.3%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (slot)</td>
<td align="right">388,592</td>
<td align="right">0.6%</td>
<td align="right">388,595</td>
<td align="right">0.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function vectorcall)</td>
<td align="right">6,557,246</td>
<td align="right">9.5%</td>
<td align="right">6,557,249</td>
<td align="right">9.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (vector)</td>
<td align="right">6,558,352</td>
<td align="right">9.5%</td>
<td align="right">6,558,355</td>
<td align="right">9.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls to Python functions inlined</td>
<td align="right">57,323,144</td>
<td align="right">82.7%</td>
<td align="right">57,323,168</td>
<td align="right">82.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Frames pushed</td>
<td align="right">47,794,558</td>
<td align="right">69.0%</td>
<td align="right">47,794,564</td>
<td align="right">69.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (legacy)</td>
<td align="right">213</td>
<td align="right">0.0%</td>
<td align="right">213</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (build class)</td>
<td align="right">893</td>
<td align="right">0.0%</td>
<td align="right">893</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function ex)</td>
<td align="right">453,513</td>
<td align="right">0.7%</td>
<td align="right">453,513</td>
<td align="right">0.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (api)</td>
<td align="right">1,161,502</td>
<td align="right">1.7%</td>
<td align="right">1,161,502</td>
<td align="right">1.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (method)</td>
<td align="right">24</td>
<td align="right">0.0%</td>
<td align="right">24</td>
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
<td align="left">Method cache dunder misses</td>
<td align="right">196,747</td>
<td align="right"></td>
<td align="right">203,797</td>
<td align="right"></td>
<td align="right">3.6%</td>
</tr>
<tr>
<td align="left">Mortal decrefs</td>
<td align="right">347,764,469</td>
<td align="right">28.3%</td>
<td align="right">336,303,459</td>
<td align="right">27.5%</td>
<td align="right">-3.3%</td>
</tr>
<tr>
<td align="left">Mortal increfs</td>
<td align="right">371,994,119</td>
<td align="right">33.5%</td>
<td align="right">360,951,676</td>
<td align="right">32.7%</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">Method cache misses</td>
<td align="right">1,532,875</td>
<td align="right"></td>
<td align="right">1,494,347</td>
<td align="right"></td>
<td align="right">-2.5%</td>
</tr>
<tr>
<td align="left">Method cache collisions</td>
<td align="right">1,727,550</td>
<td align="right"></td>
<td align="right">1,696,040</td>
<td align="right"></td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">Interpreter immortal increfs</td>
<td align="right">118,468,431</td>
<td align="right">10.7%</td>
<td align="right">120,203,308</td>
<td align="right">10.9%</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">Allocations to 4 kbytes</td>
<td align="right">318,183</td>
<td align="right">0.3%</td>
<td align="right">314,288</td>
<td align="right">0.3%</td>
<td align="right">-1.2%</td>
</tr>
<tr>
<td align="left">Method cache hits</td>
<td align="right">51,831,978</td>
<td align="right"></td>
<td align="right">52,430,482</td>
<td align="right"></td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">Interpreter mortal increfs</td>
<td align="right">415,891,632</td>
<td align="right">37.5%</td>
<td align="right">420,330,356</td>
<td align="right">38.1%</td>
<td align="right">1.1%</td>
</tr>
<tr>
<td align="left">Interpreter immortal decrefs</td>
<td align="right">175,128,315</td>
<td align="right">14.3%</td>
<td align="right">176,805,235</td>
<td align="right">14.5%</td>
<td align="right">1.0%</td>
</tr>
<tr>
<td align="left">Interpreter mortal decrefs</td>
<td align="right">521,410,570</td>
<td align="right">42.5%</td>
<td align="right">526,120,936</td>
<td align="right">43.1%</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">Immortal increfs</td>
<td align="right">203,965,866</td>
<td align="right">18.4%</td>
<td align="right">202,276,495</td>
<td align="right">18.3%</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">Immortal decrefs</td>
<td align="right">183,014,862</td>
<td align="right">14.9%</td>
<td align="right">182,109,624</td>
<td align="right">14.9%</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">Frees</td>
<td align="right">66,125,555</td>
<td align="right"></td>
<td align="right">65,976,632</td>
<td align="right"></td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Allocations</td>
<td align="right">67,692,070</td>
<td align="right">70.7%</td>
<td align="right">67,544,255</td>
<td align="right">70.6%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Allocations to 512 bytes</td>
<td align="right">67,335,178</td>
<td align="right">70.3%</td>
<td align="right">67,191,299</td>
<td align="right">70.3%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Allocations over 4 kbytes</td>
<td align="right">38,709</td>
<td align="right">0.0%</td>
<td align="right">38,668</td>
<td align="right">0.0%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">Method cache dunder hits</td>
<td align="right">28,747,472</td>
<td align="right"></td>
<td align="right">28,751,102</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations from freelist</td>
<td align="right">28,071,931</td>
<td align="right">29.3%</td>
<td align="right">28,072,040</td>
<td align="right">29.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Frees to freelist</td>
<td align="right">28,090,887</td>
<td align="right"></td>
<td align="right">28,090,996</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Inline values</td>
<td align="right">1,109,921</td>
<td align="right"></td>
<td align="right">1,109,921</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (on request)</td>
<td align="right">99,223</td>
<td align="right">8.9%</td>
<td align="right">99,223</td>
<td align="right">8.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (new key)</td>
<td align="right">5,005</td>
<td align="right">0.5%</td>
<td align="right">5,005</td>
<td align="right">0.5%</td>
<td align="right">0.0%</td>
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
<td align="right">1,326</td>
<td align="right">14,434</td>
<td align="right">43,134,146</td>
<td align="right">1,326</td>
<td align="right">14,434</td>
<td align="right">43,092,580</td>
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
Trace too short
<details>
<summary>ⓘ</summary>

A potential trace is abandoced because it it too short.
</details>
</td>
<td align="right">10,569</td>
<td align="right">53.5%</td>
<td align="right">2,516</td>
<td align="right">40.4%</td>
<td align="right">-76.2%</td>
</tr>
<tr>
<td align="left">
Trace stack underflow
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it pops more frames than it pushes.
</details>
</td>
<td align="right">8,938</td>
<td align="right">45.3%</td>
<td align="right">2,143</td>
<td align="right">34.4%</td>
<td align="right">-76.0%</td>
</tr>
<tr>
<td align="left">
Optimization attempts
<details>
<summary>ⓘ</summary>

The number of times a potential trace is identified.  Specifically, this occurs in the JUMP BACKWARD instruction when the counter reaches a threshold.
</details>
</td>
<td align="right">19,752</td>
<td align="right"></td>
<td align="right">6,234</td>
<td align="right"></td>
<td align="right">-68.4%</td>
</tr>
<tr>
<td align="left">
Inner loop found
<details>
<summary>ⓘ</summary>

A trace is truncated because it has an inner loop
</details>
</td>
<td align="right">237</td>
<td align="right">1.2%</td>
<td align="right">85</td>
<td align="right">1.4%</td>
<td align="right">-64.1%</td>
</tr>
<tr>
<td align="left">
Traces created
<details>
<summary>ⓘ</summary>

The number of traces that were successfully created.
</details>
</td>
<td align="right">9,183</td>
<td align="right">46.5%</td>
<td align="right">3,718</td>
<td align="right">59.6%</td>
<td align="right">-59.5%</td>
</tr>
<tr>
<td align="left">
Traces executed
<details>
<summary>ⓘ</summary>

The number of traces that were executed
</details>
</td>
<td align="right">42,109,489</td>
<td align="right"></td>
<td align="right">35,174,815</td>
<td align="right"></td>
<td align="right">-16.5%</td>
</tr>
<tr>
<td align="left">
Uops executed
<details>
<summary>ⓘ</summary>

The total number of uops (micro-operations) that were executed
</details>
</td>
<td align="right">465,140,841</td>
<td align="right">1,104.6%</td>
<td align="right">417,340,835</td>
<td align="right">1,186.5%</td>
<td align="right">-10.3%</td>
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
Low confidence
<details>
<summary>ⓘ</summary>

A trace is abandoned because the likelihood of the jump to top being taken is too low.
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
<td align="right">9,078</td>
<td align="right">98.9%</td>
<td align="right">3,632</td>
<td align="right">97.7%</td>
<td align="right">-60.0%</td>
</tr>
<tr>
<td align="left">
Optimizer attempts
<details>
<summary>ⓘ</summary>

The number of times the trace optimizer (_Py_uop_analyze_and_optimize) was run.
</details>
</td>
<td align="right">9,183</td>
<td align="right"></td>
<td align="right">3,718</td>
<td align="right"></td>
<td align="right">-59.5%</td>
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
<td align="right">1,446</td>
<td align="right">15.7%</td>
<td align="right">523</td>
<td align="right">14.1%</td>
<td align="right">-63.8%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">1,970</td>
<td align="right">21.5%</td>
<td align="right">858</td>
<td align="right">23.1%</td>
<td align="right">-56.4%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">3,361</td>
<td align="right">36.6%</td>
<td align="right">1,207</td>
<td align="right">32.5%</td>
<td align="right">-64.1%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">1,742</td>
<td align="right">19.0%</td>
<td align="right">850</td>
<td align="right">22.9%</td>
<td align="right">-51.2%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">516</td>
<td align="right">5.6%</td>
<td align="right">213</td>
<td align="right">5.7%</td>
<td align="right">-58.7%</td>
</tr>
<tr>
<td align="left"><= 256</td>
<td align="right">107</td>
<td align="right">1.2%</td>
<td align="right">66</td>
<td align="right">1.8%</td>
<td align="right">-38.3%</td>
</tr>
<tr>
<td align="left"><= 512</td>
<td align="right">41</td>
<td align="right">0.4%</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">-97.6%</td>
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
<td align="right">797</td>
<td align="right">8.7%</td>
<td align="right">348</td>
<td align="right">9.4%</td>
<td align="right">-56.3%</td>
</tr>
<tr>
<td align="left"><= 8</td>
<td align="right">1,739</td>
<td align="right">18.9%</td>
<td align="right">785</td>
<td align="right">21.1%</td>
<td align="right">-54.9%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">2,310</td>
<td align="right">25.2%</td>
<td align="right">594</td>
<td align="right">16.0%</td>
<td align="right">-74.3%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">2,788</td>
<td align="right">30.4%</td>
<td align="right">1,152</td>
<td align="right">31.0%</td>
<td align="right">-58.7%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">1,250</td>
<td align="right">13.6%</td>
<td align="right">687</td>
<td align="right">18.5%</td>
<td align="right">-45.0%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">153</td>
<td align="right">1.7%</td>
<td align="right">66</td>
<td align="right">1.8%</td>
<td align="right">-56.9%</td>
</tr>
<tr>
<td align="left"><= 256</td>
<td align="right">41</td>
<td align="right">0.4%</td>
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
<td align="left">_CALL_TUPLE_1</td>
<td align="right">35,434</td>
<td align="right">86,054</td>
<td align="right">142.9%</td>
</tr>
<tr>
<td align="left">_LIST_APPEND</td>
<td align="right">29,726</td>
<td align="right">64,829</td>
<td align="right">118.1%</td>
</tr>
<tr>
<td align="left">_CHECK_CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">1,511,905</td>
<td align="right">3,072,052</td>
<td align="right">103.2%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_KW</td>
<td align="right">356,839</td>
<td align="right">35</td>
<td align="right">-100.0%</td>
</tr>
<tr>
<td align="left">_PY_FRAME_KW</td>
<td align="right">255,989</td>
<td align="right">35</td>
<td align="right">-100.0%</td>
</tr>
<tr>
<td align="left">_DELETE_SUBSCR</td>
<td align="right">13,444</td>
<td align="right">228</td>
<td align="right">-98.3%</td>
</tr>
<tr>
<td align="left">_PY_FRAME_GENERAL</td>
<td align="right">317,872</td>
<td align="right">6,210</td>
<td align="right">-98.0%</td>
</tr>
<tr>
<td align="left">_GUARD_DORV_NO_DICT</td>
<td align="right">10,550</td>
<td align="right">557</td>
<td align="right">-94.7%</td>
</tr>
<tr>
<td align="left">_STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">10,550</td>
<td align="right">557</td>
<td align="right">-94.7%</td>
</tr>
<tr>
<td align="left">_MAKE_FUNCTION</td>
<td align="right">38,080</td>
<td align="right">2,182</td>
<td align="right">-94.3%</td>
</tr>
<tr>
<td align="left">_SET_FUNCTION_ATTRIBUTE</td>
<td align="right">24,184</td>
<td align="right">2,062</td>
<td align="right">-91.5%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP</td>
<td align="right">22,336</td>
<td align="right">2,598</td>
<td align="right">-88.4%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_NONE_POP</td>
<td align="right">1,166,252</td>
<td align="right">147,008</td>
<td align="right">-87.4%</td>
</tr>
<tr>
<td align="left">_COPY</td>
<td align="right">137,374</td>
<td align="right">17,917</td>
<td align="right">-87.0%</td>
</tr>
<tr>
<td align="left">_CALL_LIST_APPEND</td>
<td align="right">19,807</td>
<td align="right">4,077</td>
<td align="right">-79.4%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_SLOT_0</td>
<td align="right">482,774</td>
<td align="right">139,082</td>
<td align="right">-71.2%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">114,259</td>
<td align="right">36,495</td>
<td align="right">-68.1%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_0</td>
<td align="right">4,914,821</td>
<td align="right">1,865,280</td>
<td align="right">-62.0%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_0</td>
<td align="right">816,970</td>
<td align="right">387,366</td>
<td align="right">-52.6%</td>
</tr>
<tr>
<td align="left">_RETURN_GENERATOR</td>
<td align="right">4,410</td>
<td align="right">2,178</td>
<td align="right">-50.6%</td>
</tr>
<tr>
<td align="left">_IS_OP</td>
<td align="right">434,835</td>
<td align="right">633,765</td>
<td align="right">45.7%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_0</td>
<td align="right">67,411</td>
<td align="right">37,089</td>
<td align="right">-45.0%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_INSTANCE_VALUE_0</td>
<td align="right">2,001,953</td>
<td align="right">1,124,977</td>
<td align="right">-43.8%</td>
</tr>
<tr>
<td align="left">_SAVE_RETURN_OFFSET</td>
<td align="right">1,920,627</td>
<td align="right">1,087,377</td>
<td align="right">-43.4%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR</td>
<td align="right">5,038,609</td>
<td align="right">2,937,416</td>
<td align="right">-41.7%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_AND_CLEAR</td>
<td align="right">91,802</td>
<td align="right">128,930</td>
<td align="right">40.4%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_INSTANCE_VALUE_1</td>
<td align="right">66,010</td>
<td align="right">39,887</td>
<td align="right">-39.6%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW_WITH_NULL</td>
<td align="right">87,971</td>
<td align="right">121,539</td>
<td align="right">38.2%</td>
</tr>
<tr>
<td align="left">_MAKE_CELL</td>
<td align="right">234,394</td>
<td align="right">323,593</td>
<td align="right">38.1%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION</td>
<td align="right">4,572,575</td>
<td align="right">2,902,461</td>
<td align="right">-36.5%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_PROPERTY_FRAME</td>
<td align="right">169,854</td>
<td align="right">108,542</td>
<td align="right">-36.1%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_2</td>
<td align="right">439,715</td>
<td align="right">281,997</td>
<td align="right">-35.9%</td>
</tr>
<tr>
<td align="left">_SWAP</td>
<td align="right">308,005</td>
<td align="right">417,937</td>
<td align="right">35.7%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_INLINE</td>
<td align="right">432,299</td>
<td align="right">278,861</td>
<td align="right">-35.5%</td>
</tr>
<tr>
<td align="left">_CHECK_MANAGED_OBJECT_HAS_VALUES</td>
<td align="right">2,380,803</td>
<td align="right">1,560,948</td>
<td align="right">-34.4%</td>
</tr>
<tr>
<td align="left">_GET_YIELD_FROM_ITER</td>
<td align="right">549,017</td>
<td align="right">373,723</td>
<td align="right">-31.9%</td>
</tr>
<tr>
<td align="left">_GUARD_DORV_VALUES_INST_ATTR_FROM_DICT</td>
<td align="right">1,022,468</td>
<td align="right">697,911</td>
<td align="right">-31.7%</td>
</tr>
<tr>
<td align="left">_GUARD_TYPE_VERSION</td>
<td align="right">21,892,458</td>
<td align="right">15,484,984</td>
<td align="right">-29.3%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_WITH_HINT</td>
<td align="right">1,524,122</td>
<td align="right">1,082,326</td>
<td align="right">-29.0%</td>
</tr>
<tr>
<td align="left">_TIER2_RESUME_CHECK</td>
<td align="right">8,047,535</td>
<td align="right">5,805,772</td>
<td align="right">-27.9%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_CLASS</td>
<td align="right">48,994</td>
<td align="right">35,481</td>
<td align="right">-27.6%</td>
</tr>
<tr>
<td align="left">_REPLACE_WITH_TRUE</td>
<td align="right">514,034</td>
<td align="right">372,567</td>
<td align="right">-27.5%</td>
</tr>
<tr>
<td align="left">_CALL_ISINSTANCE</td>
<td align="right">1,078,105</td>
<td align="right">1,348,423</td>
<td align="right">25.1%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_NONE</td>
<td align="right">1,056,436</td>
<td align="right">1,292,908</td>
<td align="right">22.4%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR</td>
<td align="right">508,935</td>
<td align="right">398,050</td>
<td align="right">-21.8%</td>
</tr>
<tr>
<td align="left">_POP_TOP</td>
<td align="right">4,885,007</td>
<td align="right">3,821,208</td>
<td align="right">-21.8%</td>
</tr>
<tr>
<td align="left">_TO_BOOL</td>
<td align="right">759,760</td>
<td align="right">595,727</td>
<td align="right">-21.6%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE</td>
<td align="right">1,852,587</td>
<td align="right">1,454,206</td>
<td align="right">-21.5%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_FAST</td>
<td align="right">427,455</td>
<td align="right">509,667</td>
<td align="right">19.2%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_TUPLE</td>
<td align="right">419,987</td>
<td align="right">499,591</td>
<td align="right">19.0%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP_SET</td>
<td align="right">216,220</td>
<td align="right">256,558</td>
<td align="right">18.7%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_LIST</td>
<td align="right">104,013</td>
<td align="right">123,203</td>
<td align="right">18.4%</td>
</tr>
<tr>
<td align="left">_EXIT_TRACE</td>
<td align="right">35,375,290</td>
<td align="right">28,928,784</td>
<td align="right">-18.2%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_LIST_INT</td>
<td align="right">2,074,634</td>
<td align="right">1,698,306</td>
<td align="right">-18.1%</td>
</tr>
<tr>
<td align="left">_CHECK_ATTR_WITH_HINT</td>
<td align="right">1,578,185</td>
<td align="right">1,310,430</td>
<td align="right">-17.0%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_TUPLE</td>
<td align="right">660,804</td>
<td align="right">772,601</td>
<td align="right">16.9%</td>
</tr>
<tr>
<td align="left">_START_EXECUTOR</td>
<td align="right">42,109,489</td>
<td align="right">35,174,815</td>
<td align="right">-16.5%</td>
</tr>
<tr>
<td align="left">_GUARD_KEYS_VERSION</td>
<td align="right">573,161</td>
<td align="right">479,053</td>
<td align="right">-16.4%</td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE</td>
<td align="right">842,791</td>
<td align="right">716,512</td>
<td align="right">-15.0%</td>
</tr>
<tr>
<td align="left">_BUILD_LIST</td>
<td align="right">176,388</td>
<td align="right">150,151</td>
<td align="right">-14.9%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">205,773</td>
<td align="right">175,174</td>
<td align="right">-14.9%</td>
</tr>
<tr>
<td align="left">_MAKE_WARM</td>
<td align="right">46,813,636</td>
<td align="right">40,044,927</td>
<td align="right">-14.5%</td>
</tr>
<tr>
<td align="left">_DEOPT</td>
<td align="right">865,923</td>
<td align="right">743,646</td>
<td align="right">-14.1%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_TRUE_POP</td>
<td align="right">3,266,078</td>
<td align="right">2,818,524</td>
<td align="right">-13.7%</td>
</tr>
<tr>
<td align="left">_BINARY_OP</td>
<td align="right">683,712</td>
<td align="right">592,788</td>
<td align="right">-13.3%</td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE_OPERAND</td>
<td align="right">294,142</td>
<td align="right">255,937</td>
<td align="right">-13.0%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_STR</td>
<td align="right">74,411</td>
<td align="right">65,264</td>
<td align="right">-12.3%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW</td>
<td align="right">4,701,674</td>
<td align="right">4,205,670</td>
<td align="right">-10.5%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION</td>
<td align="right">3,517,904</td>
<td align="right">3,877,139</td>
<td align="right">10.2%</td>
</tr>
<tr>
<td align="left">_CALL_LEN</td>
<td align="right">264,236</td>
<td align="right">239,069</td>
<td align="right">-9.5%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_2</td>
<td align="right">2,493,876</td>
<td align="right">2,727,904</td>
<td align="right">9.4%</td>
</tr>
<tr>
<td align="left">_RETURN_VALUE</td>
<td align="right">256,877</td>
<td align="right">232,961</td>
<td align="right">-9.3%</td>
</tr>
<tr>
<td align="left">_FOR_ITER_GEN_FRAME</td>
<td align="right">4,286,314</td>
<td align="right">4,682,439</td>
<td align="right">9.2%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_BOOL</td>
<td align="right">4,760,322</td>
<td align="right">4,350,107</td>
<td align="right">-8.6%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_TUPLE_INT</td>
<td align="right">407,616</td>
<td align="right">374,208</td>
<td align="right">-8.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_5</td>
<td align="right">1,817,666</td>
<td align="right">1,964,943</td>
<td align="right">8.1%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">185,823</td>
<td align="right">171,097</td>
<td align="right">-7.9%</td>
</tr>
<tr>
<td align="left">_CHECK_IS_NOT_PY_CALLABLE</td>
<td align="right">4,569,595</td>
<td align="right">4,208,531</td>
<td align="right">-7.9%</td>
</tr>
<tr>
<td align="left">_GET_ITER</td>
<td align="right">688,730</td>
<td align="right">636,821</td>
<td align="right">-7.5%</td>
</tr>
<tr>
<td align="left">_BUILD_TUPLE</td>
<td align="right">380,034</td>
<td align="right">408,223</td>
<td align="right">7.4%</td>
</tr>
<tr>
<td align="left">_GUARD_NOS_INT</td>
<td align="right">2,410,067</td>
<td align="right">2,232,395</td>
<td align="right">-7.4%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_ADD_INT</td>
<td align="right">1,256,760</td>
<td align="right">1,164,555</td>
<td align="right">-7.3%</td>
</tr>
<tr>
<td align="left">_PUSH_FRAME</td>
<td align="right">6,202,832</td>
<td align="right">5,758,875</td>
<td align="right">-7.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_6</td>
<td align="right">1,758,763</td>
<td align="right">1,634,676</td>
<td align="right">-7.1%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_EXACT_ARGS</td>
<td align="right">745,052</td>
<td align="right">694,145</td>
<td align="right">-6.8%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">1,189,242</td>
<td align="right">1,270,098</td>
<td align="right">6.8%</td>
</tr>
<tr>
<td align="left">_DYNAMIC_EXIT</td>
<td align="right">5,868,276</td>
<td align="right">5,502,385</td>
<td align="right">-6.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST</td>
<td align="right">2,219,435</td>
<td align="right">2,081,161</td>
<td align="right">-6.2%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_TUPLE</td>
<td align="right">756,438</td>
<td align="right">802,904</td>
<td align="right">6.1%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_6</td>
<td align="right">692,945</td>
<td align="right">651,252</td>
<td align="right">-6.0%</td>
</tr>
<tr>
<td align="left">_CHECK_PERIODIC</td>
<td align="right">19,791,455</td>
<td align="right">20,965,224</td>
<td align="right">5.9%</td>
</tr>
<tr>
<td align="left">_COPY_FREE_VARS</td>
<td align="right">248,490</td>
<td align="right">233,862</td>
<td align="right">-5.9%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_1</td>
<td align="right">2,703,618</td>
<td align="right">2,546,204</td>
<td align="right">-5.8%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_1</td>
<td align="right">15,727,649</td>
<td align="right">14,849,138</td>
<td align="right">-5.6%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_STR</td>
<td align="right">1,033,904</td>
<td align="right">976,254</td>
<td align="right">-5.6%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_5</td>
<td align="right">1,372,684</td>
<td align="right">1,446,185</td>
<td align="right">5.4%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_UNICODE</td>
<td align="right">1,100,095</td>
<td align="right">1,041,937</td>
<td align="right">-5.3%</td>
</tr>
<tr>
<td align="left">_SET_IP</td>
<td align="right">37,459,047</td>
<td align="right">35,497,142</td>
<td align="right">-5.2%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR_LIST_INT</td>
<td align="right">602,432</td>
<td align="right">572,124</td>
<td align="right">-5.0%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_LIST</td>
<td align="right">6,390,485</td>
<td align="right">6,708,530</td>
<td align="right">5.0%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_LIST</td>
<td align="right">6,391,322</td>
<td align="right">6,708,651</td>
<td align="right">5.0%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBTRACT_INT</td>
<td align="right">1,267,987</td>
<td align="right">1,207,290</td>
<td align="right">-4.8%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_2</td>
<td align="right">1,687,570</td>
<td align="right">1,766,607</td>
<td align="right">4.7%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_NOT_NONE_POP</td>
<td align="right">5,168,996</td>
<td align="right">4,930,417</td>
<td align="right">-4.6%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY</td>
<td align="right">25,821,918</td>
<td align="right">24,639,045</td>
<td align="right">-4.6%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">665,474</td>
<td align="right">635,166</td>
<td align="right">-4.6%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_LIST</td>
<td align="right">5,477,641</td>
<td align="right">5,724,163</td>
<td align="right">4.5%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_7</td>
<td align="right">3,023,547</td>
<td align="right">2,888,834</td>
<td align="right">-4.5%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_INT</td>
<td align="right">1,525,734</td>
<td align="right">1,459,315</td>
<td align="right">-4.4%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_WITH_NULL</td>
<td align="right">3,069,836</td>
<td align="right">3,189,802</td>
<td align="right">3.9%</td>
</tr>
<tr>
<td align="left">_JUMP_TO_TOP</td>
<td align="right">4,704,147</td>
<td align="right">4,870,112</td>
<td align="right">3.5%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">457,421</td>
<td align="right">442,001</td>
<td align="right">-3.4%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_INT</td>
<td align="right">370,521</td>
<td align="right">359,183</td>
<td align="right">-3.1%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_FALSE_POP</td>
<td align="right">6,728,673</td>
<td align="right">6,525,008</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">_LOAD_DEREF</td>
<td align="right">1,084,571</td>
<td align="right">1,116,357</td>
<td align="right">2.9%</td>
</tr>
<tr>
<td align="left">_STORE_FAST</td>
<td align="right">1,883,859</td>
<td align="right">1,832,090</td>
<td align="right">-2.7%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_7</td>
<td align="right">1,076,273</td>
<td align="right">1,047,138</td>
<td align="right">-2.7%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">4,450,628</td>
<td align="right">4,339,257</td>
<td align="right">-2.5%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_1</td>
<td align="right">2,342,207</td>
<td align="right">2,286,389</td>
<td align="right">-2.4%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_O</td>
<td align="right">64,623</td>
<td align="right">63,162</td>
<td align="right">-2.3%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">1,283</td>
<td align="right">1,306</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">_PUSH_NULL</td>
<td align="right">4,654,942</td>
<td align="right">4,732,408</td>
<td align="right">1.7%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_4</td>
<td align="right">4,609,721</td>
<td align="right">4,536,141</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">_FOR_ITER_TIER_TWO</td>
<td align="right">1,750,209</td>
<td align="right">1,770,352</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">_CALL_NON_PY_GENERAL</td>
<td align="right">3,380,122</td>
<td align="right">3,345,518</td>
<td align="right">-1.0%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY_AND_SET_IP</td>
<td align="right">7,852,724</td>
<td align="right">7,789,301</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_1</td>
<td align="right">658,736</td>
<td align="right">653,504</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_4</td>
<td align="right">8,295,270</td>
<td align="right">8,242,132</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_RESUME_CHECK</td>
<td align="right">563,167</td>
<td align="right">560,731</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_BINARY_SLICE</td>
<td align="right">27,318</td>
<td align="right">27,237</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_3</td>
<td align="right">3,147,748</td>
<td align="right">3,138,879</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_3</td>
<td align="right">4,048,346</td>
<td align="right">4,044,151</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_ADD_UNICODE</td>
<td align="right">128,855</td>
<td align="right">128,793</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP</td>
<td align="right">995,178</td>
<td align="right">995,292</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE</td>
<td align="right">388,800</td>
<td align="right">388,800</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_INT</td>
<td align="right">207,135</td>
<td align="right">207,135</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_TOS_INT</td>
<td align="right">139,200</td>
<td align="right">139,200</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_DICT</td>
<td align="right">25,115</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CONTAINS_OP_DICT</td>
<td align="right">23,837</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_FAST_0</td>
<td align="right">14,668</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_3</td>
<td align="right">11,050</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_SEND_GEN_FRAME</td>
<td align="right">9,085</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_CHECK</td>
<td align="right">8,556</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_BUILD_MAP</td>
<td align="right">7,056</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_STR_INT</td>
<td align="right">5,215</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CHECK_ATTR_CLASS</td>
<td align="right">3,906</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_CLASS_0</td>
<td align="right">3,906</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT</td>
<td align="right">3,906</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_POP_TOP_LOAD_CONST_INLINE_BORROW</td>
<td align="right">3,843</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CALL_TYPE_1</td>
<td align="right">3,539</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_DICT_MERGE</td>
<td align="right">3,150</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_TUPLE</td>
<td align="right">3,150</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_3</td>
<td align="right">3,150</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_POP_EXCEPT</td>
<td align="right">1,353</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CALL_KW_NON_PY</td>
<td align="right">715</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CHECK_IS_NOT_PY_CALLABLE_KW</td>
<td align="right">715</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LIST_EXTEND</td>
<td align="right">300</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_RANGE</td>
<td align="right">121</td>
<td align="right">121</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_RANGE</td>
<td align="right">121</td>
<td align="right">121</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_RANGE</td>
<td align="right">115</td>
<td align="right">115</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR</td>
<td align="right">115</td>
<td align="right">115</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR_DICT</td>
<td align="right">62</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">62</td>
<td align="right"></td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_BINARY_OP_INPLACE_ADD_UNICODE</td>
<td align="right">3</td>
<td align="right"></td>
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
<td align="left">SEND</td>
<td align="right">2,868</td>
<td align="right">1,122</td>
<td align="right">-60.9%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">472</td>
<td align="right">248</td>
<td align="right">-47.5%</td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">63</td>
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
<td align="right">37</td>
<td align="right">37</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">
set bases
<details>
<summary>ⓘ</summary>

Setting the bases of a class, `cls.__bases__ = ...`
</details>
</td>
<td align="right">8</td>
<td align="right">8</td>
<td align="right">0.0%</td>
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
<td align="right">8</td>
<td align="right">8</td>
<td align="right">0.0%</td>
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
Stats gathered on: 2024-11-21
