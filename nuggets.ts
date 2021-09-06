const lastCase = [143, 187, 209, 377, 629, 667, 899, 1147, 1271, 1599]; //2201
const lastCase2 = [6, 9, 20]; //43
const arr = lastCase;
function isCoprime(a: number, b: number) {
  let num: number;
  while (b) {
    num = a % b;
    a = b;
    b = num;
  }
  if (Math.abs(a) == 1) {
    return true;
  }
  return false;
}

function test(arr: number[]) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (isCoprime(arr[i], arr[j])) {
        result.push(arr[i] * arr[j] - arr[i] - arr[j]);
      }
    }
  }
  return result;
}

const minFromArr = Math.min(...arr);
const resultArr = test(arr).sort((a, b) => a - b);
console.error("resultArr", resultArr);
const result = resultArr.find((item) => item > minFromArr);

if (!result) {
  console.log(-1);
} else {
  console.log(result);
}
