describe('map', function() {
    test('array of numbers', function() {
        const arrayOfNumbers = [1, 2, 5, 7, 65];
        const result = map((x) => x * 2, arrayOfNumbers);


        check(result.length, 5)
        check(result[0], arrayOfNumbers[0] * 2)
        check(result[1], arrayOfNumbers[1] * 2)
        check(result[2], arrayOfNumbers[2] * 2)
        check(result[3], arrayOfNumbers[3] * 2)
        check(result[4], arrayOfNumbers[4] * 2)
    })

    test('array of objects', function() {
        const personas = [
            {nombre: "Luis", apellido: "Garrido"},
            {nombre: "Helena", apellido: "Tendero"},
            {nombre: "Julia", apellido: "Otero"}
        ];
        const result = map((x) => [x.nombre,x.apellido].join(" "), personas);

        check(result.length, 3)
        check(result[0], personas[0].nombre + ' ' + personas[0].apellido )
        check(result[1], personas[1].nombre + ' ' + personas[1].apellido )
        check(result[2], personas[2].nombre + ' ' + personas[2].apellido )
    })
})
