/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let pool1 = []
    let pool2 = []
    let p1 = []
    let p2 = []
    
    for(let i=0; i<pattern.length; i++) {
        
        if(pool1.indexOf(pattern[i]) === -1) {
            pool1.push(pattern[i])
        }
        
        p1.push(pool1.indexOf(pattern[i]))
    }

    let strArr = str.split(' ')

    for(let i=0; i<strArr.length; i++) {

        if(pool2.indexOf(strArr[i]) === -1) {
            pool2.push(strArr[i])
        }

        p2.push(pool2.indexOf(strArr[i]))
    }

    if(p1.length !== p2.length) {
        return false
    }

    for(let i=0; i<p1.length; i++) {
        if(p1[i] !== p2[i]) {
            return false
        }
    }

    return true
}

console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog cat dog dog"))
console.log(wordPattern("aaa", "aa aa aa aa"))