const screen1 = document.querySelector('.screen-01');
const screen2 = document.querySelector('.screen-02');
const cookie = document.getElementById('cookie');
const buttonNew = document.querySelector('button');

cookie.addEventListener('click', openCookie);
buttonNew.addEventListener('click', openNewCookie);

function openCookie() {
  toogleScreen();
}

function toogleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function openNewCookie() {
  toogleScreen();
}
