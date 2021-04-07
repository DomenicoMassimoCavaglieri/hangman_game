/**
 * Generates pop-up messages with title and n button
 * @param {string} idPopMessageSize  (CSS id)
 * @param {string} title  (title of the popup)
 * @param {array of strings} messages (names of the buttons of popup)
 */
function getPopMessage(idPopMessageSize, title, messages) {
    let popMessageNode = document.createElement("div");
    let popTitle = document.createElement("p");
    let popTitleTextNode = document.createTextNode(title);
    popTitle.appendChild(popTitleTextNode);
    popMessageNode.appendChild(popTitle);

    popMessageNode.classList.add("pop-box", "flex", "column", "justify-center","items-center", "animate");

    for (let i = 0; i < messages.length; i++) {
        let popBtnNode = document.createElement("button");
        let popBtnTextNode = document.createTextNode(messages[i]);
        
        popBtnNode.appendChild(popBtnTextNode);
        
        //This block assigns a progressive id to each button
        let popBtnId = "pop-btn"
        popBtnId += i + 1;
        popBtnNode.setAttribute("id", popBtnId);
        
        popBtnNode.classList.add(("pop-btn"))
        
        popMessageNode.appendChild(popBtnNode);
    }

    popMessageNode.setAttribute("id", idPopMessageSize);
    document.getElementById("main").appendChild(popMessageNode);

    setTimeout(
        function() {
            popMessageNode.classList.remove("animate");
        }, 200
    );
}


/**
 * Listens to the button of the popup message and assigns each a specific function
 * @param {string} idPopMessageSize (CSS id)
 */
function setPopButtonOnListening(idPopMessageSize) {
    let popMessageNode = document.getElementById(idPopMessageSize);    
    let onlyTitleAndOneButton = 2;
    
    if (popMessageNode.childNodes.length === onlyTitleAndOneButton) {
        popMessageNode.childNodes[1].addEventListener("click", () => {
            setupGame(hiddenWord());
            document.getElementById("main").removeChild(popMessageNode)
        });
    } else {
        for (let i = 1; i < popMessageNode.childNodes.length; i++) {
            popMessageNode.childNodes[i].addEventListener("click", () => {
                topic = i;
                setupGame(hiddenWord());
                printTopic(topicTitle);
                document.getElementById("main").removeChild(popMessageNode)
            });
        }
    }
}
