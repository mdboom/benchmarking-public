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
<td align="left">JUMP_BACKWARD_NO_JIT</td>
<td align="right">5,737,674,385</td>
<td align="right">5,158,807</td>
<td align="right">-99.9%</td>
</tr>
<tr>
<td align="left">STORE_SLICE</td>
<td align="right">112,724,898</td>
<td align="right">1,232,476</td>
<td align="right">-98.9%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_LIST</td>
<td align="right">62,293,363</td>
<td align="right">2,279,630</td>
<td align="right">-96.3%</td>
</tr>
<tr>
<td align="left">GET_ANEXT</td>
<td align="right">100,136,760</td>
<td align="right">6,000,000</td>
<td align="right">-94.0%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">1,459,213,875</td>
<td align="right">189,939,726</td>
<td align="right">-87.0%</td>
</tr>
<tr>
<td align="left">CALL_LEN</td>
<td align="right">1,402,095,206</td>
<td align="right">202,286,968</td>
<td align="right">-85.6%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_STR</td>
<td align="right">1,578,728,746</td>
<td align="right">233,549,190</td>
<td align="right">-85.2%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">700,971,912</td>
<td align="right">103,878,967</td>
<td align="right">-85.2%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_SET</td>
<td align="right">1,752,152,928</td>
<td align="right">268,876,760</td>
<td align="right">-84.7%</td>
</tr>
<tr>
<td align="left">CALL_LIST_APPEND</td>
<td align="right">1,273,196,199</td>
<td align="right">200,676,185</td>
<td align="right">-84.2%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBSCR_LIST_INT</td>
<td align="right">2,718,594,894</td>
<td align="right">431,808,753</td>
<td align="right">-84.1%</td>
</tr>
<tr>
<td align="left">COPY</td>
<td align="right">2,231,115,245</td>
<td align="right">364,857,451</td>
<td align="right">-83.6%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_LIST_INT</td>
<td align="right">565,770,669</td>
<td align="right">95,841,842</td>
<td align="right">-83.1%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">509,939,222</td>
<td align="right">87,002,598</td>
<td align="right">-82.9%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_INT</td>
<td align="right">3,481,013,868</td>
<td align="right">603,274,177</td>
<td align="right">-82.7%</td>
</tr>
<tr>
<td align="left">SWAP</td>
<td align="right">2,131,330,181</td>
<td align="right">371,533,618</td>
<td align="right">-82.6%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBSCR_STR_INT</td>
<td align="right">1,248,794,927</td>
<td align="right">271,301,842</td>
<td align="right">-78.3%</td>
</tr>
<tr>
<td align="left">LIST_EXTEND</td>
<td align="right">89,774,990</td>
<td align="right">19,598,144</td>
<td align="right">-78.2%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST_WITH_KEYWORDS</td>
<td align="right">154,101,699</td>
<td align="right">34,220,638</td>
<td align="right">-77.8%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_FLOAT</td>
<td align="right">340,634,640</td>
<td align="right">77,004,834</td>
<td align="right">-77.4%</td>
</tr>
<tr>
<td align="left">BUILD_LIST</td>
<td align="right">661,630,821</td>
<td align="right">156,573,840</td>
<td align="right">-76.3%</td>
</tr>
<tr>
<td align="left">LIST_APPEND</td>
<td align="right">223,552,705</td>
<td align="right">55,850,192</td>
<td align="right">-75.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_INT</td>
<td align="right">1,657,019,922</td>
<td align="right">429,650,780</td>
<td align="right">-74.1%</td>
</tr>
<tr>
<td align="left">EXTENDED_ARG</td>
<td align="right">633,592,975</td>
<td align="right">171,052,510</td>
<td align="right">-73.0%</td>
</tr>
<tr>
<td align="left">LOAD_SMALL_INT</td>
<td align="right">7,280,640,432</td>
<td align="right">1,991,478,903</td>
<td align="right">-72.6%</td>
</tr>
<tr>
<td align="left">STORE_FAST_LOAD_FAST</td>
<td align="right">194,712,758</td>
<td align="right">53,556,081</td>
<td align="right">-72.5%</td>
</tr>
<tr>
<td align="left">FOR_ITER_RANGE</td>
<td align="right">629,798,622</td>
<td align="right">175,387,945</td>
<td align="right">-72.2%</td>
</tr>
<tr>
<td align="left">CALL_TYPE_1</td>
<td align="right">369,594,830</td>
<td align="right">105,466,115</td>
<td align="right">-71.5%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_FLOAT</td>
<td align="right">504,572,177</td>
<td align="right">146,196,294</td>
<td align="right">-71.0%</td>
</tr>
<tr>
<td align="left">UNARY_NOT</td>
<td align="right">57,378,376</td>
<td align="right">17,289,609</td>
<td align="right">-69.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS</td>
<td align="right">377,538,152</td>
<td align="right">118,773,716</td>
<td align="right">-68.5%</td>
</tr>
<tr>
<td align="left">FOR_ITER_LIST</td>
<td align="right">2,192,884,427</td>
<td align="right">690,543,946</td>
<td align="right">-68.5%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_INT</td>
<td align="right">2,728,021,710</td>
<td align="right">865,086,048</td>
<td align="right">-68.3%</td>
</tr>
<tr>
<td align="left">CONVERT_VALUE</td>
<td align="right">114,778,068</td>
<td align="right">36,587,678</td>
<td align="right">-68.1%</td>
</tr>
<tr>
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">535,941,091</td>
<td align="right">170,961,163</td>
<td align="right">-68.1%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST</td>
<td align="right">1,113,885,215</td>
<td align="right">361,815,538</td>
<td align="right">-67.5%</td>
</tr>
<tr>
<td align="left">TO_BOOL_INT</td>
<td align="right">254,487,285</td>
<td align="right">84,258,928</td>
<td align="right">-66.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">2,518,836,322</td>
<td align="right">835,172,356</td>
<td align="right">-66.8%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">544,418,675</td>
<td align="right">182,589,487</td>
<td align="right">-66.5%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_BUILTIN</td>
<td align="right">5,743,062,717</td>
<td align="right">1,947,275,127</td>
<td align="right">-66.1%</td>
</tr>
<tr>
<td align="left">FORMAT_SIMPLE</td>
<td align="right">121,548,121</td>
<td align="right">41,884,827</td>
<td align="right">-65.5%</td>
</tr>
<tr>
<td align="left">BUILD_SLICE</td>
<td align="right">158,087,513</td>
<td align="right">54,908,693</td>
<td align="right">-65.3%</td>
</tr>
<tr>
<td align="left">BUILD_STRING</td>
<td align="right">61,787,682</td>
<td align="right">21,512,483</td>
<td align="right">-65.2%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_DICT</td>
<td align="right">354,393,090</td>
<td align="right">123,428,837</td>
<td align="right">-65.2%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_LOAD_FAST</td>
<td align="right">11,012,010,632</td>
<td align="right">3,907,103,182</td>
<td align="right">-64.5%</td>
</tr>
<tr>
<td align="left">NOP</td>
<td align="right">2,528,073,109</td>
<td align="right">907,997,846</td>
<td align="right">-64.1%</td>
</tr>
<tr>
<td align="left">STORE_FAST</td>
<td align="right">13,389,861,515</td>
<td align="right">4,844,028,618</td>
<td align="right">-63.8%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBSCR_DICT</td>
<td align="right">1,069,797,225</td>
<td align="right">391,931,323</td>
<td align="right">-63.4%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_FALSE</td>
<td align="right">10,636,333,341</td>
<td align="right">3,904,370,299</td>
<td align="right">-63.3%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_LAZY_DICT</td>
<td align="right">74,118,948</td>
<td align="right">27,251,966</td>
<td align="right">-63.2%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_MORTAL</td>
<td align="right">1,328,911,504</td>
<td align="right">493,172,143</td>
<td align="right">-62.9%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_O</td>
<td align="right">882,184,291</td>
<td align="right">328,616,182</td>
<td align="right">-62.7%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_DICT</td>
<td align="right">435,593,644</td>
<td align="right">165,282,641</td>
<td align="right">-62.1%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">2,802,828,930</td>
<td align="right">1,092,012,355</td>
<td align="right">-61.0%</td>
</tr>
<tr>
<td align="left">MAP_ADD</td>
<td align="right">65,889,583</td>
<td align="right">25,836,028</td>
<td align="right">-60.8%</td>
</tr>
<tr>
<td align="left">NOT_TAKEN</td>
<td align="right">94,136,760</td>
<td align="right">151,104,665</td>
<td align="right">60.5%</td>
</tr>
<tr>
<td align="left">CALL_STR_1</td>
<td align="right">78,104,351</td>
<td align="right">31,004,144</td>
<td align="right">-60.3%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_TRUE</td>
<td align="right">2,064,696,857</td>
<td align="right">825,706,318</td>
<td align="right">-60.0%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TUPLE</td>
<td align="right">404,475,832</td>
<td align="right">170,187,291</td>
<td align="right">-57.9%</td>
</tr>
<tr>
<td align="left">STORE_GLOBAL</td>
<td align="right">6,152,500</td>
<td align="right">2,597,140</td>
<td align="right">-57.8%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">99,511,862</td>
<td align="right">42,196,464</td>
<td align="right">-57.6%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS_WITH_METACLASS_CHECK</td>
<td align="right">23,452,953</td>
<td align="right">10,016,934</td>
<td align="right">-57.3%</td>
</tr>
<tr>
<td align="left">CALL_NON_PY_GENERAL</td>
<td align="right">809,436,314</td>
<td align="right">355,805,787</td>
<td align="right">-56.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_MULTIPLY_FLOAT</td>
<td align="right">1,053,436,108</td>
<td align="right">468,521,596</td>
<td align="right">-55.5%</td>
</tr>
<tr>
<td align="left">STORE_FAST_STORE_FAST</td>
<td align="right">785,136,940</td>
<td align="right">353,724,708</td>
<td align="right">-54.9%</td>
</tr>
<tr>
<td align="left">BINARY_OP_INPLACE_ADD_UNICODE</td>
<td align="right">6,932,436</td>
<td align="right">3,142,810</td>
<td align="right">-54.7%</td>
</tr>
<tr>
<td align="left">MAKE_FUNCTION</td>
<td align="right">114,819,340</td>
<td align="right">53,043,983</td>
<td align="right">-53.8%</td>
</tr>
<tr>
<td align="left">LOAD_FAST</td>
<td align="right">37,030,936,623</td>
<td align="right">17,223,753,427</td>
<td align="right">-53.5%</td>
</tr>
<tr>
<td align="left">IS_OP</td>
<td align="right">517,854,662</td>
<td align="right">242,248,793</td>
<td align="right">-53.2%</td>
</tr>
<tr>
<td align="left">TO_BOOL_LIST</td>
<td align="right">88,667,044</td>
<td align="right">41,657,086</td>
<td align="right">-53.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_MULTIPLY_INT</td>
<td align="right">270,947,255</td>
<td align="right">129,270,952</td>
<td align="right">-52.3%</td>
</tr>
<tr>
<td align="left">SET_FUNCTION_ATTRIBUTE</td>
<td align="right">98,503,261</td>
<td align="right">47,230,432</td>
<td align="right">-52.1%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_IMMORTAL</td>
<td align="right">7,172,727,614</td>
<td align="right">3,529,448,009</td>
<td align="right">-50.8%</td>
</tr>
<tr>
<td align="left">GET_ITER</td>
<td align="right">1,253,219,889</td>
<td align="right">619,825,418</td>
<td align="right">-50.5%</td>
</tr>
<tr>
<td align="left">TO_BOOL_STR</td>
<td align="right">71,005,220</td>
<td align="right">35,262,354</td>
<td align="right">-50.3%</td>
</tr>
<tr>
<td align="left">BUILD_TUPLE</td>
<td align="right">1,204,660,523</td>
<td align="right">610,269,891</td>
<td align="right">-49.3%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">259,783,738</td>
<td align="right">134,286,457</td>
<td align="right">-48.3%</td>
</tr>
<tr>
<td align="left">TO_BOOL_ALWAYS_TRUE</td>
<td align="right">200,675,891</td>
<td align="right">104,177,365</td>
<td align="right">-48.1%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">313,076,263</td>
<td align="right">162,917,429</td>
<td align="right">-48.0%</td>
</tr>
<tr>
<td align="left">DICT_UPDATE</td>
<td align="right">13,935</td>
<td align="right">7,695</td>
<td align="right">-44.8%</td>
</tr>
<tr>
<td align="left">CALL_KW_BOUND_METHOD</td>
<td align="right">1,748,448</td>
<td align="right">968,318</td>
<td align="right">-44.6%</td>
</tr>
<tr>
<td align="left">PUSH_NULL</td>
<td align="right">1,502,972,290</td>
<td align="right">839,237,242</td>
<td align="right">-44.2%</td>
</tr>
<tr>
<td align="left">TO_BOOL_BOOL</td>
<td align="right">3,837,415,342</td>
<td align="right">2,145,086,423</td>
<td align="right">-44.1%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">351,675,677</td>
<td align="right">197,177,716</td>
<td align="right">-43.9%</td>
</tr>
<tr>
<td align="left">POP_ITER</td>
<td align="right">1,029,473,568</td>
<td align="right">583,568,820</td>
<td align="right">-43.3%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">154,302,279</td>
<td align="right">88,098,841</td>
<td align="right">-42.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">1,540,649,373</td>
<td align="right">887,321,899</td>
<td align="right">-42.4%</td>
</tr>
<tr>
<td align="left">BINARY_OP_EXTEND</td>
<td align="right">286,936,781</td>
<td align="right">165,434,192</td>
<td align="right">-42.3%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">773,138,749</td>
<td align="right">454,669,569</td>
<td align="right">-41.2%</td>
</tr>
<tr>
<td align="left">CALL_KW_NON_PY</td>
<td align="right">58,550,187</td>
<td align="right">34,594,795</td>
<td align="right">-40.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">2,489,114,940</td>
<td align="right">1,482,276,304</td>
<td align="right">-40.4%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">3,179,359,248</td>
<td align="right">1,929,281,169</td>
<td align="right">-39.3%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_FLOAT</td>
<td align="right">188,535,179</td>
<td align="right">114,765,187</td>
<td align="right">-39.1%</td>
</tr>
<tr>
<td align="left">LOAD_DEREF</td>
<td align="right">1,376,690,656</td>
<td align="right">839,967,013</td>
<td align="right">-39.0%</td>
</tr>
<tr>
<td align="left">CALL_INTRINSIC_1</td>
<td align="right">183,080,664</td>
<td align="right">112,724,202</td>
<td align="right">-38.4%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_GENERAL</td>
<td align="right">7,671,003</td>
<td align="right">4,778,967</td>
<td align="right">-37.7%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_ATTR</td>
<td align="right">2,216,121</td>
<td align="right">3,009,867</td>
<td align="right">35.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">4,790,425,442</td>
<td align="right">3,175,614,043</td>
<td align="right">-33.7%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">822,021,103</td>
<td align="right">546,451,329</td>
<td align="right">-33.5%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">172,746,950</td>
<td align="right">117,129,168</td>
<td align="right">-32.2%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_AND_CLEAR</td>
<td align="right">67,370,800</td>
<td align="right">45,836,639</td>
<td align="right">-32.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_NONE</td>
<td align="right">490,231,180</td>
<td align="right">334,397,574</td>
<td align="right">-31.8%</td>
</tr>
<tr>
<td align="left">JUMP_FORWARD</td>
<td align="right">383,011,595</td>
<td align="right">261,773,080</td>
<td align="right">-31.7%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_CLASS</td>
<td align="right">166,901,240</td>
<td align="right">117,906,090</td>
<td align="right">-29.4%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_MODULE</td>
<td align="right">3,295,874,799</td>
<td align="right">2,440,275,562</td>
<td align="right">-26.0%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NONE</td>
<td align="right">326,766,026</td>
<td align="right">242,744,343</td>
<td align="right">-25.7%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_NO_DICT</td>
<td align="right">68,712,773</td>
<td align="right">52,392,082</td>
<td align="right">-23.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">222,802,702</td>
<td align="right">170,454,627</td>
<td align="right">-23.5%</td>
</tr>
<tr>
<td align="left">CALL_ISINSTANCE</td>
<td align="right">824,401,490</td>
<td align="right">640,363,025</td>
<td align="right">-22.3%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE</td>
<td align="right">1,820,530</td>
<td align="right">1,431,779</td>
<td align="right">-21.4%</td>
</tr>
<tr>
<td align="left">POP_TOP</td>
<td align="right">3,155,191,596</td>
<td align="right">2,484,234,207</td>
<td align="right">-21.3%</td>
</tr>
<tr>
<td align="left">RESUME_CHECK</td>
<td align="right">6,238,635,321</td>
<td align="right">4,940,503,282</td>
<td align="right">-20.8%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NOT_NONE</td>
<td align="right">490,404,424</td>
<td align="right">388,385,934</td>
<td align="right">-20.8%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">354,196,562</td>
<td align="right">281,206,324</td>
<td align="right">-20.6%</td>
</tr>
<tr>
<td align="left">COPY_FREE_VARS</td>
<td align="right">347,582,843</td>
<td align="right">284,802,068</td>
<td align="right">-18.1%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBSCR_TUPLE_INT</td>
<td align="right">292,879,922</td>
<td align="right">241,105,176</td>
<td align="right">-17.7%</td>
</tr>
<tr>
<td align="left">LOAD_NAME</td>
<td align="right">9,743,070</td>
<td align="right">8,117,810</td>
<td align="right">-16.7%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_SLOT</td>
<td align="right">946,769,010</td>
<td align="right">803,967,000</td>
<td align="right">-15.1%</td>
</tr>
<tr>
<td align="left">RETURN_GENERATOR</td>
<td align="right">415,723,842</td>
<td align="right">353,877,645</td>
<td align="right">-14.9%</td>
</tr>
<tr>
<td align="left">CALL_KW_PY</td>
<td align="right">94,571,147</td>
<td align="right">81,475,786</td>
<td align="right">-13.8%</td>
</tr>
<tr>
<td align="left">RETURN_VALUE</td>
<td align="right">5,354,543,846</td>
<td align="right">4,621,759,195</td>
<td align="right">-13.7%</td>
</tr>
<tr>
<td align="left">CALL_PY_GENERAL</td>
<td align="right">303,220,148</td>
<td align="right">261,830,974</td>
<td align="right">-13.6%</td>
</tr>
<tr>
<td align="left">IMPORT_FROM</td>
<td align="right">8,083,743</td>
<td align="right">9,061,340</td>
<td align="right">12.1%</td>
</tr>
<tr>
<td align="left">IMPORT_NAME</td>
<td align="right">7,958,234</td>
<td align="right">8,905,888</td>
<td align="right">11.9%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_UNICODE</td>
<td align="right">70,467,051</td>
<td align="right">62,326,354</td>
<td align="right">-11.6%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_MODULE</td>
<td align="right">557,833,716</td>
<td align="right">498,171,670</td>
<td align="right">-10.7%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">956,362,504</td>
<td align="right">873,072,312</td>
<td align="right">-8.7%</td>
</tr>
<tr>
<td align="left">DICT_MERGE</td>
<td align="right">62,420,607</td>
<td align="right">57,330,982</td>
<td align="right">-8.2%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_METHOD</td>
<td align="right">62,413,240</td>
<td align="right">57,546,151</td>
<td align="right">-7.8%</td>
</tr>
<tr>
<td align="left">FOR_ITER_GEN</td>
<td align="right">244,786,448</td>
<td align="right">229,142,490</td>
<td align="right">-6.4%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_CHECK</td>
<td align="right">3,973,425</td>
<td align="right">4,224,058</td>
<td align="right">6.3%</td>
</tr>
<tr>
<td align="left">BUILD_MAP</td>
<td align="right">134,164,241</td>
<td align="right">126,043,719</td>
<td align="right">-6.1%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">76,658,536</td>
<td align="right">72,184,180</td>
<td align="right">-5.8%</td>
</tr>
<tr>
<td align="left">LOAD_SPECIAL</td>
<td align="right">13,580,312</td>
<td align="right">14,315,220</td>
<td align="right">5.4%</td>
</tr>
<tr>
<td align="left">UNARY_INVERT</td>
<td align="right">10,954,933</td>
<td align="right">10,602,360</td>
<td align="right">-3.2%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_WITH_HINT</td>
<td align="right">83,625,998</td>
<td align="right">81,058,135</td>
<td align="right">-3.1%</td>
</tr>
<tr>
<td align="left">UNARY_NEGATIVE</td>
<td align="right">127,568,659</td>
<td align="right">123,859,876</td>
<td align="right">-2.9%</td>
</tr>
<tr>
<td align="left">STORE_DEREF</td>
<td align="right">72,827,684</td>
<td align="right">71,211,130</td>
<td align="right">-2.2%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_PROPERTY</td>
<td align="right">68,697,453</td>
<td align="right">67,385,837</td>
<td align="right">-1.9%</td>
</tr>
<tr>
<td align="left">YIELD_VALUE</td>
<td align="right">1,113,085,545</td>
<td align="right">1,092,908,753</td>
<td align="right">-1.8%</td>
</tr>
<tr>
<td align="left">MAKE_CELL</td>
<td align="right">66,643,495</td>
<td align="right">65,857,673</td>
<td align="right">-1.2%</td>
</tr>
<tr>
<td align="left">CALL_TUPLE_1</td>
<td align="right">15,091,257</td>
<td align="right">14,948,013</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">EXIT_INIT_CHECK</td>
<td align="right">240,839,191</td>
<td align="right">243,042,660</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">CALL_ALLOC_AND_ENTER_INIT</td>
<td align="right">242,895,068</td>
<td align="right">245,098,537</td>
<td align="right">0.9%</td>
</tr>
<tr>
<td align="left">INTERPRETER_EXIT</td>
<td align="right">1,616,174,157</td>
<td align="right">1,612,262,641</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">CHECK_EXC_MATCH</td>
<td align="right">20,025,815</td>
<td align="right">19,997,452</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">POP_EXCEPT</td>
<td align="right">20,356,785</td>
<td align="right">20,328,422</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">PUSH_EXC_INFO</td>
<td align="right">20,356,806</td>
<td align="right">20,328,443</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD</td>
<td align="right">5,348</td>
<td align="right">5,353</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">179,291,907</td>
<td align="right">179,441,863</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">410,633</td>
<td align="right">410,943</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">END_FOR</td>
<td align="right">100,917,204</td>
<td align="right">100,845,514</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">CALL_KW</td>
<td align="right">121,332</td>
<td align="right">121,393</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">BUILD_SET</td>
<td align="right">752,885</td>
<td align="right">753,101</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RESUME</td>
<td align="right">34,206</td>
<td align="right">34,200</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">DELETE_SUBSCR</td>
<td align="right">131,417,306</td>
<td align="right">131,400,844</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">GET_YIELD_FROM_ITER</td>
<td align="right">35,549,669</td>
<td align="right">35,547,620</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBSCR_GETITEM</td>
<td align="right">155,899,611</td>
<td align="right">155,891,281</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">LOAD_CONST</td>
<td align="right">135,468</td>
<td align="right">135,474</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL</td>
<td align="right">14,763,548</td>
<td align="right">14,764,088</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD_NO_INTERRUPT</td>
<td align="right">418,390,822</td>
<td align="right">418,376,415</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">SEND_GEN</td>
<td align="right">591,621,545</td>
<td align="right">591,604,936</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">RAISE_VARARGS</td>
<td align="right">5,803,548</td>
<td align="right">5,803,608</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">END_SEND</td>
<td align="right">302,246,700</td>
<td align="right">302,244,620</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">DELETE_ATTR</td>
<td align="right">1,644,367</td>
<td align="right">1,644,369</td>
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
<td align="right">128,850,161</td>
<td align="right">128,850,161</td>
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
<td align="right">41,964,673</td>
<td align="right">41,964,673</td>
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
<td align="left">GET_AITER</td>
<td align="right">6,000,000</td>
<td align="right">6,000,000</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">END_ASYNC_FOR</td>
<td align="right">6,000,000</td>
<td align="right">6,000,000</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RERAISE</td>
<td align="right">3,486,046</td>
<td align="right">3,486,046</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNPACK_EX</td>
<td align="right">117,444</td>
<td align="right">117,444</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CLEANUP_THROW</td>
<td align="right">98,609</td>
<td align="right">98,609</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_UPDATE</td>
<td align="right">84,496</td>
<td align="right">84,496</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_ADD</td>
<td align="right">69,511</td>
<td align="right">69,511</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_NAME</td>
<td align="right">57,203</td>
<td align="right">57,203</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_GETATTRIBUTE_OVERRIDDEN</td>
<td align="right">56,548</td>
<td align="right">56,548</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">WITH_EXCEPT_START</td>
<td align="right">5,265</td>
<td align="right">5,265</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_BUILD_CLASS</td>
<td align="right">3,889</td>
<td align="right">3,889</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_LOCALS</td>
<td align="right">3,613</td>
<td align="right">3,613</td>
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
<td align="right">153</td>
<td align="right">153</td>
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
<tr>
<td align="left">JUMP_BACKWARD_JIT</td>
<td align="right"></td>
<td align="right">962,877,667</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">ENTER_EXECUTOR</td>
<td align="right"></td>
<td align="right">843,445,320</td>
<td align="right"></td>
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
<td align="right">15,811,876,672</td>
<td align="right">84.7%</td>
<td align="right">3,951,184,632</td>
<td align="right">77.5%</td>
<td align="right">-75.0%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">2,801,885,921</td>
<td align="right">15.0%</td>
<td align="right">1,091,627,742</td>
<td align="right">21.4%</td>
<td align="right">-61.0%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">58,955,255</td>
<td align="right">0.3%</td>
<td align="right">51,907,869</td>
<td align="right">1.0%</td>
<td align="right">-12.0%</td>
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
<td align="right">924,931</td>
<td align="right">45.0%</td>
<td align="right">366,536</td>
<td align="right">26.9%</td>
<td align="right">-60.4%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">1,130,205</td>
<td align="right">55.0%</td>
<td align="right">997,271</td>
<td align="right">73.1%</td>
<td align="right">-11.8%</td>
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
<td align="left">subscr list slice</td>
<td align="right">115,273</td>
<td align="right">12.5%</td>
<td align="right">6,384</td>
<td align="right">1.7%</td>
<td align="right">-94.5%</td>
</tr>
<tr>
<td align="left">xor int</td>
<td align="right">85,543</td>
<td align="right">9.2%</td>
<td align="right">16,343</td>
<td align="right">4.5%</td>
<td align="right">-80.9%</td>
</tr>
<tr>
<td align="left">true divide float</td>
<td align="right">11,587</td>
<td align="right">1.3%</td>
<td align="right">2,767</td>
<td align="right">0.8%</td>
<td align="right">-76.1%</td>
</tr>
<tr>
<td align="left">and int</td>
<td align="right">74,219</td>
<td align="right">8.0%</td>
<td align="right">18,469</td>
<td align="right">5.0%</td>
<td align="right">-75.1%</td>
</tr>
<tr>
<td align="left">power</td>
<td align="right">8,203</td>
<td align="right">0.9%</td>
<td align="right">2,343</td>
<td align="right">0.6%</td>
<td align="right">-71.4%</td>
</tr>
<tr>
<td align="left">multiply other</td>
<td align="right">2,678</td>
<td align="right">0.3%</td>
<td align="right">836</td>
<td align="right">0.2%</td>
<td align="right">-68.8%</td>
</tr>
<tr>
<td align="left">rshift</td>
<td align="right">23,510</td>
<td align="right">2.5%</td>
<td align="right">8,296</td>
<td align="right">2.3%</td>
<td align="right">-64.7%</td>
</tr>
<tr>
<td align="left">subscr</td>
<td align="right">350,588</td>
<td align="right">37.9%</td>
<td align="right">132,031</td>
<td align="right">36.0%</td>
<td align="right">-62.3%</td>
</tr>
<tr>
<td align="left">and other</td>
<td align="right">1,253</td>
<td align="right">0.1%</td>
<td align="right">494</td>
<td align="right">0.1%</td>
<td align="right">-60.6%</td>
</tr>
<tr>
<td align="left">add different types</td>
<td align="right">43,842</td>
<td align="right">4.7%</td>
<td align="right">22,152</td>
<td align="right">6.0%</td>
<td align="right">-49.5%</td>
</tr>
<tr>
<td align="left">floor divide</td>
<td align="right">33,963</td>
<td align="right">3.7%</td>
<td align="right">19,868</td>
<td align="right">5.4%</td>
<td align="right">-41.5%</td>
</tr>
<tr>
<td align="left">lshift</td>
<td align="right">19,448</td>
<td align="right">2.1%</td>
<td align="right">11,552</td>
<td align="right">3.2%</td>
<td align="right">-40.6%</td>
</tr>
<tr>
<td align="left">add other</td>
<td align="right">36,620</td>
<td align="right">4.0%</td>
<td align="right">23,138</td>
<td align="right">6.3%</td>
<td align="right">-36.8%</td>
</tr>
<tr>
<td align="left">xor</td>
<td align="right">294</td>
<td align="right">0.0%</td>
<td align="right">189</td>
<td align="right">0.1%</td>
<td align="right">-35.7%</td>
</tr>
<tr>
<td align="left">subtract other</td>
<td align="right">8,514</td>
<td align="right">0.9%</td>
<td align="right">6,194</td>
<td align="right">1.7%</td>
<td align="right">-27.2%</td>
</tr>
<tr>
<td align="left">multiply different types</td>
<td align="right">7,223</td>
<td align="right">0.8%</td>
<td align="right">5,752</td>
<td align="right">1.6%</td>
<td align="right">-20.4%</td>
</tr>
<tr>
<td align="left">remainder</td>
<td align="right">43,372</td>
<td align="right">4.7%</td>
<td align="right">36,656</td>
<td align="right">10.0%</td>
<td align="right">-15.5%</td>
</tr>
<tr>
<td align="left">out of range</td>
<td align="right">46,516</td>
<td align="right">5.0%</td>
<td align="right">40,822</td>
<td align="right">11.1%</td>
<td align="right">-12.2%</td>
</tr>
<tr>
<td align="left">true divide different types</td>
<td align="right">2,036</td>
<td align="right">0.2%</td>
<td align="right">1,996</td>
<td align="right">0.5%</td>
<td align="right">-2.0%</td>
</tr>
<tr>
<td align="left">subtract different types</td>
<td align="right">623</td>
<td align="right">0.1%</td>
<td align="right">628</td>
<td align="right">0.2%</td>
<td align="right">0.8%</td>
</tr>
<tr>
<td align="left">or</td>
<td align="right">3,174</td>
<td align="right">0.3%</td>
<td align="right">3,174</td>
<td align="right">0.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">subscr string slice</td>
<td align="right">2,340</td>
<td align="right">0.3%</td>
<td align="right">2,340</td>
<td align="right">0.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">subscr tuple slice</td>
<td align="right">1,967</td>
<td align="right">0.2%</td>
<td align="right">1,967</td>
<td align="right">0.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">true divide other</td>
<td align="right">1,384</td>
<td align="right">0.1%</td>
<td align="right">1,384</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">or different types</td>
<td align="right">597</td>
<td align="right">0.1%</td>
<td align="right">597</td>
<td align="right">0.2%</td>
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
<td align="right">61</td>
<td align="right">0.0%</td>
<td align="right">61</td>
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
<td align="right">544,418,675</td>
<td align="right">100.0%</td>
<td align="right">182,589,487</td>
<td align="right">100.0%</td>
<td align="right">-66.5%</td>
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
<td align="right">10,993,706,133</td>
<td align="right">98.4%</td>
<td align="right">4,985,880,628</td>
<td align="right">97.1%</td>
<td align="right">-54.6%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">175,696,025</td>
<td align="right">1.6%</td>
<td align="right">146,503,832</td>
<td align="right">2.9%</td>
<td align="right">-16.6%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">172,613,648</td>
<td align="right">1.5%</td>
<td align="right">143,972,229</td>
<td align="right">2.8%</td>
<td align="right">-16.6%</td>
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
<td align="right">3,492,564</td>
<td align="right">100.0%</td>
<td align="right">2,942,100</td>
<td align="right">100.0%</td>
<td align="right">-15.8%</td>
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
<td align="left">init not python</td>
<td align="right">267</td>
<td align="right">59.9%</td>
<td align="right">287</td>
<td align="right">64.3%</td>
<td align="right">7.5%</td>
</tr>
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
<td align="right">684,522</td>
<td align="right">97.1%</td>
<td align="right">684,522</td>
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
<td align="right">583,803</td>
<td align="right">82.8%</td>
<td align="right">583,803</td>
<td align="right">82.8%</td>
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
<td align="right">20,493</td>
<td align="right">99.4%</td>
<td align="right">20,554</td>
<td align="right">99.4%</td>
<td align="right">0.3%</td>
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
<td align="right">509,716,867</td>
<td align="right">10.2%</td>
<td align="right">86,885,074</td>
<td align="right">6.7%</td>
<td align="right">-83.0%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">4,494,026,996</td>
<td align="right">89.8%</td>
<td align="right">1,212,240,601</td>
<td align="right">93.2%</td>
<td align="right">-73.0%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">1,258,639</td>
<td align="right">0.0%</td>
<td align="right">1,159,824</td>
<td align="right">0.1%</td>
<td align="right">-7.9%</td>
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
<td align="right">203,891</td>
<td align="right">82.9%</td>
<td align="right">99,061</td>
<td align="right">71.2%</td>
<td align="right">-51.4%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">42,007</td>
<td align="right">17.1%</td>
<td align="right">40,150</td>
<td align="right">28.8%</td>
<td align="right">-4.4%</td>
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
<td align="right">90,680</td>
<td align="right">44.5%</td>
<td align="right">4,553</td>
<td align="right">4.6%</td>
<td align="right">-95.0%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">6,831</td>
<td align="right">3.4%</td>
<td align="right">372</td>
<td align="right">0.4%</td>
<td align="right">-94.6%</td>
</tr>
<tr>
<td align="left">baseobject</td>
<td align="right">10,452</td>
<td align="right">5.1%</td>
<td align="right">4,606</td>
<td align="right">4.6%</td>
<td align="right">-55.9%</td>
</tr>
<tr>
<td align="left">float long</td>
<td align="right">13,740</td>
<td align="right">6.7%</td>
<td align="right">9,474</td>
<td align="right">9.6%</td>
<td align="right">-31.0%</td>
</tr>
<tr>
<td align="left">different types</td>
<td align="right">38,793</td>
<td align="right">19.0%</td>
<td align="right">36,889</td>
<td align="right">37.2%</td>
<td align="right">-4.9%</td>
</tr>
<tr>
<td align="left">big int</td>
<td align="right">23,367</td>
<td align="right">11.5%</td>
<td align="right">23,170</td>
<td align="right">23.4%</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">bool</td>
<td align="right">1,998</td>
<td align="right">1.0%</td>
<td align="right">2,012</td>
<td align="right">2.0%</td>
<td align="right">0.7%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">7,762</td>
<td align="right">3.8%</td>
<td align="right">7,717</td>
<td align="right">7.8%</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">string</td>
<td align="right">7,648</td>
<td align="right">3.8%</td>
<td align="right">7,648</td>
<td align="right">7.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">bytes</td>
<td align="right">1,321</td>
<td align="right">0.6%</td>
<td align="right">1,321</td>
<td align="right">1.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list</td>
<td align="right">965</td>
<td align="right">0.5%</td>
<td align="right">965</td>
<td align="right">1.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">long float</td>
<td align="right">334</td>
<td align="right">0.2%</td>
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
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">2,186,350,613</td>
<td align="right">93.4%</td>
<td align="right">433,424,882</td>
<td align="right">83.0%</td>
<td align="right">-80.2%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">1,395,959</td>
<td align="right">0.1%</td>
<td align="right">734,519</td>
<td align="right">0.1%</td>
<td align="right">-47.4%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">154,240,812</td>
<td align="right">6.6%</td>
<td align="right">88,053,515</td>
<td align="right">16.9%</td>
<td align="right">-42.9%</td>
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
<td align="right">28,662</td>
<td align="right">32.6%</td>
<td align="right">16,182</td>
<td align="right">27.3%</td>
<td align="right">-43.5%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">59,148</td>
<td align="right">67.4%</td>
<td align="right">43,007</td>
<td align="right">72.7%</td>
<td align="right">-27.3%</td>
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
<td align="right">21,281</td>
<td align="right">36.0%</td>
<td align="right">9,767</td>
<td align="right">22.7%</td>
<td align="right">-54.1%</td>
</tr>
<tr>
<td align="left">list</td>
<td align="right">14,536</td>
<td align="right">24.6%</td>
<td align="right">12,050</td>
<td align="right">28.0%</td>
<td align="right">-17.1%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">11,708</td>
<td align="right">19.8%</td>
<td align="right">10,043</td>
<td align="right">23.4%</td>
<td align="right">-14.2%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">11,623</td>
<td align="right">19.7%</td>
<td align="right">11,147</td>
<td align="right">25.9%</td>
<td align="right">-4.1%</td>
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
<td align="right">1,458,780,899</td>
<td align="right">28.8%</td>
<td align="right">189,824,042</td>
<td align="right">13.0%</td>
<td align="right">-87.0%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">3,439,402,556</td>
<td align="right">67.9%</td>
<td align="right">1,204,051,771</td>
<td align="right">82.7%</td>
<td align="right">-65.0%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">164,008,032</td>
<td align="right">3.2%</td>
<td align="right">61,983,773</td>
<td align="right">4.3%</td>
<td align="right">-62.2%</td>
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
<td align="right">427,790</td>
<td align="right">12.1%</td>
<td align="right">110,523</td>
<td align="right">8.6%</td>
<td align="right">-74.2%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">3,099,498</td>
<td align="right">87.9%</td>
<td align="right">1,174,511</td>
<td align="right">91.4%</td>
<td align="right">-62.1%</td>
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
<td align="right">172,122</td>
<td align="right">40.2%</td>
<td align="right">4,501</td>
<td align="right">4.1%</td>
<td align="right">-97.4%</td>
</tr>
<tr>
<td align="left">dict keys</td>
<td align="right">83,768</td>
<td align="right">19.6%</td>
<td align="right">10,997</td>
<td align="right">9.9%</td>
<td align="right">-86.9%</td>
</tr>
<tr>
<td align="left">enumerate</td>
<td align="right">34,901</td>
<td align="right">8.2%</td>
<td align="right">6,626</td>
<td align="right">6.0%</td>
<td align="right">-81.0%</td>
</tr>
<tr>
<td align="left">bytes</td>
<td align="right">1,223</td>
<td align="right">0.3%</td>
<td align="right">327</td>
<td align="right">0.3%</td>
<td align="right">-73.3%</td>
</tr>
<tr>
<td align="left">ascii string</td>
<td align="right">3,153</td>
<td align="right">0.7%</td>
<td align="right">1,042</td>
<td align="right">0.9%</td>
<td align="right">-67.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">10,835</td>
<td align="right">2.5%</td>
<td align="right">4,103</td>
<td align="right">3.7%</td>
<td align="right">-62.1%</td>
</tr>
<tr>
<td align="left">seq iter</td>
<td align="right">18,250</td>
<td align="right">4.3%</td>
<td align="right">7,038</td>
<td align="right">6.4%</td>
<td align="right">-61.4%</td>
</tr>
<tr>
<td align="left">reversed list</td>
<td align="right">2,978</td>
<td align="right">0.7%</td>
<td align="right">1,673</td>
<td align="right">1.5%</td>
<td align="right">-43.8%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">19,465</td>
<td align="right">4.6%</td>
<td align="right">12,968</td>
<td align="right">11.7%</td>
<td align="right">-33.4%</td>
</tr>
<tr>
<td align="left">dict items</td>
<td align="right">69,152</td>
<td align="right">16.2%</td>
<td align="right">50,927</td>
<td align="right">46.1%</td>
<td align="right">-26.4%</td>
</tr>
<tr>
<td align="left">callable</td>
<td align="right">174</td>
<td align="right">0.0%</td>
<td align="right">134</td>
<td align="right">0.1%</td>
<td align="right">-23.0%</td>
</tr>
<tr>
<td align="left">itertools</td>
<td align="right">4,583</td>
<td align="right">1.1%</td>
<td align="right">3,616</td>
<td align="right">3.3%</td>
<td align="right">-21.1%</td>
</tr>
<tr>
<td align="left">dict values</td>
<td align="right">6,932</td>
<td align="right">1.6%</td>
<td align="right">6,317</td>
<td align="right">5.7%</td>
<td align="right">-8.9%</td>
</tr>
<tr>
<td align="left">map</td>
<td align="right">254</td>
<td align="right">0.1%</td>
<td align="right">254</td>
<td align="right">0.2%</td>
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
<td align="right">11,953,256,764</td>
<td align="right">87.6%</td>
<td align="right">6,799,293,241</td>
<td align="right">85.5%</td>
<td align="right">-43.1%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">820,173,751</td>
<td align="right">6.0%</td>
<td align="right">544,690,407</td>
<td align="right">6.8%</td>
<td align="right">-33.6%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">862,608,556</td>
<td align="right">6.3%</td>
<td align="right">606,652,876</td>
<td align="right">7.6%</td>
<td align="right">-29.7%</td>
</tr>
<tr>
<td align="left">
deopt
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">1,263,439</td>
<td align="right">0.0%</td>
<td align="right">1,006,217</td>
<td align="right">0.0%</td>
<td align="right">-20.4%</td>
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
<td align="right">16,365,562</td>
<td align="right">96.7%</td>
<td align="right">11,537,009</td>
<td align="right">95.9%</td>
<td align="right">-29.5%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">559,588</td>
<td align="right">3.3%</td>
<td align="right">488,545</td>
<td align="right">4.1%</td>
<td align="right">-12.7%</td>
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
<td align="right">76,765</td>
<td align="right">13.7%</td>
<td align="right">39,311</td>
<td align="right">8.0%</td>
<td align="right">-48.8%</td>
</tr>
<tr>
<td align="left">builtin class method</td>
<td align="right">1,201</td>
<td align="right">0.2%</td>
<td align="right">841</td>
<td align="right">0.2%</td>
<td align="right">-30.0%</td>
</tr>
<tr>
<td align="left">overriding descriptor</td>
<td align="right">57,646</td>
<td align="right">10.3%</td>
<td align="right">43,156</td>
<td align="right">8.8%</td>
<td align="right">-25.1%</td>
</tr>
<tr>
<td align="left">non overriding descriptor</td>
<td align="right">6,098</td>
<td align="right">1.1%</td>
<td align="right">5,039</td>
<td align="right">1.0%</td>
<td align="right">-17.4%</td>
</tr>
<tr>
<td align="left">expected error</td>
<td align="right">2,737</td>
<td align="right">0.5%</td>
<td align="right">2,376</td>
<td align="right">0.5%</td>
<td align="right">-13.2%</td>
</tr>
<tr>
<td align="left">overridden</td>
<td align="right">9,209</td>
<td align="right">1.6%</td>
<td align="right">8,038</td>
<td align="right">1.6%</td>
<td align="right">-12.7%</td>
</tr>
<tr>
<td align="left">mutable class</td>
<td align="right">66,487</td>
<td align="right">11.9%</td>
<td align="right">61,130</td>
<td align="right">12.5%</td>
<td align="right">-8.1%</td>
</tr>
<tr>
<td align="left">class method obj</td>
<td align="right">16,663</td>
<td align="right">3.0%</td>
<td align="right">15,778</td>
<td align="right">3.2%</td>
<td align="right">-5.3%</td>
</tr>
<tr>
<td align="left">metaclass attribute</td>
<td align="right">25,275</td>
<td align="right">4.5%</td>
<td align="right">24,185</td>
<td align="right">5.0%</td>
<td align="right">-4.3%</td>
</tr>
<tr>
<td align="left">class attr simple</td>
<td align="right">1,493</td>
<td align="right">0.3%</td>
<td align="right">1,492</td>
<td align="right">0.3%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">not in dict</td>
<td align="right">6,405</td>
<td align="right">1.1%</td>
<td align="right">6,405</td>
<td align="right">1.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">module attr not found</td>
<td align="right">5,018</td>
<td align="right">0.9%</td>
<td align="right">5,018</td>
<td align="right">1.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not managed dict</td>
<td align="right">1,775</td>
<td align="right">0.3%</td>
<td align="right">1,775</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">non object slot</td>
<td align="right">1,093</td>
<td align="right">0.2%</td>
<td align="right">1,093</td>
<td align="right">0.2%</td>
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
<td align="right">9,038,884,841</td>
<td align="right">99.8%</td>
<td align="right">4,387,498,041</td>
<td align="right">99.7%</td>
<td align="right">-51.5%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">52,675</td>
<td align="right">0.0%</td>
<td align="right">52,648</td>
<td align="right">0.0%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">14,623,578</td>
<td align="right">0.2%</td>
<td align="right">14,623,584</td>
<td align="right">0.3%</td>
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
<td align="right">1,502</td>
<td align="right">0.0%</td>
<td align="right">1,502</td>
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
<td align="right">140,748</td>
<td align="right">100.0%</td>
<td align="right">141,282</td>
<td align="right">100.0%</td>
<td align="right">0.4%</td>
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
<td align="right">64,629,361</td>
<td align="right">100.0%</td>
<td align="right">60,556,018</td>
<td align="right">100.0%</td>
<td align="right">-6.3%</td>
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
<td align="right">591,606,834</td>
<td align="right">82.1%</td>
<td align="right">591,590,225</td>
<td align="right">82.1%</td>
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
<td align="right">128,815,363</td>
<td align="right">17.9%</td>
<td align="right">128,815,363</td>
<td align="right">17.9%</td>
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
<td align="right">659</td>
<td align="right">1.9%</td>
<td align="right">659</td>
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
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">1,799,647,166</td>
<td align="right">90.5%</td>
<td align="right">1,582,191,353</td>
<td align="right">90.0%</td>
<td align="right">-12.1%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">112,461,189</td>
<td align="right">5.7%</td>
<td align="right">103,824,800</td>
<td align="right">5.9%</td>
<td align="right">-7.7%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">76,563,688</td>
<td align="right">3.8%</td>
<td align="right">72,090,214</td>
<td align="right">4.1%</td>
<td align="right">-5.8%</td>
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
<td align="right">2,163,266</td>
<td align="right">97.6%</td>
<td align="right">2,000,859</td>
<td align="right">97.5%</td>
<td align="right">-7.5%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">52,631</td>
<td align="right">2.4%</td>
<td align="right">51,569</td>
<td align="right">2.5%</td>
<td align="right">-2.0%</td>
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
<td align="right">5,942</td>
<td align="right">11.3%</td>
<td align="right">4,883</td>
<td align="right">9.5%</td>
<td align="right">-17.8%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">271,280</td>
<td align="right">515.4%</td>
<td align="right">263,034</td>
<td align="right">510.1%</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">method</td>
<td align="right">743</td>
<td align="right">1.4%</td>
<td align="right">741</td>
<td align="right">1.4%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">not managed dict</td>
<td align="right">3,354</td>
<td align="right">6.4%</td>
<td align="right">3,352</td>
<td align="right">6.5%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">class attr simple</td>
<td align="right">24,476</td>
<td align="right">46.5%</td>
<td align="right">24,476</td>
<td align="right">47.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not in dict</td>
<td align="right">7,666</td>
<td align="right">14.6%</td>
<td align="right">7,666</td>
<td align="right">14.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">split dict</td>
<td align="right">5,315</td>
<td align="right">10.1%</td>
<td align="right">5,315</td>
<td align="right">10.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">property</td>
<td align="right">1,619</td>
<td align="right">3.1%</td>
<td align="right">1,619</td>
<td align="right">3.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not in keys</td>
<td align="right">814</td>
<td align="right">1.5%</td>
<td align="right">814</td>
<td align="right">1.6%</td>
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
<td align="right">365</td>
<td align="right">0.7%</td>
<td align="right">365</td>
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
<td align="right">112,724,898</td>
<td align="right">100.0%</td>
<td align="right">1,232,476</td>
<td align="right">100.0%</td>
<td align="right">-98.9%</td>
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
<td align="right">700,787,451</td>
<td align="right">43.2%</td>
<td align="right">103,840,218</td>
<td align="right">32.1%</td>
<td align="right">-85.2%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">920,161,539</td>
<td align="right">56.8%</td>
<td align="right">219,268,459</td>
<td align="right">67.9%</td>
<td align="right">-76.2%</td>
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
<td align="right">182,260</td>
<td align="right">98.8%</td>
<td align="right">36,548</td>
<td align="right">94.2%</td>
<td align="right">-79.9%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">2,241</td>
<td align="right">1.2%</td>
<td align="right">2,241</td>
<td align="right">5.8%</td>
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
<td align="right">86,613</td>
<td align="right">47.5%</td>
<td align="right">341</td>
<td align="right">0.9%</td>
<td align="right">-99.6%</td>
</tr>
<tr>
<td align="left">bytearray int</td>
<td align="right">5,309</td>
<td align="right">2.9%</td>
<td align="right">176</td>
<td align="right">0.5%</td>
<td align="right">-96.7%</td>
</tr>
<tr>
<td align="left">dict subclass no override</td>
<td align="right">19,343</td>
<td align="right">10.6%</td>
<td align="right">3,483</td>
<td align="right">9.5%</td>
<td align="right">-82.0%</td>
</tr>
<tr>
<td align="left">array int</td>
<td align="right">48,931</td>
<td align="right">26.8%</td>
<td align="right">10,483</td>
<td align="right">28.7%</td>
<td align="right">-78.6%</td>
</tr>
<tr>
<td align="left">py simple</td>
<td align="right">17,324</td>
<td align="right">9.5%</td>
<td align="right">17,325</td>
<td align="right">47.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list slice</td>
<td align="right">2,991</td>
<td align="right">1.6%</td>
<td align="right">2,991</td>
<td align="right">8.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">out of range</td>
<td align="right">1,681</td>
<td align="right">0.9%</td>
<td align="right">1,681</td>
<td align="right">4.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">array slice</td>
<td align="right">68</td>
<td align="right">0.0%</td>
<td align="right">68</td>
<td align="right">0.2%</td>
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
<td align="right">259,101,951</td>
<td align="right">5.1%</td>
<td align="right">133,761,797</td>
<td align="right">4.8%</td>
<td align="right">-48.4%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">109,916,664</td>
<td align="right">2.2%</td>
<td align="right">60,689,890</td>
<td align="right">2.2%</td>
<td align="right">-44.8%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">4,680,456,530</td>
<td align="right">92.7%</td>
<td align="right">2,605,679,674</td>
<td align="right">93.0%</td>
<td align="right">-44.3%</td>
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
<td align="right">2,123,442</td>
<td align="right">77.1%</td>
<td align="right">1,194,845</td>
<td align="right">71.6%</td>
<td align="right">-43.7%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">630,607</td>
<td align="right">22.9%</td>
<td align="right">473,391</td>
<td align="right">28.4%</td>
<td align="right">-24.9%</td>
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
<td align="right">18,877</td>
<td align="right">3.0%</td>
<td align="right">4,677</td>
<td align="right">1.0%</td>
<td align="right">-75.2%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">132,975</td>
<td align="right">21.1%</td>
<td align="right">33,965</td>
<td align="right">7.2%</td>
<td align="right">-74.5%</td>
</tr>
<tr>
<td align="left">mapping</td>
<td align="right">77,562</td>
<td align="right">12.3%</td>
<td align="right">40,688</td>
<td align="right">8.6%</td>
<td align="right">-47.5%</td>
</tr>
<tr>
<td align="left">dict</td>
<td align="right">20,417</td>
<td align="right">3.2%</td>
<td align="right">14,873</td>
<td align="right">3.1%</td>
<td align="right">-27.2%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">97,687</td>
<td align="right">15.5%</td>
<td align="right">96,083</td>
<td align="right">20.3%</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">sequence</td>
<td align="right">9,240</td>
<td align="right">1.5%</td>
<td align="right">9,095</td>
<td align="right">1.9%</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">number</td>
<td align="right">258,646</td>
<td align="right">41.0%</td>
<td align="right">258,801</td>
<td align="right">54.7%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">13,317</td>
<td align="right">2.1%</td>
<td align="right">13,323</td>
<td align="right">2.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">bytearray</td>
<td align="right">1,420</td>
<td align="right">0.2%</td>
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
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">1,239,904,244</td>
<td align="right">99.9%</td>
<td align="right">627,132,790</td>
<td align="right">99.8%</td>
<td align="right">-49.4%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">1,809,504</td>
<td align="right">0.1%</td>
<td align="right">1,420,812</td>
<td align="right">0.2%</td>
<td align="right">-21.5%</td>
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
<td align="right">993</td>
<td align="right">8.9%</td>
<td align="right">874</td>
<td align="right">7.9%</td>
<td align="right">-12.0%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">10,113</td>
<td align="right">91.1%</td>
<td align="right">10,173</td>
<td align="right">92.1%</td>
<td align="right">0.6%</td>
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
<td align="right">759</td>
<td align="right">76.4%</td>
<td align="right">640</td>
<td align="right">73.2%</td>
<td align="right">-15.7%</td>
</tr>
<tr>
<td align="left">iterator</td>
<td align="right">136</td>
<td align="right">13.7%</td>
<td align="right">136</td>
<td align="right">15.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">98</td>
<td align="right">9.9%</td>
<td align="right">98</td>
<td align="right">11.2%</td>
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
<td align="right">7,588,832,078</td>
<td align="right">3.6%</td>
<td align="right">2,643,257,486</td>
<td align="right">2.7%</td>
<td align="right">-65.2%</td>
</tr>
<tr>
<td align="left">
Specialized hits
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that complete.
</details>
</td>
<td align="right">86,229,166,147</td>
<td align="right">41.1%</td>
<td align="right">38,862,056,887</td>
<td align="right">40.2%</td>
<td align="right">-54.9%</td>
</tr>
<tr>
<td align="left">
Basic
<details>
<summary>ⓘ</summary>

Instructions that are not and cannot be specialized, e.g. `LOAD_FAST`.
</details>
</td>
<td align="right">114,567,242,679</td>
<td align="right">54.6%</td>
<td align="right">54,015,637,888</td>
<td align="right">55.9%</td>
<td align="right">-52.9%</td>
</tr>
<tr>
<td align="left">
Specialized misses
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that deopt.
</details>
</td>
<td align="right">1,487,082,706</td>
<td align="right">0.7%</td>
<td align="right">1,034,243,899</td>
<td align="right">1.1%</td>
<td align="right">-30.5%</td>
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
<td align="left">FOR_ITER</td>
<td align="right">1,458,780,899</td>
<td align="right">18.8%</td>
<td align="right">189,824,042</td>
<td align="right">6.8%</td>
<td align="right">-87.0%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">700,787,451</td>
<td align="right">9.0%</td>
<td align="right">103,840,218</td>
<td align="right">3.7%</td>
<td align="right">-85.2%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">509,716,867</td>
<td align="right">6.6%</td>
<td align="right">86,885,074</td>
<td align="right">3.1%</td>
<td align="right">-83.0%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">544,418,675</td>
<td align="right">7.0%</td>
<td align="right">182,589,487</td>
<td align="right">6.6%</td>
<td align="right">-66.5%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">2,801,885,921</td>
<td align="right">36.1%</td>
<td align="right">1,091,627,742</td>
<td align="right">39.2%</td>
<td align="right">-61.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">259,101,951</td>
<td align="right">3.3%</td>
<td align="right">133,761,797</td>
<td align="right">4.8%</td>
<td align="right">-48.4%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">154,240,812</td>
<td align="right">2.0%</td>
<td align="right">88,053,515</td>
<td align="right">3.2%</td>
<td align="right">-42.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">820,173,751</td>
<td align="right">10.6%</td>
<td align="right">544,690,407</td>
<td align="right">19.6%</td>
<td align="right">-33.6%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">172,613,648</td>
<td align="right">2.2%</td>
<td align="right">143,972,229</td>
<td align="right">5.2%</td>
<td align="right">-16.6%</td>
</tr>
<tr>
<td align="left">SEND</td>
<td align="right">128,815,363</td>
<td align="right">1.7%</td>
<td align="right">128,815,363</td>
<td align="right">4.6%</td>
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
<td align="left">FOR_ITER_LIST</td>
<td align="right">82,016,569</td>
<td align="right">5.5%</td>
<td align="right">30,957,343</td>
<td align="right">3.0%</td>
<td align="right">-62.3%</td>
</tr>
<tr>
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">81,914,068</td>
<td align="right">5.5%</td>
<td align="right">30,949,425</td>
<td align="right">3.0%</td>
<td align="right">-62.2%</td>
</tr>
<tr>
<td align="left">TO_BOOL_ALWAYS_TRUE</td>
<td align="right">48,567,123</td>
<td align="right">3.3%</td>
<td align="right">25,707,199</td>
<td align="right">2.5%</td>
<td align="right">-47.1%</td>
</tr>
<tr>
<td align="left">TO_BOOL_NONE</td>
<td align="right">54,342,041</td>
<td align="right">3.7%</td>
<td align="right">28,903,543</td>
<td align="right">2.8%</td>
<td align="right">-46.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">365,467,127</td>
<td align="right">24.6%</td>
<td align="right">214,253,804</td>
<td align="right">20.7%</td>
<td align="right">-41.4%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">265,449,614</td>
<td align="right">17.8%</td>
<td align="right">174,821,410</td>
<td align="right">16.9%</td>
<td align="right">-34.1%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">80,514,321</td>
<td align="right">5.4%</td>
<td align="right">53,496,794</td>
<td align="right">5.2%</td>
<td align="right">-33.6%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">87,391,517</td>
<td align="right">5.9%</td>
<td align="right">81,155,827</td>
<td align="right">7.8%</td>
<td align="right">-7.1%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">92,958,219</td>
<td align="right">6.3%</td>
<td align="right">87,379,559</td>
<td align="right">8.4%</td>
<td align="right">-6.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">85,606,781</td>
<td align="right">5.8%</td>
<td align="right">81,239,496</td>
<td align="right">7.9%</td>
<td align="right">-5.1%</td>
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
<td align="left">Calls via PyEval_EvalFrame (legacy)</td>
<td align="right">4,273,442</td>
<td align="right">0.1%</td>
<td align="right">3,558,377</td>
<td align="right">0.1%</td>
<td align="right">-16.7%</td>
</tr>
<tr>
<td align="left">Calls to Python functions inlined</td>
<td align="right">5,063,029,828</td>
<td align="right">75.8%</td>
<td align="right">5,025,318,633</td>
<td align="right">75.7%</td>
<td align="right">-0.7%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (generator)</td>
<td align="right">676,853,711</td>
<td align="right">10.1%</td>
<td align="right">672,169,830</td>
<td align="right">10.1%</td>
<td align="right">-0.7%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (api)</td>
<td align="right">274,672,311</td>
<td align="right">4.1%</td>
<td align="right">273,253,964</td>
<td align="right">4.1%</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">Frames pushed</td>
<td align="right">5,411,306,371</td>
<td align="right">81.0%</td>
<td align="right">5,392,231,184</td>
<td align="right">81.2%</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">Calls to PyEval_EvalDefault</td>
<td align="right">1,620,666,336</td>
<td align="right">24.2%</td>
<td align="right">1,616,754,817</td>
<td align="right">24.3%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (total)</td>
<td align="right">1,620,666,336</td>
<td align="right">24.2%</td>
<td align="right">1,616,754,817</td>
<td align="right">24.3%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (slot)</td>
<td align="right">260,786,882</td>
<td align="right">3.9%</td>
<td align="right">260,330,170</td>
<td align="right">3.9%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function vectorcall)</td>
<td align="right">939,535,294</td>
<td align="right">14.1%</td>
<td align="right">941,022,721</td>
<td align="right">14.2%</td>
<td align="right">0.2%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (vector)</td>
<td align="right">943,812,625</td>
<td align="right">14.1%</td>
<td align="right">944,584,987</td>
<td align="right">14.2%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Frame objects created</td>
<td align="right">70,334,945</td>
<td align="right">1.1%</td>
<td align="right">70,306,404</td>
<td align="right">1.1%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function ex)</td>
<td align="right">24,892,587</td>
<td align="right">0.4%</td>
<td align="right">24,886,586</td>
<td align="right">0.4%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (build class)</td>
<td align="right">3,889</td>
<td align="right">0.0%</td>
<td align="right">3,889</td>
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
<td align="left">Interpreter immortal decrefs</td>
<td align="right">1,886,810,793</td>
<td align="right">1.3%</td>
<td align="right">2,694,501,185</td>
<td align="right">1.8%</td>
<td align="right">42.8%</td>
</tr>
<tr>
<td align="left">Method cache dunder misses</td>
<td align="right">10,436,734</td>
<td align="right"></td>
<td align="right">9,035,701</td>
<td align="right"></td>
<td align="right">-13.4%</td>
</tr>
<tr>
<td align="left">Method cache hits</td>
<td align="right">2,230,870,859</td>
<td align="right"></td>
<td align="right">2,035,407,689</td>
<td align="right"></td>
<td align="right">-8.8%</td>
</tr>
<tr>
<td align="left">Interpreter mortal increfs</td>
<td align="right">78,469,049,050</td>
<td align="right">59.7%</td>
<td align="right">81,924,425,236</td>
<td align="right">61.0%</td>
<td align="right">4.4%</td>
</tr>
<tr>
<td align="left">Interpreter mortal decrefs</td>
<td align="right">88,133,343,573</td>
<td align="right">59.8%</td>
<td align="right">91,194,279,075</td>
<td align="right">60.3%</td>
<td align="right">3.5%</td>
</tr>
<tr>
<td align="left">Inline values</td>
<td align="right">173,116,631</td>
<td align="right"></td>
<td align="right">177,937,008</td>
<td align="right"></td>
<td align="right">2.8%</td>
</tr>
<tr>
<td align="left">Method cache collisions</td>
<td align="right">68,246,988</td>
<td align="right"></td>
<td align="right">66,435,168</td>
<td align="right"></td>
<td align="right">-2.7%</td>
</tr>
<tr>
<td align="left">Immortal increfs</td>
<td align="right">23,306,070,912</td>
<td align="right">17.7%</td>
<td align="right">23,031,994,711</td>
<td align="right">17.1%</td>
<td align="right">-1.2%</td>
</tr>
<tr>
<td align="left">Mortal increfs</td>
<td align="right">25,026,528,062</td>
<td align="right">19.0%</td>
<td align="right">24,793,346,619</td>
<td align="right">18.5%</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">Allocations from freelist</td>
<td align="right">12,732,000,023</td>
<td align="right">67.9%</td>
<td align="right">12,630,061,805</td>
<td align="right">67.7%</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">Frees to freelist</td>
<td align="right">12,732,089,678</td>
<td align="right"></td>
<td align="right">12,630,162,106</td>
<td align="right"></td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">Method cache misses</td>
<td align="right">58,615,539</td>
<td align="right"></td>
<td align="right">58,203,504</td>
<td align="right"></td>
<td align="right">-0.7%</td>
</tr>
<tr>
<td align="left">Immortal decrefs</td>
<td align="right">24,672,198,343</td>
<td align="right">16.7%</td>
<td align="right">24,520,555,813</td>
<td align="right">16.2%</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">Interpreter immortal increfs</td>
<td align="right">4,636,619,185</td>
<td align="right">3.5%</td>
<td align="right">4,622,628,833</td>
<td align="right">3.4%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">Method cache dunder hits</td>
<td align="right">2,867,406,365</td>
<td align="right"></td>
<td align="right">2,861,215,110</td>
<td align="right"></td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Frees</td>
<td align="right">6,613,883,940</td>
<td align="right"></td>
<td align="right">6,604,521,506</td>
<td align="right"></td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">Mortal decrefs</td>
<td align="right">32,694,206,216</td>
<td align="right">22.2%</td>
<td align="right">32,734,853,984</td>
<td align="right">21.7%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Allocations to 512 bytes</td>
<td align="right">5,944,286,675</td>
<td align="right">31.7%</td>
<td align="right">5,937,439,885</td>
<td align="right">31.8%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">Allocations</td>
<td align="right">6,022,080,858</td>
<td align="right">32.1%</td>
<td align="right">6,015,250,224</td>
<td align="right">32.3%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">Allocations over 4 kbytes</td>
<td align="right">6,416,521</td>
<td align="right">0.0%</td>
<td align="right">6,419,959</td>
<td align="right">0.0%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">Allocations to 4 kbytes</td>
<td align="right">71,377,662</td>
<td align="right">0.4%</td>
<td align="right">71,390,380</td>
<td align="right">0.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (on request)</td>
<td align="right">4,443,445</td>
<td align="right">2.6%</td>
<td align="right">4,443,445</td>
<td align="right">2.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (new key)</td>
<td align="right">434,351</td>
<td align="right">0.3%</td>
<td align="right">434,351</td>
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
<td align="right">364,185</td>
<td align="right">100,873,624</td>
<td align="right">9,605,564,153</td>
<td align="right">766,154,010</td>
<td align="right">765,683,039</td>
<td align="right">363,149</td>
<td align="right">99,675,830</td>
<td align="right">9,562,204,123</td>
<td align="right">759,654,143</td>
<td align="right">763,409,808</td>
</tr>
<tr>
<td align="right">2</td>
<td align="right">7,998</td>
<td align="right">4,366,432</td>
<td align="right">5,627,125,522</td>
<td align="right">0</td>
<td align="right">0</td>
<td align="right">7,998</td>
<td align="right">4,366,432</td>
<td align="right">5,627,371,090</td>
<td align="right">0</td>
<td align="right">0</td>
</tr>
</tbody>
</table>


</details>

## Optimization (Tier 2) stats

<details>
<summary> statistics about the Tier 2 optimizer </summary>


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
<tr>
<td align="left">
watched dict modification
<details>
<summary>ⓘ</summary>

A watched dict has been modified
</details>
</td>
<td align="right">0</td>
<td align="right">100</td>
<td align="right">100 / 0 !!</td>
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
<td align="right">100</td>
<td align="right">100 / 0 !!</td>
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
<td align="right">2,479</td>
<td align="right">2,479</td>
<td align="right">0.0%</td>
</tr>
</tbody>
</table>


</details>

---
Stats gathered on: 2025-03-23
