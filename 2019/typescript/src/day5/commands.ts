export interface IntCodeCommand {
  run(program: number[], ...args: number[]): { abort?: boolean, output?: number } | void;
}

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
