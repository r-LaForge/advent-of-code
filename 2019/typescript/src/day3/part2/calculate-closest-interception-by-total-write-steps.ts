import {
  filterOutOrigin, getCrossingCoordinates,
  getHorizontalAndVerticalLinesFromMovements,
} from '../shared';
import {Line, Point} from '../interface';

export function calculateClosestInterceptionByTotalWireSteps(firstMovements: string[], secondMovements: string[]): number {
  const firstLines = getHorizontalAndVerticalLinesFromMovements(firstMovements);
  const secondLines = getHorizontalAndVerticalLinesFromMovements(secondMovements);

  const crossingCoordinates = filterOutOrigin([
    ...getCrossingCoordinates({horizontal: firstLines.horizontal, vertical: secondLines.vertical}),
    ...getCrossingCoordinates({horizontal: secondLines.horizontal, vertical: firstLines.vertical}),
  ]);
  const allFirstLines = [...firstLines.horizontal, ...firstLines.vertical];
  const allSecondLines = [...secondLines.horizontal, ...secondLines.vertical];

  return Math.min(
    ...crossingCoordinates
      .map(c => getMinimumStepsToPointFromLines(c, allFirstLines) + getMinimumStepsToPointFromLines(c, allSecondLines)),
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
    return sum + getAbsoluteDifference(line.p1.x, line.p2.x) + getAbsoluteDifference(line.p1.y, line.p2.y);
  }, 0);

  let stepsToInterception: number;
  if (firstLineToInterceptPoint.p1.x === point.x) {
    stepsToInterception = getAbsoluteDifference(point.y, firstLineToInterceptPoint.p1.y);
  } else {
    stepsToInterception = getAbsoluteDifference(point.x, firstLineToInterceptPoint.p1.x);
  }

  return stepsBeforeInterceptingLine + stepsToInterception;
}

function getAbsoluteDifference(num1: number, num2: number) {
  return Math.abs(Math.abs(num1) - Math.abs(num2));
}
