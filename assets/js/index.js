
let topic = 0;

//Input: string made up of a list of words without punctuation marks
let animals = "cat dog canary turtle";
let fruitsAndVagetebles = "banana apple orange";
let schoolTools = "ruler rubber pen"

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


let won = 0;


let lost = 0;


let popMessageSmall = ["OK"];


let popMessagesLarge = ["Animals", "Fruits and vegetables", "School Tools"];

getRefreshWordButton().addEventListener("click", init);

//init();

getPopMessage("pop-box-large", "Choose the topic", popMessagesLarge); 
setPopButtonOnListening("pop-box-large");


function init() {
    
    
    hiddenWord = getHiddenWord(getTopic());
    wordLetters = hiddenWord.split("");

    printHiddenWord(hiddenWord);

    setKeyboardEnabled()
    setRefreshWordButtonEnabled()

    strike = 4;

    hideHangPart();

    printScore(won, lost);

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
                getPopMessage("pop-box-small", "You Win!", popMessageSmall);
                setPopButtonOnListening("pop-box-small");
                won++;
                printScore(won, lost);
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
                getPopMessage("pop-box-small", "You lose...", popMessageSmall);
                setPopButtonOnListening("pop-box-small");
                lost++;
                printScore(won, lost);
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

//This function enables the word refresh key
function setRefreshWordButtonEnabled() {
    getRefreshWordButton().removeAttribute("disabled", true);
}

//This function disables the word refresh key
function setRefreshWordButtonDisabled() {
    getRefreshWordButton().setAttribute("disabled", true);
}

//This function intercepts the refresh word button
function getRefreshWordButton() {
    return document.getElementById("change-word-btn");
}

//This function print and updates the match result
function printScore(wonNumber, lostNumber) {
    document.getElementById("won-text").innerHTML = "Won: " + wonNumber;
    document.getElementById("lose-text").innerHTML = "Lose: " + lostNumber;
}
