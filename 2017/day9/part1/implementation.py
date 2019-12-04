# For advent of code day 9: https://adventofcode.com/2017/day/9
import re

def clean(i):
    """
    Takes in the stream processing input, and returns a cleaned input with only opening '{' and closing '}'.
    :param i: (str) -> The input string.
    :return: Cleaned input string.
    """
    i = re.sub(r'!.', '', i)
    i = re.sub(r'<[^>]*>', '', i)
    i = re.sub(r',', '', i)
    return i



def stream_processing(i):
    """
    Solution to stream processing problem: https://adventofcode.com/2017/day/9
    :param i:
    :return: The total score (sum of group depths starting at 1).
    """
    i = clean(i)
    total = 0
    depth = 0
    for c in i:
        if c == '{':
            depth += 1
        elif c == '}':
            total += depth
            depth -= 1
        else:
            raise ValueError("Got a bad character: {bad_char}".format(bad_char=c))
    return total

if __name__ == '__main__':
    i = open("../input.txt", "r").read()
    print stream_processing(i)