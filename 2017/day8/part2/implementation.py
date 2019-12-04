from input import INPUT

operations = {
    "inc": lambda a,b: a + b,
    "dec": lambda a,b: a - b,
}

comparisons = {
    "==": lambda a,b: a == b,
    "!=": lambda a,b: a != b,
    ">": lambda a,b: a > b,
    ">=": lambda a,b: a >= b,
    "<": lambda a,b: a < b,
    "<=": lambda a,b: a <= b,
}

def parse_instruction(instruction):
    """
    Parse the instruction to gets its contents.
    :param l: In the form
        change_reg, operator, change_value, if, comparison_reg, comparator, comparison_value
    :return: change_reg, op, change_val, comp_reg, comp, comp_value
    """
    s = instruction.split(' ')
    return s[0], s[1], s[2], s[4], s[5], s[6]

def heard_you_like_registers(i):
    """
    Solution to Advent Of Code 2017 day 8 part 1: https://adventofcode.com/2017/day/8
    :param i: (list[string]) -> List of instruction lines.
    :return: The value of the largest register upon completion.
    """
    registers = {}
    largest = 0
    for l in i:
        change_reg, op, change_val, comp_reg, comp, comp_value = parse_instruction(l)
        if comparisons[comp](registers.get(comp_reg, 0), int(comp_value)):
            registers[change_reg] = operations[op](registers.get(change_reg, 0), int(change_val))
            largest = max(registers[change_reg], largest)
    return largest

if __name__ == '__main__':
    print heard_you_like_registers(INPUT.split('\n'))
