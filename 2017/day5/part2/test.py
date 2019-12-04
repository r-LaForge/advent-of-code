import unittest

from implementation import twisty_maze_2


class Day5Tests(unittest.TestCase):

    def test_returns_10_steps_for_given_inpiut(self):
        i = [0, 3,  0,  1,  -3]
        expected = 10
        actual = twisty_maze_2(i)
        self.assertEqual(expected, actual)