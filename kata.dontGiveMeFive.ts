/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
*/
export function dontGiveMeFive2(start:number, end:number) : number {
  return new Array(Math.abs(end-start)+1).fill(0).map((_,index)=>start+index).filter(item=>!item.toString().match('5')).length
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4,17));


export function dontGiveMeFive(start:number, end:number) : number {
    let result=0
    for (let index = start; index <= end; index++) {
        if(!index.toString().includes('5')){
            result++
        }
        
    }
    return result
  }