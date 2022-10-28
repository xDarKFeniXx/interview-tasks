/**
 * https://www.codewars.com/kata/5536a85b6ed4ee5a78000035/train/typescript
 */

 export const tour = (friends:string[], fTowns:string[][], distTable:(string|number)[]): number => {
    // your code
    const dist=distTable.filter(item=>typeof item ==="number") as number[]
    let converterDist:number[]=[]
    for (let i = 0; i < dist.length-1; i++) {
        const current=dist[i]
        const next=dist[i+1]
        const temp=Math.sqrt(next**2-current**2)
        converterDist.push(temp)
    }
    
    return Math.floor(dist[0]+dist[dist.length-1]+converterDist.reduce((prev, current)=>current+=prev, 0))
  }

  let friends1  :string[]          = ["A1", "A2", "A3", "A4", "A5"];
  let fTowns1   :string[][]        = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
  let distTable1:(string|number)[] = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];

  console.log(tour(friends1, fTowns1, distTable1))