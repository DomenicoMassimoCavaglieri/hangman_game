

function hideHangPart() {
    if (document.getElementsByClassName("hangman").length > 0) {
        for (part of document.getElementsByClassName("hangman")) {
            part.classList.add("hangman-hidden")
        }
    }
}

function showHangPart(element) {
    element.classList.remove("hangman-hidden");
}

function getHangHead() {
    return document.getElementById("head");
}

function getHangBody() {
    return document.getElementById("body");
}

function getHangArmL() {
    return document.getElementById("arm-l");
}

function getHangArmR() {
    return document.getElementById("arm-r");
}

function getHangLegL() {
    return document.getElementById("leg-l");
}

function getHangLegR() {
    return document.getElementById("leg-r");
}
