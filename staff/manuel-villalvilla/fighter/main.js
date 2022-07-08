console.log('%cFighter🔥%cv0.0', 'color: red; background-color: yellow; font-size: 20px;', 'color: lightblue');
var fighter = document.querySelector('.fighter')
// declara variable fighter y le asinga la clase fighter del documento HTML
var opponent = document.querySelector('.opponent')
// declara variable fighter y le asinga la clase fighter del documento HTML
// var score = document.querySelector ('.score')
var result1 = document.querySelector('.result1')
var result2 = document.querySelector('.result2')

fighter.x = 200
// posición inicial fighter
fighter.width = 50
fighter.score = 0
fighter.style.left = fighter.x + 'px'

opponent.x = 500
opponent.width = 50
opponent.score = 0
opponent.style.left = opponent.x + 'px'

document.onkeydown = function (event) {
    // detecta las tecla que presionas y la devuelve en consola
    // fighter
    if (event.key === 'ArrowRight') {
        fighter.x = fighter.x + 10
    } else if (event.key === 'ArrowLeft') {
        fighter.x = fighter.x - 10
    }
    fighter.style.left = fighter.x + 'px'

    //opponent

    if (event.key === 'd') {
        opponent.x = opponent.x + 10

    } else if (event.key === 'a') {
        opponent.x = opponent.x - 10
    }
    opponent.style.left = opponent.x + 'px'

    if (event.key === ' ' && (fighter.x + fighter.width >= opponent.x) && !(fighter.x >= opponent.x + opponent.width)) {
        fighter.score = fighter.score + 1
    }

    if (event.key === 'h' && (opponent.x + opponent.width >= fighter.x) && !(opponent.x >= fighter.x + fighter.width)) {
        opponent.score = opponent.score + 1
    }
    result1.innerHTML = fighter.score
    result2.innerHTML = opponent.score
    // console.log('scores', fighter.score, opponent.score)
}


//     if (fighter.x + fighter.width >= opponent.x)
//         fighter.score = fighter.score + 1
// console.log('scores', fighter.score, opponent.score)
// }

// document.onkeydown = function (event) {
//     // console.log(event.key) detecta las tecla que presionas y la devuelve en consola
//     if (event.key === 'd') {
//         opponent.x = opponent.x + 10

//     } else if (event.key === 'a') {
//         opponent.x = opponent.x - 10
//     }

//     opponent.style.left = opponent.x + 'px'
// }