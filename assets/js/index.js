
//Attempts failed counter
let strike = 4;

//Game won counter
let won = 0;

//Game lost counter
let lost = 0;

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
function gamePreparation() {
    
    hiddenWord = getTopic().toUpperCase();
    wordLetters = hiddenWord.split("");
    
    printHiddenWord(hiddenWord);

    setKeyboardEnabled();
    setPlayButtonEnebled();

    strike = 4;

    hideHangPart();

    printScore(won, lost);
}

/**
 * Associated with each key on the keyboard 
 * checks if the chosen letter is present
 * the score conditions and the status of the keys and "hanged man"
 */
function play() {
    let LettersGuessForAttempt = 0;
    for (let i = 0; i < getLetter().length; i++) {
        if (getLetter()[i].innerHTML === attemptLetter) {
            getLetter()[i].classList.add("visible");
            LettersGuessForAttempt++;
            if (getLetterGuess().length === getLetter().length) {
                setKeyboardDisabled();
                setPlayButtonDisabled();
                hideHangPart();
                getPopMessage("pop-box-small", "You Win!", popMessageSmall);
                setPopButtonOnListening("pop-box-small");
                won++;
                printScore(won, lost);
            }
        }
        document.getElementById(attemptLetter).setAttribute("disabled", true);
    }

    if (LettersGuessForAttempt == 0) {
        (strike--)
        switch (strike) {
            case 0: 
                getHangParts("hang-leg-l");
                getHangParts("hang-leg-r");
                setKeyboardDisabled();
                setPlayButtonDisabled();
                setWordVisible();
                getPopMessage("pop-box-small", "You lost...", popMessageSmall);
                setPopButtonOnListening("pop-box-small");
                lost++;
                printScore(won, lost);
                break;
            case 1: 
                getHangParts("hang-arm-l");
                getHangParts("hang-arm-r");
                break;
            case 2:
                getHangParts("hang-body");
                break;

            case 3:
                getHangParts("hang-head");
                break;
        }
        
    }
}
