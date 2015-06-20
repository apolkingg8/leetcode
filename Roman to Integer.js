/*
 Given a roman numeral, convert it to an integer.

 Input is guaranteed to be within the range from 1 to 3999.
*/
'use strict'
/**
 * @param {string} s
 * @return {number}
 */
/*var romanToInt = function(s) {
    //fucking bad performance with map... 536ms
    var MARKS = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],

        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900]
    ]);

    var res = 0;
    var n = s.length;

    for(var i=0; i< n; i++) {
        var rom1 = s[i],
            rom2 = s[i+1];

        if(!MARKS.has(rom1+rom2)) {
            res += MARKS.get(rom1);
        } else {
            res += MARKS.get(rom1+rom2);
            i++;
        }
    }

    return res
};*/
'use strict'
const MARKS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,

    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
};

var romanToInt = function(s) {
    //FIXME: bad solution. 400ms

    var res = 0;
    const n = s.length;

    for(var i=0; i<n; i++) {
        const rom1 = s[i],
            rom2 = rom1 + s[i+1];

        if(MARKS[rom2] === undefined) {
            res += MARKS[rom1];
        } else {
            res += MARKS[rom2];
            i++;
        }
    }

    return res
};

console.log(romanToInt('XIX')); //19
console.log(romanToInt("DCXXI")); //621