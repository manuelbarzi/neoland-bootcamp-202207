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
loginForm.onkeydown = function(event) {
    if (event.key === 'enter') {
        loginForm.submit();
    }
}


loginForm.onsubmit = function(event) {
    event.preventDefault();

    const loginEmail = loginForm.email.value; // puedo acceder asi por el name del html
    const loginPassword = loginForm.password.value;
    
    const user = users.find(function(user) {
        return user.email === loginEmail && user.password === loginPassword;
    });

    if (user) {
        loginPage.classList.add('off');
        
        const title = homePage.querySelector('.title');
        title.innerText = 'Hello, ' + user.name + '!'
        
        homePage.classList.remove('off');
    } else {
        alert('Wrong credentials');
    }
}

const registerForm = document.querySelector('.register-form');
registerForm.onkeydown = function(event) {
    if (event.key === 'enter') {
        registerForm.submit();
    }
}

registerForm.onsubmit = function(event) {
    event.preventDefault();

    const name = registerForm.name.value;
    const email = registerForm.email.value;
    const password = registerForm.email.value;

    const user = users.find(function(user) {
        return user.email === email
    })

    if (user)
        alert('user already exists')
    else {
        users.push({
            name: name,
            email: email,
            password: password
        });

        registerPage.classList.add('off');
        loginPage.classList.remove('off');
    }
}

