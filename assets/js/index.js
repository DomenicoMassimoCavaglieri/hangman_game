//Input: string made up of a list of words without punctuation marks
let words = "cat dog canary turtle";

//Last index used in the word list for random word
let wordsListIndex = 0;

//Hidden word
let hiddenWord;

//List of Letters of hidden word
let wordLetters;

let attemptLetter = "";
let strike = 0;

getButton().addEventListener("click", init);



init();

function init() {
  
    hiddenWord =  getHiddenWord(words);
    wordLetters = hiddenWord.split("");
   
    console.log(words);
    console.log(hiddenWord);
    console.log(wordLetters);
  
  
  
    //document.getElementsByClassName("keyboard-key").setAttribute("disabled",false);
//   let lettersList = getWordLetters(words);
//   printHiddenWord(lettersList);
   
//   wordLetters = lettersList;
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
  play(wordLetters);
});

document.getElementById("B").addEventListener("click", function () {
  getaAttemptLetter("B");
  play(wordLetters);
});

document.getElementById("C").addEventListener("click", function () {
  getaAttemptLetter("C");
  play(wordLetters);
});

document.getElementById("D").addEventListener("click", function () {
  getaAttemptLetter("D");
  play(wordLetters);
});

document.getElementById("E").addEventListener("click", function () {
  getaAttemptLetter("E");
  play(wordLetters);
});