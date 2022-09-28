
const selectionSort = (arr: number[])=> {
    const res = [...arr]

    for(let i=0; i<res.length; i++) {
        let min = res[i]
        let minIndex = i

        for(let j=i; j<res.length; j++) {
            if(res[j] < min) {
                min = res[j]
                minIndex = j
            }
        }

        [res[i], res[minIndex]] = [res[minIndex], res[i]]
    }

    return res
}

console.log(selectionSort([5,7,8,6,1,4]))
