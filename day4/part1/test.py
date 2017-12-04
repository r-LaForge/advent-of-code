import unittest

from implementation import high_entropy_passphrase

class Day4Part1Tests(unittest.TestCase):
    def test_returns_2_for_2_valid_passphrases(self):
        passphrases = [
            ['aa ''bb' 'cc' 'dd' 'ee'],
            ['aa', 'bb', 'cc', 'dd', 'aa'],
            ['aa', 'bb', 'cc', 'dd', 'aaa']
        ]
        expected = 2
        actual = high_entropy_passphrase(passphrases)
        self.assertEqual(expected, actual)
