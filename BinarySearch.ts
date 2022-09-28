
const binarySearch = (arr: number[], target: number)=> {
    const search = (startIndex: number, endIndex: number)=> {
        if(startIndex > endIndex) {
            return -1
        }

        const midIndex = Math.floor((startIndex + endIndex) / 2)

        if(target === arr[midIndex]) {
            return midIndex
        } else if(target > arr[midIndex]) {
            return search(midIndex + 1, endIndex)
        } else {
            return search(startIndex, midIndex - 1)
        }
    }

    return search(0, arr.length - 1)
}

console.log(binarySearch([1, 3, 5, 7, 9, 10, 11, 12, 14, 15, 19, 20], 7))
