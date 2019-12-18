import {IntCodeCommand, IntCodeCommands} from './commands';

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

export const requiredParamLengthForOpCodeMap = new Map<OpCode, number>();
requiredParamLengthForOpCodeMap.set(OpCode.ADD, 3);
requiredParamLengthForOpCodeMap.set(OpCode.MULTIPLY, 3);
requiredParamLengthForOpCodeMap.set(OpCode.SAVE_TO_ADDRESS, 2);
requiredParamLengthForOpCodeMap.set(OpCode.OUTPUT_PARAMETER, 1);
requiredParamLengthForOpCodeMap.set(OpCode.HALT, 0);
