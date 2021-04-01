//Variable containing the number referring to the topic, chosen by the user
let topic = 0;

//Last index used in the word list for random word
let wordsListIndex;

//Hidden word
let hiddenWord;

//The title of the topic
let topicTitle = "";

//List of Letters of hidden word
let wordLetters;

//Attempt letter from keyboeard
let attemptLetter = "";

//This function allows you to generate random words 
//only with the topic chosen by the user 
//and to send the title of the topic to print on the screen
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

//This function randomly chooses a word based on the desired topic
//It also avoids a crash if the inputs are incorrect
//Input 1: List of words (array of objects with word and topic)
//Input 2: Topic (string)
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

//This funcion, given an array, generates 
//an index that is always different, based on its length
//It also avoids a crash if the inputs are incorrect
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

//This function allows you to print the title of the topic on the screen
function printTopic(topic) {
    let topicTitleNode = document.createElement("p");
    let topicTitleTextNode = document.createTextNode(topic);
    topicTitleNode.appendChild(topicTitleTextNode);
    topicTitleNode.setAttribute("id", "topic-title");
    getTitleContainer().appendChild(topicTitleNode);
}

//This function intercepts the topic title
function getTopicTitle() {
    return document.getElementById("topic-title");
}

//This function intercepts the topic title container
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
    return document.getElementById("word-section");
}
