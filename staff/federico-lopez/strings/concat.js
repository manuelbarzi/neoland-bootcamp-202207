function concat() {
    let result = ''

    for (let i = 0; i < arguments.length; i++) {
        //const argument = arguments[i]
        //result += argument

        //result = result + arguments[i]
        result += arguments[i]
    }

    return result
}