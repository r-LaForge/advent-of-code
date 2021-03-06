import {Line, Point, VerticalAndHorizontalLines} from './interface';

export function getHorizontalAndVerticalLinesFromMovements(movements: string[]): VerticalAndHorizontalLines {
  return separateLinesIntoVerticalAndHorizontal(transformMovementsIntoLines(movements));
}

export function transformMovementsIntoLines(movements: string[]): Line[] {
  let currentPosition: Point = {x: 0, y: 0};
  const lines = [];

  for (const movement of movements) {
    const line = transformMovementIntoLine(currentPosition, movement);
    currentPosition = line.p2;
    lines.push(line);
  }
  return lines;
}

function transformMovementIntoLine(startingPosition: Point, movement: string): Line {
  const direction = movement[0].toUpperCase();
  const spacesMoved = Number(movement.slice(1));

  switch (direction) {
    case 'R':
      return {p1: startingPosition, p2: {x: startingPosition.x + spacesMoved, y: startingPosition.y}};
    case 'L':
      return {p1: startingPosition, p2: {x: startingPosition.x - spacesMoved, y: startingPosition.y}};
    case 'U':
      return {p1: startingPosition, p2: {x: startingPosition.x, y: startingPosition.y + spacesMoved}};
    case 'D':
      return {p1: startingPosition, p2: {x: startingPosition.x, y: startingPosition.y - spacesMoved}};
  }
  throw new Error(`movement ${movement} is invalid. Must start with one of [R,L,D,U] and end with a number`);
}

export function separateLinesIntoVerticalAndHorizontal(lines: Line[]): { horizontal: Line[], vertical: Line[] } {
  return {
    horizontal: lines.filter(l => l.p1.y === l.p2.y),
    vertical: lines.filter(l => l.p1.x === l.p2.x),
  };
}

export function getCrossingCoordinates({horizontal, vertical}: VerticalAndHorizontalLines): Point[] {
  if (horizontal.length === 0 || vertical.length === 0) {
    return [];
  }

  const crossingCoordinates: Point[] = [];

  horizontal.forEach(h => {
    vertical.forEach(v => {
      if (doesHorizontalLineCrossVerticalLine({horizontal: h, vertical: v})) {
        crossingCoordinates.push({x: v.p1.x, y: h.p1.y});
      }
    });
  });

  return crossingCoordinates;
}

export function filterOutOrigin(points: Point[]): Point[] {
  return points.filter(p => !(p.x === 0 && p.y === 0));
}

/* Determining if the lines cross
 * Given: They are all horizontal and vertical lines
 * only need to check horizontals against verticals
 * horizontal line x must cross vertical line x coordinates
 * horizontal y must be in-between vertical line y coordinates
 */
function doesHorizontalLineCrossVerticalLine({horizontal, vertical}: { horizontal: Line, vertical: Line }): boolean {
  const verticalX = vertical.p1.x;
  const horizontalY = horizontal.p1.y;

  const matchesHorizontalCrossing = Math.min(horizontal.p1.x, horizontal.p2.x) <= verticalX
    && Math.max(horizontal.p1.x, horizontal.p2.x) >= verticalX;

  const matchesVerticalCrossing = Math.min(vertical.p1.y, vertical.p2.y) <= horizontalY
    && Math.max(vertical.p1.y, vertical.p2.y) >= horizontalY;

  return matchesHorizontalCrossing && matchesVerticalCrossing;
}
