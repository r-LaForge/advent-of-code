import unittest

from implementation import twisty_maze


class Day5Tests(unittest.TestCase):

    def test_returns_5_steps_for_given_inpiut(self):
        i = [0, 3,  0,  1,  -3]
        expected = 5
        actual = twisty_maze(i)
        self.assertEqual(expected, actual)