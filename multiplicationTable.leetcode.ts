/*
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/typescript
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:
1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
 */

export function multiplicationTable (size: number): number[][] {
    let result:Array<number[]>=[]
    for (let y = 1; y <= size; y++) {
        const row:number[]=[]
        for (let x = 1; x <= size; x++) {
            row.push(x*y)
        }
        result.push(row)
    }
    return result
  }

  console.log(multiplicationTable(1));
  console.log(multiplicationTable(2));
  console.log(multiplicationTable(3));
  
  export function multiplicationTable2 (size: number): number[][] {
    return [...Array(size)].map((_, i) => [...Array(size)].map((_, j) => (i + 1) * (j + 1)))
  }