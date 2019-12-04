// https://adventofcode.com/2019/day/1
export function computeFuelForModuleMasses(masses: number[]): number {
  return (masses || []).reduce((totalFuel, mass) => {
    return totalFuel + computeFuelForMass(mass);
  }, 0);
}

function computeFuelForMass(mass: number): number {
  return Math.floor(mass / 3) - 2;
}
