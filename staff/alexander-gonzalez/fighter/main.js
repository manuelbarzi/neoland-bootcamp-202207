console.log('%cfighter %cv0.0','color:red; font-size:30px')

var fighter = document.querySelector('.fighter');
var oponent = document.querySelector('.oponent')

fighter.x = 100
fighter.widht = 50
fighter.score = 0
fighter.style.left = fighter.x + 'px'



document.onkeydown = function(event){
    console.log(event.key)


if(event.key === 'ArrowRight')
{
        x = x +10
    }
    else if(event.key === 'ArrowLeft')
     {
        x = x-10
      }
     fighter.style.left = x + 'px'
     console.log('fighter position', x)
    }