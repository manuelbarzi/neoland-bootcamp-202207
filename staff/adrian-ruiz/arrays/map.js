var arrayOfNumbers = [1, 2, 5, 7, 65];
var personas = [
    {nombre: "Luis", apellido: "Garrido"},
    {nombre: "Helena", apellido: "Tendero"},
    {nombre: "Julia", apellido: "Otero"}
];

function map(x, array){
    let newArray = []
    let indice = 0
    for (let i = 0; i < array.length ; i++){
        newArray[indice] = x(array[i])
        indice++
    }
    return newArray
}

console.log(map((x) => x * 2, arrayOfNumbers));
// expected output: [2, 4, 10, 14, 130]

console.log(map((x) => [x.nombre,x.apellido].join(" "), personas));
// expected output: ['Luis Garrido', 'Helena Tendero', 'Julia Otero']