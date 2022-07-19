const loginPage = document.querySelector('.login-page');
const registerPage = document.querySelector('.register-page');
const homePage = document.querySelector('.home-page');

const registerLink = loginPage.querySelector('a');
const loginLink = registerPage.querySelector('a');

registerLink.onclick = function(event) {
    event.preventDefault();
    loginPage.classList.add('off');
    registerPage.classList.remove('off')
}

loginLink.onclick = function(event) {
    event.preventDefault();
    loginPage.classList.remove('off');
    registerPage.classList.add('off');
}

const loginForm = document.querySelector('.login-form');
loginForm.onsubmit = function(event) {
    event.preventDefault();

    const loginEmail = loginForm.email.value; // puedo acceder asi por el name del html
    const loginPassword = loginForm.password.value;
    try {
        authenticateUser(loginEmail, loginPassword, function(error) {
            if (error) { 
                alert(error.message);
                return;
            } 
            try {
                retrieveUser(loginEmail, function(error, user) {
                    if (error) {
                        alert(error.message)
                        return;
                    } else {
                        loginPage.classList.add('off');
                        const title = homePage.querySelector('.title');
                        title.innerText = 'Hello, ' + user.name + '!';
                        homePage.classList.remove('off');
                    }
                })
            }
            catch(error) { 
                alert(error.message);
            }
        })
    }
    catch(error) {
        alert(error.message)
    }
}

const registerForm = document.querySelector('.register-form');

registerForm.onsubmit = function(event) {
    event.preventDefault();

    const name = registerForm.name.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    try {
        registerUser(name, email, password, function(error) {
            if (error) {
                alert(error.message);
                return;
            } else {
                registerPage.classList.add('off');
                loginPage.classList.remove('off');
            }
        })
    }
    catch(error) {
        alert(error.message);
    }
}

