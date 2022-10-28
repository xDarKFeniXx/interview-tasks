
const MORSE_CODE={
    // .... . -.--   .--- ..- -.. . HEY JUDE 
    "....": "H",
    ".": "E",
    "-.--": "Y",
    ".---":"J",
    "..-":"U",
    "-..":"D",
}

export function decodeMorse(morseCode: string): string {
    return morseCode.split("   ").map(word=>word.split(" ").map(letter=>MORSE_CODE[letter]).join("")).join(" ")
  }

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
