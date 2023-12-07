//https://www.codewars.com/kata/59b401e24f98a813f9000026/train/typescript

function getDigitsFromNumber(n: number) {
  return n.toString().split("");
}

export function computeDepth(n: number): number {
  const mapDig = new Set<string>();
  getDigitsFromNumber(n).forEach((dig) => mapDig.add(dig));
  if(mapDig.size===10){
    return 1
  }
  let count = 1;
  while (mapDig.size !== 10) {
    getDigitsFromNumber(n * count).forEach((dig) => mapDig.add(dig));
    count++;
  }
  return count-1
}

console.log(computeDepth(42));
console.log(computeDepth(1));
console.log(computeDepth(125));
console.log(computeDepth(1234567890));

