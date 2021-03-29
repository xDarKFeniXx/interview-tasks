/*
Прислал Dmitriy Zhukov, задача с реального собеседования.

Мы получаем массив строк, состоящих из интервалов натуральных чисел, разделённых
дефисом ('1-5'). Нужно вернуть массив строк в таком же формате, но склеив
пересекающиеся интервалы.
*/
function intersect(arr: Array<string>) {

    const sortArr=arr.map(item => item.split('-').map(Number)).sort((a, b) => a[0] - b[0])
    const newArr=sortArr.slice(0,1)
    sortArr.forEach(el=>{
        const last =newArr[newArr.length-1]
        if(last[1]>=el[0]){
            if(last[1]<=el[1]){
                last[1]=el[1]
            }
        } else{
            newArr.push(el)
        }
    })
    return newArr.map(item=>item.join('-'))
}

console.log(intersect(['1-5', '7-9', '2-6']));     // ['1-6', '7-9']
console.log(intersect(['2-4', '5-5', '5-15']));    // ['2-4', '5-15']
console.log(intersect([]));   