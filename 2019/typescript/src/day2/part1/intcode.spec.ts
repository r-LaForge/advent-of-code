import {intCodeProgram} from './intcode';
import {ADVENT_DAY_2_PART_1_INPUT} from './test-input';

describe('intCodeProgram', () => {
  test('the example input array matches expected', () => {
    const input = [1, 9, 10, 3,
      2, 3, 11, 0,
      99,
      30, 40, 50,
    ];

    const expected = [
      3500, 9, 10, 70,
      2, 3, 11, 0,
      99,
      30, 40, 50,
    ];

    expect(intCodeProgram(input)).toEqual(expected);
  });

  const testCases = [
    {input: [1, 0, 0, 0, 99], output: [2, 0, 0, 0, 99]},
    {input: [2, 3, 0, 3, 99], output: [2, 3, 0, 6, 99]},
    {input: [2, 4, 4, 5, 99, 0], output: [2, 4, 4, 5, 99, 9801]},
    {input: [1, 1, 1, 4, 99, 5, 6, 0, 99], output: [30, 1, 1, 4, 2, 5, 6, 0, 99]},
  ];

  testCases.forEach(t => {
    it('should compute the correct intCode result', () => {
      expect(intCodeProgram(t.input)).toEqual(t.output);
    });
  });

  test('get advent result', () => {
    const result = intCodeProgram(ADVENT_DAY_2_PART_1_INPUT);
    expect(result).toBeDefined();
    console.log(`advent day 2 part 1: ${result}`);
  });
});
