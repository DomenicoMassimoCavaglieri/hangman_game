//This function enables all buttons
function setKeyboardEnabled() {
    for (let key of getKeyboardKey()) {
        key.removeAttribute("disabled", true);
    }
}

//This function disables all buttons
function setKeyboardDisabled() {
    for (let key of getKeyboardKey()) {
        key.setAttribute("disabled", true);
    }
}

//This function intercepts all keys on the keyboard
function getKeyboardKey() {
    return document.getElementsByClassName("keyboard-key");
}

//This function intercepts the keyboard container
function getkeyboardContainer() {
    return document.getElementById("keyboard-section");
}

//This function generates the keyboard
function getKeyboard() {

    for (let i = 65; i <= 90; i++) {

        let keyboardKey = document.createElement("button");
        let keyboardKeyTextNode = document.createTextNode(String.fromCharCode(i));
        keyboardKey.appendChild(keyboardKeyTextNode);
        keyboardKey.classList.add("keyboard-key", "bg-white","c-blue");
        keyboardKey.setAttribute("id", String.fromCharCode(i))
        keyboardKey.addEventListener("click", function () {
            getaAttemptLetter(String.fromCharCode(i));
            play(wordLetters);
        });
        getkeyboardContainer().appendChild(keyboardKey);
    }
}

//The chosen letter modifies its global variable
function getaAttemptLetter(letter) {
    attemptLetter = document.getElementById(letter).innerHTML;
}
