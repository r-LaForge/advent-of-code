import {
  calculateClosestInterceptionByManhattenDistance,
  getMinimumManhattenDistanceFromOrigin,
} from './calculate-closest-interception-by-manhattan';
import {ADVENT_DAY_3_PART_1_INPUT} from './test_input';

describe('getMinimumManhattenDistanceFromOrigin', () => {
  it('should return the the minimum manhattan distance of 4', () => {
    const points = [
      {x: 1, y: 4},
      {x: 3, y: 2},
      {x: 3, y: 1},
    ];

    expect(getMinimumManhattenDistanceFromOrigin(points)).toEqual(4);
  });

  it('should return the correct distance when negatives are invluded (we must take absolute value)', () => {
    const points = [
      {x: 1, y: -4},
      {x: 3, y: 2},
      {x: 3, y: 1},
    ];

    expect(getMinimumManhattenDistanceFromOrigin(points)).toEqual(4);
  });
});


describe('calculateClosestLintInterception', () => {
  it('should return 159 when given wires R75,D30,R83,U83,L12,D49,R71,U7,L72 and U62,R66,U55,R34,D71,R55,D58,R83', () => {
    const wire1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
    const wire2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];
    expect(calculateClosestInterceptionByManhattenDistance(wire1, wire2)).toEqual(159);
  });

  it('should return 135 if given R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51 and U98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
    const wire1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
    const wire2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];
    expect(calculateClosestInterceptionByManhattenDistance(wire1, wire2)).toEqual(135);
  });

  test('get answer to advent', () => {
    const result = calculateClosestInterceptionByManhattenDistance(
      ADVENT_DAY_3_PART_1_INPUT.wire1,
      ADVENT_DAY_3_PART_1_INPUT.wire2,
    );
    expect(result).toBeDefined();

    console.log(`advent day 3 part 1 result: ${result}`);
  });
});
