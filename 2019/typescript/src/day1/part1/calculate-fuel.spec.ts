import {calculateFuelForModuleMasses} from './calculate-fuel';
import {ADVENT_INPUT} from './test-input';

describe('calculateFuelForModuleMasses', () => {
  test('should return 0 if given an empty array', () => {
    expect(calculateFuelForModuleMasses([])).toBe(0);
  });

  describe('for a single module mass', () => {
    const testCases = [
      {mass: 12, expected: 2},
      {mass: 14, expected: 2},
      {mass: 1969, expected: 654},
      {mass: 100756, expected: 33583},
    ];

    testCases.forEach(t => {
      it('should correctly compute the required fuel', () => {
        try {
          expect(calculateFuelForModuleMasses([t.mass])).toEqual(t.expected);
        } catch (e) {
          fail(`failed on test: ${JSON.stringify(t)} > ${e}`);
        }
      });
    });
  });

  describe('for multiple masses', () => {
    it('should compute fuel of 34241 when given modules with masses 12, 14, 1969, 100756', () => {
      expect(calculateFuelForModuleMasses([12, 14, 1969, 100756])).toEqual(34241);
    });
  });

  test('determine advent input', () => {
    const answer = calculateFuelForModuleMasses(ADVENT_INPUT);
    expect(answer).toBeDefined();
    console.log(`advent answer: ${answer}`);
  });
});
