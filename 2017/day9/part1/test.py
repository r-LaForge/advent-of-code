import unittest

from implementation import clean, stream_processing


class Day9CleanTests(unittest.TestCase):
    def test_already_cleaned_returns_cleaned_value(self):
        i = '{}'
        expected = '{}'
        actual = clean(i)
        self.assertEqual(expected, actual)

    def test_already_cleaned_complex_returns_cleaned_value(self):
        i = '{{{}}}'
        expected = '{{{}}}'
        actual = clean(i)
        self.assertEqual(expected, actual)

    def test_removed_commas(self):
        i = '{{},{}}'
        expected = '{{}{}}'
        actual = clean(i)
        self.assertEqual(expected, actual)

    def test_complex_removed_commas(self):
        i = '{{{},{},{{}}}}'
        expected = '{{{}{}{{}}}}'
        actual = clean(i)
        self.assertEqual(expected, actual)

    def test_removes_all_garbage(self):
        i = '{<a>,<a>,<a>,<a>}'
        expected = '{}'
        actual = clean(i)
        self.assertEqual(expected, actual)

    def test_removes_nested_garbage_and_retrains_groups(self):
        i = '{{<ab>},{<ab>},{<ab>},{<ab>}}'
        expected = '{{}{}{}{}}'
        actual = clean(i)
        self.assertEqual(expected, actual)

    def test_removes_bangs_appropriately(self):
        i = '{{<!!>},{<!!>},{<!!>},{<!!>}}'
        expected = '{{}{}{}{}}'
        actual = clean(i)
        self.assertEqual(expected, actual)

    def test_removes_bangs_and_garbage(self):
        i = '{{<a!>},{<a!>},{<a!>},{<ab>}}'
        expected = '{{}}'
        actual = clean(i)
        self.assertEqual(expected, actual)

class Day9StreamProcessingTests(unittest.TestCase):
    def test_returns_1_for_single_group(self):
        expected = 1
        actual = stream_processing('{}')
        self.assertEqual(expected, actual)

    def test_returns_6_for_three_groups(self):
        expected = 6
        actual = stream_processing('{{{}}}')
        self.assertEqual(expected, actual)

    def test_returns_5_for_three_groups_with_commas(self):
        expected = 5
        actual = stream_processing('{{},{}}')
        self.assertEqual(expected, actual)

    def test_returns_16_for_group_assortment_with_commas(self):
        expected = 16
        actual = stream_processing('{{{},{},{{}}}}')
        self.assertEqual(expected, actual)

    def test_returns_1_when_garbage_contains_all_but_outer_group(self):
        expected = 1
        actual = stream_processing('{<{},{},{{}}>}')
        self.assertEqual(expected, actual)

    def test_returns_1_for_single_group_with_only_garbage_within(self):
        expected = 1
        actual = stream_processing('{<a>,<a>,<a>,<a>}')
        self.assertEqual(expected, actual)

    def test_returns_9_for_garbage_that_doesnt_cancel_groups(self):
        expected = 9
        actual = stream_processing('{{<a>},{<a>},{<a>},{<a>}}')
        self.assertEqual(expected, actual)

    def test_returns_3_with_garbage_and_bangs(self):
        expected = 3
        actual = stream_processing('{{<!>},{<!>},{<!>},{<a>}}')
        self.assertEqual(expected, actual)