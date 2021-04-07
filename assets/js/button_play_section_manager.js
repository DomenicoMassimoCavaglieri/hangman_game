//This function enables the Play section button
function setPlayButtonEnebled() {
    let playButton = document.getElementsByClassName("ply-btn");
    for (let button of playButton) {
        button.removeAttribute("disabled", true);
    }
}

//This function disables the Play section button
function setPlayButtonDisabled() {
    let playButton = document.getElementsByClassName("ply-btn");
    for (let button of playButton) {
        button.setAttribute("disabled", true);
    }
}

//This function sets the change word button
function getChangeWordButton() {
    document.getElementById("change-word-btn").addEventListener("click", () => {
        setupGame(getHiddenWordInTopic())});
}

//This function sets the change topic button
function getChangeTopicButton() {
    document.getElementById("change-topic-btn").addEventListener("click", () => {
        getPopMessage("pop-box-large", "Choose the topic", getPopMessageLarge()); 
        setPopButtonOnListening("pop-box-large");
        //Disabled all buttons and topic title
        setTimeout(() => {
            getTitleContainer().removeChild(getTopicTitle());
            setKeyboardDisabled();
            setPlayButtonDisabled();
        }, 200);
    });
}

//This function sets resets score button
function getResetScoredButton() {
    return document.getElementById("reset-score-btn").addEventListener("click", () => {
        won = 0;
        lost = 0;
        printScore(won, lost);
    });
}

//This function print and updates the match result
function printScore(wonNumber, lostNumber) {
    document.getElementById("won-text").innerHTML = "Won: " + wonNumber;
    document.getElementById("lose-text").innerHTML = "Lost: " + lostNumber;
}
