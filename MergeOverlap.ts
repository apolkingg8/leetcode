const mergeOverlap = (intervals: number[][])=> {
    if (intervals.length === 0) {
        return []
    }

    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals.shift()]

    while(sortedIntervals.length > 0) {
        const last = res.length - 1
        const [start, end] = sortedIntervals[0]

        if (res[last][1] >= end) {
            sortedIntervals.shift()
        } else if (res[last][1] >= start) {
            res[last][1] = end;
            sortedIntervals.slice(1)
        } else {
            res.push(sortedIntervals.shift())
        }
    }

    return res
}
