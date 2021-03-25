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

getRefreshWordButton().addEventListener("click", init);

init();

function init() {

    hiddenWord = getHiddenWord(words);
    wordLetters = hiddenWord.split("");

    printHiddenWord(hiddenWord);

    enableAllKeys()

    strike = 5;

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
                console.log("Hai vinto...");
                disableAllKeys()
            }
        }
        document.getElementById(attemptLetter).setAttribute("disabled", true);
    }

    if (LettersGuessForAttempt == 0) {
        (strike--)
        if (strike === 0) {
            console.log("Hai perso...");
            disableAllKeys()
            
        } else console.log(strike, " more attempts...");
    }
}

//This function intercepts the refresh word button
function getRefreshWordButton() {
    return document.getElementById("refresh-word-btn");
}
