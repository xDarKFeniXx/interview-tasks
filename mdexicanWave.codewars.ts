/**
 * 
 * https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/typescript
 * In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
 */

 export function wave(str: string): Array<string>{
    const result:string[]=[]
    for (let i = 0; i < str.length; i++) {
        const element=str.split('').map((letter, index)=>{
            if(letter!==" " && index===i){
                return letter.toUpperCase()
            }
            return letter
        }).join('')
        result.push(element)
    }
    return result.filter(el=>el!==str)
  }

  console.log(wave("hello"));
  
  export function wave2(str: string): Array<string>{
    const result:string[] = [];
    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) === ' '){
        continue;
      }
      result.push(str.substring(0, i) + str.charAt(i).toUpperCase() + str.substring(i + 1)); 
    }
    return result;
  }