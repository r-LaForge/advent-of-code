// https://adventofcode.com/2019/day/2
// does not modify original program
export function intCodeProgram(input: number[]): number[] {
  const program = [...input];
  let instructionPointer = 0;
  while (instructionPointer < program.length) {
    const intCode = program[instructionPointer];
    switch (intCode) {
      case 1:
        runInstruction(program, instructionPointer, (i1, i2) => i1 + i2);
        break;
      case 2:
        runInstruction(program, instructionPointer, (i1, i2) => i1 * i2);
        break;
      case 99:
        return program;
      default:
        throw new Error(`encountered bad intCode: ${intCode} at position ${instructionPointer}`);
    }
    instructionPointer += 4;
  }
  return program;
}

type Instruction = (i1: number, i2: number) => number;
function runInstruction(program: number[], instructionPointer: number, instruction: Instruction): void {
  const outputPosition = program[instructionPointer + 3];
  const input1Position = program[instructionPointer + 1];
  const input2Position = program[instructionPointer + 2];
  const input1 = program[input1Position];
  const input2 = program[input2Position];
  program[outputPosition] = instruction(input1, input2);
}
