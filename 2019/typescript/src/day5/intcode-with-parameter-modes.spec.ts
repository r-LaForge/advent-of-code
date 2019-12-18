import {intCodeWithParameterModes} from './intcode-with-parameter-modes';
import {DAY_5_INPUT} from './test-input';

describe('intCodeWithParameterModes', () => {
  test('result for day 5', () => {
    const result = intCodeWithParameterModes(DAY_5_INPUT);
    expect(result).toBeDefined();
    console.log(`advent day 5 part 1: ${result}`);
  });
});
