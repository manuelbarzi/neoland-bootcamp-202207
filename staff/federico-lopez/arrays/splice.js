function splice(array, start, deleteCount) {
    if (start < 0)
        start += array.length
    
    const result = []

    const itemsToAdd = arguments.length - 3
    const arrayLengthChange = itemsToAdd - deleteCount

    for (let i = start; i < (start + deleteCount); i++)
        result.push(array[i])

    if (arrayLengthChange > 0)
        for (let i = array.length - 1; i > start - 1; i--)
            array[i + arrayLengthChange] = array[i]

    else if (arrayLengthChange < 0) {
        for (let i = start - arrayLengthChange; i < array.length; i++)
            array[i + arrayLengthChange] = array[i]

        array.length += arrayLengthChange
    }

    for (let i = 3; i < arguments.length; i++)
        array[start + i - 3] = arguments[i]

    return result
}