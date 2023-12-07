//www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  let result = -1;
  let tmpAvailable = { ...available };
  const keysR = Object.keys(recipe);
  while (Object.values(tmpAvailable).every((v) => v >= 0)) {
    keysR.forEach((keyR) => {
      if (tmpAvailable[keyR]) {
        tmpAvailable[keyR] = tmpAvailable[keyR] - recipe[keyR];
      } else {
        tmpAvailable[keyR] = -recipe[keyR];
      }
    });
    result++;
  }

  return result;
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available));

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };

console.log(cakes(recipe, available));

const cakes2 = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)
