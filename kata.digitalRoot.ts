/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


*/
export const digitalRoot = (n:number):number => {
    if(n.toString().length === 1){
        return n
    } else {
        const num= n.toString().split("").reduce((acc, cur)=>acc+ +cur, 0)
        if(num.toString().length===1){
            return num
        } else {
            return digitalRoot(num)
        }
    }

  };

  export const digitalRoot2 = (n:number):number => {
    let number = n.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
    if(number.toString().length > 1) {
      return digitalRoot(number);
    }
    return number
  };

  export function digitalRoot3(n: number): number {
    return (n - 1) % 9 + 1;
  }

console.log(digitalRoot3(16));
console.log(digitalRoot3(942));
console.log(digitalRoot3(132189));
