/*
 * https://adventofcode.com/2019/day/5
 * An instruction pointer is a 4 digit code.
 * The last two digts refer to the opcode. (operation to perform)
 * Then, from right toleft the parameter modes for the parameters are read.
 *
 * Parameter modes:
 *  0 - positional parameter. Read the parameter and index into the program at that index to get the value.
 *  1 - Immediate parameter. Read the parameter as the value.
 *
 * Op codes:
 *  1 - add the two parameters and store them via the third parameter.
 *  2 - multiply the two parameter and store them via the third parameter.
 *  3 - take a single input and output it to the position referred  to by its single parameter.
 *  4 - output the value of its only parameter.
 *  99 - halt execution (return)
 *
 * Outputs:
 * Every output is a diagnostic code. Except for the very last code, an output that is not 0 indicates an error.
 * The last diagnostic code is the output for this question.
 *
 * Assumptions:
 * Every input provided (when needed) will be 0.
*/


import {commandMap, IntCodeCommand, OpCode} from './commands';

// Returns the diagnostic codes from the program as an array.
export function intCodeWithParameterModes(inputProgram: number[]): number[] {
  const output: number[] = [];
  const instructions = splitProgramIntoInstructions(inputProgram);
  for (const i of instructions) {
    const command = getCommandFromInstruction(i);
    if (!command) {
      throw new Error(`received invalid instruction: ${i} - likely not a valid op code`);
    }
    const params = getParamsFromInstruction(inputProgram, i);
    const result = command.run(inputProgram, ...params);
    if (!result) {
      continue;
    }
    if (typeof result.output === 'number') {
      output.push(result.output);
    }
    if (result.abort) {
      return output;
    }
  }
  return inputProgram;
}

function getCommandFromInstruction(instruction: number[]): IntCodeCommand | undefined {
  const instructionPointer = instruction[0];
  const ipString = instructionPointer.toString();
  const opCode = Number(ipString.slice(ipString.length - 2, ipString.length)) as OpCode;
  return commandMap.get(opCode);
}

function getParamsFromInstruction(inputProgram: number[], instruction: number[]): number[] {
  const paramModes = instruction
    .slice(0, instruction.length - 2)
    .reverse();
  const paramsWithMode = zipParamsAndParamModesTogether(paramModes, instruction.slice(1, instruction.length));
  return getParamsFromProgramAndMode(paramsWithMode, inputProgram);
}

function splitProgramIntoInstructions(arr: any[]): any[] {
  // TODO
  return [];
}

function zipParamsAndParamModesTogether(paramModes: number[], params: number[]): { param: number, mode: number }[] {
  return [];
}

function getParamsFromProgramAndMode(paramsWithMode: { param: number, mode: number }[], program: number[]): number[] {
  return [];
}
