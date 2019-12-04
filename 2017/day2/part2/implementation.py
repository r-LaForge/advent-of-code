def evenly_divisible_values(i):
    """
    for each row, find the two numbers that evenly divide and divide them. Then add all of those results together
    :param i: (int[][]) -> Takes an iterator of iterators that produce numbers.
    :return: The sum of all of the even divisions in each row.
    """
    total = 0
    for row in i:
        total += _evenly_divisible_values_helper(row)
    return total


def _evenly_divisible_values_helper(row):
    """Get the result from a single row."""
    sorted_row = sorted(row)
    # We only need to search through half of the list.
    for index in range((len(sorted_row) / 2) + 1):
        divisor = sorted_row[index]
        # We start from the back of the list (the largest, and move our way back).
        for j in range(len(sorted_row) - 1, -1, -1):
            if index == j:
                break
            dividend = sorted_row[j]
            result = float(dividend) / float(divisor)
            if result < 1:
                break
            elif result % 1 == 0:
                # Found the numbers that can divide themselves. Add result to total.
                return result
    return 0

if __name__ == '__main__':
    i = """1640	590	93	958	73	1263	1405	1363	737	712	1501	390	68	1554	959	79
4209	128	131	2379	2568	2784	2133	145	3618	1274	3875	158	1506	3455	1621	3799
206	1951	2502	2697	2997	74	76	78	1534	81	2775	2059	3026	77	2600	3067
373	1661	94	102	2219	1967	1856	417	1594	75	100	2251	2200	1825	1291	1021
57	72	51	1101	1303	60	1227	421	970	1058	138	333	1320	1302	402	1210
4833	5427	179	3934	4533	5124	4832	2088	94	200	199	1114	4151	1795	208	3036
759	876	110	79	1656	1691	185	544	616	312	757	1712	92	97	1513	1683
1250	1186	284	107	1190	1233	573	1181	1041	655	132	547	395	146	119	515
505	1726	79	180	86	1941	1597	1785	1608	1692	968	1177	94	184	91	31
1366	2053	1820	1570	70	506	53	415	717	1263	82	366	74	1255	2020	1985
2365	5585	2285	4424	5560	3188	3764	187	88	223	1544	5023	4013	5236	214	196
1487	1305	1359	1615	6579	2623	4591	150	5030	188	146	4458	5724	5828	1960	221
3114	688	3110	334	1921	153	4083	131	2234	3556	3573	3764	127	919	3293	104
1008	78	1196	607	135	1409	296	475	915	157	1419	1304	153	423	163	704
235	4935	4249	3316	1202	221	1835	380	249	1108	1922	5607	4255	238	211	3973
1738	207	179	137	226	907	1468	1341	1582	1430	851	213	393	1727	1389	632"""
    rows = i.split('\n')
    formatted_rows = []
    for row in rows:
        formatted_row = row.split('\t')
        formatted_row = map(lambda x: int(x), formatted_row)
        formatted_rows.append(map(lambda x: int(x), row.split('\t')))

    print evenly_divisible_values(formatted_rows)
