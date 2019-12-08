import {getCrossingCoordinates, separateLinesIntoVerticalAndHorizontal, transformMovementsIntoLines} from './shared';
import {Line, Point} from './interface';

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
