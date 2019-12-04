import unittest

from implementation import evenly_divisible_values, evenly_divisible_values_concise


class Day2EvenDivisibleValuesTests(unittest.TestCase):
    def test_returns_correct_result_for_example_question(self):
        i = [
            (5, 9, 2, 8),
            (9, 4, 7, 3),
            (3, 8, 6, 5),
        ]
        expected = 9
        actual = evenly_divisible_values(i)
        self.assertEqual(expected, actual)

    def test_returns_3_when_three_rows_and_rows_have_equal_numbers(self):
        i = [
            (5, 9, 5, 2),
            (2, 2, 7, 5),
            (9, 7, 6, 9)
        ]
        expected = 3
        actual = evenly_divisible_values(i)
        self.assertEqual(expected, actual)

    def test_returns_correct_answer_if_1_is_in_rows(self):
        i = [
            (5, 1, 2, 8),
            (1, 4, 7, 3),
            (3, 8, 6, 1),
        ]
        expected = 23
        actual = evenly_divisible_values(i)
        self.assertEqual(expected, actual)

    def test_returns_0_if_no_numbers_divide_equally(self):
        i = [
            (4, 3, 7, 10),
            (18, 19, 20, 21),
            (5, 7, 3, 19),
        ]
        expected = 0
        actual = evenly_divisible_values(i)
        self.assertEqual(expected, actual)
