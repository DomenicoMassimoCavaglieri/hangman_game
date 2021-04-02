
//Initial Popup
getPopMessage("pop-box-large", "Choose the topic", popMessagesLarge); 
setPopButtonOnListening("pop-box-large");

//The keyboard appears
getKeyboard();

//Preparation the buttons in the play section
getChangeWordButton();
getChangeTopicButton()
getResetScoredButton()

//Disabled all buttons
setKeyboardDisabled();
setPlayButtonDisabled();


/**
 * Prepare the secret word on the screen, 
 * remove all parts of the hanged man, 
 * enable the keys in the play section
 */
function setupGame() {
    
    hiddenWord = getTopic().toUpperCase();
    wordLetters = hiddenWord.split("");
    
    printHiddenWord(hiddenWord);

    setKeyboardEnabled();
    setPlayButtonEnebled();

    strike = 4;

    hideHangPart();

    printScore(won, lost);
}
