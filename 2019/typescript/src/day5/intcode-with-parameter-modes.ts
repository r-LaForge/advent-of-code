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
