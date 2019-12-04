import unittest

from implementation import inverse_captcha_clear

class Day1Tests(unittest.TestCase):

    def test_returns_correct_value_for_1212(self):
        input = '1212'
        expected = 6
        actual = inverse_captcha_clear(input)
        self.assertEqual(expected, actual)

    def test_returns_correct_value_for_1221(self):
        input = '1221'
        expected = 0
        actual = inverse_captcha_clear(input)
        self.assertEqual(expected, actual)

    def test_returns_correct_value_for_123425(self):
        input = '123425'
        expected = 4
        actual = inverse_captcha_clear(input)
        self.assertEqual(expected, actual)

    def test_returns_correct_value_for_123123(self):
        input = '123123'
        expected = 12
        actual = inverse_captcha_clear(input)
        self.assertEqual(expected, actual)

    def test_returns_correct_value_for_12131415(self):
        input = '12131415'
        expected = 4
        actual = inverse_captcha_clear(input)
        self.assertEqual(expected, actual)

