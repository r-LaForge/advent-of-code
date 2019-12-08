import {
  filterOutOrigin, getCrossingCoordinates,
  separateLinesIntoVerticalAndHorizontal, transformMovementsIntoLines,
} from '../shared';
import {Line, Point} from '../interface';

// https://adventofcode.com/2019/day/3
/*
 * Transform movements into lines on a grid
 * Find all coordinates that both wires intercept
 * Calculate the minimum number of steps required for both wires to reach that point
 * (count distances between points in all lines up until the one that inercepts. Then just add the steps required on that
 * line to intercept the coordinate).
 */
export function calculateClosestInterceptionByTotalWireSteps(firstMovements: string[], secondMovements: string[]): number {
  const firstLines = transformMovementsIntoLines(firstMovements);
  const secondLines = transformMovementsIntoLines(secondMovements);

  const firstSplitLines = separateLinesIntoVerticalAndHorizontal(firstLines);
  const secondSplitLines = separateLinesIntoVerticalAndHorizontal(secondLines);

  const crossingCoordinates = filterOutOrigin([
    ...getCrossingCoordinates({horizontal: firstSplitLines.horizontal, vertical: secondSplitLines.vertical}),
    ...getCrossingCoordinates({horizontal: secondSplitLines.horizontal, vertical: firstSplitLines.vertical}),
  ]);

  const distances = crossingCoordinates
    .map(c => getMinimumStepsToPointFromLines(c, firstLines) + getMinimumStepsToPointFromLines(c, secondLines));
  return Math.min(
    ...distances,
  );
}

export function getMinimumStepsToPointFromLines(point: Point, lines: Line[]): number {
  // should be using Array.find
  const firstLineToInterceptPoint = lines.filter(l => {
    return l.p1.x === point.x && Math.min(l.p1.y, l.p2.y) <= point.y && Math.max(l.p1.y, l.p2.y) >= point.y
      || l.p1.y === point.y && Math.min(l.p1.x, l.p2.x) <= point.x && Math.max(l.p1.x, l.p2.x) >= point.x;
  })[0];

  const indexOfLine = lines.indexOf(firstLineToInterceptPoint);
  const linesBeforeInterception = lines.slice(0, indexOfLine);
  const stepsBeforeInterceptingLine = linesBeforeInterception.reduce((sum, line) => {
    const xDistance = Math.abs(line.p1.x - line.p2.x);
    const yDistance = Math.abs(line.p1.y - line.p2.y);
    return sum + xDistance + yDistance;
  }, 0);

  const stepsToInterception = Math.abs(point.y - firstLineToInterceptPoint.p1.y) + Math.abs(point.x - firstLineToInterceptPoint.p1.x);

  return stepsBeforeInterceptingLine + stepsToInterception;
}
