/*
Прислал Геворг.

Необходимо реализовать функцию accum, которая принимает строку, а возвращает
другую строку, как показано в примерах.

аккумулятор ("abcd") -> "A--BbCcc-Dddd"
аккумулятор ("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
аккумулятор ("cwAt") -> "C-Ww-Aaa-Tttt"
Параметр аккумулятора - это строка, которая включает только буквы от a..z и A..Z.
*/

/**
 * @param {string} str
 */
function accum(str) {
    return str.split('').map((str, i) => str.toUpperCase() + str.repeat(i)).join('-')
}

console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"
console.log()