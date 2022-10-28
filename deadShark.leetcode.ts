/**
 * https://www.codewars.com/kata/51e0007c1f9378fa810002a9/typescript
 * Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.
 */

/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  const result:number[]=[]
  let value=0
    data.replace(/[^idso]+/g, "").split('').forEach(letter=>{
        switch(letter){
            case 'i':{
                value++
                break
            }
            case 'd':{
                value--
                break
            }
            case 's':{
                value=value*value
                break
            }
            case 'o':{
                result.push(value)
            }
            default:
                break
        }
    })
  return result
}
console.log(parse("iiisdoso"));
console.log(parse("iiisxxxdoso"));
