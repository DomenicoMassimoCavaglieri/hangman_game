getKeyboard();

//This function enables all buttons
function enableAllKeys() {
    for (key of getKeyboardKey()) {
        key.removeAttribute("disabled", true);
    }
}

//This function disables all buttons
function disableAllKeys() {
    for (key of getKeyboardKey()) {
        key.setAttribute("disabled", true);
    }
}

//This function intercepts all keys on the keyboard
function getKeyboardKey() {
    return document.getElementsByClassName("keyboard-key");
}

//This function intercepts the keyboard container
function getkeyboardContainer() {
    return document.getElementById("keyboard-container");
}

//This function generates the keyboard
function getKeyboard() {

    for (let i = 65; i <= 90; i++) {

        let keyboardKey = document.createElement("button");
        let keyboardKeyTextNode = document.createTextNode(String.fromCharCode(i));
        keyboardKey.appendChild(keyboardKeyTextNode);
        keyboardKey.classList.add("keyboard-key");
        keyboardKey.setAttribute("id", String.fromCharCode(i))
        getkeyboardContainer().appendChild(keyboardKey);
    }
}

//The chosen letter modifies its global variable
function getaAttemptLetter(letter) {
    attemptLetter = document.getElementById(letter).innerHTML;
}

//This function intercepts the keyboard keys
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

document.getElementById("F").addEventListener("click", function () {
    getaAttemptLetter("F");
    play(wordLetters);
});

document.getElementById("G").addEventListener("click", function () {
    getaAttemptLetter("G");
    play(wordLetters);
});

document.getElementById("H").addEventListener("click", function () {
    getaAttemptLetter("H");
    play(wordLetters);
});

document.getElementById("I").addEventListener("click", function () {
    getaAttemptLetter("I");
    play(wordLetters);
});

document.getElementById("J").addEventListener("click", function () {
    getaAttemptLetter("J");
    play(wordLetters);
});

document.getElementById("K").addEventListener("click", function () {
    getaAttemptLetter("K");
    play(wordLetters);
});

document.getElementById("L").addEventListener("click", function () {
    getaAttemptLetter("L");
    play(wordLetters);
});

document.getElementById("M").addEventListener("click", function () {
    getaAttemptLetter("M");
    play(wordLetters);
});

document.getElementById("N").addEventListener("click", function () {
    getaAttemptLetter("N");
    play(wordLetters);
});

document.getElementById("O").addEventListener("click", function () {
    getaAttemptLetter("O");
    play(wordLetters);
});

document.getElementById("P").addEventListener("click", function () {
    getaAttemptLetter("P");
    play(wordLetters);
});

document.getElementById("Q").addEventListener("click", function () {
    getaAttemptLetter("Q");
    play(wordLetters);
});

document.getElementById("R").addEventListener("click", function () {
    getaAttemptLetter("R");
    play(wordLetters);
});

document.getElementById("S").addEventListener("click", function () {
    getaAttemptLetter("S");
    play(wordLetters);
});

document.getElementById("T").addEventListener("click", function () {
    getaAttemptLetter("T");
    play(wordLetters);
});

document.getElementById("U").addEventListener("click", function () {
    getaAttemptLetter("U");
    play(wordLetters);
});

document.getElementById("V").addEventListener("click", function () {
    getaAttemptLetter("V");
    play(wordLetters);
});

document.getElementById("W").addEventListener("click", function () {
    getaAttemptLetter("W");
    play(wordLetters);
});

document.getElementById("X").addEventListener("click", function () {
    getaAttemptLetter("X");
    play(wordLetters);
});

document.getElementById("Y").addEventListener("click", function () {
    getaAttemptLetter("Y");
    play(wordLetters);
});

document.getElementById("Z").addEventListener("click", function () {
    getaAttemptLetter("Z");
    play(wordLetters);
});
