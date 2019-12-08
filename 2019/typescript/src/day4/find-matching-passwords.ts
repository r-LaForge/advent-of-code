// https://adventofcode.com/2019/day/4
/*
* Criteria given:
* It is a six-digit number.
* The value is within the range given in your puzzle input.
* Two adjacent digits are the same (like 22 in 122345).
* Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679)
 */

export interface PasswordMatcherInterface {
  findNumberOfMatchingPasswords(range: { min: number, max: number }): number;
}

export abstract class PasswordMatcherAbstract implements PasswordMatcherInterface {

  public findNumberOfMatchingPasswords({min, max}: { min: number; max: number }): number {
    if (min === max) {
      return 0;
    }
    let total = 0;
    for (let i = min + 1; i < max; i++) {
      if (this.matchesCriteria(i)) {
        total++;
      }
    }
    return total;
  }

  public abstract matchesCriteria(num: number): boolean;
}

// tslint:disable-next-line:max-classes-per-file
export class AtLeastTwoAdjacentDigitsPasswordMatcher extends PasswordMatcherAbstract {
  public matchesCriteria(num: number): boolean {
    return isSixDigitNumber(num)
      && hasAtLeastTwoAdjacentNumbers(num)
      && digitsNeverDecrease(num);
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ExactlyTwoDigitPasswordMatcher extends PasswordMatcherAbstract {
  public matchesCriteria(num: number): boolean {
    return isSixDigitNumber(num)
      && hasExactlyTwoAdjacentNumbers(num)
      && digitsNeverDecrease(num);
  }
}


export function isSixDigitNumber(num: number): boolean {
  return num >= 100000 && num <= 999999;
}

export function hasAtLeastTwoAdjacentNumbers(num: number): boolean {
  const regexp = new RegExp(/(\d)\1/);
  return regexp.test(num.toString(10));
}


export function hasExactlyTwoAdjacentNumbers(num: number): boolean {
  const regexp = new RegExp(/(^|(\d)(?!\2))(\d)\3{1}(?!\3)/);
  return regexp.test(num.toString(10));
}

export function digitsNeverDecrease(num: number): boolean {
  const digits = num.toString(10).split('').map(n => Number(n));
  let lastDigit = -Infinity;
  for (const d of digits) {
    if (d < lastDigit) {
      return false;
    }
    lastDigit = d;
  }
  return true;
}
