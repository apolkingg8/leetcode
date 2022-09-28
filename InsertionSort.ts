
const insertionSort = (arr: number[])=> {
    const res = [...arr]

    for(let i=0; i<res.length; i++) {
        let position = i
        let value = res[i]

        while(i >= 0 && res[position - 1] > value) {
            [res[position], res[position - 1]] = [res[position - 1], res[position]]
            position --
        }

        res[position] = value
    }

    return res
}

console.log(insertionSort([5,7,8,6,1,4]))
