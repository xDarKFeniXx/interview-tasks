const str = "This website is for losers LOL!";

export class Kata {
  static disemvowel(str: string): string {
    return str
      .split("")
      .filter((item) => !item.match(/[aeiou]/i))
      .join("");
  }
}

console.log(Kata.disemvowel(str));
