/*
 Given an integer, write a function to determine if it is a power of three.
 Follow up:
    Could you do it without using any loop / recursion?
 */

'use strict'

/**
 * @param {number} n
 * @return {boolean}
 */
/*var isPowerOfThree = function(n) {

    for(let i = 1; i <= n; i=i*3) {
        //console.log(i)
        if(i === n) {
            return true
        }
    }

    return false
};*/


// no loop version

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return  n>0 && 1162261467%n == 0
};

