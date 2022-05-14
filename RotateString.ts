/**
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
 *
 * A shift on s consists of moving the leftmost character of s to the rightmost position.
 *
 * For example, if s = "abcde", then it will be "bcdea" after one shift.
 *
 *
 * Example 1:
 *
 * Input: s = "abcde", goal = "cdeab"
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "abcde", goal = "abced"
 * Output: false
 */
function rotateString(str: string, goal: string): boolean {
    let temp = str
    let res = false

    for(let i=0; i<str.length; i++) {
        temp += temp[0]
        temp = temp.substring(1)

        if(temp === goal) {
            res = true
        }
    }

    return res
}

console.log(rotateString('abcde', 'cdeab'))
console.log(rotateString('abcde', 'abced'))