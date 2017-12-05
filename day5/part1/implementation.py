from input import INPUT
import sys
sys.setrecursionlimit(451282)

def twisty_maze(i):
    """
    :param i: List of integers.
    :return:
    """
    index = 0
    num_steps = 0
    while index >= 0 and index < len(i):
        num_steps += 1
        new_index = i[index]
        i[index] += 1
        index = index + new_index
    return num_steps


if __name__ == '__main__':
    print twisty_maze(INPUT)