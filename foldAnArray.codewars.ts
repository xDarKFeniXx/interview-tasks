/**
 * https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/typescript
 * In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:
Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
 * 
 * 
 */
const foldArrayOneTime=(arr:number[]):number[]=>{
    let result:number[]=[]
    const middleFlag=arr.length % 2 === 0
    
    const middle=Math.floor(arr.length/2)
    const left=arr.slice(0, middle)
    const right=arr.slice(middleFlag ? middle : middle +1).reverse()
    
    result = left.map((item, index)=>item+right[index])
    if(!middleFlag){
        result.push(arr[middle])
    }
    return result
}


export function foldArray(array: number[], runs: number): number[] {
    let result: number[] = [...array]
    for (let index = 1; index <= runs; index++) {
        result=foldArrayOneTime(result)        
    }

    return result;
}
console.log(foldArray([ 1, 2, 3, 4, 5, 6 ], 1));






