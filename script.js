let computerScore = 0;
let userScore = 0;
let userBoard = document.getElementById('user-score');
let computerBoard = document.getElementById('computer-score');
let userChoiceResult = document.getElementById('user-choice');
let computerChoiceResult = document.getElementById('computer-choice');
let gameResult = document.getElementById('result');
let buttonReset = document.getElementById('reset');

const choices = {
  sasso: {
    sasso: 'pareggio',
    forbice: 'vittoria',
    carta: 'sconfitta',
  },
  forbice: {
    sasso: 'sconfitta',
    forbice: 'pareggio',
    carta: 'vittoria',
  },
  carta: {
    sasso: 'vittoria',
    forbice: 'sconfitta',
    carta: 'pareggio',
  }
}

function checker(input) {
  const computerChoices = ['carta', 'forbice', 'sasso'];
  // Assegno al computer un elemento a caso dell'array
  let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
  // Scrivo le scelte di utente e computer nella pagina html
  userChoiceResult.innerHTML = input;
  computerChoiceResult.innerHTML = computerChoice;
  // Attraverso l'oggetto choices prendendo la scelta dell'utente e quella del computer
  switch(choices[input][computerChoice]) {
    case('vittoria'):
      gameResult.innerHTML = 'HAI VINTO!!!';
      userScore++;
      userBoard.innerHTML = userScore;
      gameResult.classList.remove('lose', 'draw');
      gameResult.classList.add('win')
    break;
    case('sconfitta'):
      gameResult.innerHTML = 'HAI PERSO!!!';
      computerScore++;
      computerBoard.innerHTML = computerScore;
      gameResult.classList.remove('win', 'draw');
      gameResult.classList.add('lose')
    break;
    case('pareggio'):
      gameResult.innerHTML = 'PAREGGIO!!!';
      gameResult.classList.remove('win', 'lose');
      gameResult.classList.add('draw')
    break;
  }
}

function reset () {
  userScore = 0;
  userBoard.innerHTML = userScore;
  computerScore=0;
  computerBoard.innerHTML = computerScore;
  gameResult.innerHTML = 'Inizia la partita!!!';
  userChoiceResult.innerHTML = "...";
  computerChoiceResult.innerHTML = "...";
  gameResult.classList.remove('win', 'lose', 'draw');
}