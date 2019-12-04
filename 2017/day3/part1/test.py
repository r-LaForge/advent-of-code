import unittest

from implementation import _determine_square, _traverse, _manhattan_distance


class Day3Part1DetermineSquareTests(unittest.TestCase):

    def test_returns_4_and_81_when_given_50(self):
        expected_ring = 4
        expected_ring_value = 81
        actual_ring, actual_ring_value = _determine_square(50)
        self.assertEqual(expected_ring, actual_ring)
        self.assertEqual(expected_ring_value, actual_ring_value)

    def test_returns_3_and_49_when_given_49(self):
        expected_ring = 3
        expected_ring_value = 49
        actual_ring, actual_ring_value = _determine_square(49)
        self.assertEqual(expected_ring, actual_ring)
        self.assertEqual(expected_ring_value, actual_ring_value)


    def test_returns_5_and_121_when_given_82(self):
        expected_ring = 3
        expected_ring_value = 49
        actual_ring, actual_ring_value = _determine_square(49)
        self.assertEqual(expected_ring, actual_ring)
        self.assertEqual(expected_ring_value, actual_ring_value)

class Day3Part1TraverseTests(unittest.TestCase):

    def test_returns_coordinates_8_7_when_given_50_and_start_81(self):
        expected_coordinates = [8,7]
        actual_coordinates = _traverse(8, 81, 50)
        self.assertListEqual(expected_coordinates, actual_coordinates)

    def test_returns_coordinates_6_6_when_given_49_and_start_49(self):
        expected_coordinates = [6, 6]
        actual_coordinates = _traverse(6, 49, 49)
        self.assertListEqual(expected_coordinates, actual_coordinates)

    def test_returns_coordinates_0_0_when_given_101_start_121(self):
        expected_coordinates = [0, 0]
        actual_coordinates = _traverse(10, 121, 101)
        self.assertListEqual(expected_coordinates, actual_coordinates)

class Day3Part1ManhattanDistanceTests(unittest.TestCase):

    def test_returns_9_for_coords_10_9_and_5_5(self):
        expected = 9
        actual = _manhattan_distance([10, 9], [5,5])
        self.assertEqual(expected, actual)

    def test_returns_0_if_given_same_coordinates(self):
        expected = 0
        actual = _manhattan_distance([0,0], [0,0])
        self.assertEqual(expected, actual)

    def test_returns_3_for_coords_4_1_and_2_2(self):
        expected = 3
        actual = _manhattan_distance([4,1], [2,2])
        self.assertEqual(expected, actual)

    def test_returns_2_for_coords_2_4_and_2_2(self):
        expected = 2
        actual = _manhattan_distance([2,4], [2,2])
        self.assertEqual(expected, actual)