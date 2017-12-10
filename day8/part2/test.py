import unittest

from implementation import heard_you_like_registers


class Day8Part2Tests(unittest.TestCase):
    def test_returns_10_for_test_input(self):
        i = ['b inc 5 if a > 1',
             'a inc 1 if b < 5',
             'c dec -10 if a >= 1',
             'c inc -20 if c == 10']

        expected = 10
        actual = heard_you_like_registers(i)
        self.assertEqual(expected, actual)
