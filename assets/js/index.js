//Input: string made up of a list of words without punctuation marks
let words = "cat dog canary turtle";

//Last index used in the word list for random word
let wordsListIndex = 0;

//Hidden word
let hiddenWord;

//List of Letters of hidden word
let wordLetters;

//Attempt letter from keyboeard
let attemptLetter = "";

//Attempts failed
let strike = 4;

getRefreshWordButton().addEventListener("click", init);

init();

function init() {
    
    

    hiddenWord = getHiddenWord(words);
    wordLetters = hiddenWord.split("");

    printHiddenWord(hiddenWord);

    setKeyboardEnabled()
    setRefreshWordButtonEnabled()

    strike = 4;

    hideHangPart();

    console.log("Si comincia!")
    console.log(strike, " Attempts!");

}

//This function manages the game: 
//it checks if the chosen letter is present, 
//the score conditions and the status of the keys and hangman
function play(listOfLetters) {
    let LettersGuessForAttempt = 0;
    console.log("Attempt Letter:", attemptLetter);
    for (let i = 0; i < getLetter().length; i++) {
        if (getLetter()[i].innerHTML === attemptLetter) {
            getLetter()[i].classList.add("visible");
            LettersGuessForAttempt++;
            if (getLetterGuess().length === getLetter().length) {
                console.log("Hai vinto!!!");
                setKeyboardDisabled();
                setRefreshWordButtonDisabled();
                getPopMessage("You Win!", "OK");
            } else console.log(strike, " more attempts...");
        }
        document.getElementById(attemptLetter).setAttribute("disabled", true);
    }

    if (LettersGuessForAttempt == 0) {
        (strike--)
        switch (strike) {
            case 0: 
                console.log("Hai perso...");
                getHangParts("hang-leg-l");
                getHangParts("hang-leg-r");
                setKeyboardDisabled();
                setRefreshWordButtonDisabled();
                setWordVisible();
                getPopMessage("You lose...", "OK");
                break;
            case 1: 
                console.log(strike, " more attempts...CASE-2");
                getHangParts("hang-arm-l");
                getHangParts("hang-arm-r");
                break;

            case 2:
                console.log(strike, " more attempts...CASE-2");
                getHangParts("hang-body");
                break;

            case 3:
                console.log(strike, " more attempts...CASE-3");
                getHangParts("hang-head");
                break;

        }
        
    }
}


function setRefreshWordButtonEnabled() {
    getRefreshWordButton().removeAttribute("disabled", true);
}

function setRefreshWordButtonDisabled() {
    getRefreshWordButton().setAttribute("disabled", true);
}

//This function intercepts the refresh word button
function getRefreshWordButton() {
    return document.getElementById("refresh-word-btn");
}
