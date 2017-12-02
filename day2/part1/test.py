import unittest

from day2.part1.implementation import checksum_clear


class Day2Tests(unittest.TestCase):
    def test_initial_input_returns_correct_checksum(self):
        i = [(5, 1, 9, 5), (7, 5, 3), (2, 4, 6, 8,)]
        expected = 18
        actual = checksum_clear(i)
        self.assertEqual(expected, actual)

    def test_returns_correct_checksum_for_longer_row(self):
        i = [
            (1640, 590, 93, 958, 73, 1263, 1405, 1363, 737, 712, 1501, 390, 68, 1554, 959, 79),  # 1572
            (4209, 128, 131, 2379, 2568, 2784, 2133, 145, 3618, 1274, 3875, 158, 1506, 3455, 1621, 3799),  # 4081
            (206, 1951, 2502, 2697, 2997, 74, 76, 78, 1534, 81, 2775, 2059, 3026, 77, 2600, 3067)  # 2993
        ]
        expected = 8646
        actual = checksum_clear(i)
        self.assertEqual(expected, actual)
