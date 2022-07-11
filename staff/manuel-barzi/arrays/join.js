function join(array, separator) {
    // TODO ...
}

// tests

console.log('TEST join')

console.log(join(['Fire', 'Air', 'Water'], ' '))
// Fire Air Water

console.log(join(['Fire', 'Air', 'Water'], ''))
// FireAirWater

console.log(join(['Fire', 'Air', 'Water'], '-'))
// Fire-Air-Water

console.log(join(['Fire', 'Air', 'Water']))
// Fire,Air,Water