/**
 * pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
 */

export function pyramid(n: number) {
    if(n===0){
        return []
    }
    return new Array(n).fill(0).map((item, index)=>item)
  }

  console.log(pyramid(2));
  
