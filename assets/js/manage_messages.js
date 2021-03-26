//This function generates pop-up messages
function getPopMessage(message, messageBtn) {
    let messageNode = document.createElement("div");
    let messageTextContainer = document.createElement("div");
    let messageTextNode = document.createTextNode(message);
    let popBtnNode = document.createElement("button");
    let popBtnTextNode = document.createTextNode(messageBtn);

    messageNode.classList.add("pop-box", "flex", "column");
    popBtnNode.classList.add(("pop-btn"))

    messageTextContainer.appendChild(messageTextNode);
    messageNode.appendChild(messageTextContainer);
    popBtnNode.appendChild(popBtnTextNode);
    messageNode.appendChild(popBtnNode);
    document.body.appendChild(messageNode);

    popBtnNode.addEventListener("click", function () {
        displayNone(messageNode);
        init();
    })
}

//This function makes an element disappear
function displayNone(element) {
    element.classList.add("display-none");
}