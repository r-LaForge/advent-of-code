export function calculateFuelForModuleMasses(masses: number[]): number {
  return (masses || []).reduce((totalFuel, mass) => {
    return totalFuel + computeFuelForMass(mass);
  }, 0);
}

function computeFuelForMass(mass: number): number {
  return Math.floor(mass / 3) - 2;
}
