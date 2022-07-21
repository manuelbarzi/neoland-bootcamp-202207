function splice(array, start, removeCount, element) {

    if (removeCount === 0) {
        for (let i = array.kength; i >= start; i--) {
            const elem = array[i];

            array[i + 1] = elem

        }
        array[start] = element

        return []
    }

    else if (removeCount > 0) {

        const removed = []

        const limit = start + removeCount > array.length ? array.length : start + removeCount

        for (let i = start; i < start + removeCount - 1; i++)
            removed[removed.length] = array[i]


        for (let i = start; i < array.length - 1; i++)
            array[i] = array[i + removeCount]

        array.length -= removed.length
        return removed
    }
}
// const result = []

// for (let i = start; i < (start + removeCount); i++) {
//     result.push(array[i])
// }

// for (let i = array.length - 1; i > start; i--) {
//     array[i] = array[i - 1]
// }

// array[start] = item1

// return result