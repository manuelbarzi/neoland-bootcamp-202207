console.log('%cFighter🔥%cv0.0', 'color: red; font-size: 32px;', 'color: dodgerblue;')

//declarar variable 'fighter' i assignar-li un element HTML cuyo atribut class amb el valor 'fighter'//

var fighter = document.querySelector('.fighter')
var oponent = document.querySelector('.oponent')

fighter.x = 200
fighter.y = 200
fighter.width = 50
fighter.score = 0
fighter.style.left = fighter.x + 'px'
fighter.style.top = fighter.y + 'px'

oponent.x = 500
oponent.y = 200
oponent.width = 50
oponent.score = 0
oponent.style.left = oponent.x + 'px'
oponent.style.top = oponent.y + 'px'

document.onkeydown = function(event) {
    // fighter

    if (event.key === 'ArrowRight') {
        fighter.x = fighter.x + 10
    } else if (event.key === 'ArrowLeft') {
        fighter.x = fighter.x - 10
    } else if(event.key === 'ArrowUp') {
        fighter.y = fighter.y - 10
    }else if (event.key === 'ArrowDown') {
        fighter.y = fighter.y + 10
    }
    
    fighter.style.top = fighter.y + 'px'

    fighter.style.left = fighter.x + 'px'
    


    

    
    



    // opponent
    
    if (event.key === 'd') {
        oponent.x = oponent.x + 10
    } else if (event.key === 'a') {
        oponent.x = oponent.x - 10
    }

    oponent.style.left = oponent.x + 'px'
}

document.onkeydown = function(event){

if (event.key === 'ArrowUp') {
    fighter.y = fighter.y - 10
} else if (event.key === 'ArrowDown') {
    fighter.y = fighter.y + 10
}

fighter.style.top = fighter.y + 'px'
}