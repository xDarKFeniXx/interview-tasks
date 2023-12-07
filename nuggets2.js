function nuggetsSolve(arr) {
  N = 4000;
  memory = [];
  P = arr;
  n = arr.length;

  // --------------------------------------------------------

  for (answer = N; answer; answer--) if (canI(answer) < 0) break;

  if (answer >= N - 1) answer = -1; // ???

  return answer;

  // --------------------------------------------------------
  function canI(nuggets) {
    if (nuggets < 0) return -1;
    if (nuggets == 0) return 1;
    if (memory[nuggets]) return memory[nuggets];
    for (let i = 0; i < n; i++)
      if (canI(nuggets - P[i]) > 0) return (memory[nuggets] = 1);
    return (memory[nuggets] = -1);
  }
}

console.log(
  nuggetsSolve([143, 187, 209, 377, 629, 667, 899, 1147, 1271, 1599])
);
console.log(
  nuggetsSolve([5, 10])
);
console.log(
  nuggetsSolve([2, 5])
);
