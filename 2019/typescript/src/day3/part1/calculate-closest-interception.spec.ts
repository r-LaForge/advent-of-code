import {
  calculateClosestLintInterception,
  getCrossingCoordinates, getMinimumManhattenDistanceFromOrigin,
  Line, Point,
  separateLinesIntoVerticalAndHorizontal,
  transformMovementsIntoLines,
} from './calculate-closest-interception';
import {ADVENT_DAY_3_PART_1_INPUT} from './test_input';

describe('transformMovementsIntoLines', () => {
  describe('when given a single movement', () => {
    it('should return a line connecting origin to (26, 0) if given R26', () => {
      const expected: Line = {p1: {x: 0, y: 0}, p2: {x: 26, y: 0}};
      expect(transformMovementsIntoLines(['R26'])).toEqual([expected]);
    });
    it('should return a line connecting origin to (-15, 0) if given L15', () => {
      const expected: Line = {p1: {x: 0, y: 0}, p2: {x: -15, y: 0}};
      expect(transformMovementsIntoLines(['L15'])).toEqual([expected]);
    });
    it('should return a line connecting origin to (0, 20) if given U20', () => {
      const expected: Line = {p1: {x: 0, y: 0}, p2: {x: 0, y: 20}};
      expect(transformMovementsIntoLines(['U20'])).toEqual([expected]);
    });
    it('should return a line connecting origin to (0, -10) if given D10', () => {
      const expected: Line = {p1: {x: 0, y: 0}, p2: {x: 0, y: -10}};
      expect(transformMovementsIntoLines(['D10'])).toEqual([expected]);
    });
  });

  describe('with multiple movements', () => {
    const testCases: Array<{ movements: string[], lines: Line[] }> = [
      {
        lines: [
          {p1: {x: 0, y: 0}, p2: {x: -10, y: 0}},
          {p1: {x: -10, y: 0}, p2: {x: -10, y: -10}},
        ],
        movements: ['L10', 'D10'],
      },
      {
        lines: [
          {p1: {x: 0, y: 0}, p2: {x: 20, y: 0}},
          {p1: {x: 20, y: 0}, p2: {x: 20, y: 21}},
          {p1: {x: 20, y: 21}, p2: {x: 7, y: 21}},
          {p1: {x: 7, y: 21}, p2: {x: 7, y: 16}},
        ],
        movements: ['R20', 'U21', 'L13', 'D5'],
      },
    ];

    testCases.forEach(t => {
      test('it returns the correct lines', () => {
        try {
          expect(transformMovementsIntoLines(t.movements)).toEqual(t.lines);
        } catch (e) {
          fail(`failed on test: ${JSON.stringify(t)} > ${e}`);
        }
      });
    });
  });
});


describe('separateLinesIntoVerticalAndHorizontal', () => {
  it('should properly separate vertical and horizontal lines', () => {
    const horizontal: Line[] = [
      {p1: {x: 0, y: 0}, p2: {x: 10, y: 0}},
      {p1: {x: 10, y: 10}, p2: {x: 0, y: 10}},
    ];

    const vertical: Line[] = [
      {p1: {x: 0, y: 0}, p2: {x: 0, y: 10}},
      {p1: {x: 10, y: 10}, p2: {x: 10, y: 0}},
    ];

    const neither: Line[] = [
      {p1: {x: 12, y: 15}, p2: {x: 9, y: 17}},
      {p1: {x: 10, y: 15}, p2: {x: 7, y: 17}},
    ];

    const allLines = [...vertical, ...neither, ...horizontal];

    const expected = {
      horizontal,
      vertical,
    };

    const actual = separateLinesIntoVerticalAndHorizontal(allLines);

    expect(actual).toEqual(expected);
  });
});

describe('getCrossingCoordinates', () => {
  it('should return an empty array if given no lines', () => {
    expect(getCrossingCoordinates({horizontal: [], vertical: []})).toEqual([]);
  });

  it('should return an empty array if only given horizontal lines', () => {
    const horizontal = [{p1: {x: 0, y: 0}, p2: {x: 15, y: 0}}];
    expect(getCrossingCoordinates({horizontal, vertical: []})).toEqual([]);
  });

  it('should return an empty array if only given vertical lines', () => {
    const vertical = [{p1: {x: 0, y: 0}, p2: {x: 0, y: 10}}];
    expect(getCrossingCoordinates({horizontal: [], vertical})).toEqual([]);
  });

  it('should cross at (3,3) and (6,5) for the given lines', () => {
    const firstHorizontalLines = [
      {p1: {x: 0, y: 0}, p2: {x: 8, y: 0}},
      {p1: {x: 8, y: 5}, p2: {x: 3, y: 5}},
    ];

    const secondHorizontalLines = [
      {p1: {x: 0, y: 7}, p2: {x: 6, y: 7}},
      {p1: {x: 6, y: 3}, p2: {x: 2, y: 3}},
    ];

    const firstVerticalLines = [
      {p1: {x: 8, y: 0}, p2: {x: 8, y: 5}},
      {p1: {x: 3, y: 5}, p2: {x: 3, y: 2}},
    ];

    const secondVerticalLines = [
      {p1: {x: 0, y: 0}, p2: {x: 0, y: 7}},
      {p1: {x: 6, y: 7}, p2: {x: 6, y: 3}},
    ];

    const expected: Point[] = [{x: 0, y: 0}, {x: 3, y: 3}, {x: 6, y: 5}]
      .sort((a, b) => a.x - b.x)
      .sort((a, b) => a.y - b.y);
    const actual = [
      ...getCrossingCoordinates({horizontal: firstHorizontalLines, vertical: secondVerticalLines}),
      ...getCrossingCoordinates({horizontal: secondHorizontalLines, vertical: firstVerticalLines}),
    ].sort((a, b) => a.x - b.x)
      .sort((a, b) => a.y - b.y);

    expect(actual.sort((a, b) => a.x - b.x)).toEqual(expected);

  });
});

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
    expect(calculateClosestLintInterception(wire1, wire2)).toEqual(159);
  });

  it('should return 135 if given R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51 and U98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
    const wire1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
    const wire2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];
    expect(calculateClosestLintInterception(wire1, wire2)).toEqual(135);
  });

  test('get answer to advent', () => {
    const result = calculateClosestLintInterception(
      ADVENT_DAY_3_PART_1_INPUT.wire1,
      ADVENT_DAY_3_PART_1_INPUT.wire2,
    );
    expect(result).toBeDefined();

    console.log(`advent day 3 part 1 result: ${result}`);
  });
});
