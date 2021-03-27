//This function generates pop-up messages
function getPopMessage(message, messageBtn) {
    let popMessageNode = document.createElement("div");
    let messageTextContainer = document.createElement("div");
    let messageTextNode = document.createTextNode(message);
    let popBtnNode = document.createElement("button");
    let popBtnTextNode = document.createTextNode(messageBtn);

    popMessageNode.classList.add("pop-box", "pop-box-small", "flex", "column", "justify-around", "items-center");
    popBtnNode.classList.add(("pop-btn"))

    messageTextContainer.appendChild(messageTextNode);
    popMessageNode.appendChild(messageTextContainer);
    popBtnNode.appendChild(popBtnTextNode);
    popMessageNode.appendChild(popBtnNode);
    document.body.appendChild(popMessageNode);

    popBtnNode.addEventListener("click", function () {
        displayNone(popMessageNode);
        init();
    })
}

//This function makes an element disappear
function displayNone(element) {
    element.classList.add("display-none");
}