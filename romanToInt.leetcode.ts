//https://leetcode.com/problems/roman-to-integer/

const map: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function romanToInt(s: string): number {
  let result = 0;

  s.split("")
    .reverse()
    .forEach((char, idx, arr) => {
      const prevChar = arr[idx - 1];
      if (char === "I" && (prevChar === "V" || prevChar === "X")) {
        result -= 1;
      } else if (char === "X" && (prevChar === "L" || prevChar === "C")) {
        result -= 10;
      } else if (char === "C" && (prevChar === "D" || prevChar === "M")) {
        result -= 100;
      } else {
        result += map[char] ?? 0;
      }
    });
  return result;
}

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
