/*
 Given two strings s and t, write a function to determine if t is an anagram of s.

 For example,
 s = "anagram", t = "nagaram", return true.
 s = "rat", t = "car", return false.

 Note:
 You may assume the string contains only lowercase alphabets.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false

    var res_s = destructor(s),
        res_t = destructor(t)

    for(var key in res_s) {
        if(res_s[key] !== res_t[key]) {
            return false
        }
    }

    return true
};

var destructor = function (str) {
    var res = {}

    for(var i = 0; i < str.length; i ++) {
        var nowWrod = str[i]
        if(!res[nowWrod]) {
            res[nowWrod] = 1
        } else {
            res[nowWrod] ++
        }
    }

    return res
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('a', 'ab'))