//https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

/**
 * 
 * @param {string[]} s array of strings 
 * @returns 
 */
function dup(s) {
  return s.map((word) =>
    word
      .match(/(.)\1*/g)
      .map((ch) => ch.charAt(0))
      .join("")
  );
}
function dup2(s) {
    return s.map(x => x.replace(/(.)\1+/g,'$1'))
}

console.log(
  dup2(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])
);

