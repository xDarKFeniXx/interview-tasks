export function countBits(n: number): number {
    console.log(n.toString(2).replace(new RegExp("0", "gi"), "").length)
    return 2
    // Program Me
  }

//   console.log(countBits(0));//0
//   console.log(countBits(4));//1
//   console.log(countBits(7));//3
  console.log(countBits(9));//2
  