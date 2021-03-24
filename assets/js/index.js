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


let strike = 0;

getRefreshWordButton().addEventListener("click", init);

init();

function init() {

    hiddenWord = getHiddenWord(words);
    wordLetters = hiddenWord.split("");

    printHiddenWord(hiddenWord);

    let keyboardKey = document.getElementsByClassName("keyboard-key");
    for (key of keyboardKey) {
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
    console.log("Attempt Letter:", attemptLetter);

    if (strike <= 5) {

        for (let i = 0; i < getWordContainer().childNodes.length; i++) {
            if (getWordContainer().childNodes[i].innerHTML === attemptLetter) {
                getWordContainer().childNodes[i].classList.add("visible");
            }
            document.getElementById(attemptLetter).setAttribute("disabled", true);
        }

    }
}
