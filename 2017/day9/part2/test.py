import unittest

from implementation import garbage_counter


class Day9Tests(unittest.TestCase):
    def test_returns_0_for_empty_garbage(self):
        i = '<>'
        expected = 0
        actual = garbage_counter(i)
        self.assertEqual(expected, actual)

    def test_returns_17_for_random_characters(self):
        i = '<random characters>'
        expected = 17
        actual = garbage_counter(i)
        self.assertEqual(expected, actual)


    def test_returns_3_for_multi_garbage_opening_tag(self):
        i = '<<<<>'
        expected = 3
        actual = garbage_counter(i)
        self.assertEqual(expected, actual)

    def test_returns_2_chars_ang_ignores_bang(self):
        i = '<{!>}>'
        expected = 2
        actual = garbage_counter(i)
        self.assertEqual(expected, actual)

    def test_returns_0_and_ignores_bangs(self):
        i = '<!!>'
        expected = 0
        actual = garbage_counter(i)
        self.assertEqual(expected, actual)

    def test_returns_0_for_bang_with_multi_close_tag(self):
        i = '<!!!>>'
        expected = 0
        actual = garbage_counter(i)
        self.assertEqual(expected, actual)

    def test_returns_10(self):
        i = '<{o"i!a,<{i<a>'
        expected = 10
        actual = garbage_counter(i)
        self.assertEqual(expected, actual)