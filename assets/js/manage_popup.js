//Button text in the small Popup
let popMessageSmall = ["OK"];

//Button text in the large Popup
let popMessagesLarge = ["Animals", "Fruits & Vegetables", "School Tools", "Part of the House", "In the kitchen"];

//This function generates pop-up messages with title and n button
//Input:
//1: Popup message size (CSS id)
//2: Popup message title (string)
//3: Popup messege name of each button (array of strings)
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
    //document.body.appendChild(popMessageNode);
    document.getElementById("main").appendChild(popMessageNode);

    setTimeout(
        function() {
            popMessageNode.classList.remove("animate");
        }, 200
    );
}

//This function listens to the button of the popup message
//and assigns each a specific function
//Input: Popup message size (CSS id)
function setPopButtonOnListening(idPopMessageSize) {
    let popMessageNode = document.getElementById(idPopMessageSize);    
    let onlyTitleAndOneButton = 2;
    
    if (popMessageNode.childNodes.length === onlyTitleAndOneButton) {
        popMessageNode.childNodes[1].addEventListener("click", function () {
            gamePreparation();
            document.getElementById("main").removeChild(popMessageNode)
        });
    } else {
        for (let i = 1; i < popMessageNode.childNodes.length; i++) {
            popMessageNode.childNodes[i].addEventListener("click", function () {
                topic = i;
                gamePreparation();
                document.getElementById("main").removeChild(popMessageNode)
            });
        }
    }
}
