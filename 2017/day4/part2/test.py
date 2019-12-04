import unittest

from implementation import high_entropy_passphrase_annagram


class Day4Part1Tests(unittest.TestCase):
    def test_returns_3_for_3_valid_passphrases(self):
        passphrases = [
            ['abcde', 'fghij'],
            ['abcde', 'xyz', 'ecdab'],
            ['a', 'ab', 'abc', 'abd', 'abf', 'abj'],
            ['iiii', 'oiii', 'ooii', 'oooi', 'oooo'],
            ['oiii', 'ioii', 'iioi', 'iiio']
        ]
        expected = 3
        actual = high_entropy_passphrase_annagram(passphrases)
        self.assertEqual(expected, actual)
