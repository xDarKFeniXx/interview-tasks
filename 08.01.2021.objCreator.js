/*
Прислал Игорь, задача с реального собеседования.

Создать функцию objCreator(arr), в которую передается массив строк. Функция
должна вернуть объект с вложенными объектами под свойствами, переданными в
массиве.
*/

function objCreator(arr) {
    // if(!arr.length) return {}
    // const variable=arr.splice(0,1)
    // return {[variable]:objCreator(arr)}
    return arr.length ? { [arr.splice(0, 1)]: objCreator(arr) } : {};
}

console.log(objCreator(['a', 'b', 'c'])); // {a:{b:{c:{}}}}
console.log(objCreator(['a', 'b', 'c', 'd'])); // {a:{b:{c:{d:{}}}}}
console.log(objCreator([])); // {}