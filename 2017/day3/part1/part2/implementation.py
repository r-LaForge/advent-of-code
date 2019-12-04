UP = 0
DOWN = 1
LEFT = 2
RIGHT = 3


def _move_direction(coordinates, direction):
    """
    Return a new set of coordinates with the given movement done.
    Mutates the list passed in
    :param coordinates: (list[x,y]) ->  The current coordinates.
    :param direction: The direction to move
    :return: A new set of coordinates moved in the correct direction
    """
    if direction == UP:
        coordinates[0] = coordinates[0] - 1
    elif direction == DOWN:
        coordinates[0] = coordinates[0] + 1
    elif direction == LEFT:
        coordinates[1] = coordinates[1] - 1
    elif direction == RIGHT:
        coordinates[1] = coordinates[1] + 1
    else:
        raise ValueError("Invalid direction")
    return coordinates

def _calulate_adjacent(point_list, coords):
    """
    Calculates the position (x,y) value based on neighbors.
    Mutates param_list
    :param point_list: (list[]) -> The list to calculate the adjacent point from
    :param coords: (x,y) -> The coordinates to calculate adjacency value.
    :return: The point_list with the new value calculated at position coords.
    """
    if coords[0] >= len(point_list) or coords[1] >= len(point_list):
        raise ValueError("Coordinates out of bounds")

    value = 0
    # Calculate from left.
    if coords[0] > 0:
        value += point_list[coords[0]-1][coords[1]]

    # Calculate diagonal top-left
    if coords[0] > 0 and coords[1] > 0:
        value += point_list[coords[0]-1][coords[1]-1]

    # Calculate top
    if coords[1] > 0:
        value += point_list[coords[0]][coords[1] - 1]

    # Calculate diagonal top-right
    if coords[0] < len(point_list) - 1 and coords[1] > 0:
        value += point_list[coords[0] + 1][coords[1] - 1]

    # Calculate right
    if coords[0] < len(point_list) - 1:
        value += point_list[coords[0] + 1][coords[1]]

    # Calculate diagonal bottom-right
    if coords[0] < len(point_list) - 1 and coords[1] < len(point_list) - 1:
        value += point_list[coords[0]+1][coords[1]+1]

    # Calculate bottom
    if coords[1] < len(point_list) - 1:
        value += point_list[coords[0]][coords[1]+1]

    # Calculate bottom-left
    if coords[0] > 0 and coords[1] < len(point_list) - 1:
        value += point_list[coords[0]-1][coords[1]+1]

    point_list[coords[0]][coords[1]] = value
    return point_list

def spiral_stress_test(i):
    """
    https://adventofcode.com/2017/day/3
    :pram i: (int) -> The number to find the written number after.
    :return: The number calculated after the given number.
    """
    if i == 1:
        return 1
    start_list = [[1]]

    written = 1
    while written <= i:
        # Expand the list and move to the right one.
        current_coordinates = [len(start_list), len(start_list)]
        start_list = map(lambda l: [0] + l + [0], start_list)
        start_list = [[0] * len(start_list[0])] + start_list + [[0] * len(start_list[0])]
        _move_direction(current_coordinates, RIGHT)
        _calulate_adjacent(start_list, current_coordinates)

        # Move up
        while current_coordinates[0] > 0:
            _move_direction(current_coordinates, UP)
            _calulate_adjacent(start_list, current_coordinates)
            written = start_list[current_coordinates[0]][current_coordinates[1]]
            if written > i:
                return written


        # Move left
        while current_coordinates[1] > 0:
            _move_direction(current_coordinates, LEFT)
            _calulate_adjacent(start_list, current_coordinates)
            written = start_list[current_coordinates[0]][current_coordinates[1]]
            if written > i:
                return written

        # Move down
        while current_coordinates[0] < len(start_list) - 1:
            _move_direction(current_coordinates, DOWN)
            _calulate_adjacent(start_list, current_coordinates)
            written = start_list[current_coordinates[0]][current_coordinates[1]]
            if written > i:
                return written

        # Move right
        while current_coordinates[1] < len(start_list) - 1:
            _move_direction(current_coordinates, RIGHT)
            _calulate_adjacent(start_list, current_coordinates)
            written = start_list[current_coordinates[0]][current_coordinates[1]]
            if written > i:
                return written

        if current_coordinates[0] != len(start_list) - 1 or current_coordinates[1] != len(start_list) - 1:
            raise ValueError("Coordinates out of bounds")


if __name__ == '__main__':
    i = 347991
    print spiral_stress_test(i)