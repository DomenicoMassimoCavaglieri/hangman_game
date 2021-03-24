//Given an array of individual letters, print the letters with their own style
function printHiddenWord(list) {
    getWordContainer().innerHTML = "";
    for (letter of list) {
        var singleLetterNode = document.createElement("div");
        var singleLetterTextNode = document.createTextNode(letter);
        singleLetterNode.appendChild(singleLetterTextNode);
        singleLetterNode.classList.add("letter")
        getWordContainer().appendChild(singleLetterNode)
    }
}

//This function intercepts the word container
function getWordContainer() {
    let containerWord = document.getElementById("word-container");
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
        console.log()
        index = Math.floor(Math.random() * list.length);
    }
    wordsListIndex = index;
    console.log("the current index is: ", index);
    console.log("the global index is: ", wordsListIndex);
    return index;
}