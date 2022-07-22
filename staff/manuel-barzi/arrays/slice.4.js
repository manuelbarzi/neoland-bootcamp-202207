function slice(array, start, end) {
    const sliced = []

    if (start < 0)
        start = array.length + start

    if (end === undefined)
        end = array.length
    else if (end < 0)
        end = array.length + end

    if (start >= end) // early return
        return sliced

    for (let i = start; i < end; i++) {
        const element = array[i]

        sliced[sliced.length] = element
    }

    return sliced
}