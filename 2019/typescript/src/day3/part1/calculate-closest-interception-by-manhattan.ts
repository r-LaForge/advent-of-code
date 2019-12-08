// https://adventofcode.com/2019/day/3https://adventofcode.com/2019/day/3

/* Assume central point is the origin on a two-dimensional plane
 * Translate every input into a point on a two-dimensional plane.
 * Separate lines into horizontal and vertical lists.
 * Find all intercepting lines and collision point
 * Determine all manhattan distances from center to collision point
 * Pick minimum
 */
import {Point} from '../interface';
import {filterOutOrigin, getCrossingCoordinates, getHorizontalAndVerticalLinesFromMovements} from '../shared';

export function calculateClosestInterceptionByManhattenDistance(firstMovements: string[], secondMovements: string[]): number {
  const firstLines = getHorizontalAndVerticalLinesFromMovements(firstMovements);
  const secondLines = getHorizontalAndVerticalLinesFromMovements(secondMovements);

  const crossingCoordinates = filterOutOrigin([
    ...getCrossingCoordinates({horizontal: firstLines.horizontal, vertical: secondLines.vertical}),
    ...getCrossingCoordinates({horizontal: secondLines.horizontal, vertical: firstLines.vertical}),
  ]);

  return getMinimumManhattenDistanceFromOrigin(crossingCoordinates);
}

export function getMinimumManhattenDistanceFromOrigin(points: Point[]): number {
  const distances = points.map(p => Math.abs(p.x) + Math.abs(p.y));
  return Math.min(
    ...distances,
  );
}
