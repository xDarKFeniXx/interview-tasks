/**
 * sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
 */

export function sumPairs(ints: number[], s: number): [number, number] | void {
    let leftIndex=Math.floor(ints.length/2)
    let rightIndex=leftIndex+1
    let left:number, right:number, loop=true
    while(leftIndex>=0){
        if(ints[leftIndex]+)
    }
}

const arr = [1, -2, 3, 0, -6, 1]
const res = sumPairs(arr, -6)
console.log(res);
