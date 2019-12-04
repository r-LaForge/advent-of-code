import {computeFuelForModuleMassesAndFuel} from './calculate-fuel';
import {ADVENT_DAY_2_PART_2_INPUT} from './test-input';

describe('calculateFuelForModuleMassesAndFuel', () => {
  test('should return 0 if given an empty array', () => {
    expect(computeFuelForModuleMassesAndFuel([])).toBe(0);
  });

  describe('for a single module mass', () => {
    const testCases = [
      {mass: 14, expected: 2},
      {mass: 1969, expected: 966},
      {mass: 100756, expected: 50346},
    ];

    testCases.forEach(t => {
      it('should correctly compute the required fuel', () => {
        try {
          expect(computeFuelForModuleMassesAndFuel([t.mass])).toEqual(t.expected);
        } catch (e) {
          fail(`failed on test: ${JSON.stringify(t)} > ${e}`);
        }
      });
    });
  });

  describe('for multiple masses', () => {
    it('should compute 51316 fuel when given modules with masses 12, 14, 1969, 100756', () => {
      expect(computeFuelForModuleMassesAndFuel([12, 14, 1969, 100756])).toEqual(51316);
    });
  });

  test('determine advent input', () => {
    const answer = computeFuelForModuleMassesAndFuel(ADVENT_DAY_2_PART_2_INPUT);
    expect(answer).toBeDefined();
    console.log(`advent day 1 part 2 answer: ${answer}`);
  });
});
