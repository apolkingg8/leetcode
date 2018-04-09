/*
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

The expression string contains only non-negative integers, +, -, *, / operators , open ( and closing parentheses ) and empty spaces . The integer division should truncate toward zero.

You may assume that the given expression is always valid.

Some examples:

"1+1" = 2
"6-4/2" = 4
"2*(5+5*2)/3+(6/2+8)" = 21
"(2+6*3+5-(3*14/7+2)*5)+3" = -12

 */
/**
 * @param {string} str
 * @return {number}
 */
var calculate = function(str) {
    let stack = [
        []
    ]
    let stackI = 0

    for(let i=0; i<str.length; i++) {
        let curr = str[i]

        if(curr === '(') {
            stackI += 1
            stack[stackI] = ''
            continue
        }

        if(curr === ')') {
            let stackRes = basicCalculator(stack[stackI])
            stackI -= 1
            stack[stackI] += stackRes
            continue
        }

        stack[stackI] += curr
    }

    return basicCalculator(stack[0])
};

let basicCalculator = (str)=> {
    let stack = str.split(/(\+|\-)/)
    let temp = null

    for(let i=0; i<stack.length; i++) {

        if(isNaN(parseInt(stack[i]))) {
            continue
        }

        let stack2 = stack[i].split(/(\*|\/)/)
        let temp2 = parseInt(stack2[0])

        for(let j=0; j<stack2.length; j++) {

            if(isNaN(parseInt(stack2[j]))) {
                continue
            }

            if(stack2[j-1] !== undefined) {

                if(stack2[j-1] === '*') {
                    temp2 *= parseInt(stack2[j])
                }

                if(stack2[j-1] === '/') {
                    temp2 /= parseInt(stack2[j])
                }
            }
        }

        stack[i] = temp2

        if(temp === null) {
            temp = stack[0]
        }

        if(stack[i-1] !== undefined) {

            if(stack[i-1] === '+') {
                temp += parseInt(stack[i])
            }

            if(stack[i-1] === '-') {
                temp -= parseInt(stack[i])
            }
        }
    }

    return temp
}

//console.log(calculate("1+1")) // 2
//console.log(calculate("6-4/2")) // 4
console.log(calculate("2*(5+5*2)/3+(6/2+8)")) // 21
console.log(calculate("(2+6*3+5-(3*14/7+2)*5)+3")) // -12
