//hanburguesa transition
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav-home');

btnMenu.addEventListener('click', function () {
    nav.classList.toggle('mostrar');
});

// ===================================================================
const loginPage = document.querySelector('.login_page')
const registerPage = document.querySelector('.register_page')
const homePage = document.querySelector('.home_page')

// ===================PageHome=============================

// ==========================================================


loginPage.classList.add('off')
homePage.classList.remove('off')

const registerLink = loginPage.querySelector('.link-register')

registerLink.onclick = function (event) {

    event.preventDefault()

    //Oculto la pagina del login agregandole off a la clase ".login_page"
    loginPage.classList.add('off')
    //Muestro la pagina del register removiendo off a la clase ".register_page"
    registerPage.classList.remove('off')
}

const loginLink = registerPage.querySelector('.link-login')

loginLink.onclick = function (event) {
    //cancela la accion predeterminada del evento
    event.preventDefault()

    //Oculto la pagina del register agregandole off a la clase ".login_page"
    registerPage.classList.add('off')
    //Muestro la pagina del login removiendo off a la clase ".register_page"
    loginPage.classList.remove('off')
}

const btn__pluss= homePage.querySelector('.btn_plus')
const list__Notes=homePage.querySelector('.list')
const create__Note=homePage.querySelector('.createNote')
const btn__arrLeft=homePage.querySelector('.btn_arrLeft')


btn__pluss.onclick = function (event) {
    //cancela la accion predeterminada del evento
    event.preventDefault()

    
    list__Notes.classList.add('off')
    btn__pluss.classList.add('off') 
    create__Note.classList.remove('off')
   
 btn__arrLeft.classList.remove('off')
}

 btn__arrLeft.onclick = function (event) {
    //cancela la accion predeterminada del evento
    event.preventDefault()

    create__Note.classList.add('off')
    list__Notes.classList.remove('off')
    
    btn__arrLeft.classList.add('off')
    btn__pluss.classList.remove('off')
}

const loginForm = loginPage.querySelector('.form')

//para recoger los datos que ponemos en los inputs usamos .onsubmit
loginForm.onsubmit = function (event) {
    event.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    try {
        authenticateUser(email, password, function (error) {
            if (error) {
                alert(error.message)
                return
            }
            try {
                retrieveUser(email, function (error, user) {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    try {
                        retrieveNotes(user.id, function (error, notes) {
                            if (error) {
                                alert(error.message)
                                return
                            }

                            loginPage.classList.add('off')

                            const messageTitle = homePage.querySelector(".messageTitle")

                            messageTitle.innerText = " Hello " + user.name + " !"

                            const list = homePage.querySelector('.list')
                            //utilizams .innerHTML='' en list para que aparezca vacio al no tener notas
                            list.innerHTML = ''

                            notes.forEach(note => {
                                const item = document.querySelector('li')
                                item.classList.add('list__item')

                                //con innerText obtenemos el texto del item
                                item.innerText = note.text

                                list.append(item)
                            })

                            homePage.classList.remove('off')
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                })

            } catch (error) {
                alert(error.message)
            }

        })
    } catch (error) {
        alert(error.message)
    }
}



const registerForm = registerPage.querySelector('.form')
registerForm.onsubmit = function (event) {
    event.preventDefault()

    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value

    // try catch 
    try {
        registerUser(name, email, password, function (error) {

            if (error) {
                alert(error.message)
                return
            }
            registerPage.classList.add("off")
            loginPage.classList.remove("off")
        })

    } catch (error) {
        alert(error.message)
    }

}

