//This function generates small pop-up messages
// function getPopMessage(message, messageBtn) {
//     let popMessageNode = document.createElement("div");
//     let popMessageTextNode = document.createTextNode(message);
//     let popBtnNode = document.createElement("button");
//     let popBtnTextNode = document.createTextNode(messageBtn);

//     popMessageNode.classList.add("pop-box", "pop-box-small", "flex", "column", "justify-around", "items-center");
//     popBtnNode.classList.add(("pop-btn"))

//     popMessageNode.appendChild(popMessageTextNode);
//     popBtnNode.appendChild(popBtnTextNode);
//     popMessageNode.appendChild(popBtnNode);
//     document.body.appendChild(popMessageNode);

//     popBtnNode.addEventListener("click", function () {
//         document.body.removeChild(popMessageNode);
//         init();
//     })
// }



function getPopMessage(title, messages) {
    let popMessageNode = document.createElement("div");
    let popMessageTitleTextNode = document.createTextNode(title);
    popMessageNode.appendChild(popMessageTitleTextNode);

    popMessageNode.classList.add("pop-box", "pop-box-small", "flex", "column", "justify-around", "items-center");


    for (let i = 0; i < messages.length; i++) {
        let popBtnNode = document.createElement("button");
        let popBtnTextNode = document.createTextNode(messages[i]);
        let popBtnId = "pop-btn"

        popBtnNode.appendChild(popBtnTextNode);

        popBtnNode.classList.add(("pop-btn"))
        popBtnId += i + 1;
        popBtnNode.setAttribute("id", popBtnId);

        popMessageNode.appendChild(popBtnNode);
    }

    popMessageNode.setAttribute("id", "popMessageNode");
    document.body.appendChild(popMessageNode);


}

function setPopButtonClosePop() {
    let popMessageNode = document.getElementById("popMessageNode");
    let popBtnNode = document.getElementById("pop-btn1");
    popBtnNode.addEventListener("click", function () {
        document.body.removeChild(popMessageNode)
        init();
    })
}


//This function makes an element disappear
function displayNone(element) {
    element.classList.add("display-none");
}