//This function allows you to generate random words 
//only with the topic chosen by the user 
//and to send the title of the topic to print on the screen
function getHiddenWordInTopic() {
    switch (topic) {
        case 1:
            printTopic("ANIMALS");
            return getHiddenWord(wordsJson, "animals");
        case 2:
            printTopic("FRUITS&VEGETABLES");
            return getHiddenWord(wordsJson, "fruitsAndvegetables");
        case 3:
            printTopic("SCHOOL TOOLS");
            return getHiddenWord(wordsJson, "school_tools");
        case 4:
            printTopic("PART OF THE HOUSE");
            return getHiddenWord(wordsJson, "part_of_the_house");
        case 5:
            printTopic("IN THE KITCHEN");
            return getHiddenWord(wordsJson, "in_the_kitchen");
        default:
            printTopic("FRUITS&VEGETABLES");
            return getHiddenWord(wordsJson, "fruitsAndvegetables");
    }
}

/**
 * Chooses a word based on the desired topic
 * @param {array of objects} listOfWords 
 * @param {string} userTopic 
 * @returns {string} 
 */
function getHiddenWord(listOfWords, userTopic) {

    let i = randomIndex(listOfWords);
    let counter = [];
    //It avoids a crash if the inputs are incorrect
    if (listOfWords != undefined) {
        if (listOfWords.length > 1) {

            for (let word of listOfWords) {
                if (word.topic === userTopic) {
                    counter.push(word);
                }
            }
            switch (counter.length) {
                case 0:
                    return "HELLO";
                case 1:
                    return counter[0].word.toUpperCase();
                default:
                    while (listOfWords[i].topic != userTopic) {
                        i = randomIndex(listOfWords);
                    }
                    wordsListIndex = i;
                    return listOfWords[i].word.toUpperCase();
            }
        } else
            return "HELLO";
    } else
        return "HELLO";
}

/**
 * Generates an index that is always different, based on array length
 * @param {array} list 
 * @returns {number}
 */
function randomIndex(list) {
    let index;
    //It avoids a crash if the inputs are incorrect
    if (list) {
        if (list.length > 1) {
            index = Math.floor(Math.random() * list.length);
            while (index === wordsListIndex) {
                index = Math.floor(Math.random() * list.length);
            }
        }
        return index;
    }
    return index;
}

//Print the title of the topic on the screen
function printTopic(topic) {
    if (!getTitleContainer().contains(getTopicTitle())) {
        let topicTitleNode = document.createElement("p");
        let topicTitleTextNode = document.createTextNode(topic);
        topicTitleNode.appendChild(topicTitleTextNode);
        topicTitleNode.setAttribute("id", "topic-title");
        getTitleContainer().appendChild(topicTitleNode);
    }
}

//Intercept the topic title
function getTopicTitle() {
    return document.getElementById("topic-title");
}

//Intercept the topic title container
function getTitleContainer() {
    return document.getElementById("title-container");
}

//Iets the ord as visible
function setWordVisible() {
    for (let letter of getLetter()) {
        letter.classList.add("visible");
    }
}

//Intercept all letter guess of the hidden word
function getLetterGuess() {
    return document.getElementsByClassName("visible");
}

//Intercept all letter of the hidden word
function getLetter() {
    return document.getElementsByClassName("letter");
}

/**
 * Given an array of individual letters, print the letters with their own style
 * @param {array} list 
 */
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

//Intercept the word container
function getWordContainer() {
    return document.getElementById("word-section");
}
