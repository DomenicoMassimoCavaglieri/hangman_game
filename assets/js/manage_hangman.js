

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
    return document.getElementById("hang-head");
}

function getHangBody() {
    return document.getElementById("hang-body");
}

function getHangArmL() {
    return document.getElementById("hang-arm-l");
}

function getHangArmR() {
    return document.getElementById("hang-arm-r");
}

function getHangLegL() {
    return document.getElementById("hang-leg-l");
}

function getHangLegR() {
    return document.getElementById("hang-leg-r");
}
