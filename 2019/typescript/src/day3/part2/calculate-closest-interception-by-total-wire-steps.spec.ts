import {Line, Point} from '../interface';
import {
  calculateClosestInterceptionByTotalWireSteps,
  getMinimumStepsToPointFromLines,
} from './calculate-closest-interception-by-total-write-steps';

describe('getMinimumStepsToPointFromLines', () => {
  it('should return 15 for lines (0,0),(8,0) (8,0),(8, 5) (8.5),(3,5) (3,5),(3,2) and interception (6,5)', () => {
    const lines: Line[] = [
      {p1: {x: 0, y: 0}, p2: {x: 8, y: 0}},
      {p1: {x: 8, y: 0}, p2: {x: 8, y: 5}},
      {p1: {x: 8, y: 5}, p2: {x: 3, y: 5}},
      {p1: {x: 3, y: 5}, p2: {x: 3, y: 2}},
    ];

    const point: Point = {x: 6, y: 5};

    expect(getMinimumStepsToPointFromLines(point, lines)).toEqual(15);
  });

  it('should return 20 for lines (0,0),(8,0) (8,0),(8, 5) (8.5),(3,5) (3,5),(3,2) and interception (6,5)', () => {
    const lines: Line[] = [
      {p1: {x: 0, y: 0}, p2: {x: 8, y: 0}},
      {p1: {x: 8, y: 0}, p2: {x: 8, y: 5}},
      {p1: {x: 8, y: 5}, p2: {x: 3, y: 5}},
      {p1: {x: 3, y: 5}, p2: {x: 3, y: 2}},
    ];

    const point: Point = {x: 3, y: 3};

    expect(getMinimumStepsToPointFromLines(point, lines)).toEqual(20);
  });

  it('should return 15 for lines (0,0),(0,7) (0,7),(6, 7) (6,7),(6,3) (6,3),(2,3) and interception (6,5)', () => {
    const lines: Line[] = [
      {p1: {x: 0, y: 0}, p2: {x: 0, y: 7}},
      {p1: {x: 0, y: 7}, p2: {x: 6, y: 7}},
      {p1: {x: 6, y: 7}, p2: {x: 6, y: 3}},
      {p1: {x: 6, y: 3}, p2: {x: 2, y: 3}},
    ];

    const point: Point = {x: 6, y: 5};

    expect(getMinimumStepsToPointFromLines(point, lines)).toEqual(15);
  });

  it('should return 40 for lines (0,0),(0,7) (0,7),(6, 7) (6,7),(6,3) (6,3),(2,3) and interception (6,5)', () => {
    const lines: Line[] = [
      {p1: {x: 0, y: 0}, p2: {x: 0, y: 7}},
      {p1: {x: 0, y: 7}, p2: {x: 6, y: 7}},
      {p1: {x: 6, y: 7}, p2: {x: 6, y: 3}},
      {p1: {x: 6, y: 3}, p2: {x: 2, y: 3}},
    ];

    const point: Point = {x: 3, y: 3};

    expect(getMinimumStepsToPointFromLines(point, lines)).toEqual(20);
  });
});

describe('calculateClosestInterceptionByTotalWireSteps', () => {
  it('should return 610 for wires R75,D30,R83,U83,L12,D49,R71,U7,L72 and U62,R66,U55,R34,D71,R55,D58,R83', () => {
    const wire1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
    const wire2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];

    expect(calculateClosestInterceptionByTotalWireSteps(wire1, wire2)).toEqual(610);
  });

  it('should return 410 for wires R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51 and U98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
    const wire1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
    const wire2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];

    expect(calculateClosestInterceptionByTotalWireSteps(wire1, wire2)).toEqual(410);
  });
});
