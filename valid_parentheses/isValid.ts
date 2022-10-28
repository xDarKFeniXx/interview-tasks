
const recursiveCleanArray = (arr: IArrayElement[]) => {
    console.log(arr);
    
    if (arr.length > 2) {
        const index = arr.findIndex((item, index) => item.value === "(" && arr[index + 1].value === ")")

        return recursiveCleanArray([...arr.slice(0, index), ...arr.slice(index + 2)])
    }
    if (arr.length === 2) {
        if (arr[0].value === "(") {
            if (arr[1].value === ")") {

                return undefined
            } else {
                return arr[0].originIndex
            }
        } else {
            return arr[0].originIndex
        }
    }
    if (arr.length === 1) {
        return arr[0].originIndex
    }

}
interface IArrayElement {
    originIndex: number
    value: string
}
export const isValid = (str: string) => {
    const arr = str.split('').map((el, index) => ({ originIndex: index, value: el })).filter(el => el.value === "(" || el.value === ")")
    return recursiveCleanArray(arr)

}


/**
 * (()(()()
 * ((()()
 * ((()
 * ((
 */
function isValid2(s: string) {
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const st = [];
    for (let i = 0; i < s.length; i++) {
        if (isClosedBracket(s[i])) {
            if (brackets[s[i]] !== st.pop()) return i;

        } else {
            st.push(s[i]);
        }
    }
    return st.length === 0 ? undefined : st[0];
}
function isClosedBracket(ch) {
    return [')', ']', '}'].includes(ch);
}

export const isValid3 = (str: string) => {
    const arr = str.split('').map((el, index) => ({ originIndex: index, value: el })).filter(el => el.value === "(" || el.value === ")")
    const st = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.value === ")") {
            if (st.pop()?.value !== "(") return element.originIndex
        } else {
            st.push(element)
        }
        return st.length === 0 ? undefined : st[0].originIndex
    }
}

// console.log(isValid("()")); //undefined
console.log(isValid("(()")); //undefined
// console.log(isValid("())()()")); //2
// console.log(isValid(")(")); //0
// console.log(isValid("(())()")); //undefined
// console.log(isValid("(()(()()")); //0