/*
Binary with 0 and 1 is good, but binary with only 0, or almost, is even better! Originally, this is a concept designed by Chuck Norris to send so called unary messages.

Write a program that takes an incoming message as input and displays as output the message encoded using Chuck Norris’ method.

 	Rules
Here is the encoding principle:

The input message consists of ASCII characters (7-bit)
The encoded output message consists of blocks of 0
A block is separated from another block by a space
Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):
- First block: it is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
- Second block: the number of 0 in this block is the number of bits in the series
 	Example
Let’s take a simple example with a message which consists of only one character: Capital C. C in binary is represented as 1000011, so with Chuck Norris’ technique this gives:

0 0 (the first series consists of only a single 1)
00 0000 (the second series consists of four 0)
0 00 (the third consists of two 1)
So C is coded as: 0 0 00 0000 0 00

 
Second example, we want to encode the message CC (i.e. the 14 bits 10000111000011) :

0 0 (one single 1)
00 0000 (four 0)
0 000 (three 1)
00 0000 (four 0)
0 00 (two 1)
So CC is coded as: 0 0 00 0000 0 000 00 0000 0 00
*/
function chuckNorisBinary(m = "") {
  c = ["00", "0"];
  let res = "";
  for (const w of m) res += w.charCodeAt(0).toString(2).padStart(7, "0");

  let a = c[res.charCodeAt(0) - "0".charCodeAt(0)] + " 0";
  for (let i = 1; i < res.length; i++) {
    if (res[i] === res[i - 1]) a += "0";
    else a += " " + c[res[i].charCodeAt(0) - "0".charCodeAt(0)] + " 0";
  }
  return a;
}

console.log(myVersion("C"));
console.log(myVersion("CC"));
// console.log(chuckNorisBinary("Message from Chuck Norris"));
    
function chuckNorisBinary2(str=''){
    return str.split('')
    .map(c => ('0' + c.charCodeAt(0).toString(2)).slice(-7))
    .join('')
    .match(/(.)\1*/g)
    .map(c => ['00 ','0 '][c[0]] + '0'.repeat(c.length))
    .join(' ')
}
function myVersion(str=''){
    const arr=str
    .split('')
    .map(c => ('0' + c.charCodeAt(0).toString(2))
    .slice(-7)
    )
    .join('')
    .match(/(.)\1*/g)
    return arr
}



