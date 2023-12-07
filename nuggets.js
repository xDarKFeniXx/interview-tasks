function GCD(arr) {
  let A = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let B = arr[i];

    let R = 0;

    while (B != 0) {
      R = A % B; // Consecutive Euclidian divisions A = B.Q+R
      // GCD(A, B) = GCD(B, R);  A <- B and B <- R
      A = B; // until R=0.
      B = R;
    }
  }
  return A;
}
function nextXuplets(X, Xmax, A, size, N) {
  for (let j = size - 1; j >= 0; j--) {
    if (X[j] != Xmax[j]) {
      X[j]++;

      for (let k = j + 1; k <= size - 1; k++) {
        X[k] = 0;

        Xmax[k] = N;

        for (let l = 0; l < j + 1; l++) {
          Xmax[k] -= A[l] * X[l];
        }

        Xmax[k] = Math.floor(Xmax[k] / A[k]);
      }

      return false;
    }
  }

  return true;
}
function isMatch(A, X, N) {
  let sum = 0;
  A.forEach((el, idx) => {
    sum += el * X[idx];
  });

  if ((N - sum) % A[A.length - 1] == 0) {
    X[A.length - 1] = (N - sum) / A[A.length - 1];
    return true;
  } else {
    return false;
  }
}

function clique(array) {
  if (GCD(array)!==1) {
    return -1;
  }
  array.sort((a, b) => b - a);

  let consecutiveMatch = 0;
  const X = new Array();
  const Xmax = new Array();
  let val = array[0]-1;
  let N = array[0]-1;
  while (consecutiveMatch != array[array.length - 1]) {
    console.log(consecutiveMatch);
    let found = false;
    let finish = false;
    array.forEach((el, idx) => {
      X[idx] = 0;
      Xmax[idx] = Math.floor(N / el);
    });
    while (!finish) {
      if (isMatch(array, X, N)) {
        found = true;
        break;
      }

      finish = nextXuplets(X, Xmax, array, array.length - 1, N);
    }
    if (found) {
      consecutiveMatch++;
    } else {
      val = Math.max(val, N);
      consecutiveMatch = 0;
    }
    N++;
  }

  return val;
}

/**
 * 
 * @param {number[]} array 
 * @returns {number}
 */
const getNumber=(array)=>{
  const ggg=GCD(array)
  console.log(ggg);
  if(GCD(array)!==1){
    return -1
  }
  array.sort((a,b)=>b-a)
  return 1
}
console.log("heheh");
console.log(clique([30, 42, 105]));

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

/*
In the classical money changing problem (MCP),
we are given k coins of different values a1<a2<...<ak with gcd(a1,...,ak)=1.
We want to know what change n=Sum_i(ai*xi) we can generate from these coins
for non-negative intergers xi, assuming that we have an infinite supply of coins.
Then, there exists an integer g(a1,...ak) called the Frobenius number of a1,...,ak,
such that g(a1,...,ak) does not allow a decomposition of the above type, but all
integers n>g(a1,...,ak) do.

For Frobenius number of k=2 coins a1,a2:
g(a1,a2)=a1*a2-a1-a2


*/

//a0 to ak coins
function roundRobinAlgorithm(a){ //a is a coin array
    const k=a.length

    let n=[]
    n[0]=0
    for (p=1; p<a[0]; p++){
        n[p]=-1
    }
    
    for (i=1; i<k; i++){
        let d=gcd(a[0],a[i])
        for (let r=0; r<d; r++){
            let m=-1
            if (r==0){
                m=0
            } else {
                for (let q=r; q<a[0]-1; q+=d){
                    if (n[q]!=-1 && (n[q]<m || m==-1)){
                        m=n[q]
                    }
                }
            }            
            if (m != -1){
                for (let j=0; j<a[0]/d-1; j++){
                    m=m+a[i]
                    p=m % a[0]
                    if (n[p]!=-1 && (n[p]<m || m==-1)){
                        m=n[p]
                    }
                    n[p]=m
                }
            }
        }
    }
    let max=0
    for (let i=0; i<a[0]; i++){
        if (n[i]==-1 || n[i]>max){
            max=n[i]
        }              
    }
    return max==-1 ? -1 : max-a[0]
}

console.log(roundRobinAlgorithm([30, 42, 105]))
