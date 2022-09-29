
const bubbleSort = (arr: number[])=> {
    const res = [...arr]

    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-1; j++) {
            if(res[j] > res[j+1]) {
                [res[j], res[j+1]] = [res[j+1], res[j]]
            }
        }
    }

    return res
}

console.log(bubbleSort([5,2,5,8,9,7,1]))
