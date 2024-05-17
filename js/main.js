/* nav icon */
const navBtn = document.querySelector('.nav-icon-btn'); //нашла кнопку
const navIcon = document.querySelector('.nav-icon'); //нашла иконку
const nav = document.querySelector('.header__top-row'); //нашла навигацию

//код, который будет добавлять активный класс к иконке
navBtn.onclick = function () { // по клику
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll'); // запрещает скрол в меню
}

