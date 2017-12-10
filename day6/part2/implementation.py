def memory_reallocation_part2(i):
    """
    Takes in a list and determines how many reallocations are done before we see a duplicate pattern.
    https://adventofcode.com/2017/day/6
    :param i: list of ints
    :return: The number of reallocations we went through before seeing the same pattern.
    """
    seen_before = []
    steps = 0
    while i not in seen_before:
        seen_before.append([val for val in i])
        steps += 1
        index, value = max(enumerate(i), key=lambda p: p[1])
        i[index] = 0
        while value > 0:
            index = (index + 1 + len(i)) % len(i)
            value -= 1
            i[index] += 1

    # At this point, it was seen once. Determine when it was seen again.
    seen_before = []
    steps = 0
    while i not in seen_before:
        seen_before.append([val for val in i])
        steps += 1
        index, value = max(enumerate(i), key=lambda p: p[1])
        i[index] = 0
        while value > 0:
            index = (index + 1 + len(i)) % len(i)
            value -= 1
            i[index] += 1
    return steps



if __name__ == '__main__':
    i = [2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14]
    print memory_reallocation_part2(i)