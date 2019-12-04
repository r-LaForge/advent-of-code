// https://adventofcode.com/2019/day/1
export function computeFuelForModuleMassesAndFuel(masses: number[]): number {
  return (masses || []).reduce((totalFuel, mass) => {
    return totalFuel + computeFuelForMass(mass);
  }, 0);
}

function computeFuelForMass(mass: number): number {
  const fuel = Math.floor(mass / 3) - 2;
  if (fuel < 0) {
    return 0;
  }
  return computeFuelForMass(fuel) + fuel;
}
