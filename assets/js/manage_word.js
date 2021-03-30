//Variable containing the number referring to the topic chosen by the user
let topic = 0;

//Input words: array of words
let animals = ["mouse", "dog"];
let fruitsAndVagetebles = ["apple", "ananas"];
let schoolTools = ["glue", "pencil"];
let partOfTheHouse = ["box", "garage"];
let inTheKitchen = ["fork", "plate"];

//Last index used in the word list for random word
let wordsListIndex = 0;

//Hidden word
let hiddenWord;

//List of Letters of hidden word
let wordLetters;

//Attempt letter from keyboeard
let attemptLetter = "";

function getTopic() {
    switch (topic) {
        case 1:
            return animals;
        case 2:
            return fruitsAndVagetebles;
        case 3:
            return schoolTools;
        case 4:
            return partOfTheHouse;
        case 5:
            return inTheKitchen;
        default:
            return fruitsAndVagetebles;
    }
}


//This function sets the word as visible
function setWordVisible() {
    for (let letter of getLetter()) {
        letter.classList.add("visible");
    }
}

//This function intercepts all letter guess of the hidden word
function getLetterGuess() {
    return document.getElementsByClassName("visible");
}

//This function intercepts all letter of the hidden word
function getLetter() {
    return document.getElementsByClassName("letter");
}

//Given an array of individual letters, print the letters with their own style
function printHiddenWord(list) {
    getWordContainer().innerHTML = "";
    for (let letter of list) {
        var singleLetterNode = document.createElement("div");
        var singleLetterTextNode = document.createTextNode(letter);
        singleLetterNode.appendChild(singleLetterTextNode);
        singleLetterNode.classList.add("letter", "c-blue")
        getWordContainer().appendChild(singleLetterNode)
    }
}

//This function intercepts the word container
function getWordContainer() {
    let containerWord = document.getElementById("word-section");
    return containerWord;
}

//Given an array of words, it returns a random word
function getHiddenWord(list) {
    let i = randomIndex(list);
    return list[i].toUpperCase();
}

//Given an array, it always returns a different random index
function randomIndex(list) {
    let index = 0;
    if (list.length > 0) {
        while (index == wordsListIndex) {
            index = Math.floor(Math.random() * list.length);
        }
        wordsListIndex = index;
    } 
    return index;
}

//Given a string made up of a list of words without punctuation marks,
//it returns an array of words
function getListOfWordsFromString(stringOfWords) {
    let list = stringOfWords.split(" ");
    return list;
}
