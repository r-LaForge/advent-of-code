import {
  digitsNeverDecrease,
  findMatchingPasswords,
  hasTwoAdjacentNumbers,
  isSixDigitNumber,
  matchesCriteria,
} from './find-matching-passwords';

describe('hasTwoAdjacentNumbers', () => {
  const testCases = [
    {input: 1, output: false},
    {input: 2, output: false},
    {input: 3, output: false},
    {input: 4, output: false},
    {input: 5, output: false},
    {input: 6, output: false},
    {input: 7, output: false},
    {input: 8, output: false},
    {input: 9, output: false},
    {input: 10, output: false},
    {input: 11, output: true},
    {input: 12, output: false},

    {input: 522, output: true},
    {input: 111111, output: true},
    {input: 222222, output: true},
    {input: 8338, output: true},
  ];

  testCases.forEach(t => {
    it('should correctly determine if the number has two of the same adjacent digit', () => {
      try {
        expect(hasTwoAdjacentNumbers(t.input)).toEqual(t.output);
      } catch (e) {
        fail(`failed on test: ${JSON.stringify(t)} > ${e}`);
      }
    });
  });
});

describe('digitsNeverDecrease', () => {
  const testCases = [
    {input: 1, output: true},
    {input: 2, output: true},
    {input: 3, output: true},
    {input: 4, output: true},
    {input: 5, output: true},
    {input: 6, output: true},
    {input: 7, output: true},
    {input: 8, output: true},
    {input: 9, output: true},
    {input: 10, output: false},
    {input: 11, output: true},
    {input: 12, output: true},

    {input: 522, output: false},
    {input: 111111, output: true},
    {input: 222222, output: true},
    {input: 8338, output: false},
  ];

  testCases.forEach(t => {
    it('should correctly determine if the number has two of the same adjacent digit', () => {
      try {
        expect(digitsNeverDecrease(t.input)).toEqual(t.output);
      } catch (e) {
        fail(`failed on test: ${JSON.stringify(t)} > ${e}`);
      }
    });
  });
});

describe('isSixDigitNumber', () => {
  const testCases = [
    {input: 1, output: false},
    {input: 2, output: false},
    {input: 3, output: false},
    {input: 4, output: false},
    {input: 5, output: false},
    {input: 6, output: false},
    {input: 7, output: false},
    {input: 8, output: false},
    {input: 9, output: false},
    {input: 10, output: false},
    {input: 11, output: false},
    {input: 12, output: false},

    {input: 522, output: false},
    {input: 111111, output: true},
    {input: 222222, output: true},
    {input: 8338, output: false},

    {input: 1111111, output: false},
    {input: 999999, output: true},
  ];

  testCases.forEach(t => {
    it('should correctly determine if the number has two of the same adjacent digit', () => {
      try {
        expect(isSixDigitNumber(t.input)).toEqual(t.output);
      } catch (e) {
        fail(`failed on test: ${JSON.stringify(t)} > ${e}`);
      }
    });
  });
});

describe('matchesCriteria', () => {
  const testCases = [
    {input: 1, output: false},
    {input: 2, output: false},
    {input: 3, output: false},
    {input: 4, output: false},
    {input: 5, output: false},
    {input: 6, output: false},
    {input: 7, output: false},
    {input: 8, output: false},
    {input: 9, output: false},
    {input: 10, output: false},
    {input: 11, output: false},
    {input: 12, output: false},

    {input: 522, output: false},
    {input: 111111, output: true},
    {input: 222222, output: true},
    {input: 8338, output: false},
    {input: 223450, output: false},
    {input: 123789, output: false},

    {input: 123445, output: true},

    // too big
    {input: 12344567890, output: false},

  ];

  testCases.forEach(t => {
    it('should correctly determine if the number has two of the same adjacent digit', () => {
      try {
        expect(matchesCriteria(t.input)).toEqual(t.output);
      } catch (e) {
        fail(`failed on test: ${JSON.stringify(t)} > ${e}`);
      }
    });
  });
});


describe('findMatchingPasswords', () => {
  it('should return 0 if min = max', () => {
    expect(findMatchingPasswords(111111, 111111)).toEqual(0);
  });

  it('should return 1 if min is 111110 and max is 111112', () => {
    expect(findMatchingPasswords(111110, 111112)).toEqual(1);
  });

  it('should return 1 if min is 111110 and max is 111119', () => {
    expect(findMatchingPasswords(111110, 111119)).toEqual(8);
  });

  it('should return  if min and max are 5 digit numbers', () => {
    expect(findMatchingPasswords(11111, 99999)).toEqual(0);
  });

  test('get advent answer', () => {
    const result = findMatchingPasswords(231832, 767346);
    expect(result).toBeDefined();
    console.log(`advent day 4 part 1 answer: ${result}`);
  });
});
