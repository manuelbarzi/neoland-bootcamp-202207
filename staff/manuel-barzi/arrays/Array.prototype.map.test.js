describe('Array.prototype.map', () => {
    test('map people to strings', () => {
        const people = [
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        ]

        const toString = function(person) {
            return person.name + ' ' + person.surname + ' (' + person.age + ')'
        }

        const strings = people.map(toString)

        check(strings.length, people.length)
        check(strings[0], 'Peter Pan (15)')
        check(strings[1], 'James Hook (40)')
        check(strings[2], 'Pepito Grillo (50)')
        check(strings[3], 'Wendy Pan (14)')
        check(strings[4], 'Pin Ocho (8)')
    })
})