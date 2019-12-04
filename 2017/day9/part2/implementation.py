import re

def garbage_counter(i):
    """
    Returns the number of characters in the garbage.
    Part 2 for advent of code day 9 https://adventofcode.com/2017/day/9
    :param i:
    :return: The number of characters in the garbage.
    """
    total = 0
    i = re.sub(r'!.', '', i)
    in_garbage = False

    for c in i:
        if c == '<':
            if in_garbage:
                total += 1
            else:
                in_garbage = True
        elif c == '>':
            in_garbage = False
        elif in_garbage:
            total += 1
    return total


if __name__ == '__main__':
    i = open("../input.txt", "r").read()
    print garbage_counter(i)
