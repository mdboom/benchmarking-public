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
<td align="left">UNPACK_SEQUENCE</td>
<td align="right">1,436,716</td>
<td align="right">596,601</td>
<td align="right">-58.5%</td>
</tr>
<tr>
<td align="left">STORE_SLICE</td>
<td align="right">1,232,478</td>
<td align="right">544,876</td>
<td align="right">-55.8%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_O</td>
<td align="right">382,690,364</td>
<td align="right">305,356,508</td>
<td align="right">-20.2%</td>
</tr>
<tr>
<td align="left">SET_ADD</td>
<td align="right">75,783</td>
<td align="right">61,479</td>
<td align="right">-18.9%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TUPLE</td>
<td align="right">179,960,165</td>
<td align="right">146,487,004</td>
<td align="right">-18.6%</td>
</tr>
<tr>
<td align="left">STORE_FAST_LOAD_FAST</td>
<td align="right">54,911,230</td>
<td align="right">44,786,646</td>
<td align="right">-18.4%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS</td>
<td align="right">118,862,991</td>
<td align="right">97,491,778</td>
<td align="right">-18.0%</td>
</tr>
<tr>
<td align="left">EXTENDED_ARG</td>
<td align="right">195,028,931</td>
<td align="right">163,925,430</td>
<td align="right">-15.9%</td>
</tr>
<tr>
<td align="left">TO_BOOL_ALWAYS_TRUE</td>
<td align="right">120,404,523</td>
<td align="right">102,350,192</td>
<td align="right">-15.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_INPLACE_ADD_UNICODE</td>
<td align="right">3,912,652</td>
<td align="right">3,338,805</td>
<td align="right">-14.7%</td>
</tr>
<tr>
<td align="left">LIST_APPEND</td>
<td align="right">56,907,980</td>
<td align="right">48,787,942</td>
<td align="right">-14.3%</td>
</tr>
<tr>
<td align="left">TO_BOOL_STR</td>
<td align="right">39,667,087</td>
<td align="right">34,261,643</td>
<td align="right">-13.6%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">92,984,512</td>
<td align="right">80,428,147</td>
<td align="right">-13.5%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_TRUE</td>
<td align="right">974,936,981</td>
<td align="right">847,677,738</td>
<td align="right">-13.1%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">242,566,812</td>
<td align="right">211,451,480</td>
<td align="right">-12.8%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST</td>
<td align="right">367,998,081</td>
<td align="right">323,968,864</td>
<td align="right">-12.0%</td>
</tr>
<tr>
<td align="left">LOAD_BUILD_CLASS</td>
<td align="right">3,898</td>
<td align="right">3,436</td>
<td align="right">-11.9%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">204,968,132</td>
<td align="right">181,567,618</td>
<td align="right">-11.4%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_DICT</td>
<td align="right">173,861,745</td>
<td align="right">155,424,170</td>
<td align="right">-10.6%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_NO_DICT</td>
<td align="right">62,143,120</td>
<td align="right">56,116,632</td>
<td align="right">-9.7%</td>
</tr>
<tr>
<td align="left">IS_OP</td>
<td align="right">266,743,149</td>
<td align="right">240,997,311</td>
<td align="right">-9.7%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD_JIT</td>
<td align="right">1,156,089,172</td>
<td align="right">1,066,859,936</td>
<td align="right">-7.7%</td>
</tr>
<tr>
<td align="left">STORE_NAME</td>
<td align="right">57,161</td>
<td align="right">52,821</td>
<td align="right">-7.6%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_BUILTIN</td>
<td align="right">2,101,226,899</td>
<td align="right">1,943,559,570</td>
<td align="right">-7.5%</td>
</tr>
<tr>
<td align="left">TO_BOOL_INT</td>
<td align="right">94,559,304</td>
<td align="right">87,645,584</td>
<td align="right">-7.3%</td>
</tr>
<tr>
<td align="left">TO_BOOL_LIST</td>
<td align="right">45,121,499</td>
<td align="right">41,832,597</td>
<td align="right">-7.3%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBSCR_LIST_INT</td>
<td align="right">490,142,351</td>
<td align="right">455,569,007</td>
<td align="right">-7.1%</td>
</tr>
<tr>
<td align="left">PUSH_NULL</td>
<td align="right">882,690,356</td>
<td align="right">826,907,505</td>
<td align="right">-6.3%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">905,304,840</td>
<td align="right">848,499,871</td>
<td align="right">-6.3%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">178,450,527</td>
<td align="right">167,448,651</td>
<td align="right">-6.2%</td>
</tr>
<tr>
<td align="left">FOR_ITER_LIST</td>
<td align="right">760,460,888</td>
<td align="right">715,291,590</td>
<td align="right">-5.9%</td>
</tr>
<tr>
<td align="left">CALL_TUPLE_1</td>
<td align="right">15,535,288</td>
<td align="right">14,614,485</td>
<td align="right">-5.9%</td>
</tr>
<tr>
<td align="left">CALL_LEN</td>
<td align="right">236,665,274</td>
<td align="right">222,675,675</td>
<td align="right">-5.9%</td>
</tr>
<tr>
<td align="left">LIST_EXTEND</td>
<td align="right">19,529,826</td>
<td align="right">18,379,540</td>
<td align="right">-5.9%</td>
</tr>
<tr>
<td align="left">CALL_LIST_APPEND</td>
<td align="right">201,404,690</td>
<td align="right">189,634,359</td>
<td align="right">-5.8%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST_WITH_KEYWORDS</td>
<td align="right">34,820,275</td>
<td align="right">32,790,352</td>
<td align="right">-5.8%</td>
</tr>
<tr>
<td align="left">STORE_FAST_STORE_FAST</td>
<td align="right">430,806,746</td>
<td align="right">406,452,394</td>
<td align="right">-5.7%</td>
</tr>
<tr>
<td align="left">BUILD_TUPLE</td>
<td align="right">674,210,827</td>
<td align="right">636,215,713</td>
<td align="right">-5.6%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_LAZY_DICT</td>
<td align="right">30,543,528</td>
<td align="right">28,879,928</td>
<td align="right">-5.4%</td>
</tr>
<tr>
<td align="left">TO_BOOL_BOOL</td>
<td align="right">2,490,151,639</td>
<td align="right">2,354,669,818</td>
<td align="right">-5.4%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">510,104,313</td>
<td align="right">485,021,731</td>
<td align="right">-4.9%</td>
</tr>
<tr>
<td align="left">BINARY_OP_EXTEND</td>
<td align="right">227,488,040</td>
<td align="right">216,347,972</td>
<td align="right">-4.9%</td>
</tr>
<tr>
<td align="left">BUILD_SET</td>
<td align="right">772,734</td>
<td align="right">735,527</td>
<td align="right">-4.8%</td>
</tr>
<tr>
<td align="left">STORE_FAST</td>
<td align="right">5,339,365,228</td>
<td align="right">5,082,377,502</td>
<td align="right">-4.8%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">118,263,000</td>
<td align="right">112,641,410</td>
<td align="right">-4.8%</td>
</tr>
<tr>
<td align="left">BUILD_LIST</td>
<td align="right">158,306,576</td>
<td align="right">151,023,504</td>
<td align="right">-4.6%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_FALSE</td>
<td align="right">4,373,943,179</td>
<td align="right">4,182,837,885</td>
<td align="right">-4.4%</td>
</tr>
<tr>
<td align="left">MAP_ADD</td>
<td align="right">26,555,960</td>
<td align="right">25,440,200</td>
<td align="right">-4.2%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_INT</td>
<td align="right">830,121,671</td>
<td align="right">796,611,187</td>
<td align="right">-4.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">144,202,471</td>
<td align="right">138,416,245</td>
<td align="right">-4.0%</td>
</tr>
<tr>
<td align="left">ENTER_EXECUTOR</td>
<td align="right">774,849,962</td>
<td align="right">744,229,218</td>
<td align="right">-4.0%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_IMMORTAL</td>
<td align="right">3,626,960,564</td>
<td align="right">3,485,539,025</td>
<td align="right">-3.9%</td>
</tr>
<tr>
<td align="left">FOR_ITER_RANGE</td>
<td align="right">204,803,237</td>
<td align="right">196,872,687</td>
<td align="right">-3.9%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_CLASS</td>
<td align="right">127,724,745</td>
<td align="right">122,791,320</td>
<td align="right">-3.9%</td>
</tr>
<tr>
<td align="left">SWAP</td>
<td align="right">433,945,864</td>
<td align="right">417,245,623</td>
<td align="right">-3.8%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_INT</td>
<td align="right">1,037,702,581</td>
<td align="right">997,882,869</td>
<td align="right">-3.8%</td>
</tr>
<tr>
<td align="left">LOAD_SMALL_INT</td>
<td align="right">2,303,901,623</td>
<td align="right">2,216,053,260</td>
<td align="right">-3.8%</td>
</tr>
<tr>
<td align="left">CALL_NON_PY_GENERAL</td>
<td align="right">365,604,229</td>
<td align="right">351,673,289</td>
<td align="right">-3.8%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_STR</td>
<td align="right">229,590,707</td>
<td align="right">221,051,470</td>
<td align="right">-3.7%</td>
</tr>
<tr>
<td align="left">NOT_TAKEN</td>
<td align="right">160,823,695</td>
<td align="right">154,983,547</td>
<td align="right">-3.6%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBSCR_DICT</td>
<td align="right">437,808,184</td>
<td align="right">422,148,323</td>
<td align="right">-3.6%</td>
</tr>
<tr>
<td align="left">LOAD_FAST</td>
<td align="right">19,560,167,139</td>
<td align="right">18,880,948,374</td>
<td align="right">-3.5%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NONE</td>
<td align="right">292,848,868</td>
<td align="right">283,183,409</td>
<td align="right">-3.3%</td>
</tr>
<tr>
<td align="left">TO_BOOL_NONE</td>
<td align="right">352,263,355</td>
<td align="right">341,149,291</td>
<td align="right">-3.2%</td>
</tr>
<tr>
<td align="left">JUMP_FORWARD</td>
<td align="right">297,373,829</td>
<td align="right">288,240,773</td>
<td align="right">-3.1%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">1,280,465,520</td>
<td align="right">1,241,435,239</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">169,870,358</td>
<td align="right">164,700,925</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_WITH_HINT</td>
<td align="right">81,125,493</td>
<td align="right">78,681,659</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_SET</td>
<td align="right">274,324,125</td>
<td align="right">266,280,630</td>
<td align="right">-2.9%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">185,091,633</td>
<td align="right">179,810,875</td>
<td align="right">-2.9%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">108,963,196</td>
<td align="right">105,923,052</td>
<td align="right">-2.8%</td>
</tr>
<tr>
<td align="left">LOAD_SPECIAL</td>
<td align="right">13,052,906</td>
<td align="right">13,400,930</td>
<td align="right">2.7%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">904,430,266</td>
<td align="right">881,338,507</td>
<td align="right">-2.6%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBSCR_STR_INT</td>
<td align="right">269,676,164</td>
<td align="right">262,900,740</td>
<td align="right">-2.5%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">589,225,932</td>
<td align="right">574,499,584</td>
<td align="right">-2.5%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_AND_CLEAR</td>
<td align="right">47,941,957</td>
<td align="right">46,758,748</td>
<td align="right">-2.5%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">1,153,440,104</td>
<td align="right">1,125,323,928</td>
<td align="right">-2.4%</td>
</tr>
<tr>
<td align="left">COPY</td>
<td align="right">546,673,982</td>
<td align="right">533,476,705</td>
<td align="right">-2.4%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_LOAD_FAST</td>
<td align="right">4,235,543,695</td>
<td align="right">4,134,823,782</td>
<td align="right">-2.4%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">3,802,494,755</td>
<td align="right">3,714,301,220</td>
<td align="right">-2.3%</td>
</tr>
<tr>
<td align="left">CALL_TYPE_1</td>
<td align="right">108,500,888</td>
<td align="right">105,993,887</td>
<td align="right">-2.3%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_CHECK</td>
<td align="right">4,100,994</td>
<td align="right">4,192,749</td>
<td align="right">2.2%</td>
</tr>
<tr>
<td align="left">GET_ITER</td>
<td align="right">693,310,052</td>
<td align="right">678,073,052</td>
<td align="right">-2.2%</td>
</tr>
<tr>
<td align="left">MAKE_FUNCTION</td>
<td align="right">100,014,311</td>
<td align="right">97,870,843</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">POP_ITER</td>
<td align="right">593,674,455</td>
<td align="right">580,981,722</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_LIST_INT</td>
<td align="right">96,081,898</td>
<td align="right">94,120,178</td>
<td align="right">-2.0%</td>
</tr>
<tr>
<td align="left">POP_TOP</td>
<td align="right">2,624,737,725</td>
<td align="right">2,571,559,658</td>
<td align="right">-2.0%</td>
</tr>
<tr>
<td align="left">SET_FUNCTION_ATTRIBUTE</td>
<td align="right">93,531,652</td>
<td align="right">91,736,661</td>
<td align="right">-1.9%</td>
</tr>
<tr>
<td align="left">DICT_MERGE</td>
<td align="right">58,266,063</td>
<td align="right">57,161,667</td>
<td align="right">-1.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_MODULE</td>
<td align="right">507,675,907</td>
<td align="right">498,072,006</td>
<td align="right">-1.9%</td>
</tr>
<tr>
<td align="left">CALL_KW_NON_PY</td>
<td align="right">33,086,950</td>
<td align="right">32,480,508</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_LIST</td>
<td align="right">2,278,787</td>
<td align="right">2,237,311</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_UNICODE</td>
<td align="right">61,865,301</td>
<td align="right">60,746,214</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_MORTAL</td>
<td align="right">585,852,833</td>
<td align="right">575,288,237</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">154,672,106</td>
<td align="right">151,964,999</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">171,775,450</td>
<td align="right">168,865,441</td>
<td align="right">-1.7%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_MODULE</td>
<td align="right">2,662,265,232</td>
<td align="right">2,618,070,946</td>
<td align="right">-1.7%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_INT</td>
<td align="right">476,368,716</td>
<td align="right">468,517,830</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">RETURN_VALUE</td>
<td align="right">4,922,560,913</td>
<td align="right">4,844,847,268</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">FORMAT_SIMPLE</td>
<td align="right">43,141,327</td>
<td align="right">42,463,586</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">CONVERT_VALUE</td>
<td align="right">36,578,972</td>
<td align="right">36,018,643</td>
<td align="right">-1.5%</td>
</tr>
<tr>
<td align="left">CALL_ISINSTANCE</td>
<td align="right">673,928,065</td>
<td align="right">663,878,277</td>
<td align="right">-1.5%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBSCR_TUPLE_INT</td>
<td align="right">273,263,302</td>
<td align="right">269,332,058</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_SLOT</td>
<td align="right">896,137,097</td>
<td align="right">883,419,376</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">NOP</td>
<td align="right">961,549,553</td>
<td align="right">948,023,247</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">95,099,500</td>
<td align="right">93,787,760</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">2,371,090,522</td>
<td align="right">2,338,525,284</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">BUILD_SLICE</td>
<td align="right">54,906,177</td>
<td align="right">54,196,957</td>
<td align="right">-1.3%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_DICT</td>
<td align="right">122,877,652</td>
<td align="right">121,488,911</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">72,183,694</td>
<td align="right">71,382,386</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">CALL_INTRINSIC_1</td>
<td align="right">112,764,193</td>
<td align="right">111,524,987</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">MAKE_CELL</td>
<td align="right">67,165,379</td>
<td align="right">66,431,240</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">1,773,011,408</td>
<td align="right">1,754,228,106</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">258,649,731</td>
<td align="right">256,108,061</td>
<td align="right">-1.0%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NOT_NONE</td>
<td align="right">413,538,636</td>
<td align="right">409,503,173</td>
<td align="right">-1.0%</td>
</tr>
<tr>
<td align="left">BUILD_MAP</td>
<td align="right">128,923,550</td>
<td align="right">127,705,986</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">BUILD_STRING</td>
<td align="right">22,275,788</td>
<td align="right">22,084,523</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">IMPORT_FROM</td>
<td align="right">8,987,997</td>
<td align="right">9,060,081</td>
<td align="right">0.8%</td>
</tr>
<tr>
<td align="left">CALL_KW_PY</td>
<td align="right">86,265,470</td>
<td align="right">85,581,656</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">LOAD_DEREF</td>
<td align="right">961,153,036</td>
<td align="right">953,737,784</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">BINARY_OP_MULTIPLY_INT</td>
<td align="right">172,534,321</td>
<td align="right">171,300,325</td>
<td align="right">-0.7%</td>
</tr>
<tr>
<td align="left">COPY_FREE_VARS</td>
<td align="right">342,510,789</td>
<td align="right">340,313,006</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">DELETE_SUBSCR</td>
<td align="right">131,411,030</td>
<td align="right">130,572,936</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">RESUME_CHECK</td>
<td align="right">5,405,099,315</td>
<td align="right">5,372,913,278</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">RETURN_GENERATOR</td>
<td align="right">401,172,364</td>
<td align="right">398,873,077</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_METHOD</td>
<td align="right">62,356,078</td>
<td align="right">62,705,261</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">CALL_PY_GENERAL</td>
<td align="right">285,208,536</td>
<td align="right">286,771,076</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_FLOAT</td>
<td align="right">174,140,509</td>
<td align="right">173,238,044</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">IMPORT_NAME</td>
<td align="right">9,396,653</td>
<td align="right">9,441,804</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_GENERAL</td>
<td align="right">4,735,800</td>
<td align="right">4,715,231</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_FLOAT</td>
<td align="right">86,059,723</td>
<td align="right">85,688,286</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_ATTR</td>
<td align="right">3,048,164</td>
<td align="right">3,035,365</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">UNARY_NOT</td>
<td align="right">57,555,921</td>
<td align="right">57,334,667</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">CALL_STR_1</td>
<td align="right">31,056,819</td>
<td align="right">30,942,385</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_PROPERTY</td>
<td align="right">71,202,063</td>
<td align="right">71,410,941</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD</td>
<td align="right">5,145</td>
<td align="right">5,131</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD_NO_JIT</td>
<td align="right">5,197,158</td>
<td align="right">5,184,390</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">STORE_DEREF</td>
<td align="right">71,494,877</td>
<td align="right">71,335,747</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">UNARY_INVERT</td>
<td align="right">10,488,165</td>
<td align="right">10,510,793</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_FLOAT</td>
<td align="right">198,825,857</td>
<td align="right">198,460,146</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">LOAD_NAME</td>
<td align="right">9,742,672</td>
<td align="right">9,727,627</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">BINARY_OP_MULTIPLY_FLOAT</td>
<td align="right">540,639,080</td>
<td align="right">539,811,626</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS_WITH_METACLASS_CHECK</td>
<td align="right">10,094,115</td>
<td align="right">10,079,587</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">UNARY_NEGATIVE</td>
<td align="right">126,611,529</td>
<td align="right">126,493,081</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">RESUME</td>
<td align="right">33,748</td>
<td align="right">33,729</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">INTERPRETER_EXIT</td>
<td align="right">1,627,722,323</td>
<td align="right">1,628,531,296</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_CONST</td>
<td align="right">134,784</td>
<td align="right">134,750</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">180,409,414</td>
<td align="right">180,451,651</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">EXIT_INIT_CHECK</td>
<td align="right">244,202,213</td>
<td align="right">244,157,333</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">CALL_ALLOC_AND_ENTER_INIT</td>
<td align="right">246,257,373</td>
<td align="right">246,212,499</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">YIELD_VALUE</td>
<td align="right">1,116,687,573</td>
<td align="right">1,116,848,110</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">405,455</td>
<td align="right">405,399</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">GET_YIELD_FROM_ITER</td>
<td align="right">35,909,845</td>
<td align="right">35,906,918</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW</td>
<td align="right">120,760</td>
<td align="right">120,761</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RAISE_VARARGS</td>
<td align="right">5,803,622</td>
<td align="right">5,803,610</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">DELETE_ATTR</td>
<td align="right">1,644,367</td>
<td align="right">1,644,370</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CHECK_EXC_MATCH</td>
<td align="right">19,914,091</td>
<td align="right">19,914,059</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">PUSH_EXC_INFO</td>
<td align="right">20,245,089</td>
<td align="right">20,245,057</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">POP_EXCEPT</td>
<td align="right">20,245,068</td>
<td align="right">20,245,037</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL</td>
<td align="right">14,759,749</td>
<td align="right">14,759,734</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">END_FOR</td>
<td align="right">101,013,951</td>
<td align="right">101,013,935</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">FOR_ITER_GEN</td>
<td align="right">245,661,678</td>
<td align="right">245,661,648</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD_NO_INTERRUPT</td>
<td align="right">419,712,281</td>
<td align="right">419,712,241</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBSCR_GETITEM</td>
<td align="right">155,906,139</td>
<td align="right">155,906,128</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">SEND_GEN</td>
<td align="right">593,303,060</td>
<td align="right">593,303,024</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">END_SEND</td>
<td align="right">302,606,889</td>
<td align="right">302,606,889</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">GET_AWAITABLE</td>
<td align="right">172,683,388</td>
<td align="right">172,683,388</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SEND</td>
<td align="right">128,850,140</td>
<td align="right">128,850,140</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">INSTRUMENTED_LINE</td>
<td align="right">58,270,440</td>
<td align="right">58,270,440</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_FAST</td>
<td align="right">41,964,672</td>
<td align="right">41,964,672</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">INSTRUMENTED_RESUME</td>
<td align="right">29,134,740</td>
<td align="right">29,134,740</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">INSTRUMENTED_RETURN_VALUE</td>
<td align="right">29,134,440</td>
<td align="right">29,134,440</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_WITH_HINT</td>
<td align="right">8,976,841</td>
<td align="right">8,976,841</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_GLOBAL</td>
<td align="right">6,152,500</td>
<td align="right">6,152,500</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">END_ASYNC_FOR</td>
<td align="right">6,000,000</td>
<td align="right">6,000,000</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">GET_AITER</td>
<td align="right">6,000,000</td>
<td align="right">6,000,000</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">GET_ANEXT</td>
<td align="right">6,000,000</td>
<td align="right">6,000,000</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RERAISE</td>
<td align="right">3,485,969</td>
<td align="right">3,485,969</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW_BOUND_METHOD</td>
<td align="right">1,748,520</td>
<td align="right">1,748,520</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_EX</td>
<td align="right">781,020</td>
<td align="right">781,020</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CLEANUP_THROW</td>
<td align="right">98,608</td>
<td align="right">98,608</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_UPDATE</td>
<td align="right">84,552</td>
<td align="right">84,552</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_GETATTRIBUTE_OVERRIDDEN</td>
<td align="right">56,599</td>
<td align="right">56,599</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DICT_UPDATE</td>
<td align="right">17,546</td>
<td align="right">17,546</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">WITH_EXCEPT_START</td>
<td align="right">5,265</td>
<td align="right">5,265</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_LOCALS</td>
<td align="right">3,622</td>
<td align="right">3,622</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">FORMAT_WITH_SPEC</td>
<td align="right">2,752</td>
<td align="right">2,752</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR</td>
<td align="right">2,706</td>
<td align="right">2,706</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_FROM_DICT_OR_DEREF</td>
<td align="right">1,476</td>
<td align="right">1,476</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SETUP_ANNOTATIONS</td>
<td align="right">151</td>
<td align="right">151</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">INSTRUMENTED_JUMP_BACKWARD</td>
<td align="right">120</td>
<td align="right">120</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_NAME</td>
<td align="right">42</td>
<td align="right">42</td>
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
<td align="right">1,280,032,406</td>
<td align="right">8.8%</td>
<td align="right">1,241,017,932</td>
<td align="right">8.6%</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">56,837,834</td>
<td align="right">0.4%</td>
<td align="right">56,617,967</td>
<td align="right">0.4%</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">13,128,987,769</td>
<td align="right">90.8%</td>
<td align="right">13,130,854,715</td>
<td align="right">91.0%</td>
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
<td align="right">415,306</td>
<td align="right">27.6%</td>
<td align="right">399,443</td>
<td align="right">26.9%</td>
<td align="right">-3.8%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">1,089,960</td>
<td align="right">72.4%</td>
<td align="right">1,085,907</td>
<td align="right">73.1%</td>
<td align="right">-0.4%</td>
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
<td align="left">add different types</td>
<td align="right">25,920</td>
<td align="right">6.2%</td>
<td align="right">20,546</td>
<td align="right">5.1%</td>
<td align="right">-20.7%</td>
</tr>
<tr>
<td align="left">rshift</td>
<td align="right">11,296</td>
<td align="right">2.7%</td>
<td align="right">9,059</td>
<td align="right">2.3%</td>
<td align="right">-19.8%</td>
</tr>
<tr>
<td align="left">multiply other</td>
<td align="right">836</td>
<td align="right">0.2%</td>
<td align="right">725</td>
<td align="right">0.2%</td>
<td align="right">-13.3%</td>
</tr>
<tr>
<td align="left">true divide other</td>
<td align="right">1,384</td>
<td align="right">0.3%</td>
<td align="right">1,216</td>
<td align="right">0.3%</td>
<td align="right">-12.1%</td>
</tr>
<tr>
<td align="left">xor</td>
<td align="right">189</td>
<td align="right">0.0%</td>
<td align="right">208</td>
<td align="right">0.1%</td>
<td align="right">10.1%</td>
</tr>
<tr>
<td align="left">xor int</td>
<td align="right">17,023</td>
<td align="right">4.1%</td>
<td align="right">18,263</td>
<td align="right">4.6%</td>
<td align="right">7.3%</td>
</tr>
<tr>
<td align="left">subscr list slice</td>
<td align="right">6,864</td>
<td align="right">1.7%</td>
<td align="right">6,371</td>
<td align="right">1.6%</td>
<td align="right">-7.2%</td>
</tr>
<tr>
<td align="left">remainder</td>
<td align="right">36,636</td>
<td align="right">8.8%</td>
<td align="right">34,071</td>
<td align="right">8.5%</td>
<td align="right">-7.0%</td>
</tr>
<tr>
<td align="left">and int</td>
<td align="right">18,458</td>
<td align="right">4.4%</td>
<td align="right">17,344</td>
<td align="right">4.3%</td>
<td align="right">-6.0%</td>
</tr>
<tr>
<td align="left">out of range</td>
<td align="right">40,772</td>
<td align="right">9.8%</td>
<td align="right">38,827</td>
<td align="right">9.7%</td>
<td align="right">-4.8%</td>
</tr>
<tr>
<td align="left">add other</td>
<td align="right">23,751</td>
<td align="right">5.7%</td>
<td align="right">22,652</td>
<td align="right">5.7%</td>
<td align="right">-4.6%</td>
</tr>
<tr>
<td align="left">subscr tuple slice</td>
<td align="right">1,961</td>
<td align="right">0.5%</td>
<td align="right">1,876</td>
<td align="right">0.5%</td>
<td align="right">-4.3%</td>
</tr>
<tr>
<td align="left">multiply different types</td>
<td align="right">5,752</td>
<td align="right">1.4%</td>
<td align="right">5,525</td>
<td align="right">1.4%</td>
<td align="right">-3.9%</td>
</tr>
<tr>
<td align="left">subscr string slice</td>
<td align="right">2,340</td>
<td align="right">0.6%</td>
<td align="right">2,254</td>
<td align="right">0.6%</td>
<td align="right">-3.7%</td>
</tr>
<tr>
<td align="left">subtract different types</td>
<td align="right">638</td>
<td align="right">0.2%</td>
<td align="right">627</td>
<td align="right">0.2%</td>
<td align="right">-1.7%</td>
</tr>
<tr>
<td align="left">subscr</td>
<td align="right">147,991</td>
<td align="right">35.6%</td>
<td align="right">146,493</td>
<td align="right">36.7%</td>
<td align="right">-1.0%</td>
</tr>
<tr>
<td align="left">true divide different types</td>
<td align="right">1,995</td>
<td align="right">0.5%</td>
<td align="right">1,976</td>
<td align="right">0.5%</td>
<td align="right">-1.0%</td>
</tr>
<tr>
<td align="left">and other</td>
<td align="right">493</td>
<td align="right">0.1%</td>
<td align="right">490</td>
<td align="right">0.1%</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">floor divide</td>
<td align="right">29,946</td>
<td align="right">7.2%</td>
<td align="right">29,854</td>
<td align="right">7.5%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">subtract other</td>
<td align="right">7,753</td>
<td align="right">1.9%</td>
<td align="right">7,732</td>
<td align="right">1.9%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">lshift</td>
<td align="right">15,432</td>
<td align="right">3.7%</td>
<td align="right">15,464</td>
<td align="right">3.9%</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">true divide float</td>
<td align="right">11,587</td>
<td align="right">2.8%</td>
<td align="right">11,581</td>
<td align="right">2.9%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">or</td>
<td align="right">3,174</td>
<td align="right">0.8%</td>
<td align="right">3,174</td>
<td align="right">0.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">power</td>
<td align="right">2,343</td>
<td align="right">0.6%</td>
<td align="right">2,343</td>
<td align="right">0.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">or different types</td>
<td align="right">597</td>
<td align="right">0.1%</td>
<td align="right">597</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">and different types</td>
<td align="right">83</td>
<td align="right">0.0%</td>
<td align="right">83</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">code complex parameters</td>
<td align="right">72</td>
<td align="right">0.0%</td>
<td align="right">72</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">or int</td>
<td align="right">20</td>
<td align="right">0.0%</td>
<td align="right">20</td>
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
<td align="right">185,091,633</td>
<td align="right">100.0%</td>
<td align="right">179,810,875</td>
<td align="right">100.0%</td>
<td align="right">-2.9%</td>
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
<td align="right">137,079,652</td>
<td align="right">1.2%</td>
<td align="right">134,844,300</td>
<td align="right">1.2%</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">134,724,427</td>
<td align="right">1.2%</td>
<td align="right">132,531,145</td>
<td align="right">1.2%</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">11,116,516,082</td>
<td align="right">98.8%</td>
<td align="right">11,124,310,133</td>
<td align="right">98.8%</td>
<td align="right">0.1%</td>
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
<td align="right">2,760,234</td>
<td align="right">100.0%</td>
<td align="right">2,718,108</td>
<td align="right">100.0%</td>
<td align="right">-1.5%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">446</td>
<td align="right">0.0%</td>
<td align="right">446</td>
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
<td align="left">init not simple</td>
<td align="right">752</td>
<td align="right">168.6%</td>
<td align="right">752</td>
<td align="right">168.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">out of versions</td>
<td align="right">566</td>
<td align="right">126.9%</td>
<td align="right">566</td>
<td align="right">126.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">init not python</td>
<td align="right">267</td>
<td align="right">59.9%</td>
<td align="right">267</td>
<td align="right">59.9%</td>
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
<td align="right">684,493</td>
<td align="right">97.1%</td>
<td align="right">684,493</td>
<td align="right">97.1%</td>
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
<td align="right">583,909</td>
<td align="right">82.9%</td>
<td align="right">583,909</td>
<td align="right">82.9%</td>
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
<td align="right">20,056</td>
<td align="right">99.4%</td>
<td align="right">20,057</td>
<td align="right">99.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">120</td>
<td align="right">0.6%</td>
<td align="right">120</td>
<td align="right">0.6%</td>
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
<td align="right">108,841,229</td>
<td align="right">2.4%</td>
<td align="right">105,801,986</td>
<td align="right">2.3%</td>
<td align="right">-2.8%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">1,151,700</td>
<td align="right">0.0%</td>
<td align="right">1,144,316</td>
<td align="right">0.0%</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">4,515,697,312</td>
<td align="right">97.6%</td>
<td align="right">4,516,239,525</td>
<td align="right">97.7%</td>
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
<td align="right">103,762</td>
<td align="right">72.3%</td>
<td align="right">102,842</td>
<td align="right">72.2%</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">39,740</td>
<td align="right">27.7%</td>
<td align="right">39,612</td>
<td align="right">27.8%</td>
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
<td align="left">bool</td>
<td align="right">1,987</td>
<td align="right">1.9%</td>
<td align="right">1,897</td>
<td align="right">1.8%</td>
<td align="right">-4.5%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">800</td>
<td align="right">0.8%</td>
<td align="right">775</td>
<td align="right">0.8%</td>
<td align="right">-3.1%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">7,734</td>
<td align="right">7.5%</td>
<td align="right">7,532</td>
<td align="right">7.3%</td>
<td align="right">-2.6%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">4,555</td>
<td align="right">4.4%</td>
<td align="right">4,446</td>
<td align="right">4.3%</td>
<td align="right">-2.4%</td>
</tr>
<tr>
<td align="left">float long</td>
<td align="right">11,475</td>
<td align="right">11.1%</td>
<td align="right">11,230</td>
<td align="right">10.9%</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">baseobject</td>
<td align="right">6,745</td>
<td align="right">6.5%</td>
<td align="right">6,620</td>
<td align="right">6.4%</td>
<td align="right">-1.9%</td>
</tr>
<tr>
<td align="left">bytes</td>
<td align="right">1,321</td>
<td align="right">1.3%</td>
<td align="right">1,300</td>
<td align="right">1.3%</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">string</td>
<td align="right">7,639</td>
<td align="right">7.4%</td>
<td align="right">7,554</td>
<td align="right">7.3%</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">big int</td>
<td align="right">23,162</td>
<td align="right">22.3%</td>
<td align="right">23,366</td>
<td align="right">22.7%</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">different types</td>
<td align="right">37,047</td>
<td align="right">35.7%</td>
<td align="right">36,825</td>
<td align="right">35.8%</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">list</td>
<td align="right">963</td>
<td align="right">0.9%</td>
<td align="right">963</td>
<td align="right">0.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">long float</td>
<td align="right">334</td>
<td align="right">0.3%</td>
<td align="right">334</td>
<td align="right">0.3%</td>
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
<td align="right">92,938,126</td>
<td align="right">4.1%</td>
<td align="right">80,384,670</td>
<td align="right">3.5%</td>
<td align="right">-13.5%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">2,192,206,585</td>
<td align="right">95.9%</td>
<td align="right">2,192,518,432</td>
<td align="right">96.4%</td>
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
<td align="right">1,916,987</td>
<td align="right">0.1%</td>
<td align="right">1,916,987</td>
<td align="right">0.1%</td>
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
<td align="right">44,127</td>
<td align="right">53.4%</td>
<td align="right">41,218</td>
<td align="right">51.7%</td>
<td align="right">-6.6%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">38,433</td>
<td align="right">46.6%</td>
<td align="right">38,433</td>
<td align="right">48.3%</td>
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
<td align="right">8,907</td>
<td align="right">20.2%</td>
<td align="right">7,725</td>
<td align="right">18.7%</td>
<td align="right">-13.3%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">10,030</td>
<td align="right">22.7%</td>
<td align="right">9,048</td>
<td align="right">22.0%</td>
<td align="right">-9.8%</td>
</tr>
<tr>
<td align="left">list</td>
<td align="right">14,095</td>
<td align="right">31.9%</td>
<td align="right">13,592</td>
<td align="right">33.0%</td>
<td align="right">-3.6%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">11,095</td>
<td align="right">25.1%</td>
<td align="right">10,853</td>
<td align="right">26.3%</td>
<td align="right">-2.2%</td>
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
<td align="right">242,437,248</td>
<td align="right">14.9%</td>
<td align="right">211,337,750</td>
<td align="right">13.7%</td>
<td align="right">-12.8%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">1,320,597,879</td>
<td align="right">81.3%</td>
<td align="right">1,266,060,095</td>
<td align="right">82.3%</td>
<td align="right">-4.1%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">62,103,374</td>
<td align="right">3.8%</td>
<td align="right">60,631,271</td>
<td align="right">3.9%</td>
<td align="right">-2.4%</td>
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
<td align="right">124,497</td>
<td align="right">9.6%</td>
<td align="right">108,683</td>
<td align="right">8.6%</td>
<td align="right">-12.7%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">1,176,667</td>
<td align="right">90.4%</td>
<td align="right">1,148,856</td>
<td align="right">91.4%</td>
<td align="right">-2.4%</td>
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
<td align="right">369</td>
<td align="right">0.3%</td>
<td align="right">209</td>
<td align="right">0.2%</td>
<td align="right">-43.4%</td>
</tr>
<tr>
<td align="left">seq iter</td>
<td align="right">8,637</td>
<td align="right">6.9%</td>
<td align="right">5,878</td>
<td align="right">5.4%</td>
<td align="right">-31.9%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">13,044</td>
<td align="right">10.5%</td>
<td align="right">8,979</td>
<td align="right">8.3%</td>
<td align="right">-31.2%</td>
</tr>
<tr>
<td align="left">ascii string</td>
<td align="right">1,239</td>
<td align="right">1.0%</td>
<td align="right">930</td>
<td align="right">0.9%</td>
<td align="right">-24.9%</td>
</tr>
<tr>
<td align="left">callable</td>
<td align="right">134</td>
<td align="right">0.1%</td>
<td align="right">114</td>
<td align="right">0.1%</td>
<td align="right">-14.9%</td>
</tr>
<tr>
<td align="left">reversed list</td>
<td align="right">1,665</td>
<td align="right">1.3%</td>
<td align="right">1,463</td>
<td align="right">1.3%</td>
<td align="right">-12.1%</td>
</tr>
<tr>
<td align="left">dict items</td>
<td align="right">52,454</td>
<td align="right">42.1%</td>
<td align="right">46,161</td>
<td align="right">42.5%</td>
<td align="right">-12.0%</td>
</tr>
<tr>
<td align="left">zip</td>
<td align="right">4,467</td>
<td align="right">3.6%</td>
<td align="right">3,937</td>
<td align="right">3.6%</td>
<td align="right">-11.9%</td>
</tr>
<tr>
<td align="left">map</td>
<td align="right">254</td>
<td align="right">0.2%</td>
<td align="right">233</td>
<td align="right">0.2%</td>
<td align="right">-8.3%</td>
</tr>
<tr>
<td align="left">enumerate</td>
<td align="right">16,504</td>
<td align="right">13.3%</td>
<td align="right">15,493</td>
<td align="right">14.3%</td>
<td align="right">-6.1%</td>
</tr>
<tr>
<td align="left">dict keys</td>
<td align="right">11,118</td>
<td align="right">8.9%</td>
<td align="right">10,710</td>
<td align="right">9.9%</td>
<td align="right">-3.7%</td>
</tr>
<tr>
<td align="left">dict values</td>
<td align="right">6,511</td>
<td align="right">5.2%</td>
<td align="right">6,422</td>
<td align="right">5.9%</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">4,330</td>
<td align="right">3.5%</td>
<td align="right">4,382</td>
<td align="right">4.0%</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">itertools</td>
<td align="right">3,771</td>
<td align="right">3.0%</td>
<td align="right">3,752</td>
<td align="right">3.5%</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">string</td>
<td align="right"></td>
<td align="right"></td>
<td align="right">20</td>
<td align="right">0.0%</td>
<td align="right"></td>
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
deopt
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">1,378,316</td>
<td align="right">0.0%</td>
<td align="right">1,277,199</td>
<td align="right">0.0%</td>
<td align="right">-7.3%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">587,462,432</td>
<td align="right">4.4%</td>
<td align="right">572,771,263</td>
<td align="right">4.3%</td>
<td align="right">-2.5%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">798,576,890</td>
<td align="right">5.9%</td>
<td align="right">791,934,168</td>
<td align="right">5.9%</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">12,071,781,311</td>
<td align="right">89.7%</td>
<td align="right">12,065,169,075</td>
<td align="right">89.8%</td>
<td align="right">-0.1%</td>
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
<td align="right">15,153,036</td>
<td align="right">96.8%</td>
<td align="right">15,027,781</td>
<td align="right">96.8%</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">496,140</td>
<td align="right">3.2%</td>
<td align="right">492,470</td>
<td align="right">3.2%</td>
<td align="right">-0.7%</td>
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
<td align="left">builtin class method</td>
<td align="right">840</td>
<td align="right">0.2%</td>
<td align="right">876</td>
<td align="right">0.2%</td>
<td align="right">4.3%</td>
</tr>
<tr>
<td align="left">overriding descriptor</td>
<td align="right">44,808</td>
<td align="right">9.0%</td>
<td align="right">43,637</td>
<td align="right">8.9%</td>
<td align="right">-2.6%</td>
</tr>
<tr>
<td align="left">expected error</td>
<td align="right">2,369</td>
<td align="right">0.5%</td>
<td align="right">2,405</td>
<td align="right">0.5%</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">method</td>
<td align="right">43,834</td>
<td align="right">8.8%</td>
<td align="right">43,238</td>
<td align="right">8.8%</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">non overriding descriptor</td>
<td align="right">4,892</td>
<td align="right">1.0%</td>
<td align="right">4,833</td>
<td align="right">1.0%</td>
<td align="right">-1.2%</td>
</tr>
<tr>
<td align="left">metaclass attribute</td>
<td align="right">24,217</td>
<td align="right">4.9%</td>
<td align="right">24,492</td>
<td align="right">5.0%</td>
<td align="right">1.1%</td>
</tr>
<tr>
<td align="left">class attr simple</td>
<td align="right">1,513</td>
<td align="right">0.3%</td>
<td align="right">1,510</td>
<td align="right">0.3%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">non object slot</td>
<td align="right">1,092</td>
<td align="right">0.2%</td>
<td align="right">1,091</td>
<td align="right">0.2%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">mutable class</td>
<td align="right">61,097</td>
<td align="right">12.3%</td>
<td align="right">61,139</td>
<td align="right">12.4%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">overridden</td>
<td align="right">8,022</td>
<td align="right">1.6%</td>
<td align="right">8,019</td>
<td align="right">1.6%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">class method obj</td>
<td align="right">16,263</td>
<td align="right">3.3%</td>
<td align="right">16,258</td>
<td align="right">3.3%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">module attr not found</td>
<td align="right">4,985</td>
<td align="right">1.0%</td>
<td align="right">4,984</td>
<td align="right">1.0%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">not in dict</td>
<td align="right">6,405</td>
<td align="right">1.3%</td>
<td align="right">6,405</td>
<td align="right">1.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not managed dict</td>
<td align="right">1,775</td>
<td align="right">0.4%</td>
<td align="right">1,775</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">out of versions</td>
<td align="right">400</td>
<td align="right">0.1%</td>
<td align="right">400</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">wrong number arguments</td>
<td align="right">235</td>
<td align="right">0.0%</td>
<td align="right">235</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">split dict</td>
<td align="right">163</td>
<td align="right">0.0%</td>
<td align="right">163</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">property</td>
<td align="right">46</td>
<td align="right">0.0%</td>
<td align="right">46</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">property not py function</td>
<td align="right">40</td>
<td align="right">0.0%</td>
<td align="right">40</td>
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
<td align="right">4,834,004,180</td>
<td align="right">99.7%</td>
<td align="right">4,645,034,864</td>
<td align="right">99.7%</td>
<td align="right">-3.9%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">14,622,699</td>
<td align="right">0.3%</td>
<td align="right">14,622,677</td>
<td align="right">0.3%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">
deopt
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">1,508</td>
<td align="right">0.0%</td>
<td align="right">1,508</td>
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
<td align="right">52,623</td>
<td align="right">0.0%</td>
<td align="right">52,623</td>
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
<td align="right">137,813</td>
<td align="right">100.0%</td>
<td align="right">137,820</td>
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
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">65,857,265</td>
<td align="right">100.0%</td>
<td align="right">66,334,731</td>
<td align="right">100.0%</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">252</td>
<td align="right">0.0%</td>
<td align="right">252</td>
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
<td align="right">2,454</td>
<td align="right">100.0%</td>
<td align="right">2,454</td>
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
<td align="right">593,288,349</td>
<td align="right">82.2%</td>
<td align="right">593,288,313</td>
<td align="right">82.2%</td>
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
<td align="right">128,815,350</td>
<td align="right">17.8%</td>
<td align="right">128,815,350</td>
<td align="right">17.8%</td>
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
<td align="right">0.0%</td>
<td align="right">14,711</td>
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
<td align="right">651</td>
<td align="right">1.9%</td>
<td align="right">651</td>
<td align="right">1.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">34,411</td>
<td align="right">98.1%</td>
<td align="right">34,411</td>
<td align="right">98.1%</td>
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
<td align="left">async generator send</td>
<td align="right">24,440</td>
<td align="right">71.0%</td>
<td align="right">24,440</td>
<td align="right">71.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">5,959</td>
<td align="right">17.3%</td>
<td align="right">5,959</td>
<td align="right">17.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list</td>
<td align="right">3,260</td>
<td align="right">9.5%</td>
<td align="right">3,260</td>
<td align="right">9.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">752</td>
<td align="right">2.2%</td>
<td align="right">752</td>
<td align="right">2.2%</td>
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
<td align="right">114,402,673</td>
<td align="right">5.6%</td>
<td align="right">111,141,803</td>
<td align="right">5.5%</td>
<td align="right">-2.9%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">72,090,119</td>
<td align="right">3.5%</td>
<td align="right">71,289,006</td>
<td align="right">3.5%</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">1,847,912,674</td>
<td align="right">90.8%</td>
<td align="right">1,849,166,080</td>
<td align="right">91.0%</td>
<td align="right">0.1%</td>
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
<td align="right">2,199,859</td>
<td align="right">97.7%</td>
<td align="right">2,138,271</td>
<td align="right">97.7%</td>
<td align="right">-2.8%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">51,581</td>
<td align="right">2.3%</td>
<td align="right">51,387</td>
<td align="right">2.3%</td>
<td align="right">-0.4%</td>
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
<td align="right">4,903</td>
<td align="right">9.5%</td>
<td align="right">4,804</td>
<td align="right">9.3%</td>
<td align="right">-2.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">263,570</td>
<td align="right">511.0%</td>
<td align="right">261,306</td>
<td align="right">508.5%</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">not in dict</td>
<td align="right">7,666</td>
<td align="right">14.9%</td>
<td align="right">7,626</td>
<td align="right">14.8%</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">class attr simple</td>
<td align="right">24,476</td>
<td align="right">47.5%</td>
<td align="right">24,416</td>
<td align="right">47.5%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">not managed dict</td>
<td align="right">3,346</td>
<td align="right">6.5%</td>
<td align="right">3,350</td>
<td align="right">6.5%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">split dict</td>
<td align="right">5,318</td>
<td align="right">10.3%</td>
<td align="right">5,318</td>
<td align="right">10.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">property</td>
<td align="right">1,619</td>
<td align="right">3.1%</td>
<td align="right">1,619</td>
<td align="right">3.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not in keys</td>
<td align="right">811</td>
<td align="right">1.6%</td>
<td align="right">811</td>
<td align="right">1.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">method</td>
<td align="right">743</td>
<td align="right">1.4%</td>
<td align="right">743</td>
<td align="right">1.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">mutable class</td>
<td align="right">730</td>
<td align="right">1.4%</td>
<td align="right">730</td>
<td align="right">1.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">overridden</td>
<td align="right">361</td>
<td align="right">0.7%</td>
<td align="right">361</td>
<td align="right">0.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">no dict</td>
<td align="right">110</td>
<td align="right">0.2%</td>
<td align="right">110</td>
<td align="right">0.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">non object slot</td>
<td align="right">100</td>
<td align="right">0.2%</td>
<td align="right">100</td>
<td align="right">0.2%</td>
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
<td align="right">1,232,478</td>
<td align="right">100.0%</td>
<td align="right">544,876</td>
<td align="right">100.0%</td>
<td align="right">-55.8%</td>
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
<td align="right">154,621,037</td>
<td align="right">14.4%</td>
<td align="right">151,914,429</td>
<td align="right">14.2%</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">920,948,827</td>
<td align="right">85.6%</td>
<td align="right">921,260,471</td>
<td align="right">85.8%</td>
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
<td align="right">2,220</td>
<td align="right">0.0%</td>
<td align="right">2,220</td>
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
<td align="right">48,913</td>
<td align="right">95.7%</td>
<td align="right">48,414</td>
<td align="right">95.7%</td>
<td align="right">-1.0%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">2,196</td>
<td align="right">4.3%</td>
<td align="right">2,196</td>
<td align="right">4.3%</td>
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
<td align="left">array slice</td>
<td align="right">68</td>
<td align="right">0.1%</td>
<td align="right">24</td>
<td align="right">0.0%</td>
<td align="right">-64.7%</td>
</tr>
<tr>
<td align="left">bytearray int</td>
<td align="right">176</td>
<td align="right">0.4%</td>
<td align="right">205</td>
<td align="right">0.4%</td>
<td align="right">16.5%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">299</td>
<td align="right">0.6%</td>
<td align="right">250</td>
<td align="right">0.5%</td>
<td align="right">-16.4%</td>
</tr>
<tr>
<td align="left">dict subclass no override</td>
<td align="right">15,163</td>
<td align="right">31.0%</td>
<td align="right">14,894</td>
<td align="right">30.8%</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">array int</td>
<td align="right">11,212</td>
<td align="right">22.9%</td>
<td align="right">11,046</td>
<td align="right">22.8%</td>
<td align="right">-1.5%</td>
</tr>
<tr>
<td align="left">py simple</td>
<td align="right">17,323</td>
<td align="right">35.4%</td>
<td align="right">17,323</td>
<td align="right">35.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list slice</td>
<td align="right">2,991</td>
<td align="right">6.1%</td>
<td align="right">2,991</td>
<td align="right">6.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">out of range</td>
<td align="right">1,681</td>
<td align="right">3.4%</td>
<td align="right">1,681</td>
<td align="right">3.5%</td>
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
<td align="right">65,442,790</td>
<td align="right">1.4%</td>
<td align="right">58,382,273</td>
<td align="right">1.2%</td>
<td align="right">-10.8%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">143,644,348</td>
<td align="right">3.0%</td>
<td align="right">137,900,307</td>
<td align="right">2.9%</td>
<td align="right">-4.0%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">4,559,342,720</td>
<td align="right">95.6%</td>
<td align="right">4,519,811,893</td>
<td align="right">95.8%</td>
<td align="right">-0.9%</td>
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
<td align="right">1,283,280</td>
<td align="right">71.6%</td>
<td align="right">1,150,006</td>
<td align="right">71.2%</td>
<td align="right">-10.4%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">508,117</td>
<td align="right">28.4%</td>
<td align="right">465,937</td>
<td align="right">28.8%</td>
<td align="right">-8.3%</td>
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
<td align="right">33,984</td>
<td align="right">6.7%</td>
<td align="right">10,988</td>
<td align="right">2.4%</td>
<td align="right">-67.7%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">96,055</td>
<td align="right">18.9%</td>
<td align="right">78,188</td>
<td align="right">16.8%</td>
<td align="right">-18.6%</td>
</tr>
<tr>
<td align="left">bytes</td>
<td align="right">5,457</td>
<td align="right">1.1%</td>
<td align="right">5,057</td>
<td align="right">1.1%</td>
<td align="right">-7.3%</td>
</tr>
<tr>
<td align="left">dict</td>
<td align="right">15,958</td>
<td align="right">3.1%</td>
<td align="right">15,679</td>
<td align="right">3.4%</td>
<td align="right">-1.7%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">13,327</td>
<td align="right">2.6%</td>
<td align="right">13,246</td>
<td align="right">2.8%</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">mapping</td>
<td align="right">73,684</td>
<td align="right">14.5%</td>
<td align="right">73,337</td>
<td align="right">15.7%</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">sequence</td>
<td align="right">8,961</td>
<td align="right">1.8%</td>
<td align="right">8,976</td>
<td align="right">1.9%</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">number</td>
<td align="right">258,805</td>
<td align="right">50.9%</td>
<td align="right">258,580</td>
<td align="right">55.5%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">bytearray</td>
<td align="right">1,420</td>
<td align="right">0.3%</td>
<td align="right">1,420</td>
<td align="right">0.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">float</td>
<td align="right">382</td>
<td align="right">0.1%</td>
<td align="right">382</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">memory view</td>
<td align="right">84</td>
<td align="right">0.0%</td>
<td align="right">84</td>
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
<td align="right">1,425,896</td>
<td align="right">0.1%</td>
<td align="right">585,855</td>
<td align="right">0.0%</td>
<td align="right">-58.9%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">1,248,646,193</td>
<td align="right">99.9%</td>
<td align="right">1,248,852,531</td>
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
<td align="right">3,700</td>
<td align="right">0.0%</td>
<td align="right">3,700</td>
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
<td align="right">857</td>
<td align="right">7.9%</td>
<td align="right">783</td>
<td align="right">7.2%</td>
<td align="right">-8.6%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">10,043</td>
<td align="right">92.1%</td>
<td align="right">10,043</td>
<td align="right">92.8%</td>
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
<td align="right">630</td>
<td align="right">73.5%</td>
<td align="right">556</td>
<td align="right">71.0%</td>
<td align="right">-11.7%</td>
</tr>
<tr>
<td align="left">iterator</td>
<td align="right">136</td>
<td align="right">15.9%</td>
<td align="right">136</td>
<td align="right">17.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">91</td>
<td align="right">10.6%</td>
<td align="right">91</td>
<td align="right">11.6%</td>
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
Not specialized
<details>
<summary>ⓘ</summary>

Instructions that could be specialized but aren't, e.g. `LOAD_ATTR`, `BINARY_SLICE`.
</details>
</td>
<td align="right">3,017,163,880</td>
<td align="right">2.8%</td>
<td align="right">2,900,592,224</td>
<td align="right">2.8%</td>
<td align="right">-3.9%</td>
</tr>
<tr>
<td align="left">
Specialized hits
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that complete.
</details>
</td>
<td align="right">43,438,626,091</td>
<td align="right">40.5%</td>
<td align="right">41,961,055,884</td>
<td align="right">40.4%</td>
<td align="right">-3.4%</td>
</tr>
<tr>
<td align="left">
Basic
<details>
<summary>ⓘ</summary>

Instructions that are not and cannot be specialized, e.g. `LOAD_FAST`.
</details>
</td>
<td align="right">59,639,646,544</td>
<td align="right">55.6%</td>
<td align="right">57,708,858,926</td>
<td align="right">55.6%</td>
<td align="right">-3.2%</td>
</tr>
<tr>
<td align="left">
Specialized misses
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that deopt.
</details>
</td>
<td align="right">1,238,297,291</td>
<td align="right">1.2%</td>
<td align="right">1,217,400,183</td>
<td align="right">1.2%</td>
<td align="right">-1.7%</td>
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
<td align="left">CONTAINS_OP</td>
<td align="right">92,938,126</td>
<td align="right">3.0%</td>
<td align="right">80,384,670</td>
<td align="right">2.7%</td>
<td align="right">-13.5%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">242,437,248</td>
<td align="right">7.7%</td>
<td align="right">211,337,750</td>
<td align="right">7.0%</td>
<td align="right">-12.8%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">143,644,348</td>
<td align="right">4.6%</td>
<td align="right">137,900,307</td>
<td align="right">4.6%</td>
<td align="right">-4.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">1,280,032,406</td>
<td align="right">40.7%</td>
<td align="right">1,241,017,932</td>
<td align="right">41.0%</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">185,091,633</td>
<td align="right">5.9%</td>
<td align="right">179,810,875</td>
<td align="right">5.9%</td>
<td align="right">-2.9%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">108,841,229</td>
<td align="right">3.5%</td>
<td align="right">105,801,986</td>
<td align="right">3.5%</td>
<td align="right">-2.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">587,462,432</td>
<td align="right">18.7%</td>
<td align="right">572,771,263</td>
<td align="right">18.9%</td>
<td align="right">-2.5%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">154,621,037</td>
<td align="right">4.9%</td>
<td align="right">151,914,429</td>
<td align="right">5.0%</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">134,724,427</td>
<td align="right">4.3%</td>
<td align="right">132,531,145</td>
<td align="right">4.4%</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">SEND</td>
<td align="right">128,815,350</td>
<td align="right">4.1%</td>
<td align="right">128,815,350</td>
<td align="right">4.3%</td>
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
<td align="left">TO_BOOL_ALWAYS_TRUE</td>
<td align="right">27,626,998</td>
<td align="right">2.2%</td>
<td align="right">24,619,340</td>
<td align="right">2.0%</td>
<td align="right">-10.9%</td>
</tr>
<tr>
<td align="left">TO_BOOL_NONE</td>
<td align="right">30,559,286</td>
<td align="right">2.5%</td>
<td align="right">27,472,073</td>
<td align="right">2.3%</td>
<td align="right">-10.1%</td>
</tr>
<tr>
<td align="left">FOR_ITER_LIST</td>
<td align="right">31,038,046</td>
<td align="right">2.5%</td>
<td align="right">30,242,110</td>
<td align="right">2.5%</td>
<td align="right">-2.6%</td>
</tr>
<tr>
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">30,987,933</td>
<td align="right">2.5%</td>
<td align="right">30,311,766</td>
<td align="right">2.5%</td>
<td align="right">-2.2%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">85,051,772</td>
<td align="right">6.9%</td>
<td align="right">83,766,313</td>
<td align="right">6.9%</td>
<td align="right">-1.5%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">68,852,703</td>
<td align="right">5.6%</td>
<td align="right">67,906,433</td>
<td align="right">5.6%</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">325,833,587</td>
<td align="right">26.3%</td>
<td align="right">322,336,368</td>
<td align="right">26.5%</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">82,423,436</td>
<td align="right">6.7%</td>
<td align="right">81,703,505</td>
<td align="right">6.7%</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">250,027,411</td>
<td align="right">20.2%</td>
<td align="right">251,544,205</td>
<td align="right">20.7%</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">92,767,150</td>
<td align="right">7.5%</td>
<td align="right">92,856,330</td>
<td align="right">7.6%</td>
<td align="right">0.1%</td>
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
<td align="left">Frames pushed</td>
<td align="right">5,474,181,863</td>
<td align="right">81.1%</td>
<td align="right">5,478,295,491</td>
<td align="right">81.1%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Calls to Python functions inlined</td>
<td align="right">5,115,706,596</td>
<td align="right">75.8%</td>
<td align="right">5,119,216,529</td>
<td align="right">75.8%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function vectorcall)</td>
<td align="right">948,927,727</td>
<td align="right">14.1%</td>
<td align="right">949,576,236</td>
<td align="right">14.1%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (vector)</td>
<td align="right">953,205,067</td>
<td align="right">14.1%</td>
<td align="right">953,853,576</td>
<td align="right">14.1%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Calls to PyEval_EvalDefault</td>
<td align="right">1,632,213,981</td>
<td align="right">24.2%</td>
<td align="right">1,633,022,955</td>
<td align="right">24.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (total)</td>
<td align="right">1,632,213,981</td>
<td align="right">24.2%</td>
<td align="right">1,633,022,955</td>
<td align="right">24.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (generator)</td>
<td align="right">679,008,914</td>
<td align="right">10.1%</td>
<td align="right">679,169,379</td>
<td align="right">10.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (api)</td>
<td align="right">279,264,009</td>
<td align="right">4.1%</td>
<td align="right">279,289,396</td>
<td align="right">4.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function ex)</td>
<td align="right">24,921,003</td>
<td align="right">0.4%</td>
<td align="right">24,920,923</td>
<td align="right">0.4%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (slot)</td>
<td align="right">261,529,412</td>
<td align="right">3.9%</td>
<td align="right">261,529,139</td>
<td align="right">3.9%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Frame objects created</td>
<td align="right">70,790,156</td>
<td align="right">1.0%</td>
<td align="right">70,790,157</td>
<td align="right">1.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (legacy)</td>
<td align="right">4,273,442</td>
<td align="right">0.1%</td>
<td align="right">4,273,442</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (build class)</td>
<td align="right">3,898</td>
<td align="right">0.0%</td>
<td align="right">3,898</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (method)</td>
<td align="right">132,513,402</td>
<td align="right">2.0%</td>
<td align="right">132,513,402</td>
<td align="right">2.0%</td>
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
<td align="right">65,968,028</td>
<td align="right"></td>
<td align="right">62,983,881</td>
<td align="right"></td>
<td align="right">-4.5%</td>
</tr>
<tr>
<td align="left">Interpreter immortal increfs</td>
<td align="right">12,685,618,917</td>
<td align="right">8.1%</td>
<td align="right">12,151,282,279</td>
<td align="right">7.7%</td>
<td align="right">-4.2%</td>
</tr>
<tr>
<td align="left">Method cache collisions</td>
<td align="right">72,168,963</td>
<td align="right"></td>
<td align="right">69,423,796</td>
<td align="right"></td>
<td align="right">-3.8%</td>
</tr>
<tr>
<td align="left">Method cache dunder misses</td>
<td align="right">7,006,376</td>
<td align="right"></td>
<td align="right">7,245,487</td>
<td align="right"></td>
<td align="right">3.4%</td>
</tr>
<tr>
<td align="left">Interpreter immortal decrefs</td>
<td align="right">20,647,744,611</td>
<td align="right">10.5%</td>
<td align="right">20,018,822,647</td>
<td align="right">10.1%</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">Interpreter mortal increfs</td>
<td align="right">45,985,328,592</td>
<td align="right">29.3%</td>
<td align="right">44,822,144,819</td>
<td align="right">28.6%</td>
<td align="right">-2.5%</td>
</tr>
<tr>
<td align="left">Mortal increfs</td>
<td align="right">62,854,190,681</td>
<td align="right">40.1%</td>
<td align="right">64,189,034,842</td>
<td align="right">40.9%</td>
<td align="right">2.1%</td>
</tr>
<tr>
<td align="left">Interpreter mortal decrefs</td>
<td align="right">55,210,950,692</td>
<td align="right">28.0%</td>
<td align="right">54,071,046,282</td>
<td align="right">27.4%</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">Mortal decrefs</td>
<td align="right">71,058,432,877</td>
<td align="right">36.0%</td>
<td align="right">72,375,148,546</td>
<td align="right">36.6%</td>
<td align="right">1.9%</td>
</tr>
<tr>
<td align="left">Immortal increfs</td>
<td align="right">35,369,608,674</td>
<td align="right">22.5%</td>
<td align="right">35,829,580,506</td>
<td align="right">22.8%</td>
<td align="right">1.3%</td>
</tr>
<tr>
<td align="left">Immortal decrefs</td>
<td align="right">50,567,170,610</td>
<td align="right">25.6%</td>
<td align="right">51,216,215,320</td>
<td align="right">25.9%</td>
<td align="right">1.3%</td>
</tr>
<tr>
<td align="left">Method cache hits</td>
<td align="right">2,254,037,949</td>
<td align="right"></td>
<td align="right">2,259,785,297</td>
<td align="right"></td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">Inline values</td>
<td align="right">178,952,057</td>
<td align="right"></td>
<td align="right">179,231,503</td>
<td align="right"></td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">Allocations over 4 kbytes</td>
<td align="right">6,418,809</td>
<td align="right">0.0%</td>
<td align="right">6,428,440</td>
<td align="right">0.0%</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">Allocations to 4 kbytes</td>
<td align="right">71,427,778</td>
<td align="right">0.4%</td>
<td align="right">71,518,169</td>
<td align="right">0.4%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Method cache dunder hits</td>
<td align="right">2,901,825,809</td>
<td align="right"></td>
<td align="right">2,904,805,237</td>
<td align="right"></td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Frees</td>
<td align="right">6,681,390,114</td>
<td align="right"></td>
<td align="right">6,683,546,906</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations from freelist</td>
<td align="right">12,787,580,167</td>
<td align="right">67.7%</td>
<td align="right">12,791,166,343</td>
<td align="right">67.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Frees to freelist</td>
<td align="right">12,787,664,482</td>
<td align="right"></td>
<td align="right">12,791,244,447</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations</td>
<td align="right">6,088,135,297</td>
<td align="right">32.3%</td>
<td align="right">6,089,682,435</td>
<td align="right">32.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations to 512 bytes</td>
<td align="right">6,010,288,710</td>
<td align="right">31.8%</td>
<td align="right">6,011,735,826</td>
<td align="right">31.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (on request)</td>
<td align="right">4,443,372</td>
<td align="right">2.5%</td>
<td align="right">4,443,372</td>
<td align="right">2.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (new key)</td>
<td align="right">434,341</td>
<td align="right">0.2%</td>
<td align="right">434,341</td>
<td align="right">0.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (too big)</td>
<td align="right">4,404</td>
<td align="right">0.0%</td>
<td align="right">4,404</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
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
<td align="right">364,699</td>
<td align="right">102,495,954</td>
<td align="right">9,495,564,709</td>
<td align="right">749,341,272</td>
<td align="right">764,109,700</td>
<td align="right">364,775</td>
<td align="right">102,592,560</td>
<td align="right">9,479,806,055</td>
<td align="right">746,096,139</td>
<td align="right">763,940,954</td>
</tr>
<tr>
<td align="right">2</td>
<td align="right">7,998</td>
<td align="right">4,366,437</td>
<td align="right">5,592,432,766</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">7,998</td>
<td align="right">4,366,437</td>
<td align="right">5,592,667,294</td>
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
Trace too long
<details>
<summary>ⓘ</summary>

A trace is truncated because it is longer than the instruction buffer.
</details>
</td>
<td align="right">20</td>
<td align="right">0.0%</td>
<td align="right">160</td>
<td align="right">0.0%</td>
<td align="right">700.0%</td>
</tr>
<tr>
<td align="left">
Executors invalidated
<details>
<summary>ⓘ</summary>

The number of executors that were invalidated due to watched dictionary changes.
</details>
</td>
<td align="right">200</td>
<td align="right">0.8%</td>
<td align="right">1,598</td>
<td align="right">1.2%</td>
<td align="right">699.0%</td>
</tr>
<tr>
<td align="left">
Low confidence
<details>
<summary>ⓘ</summary>

A trace is abandoned because the likelihood of the jump to top being taken is too low.
</details>
</td>
<td align="right">734</td>
<td align="right">0.2%</td>
<td align="right">4,867</td>
<td align="right">0.7%</td>
<td align="right">563.1%</td>
</tr>
<tr>
<td align="left">
Trace stack overflow
<details>
<summary>ⓘ</summary>

A trace is truncated because it would require more than 5 stack frames.
</details>
</td>
<td align="right">220</td>
<td align="right">0.0%</td>
<td align="right">1,415</td>
<td align="right">0.2%</td>
<td align="right">543.2%</td>
</tr>
<tr>
<td align="left">
Recursive call
<details>
<summary>ⓘ</summary>

A trace is truncated because it has a recursive call.
</details>
</td>
<td align="right">701</td>
<td align="right">0.2%</td>
<td align="right">4,321</td>
<td align="right">0.6%</td>
<td align="right">516.4%</td>
</tr>
<tr>
<td align="left">
Traces created
<details>
<summary>ⓘ</summary>

The number of traces that were successfully created.
</details>
</td>
<td align="right">25,537</td>
<td align="right">5.6%</td>
<td align="right">136,897</td>
<td align="right">19.5%</td>
<td align="right">436.1%</td>
</tr>
<tr>
<td align="left">
Inner loop found
<details>
<summary>ⓘ</summary>

A trace is truncated because it has an inner loop
</details>
</td>
<td align="right">788</td>
<td align="right">0.2%</td>
<td align="right">3,178</td>
<td align="right">0.5%</td>
<td align="right">303.3%</td>
</tr>
<tr>
<td align="left">
Optimization attempts
<details>
<summary>ⓘ</summary>

The number of times a potential trace is identified.  Specifically, this occurs in the JUMP BACKWARD instruction when the counter reaches a threshold.
</details>
</td>
<td align="right">454,901</td>
<td align="right"></td>
<td align="right">700,983</td>
<td align="right"></td>
<td align="right">54.1%</td>
</tr>
<tr>
<td align="left">
Unknown callee
<details>
<summary>ⓘ</summary>

A trace is abandoned because the target of a call is unknown.
</details>
</td>
<td align="right">169,640</td>
<td align="right">37.3%</td>
<td align="right">230,187</td>
<td align="right">32.8%</td>
<td align="right">35.7%</td>
</tr>
<tr>
<td align="left">
Trace stack underflow
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it pops more frames than it pushes.
</details>
</td>
<td align="right">211,819</td>
<td align="right">46.6%</td>
<td align="right">272,997</td>
<td align="right">38.9%</td>
<td align="right">28.9%</td>
</tr>
<tr>
<td align="left">
Trace too short
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it it too short.
</details>
</td>
<td align="right">47,685</td>
<td align="right">10.5%</td>
<td align="right">59,487</td>
<td align="right">8.5%</td>
<td align="right">24.7%</td>
</tr>
<tr>
<td align="left">
Traces executed
<details>
<summary>ⓘ</summary>

The number of traces that were executed
</details>
</td>
<td align="right">3,739,913,293</td>
<td align="right"></td>
<td align="right">3,906,263,232</td>
<td align="right"></td>
<td align="right">4.4%</td>
</tr>
<tr>
<td align="left">
Uops executed
<details>
<summary>ⓘ</summary>

The total number of uops (micro-operations) that were executed
</details>
</td>
<td align="right">215,592,100,018</td>
<td align="right">5,764.6%</td>
<td align="right">222,861,044,526</td>
<td align="right">5,705.2%</td>
<td align="right">3.4%</td>
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
<td align="right">22,063</td>
<td align="right">86.4%</td>
<td align="right">124,555</td>
<td align="right">91.0%</td>
<td align="right">464.5%</td>
</tr>
<tr>
<td align="left">
Optimizer attempts
<details>
<summary>ⓘ</summary>

The number of times the trace optimizer (_Py_uop_analyze_and_optimize) was run.
</details>
</td>
<td align="right">25,537</td>
<td align="right"></td>
<td align="right">136,897</td>
<td align="right"></td>
<td align="right">436.1%</td>
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
<td align="right">283</td>
<td align="right">0.2%</td>
<td align="right">283 / 0 !!</td>
</tr>
</tbody>
</table>

### JIT memory stats

<details>
<summary> JIT memory stats </summary>

<table>
<thead>
<tr>
<th align="left"></th>
<th align="right">Base Size (bytes)</th>
<th align="right">Base Ratio</th>
<th align="right">Head Size (bytes)</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">
Freed memory size
<details>
<summary>ⓘ</summary>

The size of the memory freed from the JIT traces
</details>
</td>
<td align="right">238,637,056</td>
<td align="right">80.6%</td>
<td align="right">2,034,688,000</td>
<td align="right">128.0%</td>
<td align="right">752.6%</td>
</tr>
<tr>
<td align="left">
Padding size
<details>
<summary>ⓘ</summary>

The size of the memory allocated for the padding of the JIT traces
</details>
</td>
<td align="right">46,541,777</td>
<td align="right">15.7%</td>
<td align="right">263,006,000</td>
<td align="right">16.5%</td>
<td align="right">465.1%</td>
</tr>
<tr>
<td align="left">
Total memory size
<details>
<summary>ⓘ</summary>

The total size of the memory allocated for the JIT traces
</details>
</td>
<td align="right">295,911,424</td>
<td align="right"></td>
<td align="right">1,589,731,328</td>
<td align="right"></td>
<td align="right">437.2%</td>
</tr>
<tr>
<td align="left">
Code size
<details>
<summary>ⓘ</summary>

The size of the memory allocated for the code of the JIT traces
</details>
</td>
<td align="right">211,959,191</td>
<td align="right">71.6%</td>
<td align="right">1,128,481,784</td>
<td align="right">71.0%</td>
<td align="right">432.4%</td>
</tr>
<tr>
<td align="left">
Data size
<details>
<summary>ⓘ</summary>

The size of the memory allocated for the data of the JIT traces
</details>
</td>
<td align="right">37,410,456</td>
<td align="right">12.6%</td>
<td align="right">198,243,544</td>
<td align="right">12.5%</td>
<td align="right">429.9%</td>
</tr>
<tr>
<td align="left">
Trampoline size
<details>
<summary>ⓘ</summary>

The size of the memory allocated for the trampolines of the JIT traces
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


</details>

### JIT trace total memory histogram

<details>
<summary> JIT trace total memory histogram </summary>

<table>
<thead>
<tr>
<th align="left">Size (bytes)</th>
<th align="left">Base Count</th>
<th align="right">Base Ratio</th>
<th align="left">Head Count</th>
<th align="right">Head Ratio</th>
<th align="right">Change</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><= 4,096</td>
<td align="left">3,334</td>
<td align="right">15.1%</td>
<td align="left">15,484</td>
<td align="right">12.4%</td>
<td align="right">364.4%</td>
</tr>
<tr>
<td align="left"><= 8,192</td>
<td align="left">7,644</td>
<td align="right">34.6%</td>
<td align="left">53,127</td>
<td align="right">42.7%</td>
<td align="right">595.0%</td>
</tr>
<tr>
<td align="left"><= 16,384</td>
<td align="left">7,313</td>
<td align="right">33.1%</td>
<td align="left">35,395</td>
<td align="right">28.4%</td>
<td align="right">384.0%</td>
</tr>
<tr>
<td align="left"><= 32,768</td>
<td align="left">2,539</td>
<td align="right">11.5%</td>
<td align="left">15,446</td>
<td align="right">12.4%</td>
<td align="right">508.3%</td>
</tr>
<tr>
<td align="left"><= 65,536</td>
<td align="left">1,149</td>
<td align="right">5.2%</td>
<td align="left">4,678</td>
<td align="right">3.8%</td>
<td align="right">307.1%</td>
</tr>
<tr>
<td align="left"><= 131,072</td>
<td align="left">84</td>
<td align="right">0.4%</td>
<td align="left">425</td>
<td align="right">0.3%</td>
<td align="right">406.0%</td>
</tr>
</tbody>
</table>


</details>

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
<td align="left"><= 8</td>
<td align="right">998</td>
<td align="right">3.9%</td>
<td align="right">4,179</td>
<td align="right">3.1%</td>
<td align="right">318.7%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">1,492</td>
<td align="right">5.8%</td>
<td align="right">8,684</td>
<td align="right">6.3%</td>
<td align="right">482.0%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">7,457</td>
<td align="right">29.2%</td>
<td align="right">46,098</td>
<td align="right">33.7%</td>
<td align="right">518.2%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">7,238</td>
<td align="right">28.3%</td>
<td align="right">42,458</td>
<td align="right">31.0%</td>
<td align="right">486.6%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">4,014</td>
<td align="right">15.7%</td>
<td align="right">24,382</td>
<td align="right">17.8%</td>
<td align="right">507.4%</td>
</tr>
<tr>
<td align="left"><= 256</td>
<td align="right">3,783</td>
<td align="right">14.8%</td>
<td align="right">9,673</td>
<td align="right">7.1%</td>
<td align="right">155.7%</td>
</tr>
<tr>
<td align="left"><= 512</td>
<td align="right">513</td>
<td align="right">2.0%</td>
<td align="right">1,241</td>
<td align="right">0.9%</td>
<td align="right">141.9%</td>
</tr>
<tr>
<td align="left"><= 1,024</td>
<td align="right">42</td>
<td align="right">0.2%</td>
<td align="right">182</td>
<td align="right">0.1%</td>
<td align="right">333.3%</td>
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
<td align="left"><= 4</td>
<td align="right">993</td>
<td align="right">3.9%</td>
<td align="right">3,485</td>
<td align="right">2.5%</td>
<td align="right">251.0%</td>
</tr>
<tr>
<td align="left"><= 8</td>
<td align="right">250</td>
<td align="right">1.0%</td>
<td align="right">2,139</td>
<td align="right">1.6%</td>
<td align="right">755.6%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">2,518</td>
<td align="right">9.9%</td>
<td align="right">12,265</td>
<td align="right">9.0%</td>
<td align="right">387.1%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">8,857</td>
<td align="right">34.7%</td>
<td align="right">55,509</td>
<td align="right">40.5%</td>
<td align="right">526.7%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">5,927</td>
<td align="right">23.2%</td>
<td align="right">32,693</td>
<td align="right">23.9%</td>
<td align="right">451.6%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">2,514</td>
<td align="right">9.8%</td>
<td align="right">13,798</td>
<td align="right">10.1%</td>
<td align="right">448.8%</td>
</tr>
<tr>
<td align="left"><= 256</td>
<td align="right">960</td>
<td align="right">3.8%</td>
<td align="right">4,160</td>
<td align="right">3.0%</td>
<td align="right">333.3%</td>
</tr>
<tr>
<td align="left"><= 512</td>
<td align="right">44</td>
<td align="right">0.2%</td>
<td align="right">506</td>
<td align="right">0.4%</td>
<td align="right">1,050.0%</td>
</tr>
</tbody>
</table>


</details>

### Trace run length histogram

<details>
<summary> trace run length histogram </summary>


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
<td align="left">_ERROR_POP_N</td>
<td align="right">263</td>
<td align="right">333,155</td>
<td align="right">126,574.9%</td>
</tr>
<tr>
<td align="left">_DELETE_SUBSCR</td>
<td align="right">6,257</td>
<td align="right">844,353</td>
<td align="right">13,394.5%</td>
</tr>
<tr>
<td align="left">_CHECK_PEP_523</td>
<td align="right">36,140</td>
<td align="right">304,380</td>
<td align="right">742.2%</td>
</tr>
<tr>
<td align="left">_CALL_TUPLE_1</td>
<td align="right">143,314</td>
<td align="right">1,063,985</td>
<td align="right">642.4%</td>
</tr>
<tr>
<td align="left">_PUSH_NULL_CONDITIONAL</td>
<td align="right">298,500</td>
<td align="right">1,509,343</td>
<td align="right">405.6%</td>
</tr>
<tr>
<td align="left">_MAKE_CELL</td>
<td align="right">279,289</td>
<td align="right">1,013,007</td>
<td align="right">262.7%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE</td>
<td align="right">388,800</td>
<td align="right">1,228,823</td>
<td align="right">216.1%</td>
</tr>
<tr>
<td align="left">_POP_TOP_LOAD_CONST_INLINE_BORROW</td>
<td align="right">2,016,270</td>
<td align="right">6,271,375</td>
<td align="right">211.0%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_IMMORTAL</td>
<td align="right">154,140</td>
<td align="right">431,263</td>
<td align="right">179.8%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_WITH_HINT</td>
<td align="right">1,416,224</td>
<td align="right">3,315,423</td>
<td align="right">134.1%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_MODULE</td>
<td align="right">558,864</td>
<td align="right">1,255,058</td>
<td align="right">124.6%</td>
</tr>
<tr>
<td align="left">_UNARY_NOT</td>
<td align="right">214,420</td>
<td align="right">479,799</td>
<td align="right">123.8%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_2</td>
<td align="right">5,746,700</td>
<td align="right">12,858,747</td>
<td align="right">123.8%</td>
</tr>
<tr>
<td align="left">_IMPORT_NAME</td>
<td align="right">27,762</td>
<td align="right">59,084</td>
<td align="right">112.8%</td>
</tr>
<tr>
<td align="left">_STORE_ATTR</td>
<td align="right">4,473,478</td>
<td align="right">7,842,770</td>
<td align="right">75.3%</td>
</tr>
<tr>
<td align="left">_UNARY_INVERT</td>
<td align="right">790,880</td>
<td align="right">1,169,235</td>
<td align="right">47.8%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_NOT_NONE_POP</td>
<td align="right">60,015,425</td>
<td align="right">83,940,534</td>
<td align="right">39.9%</td>
</tr>
<tr>
<td align="left">_COPY_FREE_VARS</td>
<td align="right">7,177,150</td>
<td align="right">9,842,490</td>
<td align="right">37.1%</td>
</tr>
<tr>
<td align="left">_GUARD_TYPE_VERSION_AND_LOCK</td>
<td align="right">70,805,818</td>
<td align="right">95,535,848</td>
<td align="right">34.9%</td>
</tr>
<tr>
<td align="left">_GUARD_DORV_NO_DICT</td>
<td align="right">70,172,798</td>
<td align="right">93,887,888</td>
<td align="right">33.8%</td>
</tr>
<tr>
<td align="left">_STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">70,172,798</td>
<td align="right">93,887,888</td>
<td align="right">33.8%</td>
</tr>
<tr>
<td align="left">_SET_FUNCTION_ATTRIBUTE</td>
<td align="right">5,304,870</td>
<td align="right">7,090,202</td>
<td align="right">33.7%</td>
</tr>
<tr>
<td align="left">_DEOPT</td>
<td align="right">10,241,638</td>
<td align="right">13,611,497</td>
<td align="right">32.9%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_NONDESCRIPTOR_NO_DICT</td>
<td align="right">14,825,969</td>
<td align="right">19,687,382</td>
<td align="right">32.8%</td>
</tr>
<tr>
<td align="left">_LOAD_SUPER_ATTR_METHOD</td>
<td align="right">453,023</td>
<td align="right">594,105</td>
<td align="right">31.1%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">4,718,996</td>
<td align="right">6,030,911</td>
<td align="right">27.8%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_EXTEND</td>
<td align="right">59,475,431</td>
<td align="right">73,444,756</td>
<td align="right">23.5%</td>
</tr>
<tr>
<td align="left">_GUARD_BINARY_OP_EXTEND</td>
<td align="right">69,158,686</td>
<td align="right">85,347,276</td>
<td align="right">23.4%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP</td>
<td align="right">61,394,009</td>
<td align="right">73,979,901</td>
<td align="right">20.5%</td>
</tr>
<tr>
<td align="left">_DICT_MERGE</td>
<td align="right">5,380,284</td>
<td align="right">6,471,705</td>
<td align="right">20.3%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBSCR_TUPLE_INT</td>
<td align="right">19,649,064</td>
<td align="right">23,580,095</td>
<td align="right">20.0%</td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE</td>
<td align="right">23,764,616</td>
<td align="right">28,507,916</td>
<td align="right">20.0%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">47,241,702</td>
<td align="right">56,427,200</td>
<td align="right">19.4%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT</td>
<td align="right">162,744,989</td>
<td align="right">193,752,865</td>
<td align="right">19.1%</td>
</tr>
<tr>
<td align="left">_LOAD_GLOBAL_MODULE</td>
<td align="right">60,193,655</td>
<td align="right">71,607,812</td>
<td align="right">19.0%</td>
</tr>
<tr>
<td align="left">_TO_BOOL</td>
<td align="right">145,247,326</td>
<td align="right">172,053,847</td>
<td align="right">18.5%</td>
</tr>
<tr>
<td align="left">_BUILD_MAP</td>
<td align="right">7,759,323</td>
<td align="right">9,147,931</td>
<td align="right">17.9%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_3</td>
<td align="right">2,159,367</td>
<td align="right">2,538,723</td>
<td align="right">17.6%</td>
</tr>
<tr>
<td align="left">_RETURN_VALUE</td>
<td align="right">494,835,391</td>
<td align="right">576,672,325</td>
<td align="right">16.5%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_NONE_POP</td>
<td align="right">61,234,820</td>
<td align="right">51,108,288</td>
<td align="right">-16.5%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_INPLACE_ADD_UNICODE</td>
<td align="right">3,521,807</td>
<td align="right">4,095,654</td>
<td align="right">16.3%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">158,821,310</td>
<td align="right">184,103,994</td>
<td align="right">15.9%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_TUPLE</td>
<td align="right">225,527,191</td>
<td align="right">259,036,578</td>
<td align="right">14.9%</td>
</tr>
<tr>
<td align="left">_RETURN_GENERATOR</td>
<td align="right">15,684,365</td>
<td align="right">17,973,879</td>
<td align="right">14.6%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_O</td>
<td align="right">540,521,746</td>
<td align="right">618,729,411</td>
<td align="right">14.5%</td>
</tr>
<tr>
<td align="left">_GUARD_GLOBALS_VERSION</td>
<td align="right">10,371,017</td>
<td align="right">11,849,159</td>
<td align="right">14.3%</td>
</tr>
<tr>
<td align="left">_LOAD_GLOBAL_BUILTINS</td>
<td align="right">10,371,017</td>
<td align="right">11,849,159</td>
<td align="right">14.3%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_TUPLE</td>
<td align="right">368,438,588</td>
<td align="right">419,853,586</td>
<td align="right">14.0%</td>
</tr>
<tr>
<td align="left">_CHECK_CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">57,846,197</td>
<td align="right">65,813,150</td>
<td align="right">13.8%</td>
</tr>
<tr>
<td align="left">_MAKE_FUNCTION</td>
<td align="right">15,706,503</td>
<td align="right">17,840,200</td>
<td align="right">13.6%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_CLASS</td>
<td align="right">39,479,272</td>
<td align="right">44,680,525</td>
<td align="right">13.2%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_ADD_UNICODE</td>
<td align="right">8,601,713</td>
<td align="right">9,720,800</td>
<td align="right">13.0%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_STR</td>
<td align="right">37,766,066</td>
<td align="right">42,552,507</td>
<td align="right">12.7%</td>
</tr>
<tr>
<td align="left">_UNARY_NEGATIVE</td>
<td align="right">957,246</td>
<td align="right">1,075,700</td>
<td align="right">12.4%</td>
</tr>
<tr>
<td align="left">_STORE_ATTR_SLOT</td>
<td align="right">82,598,345</td>
<td align="right">92,685,271</td>
<td align="right">12.2%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">57,846,197</td>
<td align="right">64,899,263</td>
<td align="right">12.2%</td>
</tr>
<tr>
<td align="left">_STORE_DEREF</td>
<td align="right">1,398,440</td>
<td align="right">1,557,379</td>
<td align="right">11.4%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_1</td>
<td align="right">158,457,708</td>
<td align="right">176,181,703</td>
<td align="right">11.2%</td>
</tr>
<tr>
<td align="left">_GUARD_TOS_INT</td>
<td align="right">101,562,550</td>
<td align="right">112,399,358</td>
<td align="right">10.7%</td>
</tr>
<tr>
<td align="left">_POP_TOP_LOAD_CONST_INLINE</td>
<td align="right">58,754,753</td>
<td align="right">64,892,930</td>
<td align="right">10.4%</td>
</tr>
<tr>
<td align="left">_IS_OP</td>
<td align="right">252,228,720</td>
<td align="right">278,227,057</td>
<td align="right">10.3%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">270,764,857</td>
<td align="right">296,053,445</td>
<td align="right">9.3%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_3</td>
<td align="right">45,688,235</td>
<td align="right">49,856,484</td>
<td align="right">9.1%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">966,502,832</td>
<td align="right">1,052,468,639</td>
<td align="right">8.9%</td>
</tr>
<tr>
<td align="left">_CHECK_MANAGED_OBJECT_HAS_VALUES</td>
<td align="right">966,720,078</td>
<td align="right">1,052,694,750</td>
<td align="right">8.9%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_KW</td>
<td align="right">8,222,111</td>
<td align="right">8,950,263</td>
<td align="right">8.9%</td>
</tr>
<tr>
<td align="left">_PY_FRAME_KW</td>
<td align="right">8,222,111</td>
<td align="right">8,950,263</td>
<td align="right">8.9%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_6</td>
<td align="right">396,521,446</td>
<td align="right">431,511,837</td>
<td align="right">8.8%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR</td>
<td align="right">304,422,716</td>
<td align="right">330,627,151</td>
<td align="right">8.6%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_BOOL</td>
<td align="right">1,198,366,120</td>
<td align="right">1,297,053,505</td>
<td align="right">8.2%</td>
</tr>
<tr>
<td align="left">_CHECK_ATTR_CLASS</td>
<td align="right">273,904,484</td>
<td align="right">296,457,722</td>
<td align="right">8.2%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_2</td>
<td align="right">215,033,082</td>
<td align="right">232,063,410</td>
<td align="right">7.9%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_LIST</td>
<td align="right">44,515,136</td>
<td align="right">47,974,395</td>
<td align="right">7.8%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_CLASS</td>
<td align="right">273,688,424</td>
<td align="right">294,678,932</td>
<td align="right">7.7%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_TUPLE</td>
<td align="right">230,853,005</td>
<td align="right">248,189,494</td>
<td align="right">7.5%</td>
</tr>
<tr>
<td align="left">_BUILD_TUPLE</td>
<td align="right">536,837,027</td>
<td align="right">575,171,318</td>
<td align="right">7.1%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP_DICT</td>
<td align="right">267,148,007</td>
<td align="right">285,898,015</td>
<td align="right">7.0%</td>
</tr>
<tr>
<td align="left">_POP_TOP</td>
<td align="right">1,143,284,661</td>
<td align="right">1,223,456,914</td>
<td align="right">7.0%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_6</td>
<td align="right">834,494,527</td>
<td align="right">892,124,792</td>
<td align="right">6.9%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_3</td>
<td align="right">328,385,363</td>
<td align="right">350,138,585</td>
<td align="right">6.6%</td>
</tr>
<tr>
<td align="left">_REPLACE_WITH_TRUE</td>
<td align="right">74,382,701</td>
<td align="right">79,306,618</td>
<td align="right">6.6%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_AND_CLEAR</td>
<td align="right">21,527,782</td>
<td align="right">22,899,428</td>
<td align="right">6.4%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_FLOAT</td>
<td align="right">14,394,680</td>
<td align="right">15,297,140</td>
<td align="right">6.3%</td>
</tr>
<tr>
<td align="left">_CALL_ISINSTANCE</td>
<td align="right">166,773,093</td>
<td align="right">177,114,897</td>
<td align="right">6.2%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_0</td>
<td align="right">176,151,355</td>
<td align="right">186,924,846</td>
<td align="right">6.1%</td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE_OPERAND</td>
<td align="right">467,359,473</td>
<td align="right">495,642,749</td>
<td align="right">6.1%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION</td>
<td align="right">904,989,686</td>
<td align="right">958,786,753</td>
<td align="right">5.9%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_FAST</td>
<td align="right">747,166,332</td>
<td align="right">791,337,417</td>
<td align="right">5.9%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_SLOT</td>
<td align="right">483,854,507</td>
<td align="right">509,542,496</td>
<td align="right">5.3%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_TUPLE</td>
<td align="right">344,691,584</td>
<td align="right">362,690,432</td>
<td align="right">5.2%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_INT</td>
<td align="right">495,285,216</td>
<td align="right">520,711,820</td>
<td align="right">5.1%</td>
</tr>
<tr>
<td align="left">_LIST_APPEND</td>
<td align="right">166,555,240</td>
<td align="right">174,944,554</td>
<td align="right">5.0%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_INT</td>
<td align="right">164,718,067</td>
<td align="right">172,986,649</td>
<td align="right">5.0%</td>
</tr>
<tr>
<td align="left">_PUSH_NULL</td>
<td align="right">3,722,952,919</td>
<td align="right">3,904,685,923</td>
<td align="right">4.9%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_INLINE</td>
<td align="right">68,585,355</td>
<td align="right">71,813,640</td>
<td align="right">4.7%</td>
</tr>
<tr>
<td align="left">_GUARD_TYPE_VERSION</td>
<td align="right">2,714,275,849</td>
<td align="right">2,841,784,020</td>
<td align="right">4.7%</td>
</tr>
<tr>
<td align="left">_STORE_FAST</td>
<td align="right">3,948,011,725</td>
<td align="right">4,129,056,460</td>
<td align="right">4.6%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_EXACT_ARGS</td>
<td align="right">822,086,809</td>
<td align="right">859,661,784</td>
<td align="right">4.6%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_LIST</td>
<td align="right">1,415,740,307</td>
<td align="right">1,480,212,618</td>
<td align="right">4.6%</td>
</tr>
<tr>
<td align="left">_START_EXECUTOR</td>
<td align="right">3,739,913,293</td>
<td align="right">3,906,263,232</td>
<td align="right">4.4%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_FALSE_POP</td>
<td align="right">4,332,579,458</td>
<td align="right">4,523,602,691</td>
<td align="right">4.4%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_0</td>
<td align="right">3,354,458,241</td>
<td align="right">3,501,803,239</td>
<td align="right">4.4%</td>
</tr>
<tr>
<td align="left">_GUARD_DORV_VALUES_INST_ATTR_FROM_DICT</td>
<td align="right">742,921,264</td>
<td align="right">775,324,207</td>
<td align="right">4.4%</td>
</tr>
<tr>
<td align="left">_EXIT_TRACE</td>
<td align="right">3,729,671,392</td>
<td align="right">3,892,318,584</td>
<td align="right">4.4%</td>
</tr>
<tr>
<td align="left">_PUSH_FRAME</td>
<td align="right">936,018,400</td>
<td align="right">976,631,591</td>
<td align="right">4.3%</td>
</tr>
<tr>
<td align="left">_SAVE_RETURN_OFFSET</td>
<td align="right">936,018,400</td>
<td align="right">976,631,591</td>
<td align="right">4.3%</td>
</tr>
<tr>
<td align="left">_GUARD_KEYS_VERSION</td>
<td align="right">742,784,084</td>
<td align="right">774,567,154</td>
<td align="right">4.3%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS</td>
<td align="right">6,137,792</td>
<td align="right">6,398,912</td>
<td align="right">4.3%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE</td>
<td align="right">3,579,436,410</td>
<td align="right">3,726,516,513</td>
<td align="right">4.1%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_LIST</td>
<td align="right">1,285,899,041</td>
<td align="right">1,337,765,405</td>
<td align="right">4.0%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW</td>
<td align="right">5,036,423,182</td>
<td align="right">5,237,481,758</td>
<td align="right">4.0%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_NONE</td>
<td align="right">184,120,201</td>
<td align="right">191,465,571</td>
<td align="right">4.0%</td>
</tr>
<tr>
<td align="left">_RESUME_CHECK</td>
<td align="right">896,630,094</td>
<td align="right">932,070,177</td>
<td align="right">4.0%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_LIST</td>
<td align="right">1,542,822,312</td>
<td align="right">1,483,253,815</td>
<td align="right">-3.9%</td>
</tr>
<tr>
<td align="left">_CHECK_PERIODIC</td>
<td align="right">6,946,243,924</td>
<td align="right">7,210,426,332</td>
<td align="right">3.8%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">149,299,873</td>
<td align="right">154,857,927</td>
<td align="right">3.7%</td>
</tr>
<tr>
<td align="left">_CHECK_ATTR_METHOD_LAZY_DICT</td>
<td align="right">44,407,420</td>
<td align="right">46,058,188</td>
<td align="right">3.7%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_LAZY_DICT</td>
<td align="right">44,407,420</td>
<td align="right">46,058,188</td>
<td align="right">3.7%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION</td>
<td align="right">2,236,160,540</td>
<td align="right">2,316,034,973</td>
<td align="right">3.6%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST</td>
<td align="right">8,051,873,670</td>
<td align="right">8,339,117,907</td>
<td align="right">3.6%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY_AND_SET_IP</td>
<td align="right">10,569,910,150</td>
<td align="right">10,945,047,305</td>
<td align="right">3.5%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">71,763,752</td>
<td align="right">74,298,964</td>
<td align="right">3.5%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">1,648,051,221</td>
<td align="right">1,705,523,468</td>
<td align="right">3.5%</td>
</tr>
<tr>
<td align="left">_CALL_NON_PY_GENERAL</td>
<td align="right">449,255,909</td>
<td align="right">464,815,311</td>
<td align="right">3.5%</td>
</tr>
<tr>
<td align="left">_CHECK_IS_NOT_PY_CALLABLE</td>
<td align="right">450,303,829</td>
<td align="right">465,830,920</td>
<td align="right">3.4%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY</td>
<td align="right">23,781,565,062</td>
<td align="right">24,573,797,066</td>
<td align="right">3.3%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_0</td>
<td align="right">736,588,396</td>
<td align="right">761,117,556</td>
<td align="right">3.3%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_2</td>
<td align="right">1,754,040,202</td>
<td align="right">1,810,280,941</td>
<td align="right">3.2%</td>
</tr>
<tr>
<td align="left">_SET_IP</td>
<td align="right">27,748,762,813</td>
<td align="right">28,633,234,825</td>
<td align="right">3.2%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">695,542,382</td>
<td align="right">717,627,468</td>
<td align="right">3.2%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_TRUE_POP</td>
<td align="right">2,746,265,034</td>
<td align="right">2,833,372,818</td>
<td align="right">3.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_1</td>
<td align="right">3,794,700,809</td>
<td align="right">3,913,727,214</td>
<td align="right">3.1%</td>
</tr>
<tr>
<td align="left">_GET_ITER</td>
<td align="right">568,490,112</td>
<td align="right">584,391,944</td>
<td align="right">2.8%</td>
</tr>
<tr>
<td align="left">_MAP_ADD</td>
<td align="right">40,742,103</td>
<td align="right">41,857,600</td>
<td align="right">2.7%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_2</td>
<td align="right">139,430,812</td>
<td align="right">143,192,375</td>
<td align="right">2.7%</td>
</tr>
<tr>
<td align="left">_MAKE_WARM</td>
<td align="right">6,154,956,616</td>
<td align="right">6,315,786,258</td>
<td align="right">2.6%</td>
</tr>
<tr>
<td align="left">_BINARY_OP</td>
<td align="right">1,524,492,843</td>
<td align="right">1,563,893,027</td>
<td align="right">2.6%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBSCR_DICT</td>
<td align="right">632,806,877</td>
<td align="right">648,466,791</td>
<td align="right">2.5%</td>
</tr>
<tr>
<td align="left">_CALL_KW_NON_PY</td>
<td align="right">24,072,518</td>
<td align="right">24,666,158</td>
<td align="right">2.5%</td>
</tr>
<tr>
<td align="left">_CHECK_IS_NOT_PY_CALLABLE_KW</td>
<td align="right">24,072,518</td>
<td align="right">24,666,158</td>
<td align="right">2.5%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_INT</td>
<td align="right">1,709,877,881</td>
<td align="right">1,750,175,231</td>
<td align="right">2.4%</td>
</tr>
<tr>
<td align="left">_PY_FRAME_GENERAL</td>
<td align="right">37,127,169</td>
<td align="right">36,269,839</td>
<td align="right">-2.3%</td>
</tr>
<tr>
<td align="left">_CHECK_METHOD_VERSION</td>
<td align="right">2,976,000</td>
<td align="right">3,041,120</td>
<td align="right">2.2%</td>
</tr>
<tr>
<td align="left">_EXPAND_METHOD</td>
<td align="right">2,976,000</td>
<td align="right">3,041,120</td>
<td align="right">2.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_3</td>
<td align="right">2,661,764,294</td>
<td align="right">2,714,175,004</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">_LOAD_DEREF</td>
<td align="right">419,297,152</td>
<td align="right">427,342,356</td>
<td align="right">1.9%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_RANGE</td>
<td align="right">425,531,242</td>
<td align="right">433,588,367</td>
<td align="right">1.9%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_RANGE</td>
<td align="right">425,531,242</td>
<td align="right">433,588,367</td>
<td align="right">1.9%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_4</td>
<td align="right">1,055,329,334</td>
<td align="right">1,074,817,842</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_RANGE</td>
<td align="right">405,240,003</td>
<td align="right">412,451,459</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">_CALL_INTRINSIC_1</td>
<td align="right">70,350,490</td>
<td align="right">71,589,625</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">_LIST_EXTEND</td>
<td align="right">70,350,490</td>
<td align="right">71,589,625</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_5</td>
<td align="right">814,971,224</td>
<td align="right">828,971,330</td>
<td align="right">1.7%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_FAST_WITH_KEYWORDS</td>
<td align="right">119,303,355</td>
<td align="right">121,333,279</td>
<td align="right">1.7%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_5</td>
<td align="right">3,914,096,856</td>
<td align="right">3,979,036,018</td>
<td align="right">1.7%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_7</td>
<td align="right">2,730,467,694</td>
<td align="right">2,773,172,700</td>
<td align="right">1.6%</td>
</tr>
<tr>
<td align="left">_BUILD_LIST</td>
<td align="right">507,652,548</td>
<td align="right">515,416,696</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_7</td>
<td align="right">1,012,398,581</td>
<td align="right">1,027,676,343</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBSCR_LIST_INT</td>
<td align="right">2,230,233,822</td>
<td align="right">2,263,297,817</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">_BINARY_SLICE</td>
<td align="right">360,465,747</td>
<td align="right">365,746,505</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_UNICODE</td>
<td align="right">701,036,930</td>
<td align="right">710,856,168</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_1</td>
<td align="right">1,078,844,325</td>
<td align="right">1,093,643,301</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_ADD_INT</td>
<td align="right">2,660,864,915</td>
<td align="right">2,694,526,355</td>
<td align="right">1.3%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_0</td>
<td align="right">140,459,223</td>
<td align="right">142,234,681</td>
<td align="right">1.3%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_MULTIPLY_INT</td>
<td align="right">98,412,937</td>
<td align="right">99,646,972</td>
<td align="right">1.3%</td>
</tr>
<tr>
<td align="left">_CALL_LEN</td>
<td align="right">1,166,019,364</td>
<td align="right">1,180,053,310</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">_GUARD_NOS_INT</td>
<td align="right">3,524,917,861</td>
<td align="right">3,566,307,649</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_4</td>
<td align="right">4,314,752,894</td>
<td align="right">4,364,785,209</td>
<td align="right">1.2%</td>
</tr>
<tr>
<td align="left">_CALL_LIST_APPEND</td>
<td align="right">1,073,325,281</td>
<td align="right">1,085,139,972</td>
<td align="right">1.1%</td>
</tr>
<tr>
<td align="left">_SWAP</td>
<td align="right">1,709,735,571</td>
<td align="right">1,727,580,542</td>
<td align="right">1.0%</td>
</tr>
<tr>
<td align="left">_LOAD_SPECIAL</td>
<td align="right">815,372</td>
<td align="right">823,708</td>
<td align="right">1.0%</td>
</tr>
<tr>
<td align="left">_CALL_TYPE_1</td>
<td align="right">261,956,705</td>
<td align="right">264,518,631</td>
<td align="right">1.0%</td>
</tr>
<tr>
<td align="left">_FORMAT_SIMPLE</td>
<td align="right">78,966,914</td>
<td align="right">79,644,655</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">_COPY</td>
<td align="right">1,639,380,268</td>
<td align="right">1,653,437,934</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP</td>
<td align="right">408,883,030</td>
<td align="right">412,065,737</td>
<td align="right">0.8%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_1</td>
<td align="right">3,965,874,399</td>
<td align="right">3,994,924,808</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR_DICT</td>
<td align="right">232,302,039</td>
<td align="right">234,002,948</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">_CONVERT_VALUE</td>
<td align="right">78,199,130</td>
<td align="right">78,759,459</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">_BUILD_SLICE</td>
<td align="right">103,181,340</td>
<td align="right">103,890,560</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBSCR_STR_INT</td>
<td align="right">988,188,758</td>
<td align="right">994,977,206</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBTRACT_INT</td>
<td align="right">1,186,247,648</td>
<td align="right">1,194,098,824</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_STR</td>
<td align="right">1,351,142,654</td>
<td align="right">1,359,739,087</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">_STORE_SLICE</td>
<td align="right">111,492,420</td>
<td align="right">112,180,022</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">_GUARD_TOS_FLOAT</td>
<td align="right">40,775,190</td>
<td align="right">41,015,618</td>
<td align="right">0.6%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP_SET</td>
<td align="right">1,478,789,695</td>
<td align="right">1,486,832,604</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_FLOAT</td>
<td align="right">235,799,011</td>
<td align="right">236,979,968</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR</td>
<td align="right">546,166,639</td>
<td align="right">548,873,218</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_BUILD_STRING</td>
<td align="right">39,798,879</td>
<td align="right">39,990,144</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR_LIST_INT</td>
<td align="right">469,689,458</td>
<td align="right">471,650,654</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">_CALL_STR_1</td>
<td align="right">47,071,016</td>
<td align="right">47,185,450</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_JUMP_TO_TOP</td>
<td align="right">2,415,043,323</td>
<td align="right">2,409,523,026</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBTRACT_FLOAT</td>
<td align="right">254,690,388</td>
<td align="right">255,195,489</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_MULTIPLY_FLOAT</td>
<td align="right">512,797,028</td>
<td align="right">513,624,482</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">_FOR_ITER_TIER_TWO</td>
<td align="right">1,268,523,224</td>
<td align="right">1,266,483,151</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">_GUARD_NOS_FLOAT</td>
<td align="right">409,331,650</td>
<td align="right">409,915,605</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_4</td>
<td align="right">498,487,330</td>
<td align="right">499,190,797</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_ADD_FLOAT</td>
<td align="right">305,788,274</td>
<td align="right">306,198,400</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_LIST</td>
<td align="right">60,014,580</td>
<td align="right">60,056,442</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">_GET_ANEXT</td>
<td align="right">94,136,760</td>
<td align="right">94,136,760</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_TIER2_RESUME_CHECK</td>
<td align="right"></td>
<td align="right">1,074,412</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_GLOBAL</td>
<td align="right"></td>
<td align="right">89,476</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_FAST_CHECK</td>
<td align="right"></td>
<td align="right">41,973</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_CONST_MORTAL</td>
<td align="right"></td>
<td align="right">41,171</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_BUILD_SET</td>
<td align="right"></td>
<td align="right">37,186</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_NAME</td>
<td align="right"></td>
<td align="right">15,045</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_SET_ADD</td>
<td align="right"></td>
<td align="right">14,304</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_IMPORT_FROM</td>
<td align="right"></td>
<td align="right">4,349</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_STORE_NAME</td>
<td align="right"></td>
<td align="right">4,340</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_GET_YIELD_FROM_ITER</td>
<td align="right"></td>
<td align="right">2,891</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_BUILD_CLASS</td>
<td align="right"></td>
<td align="right">462</td>
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
<td align="right">2,034</td>
<td align="right">4,233</td>
<td align="right">108.1%</td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">23,807</td>
<td align="right">37,922</td>
<td align="right">59.3%</td>
</tr>
<tr>
<td align="left">SEND</td>
<td align="right">23,001</td>
<td align="right">23,066</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">RAISE_VARARGS</td>
<td align="right"></td>
<td align="right">1,461</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD_NO_JIT</td>
<td align="right"></td>
<td align="right">65</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">LOAD_CONST</td>
<td align="right"></td>
<td align="right">40</td>
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
watched dict modification
<details>
<summary>ⓘ</summary>

A watched dict has been modified
</details>
</td>
<td align="right">100</td>
<td align="right">191</td>
<td align="right">91.0%</td>
</tr>
<tr>
<td align="left">
watched globals modification
<details>
<summary>ⓘ</summary>

A watched `globals()` dict has been modified
</details>
</td>
<td align="right">100</td>
<td align="right">191</td>
<td align="right">91.0%</td>
</tr>
<tr>
<td align="left">
set class
<details>
<summary>ⓘ</summary>

Setting an object's class, `obj.__class__ = ...`
</details>
</td>
<td align="right">22,629</td>
<td align="right">22,629</td>
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
<td align="right">30</td>
<td align="right">30</td>
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
<td align="right">37</td>
<td align="right">37</td>
<td align="right">0.0%</td>
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
<td align="right">2,476</td>
<td align="right">2,476</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

---
Stats gathered on: 2025-03-05
