/*Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).
 	Game Input
Your program must read the data from the standard input and write the result on the standard output.
Input
Line 1: N, the number of temperatures to analyze

Line 2: A string with the N temperatures expressed as integers ranging from -273 to 5526

Output
Display 0 (zero) if no temperatures are provided. Otherwise, display the temperature closest to 0.
Constraints
0 ≤ N < 10000
*/

const inputs=['1', '-2', '-8', '4', '5']
function searchTemp(arr=[]){
    if(arr.length===1&&arr[0]==='') {
        return 0
    }else {

    const min=Math.min(...inputs.map(t=>Math.abs(t)));
  //  console.log(arr, min, arr.includes(min.toString()))
    if(arr.includes(min.toString())){
        return min
    } else {
        return -min
    }
    }
}
console.log(searchTemp(inputs))