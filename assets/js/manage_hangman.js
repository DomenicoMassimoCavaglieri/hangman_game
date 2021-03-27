//This function deletes all parts of the hanged man present in his container
function hideHangPart() {
    while (getHangContainer().hasChildNodes) {
        getHangContainer().removeChild(getHangContainer().firstChild);
    }
}

//This function creates a single part of the hanged man by entering its id
function getHangParts(idName) {
    let hangPart = document.createElement("div");
    hangPart.setAttribute("id", idName);
    hangPart.classList.add("hangman");
    getHangContainer().appendChild(hangPart);
}

//This function intercepts the container of the hanged man's drawing
function getHangContainer() {
    return document.getElementById("hangman-container");
}
