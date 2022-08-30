function lengthOfLongestSubstring(str: string): number {
    let max = 0
    let currStr = ''

    for(let i=0; i<str.length; i++) {
        const char = str[i]
        const pos = currStr.indexOf(char)

        if(pos > -1) {
            currStr = currStr.slice(pos + 1)
        }

        currStr += char
        max = Math.max(max, currStr.length)
    }

    return max
}

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
