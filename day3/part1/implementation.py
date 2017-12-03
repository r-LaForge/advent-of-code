import math


def _determine_square(i):
    """
    Determines the square the input is on as well as the maximum square for that ring.
    :param i: The input used to determine square number and max on that square.
    :return: ring_number,  total_on_ring.
    """
    ring_number = 0
    ring_max_value = 1
    while ring_max_value < i:
        ring_number = ring_number + 1
        ring_max_value += 8 * ring_number
    return ring_number, ring_max_value

def _traverse(max_coord, start_value, value_to_find):
    """
    Traverses from the bottom right of the square and around until it finds the coordinates of the given value.
    :param max_coord: (int) -> The starting x,y coordinate for the start_value
    :param start_value: (int) -> The value at the bottom-right of the square
    :param value_to_find: (int) -> The value to find the coordinates for
    :return: (list(int,int)) -> The coordinates of the value_to_find.
    """
    coordinates = [max_coord, max_coord]
    if start_value == value_to_find:
        return coordinates

    current_value = start_value
    # Move along the bottom of the square.
    while coordinates[0] > 0:
        coordinates[0] = coordinates[0] - 1
        current_value = current_value - 1
        if current_value == value_to_find:
            return coordinates

    # Move along the left side of the square
    while coordinates[1] > 0:
        coordinates[1] = coordinates[1] - 1
        current_value = current_value - 1
        if current_value == value_to_find:
            return coordinates

    # Move along the top of the square
    while coordinates[0] < max_coord:
        coordinates[0] = coordinates[0] + 1
        current_value = current_value - 1
        if current_value == value_to_find:
            return coordinates

    # Move along the right side of the square
    while coordinates[1] < max_coord:
        coordinates[1] = coordinates[1] + 1
        current_value = current_value - 1
        if current_value == value_to_find:
            return coordinates

    # Never found the value to find in that ring
    raise ValueError("Failed to find coordinates for {find} with start {start}".format(find=value_to_find,
                                                                                       start=start_value))

def _get_center_coordinates(max_coord):
    """
    Return the center coordinates for max_coord. If 4 this will be 2,2
    :param max_coord: The maximum value for the x and y positions.
    :return: (list[x,y]) -> The center coordinates.
    """
    center_coordinate = max_coord / 2
    if center_coordinate % 1 != 0:
        raise ValueError("Failed to find the center coordinates of {x},{y}. Not an odd length square."
                         .format(x=max_coord, y=max_coord))
    return [center_coordinate, center_coordinate]

def _manhattan_distance(coords1, coords2):
    """
    Returns the two-dimensional manhattan distance between coordinates 1 and 2.
    :param coords1: (iterable[x,y]) -> First set of coordinates
    :param coords2: (iterable[x,y]) -> Second set of coordinates
    :return: The two-dimensional Manhattan distance between coords1 and coords2
    """
    return abs(coords1[0] - coords2[0]) + abs(coords1[1] - coords2[1])

def spiral_memory(i):
    """
    Figures out the manhattan distance from the given positional input.
    For a better description, see: https://adventofcode.com/2017/day/3
    :param i: (int) - The number to use to determine the manhattan distance from the center.
    :return: The distance of the input from the center (1)
    """
    square, square_max_value = _determine_square(i)
    max_coord = 2 * square
    coordinates = _traverse(max_coord, square_max_value, i)
    center_coordinates = _get_center_coordinates(max_coord)
    return _manhattan_distance(coordinates, center_coordinates)

if __name__ == '__main__':
    i = 347991
    print spiral_memory(i)

