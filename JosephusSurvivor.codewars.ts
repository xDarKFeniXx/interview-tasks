/**
 * https://www.codewars.com/kata/555624b601231dc7a400017a/train/typescript
 * josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
 * 
 */

export function josephusSurvivor(n: number, k: number) {
    const arr=new Array(n).fill(0).map((_, index)=>index+1)
    console.log(arr);
    while(arr.length>1){
        
    }
    return arr[0]
  }

//   console.log(josephusSurvivor(7,3));
  console.log(josephusSurvivor(11,19));
  