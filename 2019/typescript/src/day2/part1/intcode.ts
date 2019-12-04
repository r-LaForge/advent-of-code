// https://adventofcode.com/2019/day/2
// does not modify original program
export function intCodeProgram(input: number[]): number[] {
  const program = [...input];
  let currentPosition = 0;
  while (currentPosition < program.length) {
    const intCode = program[currentPosition];
    switch (intCode) {
      case 1:
        applyOperation(program, currentPosition, (i1, i2) => i1 + i2);
        break;
      case 2:
        applyOperation(program, currentPosition, (i1, i2) => i1 * i2);
        break;
      case 99:
        return program;
      default:
        throw new Error(`encountered bad intCode: ${intCode} at position ${currentPosition}`);
    }
    currentPosition += 4;
  }
  return program;
}

function applyOperation(program: number[], currentPosition: number, op: (i1: number, i2: number) => number): void {
  const outputPosition = program[currentPosition + 3];
  const input1Position = program[currentPosition + 1];
  const input2Position = program[currentPosition + 2];
  const input1 = program[input1Position];
  const input2 = program[input2Position];
  program[outputPosition] = op(input1, input2);
}
