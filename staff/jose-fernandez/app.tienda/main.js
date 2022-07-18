var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav-home');

btnMenu.addEventListener('click', function () {
    nav.classList.toggle('mostrar');
});


const loginPage = document.querySelector('.login_page')
const registerPage = document.querySelector('.register_page')
const homePage = document.querySelector('.home_page')

const btn_login = homePage.querySelector('.btn__login')
btn_login.onclick=function(event){
    event.preventDefault()

    homePage.classList.add('off')
    loginPage.classList.remove('off')
}

const registerLink = loginPage.querySelector('.link-register')
registerLink.onclick=function(event){
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

const loginLink=registerPage.querySelector('.link-login')
loginLink.onclick=function(event){
event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}