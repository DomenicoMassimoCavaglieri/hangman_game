

function hideHangPart() {
    while (getHangContainer().hasChildNodes) {
        getHangContainer().removeChild(getHangContainer().firstChild);
    }
    
    // for (let i= 13; i <=18; i++) {
        
    //     getDrawGroup().removeChild(childNodes[i]);
    // }
}

// function showHangPart(element) {
//     element.classList.remove("hangman-hidden");
// }

// function getHangHead() {
//     return document.getElementById("hang-head");
// }

// function getHangBody() {
//     return document.getElementById("hang-body");
// }

// function getHangArmL() {
//     return document.getElementById("hang-arm-l");
// }

// function getHangArmR() {
//     return document.getElementById("hang-arm-r");
// }

// function getHangLegL() {
//     return document.getElementById("hang-leg-l");
// }

// function getHangLegR() {
//     return document.getElementById("hang-leg-r");
// }


function getHangContainer() {
    return document.getElementById("hangman-container");
}

function getHangParts(idName) {
    let hangPart = document.createElement("div");
    hangPart.setAttribute("id", idName);
    hangPart.classList.add("hangman");
    getHangContainer().appendChild(hangPart);
    
}