const temp = (str: string)=> {
    let max = 0

    for(let i=0; i<str.length; i++) {
        let isGood = true

        for(let j=i+1; j<str.length; j++) {
            let ni = parseInt(str[i])
            let nj = parseInt(str[j])

            if(nj-ni !== j-i) {
                isGood = false
            }

            if(!isGood) {
                break
            }

            max = Math.max(max, j-i+1)
        }
    }

    return max
}

console.log(temp('156461123468'))
console.log(temp('12358984'))
console.log(temp('123456789'))
