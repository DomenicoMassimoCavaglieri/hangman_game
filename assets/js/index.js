let wordListIndex = 0;
let wordList = "canary dog cat bart dino";
let lettersListEvaluation;
//let rightLetter = "";
let attemptLetter = "";
let strike = 0;

getButton().addEventListener("click", init);



init();

function init() {
  //document.getElementsByClassName("keyboard-key").setAttribute("disabled",false);
  let lettersList = getWordLetters(wordList);
  printHiddenWord(lettersList);
   
  lettersListEvaluation = lettersList;
}

function play(listOfLetters) {
  console.log("Attempt Letter:", attemptLetter);
 // console.log("Right Letter:", rightLetter); 
  letterContained(listOfLetters); 
  if (strike < 5) {
    
    for (let i = 0; i<getWordContainer().childNodes.length; i++) {
      if (getWordContainer().childNodes[i].innerHTML === attemptLetter) {
        
        getWordContainer().childNodes[i].classList.add("visible");
        
      } else {
        console.log("Ehilà!");
        
      }
      document.getElementById(attemptLetter).setAttribute("disabled", "");
    }
    
  }   
}

function letterContained(listOfLetters) {
  for (let i = 0; i < listOfLetters.length; i++) {
    if (attemptLetter === listOfLetters[i]) {
      rightLetter = listOfLetters[i];
    }
  }
}

function printHiddenWord(list) {
  let containerWord = document.getElementById("hidden-word-container");
  containerWord.innerHTML = "";
  for (letter of list) {
    var singleLetterNode = document.createElement("div");
    var singleLetterTextNode = document.createTextNode(letter);
    singleLetterNode.appendChild(singleLetterTextNode);
    singleLetterNode.classList.add("letter")
    containerWord.appendChild(singleLetterNode)
  } 
}

function getWordLetters(listOfWords) {
  let wordLetters;
  return wordLetters = getHiddenWord(listOfWords).split("");
}

function getHiddenWord(listOfWords) {
  console.log("Global Index is: ", wordListIndex)
  let hiddenWord = listOfWords.split(" ");
  let i = randomIndex(hiddenWord);
  console.log("New index is: ", i);
  return hiddenWord[i].toUpperCase();
}

function randomIndex(list) {
  let index = Math.floor(Math.random() * list.length);
  if (index == wordListIndex) { 
    index = Math.floor(Math.random() * list.length);  
  }
    wordListIndex = index;  
    return index;
}

function getWordContainer() {
  let containerWord = document.getElementById("hidden-word-container");
  return containerWord;
}

function getButton() {
  return document.getElementById("btn");
}

function getkeyboardContainer() {
  return document.getElementById("keyboard-container");
}

getKeyboard()
function getKeyboard() {
  
  for (let i = 65; i<=90; i++) {
    
    let keyboardKey = document.createElement("button");
    let keyboardKeyTextNode = document.createTextNode(String.fromCharCode(i));
    keyboardKey.appendChild(keyboardKeyTextNode);
    keyboardKey.classList.add("keyboard-key");
    keyboardKey.setAttribute("id", String.fromCharCode(i))
    getkeyboardContainer().appendChild(keyboardKey);
  }
}

function getaAttemptLetter(letter) {
  attemptLetter = document.getElementById(letter).innerHTML;
}

document.getElementById("A").addEventListener("click", function () {
  getaAttemptLetter("A");
  play(lettersListEvaluation);
});

document.getElementById("B").addEventListener("click", function () {
  getaAttemptLetter("B");
  play(lettersListEvaluation);
});

document.getElementById("C").addEventListener("click", function () {
  getaAttemptLetter("C");
  play(lettersListEvaluation);
});

document.getElementById("D").addEventListener("click", function () {
  getaAttemptLetter("D");
  play(lettersListEvaluation);
});

document.getElementById("E").addEventListener("click", function () {
  getaAttemptLetter("E");
  play(lettersListEvaluation);
});