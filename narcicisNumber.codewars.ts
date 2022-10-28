/**
 * https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/typescript
 * 
 * A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 */

export function narcissistic(value: number): boolean {

    return value === value.toString().split("").reduce((acc, item, _, arr)=>acc+Number(item)**arr.length, 0)
}

console.log(narcissistic(153));
