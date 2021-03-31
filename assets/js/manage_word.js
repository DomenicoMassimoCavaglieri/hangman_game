//Variable containing the number referring to the topic chosen by the user
let topic = 0;



//Last index used in the word list for random word
let wordsListIndex;

//Hidden word
let hiddenWord;


let topicTitle = "";

//List of Letters of hidden word
let wordLetters;

//Attempt letter from keyboeard
let attemptLetter = "";

function getTopic() {
    switch (topic) {
        case 1:
            topicTitle = "ANIMALS";
            return getHiddenWord(wordsJson, "animals");
        case 2:
            topicTitle = "FRUITS&VEGETABLES";
            return getHiddenWord(wordsJson, "fruitsAndvegetables"); 
        case 3:
            topicTitle = "SCHOOL TOOLS";
            return getHiddenWord(wordsJson, "school_tools"); 
        case 4:
            topicTitle = "PART OF THE HOUSE";
            return getHiddenWord(wordsJson, "part_of_the_house"); 
        case 5:
            topicTitle = "IN THE KITCHEN";
            return getHiddenWord(wordsJson, "in_the_kitchen"); 
        default:
            topicTitle = "FRUITS&VEGETABLES";
            return getHiddenWord(wordsJson, "fruitsAndvegetables"); 
    }
}


function getHiddenWord(listOfWords, userTopic) {

    let i = randomIndex(listOfWords);
    let counter = [];

    if (listOfWords != undefined) {
        if (listOfWords.length > 1) {

            for (let word of listOfWords) {
                if (word.topic === userTopic) {
                    counter.push(word);
                }
            }
            switch (counter.length) {
                case 0:
                    return "hello";
                case 1:
                    return counter[0].word;
                default:
                    while (listOfWords[i].topic != userTopic) {
                        i = randomIndex(listOfWords);
                    }
                    wordsListIndex = i;
                    return listOfWords[i].word;
            }

        } else
            return "hello";

    } else
        return "hello";
}

function randomIndex(list) {
    let index;
    if (list) {
        if (list.length > 1) {
            index = Math.floor(Math.random() * list.length);
            while (index === wordsListIndex) {
                index = Math.floor(Math.random() * list.length);
            }
        } else index = null;
        return index;
    }
    else index = null;
    return index;
}

function printTopic(topic) {
    let topicTitleNode = document.createElement("p");
    let topicTitleTextNode = document.createTextNode(topic);
    topicTitleNode.appendChild(topicTitleTextNode);
    topicTitleNode.setAttribute("id", "topic-title");
    getTitleContainer().appendChild(topicTitleNode);
}

function getTopicTitle() {
    return document.getElementById("topic-title");
}

function getTitleContainer() {
    return document.getElementById("title-container");
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
// function getHiddenWord(list) {
//     if (list.length != 0) {
//         let i = randomIndex(list);
//         return list[i].toUpperCase();
//     } else
//     return "HELLO"
// }


//Given an array, it always returns a different random index
// function randomIndex(list) {
//     let index = 0;
//     if (list.length > 1) {
//         while (index == wordsListIndex) {
//             index = Math.floor(Math.random() * list.length);
//         }
//         wordsListIndex = index;
//     }
//     return index;
// }

//Given a string made up of a list of words without punctuation marks,
//it returns an array of words
function getListOfWordsFromString(stringOfWords) {
    let list = stringOfWords.split(" ");
    return list;
}
