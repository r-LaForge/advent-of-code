// https://adventofcode.com/2019/day/2#part2
/* By replacing the first two inputs, find the value that gives us the answer */
// output found in position 0 after function executes

import {ADVENT_DAY_2_PART_1_INPUT} from '../part1/test-input';
import {findInputForOutputGreedy} from './find-input-for-output';
import {ADVENT_DAY_2_PART_2_INPUT} from './test-input';

describe('findInputsForOutput', () => {
  const testCases = [
    {program: [1, Infinity, Infinity, 0, 99], desiredOutput: 2, i1: 0, i2: 0},
    {program: [1, Infinity, Infinity, 0, 99], desiredOutput: 2, i1: 0, i2: 0},
    {program: [1, Infinity, Infinity, 3, 2, 3, 11, 0, 99, 30, 40, 50], desiredOutput: 3500, i1: 9, i2: 10},
    {program: ADVENT_DAY_2_PART_1_INPUT, desiredOutput: 3085697, i1: 12, i2: 2},
  ];

  testCases.forEach(t => {
    test('greedy algorithm should get the right answer', () => {
      const [i1, i2] = findInputForOutputGreedy(t.program, t.desiredOutput);
      try {
        expect(i1).toEqual(t.i1);
        expect(i2).toEqual(t.i2);
      } catch (e) {
        fail(`failed on test: ${JSON.stringify(t)} > ${e}`);
      }
    });
  });

  test('find answer for advent', () => {
    const result = findInputForOutputGreedy(ADVENT_DAY_2_PART_2_INPUT, 19690720);
    expect(result).toBeDefined();
    console.log(`advent day 2 part 2: ${result}`);
  });
});
