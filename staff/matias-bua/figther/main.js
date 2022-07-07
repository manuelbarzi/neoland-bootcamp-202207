console.log('%cFighter🔥%cv0.0', 'color: red; font-size: 32px;', 'color: dodgerblue;')


var fighter = document.querySelector('.fighter')
var oponent = document.querySelector('.oponent')


fighter.x = 200
fighter.y = 50
fighter.width = 50
fighter.score = 0
fighter.style.left =
fighter.x + 'px'

oponent.x = 600
oponent.width = 50
oponent.score = 0
oponent.style.left =
oponent.x + 'px'

document.onkeydown = function(Event) {

    console.log(Event.key)

    if (Event.key === 'ArrowRight') {
        fighter.x = fighter.x + 5
    }
        if (Event.key === 'ArrowDown') {
            fighter.x = fighter.y - 5
    } else if (Event.key === 'ArrowLeft') {
        fighter.x = fighter.y -5
    }
        fighter.style.left = fighter.x + 'px'

    if (Event.key === 'd') {
        oponent.x = oponent.x + 5
    } else if (Event.key === 'a') {
        oponent.x = oponent.x -5
    }
        oponent.style.left = oponent.x + 'px'
}
