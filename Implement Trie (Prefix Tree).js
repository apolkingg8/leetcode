/*
Implement a trie with insert, search, and startsWith methods.

Note:
You may assume that all inputs are consist of lowercase letters a-z.
 */

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.nodes = {}
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

    for(let i = 0, current = this.nodes; i < word.length; i++) {
        let letter = word[i]

        if(!(letter in current)) {
            current[letter] = {}
        }

        if(i === word.length - 1) {
            current[letter].isWord = true
        }

        current = current[letter]
    }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

    for(let i = 0, current = this.nodes; i < word.length; i++) {
        let letter = word[i]

        if(!(letter in current)) {
            return false
        }

        if(i === word.length - 1) {
            return current[letter].isWord === true
        }

        current = current[letter]
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

    for(let i = 0, current = this.nodes; i < prefix.length; i++) {
        let letter = prefix[i]

        if(!(letter in current)) {
            return false
        }

        current = current[letter]
    }

    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie = new Trie()
trie.insert('word')
console.log(trie.search('wor'))
console.log(trie.search('word'))
console.log(trie.search('word1'))
console.log(trie.startsWith('wor'))
console.log(trie.startsWith('word'))
console.log(trie.startsWith('word1'))
debugger