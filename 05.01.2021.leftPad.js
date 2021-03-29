/*
Прислал Дмитрий

Реализовать функцию leftPad, которая добавляет слева к строке пробелы.
Функция принимает два аргумента: число, обозначающее минимальную длину
результата, и строку, которую нужно дополнить, если её длина меньше.
*/
function leftPad(symbolsCount, str) {
    if(str.length >= symbolsCount) { 
        return str; 
    } 
    return " ".repeat(symbolsCount-str.length) + str;
}

console.log(leftPad(6, 'test')); // Вернет "  test"
console.log(leftPad(3, 'test')); // Вернет "test"