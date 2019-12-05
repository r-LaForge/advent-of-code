// https://adventofcode.com/2019/day/3https://adventofcode.com/2019/day/3

/* Assume central point is the origin on a two-dimensional plane
 * Translate every input into a point on a two-dimensional plane.
 * Separate lines into horizontal and vertical lists.
 * Find all intercepting lines and collision point
 * Determine all manhattan distances from center to collision point
 * Pick minimum
 */
export interface Point {
  x: number;
  y: number;
}

export interface Line {
  p1: Point;
  p2: Point;
}

export interface VerticalAndHorizontalLines {
  horizontal: Line[];
  vertical: Line[];
}

export function calculateClosestLintInterception(firstWireMovements: string[], secondWireMovements: string[]): number {
  const firstLines = transformMovementsIntoLines(firstWireMovements);
  const secondLines = transformMovementsIntoLines(secondWireMovements);

  const firstSeparatedLines = separateLinesIntoVerticalAndHorizontal(firstLines);
  const secondSeparatedLines = separateLinesIntoVerticalAndHorizontal(secondLines);

  const crossingCoordinates = [
    ...getCrossingCoordinates({horizontal: firstSeparatedLines.horizontal, vertical: secondSeparatedLines.vertical}),
    ...getCrossingCoordinates({horizontal: secondSeparatedLines.horizontal, vertical: firstSeparatedLines.vertical}),
  ];

  return getMinimumManhattenDistanceFromOrigin(crossingCoordinates);
}

export function getHorizontalAndVerticalLinesFromMovements(movements: string[]): VerticalAndHorizontalLines {
  return separateLinesIntoVerticalAndHorizontal(transformMovementsIntoLines(movements));
}

export function transformMovementsIntoLines(movements: string[]): Line[] {
  return [];
}

export function separateLinesIntoVerticalAndHorizontal(lines: Line[]): { horizontal: Line[], vertical: Line[] } {
  return {
    horizontal: [],
    vertical: [],
  };
}

export function getCrossingCoordinates({horizontal, vertical}: VerticalAndHorizontalLines): Point[] {
  return [];
}

export function getMinimumManhattenDistanceFromOrigin(points: Point[]): number {
  return -Infinity;
}

/* Determining if the lines cross
 * Given: They are all horizontal and vertical lines
 * only need to check horizontals against verticals
 * horizontal line x must cross vertical line x coordinates
 * horizontal y must be in-between vertical line y coordinates
 */
function doesHorizontalLineCrossVerticalLine({horizontal, vertical}: { horizontal: Line, vertical: Line }): boolean {
  return [
    // Horizontal line crosses the vertical line at point vertical.p1.x
    // x-coordinate does is the same for a vertical line
    horizontal.p1.x <= vertical.p1.x,
    horizontal.p2.x >= vertical.p1.x,

    // Horiztonal line crosses vertical line at horizontal.p1.y
    // y-coordinate is the same for a horizontal line. Using min / max because we do not know what coordinate is greater
    horizontal.p1.y >= Math.min(vertical.p1.y, vertical.p2.y),
    horizontal.p1.y <= Math.min(vertical.p1.y, vertical.p2.y),
  ].every(Boolean);
}