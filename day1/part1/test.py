import unittest

from implementation import inverse_captcha_clear

class Day1Tests(unittest.TestCase):

    def test_returns_correct_value_for_1122(self):
        input = '1122'
        expected = 3
        actual = inverse_captcha_clear(input)
        self.assertEqual(expected, actual)

    def test_returns_correct_value_for_1111(self):
        input = '1111'
        expected = 4
        actual = inverse_captcha_clear(input)
        self.assertEqual(expected, actual)

    def test_returns_correct_value_for_1234(self):
        input = '1234'
        expected = 0
        actual = inverse_captcha_clear(input)
        self.assertEqual(expected, actual)

    def test_returns_correct_value_for_91212129(self):
        input = '91212129'
        expected = 9
        actual = inverse_captcha_clear(input)
        self.assertEqual(expected, actual)

