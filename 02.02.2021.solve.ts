/*
Прислал Александр.

Доминантные элементы массива.
Доминантным является элемент массива, который больше, чем все элементы, 
следующих за ним. 
Напишите функцию, которая принимает массив чисел и возвращает массив из 
доминантных чисел.
*/
function solve(arr: Array<number>) {
    // let result = []
    // arr.reverse()
    // while (arr.length > 0) {
    //     let max = Math.max(...arr)
    //     result.push(max)
    //     let index = arr.indexOf(max)
    //     arr.splice(index)
    // }
    // return result
    // return arr.filter((el, ind) => el > arr.slice(ind+1).reduce((max, e) => e > max ? e : max, 0))
    return arr.filter((num, i) => arr.slice(i+1).every(el => el < num))
}

console.log(solve([16, 17, 14, 3, 14, 5, 2])); // [17, 14, 5, 2]
console.log(solve([92, 52, 93, 31, 89, 87, 77, 105])); // [105]
console.log(solve([75, 47, 42, 56, 13, 55])); // [75, 56, 55]
console.log(solve([67, 54, 27, 85, 66, 88, 31, 24, 49])); // [88, 49]