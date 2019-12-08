import {Line, transformMovementsIntoLines} from './calculate-closest-interception';

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
