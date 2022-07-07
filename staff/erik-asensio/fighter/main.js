console.log('%cFighter🔥%cv0.0', 'color: red; font-size: 32px;', 'color: dodgerblue;')

var fighter = document.querySelector('.fighter')
//Declare "fighter" variable and assign to it the HTML element with the attribute class "fighter"

var opponent = document.querySelector(".opponent")
//Declara la variable opponent y la asigna al .opponent de HTML

fighter.x = 200     //Asigna una posicion principal al luchador
fighter.width = 50      //Asigna un ancho al luchador
fighter.score = 0       //Asigna un score al luchador
fighter.style.left = fighter.x + "px"   //Suma un px a la posicion al luchador

opponent.x = 500        //Asigna una posicion principal al rival
opponent.width = 50     //Asigna un ancho al rival
opponent.score = 0      //Asigna un score al rival
opponent.style.left = opponent.x + "px"     //Suma un px a la posicion al rival

document.onkeydown =function(Event){

    console.log(Event.key)
    //fighter
    if(Event.key === "ArrowRight"){     //Si la tecla "Flecha derecha" está pulsada...
        fighter.x= fighter.x + 10;      //Se le suma un valor de 10 a la posicion al luchador
    }

    if(Event.key === "ArrowLeft"){      //Si la tecla "Flecha izquierda" está pulsada...
        fighter.x= fighter.x - 10;      //Se le resta un valor de 10 a la posicion al luchador
    }
    fighter.style.left = fighter.x + "px"

    //opponent
    if (Event.key === "d"){     //Si la tecla "D" está pulsada...
        opponent.x= opponent.x + 10;        //Se le suma un valor de 10 a la posicion al luchador
    }

    if(Event.key === "a"){      //Si la tecla "A" está pulsada...
        opponent.x= opponent.x - 10;        //Se le resta un valor de 10 a la posicion al rival
    }
    opponent.style.left = opponent.x + "px"
}



