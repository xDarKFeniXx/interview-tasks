
const arrDefib=[]
for (let i = 0; i < N; i++) {
    const DEFIB = readline().split(';');
    arrDefib.push({id:DEFIB[0], name:DEFIB[1], distance:distance(LON.replace(',', '.'),  LAT.replace(',', '.'), DEFIB[4].replace(',', '.'), DEFIB[5].replace(',', '.'))})
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
function findDefib(arr=[]){
    const min=Math.min(...arr.map(t=>+t.distance))    
    const index=arr.findIndex(item=>item.distance===min)
    return arr[index].name
}
function distance(longitudeA=0, latitudeA=0, longitudeB=0, latitudeB=0){
    const x=(+longitudeB-+longitudeA)*Math.cos((+latitudeA+ +latitudeB)/2)
    const y=+latitudeB- +latitudeA
    return 6371*Math.sqrt(x**2+y**2)
}
console.log(findDefib(arrDefib))