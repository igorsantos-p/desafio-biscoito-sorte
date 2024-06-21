const screen1 = document.querySelector('.screen-01');
const screen2 = document.querySelector('.screen-02');
const cookie = document.getElementById('cookie');
const buttonNew = document.querySelector('button');
const pMessenger = document.getElementById('messenger');
const messengers = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
  'Não há que ser forte. Há que ser flexível.',
  'A vida trará coisas boas se tiver paciência.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
  'Amizade e Amor são coisas que se unem num piscar de olhos.',
  'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.',
  'A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!',
  'A sorte favorece a mente bem preparada.',
  'A adversidade é um espelho que reflete o verdadeiro eu.',
  'Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',
  'Custa menos ao nosso amor-próprio caluniar a sorte do que acusar a nossa má conduta.',
  'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
];
let messengerIndex = Math.round(Math.random() * (messengers.length - 1));

cookie.addEventListener('click', openCookie);
buttonNew.addEventListener('click', openNewCookie);
document.addEventListener('keypress', openCookieEnter);

function openCookie() {
  generateMessenger();
  toogleScreen();
}

function toogleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function openNewCookie() {
  toogleScreen();
  messengerIndex = Math.round(Math.random() * messengers.length);
}

function generateMessenger() {
  pMessenger.innerText = messengers[messengerIndex];
}

function openCookieEnter(e) {
  if (e.key === 'Enter') openCookie();
}
