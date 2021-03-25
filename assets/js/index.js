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
let strike = 5;

//Letters guess
let lettersGuess = 0;


getRefreshWordButton().addEventListener("click", init);

init();

function init() {

    hiddenWord = getHiddenWord(words);
    wordLetters = hiddenWord.split("");

    printHiddenWord(hiddenWord);


    for (key of getKeyboardKey()) {
        key.removeAttribute("disabled", true);
    }
}

//This function intercepts the refresh word button
function getRefreshWordButton() {
    return document.getElementById("refresh-word-btn");
}

//This function manages the game: 
//it checks if the chosen letter is present, 
//the score conditions and the status of the keys and hangman
function play(listOfLetters) {
    let correctLettersForAttempt = 0;
    console.log("Attempt Letter:", attemptLetter);
    for (let i = 0; i < getWordContainer().childNodes.length; i++) {
        if (getWordContainer().childNodes[i].innerHTML === attemptLetter) {
            getWordContainer().childNodes[i].classList.add("visible");
            lettersGuess++;
            correctLettersForAttempt++;
            if (lettersGuess === getWordContainer().childNodes.length) {
                console.log("Hai vinto...");
            }
        }
        document.getElementById(attemptLetter).setAttribute("disabled", true);
    } if (correctLettersForAttempt == 0) {
        (strike--)
        if (strike === 0) {
            console.log("Hai perso...");
            for (key of getKeyboardKey()) {
                key.setAttribute("disabled", true);
            }
        } else console.log(strike, " more attempts...");
    }
}
