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
<td align="left">JUMP_BACKWARD</td>
<td align="right">34,074,018</td>
<td align="right">99,108,479</td>
<td align="right">190.9%</td>
</tr>
<tr>
<td align="left">COPY</td>
<td align="right">15,515,813</td>
<td align="right">4,469,419</td>
<td align="right">-71.2%</td>
</tr>
<tr>
<td align="left">CALL_TYPE_1</td>
<td align="right">7,308,757</td>
<td align="right">2,405,125</td>
<td align="right">-67.1%</td>
</tr>
<tr>
<td align="left">TO_BOOL_NONE</td>
<td align="right">19,080,799</td>
<td align="right">9,000,701</td>
<td align="right">-52.8%</td>
</tr>
<tr>
<td align="left">ENTER_EXECUTOR</td>
<td align="right">85,286,485</td>
<td align="right">128,609,375</td>
<td align="right">50.8%</td>
</tr>
<tr>
<td align="left">TO_BOOL</td>
<td align="right">14,121,783</td>
<td align="right">8,036,270</td>
<td align="right">-43.1%</td>
</tr>
<tr>
<td align="left">NOP</td>
<td align="right">45,930,073</td>
<td align="right">27,592,295</td>
<td align="right">-39.9%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_LIST_INT</td>
<td align="right">9,753,623</td>
<td align="right">5,941,294</td>
<td align="right">-39.1%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_DICT</td>
<td align="right">15,750,778</td>
<td align="right">9,605,687</td>
<td align="right">-39.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_PROPERTY</td>
<td align="right">16,235,420</td>
<td align="right">10,849,836</td>
<td align="right">-33.2%</td>
</tr>
<tr>
<td align="left">BUILD_TUPLE</td>
<td align="right">16,224,236</td>
<td align="right">11,074,540</td>
<td align="right">-31.7%</td>
</tr>
<tr>
<td align="left">RESUME_CHECK</td>
<td align="right">153,323,033</td>
<td align="right">105,839,009</td>
<td align="right">-31.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_MODULE</td>
<td align="right">73,175,744</td>
<td align="right">52,432,361</td>
<td align="right">-28.3%</td>
</tr>
<tr>
<td align="left">CONVERT_VALUE</td>
<td align="right">5,682,863</td>
<td align="right">4,105,137</td>
<td align="right">-27.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">106,645,689</td>
<td align="right">77,052,022</td>
<td align="right">-27.7%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_TRUE</td>
<td align="right">47,119,526</td>
<td align="right">34,302,046</td>
<td align="right">-27.2%</td>
</tr>
<tr>
<td align="left">BUILD_STRING</td>
<td align="right">2,941,655</td>
<td align="right">2,150,881</td>
<td align="right">-26.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">17,510,493</td>
<td align="right">12,827,411</td>
<td align="right">-26.7%</td>
</tr>
<tr>
<td align="left">FORMAT_SIMPLE</td>
<td align="right">5,948,833</td>
<td align="right">4,367,285</td>
<td align="right">-26.6%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL_BUILTIN</td>
<td align="right">131,571,485</td>
<td align="right">99,114,232</td>
<td align="right">-24.7%</td>
</tr>
<tr>
<td align="left">CALL_ISINSTANCE</td>
<td align="right">83,871,471</td>
<td align="right">64,393,237</td>
<td align="right">-23.2%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">9,400,236</td>
<td align="right">7,649,832</td>
<td align="right">-18.6%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS_WITH_METACLASS_CHECK</td>
<td align="right">2,687,008</td>
<td align="right">2,190,461</td>
<td align="right">-18.5%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_UNICODE</td>
<td align="right">4,576,477</td>
<td align="right">3,763,246</td>
<td align="right">-17.8%</td>
</tr>
<tr>
<td align="left">CALL_STR_1</td>
<td align="right">1,133,223</td>
<td align="right">936,107</td>
<td align="right">-17.4%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">36,213,525</td>
<td align="right">30,094,342</td>
<td align="right">-16.9%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">9,247,675</td>
<td align="right">7,735,536</td>
<td align="right">-16.4%</td>
</tr>
<tr>
<td align="left">TO_BOOL_BOOL</td>
<td align="right">131,734,005</td>
<td align="right">110,700,503</td>
<td align="right">-16.0%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_FALSE</td>
<td align="right">155,557,263</td>
<td align="right">130,844,045</td>
<td align="right">-15.9%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST</td>
<td align="right">10,876,571</td>
<td align="right">9,176,146</td>
<td align="right">-15.6%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_ATTR</td>
<td align="right">158,405</td>
<td align="right">133,926</td>
<td align="right">-15.5%</td>
</tr>
<tr>
<td align="left">LOAD_FAST</td>
<td align="right">547,357,769</td>
<td align="right">465,668,182</td>
<td align="right">-14.9%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">1,198,334</td>
<td align="right">1,022,519</td>
<td align="right">-14.7%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_WITH_HINT</td>
<td align="right">1,332,380</td>
<td align="right">1,138,299</td>
<td align="right">-14.6%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">13,039,493</td>
<td align="right">11,149,633</td>
<td align="right">-14.5%</td>
</tr>
<tr>
<td align="left">LOAD_CONST_IMMORTAL</td>
<td align="right">93,707,339</td>
<td align="right">80,860,271</td>
<td align="right">-13.7%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_LOAD_FAST</td>
<td align="right">110,876,580</td>
<td align="right">96,399,475</td>
<td align="right">-13.1%</td>
</tr>
<tr>
<td align="left">MAP_ADD</td>
<td align="right">492,129</td>
<td align="right">555,887</td>
<td align="right">13.0%</td>
</tr>
<tr>
<td align="left">CALL_PY_EXACT_ARGS</td>
<td align="right">48,151,605</td>
<td align="right">42,574,014</td>
<td align="right">-11.6%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_SET</td>
<td align="right">591,866</td>
<td align="right">655,598</td>
<td align="right">10.8%</td>
</tr>
<tr>
<td align="left">CALL_KW_PY</td>
<td align="right">2,337,201</td>
<td align="right">2,547,776</td>
<td align="right">9.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_WITH_HINT</td>
<td align="right">1,664,429</td>
<td align="right">1,523,423</td>
<td align="right">-8.5%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">4,145,046</td>
<td align="right">3,865,789</td>
<td align="right">-6.7%</td>
</tr>
<tr>
<td align="left">IS_OP</td>
<td align="right">4,952,397</td>
<td align="right">4,621,367</td>
<td align="right">-6.7%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP_DICT</td>
<td align="right">5,973,483</td>
<td align="right">6,342,733</td>
<td align="right">6.2%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NOT_NONE</td>
<td align="right">16,907,315</td>
<td align="right">15,868,716</td>
<td align="right">-6.1%</td>
</tr>
<tr>
<td align="left">LOAD_SPECIAL</td>
<td align="right">345,342</td>
<td align="right">324,636</td>
<td align="right">-6.0%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">2,425,670</td>
<td align="right">2,281,270</td>
<td align="right">-6.0%</td>
</tr>
<tr>
<td align="left">TO_BOOL_ALWAYS_TRUE</td>
<td align="right">1,292,489</td>
<td align="right">1,215,821</td>
<td align="right">-5.9%</td>
</tr>
<tr>
<td align="left">LOAD_CONST</td>
<td align="right">27,354,459</td>
<td align="right">25,851,889</td>
<td align="right">-5.5%</td>
</tr>
<tr>
<td align="left">POP_JUMP_IF_NONE</td>
<td align="right">10,901,287</td>
<td align="right">10,311,598</td>
<td align="right">-5.4%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">35,334,032</td>
<td align="right">33,424,712</td>
<td align="right">-5.4%</td>
</tr>
<tr>
<td align="left">CALL_INTRINSIC_1</td>
<td align="right">1,350,627</td>
<td align="right">1,277,982</td>
<td align="right">-5.4%</td>
</tr>
<tr>
<td align="left">POP_TOP</td>
<td align="right">121,717,341</td>
<td align="right">115,227,224</td>
<td align="right">-5.3%</td>
</tr>
<tr>
<td align="left">LIST_EXTEND</td>
<td align="right">1,280,588</td>
<td align="right">1,215,543</td>
<td align="right">-5.1%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_CLASS</td>
<td align="right">5,272,084</td>
<td align="right">5,009,948</td>
<td align="right">-5.0%</td>
</tr>
<tr>
<td align="left">COPY_FREE_VARS</td>
<td align="right">743,593</td>
<td align="right">707,220</td>
<td align="right">-4.9%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">38,080,823</td>
<td align="right">36,282,877</td>
<td align="right">-4.7%</td>
</tr>
<tr>
<td align="left">BINARY_OP_ADD_INT</td>
<td align="right">3,964,507</td>
<td align="right">3,779,351</td>
<td align="right">-4.7%</td>
</tr>
<tr>
<td align="left">DICT_MERGE</td>
<td align="right">1,254,885</td>
<td align="right">1,201,632</td>
<td align="right">-4.2%</td>
</tr>
<tr>
<td align="left">BUILD_MAP</td>
<td align="right">4,521,687</td>
<td align="right">4,330,753</td>
<td align="right">-4.2%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE</td>
<td align="right">296,769</td>
<td align="right">284,248</td>
<td align="right">-4.2%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_INT</td>
<td align="right">4,656,726</td>
<td align="right">4,462,350</td>
<td align="right">-4.2%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_MODULE</td>
<td align="right">27,535,643</td>
<td align="right">26,433,655</td>
<td align="right">-4.0%</td>
</tr>
<tr>
<td align="left">CALL_PY_GENERAL</td>
<td align="right">13,810,114</td>
<td align="right">13,273,600</td>
<td align="right">-3.9%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">7,747,522</td>
<td align="right">7,993,867</td>
<td align="right">3.2%</td>
</tr>
<tr>
<td align="left">RERAISE</td>
<td align="right">249,398</td>
<td align="right">241,798</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">STORE_FAST</td>
<td align="right">117,925,061</td>
<td align="right">114,398,434</td>
<td align="right">-3.0%</td>
</tr>
<tr>
<td align="left">LOAD_DEREF</td>
<td align="right">1,515,800</td>
<td align="right">1,471,497</td>
<td align="right">-2.9%</td>
</tr>
<tr>
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">12,580,478</td>
<td align="right">12,946,720</td>
<td align="right">2.9%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TUPLE</td>
<td align="right">2,844,584</td>
<td align="right">2,920,335</td>
<td align="right">2.7%</td>
</tr>
<tr>
<td align="left">LOAD_SMALL_INT</td>
<td align="right">12,514,480</td>
<td align="right">12,201,692</td>
<td align="right">-2.5%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_LIST</td>
<td align="right">84,414</td>
<td align="right">82,503</td>
<td align="right">-2.3%</td>
</tr>
<tr>
<td align="left">UNARY_NOT</td>
<td align="right">77,803</td>
<td align="right">79,543</td>
<td align="right">2.2%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">2,545,950</td>
<td align="right">2,600,559</td>
<td align="right">2.1%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">2,667,658</td>
<td align="right">2,611,443</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">GET_ITER</td>
<td align="right">56,128,899</td>
<td align="right">54,946,563</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">9,373,199</td>
<td align="right">9,561,946</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">FOR_ITER_LIST</td>
<td align="right">17,458,664</td>
<td align="right">17,808,251</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">FOR_ITER_GEN</td>
<td align="right">45,628,014</td>
<td align="right">46,540,697</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_STR_INT</td>
<td align="right">2,463,874</td>
<td align="right">2,511,370</td>
<td align="right">1.9%</td>
</tr>
<tr>
<td align="left">CALL_NON_PY_GENERAL</td>
<td align="right">16,836,844</td>
<td align="right">16,522,012</td>
<td align="right">-1.9%</td>
</tr>
<tr>
<td align="left">STORE_FAST_LOAD_FAST</td>
<td align="right">2,242,105</td>
<td align="right">2,282,697</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">FOR_ITER_RANGE</td>
<td align="right">1,484,047</td>
<td align="right">1,508,557</td>
<td align="right">1.7%</td>
</tr>
<tr>
<td align="left">INTERPRETER_EXIT</td>
<td align="right">38,225,436</td>
<td align="right">37,610,698</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">TO_BOOL_STR</td>
<td align="right">4,613,374</td>
<td align="right">4,539,522</td>
<td align="right">-1.6%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_DICT</td>
<td align="right">6,821,192</td>
<td align="right">6,926,035</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">3,778,357</td>
<td align="right">3,832,968</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">MAKE_CELL</td>
<td align="right">501,787</td>
<td align="right">494,857</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">CALL_LEN</td>
<td align="right">6,646,916</td>
<td align="right">6,556,467</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">CALL_ALLOC_AND_ENTER_INIT</td>
<td align="right">857,920</td>
<td align="right">847,288</td>
<td align="right">-1.2%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">21,347,964</td>
<td align="right">21,089,520</td>
<td align="right">-1.2%</td>
</tr>
<tr>
<td align="left">LIST_APPEND</td>
<td align="right">3,621,789</td>
<td align="right">3,663,180</td>
<td align="right">1.1%</td>
</tr>
<tr>
<td align="left">SWAP</td>
<td align="right">4,312,428</td>
<td align="right">4,361,140</td>
<td align="right">1.1%</td>
</tr>
<tr>
<td align="left">EXTENDED_ARG</td>
<td align="right">3,257,880</td>
<td align="right">3,221,272</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">PUSH_NULL</td>
<td align="right">22,500,564</td>
<td align="right">22,254,343</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">CALL_KW_NON_PY</td>
<td align="right">443,773</td>
<td align="right">439,872</td>
<td align="right">-0.9%</td>
</tr>
<tr>
<td align="left">CALL_LIST_APPEND</td>
<td align="right">6,457,824</td>
<td align="right">6,409,002</td>
<td align="right">-0.8%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_CLASS</td>
<td align="right">761,433</td>
<td align="right">756,438</td>
<td align="right">-0.7%</td>
</tr>
<tr>
<td align="left">STORE_FAST_STORE_FAST</td>
<td align="right">11,075,246</td>
<td align="right">11,130,027</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">EXIT_INIT_CHECK</td>
<td align="right">528,300</td>
<td align="right">525,755</td>
<td align="right">-0.5%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_TUPLE_INT</td>
<td align="right">1,792,274</td>
<td align="right">1,784,945</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">CALL_METHOD_DESCRIPTOR_FAST_WITH_KEYWORDS</td>
<td align="right">5,313,368</td>
<td align="right">5,334,493</td>
<td align="right">0.4%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_STR</td>
<td align="right">5,558,764</td>
<td align="right">5,539,515</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">JUMP_FORWARD</td>
<td align="right">2,466,030</td>
<td align="right">2,458,039</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_AND_CLEAR</td>
<td align="right">1,091,544</td>
<td align="right">1,088,381</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">TO_BOOL_INT</td>
<td align="right">5,170,926</td>
<td align="right">5,157,805</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">TO_BOOL_LIST</td>
<td align="right">1,341,090</td>
<td align="right">1,338,117</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">3,046,161</td>
<td align="right">3,040,238</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">8,553,555</td>
<td align="right">8,540,875</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_GETITEM</td>
<td align="right">1,930,539</td>
<td align="right">1,933,183</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">CALL_BUILTIN_O</td>
<td align="right">1,874,280</td>
<td align="right">1,872,488</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">BUILD_LIST</td>
<td align="right">9,831,009</td>
<td align="right">9,839,804</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">BINARY_OP_INPLACE_ADD_UNICODE</td>
<td align="right">235,956</td>
<td align="right">235,751</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR_LIST_INT</td>
<td align="right">712,407</td>
<td align="right">712,167</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_INT</td>
<td align="right">1,688,077</td>
<td align="right">1,688,300</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_GLOBAL</td>
<td align="right">21,947</td>
<td align="right">21,946</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">640,695</td>
<td align="right">640,677</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">38,364</td>
<td align="right">38,363</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">RETURN_VALUE</td>
<td align="right">155,080,585</td>
<td align="right">155,078,040</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">RETURN_GENERATOR</td>
<td align="right">39,528,154</td>
<td align="right">39,528,154</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">END_FOR</td>
<td align="right">38,864,488</td>
<td align="right">38,864,488</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">YIELD_VALUE</td>
<td align="right">22,677,584</td>
<td align="right">22,677,584</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_FUNCTION_EX</td>
<td align="right">2,973,717</td>
<td align="right">2,973,717</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">POP_EXCEPT</td>
<td align="right">1,522,465</td>
<td align="right">1,522,465</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">PUSH_EXC_INFO</td>
<td align="right">1,522,465</td>
<td align="right">1,522,465</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">1,489,194</td>
<td align="right">1,489,194</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CHECK_EXC_MATCH</td>
<td align="right">1,477,262</td>
<td align="right">1,477,262</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_SLOT</td>
<td align="right">833,644</td>
<td align="right">833,644</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR_METHOD</td>
<td align="right">266,454</td>
<td align="right">266,454</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">MAKE_FUNCTION</td>
<td align="right">255,554</td>
<td align="right">255,554</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_LAZY_DICT</td>
<td align="right">192,013</td>
<td align="right">192,013</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_SLICE</td>
<td align="right">176,227</td>
<td align="right">176,227</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_FUNCTION_ATTRIBUTE</td>
<td align="right">152,946</td>
<td align="right">152,946</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_SUBSCR</td>
<td align="right">149,587</td>
<td align="right">149,587</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">COMPARE_OP_FLOAT</td>
<td align="right">146,469</td>
<td align="right">146,469</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RAISE_VARARGS</td>
<td align="right">129,127</td>
<td align="right">129,127</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_SLICE</td>
<td align="right">117,056</td>
<td align="right">117,056</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_FAST_CHECK</td>
<td align="right">84,308</td>
<td align="right">84,308</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNARY_NEGATIVE</td>
<td align="right">76,888</td>
<td align="right">76,888</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_TUPLE_1</td>
<td align="right">35,860</td>
<td align="right">35,860</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">IMPORT_FROM</td>
<td align="right">32,107</td>
<td align="right">32,107</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">JUMP_BACKWARD_NO_INTERRUPT</td>
<td align="right">28,799</td>
<td align="right">28,799</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">IMPORT_NAME</td>
<td align="right">25,977</td>
<td align="right">25,977</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_NAME</td>
<td align="right">24,145</td>
<td align="right">24,145</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BUILD_SET</td>
<td align="right">23,613</td>
<td align="right">23,613</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_NAME</td>
<td align="right">23,212</td>
<td align="right">23,212</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_DEREF</td>
<td align="right">21,479</td>
<td align="right">21,479</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_ATTR</td>
<td align="right">16,384</td>
<td align="right">16,384</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SEND_GEN</td>
<td align="right">10,810</td>
<td align="right">10,810</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_MULTIPLY_INT</td>
<td align="right">10,427</td>
<td align="right">10,427</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_NO_DICT</td>
<td align="right">9,212</td>
<td align="right">9,212</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">END_SEND</td>
<td align="right">8,706</td>
<td align="right">8,706</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">GET_YIELD_FROM_ITER</td>
<td align="right">8,706</td>
<td align="right">8,706</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">UNARY_INVERT</td>
<td align="right">8,138</td>
<td align="right">8,138</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SEND</td>
<td align="right">4,541</td>
<td align="right">4,541</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">RESUME</td>
<td align="right">3,081</td>
<td align="right">3,081</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">FORMAT_WITH_SPEC</td>
<td align="right">2,560</td>
<td align="right">2,560</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_FAST</td>
<td align="right">2,240</td>
<td align="right">2,240</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW</td>
<td align="right">2,091</td>
<td align="right">2,091</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_BUILD_CLASS</td>
<td align="right">1,344</td>
<td align="right">1,344</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DICT_UPDATE</td>
<td align="right">346</td>
<td align="right">346</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_LOCALS</td>
<td align="right">302</td>
<td align="right">302</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">LOAD_SUPER_ATTR</td>
<td align="right">259</td>
<td align="right">259</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_BOUND_METHOD_GENERAL</td>
<td align="right">129</td>
<td align="right">129</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SETUP_ANNOTATIONS</td>
<td align="right">117</td>
<td align="right">117</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">CALL_KW_BOUND_METHOD</td>
<td align="right">115</td>
<td align="right">115</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">BINARY_OP_SUBTRACT_FLOAT</td>
<td align="right">63</td>
<td align="right">63</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">WITH_EXCEPT_START</td>
<td align="right">16</td>
<td align="right">16</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">STORE_GLOBAL</td>
<td align="right">10</td>
<td align="right">10</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">DELETE_NAME</td>
<td align="right">9</td>
<td align="right">9</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">SET_UPDATE</td>
<td align="right">7</td>
<td align="right">7</td>
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
<td align="right">7,737,931</td>
<td align="right">41.7%</td>
<td align="right">7,984,219</td>
<td align="right">42.4%</td>
<td align="right">3.2%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">10,829,404</td>
<td align="right">58.3%</td>
<td align="right">10,829,404</td>
<td align="right">57.5%</td>
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
<td align="right">9,002</td>
<td align="right">100.0%</td>
<td align="right">9,059</td>
<td align="right">100.0%</td>
<td align="right">0.6%</td>
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
<td align="left">floor divide</td>
<td align="right">123</td>
<td align="right">1.4%</td>
<td align="right">119</td>
<td align="right">1.3%</td>
<td align="right">-3.3%</td>
</tr>
<tr>
<td align="left">remainder</td>
<td align="right">3,170</td>
<td align="right">35.2%</td>
<td align="right">3,231</td>
<td align="right">35.7%</td>
<td align="right">1.9%</td>
</tr>
<tr>
<td align="left">add different types</td>
<td align="right">2,400</td>
<td align="right">26.7%</td>
<td align="right">2,400</td>
<td align="right">26.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">add other</td>
<td align="right">1,492</td>
<td align="right">16.6%</td>
<td align="right">1,492</td>
<td align="right">16.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">or</td>
<td align="right">910</td>
<td align="right">10.1%</td>
<td align="right">910</td>
<td align="right">10.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">true divide different types</td>
<td align="right">251</td>
<td align="right">2.8%</td>
<td align="right">251</td>
<td align="right">2.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">and int</td>
<td align="right">230</td>
<td align="right">2.6%</td>
<td align="right">230</td>
<td align="right">2.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">multiply different types</td>
<td align="right">229</td>
<td align="right">2.5%</td>
<td align="right">229</td>
<td align="right">2.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">and other</td>
<td align="right">66</td>
<td align="right">0.7%</td>
<td align="right">66</td>
<td align="right">0.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">subtract other</td>
<td align="right">66</td>
<td align="right">0.7%</td>
<td align="right">66</td>
<td align="right">0.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">true divide other</td>
<td align="right">46</td>
<td align="right">0.5%</td>
<td align="right">46</td>
<td align="right">0.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">xor</td>
<td align="right">16</td>
<td align="right">0.2%</td>
<td align="right">16</td>
<td align="right">0.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">lshift</td>
<td align="right">2</td>
<td align="right">0.0%</td>
<td align="right">2</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">and different types</td>
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
<td align="right">2,667,658</td>
<td align="right">100.0%</td>
<td align="right">2,611,443</td>
<td align="right">100.0%</td>
<td align="right">-2.1%</td>
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
<td align="right">3,771,445</td>
<td align="right">9.8%</td>
<td align="right">3,826,113</td>
<td align="right">9.9%</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">2,366,264</td>
<td align="right">6.1%</td>
<td align="right">2,364,154</td>
<td align="right">6.1%</td>
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
<td align="right">32,467,185</td>
<td align="right">84.1%</td>
<td align="right">32,466,974</td>
<td align="right">84.0%</td>
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
<td align="right">5,679</td>
<td align="right">11.0%</td>
<td align="right">5,622</td>
<td align="right">11.0%</td>
<td align="right">-1.0%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">45,741</td>
<td align="right">89.0%</td>
<td align="right">45,695</td>
<td align="right">89.0%</td>
<td align="right">-0.1%</td>
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
<td align="right">885</td>
<td align="right">15.6%</td>
<td align="right">865</td>
<td align="right">15.4%</td>
<td align="right">-2.3%</td>
</tr>
<tr>
<td align="left">out of range</td>
<td align="right">2,660</td>
<td align="right">46.8%</td>
<td align="right">2,623</td>
<td align="right">46.7%</td>
<td align="right">-1.4%</td>
</tr>
<tr>
<td align="left">string slice</td>
<td align="right">1,252</td>
<td align="right">22.0%</td>
<td align="right">1,252</td>
<td align="right">22.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">307</td>
<td align="right">5.4%</td>
<td align="right">307</td>
<td align="right">5.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">tuple slice</td>
<td align="right">245</td>
<td align="right">4.3%</td>
<td align="right">245</td>
<td align="right">4.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">buffer int</td>
<td align="right">238</td>
<td align="right">4.2%</td>
<td align="right">238</td>
<td align="right">4.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">buffer slice</td>
<td align="right">92</td>
<td align="right">1.6%</td>
<td align="right">92</td>
<td align="right">1.6%</td>
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
<td align="right">1,871,230</td>
<td align="right">0.8%</td>
<td align="right">1,867,774</td>
<td align="right">0.8%</td>
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
<td align="right">14,173</td>
<td align="right">0.0%</td>
<td align="right">14,174</td>
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
<td align="right">239,305,275</td>
<td align="right">99.2%</td>
<td align="right">239,309,734</td>
<td align="right">99.2%</td>
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
<td align="right">61,051</td>
<td align="right">100.0%</td>
<td align="right">60,991</td>
<td align="right">100.0%</td>
<td align="right">-0.1%</td>
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
<td align="right">424</td>
<td align="right">424 / 0 !!</td>
<td align="right">424</td>
<td align="right">424 / 0 !!</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">init not python</td>
<td align="right">24</td>
<td align="right">24 / 0 !!</td>
<td align="right">24</td>
<td align="right">24 / 0 !!</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">init not inline values</td>
<td align="right">3</td>
<td align="right">3 / 0 !!</td>
<td align="right">3</td>
<td align="right">3 / 0 !!</td>
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
<td align="right">336</td>
<td align="right">15.6%</td>
<td align="right">336</td>
<td align="right">15.6%</td>
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
<td align="right">64</td>
<td align="right">3.0%</td>
<td align="right">64</td>
<td align="right">3.0%</td>
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
<td align="right">8,049</td>
<td align="right">0.1%</td>
<td align="right">7,992</td>
<td align="right">0.1%</td>
<td align="right">-0.7%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">636,812</td>
<td align="right">5.5%</td>
<td align="right">636,798</td>
<td align="right">5.5%</td>
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
<td align="right">10,925,791</td>
<td align="right">94.4%</td>
<td align="right">10,925,771</td>
<td align="right">94.4%</td>
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
<td align="right">1,351</td>
<td align="right">33.7%</td>
<td align="right">1,349</td>
<td align="right">33.6%</td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">2,663</td>
<td align="right">66.3%</td>
<td align="right">2,660</td>
<td align="right">66.4%</td>
<td align="right">-0.1%</td>
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
<td align="right">99</td>
<td align="right">3.7%</td>
<td align="right">95</td>
<td align="right">3.6%</td>
<td align="right">-4.0%</td>
</tr>
<tr>
<td align="left">different types</td>
<td align="right">1,804</td>
<td align="right">67.7%</td>
<td align="right">1,805</td>
<td align="right">67.9%</td>
<td align="right">0.1%</td>
</tr>
<tr>
<td align="left">list</td>
<td align="right">258</td>
<td align="right">9.7%</td>
<td align="right">258</td>
<td align="right">9.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">256</td>
<td align="right">9.6%</td>
<td align="right">256</td>
<td align="right">9.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">157</td>
<td align="right">5.9%</td>
<td align="right">157</td>
<td align="right">5.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">43</td>
<td align="right">1.6%</td>
<td align="right">43</td>
<td align="right">1.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">baseobject</td>
<td align="right">23</td>
<td align="right">0.9%</td>
<td align="right">23</td>
<td align="right">0.9%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">string</td>
<td align="right">21</td>
<td align="right">0.8%</td>
<td align="right">21</td>
<td align="right">0.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">bytes</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">1</td>
<td align="right">0.0%</td>
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
<td align="right">4,139,524</td>
<td align="right">26.1%</td>
<td align="right">3,860,334</td>
<td align="right">24.8%</td>
<td align="right">-6.7%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">11,731,432</td>
<td align="right">73.9%</td>
<td align="right">11,731,432</td>
<td align="right">75.2%</td>
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
<td align="right">4,994</td>
<td align="right">100.0%</td>
<td align="right">4,927</td>
<td align="right">100.0%</td>
<td align="right">-1.3%</td>
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
<td align="left">other</td>
<td align="right">733</td>
<td align="right">14.7%</td>
<td align="right">670</td>
<td align="right">13.6%</td>
<td align="right">-8.6%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">1,467</td>
<td align="right">29.4%</td>
<td align="right">1,463</td>
<td align="right">29.7%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">str</td>
<td align="right">2,172</td>
<td align="right">43.5%</td>
<td align="right">2,172</td>
<td align="right">44.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list</td>
<td align="right">622</td>
<td align="right">12.5%</td>
<td align="right">622</td>
<td align="right">12.6%</td>
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
<td align="right">9,367,139</td>
<td align="right">9.2%</td>
<td align="right">9,555,883</td>
<td align="right">9.3%</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">3,108,774</td>
<td align="right">3.1%</td>
<td align="right">3,153,431</td>
<td align="right">3.1%</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">89,433,439</td>
<td align="right">87.8%</td>
<td align="right">90,129,121</td>
<td align="right">87.6%</td>
<td align="right">0.8%</td>
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
<td align="right">59,282</td>
<td align="right">91.6%</td>
<td align="right">60,169</td>
<td align="right">91.7%</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">5,424</td>
<td align="right">8.4%</td>
<td align="right">5,427</td>
<td align="right">8.3%</td>
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
<td align="left">dict values</td>
<td align="right">711</td>
<td align="right">13.1%</td>
<td align="right">752</td>
<td align="right">13.9%</td>
<td align="right">5.8%</td>
</tr>
<tr>
<td align="left">dict keys</td>
<td align="right">469</td>
<td align="right">8.6%</td>
<td align="right">448</td>
<td align="right">8.3%</td>
<td align="right">-4.5%</td>
</tr>
<tr>
<td align="left">dict items</td>
<td align="right">1,503</td>
<td align="right">27.7%</td>
<td align="right">1,464</td>
<td align="right">27.0%</td>
<td align="right">-2.6%</td>
</tr>
<tr>
<td align="left">seq iter</td>
<td align="right">1,213</td>
<td align="right">22.4%</td>
<td align="right">1,235</td>
<td align="right">22.8%</td>
<td align="right">1.8%</td>
</tr>
<tr>
<td align="left">enumerate</td>
<td align="right">465</td>
<td align="right">8.6%</td>
<td align="right">465</td>
<td align="right">8.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">zip</td>
<td align="right">352</td>
<td align="right">6.5%</td>
<td align="right">352</td>
<td align="right">6.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">272</td>
<td align="right">5.0%</td>
<td align="right">272</td>
<td align="right">5.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">ascii string</td>
<td align="right">234</td>
<td align="right">4.3%</td>
<td align="right">234</td>
<td align="right">4.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">reversed list</td>
<td align="right">97</td>
<td align="right">1.8%</td>
<td align="right">97</td>
<td align="right">1.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">61</td>
<td align="right">1.1%</td>
<td align="right">61</td>
<td align="right">1.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">map</td>
<td align="right">47</td>
<td align="right">0.9%</td>
<td align="right">47</td>
<td align="right">0.9%</td>
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
<td align="right">84,181,228</td>
<td align="right">25.8%</td>
<td align="right">59,984,278</td>
<td align="right">20.0%</td>
<td align="right">-28.7%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">35,850,436</td>
<td align="right">11.0%</td>
<td align="right">29,777,490</td>
<td align="right">9.9%</td>
<td align="right">-16.9%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">205,456,139</td>
<td align="right">63.1%</td>
<td align="right">209,516,729</td>
<td align="right">69.9%</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">
deopt
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">64,389</td>
<td align="right">0.0%</td>
<td align="right">64,389</td>
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
<td align="right">1,939,247</td>
<td align="right">99.5%</td>
<td align="right">1,437,653</td>
<td align="right">99.4%</td>
<td align="right">-25.9%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">10,362</td>
<td align="right">0.5%</td>
<td align="right">9,166</td>
<td align="right">0.6%</td>
<td align="right">-11.5%</td>
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
<td align="left">not in dict</td>
<td align="right">302</td>
<td align="right">2.9%</td>
<td align="right">65</td>
<td align="right">0.7%</td>
<td align="right">-78.5%</td>
</tr>
<tr>
<td align="left">overridden</td>
<td align="right">645</td>
<td align="right">6.2%</td>
<td align="right">452</td>
<td align="right">4.9%</td>
<td align="right">-29.9%</td>
</tr>
<tr>
<td align="left">mutable class</td>
<td align="right">993</td>
<td align="right">9.6%</td>
<td align="right">738</td>
<td align="right">8.1%</td>
<td align="right">-25.7%</td>
</tr>
<tr>
<td align="left">metaclass attribute</td>
<td align="right">2,404</td>
<td align="right">23.2%</td>
<td align="right">2,171</td>
<td align="right">23.7%</td>
<td align="right">-9.7%</td>
</tr>
<tr>
<td align="left">method</td>
<td align="right">3,224</td>
<td align="right">31.1%</td>
<td align="right">3,010</td>
<td align="right">32.8%</td>
<td align="right">-6.6%</td>
</tr>
<tr>
<td align="left">not managed dict</td>
<td align="right">657</td>
<td align="right">6.3%</td>
<td align="right">614</td>
<td align="right">6.7%</td>
<td align="right">-6.5%</td>
</tr>
<tr>
<td align="left">overriding descriptor</td>
<td align="right">1,209</td>
<td align="right">11.7%</td>
<td align="right">1,188</td>
<td align="right">13.0%</td>
<td align="right">-1.7%</td>
</tr>
<tr>
<td align="left">module attr not found</td>
<td align="right">115</td>
<td align="right">1.1%</td>
<td align="right">115</td>
<td align="right">1.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">class method obj</td>
<td align="right">71</td>
<td align="right">0.7%</td>
<td align="right">71</td>
<td align="right">0.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">builtin class method</td>
<td align="right">68</td>
<td align="right">0.7%</td>
<td align="right">68</td>
<td align="right">0.7%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">non overriding descriptor</td>
<td align="right">6</td>
<td align="right">0.1%</td>
<td align="right">6</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">non object slot</td>
<td align="right">3</td>
<td align="right">0.0%</td>
<td align="right">3</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">expected error</td>
<td align="right">2</td>
<td align="right">0.0%</td>
<td align="right">2</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">class attr simple</td>
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
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">204,735,088</td>
<td align="right">100.0%</td>
<td align="right">151,534,452</td>
<td align="right">100.0%</td>
<td align="right">-26.0%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">2,997</td>
<td align="right">0.0%</td>
<td align="right">2,998</td>
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
<td align="right">57</td>
<td align="right">0.0%</td>
<td align="right">57</td>
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
<td align="right">12,141</td>
<td align="right">0.0%</td>
<td align="right">12,141</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
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
<td align="right">50</td>
<td align="right">0.0%</td>
<td align="right">50</td>
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
<td align="right">424,859</td>
<td align="right">99.9%</td>
<td align="right">424,859</td>
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
<td align="right">209</td>
<td align="right">100.0%</td>
<td align="right">209</td>
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
<td align="right">4,490</td>
<td align="right">29.2%</td>
<td align="right">4,490</td>
<td align="right">29.2%</td>
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
<td align="right">10,810</td>
<td align="right">70.4%</td>
<td align="right">10,810</td>
<td align="right">70.4%</td>
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
<td align="right">4</td>
<td align="right">7.8%</td>
<td align="right">4</td>
<td align="right">7.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">47</td>
<td align="right">92.2%</td>
<td align="right">47</td>
<td align="right">92.2%</td>
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
<td align="right">47</td>
<td align="right">100.0%</td>
<td align="right">47</td>
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
<td align="right">9,232,931</td>
<td align="right">28.1%</td>
<td align="right">7,721,216</td>
<td align="right">24.6%</td>
<td align="right">-16.4%</td>
</tr>
<tr>
<td align="left">
miss
<details>
<summary>ⓘ</summary>

Specialized instructions that deopt.
</details>
</td>
<td align="right">9,599,505</td>
<td align="right">29.2%</td>
<td align="right">9,570,752</td>
<td align="right">30.5%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">14,064,698</td>
<td align="right">42.7%</td>
<td align="right">14,074,704</td>
<td align="right">44.9%</td>
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
<td align="left">Failure</td>
<td align="right">9,595</td>
<td align="right">4.9%</td>
<td align="right">9,171</td>
<td align="right">4.7%</td>
<td align="right">-4.4%</td>
</tr>
<tr>
<td align="left">Success</td>
<td align="right">185,771</td>
<td align="right">95.1%</td>
<td align="right">185,259</td>
<td align="right">95.3%</td>
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
<td align="left">class attr simple</td>
<td align="right">4,868</td>
<td align="right">50.7%</td>
<td align="right">4,465</td>
<td align="right">48.7%</td>
<td align="right">-8.3%</td>
</tr>
<tr>
<td align="left">not in keys</td>
<td align="right">308</td>
<td align="right">3.2%</td>
<td align="right">287</td>
<td align="right">3.1%</td>
<td align="right">-6.8%</td>
</tr>
<tr>
<td align="left">not in dict</td>
<td align="right">2,626</td>
<td align="right">27.4%</td>
<td align="right">2,626</td>
<td align="right">28.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">overridden</td>
<td align="right">989</td>
<td align="right">10.3%</td>
<td align="right">989</td>
<td align="right">10.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">property</td>
<td align="right">643</td>
<td align="right">6.7%</td>
<td align="right">643</td>
<td align="right">7.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">non object slot</td>
<td align="right">94</td>
<td align="right">1.0%</td>
<td align="right">94</td>
<td align="right">1.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">split dict</td>
<td align="right">53</td>
<td align="right">0.6%</td>
<td align="right">53</td>
<td align="right">0.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">overriding descriptor</td>
<td align="right">9</td>
<td align="right">0.1%</td>
<td align="right">9</td>
<td align="right">0.1%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">mutable class</td>
<td align="right">3</td>
<td align="right">0.0%</td>
<td align="right">3</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">no dict</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">not managed dict</td>
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
<td align="right">176,227</td>
<td align="right">100.0%</td>
<td align="right">176,227</td>
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
<td align="right">1,485,247</td>
<td align="right">14.0%</td>
<td align="right">1,485,247</td>
<td align="right">14.0%</td>
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
<td align="right">9,156,354</td>
<td align="right">86.0%</td>
<td align="right">9,156,354</td>
<td align="right">86.0%</td>
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
<td align="right">474</td>
<td align="right">12.0%</td>
<td align="right">474</td>
<td align="right">12.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">3,473</td>
<td align="right">88.0%</td>
<td align="right">3,473</td>
<td align="right">88.0%</td>
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
<td align="left">py simple</td>
<td align="right">2,960</td>
<td align="right">85.2%</td>
<td align="right">2,960</td>
<td align="right">85.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">list slice</td>
<td align="right">341</td>
<td align="right">9.8%</td>
<td align="right">341</td>
<td align="right">9.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">out of range</td>
<td align="right">113</td>
<td align="right">3.3%</td>
<td align="right">113</td>
<td align="right">3.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">47</td>
<td align="right">1.4%</td>
<td align="right">47</td>
<td align="right">1.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">bytearray int</td>
<td align="right">12</td>
<td align="right">0.3%</td>
<td align="right">12</td>
<td align="right">0.3%</td>
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
<td align="right">4,940,057</td>
<td align="right">2.6%</td>
<td align="right">2,151,847</td>
<td align="right">1.2%</td>
<td align="right">-56.4%</td>
</tr>
<tr>
<td align="left">
deferred
<details>
<summary>ⓘ</summary>

Lists the number of "deferred" (i.e. not specialized) instructions executed.
</details>
</td>
<td align="right">13,985,992</td>
<td align="right">7.5%</td>
<td align="right">7,994,547</td>
<td align="right">4.5%</td>
<td align="right">-42.8%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">167,922,641</td>
<td align="right">89.8%</td>
<td align="right">168,466,934</td>
<td align="right">94.3%</td>
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
<td align="right">131,780</td>
<td align="right">100.0%</td>
<td align="right">37,752</td>
<td align="right">100.0%</td>
<td align="right">-71.4%</td>
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
<td align="left">number</td>
<td align="right">118,408</td>
<td align="right">89.9%</td>
<td align="right">25,444</td>
<td align="right">67.4%</td>
<td align="right">-78.5%</td>
</tr>
<tr>
<td align="left">tuple</td>
<td align="right">9,949</td>
<td align="right">7.5%</td>
<td align="right">8,971</td>
<td align="right">23.8%</td>
<td align="right">-9.8%</td>
</tr>
<tr>
<td align="left">dict</td>
<td align="right">905</td>
<td align="right">0.7%</td>
<td align="right">819</td>
<td align="right">2.2%</td>
<td align="right">-9.5%</td>
</tr>
<tr>
<td align="left">mapping</td>
<td align="right">2,081</td>
<td align="right">1.6%</td>
<td align="right">2,081</td>
<td align="right">5.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">other</td>
<td align="right">214</td>
<td align="right">0.2%</td>
<td align="right">214</td>
<td align="right">0.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">set</td>
<td align="right">116</td>
<td align="right">0.1%</td>
<td align="right">116</td>
<td align="right">0.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">sequence</td>
<td align="right">107</td>
<td align="right">0.1%</td>
<td align="right">107</td>
<td align="right">0.3%</td>
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
<td align="right">296,270</td>
<td align="right">2.0%</td>
<td align="right">283,749</td>
<td align="right">1.9%</td>
<td align="right">-4.2%</td>
</tr>
<tr>
<td align="left">
hit
<details>
<summary>ⓘ</summary>

Specialized instructions that complete.
</details>
</td>
<td align="right">14,605,532</td>
<td align="right">98.0%</td>
<td align="right">14,605,532</td>
<td align="right">98.1%</td>
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
<td align="right">402</td>
<td align="right">80.6%</td>
<td align="right">402</td>
<td align="right">80.6%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Failure</td>
<td align="right">97</td>
<td align="right">19.4%</td>
<td align="right">97</td>
<td align="right">19.4%</td>
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
<td align="right">74</td>
<td align="right">76.3%</td>
<td align="right">74</td>
<td align="right">76.3%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">iterator</td>
<td align="right">23</td>
<td align="right">23.7%</td>
<td align="right">23</td>
<td align="right">23.7%</td>
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
<td align="right">106,091,025</td>
<td align="right">3.3%</td>
<td align="right">79,117,415</td>
<td align="right">2.8%</td>
<td align="right">-25.4%</td>
</tr>
<tr>
<td align="left">
Specialized hits
<details>
<summary>ⓘ</summary>

Specialized instructions, e.g. `LOAD_ATTR_MODULE` that complete.
</details>
</td>
<td align="right">1,177,670,268</td>
<td align="right">36.9%</td>
<td align="right">968,559,792</td>
<td align="right">33.8%</td>
<td align="right">-17.8%</td>
</tr>
<tr>
<td align="left">
Not specialized
<details>
<summary>ⓘ</summary>

Instructions that could be specialized but aren't, e.g. `LOAD_ATTR`, `BINARY_SLICE`.
</details>
</td>
<td align="right">89,964,852</td>
<td align="right">2.8%</td>
<td align="right">76,389,707</td>
<td align="right">2.7%</td>
<td align="right">-15.1%</td>
</tr>
<tr>
<td align="left">
Basic
<details>
<summary>ⓘ</summary>

Instructions that are not and cannot be specialized, e.g. `LOAD_FAST`.
</details>
</td>
<td align="right">1,817,245,807</td>
<td align="right">56.9%</td>
<td align="right">1,737,296,265</td>
<td align="right">60.7%</td>
<td align="right">-4.4%</td>
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
<td align="right">13,985,992</td>
<td align="right">15.6%</td>
<td align="right">7,994,547</td>
<td align="right">10.5%</td>
<td align="right">-42.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR</td>
<td align="right">35,850,436</td>
<td align="right">40.1%</td>
<td align="right">29,777,490</td>
<td align="right">39.2%</td>
<td align="right">-16.9%</td>
</tr>
<tr>
<td align="left">STORE_ATTR</td>
<td align="right">9,232,931</td>
<td align="right">10.3%</td>
<td align="right">7,721,216</td>
<td align="right">10.2%</td>
<td align="right">-16.4%</td>
</tr>
<tr>
<td align="left">CONTAINS_OP</td>
<td align="right">4,139,524</td>
<td align="right">4.6%</td>
<td align="right">3,860,334</td>
<td align="right">5.1%</td>
<td align="right">-6.7%</td>
</tr>
<tr>
<td align="left">BINARY_OP</td>
<td align="right">7,737,931</td>
<td align="right">8.7%</td>
<td align="right">7,984,219</td>
<td align="right">10.5%</td>
<td align="right">3.2%</td>
</tr>
<tr>
<td align="left">BINARY_SLICE</td>
<td align="right">2,667,658</td>
<td align="right">3.0%</td>
<td align="right">2,611,443</td>
<td align="right">3.4%</td>
<td align="right">-2.1%</td>
</tr>
<tr>
<td align="left">FOR_ITER</td>
<td align="right">9,367,139</td>
<td align="right">10.5%</td>
<td align="right">9,555,883</td>
<td align="right">12.6%</td>
<td align="right">2.0%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR</td>
<td align="right">3,771,445</td>
<td align="right">4.2%</td>
<td align="right">3,826,113</td>
<td align="right">5.0%</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">COMPARE_OP</td>
<td align="right">636,812</td>
<td align="right">0.7%</td>
<td align="right">636,798</td>
<td align="right">0.8%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">STORE_SUBSCR</td>
<td align="right">1,485,247</td>
<td align="right">1.7%</td>
<td align="right">1,485,247</td>
<td align="right">2.0%</td>
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
<td align="left">TO_BOOL_NONE</td>
<td align="right">3,980,723</td>
<td align="right">3.8%</td>
<td align="right">1,206,548</td>
<td align="right">1.5%</td>
<td align="right">-69.7%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_PROPERTY</td>
<td align="right">9,817,208</td>
<td align="right">9.3%</td>
<td align="right">5,718,226</td>
<td align="right">7.2%</td>
<td align="right">-41.8%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_INSTANCE_VALUE</td>
<td align="right">41,698,432</td>
<td align="right">39.3%</td>
<td align="right">25,870,700</td>
<td align="right">32.7%</td>
<td align="right">-38.0%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">12,189,303</td>
<td align="right">11.5%</td>
<td align="right">8,379,513</td>
<td align="right">10.6%</td>
<td align="right">-31.3%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_SLOT</td>
<td align="right">6,136,799</td>
<td align="right">5.8%</td>
<td align="right">5,444,837</td>
<td align="right">6.9%</td>
<td align="right">-11.3%</td>
</tr>
<tr>
<td align="left">LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">13,640,134</td>
<td align="right">12.9%</td>
<td align="right">13,970,729</td>
<td align="right">17.7%</td>
<td align="right">2.4%</td>
</tr>
<tr>
<td align="left">FOR_ITER_TUPLE</td>
<td align="right">1,554,324</td>
<td align="right">1.5%</td>
<td align="right">1,577,148</td>
<td align="right">2.0%</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">FOR_ITER_LIST</td>
<td align="right">1,554,450</td>
<td align="right">1.5%</td>
<td align="right">1,576,283</td>
<td align="right">2.0%</td>
<td align="right">1.4%</td>
</tr>
<tr>
<td align="left">STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">9,545,674</td>
<td align="right">9.0%</td>
<td align="right">9,515,781</td>
<td align="right">12.0%</td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">BINARY_SUBSCR_LIST_INT</td>
<td align="right">2,341,698</td>
<td align="right">2.2%</td>
<td align="right">2,339,588</td>
<td align="right">3.0%</td>
<td align="right">-0.1%</td>
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
<td align="left">Calls via PyEval_EvalFrame (api)</td>
<td align="right">18,672,069</td>
<td align="right">8.5%</td>
<td align="right">18,054,786</td>
<td align="right">8.2%</td>
<td align="right">-3.3%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function vectorcall)</td>
<td align="right">39,759,826</td>
<td align="right">18.1%</td>
<td align="right">39,145,088</td>
<td align="right">17.9%</td>
<td align="right">-1.5%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (vector)</td>
<td align="right">39,761,549</td>
<td align="right">18.1%</td>
<td align="right">39,146,811</td>
<td align="right">17.9%</td>
<td align="right">-1.5%</td>
</tr>
<tr>
<td align="left">Calls to PyEval_EvalDefault</td>
<td align="right">40,428,722</td>
<td align="right">18.4%</td>
<td align="right">39,806,384</td>
<td align="right">18.2%</td>
<td align="right">-1.5%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (total)</td>
<td align="right">40,428,722</td>
<td align="right">18.4%</td>
<td align="right">39,806,384</td>
<td align="right">18.2%</td>
<td align="right">-1.5%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (generator)</td>
<td align="right">667,173</td>
<td align="right">0.3%</td>
<td align="right">659,573</td>
<td align="right">0.3%</td>
<td align="right">-1.1%</td>
</tr>
<tr>
<td align="left">Calls to Python functions inlined</td>
<td align="right">178,774,246</td>
<td align="right">81.6%</td>
<td align="right">179,388,984</td>
<td align="right">81.8%</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">Frame objects created</td>
<td align="right">6,761,775</td>
<td align="right">3.1%</td>
<td align="right">6,747,027</td>
<td align="right">3.1%</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">Frames pushed</td>
<td align="right">158,034,290</td>
<td align="right">72.1%</td>
<td align="right">158,031,745</td>
<td align="right">72.1%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (legacy)</td>
<td align="right">379</td>
<td align="right">0.0%</td>
<td align="right">379</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (build class)</td>
<td align="right">1,344</td>
<td align="right">0.0%</td>
<td align="right">1,344</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (slot)</td>
<td align="right">10,484,588</td>
<td align="right">4.8%</td>
<td align="right">10,484,588</td>
<td align="right">4.8%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (function ex)</td>
<td align="right">502,497</td>
<td align="right">0.2%</td>
<td align="right">502,497</td>
<td align="right">0.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Calls via PyEval_EvalFrame (method)</td>
<td align="right">88</td>
<td align="right">0.0%</td>
<td align="right">88</td>
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
<td align="left">Mortal increfs</td>
<td align="right">1,380,288,284</td>
<td align="right">36.1%</td>
<td align="right">1,668,799,331</td>
<td align="right">42.0%</td>
<td align="right">20.9%</td>
</tr>
<tr>
<td align="left">Mortal decrefs</td>
<td align="right">1,242,171,556</td>
<td align="right">29.6%</td>
<td align="right">1,499,878,406</td>
<td align="right">33.9%</td>
<td align="right">20.7%</td>
</tr>
<tr>
<td align="left">Interpreter immortal increfs</td>
<td align="right">371,776,053</td>
<td align="right">9.7%</td>
<td align="right">307,510,032</td>
<td align="right">7.7%</td>
<td align="right">-17.3%</td>
</tr>
<tr>
<td align="left">Immortal decrefs</td>
<td align="right">722,687,636</td>
<td align="right">17.2%</td>
<td align="right">816,788,325</td>
<td align="right">18.5%</td>
<td align="right">13.0%</td>
</tr>
<tr>
<td align="left">Interpreter immortal decrefs</td>
<td align="right">525,011,665</td>
<td align="right">12.5%</td>
<td align="right">474,233,014</td>
<td align="right">10.7%</td>
<td align="right">-9.7%</td>
</tr>
<tr>
<td align="left">Interpreter mortal increfs</td>
<td align="right">1,321,945,394</td>
<td align="right">34.6%</td>
<td align="right">1,213,107,146</td>
<td align="right">30.5%</td>
<td align="right">-8.2%</td>
</tr>
<tr>
<td align="left">Method cache dunder misses</td>
<td align="right">1,302,088</td>
<td align="right"></td>
<td align="right">1,214,654</td>
<td align="right"></td>
<td align="right">-6.7%</td>
</tr>
<tr>
<td align="left">Immortal increfs</td>
<td align="right">747,971,781</td>
<td align="right">19.6%</td>
<td align="right">786,736,529</td>
<td align="right">19.8%</td>
<td align="right">5.2%</td>
</tr>
<tr>
<td align="left">Method cache collisions</td>
<td align="right">9,650,338</td>
<td align="right"></td>
<td align="right">9,193,092</td>
<td align="right"></td>
<td align="right">-4.7%</td>
</tr>
<tr>
<td align="left">Interpreter mortal decrefs</td>
<td align="right">1,711,499,079</td>
<td align="right">40.7%</td>
<td align="right">1,633,189,717</td>
<td align="right">36.9%</td>
<td align="right">-4.6%</td>
</tr>
<tr>
<td align="left">Method cache misses</td>
<td align="right">8,350,474</td>
<td align="right"></td>
<td align="right">7,980,646</td>
<td align="right"></td>
<td align="right">-4.4%</td>
</tr>
<tr>
<td align="left">Method cache hits</td>
<td align="right">206,782,266</td>
<td align="right"></td>
<td align="right">201,949,644</td>
<td align="right"></td>
<td align="right">-2.3%</td>
</tr>
<tr>
<td align="left">Allocations to 4 kbytes</td>
<td align="right">1,445,623</td>
<td align="right">0.5%</td>
<td align="right">1,473,181</td>
<td align="right">0.5%</td>
<td align="right">1.9%</td>
</tr>
<tr>
<td align="left">Method cache dunder hits</td>
<td align="right">156,047,227</td>
<td align="right"></td>
<td align="right">155,650,454</td>
<td align="right"></td>
<td align="right">-0.3%</td>
</tr>
<tr>
<td align="left">Frees</td>
<td align="right">211,140,814</td>
<td align="right"></td>
<td align="right">210,905,675</td>
<td align="right"></td>
<td align="right">-0.1%</td>
</tr>
<tr>
<td align="left">Allocations over 4 kbytes</td>
<td align="right">61,850</td>
<td align="right">0.0%</td>
<td align="right">61,872</td>
<td align="right">0.0%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Allocations to 512 bytes</td>
<td align="right">199,083,291</td>
<td align="right">70.0%</td>
<td align="right">199,031,929</td>
<td align="right">70.0%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Allocations</td>
<td align="right">200,590,764</td>
<td align="right">70.5%</td>
<td align="right">200,566,982</td>
<td align="right">70.5%</td>
<td align="right">-0.0%</td>
</tr>
<tr>
<td align="left">Allocations from freelist</td>
<td align="right">83,871,457</td>
<td align="right">29.5%</td>
<td align="right">83,877,120</td>
<td align="right">29.5%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Frees to freelist</td>
<td align="right">83,853,514</td>
<td align="right"></td>
<td align="right">83,853,649</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Inline values</td>
<td align="right">3,079,690</td>
<td align="right"></td>
<td align="right">3,079,690</td>
<td align="right"></td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (on request)</td>
<td align="right">997,148</td>
<td align="right">32.4%</td>
<td align="right">997,148</td>
<td align="right">32.4%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (new key)</td>
<td align="right">98,881</td>
<td align="right">3.2%</td>
<td align="right">98,881</td>
<td align="right">3.2%</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">Materialize dict (too big)</td>
<td align="right">1,344</td>
<td align="right">0.0%</td>
<td align="right">1,344</td>
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
<td align="right">6,241</td>
<td align="right">12,997,128</td>
<td align="right">397,224,068</td>
<td align="right">6,259</td>
<td align="right">12,870,117</td>
<td align="right">396,074,584</td>
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
<td align="right">84</td>
<td align="right">0.1%</td>
<td align="right">234</td>
<td align="right">0.1%</td>
<td align="right">178.6%</td>
</tr>
<tr>
<td align="left">
Inner loop found
<details>
<summary>ⓘ</summary>

A trace is truncated because it has an inner loop
</details>
</td>
<td align="right">407</td>
<td align="right">0.5%</td>
<td align="right">937</td>
<td align="right">0.6%</td>
<td align="right">130.2%</td>
</tr>
<tr>
<td align="left">
Trace stack underflow
<details>
<summary>ⓘ</summary>

A potential trace is abandoned because it pops more frames than it pushes.
</details>
</td>
<td align="right">53,167</td>
<td align="right">64.1%</td>
<td align="right">109,204</td>
<td align="right">68.1%</td>
<td align="right">105.4%</td>
</tr>
<tr>
<td align="left">
Trace too short
<details>
<summary>ⓘ</summary>

A potential trace is abandoced because it it too short.
</details>
</td>
<td align="right">42,376</td>
<td align="right">51.1%</td>
<td align="right">85,059</td>
<td align="right">53.0%</td>
<td align="right">100.7%</td>
</tr>
<tr>
<td align="left">
Executors invalidated
<details>
<summary>ⓘ</summary>

The number of executors that were invalidated due to watched dictionary changes.
</details>
</td>
<td align="right">3</td>
<td align="right">0.0%</td>
<td align="right">6</td>
<td align="right">0.0%</td>
<td align="right">100.0%</td>
</tr>
<tr>
<td align="left">
Optimization attempts
<details>
<summary>ⓘ</summary>

The number of times a potential trace is identified.  Specifically, this occurs in the JUMP BACKWARD instruction when the counter reaches a threshold.
</details>
</td>
<td align="right">82,890</td>
<td align="right"></td>
<td align="right">160,455</td>
<td align="right"></td>
<td align="right">93.6%</td>
</tr>
<tr>
<td align="left">
Traces created
<details>
<summary>ⓘ</summary>

The number of traces that were successfully created.
</details>
</td>
<td align="right">40,514</td>
<td align="right">48.9%</td>
<td align="right">75,396</td>
<td align="right">47.0%</td>
<td align="right">86.1%</td>
</tr>
<tr>
<td align="left">
Traces executed
<details>
<summary>ⓘ</summary>

The number of traces that were executed
</details>
</td>
<td align="right">292,102,512</td>
<td align="right"></td>
<td align="right">431,724,544</td>
<td align="right"></td>
<td align="right">47.8%</td>
</tr>
<tr>
<td align="left">
Uops executed
<details>
<summary>ⓘ</summary>

The total number of uops (micro-operations) that were executed
</details>
</td>
<td align="right">2,578,820,042</td>
<td align="right">882.8%</td>
<td align="right">3,724,646,150</td>
<td align="right">862.7%</td>
<td align="right">44.4%</td>
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
<td align="right">36,461</td>
<td align="right">90.0%</td>
<td align="right">70,480</td>
<td align="right">93.5%</td>
<td align="right">93.3%</td>
</tr>
<tr>
<td align="left">
Optimizer attempts
<details>
<summary>ⓘ</summary>

The number of times the trace optimizer (_Py_uop_analyze_and_optimize) was run.
</details>
</td>
<td align="right">40,514</td>
<td align="right"></td>
<td align="right">75,396</td>
<td align="right"></td>
<td align="right">86.1%</td>
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
<td align="right">811</td>
<td align="right">1.1%</td>
<td align="right">811 / 0 !!</td>
</tr>
<tr>
<td align="left"><= 8</td>
<td align="right">3,596</td>
<td align="right">8.9%</td>
<td align="right">6,225</td>
<td align="right">8.3%</td>
<td align="right">73.1%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">11,854</td>
<td align="right">29.3%</td>
<td align="right">20,524</td>
<td align="right">27.2%</td>
<td align="right">73.1%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">13,788</td>
<td align="right">34.0%</td>
<td align="right">27,301</td>
<td align="right">36.2%</td>
<td align="right">98.0%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">8,903</td>
<td align="right">22.0%</td>
<td align="right">15,252</td>
<td align="right">20.2%</td>
<td align="right">71.3%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">2,372</td>
<td align="right">5.9%</td>
<td align="right">5,091</td>
<td align="right">6.8%</td>
<td align="right">114.6%</td>
</tr>
<tr>
<td align="left"><= 256</td>
<td align="right">1</td>
<td align="right">0.0%</td>
<td align="right">192</td>
<td align="right">0.3%</td>
<td align="right">19,100.0%</td>
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
<td align="right">199</td>
<td align="right">0.5%</td>
<td align="right">1,132</td>
<td align="right">1.5%</td>
<td align="right">468.8%</td>
</tr>
<tr>
<td align="left"><= 8</td>
<td align="right">7,115</td>
<td align="right">17.6%</td>
<td align="right">11,934</td>
<td align="right">15.8%</td>
<td align="right">67.7%</td>
</tr>
<tr>
<td align="left"><= 16</td>
<td align="right">12,435</td>
<td align="right">30.7%</td>
<td align="right">26,143</td>
<td align="right">34.7%</td>
<td align="right">110.2%</td>
</tr>
<tr>
<td align="left"><= 32</td>
<td align="right">12,261</td>
<td align="right">30.3%</td>
<td align="right">21,997</td>
<td align="right">29.2%</td>
<td align="right">79.4%</td>
</tr>
<tr>
<td align="left"><= 64</td>
<td align="right">4,045</td>
<td align="right">10.0%</td>
<td align="right">8,554</td>
<td align="right">11.3%</td>
<td align="right">111.5%</td>
</tr>
<tr>
<td align="left"><= 128</td>
<td align="right">406</td>
<td align="right">1.0%</td>
<td align="right">699</td>
<td align="right">0.9%</td>
<td align="right">72.2%</td>
</tr>
<tr>
<td align="left"><= 256</td>
<td align="right"></td>
<td align="right"></td>
<td align="right">21</td>
<td align="right">0.0%</td>
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
<td align="left">_CALL_INTRINSIC_1</td>
<td align="right">21</td>
<td align="right">65,066</td>
<td align="right">309,738.1%</td>
</tr>
<tr>
<td align="left">_LIST_EXTEND</td>
<td align="right">21</td>
<td align="right">65,066</td>
<td align="right">309,738.1%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_ADD_UNICODE</td>
<td align="right">674</td>
<td align="right">813,905</td>
<td align="right">120,657.4%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW_WITH_NULL</td>
<td align="right">5,691</td>
<td align="right">5,126,606</td>
<td align="right">89,982.7%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_2</td>
<td align="right">26,387</td>
<td align="right">3,357,293</td>
<td align="right">12,623.3%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_CLASS_1</td>
<td align="right">3,818</td>
<td align="right">414,230</td>
<td align="right">10,749.4%</td>
</tr>
<tr>
<td align="left">_IS_OP</td>
<td align="right">4,219</td>
<td align="right">335,249</td>
<td align="right">7,846.2%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_AND_CLEAR</td>
<td align="right">94</td>
<td align="right">3,257</td>
<td align="right">3,364.9%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_PROPERTY_FRAME</td>
<td align="right">69,690</td>
<td align="right">1,973,641</td>
<td align="right">2,732.0%</td>
</tr>
<tr>
<td align="left">_STORE_ATTR_WITH_HINT</td>
<td align="right">9,373</td>
<td align="right">203,474</td>
<td align="right">2,070.9%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_LIST_INT</td>
<td align="right">386,941</td>
<td align="right">5,899,017</td>
<td align="right">1,424.5%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_NONE</td>
<td align="right">811,102</td>
<td align="right">11,653,082</td>
<td align="right">1,336.7%</td>
</tr>
<tr>
<td align="left">_BUILD_MAP</td>
<td align="right">18,632</td>
<td align="right">209,566</td>
<td align="right">1,024.8%</td>
</tr>
<tr>
<td align="left">_ERROR_POP_N</td>
<td align="right">52,074</td>
<td align="right">556,499</td>
<td align="right">968.7%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_INLINE</td>
<td align="right">373,877</td>
<td align="right">3,855,892</td>
<td align="right">931.3%</td>
</tr>
<tr>
<td align="left">_COPY</td>
<td align="right">1,423,375</td>
<td align="right">12,469,769</td>
<td align="right">776.1%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_FAST</td>
<td align="right">250,338</td>
<td align="right">2,000,742</td>
<td align="right">699.2%</td>
</tr>
<tr>
<td align="left">_DEOPT</td>
<td align="right">635,494</td>
<td align="right">4,811,156</td>
<td align="right">657.1%</td>
</tr>
<tr>
<td align="left">_CALL_ISINSTANCE</td>
<td align="right">3,163,272</td>
<td align="right">22,641,506</td>
<td align="right">615.8%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_UNICODE</td>
<td align="right">140,186</td>
<td align="right">972,915</td>
<td align="right">594.0%</td>
</tr>
<tr>
<td align="left">_CHECK_ATTR_WITH_HINT</td>
<td align="right">9,373</td>
<td align="right">63,964</td>
<td align="right">582.4%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_3</td>
<td align="right">11,340</td>
<td align="right">60,995</td>
<td align="right">437.9%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_WITH_NULL</td>
<td align="right">5,849,587</td>
<td align="right">30,608,947</td>
<td align="right">423.3%</td>
</tr>
<tr>
<td align="left">_DICT_MERGE</td>
<td align="right">12,596</td>
<td align="right">65,849</td>
<td align="right">422.8%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION</td>
<td align="right">5,790,595</td>
<td align="right">26,644,044</td>
<td align="right">360.1%</td>
</tr>
<tr>
<td align="left">_TO_BOOL</td>
<td align="right">2,312,690</td>
<td align="right">10,451,814</td>
<td align="right">351.9%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_DICT</td>
<td align="right">1,818,915</td>
<td align="right">7,964,006</td>
<td align="right">337.8%</td>
</tr>
<tr>
<td align="left">_BUILD_TUPLE</td>
<td align="right">1,546,893</td>
<td align="right">6,696,589</td>
<td align="right">332.9%</td>
</tr>
<tr>
<td align="left">_POP_TOP_LOAD_CONST_INLINE_BORROW</td>
<td align="right">12,180</td>
<td align="right">47,110</td>
<td align="right">286.8%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE</td>
<td align="right">4,647,644</td>
<td align="right">16,630,333</td>
<td align="right">257.8%</td>
</tr>
<tr>
<td align="left">_CREATE_INIT_FRAME</td>
<td align="right">4,179</td>
<td align="right">14,854</td>
<td align="right">255.4%</td>
</tr>
<tr>
<td align="left">_CHECK_ATTR_CLASS</td>
<td align="right">299,654</td>
<td align="right">1,058,337</td>
<td align="right">253.2%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_TUPLE_INT</td>
<td align="right">2,899</td>
<td align="right">10,228</td>
<td align="right">252.8%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_TRUE_POP</td>
<td align="right">5,825,270</td>
<td align="right">20,111,341</td>
<td align="right">245.2%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_BOOL</td>
<td align="right">9,129,024</td>
<td align="right">30,164,266</td>
<td align="right">230.4%</td>
</tr>
<tr>
<td align="left">_CHECK_MANAGED_OBJECT_HAS_VALUES</td>
<td align="right">8,639,999</td>
<td align="right">27,678,517</td>
<td align="right">220.4%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_INSTANCE_VALUE_0</td>
<td align="right">8,634,182</td>
<td align="right">27,218,245</td>
<td align="right">215.2%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_WITH_HINT</td>
<td align="right">9,373</td>
<td align="right">29,239</td>
<td align="right">211.9%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_NOT_NONE_POP</td>
<td align="right">705,064</td>
<td align="right">2,168,792</td>
<td align="right">207.6%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_0</td>
<td align="right">28,914,769</td>
<td align="right">85,535,701</td>
<td align="right">195.8%</td>
</tr>
<tr>
<td align="left">_STORE_ATTR</td>
<td align="right">802,652</td>
<td align="right">2,332,602</td>
<td align="right">190.6%</td>
</tr>
<tr>
<td align="left">_GUARD_DORV_NO_DICT</td>
<td align="right">140,842</td>
<td align="right">380,519</td>
<td align="right">170.2%</td>
</tr>
<tr>
<td align="left">_STORE_ATTR_INSTANCE_VALUE</td>
<td align="right">140,842</td>
<td align="right">380,519</td>
<td align="right">170.2%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_NONDESCRIPTOR_WITH_VALUES</td>
<td align="right">1,266,945</td>
<td align="right">3,311,918</td>
<td align="right">161.4%</td>
</tr>
<tr>
<td align="left">_REPLACE_WITH_TRUE</td>
<td align="right">59,814</td>
<td align="right">138,015</td>
<td align="right">130.7%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_FALSE_POP</td>
<td align="right">12,375,876</td>
<td align="right">27,714,627</td>
<td align="right">123.9%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_CLASS_0</td>
<td align="right">293,400</td>
<td align="right">641,671</td>
<td align="right">118.7%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_1</td>
<td align="right">45,963,349</td>
<td align="right">87,451,827</td>
<td align="right">90.3%</td>
</tr>
<tr>
<td align="left">_CALL_LEN</td>
<td align="right">100,531</td>
<td align="right">190,980</td>
<td align="right">90.0%</td>
</tr>
<tr>
<td align="left">_UNARY_NOT</td>
<td align="right">2,072</td>
<td align="right">332</td>
<td align="right">-84.0%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP</td>
<td align="right">335,789</td>
<td align="right">614,979</td>
<td align="right">83.1%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_FAST</td>
<td align="right">2,073,226</td>
<td align="right">3,773,651</td>
<td align="right">82.0%</td>
</tr>
<tr>
<td align="left">_GUARD_TYPE_VERSION</td>
<td align="right">99,800,690</td>
<td align="right">181,048,615</td>
<td align="right">81.4%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_FAST_WITH_KEYWORDS</td>
<td align="right">221,497</td>
<td align="right">397,312</td>
<td align="right">79.4%</td>
</tr>
<tr>
<td align="left">_GUARD_NOS_INT</td>
<td align="right">372,128</td>
<td align="right">621,276</td>
<td align="right">67.0%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_SLOT_0</td>
<td align="right">2,596,589</td>
<td align="right">4,204,731</td>
<td align="right">61.9%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_ADD_INT</td>
<td align="right">299,320</td>
<td align="right">484,476</td>
<td align="right">61.9%</td>
</tr>
<tr>
<td align="left">_MAP_ADD</td>
<td align="right">106,817</td>
<td align="right">43,059</td>
<td align="right">-59.7%</td>
</tr>
<tr>
<td align="left">_CHECK_CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">12,601</td>
<td align="right">20,120</td>
<td align="right">59.7%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_BOUND_METHOD_EXACT_ARGS</td>
<td align="right">12,601</td>
<td align="right">20,120</td>
<td align="right">59.7%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP_SET</td>
<td align="right">108,303</td>
<td align="right">44,571</td>
<td align="right">-58.8%</td>
</tr>
<tr>
<td align="left">_EXIT_TRACE</td>
<td align="right">234,966,732</td>
<td align="right">363,000,397</td>
<td align="right">54.5%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_CLASS</td>
<td align="right">9,468</td>
<td align="right">14,403</td>
<td align="right">52.1%</td>
</tr>
<tr>
<td align="left">_CALL_LIST_APPEND</td>
<td align="right">95,854</td>
<td align="right">144,676</td>
<td align="right">50.9%</td>
</tr>
<tr>
<td align="left">_LOAD_CONST_INLINE_BORROW</td>
<td align="right">50,548,099</td>
<td align="right">76,235,290</td>
<td align="right">50.8%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_INPLACE_ADD_UNICODE</td>
<td align="right">412</td>
<td align="right">617</td>
<td align="right">49.8%</td>
</tr>
<tr>
<td align="left">_START_EXECUTOR</td>
<td align="right">292,102,512</td>
<td align="right">431,724,544</td>
<td align="right">47.8%</td>
</tr>
<tr>
<td align="left">_GUARD_KEYS_VERSION</td>
<td align="right">9,102,367</td>
<td align="right">13,444,935</td>
<td align="right">47.7%</td>
</tr>
<tr>
<td align="left">_GUARD_DORV_VALUES_INST_ATTR_FROM_DICT</td>
<td align="right">9,236,523</td>
<td align="right">13,577,715</td>
<td align="right">47.0%</td>
</tr>
<tr>
<td align="left">_BINARY_SLICE</td>
<td align="right">119,727</td>
<td align="right">175,942</td>
<td align="right">47.0%</td>
</tr>
<tr>
<td align="left">_MAKE_WARM</td>
<td align="right">296,961,218</td>
<td align="right">435,991,304</td>
<td align="right">46.8%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_INT</td>
<td align="right">432,561</td>
<td align="right">626,937</td>
<td align="right">44.9%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_5</td>
<td align="right">5,794,285</td>
<td align="right">8,250,915</td>
<td align="right">42.4%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR</td>
<td align="right">126,199</td>
<td align="right">73,806</td>
<td align="right">-41.5%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_NO_DICT</td>
<td align="right">4,615,072</td>
<td align="right">6,524,588</td>
<td align="right">41.4%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY</td>
<td align="right">144,028,026</td>
<td align="right">203,330,739</td>
<td align="right">41.2%</td>
</tr>
<tr>
<td align="left">_TIER2_RESUME_CHECK</td>
<td align="right">26,268,788</td>
<td align="right">16,108,196</td>
<td align="right">-38.7%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_STR</td>
<td align="right">156,740</td>
<td align="right">214,683</td>
<td align="right">37.0%</td>
</tr>
<tr>
<td align="left">_SET_IP</td>
<td align="right">205,755,243</td>
<td align="right">278,321,885</td>
<td align="right">35.3%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_4</td>
<td align="right">8,009,271</td>
<td align="right">10,797,164</td>
<td align="right">34.8%</td>
</tr>
<tr>
<td align="left">_CHECK_AND_ALLOCATE_OBJECT</td>
<td align="right">62,803</td>
<td align="right">41,062</td>
<td align="right">-34.6%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_1</td>
<td align="right">2,091,836</td>
<td align="right">2,806,934</td>
<td align="right">34.2%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR</td>
<td align="right">76,881,768</td>
<td align="right">101,532,474</td>
<td align="right">32.1%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_0</td>
<td align="right">291,680</td>
<td align="right">382,825</td>
<td align="right">31.2%</td>
</tr>
<tr>
<td align="left">_SWAP</td>
<td align="right">156,468</td>
<td align="right">107,756</td>
<td align="right">-31.1%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_METHOD_WITH_VALUES</td>
<td align="right">7,782,498</td>
<td align="right">10,132,357</td>
<td align="right">30.2%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_NOARGS</td>
<td align="right">526,547</td>
<td align="right">670,947</td>
<td align="right">27.4%</td>
</tr>
<tr>
<td align="left">_CALL_NON_PY_GENERAL</td>
<td align="right">1,173,092</td>
<td align="right">1,487,924</td>
<td align="right">26.8%</td>
</tr>
<tr>
<td align="left">_CHECK_IS_NOT_PY_CALLABLE</td>
<td align="right">1,173,092</td>
<td align="right">1,487,924</td>
<td align="right">26.8%</td>
</tr>
<tr>
<td align="left">_POP_TOP</td>
<td align="right">56,131,385</td>
<td align="right">70,078,106</td>
<td align="right">24.8%</td>
</tr>
<tr>
<td align="left">_GUARD_BOTH_INT</td>
<td align="right">356,706</td>
<td align="right">439,978</td>
<td align="right">23.3%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_LIST</td>
<td align="right">13,998</td>
<td align="right">17,121</td>
<td align="right">22.3%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_3</td>
<td align="right">6,785,412</td>
<td align="right">8,290,811</td>
<td align="right">22.2%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_0</td>
<td align="right">1,346,603</td>
<td align="right">1,066,820</td>
<td align="right">-20.8%</td>
</tr>
<tr>
<td align="left">_PY_FRAME_GENERAL</td>
<td align="right">2,679,176</td>
<td align="right">3,215,690</td>
<td align="right">20.0%</td>
</tr>
<tr>
<td align="left">_PUSH_NULL</td>
<td align="right">1,277,963</td>
<td align="right">1,524,184</td>
<td align="right">19.3%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_1</td>
<td align="right">1,161,143</td>
<td align="right">1,382,786</td>
<td align="right">19.1%</td>
</tr>
<tr>
<td align="left">_SAVE_RETURN_OFFSET</td>
<td align="right">40,963,241</td>
<td align="right">48,776,478</td>
<td align="right">19.1%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_TUPLE</td>
<td align="right">53,975,794</td>
<td align="right">44,066,598</td>
<td align="right">-18.4%</td>
</tr>
<tr>
<td align="left">_BINARY_OP</td>
<td align="right">1,502,931</td>
<td align="right">1,256,584</td>
<td align="right">-16.4%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_3</td>
<td align="right">10,449,948</td>
<td align="right">12,095,326</td>
<td align="right">15.7%</td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE</td>
<td align="right">35,908,070</td>
<td align="right">41,491,286</td>
<td align="right">15.5%</td>
</tr>
<tr>
<td align="left">_COMPARE_OP_STR</td>
<td align="right">139,320</td>
<td align="right">158,492</td>
<td align="right">13.8%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_2</td>
<td align="right">41,866,247</td>
<td align="right">47,469,510</td>
<td align="right">13.4%</td>
</tr>
<tr>
<td align="left">_PUSH_FRAME</td>
<td align="right">56,448,212</td>
<td align="right">63,356,797</td>
<td align="right">12.2%</td>
</tr>
<tr>
<td align="left">_DYNAMIC_EXIT</td>
<td align="right">56,448,212</td>
<td align="right">63,356,492</td>
<td align="right">12.2%</td>
</tr>
<tr>
<td align="left">_JUMP_TO_TOP</td>
<td align="right">4,858,706</td>
<td align="right">4,266,760</td>
<td align="right">-12.2%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_TUPLE</td>
<td align="right">685,182</td>
<td align="right">609,431</td>
<td align="right">-11.1%</td>
</tr>
<tr>
<td align="left">_CALL_KW_NON_PY</td>
<td align="right">37,465</td>
<td align="right">41,366</td>
<td align="right">10.4%</td>
</tr>
<tr>
<td align="left">_CHECK_IS_NOT_PY_CALLABLE_KW</td>
<td align="right">37,465</td>
<td align="right">41,366</td>
<td align="right">10.4%</td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_SLOT_1</td>
<td align="right">490,085</td>
<td align="right">540,265</td>
<td align="right">10.2%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_6</td>
<td align="right">886,050</td>
<td align="right">802,236</td>
<td align="right">-9.5%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION_KW</td>
<td align="right">2,306,327</td>
<td align="right">2,095,752</td>
<td align="right">-9.1%</td>
</tr>
<tr>
<td align="left">_PY_FRAME_KW</td>
<td align="right">2,306,327</td>
<td align="right">2,095,752</td>
<td align="right">-9.1%</td>
</tr>
<tr>
<td align="left">_GUARD_IS_NONE_POP</td>
<td align="right">1,816,842</td>
<td align="right">1,981,402</td>
<td align="right">9.1%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_7</td>
<td align="right">752,238</td>
<td align="right">687,786</td>
<td align="right">-8.6%</td>
</tr>
<tr>
<td align="left">_LIST_APPEND</td>
<td align="right">492,717</td>
<td align="right">451,326</td>
<td align="right">-8.4%</td>
</tr>
<tr>
<td align="left">_CHECK_VALIDITY_AND_SET_IP</td>
<td align="right">60,082,003</td>
<td align="right">64,632,858</td>
<td align="right">7.6%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_O</td>
<td align="right">730,695</td>
<td align="right">676,086</td>
<td align="right">-7.5%</td>
</tr>
<tr>
<td align="left">_CONTAINS_OP_DICT</td>
<td align="right">5,057,780</td>
<td align="right">4,688,530</td>
<td align="right">-7.3%</td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_1</td>
<td align="right">34,523,718</td>
<td align="right">37,000,650</td>
<td align="right">7.2%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_RANGE</td>
<td align="right">347,112</td>
<td align="right">322,602</td>
<td align="right">-7.1%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_RANGE</td>
<td align="right">347,112</td>
<td align="right">322,602</td>
<td align="right">-7.1%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_0</td>
<td align="right">3,092,730</td>
<td align="right">2,877,471</td>
<td align="right">-7.0%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_VERSION</td>
<td align="right">38,235,977</td>
<td align="right">40,869,095</td>
<td align="right">6.9%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_RANGE</td>
<td align="right">339,690</td>
<td align="right">317,090</td>
<td align="right">-6.7%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR_DICT</td>
<td align="right">1,606,438</td>
<td align="right">1,501,595</td>
<td align="right">-6.5%</td>
</tr>
<tr>
<td align="left">_FOR_ITER_TIER_TWO</td>
<td align="right">4,716,477</td>
<td align="right">4,423,123</td>
<td align="right">-6.2%</td>
</tr>
<tr>
<td align="left">_CHECK_FUNCTION_EXACT_ARGS</td>
<td align="right">35,561,336</td>
<td align="right">37,753,659</td>
<td align="right">6.2%</td>
</tr>
<tr>
<td align="left">_FOR_ITER_GEN_FRAME</td>
<td align="right">15,391,010</td>
<td align="right">14,478,327</td>
<td align="right">-5.9%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_STR_INT</td>
<td align="right">896,669</td>
<td align="right">849,220</td>
<td align="right">-5.3%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_5</td>
<td align="right">2,836,398</td>
<td align="right">2,687,655</td>
<td align="right">-5.2%</td>
</tr>
<tr>
<td align="left">_STORE_FAST</td>
<td align="right">2,946,349</td>
<td align="right">2,802,946</td>
<td align="right">-4.9%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_4</td>
<td align="right">5,750,418</td>
<td align="right">6,028,358</td>
<td align="right">4.8%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_TUPLE</td>
<td align="right">5,468,954</td>
<td align="right">5,213,827</td>
<td align="right">-4.7%</td>
</tr>
<tr>
<td align="left">_STORE_FAST_2</td>
<td align="right">34,660,446</td>
<td align="right">36,194,153</td>
<td align="right">4.4%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_6</td>
<td align="right">1,164,936</td>
<td align="right">1,215,304</td>
<td align="right">4.3%</td>
</tr>
<tr>
<td align="left">_GET_ITER</td>
<td align="right">33,786,565</td>
<td align="right">34,968,901</td>
<td align="right">3.5%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_INIT_CALL</td>
<td align="right">89,782</td>
<td align="right">87,138</td>
<td align="right">-2.9%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_7</td>
<td align="right">304,397</td>
<td align="right">313,263</td>
<td align="right">2.9%</td>
</tr>
<tr>
<td align="left">_BINARY_SUBSCR_CHECK_FUNC</td>
<td align="right">89,782</td>
<td align="right">87,243</td>
<td align="right">-2.8%</td>
</tr>
<tr>
<td align="left">_TO_BOOL_INT</td>
<td align="right">494,618</td>
<td align="right">507,407</td>
<td align="right">2.6%</td>
</tr>
<tr>
<td align="left">_ITER_CHECK_LIST</td>
<td align="right">70,325,727</td>
<td align="right">71,969,502</td>
<td align="right">2.3%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST</td>
<td align="right">2,617,941</td>
<td align="right">2,559,220</td>
<td align="right">-2.2%</td>
</tr>
<tr>
<td align="left">_CALL_METHOD_DESCRIPTOR_FAST_WITH_KEYWORDS</td>
<td align="right">2,368,713</td>
<td align="right">2,418,760</td>
<td align="right">2.1%</td>
</tr>
<tr>
<td align="left">_CHECK_PERIODIC</td>
<td align="right">75,025,129</td>
<td align="right">76,227,913</td>
<td align="right">1.6%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR_LIST_INT</td>
<td align="right">16,317</td>
<td align="right">16,557</td>
<td align="right">1.5%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_TUPLE</td>
<td align="right">22,927,214</td>
<td align="right">22,628,232</td>
<td align="right">-1.3%</td>
</tr>
<tr>
<td align="left">_BUILD_LIST</td>
<td align="right">1,242,925</td>
<td align="right">1,234,130</td>
<td align="right">-0.7%</td>
</tr>
<tr>
<td align="left">_GUARD_NOT_EXHAUSTED_LIST</td>
<td align="right">56,081,892</td>
<td align="right">55,770,542</td>
<td align="right">-0.6%</td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_TWO_TUPLE</td>
<td align="right">2,437,797</td>
<td align="right">2,450,477</td>
<td align="right">0.5%</td>
</tr>
<tr>
<td align="left">_BINARY_OP_SUBTRACT_INT</td>
<td align="right">53,491</td>
<td align="right">53,268</td>
<td align="right">-0.4%</td>
</tr>
<tr>
<td align="left">_CALL_BUILTIN_O</td>
<td align="right">656,701</td>
<td align="right">658,493</td>
<td align="right">0.3%</td>
</tr>
<tr>
<td align="left">_ITER_NEXT_LIST</td>
<td align="right">37,105,006</td>
<td align="right">37,035,045</td>
<td align="right">-0.2%</td>
</tr>
<tr>
<td align="left">_STORE_SUBSCR</td>
<td align="right">180,703</td>
<td align="right">180,703</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_STORE_SLICE</td>
<td align="right">20,013</td>
<td align="right">20,013</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_SMALL_INT_2</td>
<td align="right">4,240</td>
<td align="right">4,240</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_GUARD_TOS_INT</td>
<td align="right">3,683</td>
<td align="right">3,683</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_LOAD_FAST_CHECK</td>
<td align="right">1,029</td>
<td align="right">1,029</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_UNARY_NEGATIVE</td>
<td align="right">94</td>
<td align="right">94</td>
<td align="right">0.0%</td>
</tr>
<tr>
<td align="left">_RESUME_CHECK</td>
<td align="right"></td>
<td align="right">57,645,094</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CALL_TYPE_1</td>
<td align="right"></td>
<td align="right">4,903,632</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_FORMAT_SIMPLE</td>
<td align="right"></td>
<td align="right">1,581,548</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CONVERT_VALUE</td>
<td align="right"></td>
<td align="right">1,577,726</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_BUILD_STRING</td>
<td align="right"></td>
<td align="right">790,774</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_ATTR_INSTANCE_VALUE_1</td>
<td align="right"></td>
<td align="right">413,532</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CALL_STR_1</td>
<td align="right"></td>
<td align="right">197,116</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_DEREF</td>
<td align="right"></td>
<td align="right">44,303</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_COPY_FREE_VARS</td>
<td align="right"></td>
<td align="right">36,373</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_SUPER_ATTR_ATTR</td>
<td align="right"></td>
<td align="right">24,479</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_LOAD_SPECIAL</td>
<td align="right"></td>
<td align="right">20,706</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE</td>
<td align="right"></td>
<td align="right">12,521</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_MAKE_CELL</td>
<td align="right"></td>
<td align="right">6,930</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_INIT_CALL_PY_EXACT_ARGS_4</td>
<td align="right"></td>
<td align="right">5,703</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_UNPACK_SEQUENCE_LIST</td>
<td align="right"></td>
<td align="right">1,911</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_CHECK_STACK_SPACE_OPERAND</td>
<td align="right"></td>
<td align="right">305</td>
<td align="right"></td>
</tr>
<tr>
<td align="left">_COMPARE_OP</td>
<td align="right"></td>
<td align="right">31</td>
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
<td align="right">673</td>
<td align="right">1,357</td>
<td align="right">101.6%</td>
</tr>
<tr>
<td align="left">CALL</td>
<td align="right">145</td>
<td align="right">238</td>
<td align="right">64.1%</td>
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
<td align="right">22,592</td>
<td align="right">22,592</td>
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
<td align="right">23</td>
<td align="right">23</td>
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
<td align="right">24</td>
<td align="right">24</td>
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
<td align="right">42</td>
<td align="right">42 / 0 !!</td>
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
<td align="right">42</td>
<td align="right">42 / 0 !!</td>
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
Stats gathered on: 2024-11-23
