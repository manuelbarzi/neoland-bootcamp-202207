const loginPage = document.querySelector('.loginPage')
const registerPage = document.querySelector('.registerPage')
const homePage = document.querySelector('.homePage')

const loginForm = document.querySelector('.loginForm')
const registerForm = document.querySelector('.registerForm')

const registerLink = document.querySelector('.registerLink')
const loginLink = document.querySelector('.loginLink')

// temp for design purposes (Disable login enable home)
loginPage.classList.add('off')
homePage.classList.remove('off')

// temp for design purposes (Disable login enable register)
/* loginPage.classList.add('off')
registerPage.classList.remove('off') */

registerLink.addEventListener("click", function (event) {
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
})

loginLink.addEventListener("click", function (event) {
    event.preventDefault()

    loginPage.classList.remove('off')
    registerPage.classList.add('off')


})

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const inputEmail = loginForm.email.value
    const inputPassword = loginForm.password.value
    // Cambiar todo lo que accedamos por loginForm por -> event.target.email.value...
    try {
        authenticateUser(inputEmail, inputPassword, function (error) {
            if (error) {
                alert(error.message)
                return
            }

            try {
                retrieveUser(inputEmail, function (error, user) {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    // Guardo el id del usuario
                    sessionStorage.setItem('UserStored', JSON.stringify(user))

                    const headerTitle = document.getElementById('headerTitle')
                    headerTitle.textContent = `Hello, ${user.name}`

                    refreshList()

                    homePage.classList.remove('off')
                    loginPage.classList.add('off')
                })
            } catch (error) {
                alert(error.message)
            }
        })
    } catch (error) {
        alert(error.message)
    }
    loginForm.reset()
})

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const inputName = registerForm.name.value
    const inputEmail = registerForm.email.value
    const inputPassword = registerForm.password.value

    try {
        registerUser(inputName, inputEmail, inputPassword, function (error) {

            if (error) {
                alert(error.message)
                return
            }

            loginPage.classList.remove('off')
            registerPage.classList.add('off')
        })
    } catch (error) {
        alert(error)

    }
    registerForm.reset()
})


const createNoteButton = document.querySelector('.newNoteButton')
createNoteButton.onclick = function () {
    const userId = JSON.parse(sessionStorage.UserStored).id
    let result = confirm('Are you sure to create a new note?')
    if(result){
        const containerPopUp = document.querySelector('.containerPopUp')
        containerPopUp.classList.remove('off')

        const confirmNoteButton = document.querySelector('#confirmNewNoteButton')
        const newNoteTitle = document.querySelector('.newNoteInput__title')
        const newNoteText = document.querySelector('.newNoteInput__text')
        
        // Cancel creation
        const cancelButton = document.querySelector('#cancelNewNoteButton')  
        cancelButton.onclick = function(){
                const result = confirm('Are you sure to cancel?')
                if(result)
                containerPopUp.classList.add('off')
            }

        // Confirm creation
        confirmNoteButton.onclick = function(){
            try {
                createNote(userId, newNoteTitle.textContent, newNoteText.textContent, function (error) {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    containerPopUp.classList.add('off')
                    newNoteText.textContent = ''
                    newNoteTitle.textContent = ''
                    refreshList()
                })
            }catch(error){
                alert(error)
            }
        } 
    }
}

function refreshList() {
    const userId = JSON.parse(sessionStorage.UserStored).id
    try {
        retrieveNotes(userId, (error, notes) => {
            if (error) {
                alert(error.message)
                return
            }
            const notesList = document.querySelector('.notesList')
            notesList.innerHTML = ''

            notes.forEach(note => {

                const container = document.createElement('li')
                container.classList.add('note')

                const deleteButton = document.createElement('div')
                deleteButton.classList.add('deleteNoteButton')
                deleteButton.textContent = '✖'
                const elementTitle = document.createElement('div')
                elementTitle.classList.add('noteTitle')
                elementTitle.contentEditable = true
                const elementText = document.createElement('div')
                elementText.classList.add('noteText')
                elementText.contentEditable = true
                deleteButton.onclick = function () {
                    let result = confirm('Are you sure to delete that note?')
                    if(result){
                        try {
                            deleteNote(userId, note.id, error => {
                                if (error) {
                                    alert(error.message)
                                    return
                                }
                            })
                        } catch (error) {
                            alert(error.message)
                        }
    
                        refreshList()
                    }
                    
                }

                container.onkeyup = function () {
                    try {

                        updateNote(userId, note.id, elementTitle.textContent, elementText.textContent, error => {
                            if (error) {
                                alert(error.message)
                                return
                            }
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }
                elementTitle.textContent = note.title
                elementText.textContent = note.text
                container.append(deleteButton, elementTitle,elementText)
                notesList.append(container)
            })
        })
    } catch (error) {
        alert(error.message)
    }
}

// CAPTURAMOS CON INPUT PARA ACTUALIZAR ESTADO DE LA CREACION DE PASSWORD
const pLowerCase = document.getElementById('lowerCase')
const pUpperCase = document.getElementById('upperCase')
const pNumber = document.getElementById('number')
const pSymbols = document.getElementById('symbols')
const pLength = document.getElementById('length')

registerForm.password.addEventListener("input", checkPassword)
const span = document.querySelector('.passSpan')
function checkPassword() {
    if (registerForm.password.value.match(requiredPass)) {
        span.classList.add('off')
    } else {
        span.classList.remove('off')
    }


    // Comprobar minusculas
    if (registerForm.password.value.match(lowerCaseLettersRegex)) {
        pLowerCase.classList.add('off')
    } else {
        pLowerCase.classList.remove('off')
    }

    // Comprobar mayusculas
    if (registerForm.password.value.match(upperCaseLettersRegex)) {
        pUpperCase.classList.add('off')
    } else {
        pUpperCase.classList.remove('off')
    }

    // Comprobar numeros
    if (registerForm.password.value.match(numbersRegex)) {
        pNumber.classList.add('off')
    } else {
        pNumber.classList.remove('off')
    }

    // Compruebo la longitud
    if (registerForm.password.value.length >= 8 && registerForm.password.value.length <= 15) {
        pLength.classList.add('off')
    } else {
        pLength.classList.remove('off')
    }

    // Comprobar simbolos
    if (registerForm.password.value.match(symbolsRegex)) {
        pSymbols.classList.add('off')
    } else {
        pSymbols.classList.remove('off')
    }
}

// Logout
const logoutLink = document.querySelector('.logoutLink')
logoutLink.addEventListener('click',function(){
    let result = confirm('Are you sure you want to logout?')
    if(result){
        loginPage.classList.remove('off')
        homePage.classList.add('off')
    }
    
})


// Funcion activar rotación DIVS menú y mostrar desplegable
const menuContainer = document.querySelector('.menuContainer')
const dropdown = document.querySelector('.dropdownMenu')

menuContainer.addEventListener('click', function () {
    menuContainer.classList.toggle("change")
    dropdown.classList.toggle("off")
    dropdown.classList.toggle("displayBlock")
})