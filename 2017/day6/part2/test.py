import unittest
from implementation import memory_reallocation_part2

class Day6Tests(unittest.TestCase):

    def test_should_return_4_for_example_case(self):
        i = [0, 2, 7, 0]
        expected = 4
        actual = memory_reallocation_part2(i)
        self.assertEqual(expected, actual)