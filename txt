let randomNumber = 0;

const btnGuess = document.querySelector(".btn-guess");
const btnStart = document.querySelector(".btn-start");
const numEl = document.querySelector("#txtNumber");
const labelEl = document.querySelector("#lblResult");
const guesses = document.querySelector("#guessLeft");
const hint = document.querySelector("#hint");

const minRandomNumber = 1;
const maxRAndomNumber = 100;

let leftGuesses = 5;

const start = () => {
    randomNumber = generateRandomNumber(minRandomNumber,maxRAndomNumber);
    btnGuess.style.display = "inline";
    btnStart.innerHTML = "Reset Game";
    labelEl.innerHTML = "";
    numEl.removeAttribute("disabled");
    numEl.focus();

    guesses.innerHTML = `you have ${leftGuesses} guesses left`;
    guesses.style.display = "inline";
    leftGuesses = 5;
}

const reset = () => {
    btnGuess.style.display = "none";
    btnStart.innerHTML = "Start Game";
    numEl.setAttribute("disabled", "true");

    guesses.style.display = "none";
    leftGuesses = 5;
}

const guess = () =>{
    let num = Number(numEl.value);
    num = num || 0;
    /*
    if(!num){
        num = 0;
    }
    */
    if (leftGuesses>1) {
        if(num === randomNumber){
            labelEl.innerHTML = "Congrats! You guessed the number";
            reset();
        }
        else if(num > randomNumber){
            labelEl.innerHTML = "Your number is greater than the random number";
            leftGuesses--;
            if (leftGuesses<3) {
                guessHint();
            }
            guesses.innerHTML = `you have ${leftGuesses} guesses left`;
        }
        else{
            labelEl.innerHTML = "Your number is lesser than the random number";
            leftGuesses--;
            if (leftGuesses<3) {
                guessHint();
            }
            guesses.innerHTML = `you have ${leftGuesses} guesses left`;
        }
    }
    else {
        guesses.innerHTML = `Game Over`;
        numEl.setAttribute("disabled", "true")
    }
    
    numEl.value="";
    numEl.focus();
}

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const guessHint = () => {
    if (randomNumber%2==0) {
        hint.innerHTML = "Hint: The number is even";
    } else {
        hint.innerHTML = "Hint: The number is odd";
    }
}