from input import INPUT

def high_entropy_passphrase_annagram(i):
    """
    Returns the number of passphrases in i that are valid.
    Passphrases are valid if they contain no sets of annagrams.
    Words are assumed to be lowercase letters.
    :param i: (list[[string]]) -> The list of passphrases
    :return: The number of passphrases that are valid.
    """
    total = 0
    for passphrase in i:
        sorted_words = map(lambda p: ''.join(sorted(p)), passphrase)
        if len(sorted_words) == len(set(sorted_words)):
            total += 1
    return total

if __name__ == '__main__':
    passphrases = INPUT.split('\n')
    passphrases_list = map(lambda p: p.split(' '), passphrases)
    print high_entropy_passphrase_annagram(passphrases_list)