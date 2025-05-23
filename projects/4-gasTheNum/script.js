let randomNum = parseInt(Math.random() *100 +1);
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

const lowOrHi =document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuesses = [];
let numGuesses =1;

let playGame= true;

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuesses(guess);
        
    });
}

function validateGuesses(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid Number");
    }else if (guess< 1){
        alert("Please enter a number more than 1");
    }
    else if(guess > 100){
        alert("Please enter a number less than 100")
    }else{
        prevGuesses.push(guess);
        if (numGuesses === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endgame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You guessed it right`)
        endgame();
    }else if (guess < randomNum){
        displayMessage(`Number is too Low`);
    }else if (guess > randomNum){
        displayMessage(`Number is too High`);
    }

}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} ,  `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNum = parseInt(Math.random() * 100 + 1);
      prevGuesses = [];
      numGuesses = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuesses} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
}
function endgame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}