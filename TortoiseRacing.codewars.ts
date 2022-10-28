/**
 * https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/typescript
 * 
 */

 export const race = (v1:number, v2:number, g:number) => {
    if(v1>=v2){
        return null
    }
    const time=g/(v2-v1)
    console.log(time);
    const hour=Math.floor(time)
    console.log(hour);
    const minutes=Math.floor((time-hour)*60)
    console.log(minutes);
    const seconds=Math.floor((time-hour)*60*60-minutes*60)
    console.log(seconds);
    
    return [hour, minutes, seconds]
  }

  console.log(race(720, 850, 70));
  