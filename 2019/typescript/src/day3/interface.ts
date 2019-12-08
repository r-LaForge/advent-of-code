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
