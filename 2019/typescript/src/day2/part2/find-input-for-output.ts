import {intCodeProgram} from '../part1/intcode';

export function findInputForOutputGreedy(program: number[], desiredOutput: number): [number, number] {
  for (let i1 = 0; i1 < 99; i1++) {
    for (let i2 = 0; i2 < 99; i2++) {
      if (inputsGiveCorrectOutput(i1, i2, program, desiredOutput)) {
        return [i1, i2];
      }

      if (inputsGiveCorrectOutput(i2, i1, program, desiredOutput)) {
        return [i2, i1];
      }
    }
  }
  throw new Error(`could not determine inputs for output: ${desiredOutput}`);
}

function inputsGiveCorrectOutput(i1: number, i2: number, program: number[], desiredOutput: number): boolean {
  program[1] = i1;
  program[2] = i2;
  const outputProgram = intCodeProgram(program);
  const output = outputProgram[0];
  return output === desiredOutput;
}
