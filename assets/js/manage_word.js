//Variable containing the number referring to the topic chosen by the user
let topic = 0;

//Input words: string made up of a list of words without punctuation marks
let animals = "cat dog canary turtle lion tiger elephant hippo gorilla monkey mouse hamster parrot falcon eagle";
let fruitsAndVagetebles = "banana apple orange anas pear peach apricot plum melon kiwi pomegranate tomato cucumber lettuce eggplant courgette pumpkin grapes";
let schoolTools = "ruler rubber pen pencil album notebook sheet compass backpack book marker highlighter glue";
let partOfTheHouse = "garden living room kitchen bedroom bathroom garage box terrace cellar attic balcony corridor";
let inTheKitchen = "knife fork plate glass tablecloth oven spoon refrigerator pot pan ladle cup";

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
        case 1: return animals;
        case 2: return fruitsAndVagetebles;
        case 3: return schoolTools;
        case 4: return partOfTheHouse;
        case 5: return inTheKitchen;
        default: return fruitsAndVagetebles;
    }
} 


//This function sets the word as visible
function setWordVisible() {
    for (letter of getLetter()) {
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
    for (letter of list) {
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

//Given a string made up of a list of words without punctuation marks,
//it returns a random word
function getHiddenWord(stringOfWords) {
    let hiddenWord = stringOfWords.split(" ");
    let i = randomIndex(hiddenWord);
    return hiddenWord[i].toUpperCase();
}

//Given an array, it always returns a different random index
function randomIndex(list) {
    let index = Math.floor(Math.random() * list.length);
    while (index == wordsListIndex) {
        index = Math.floor(Math.random() * list.length);
    }
    wordsListIndex = index;
    // console.log("the current index is: ", index);
    // console.log("the global index is: ", wordsListIndex);
    return index;
}
