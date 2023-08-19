const frontElt = document.querySelector('.front');
const numberFlipper = document.querySelector('.flipper');

function playErrorAnimation() {
  frontElt.classList.add('error-animation');
  setTimeout(() => {
    frontElt.classList.remove('error-animation');
  }, 400);
}

function revealSecretNumber() {
  numberFlipper.classList.add('reveal');
}

// Message1
const MessageElement = document.querySelector('.message');
MessageElement.textContent = 'Devine mon nombre';

// Rond avec !!!!
const secretNumberElt = document.querySelector('.secret-number');
secretNumberElt.textContent = '!!!!';

// Score
const scoreUserString = document.querySelector('.score');
scoreUserString.textContent = '20';

/// Value rentré par le script
// document.querySelector('.guess').value = 230;

// Input et l'action du click
const inputElt = document.querySelector('.guess');

let secretNumber = Math.floor(Math.random() * 1) + 1; /// Le numéro secret

function decreaseScore() {
  let score = Number(scoreUserString.textContent);
  score -= 1;
  scoreUserString.textContent = score.toString();
}

function endGame() {
  if (scoreUserString.textContent === '0') {
    document.querySelector('body').style.backgroundColor = '#FF0000';
    MessageElement.textContent = 'Ta perdu';
  }
}

function onButtonClick() {
  document.querySelector('.guess').style.width = '10em';

  // Traiter l'input si c'est 0
  if (scoreUserString.textContent === '0') {
    return;
  }

  if (inputElt.value === '') {
    MessageElement.textContent = "Ceci n'est pas un nombre";
  } else {
    const guess = Number(inputElt.value);

    // Traiter l'input si c'est autre chose qu'un nombre
    if (Number.isNaN(guess)) {
      MessageElement.textContent = "Ceci n'est pas un nombre";
    }

    // Afficher l'erreur si input n'est pas entre 1 et 20
    if (guess < 1 || guess > 20) {
      MessageElement.textContent = "Non, j'ai préciser entre 1 et 20, APPREND A LIRE !";
      return;
    }

    // Traiter l'input et le score quand l'utilisateur rentre des chiffres
    if (guess === secretNumber) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      MessageElement.textContent = 'Ta gagné';
      secretNumberElt.textContent = secretNumber;
      revealSecretNumber();
    } else if (guess > secretNumber) {
      MessageElement.textContent = 'Ton nombre est trop haut';
      decreaseScore();
    } else {
      MessageElement.textContent = 'Ton nombre est trop bas';
      decreaseScore();
    }

    endGame(); // Afficher la page PERDU si score = 0
  }
}

function onButtonResetClick() {
  secretNumber = Math.floor(Math.random() * 1) + 1; /// Le numéro secret
  document.querySelector('body').style.backgroundColor = 'white';
  console.log(secretNumber);
  MessageElement.textContent = 'Devine mon nombre';
  scoreUserString.textContent = '20';
  document.querySelector('.guess').style.width = '25rem';
  inputElt.value = '';
  numberFlipper.classList.remove('reveal');
}
