export interface IntCodeCommand {
  run(program: number[], ...args: number[]): { abort?: boolean, output?: number } | void;
}

export enum OpCode {
  ADD = 1,
  MULTIPLY = 2,
  SAVE_TO_ADDRESS = 3,
  OUTPUT_PARAMETER = 4,
  HALT = 99,
}

export const commandMap = new Map<OpCode, IntCodeCommand>();
commandMap.set(OpCode.ADD, new IntCodeCommands.Add());
commandMap.set(OpCode.MULTIPLY, new IntCodeCommands.Multiply());
commandMap.set(OpCode.SAVE_TO_ADDRESS, new IntCodeCommands.SaveToAddress());
commandMap.set(OpCode.OUTPUT_PARAMETER, new IntCodeCommands.Output());
commandMap.set(OpCode.HALT, new IntCodeCommands.Abort());

export namespace IntCodeCommands {
  export class Add implements IntCodeCommand {
    public run(program: number[], ...args: number[]): void {
      if (!args || args.length !== 3) {
        throw new Error(`invalid number of args for Add command: ${args}`);
      }

      program[args[2]] = args[1] + args[2];
    }
  }

  export class Multiply implements IntCodeCommand {
    public run(program: number[], ...args: number[]): void {
      if (!args || args.length !== 3) {
        throw new Error(`invalid number of args for multiply command: ${args}`);
      }

      program[args[2]] = args[1] * args[2];
    }
  }

  export class SaveToAddress implements IntCodeCommand {
    public run(program: number[], ...args: number[]): void {
      if (!args || args.length !== 2) {
        throw new Error(`invalid number of args for save to address command: ${args}`);
      }

      program[args[1]] = args[0];
    }
  }

  export class Output implements IntCodeCommand {
    public run(program: number[], ...args: number[]): { output: number } {
      if (!args || args.length !== 1) {
        throw new Error(`invalid number of args for save to address command: ${args}`);
      }

      return {output: args[0]};
    }
  }

  export class Abort implements IntCodeCommand {
    public run(program: number[], ...args: number[]): { abort: true } {
      if (!args || args.length !== 0) {
        throw new Error(`invalid number of args for abort command: ${args}`);
      }

      return {abort: true};
    }
  }
}
