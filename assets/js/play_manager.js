/**
 * Associated with each key on the keyboard 
 * checks if the chosen letter is present,
 * the score conditions and the status of the keys and "hanged man"
 */
function play() {
    
    //Number of letters guessed in one attempt
    let lettersGuessForAttempt = 0;

    for (let letter of getLetters()) {
        if (letter.innerHTML === attemptLetter) {
            letter.classList.add("visible");
            lettersGuessForAttempt++;

            if (getLetterGuess().length === getLetters().length) {
                setKeyboardDisabled();
                setPlayButtonDisabled();
                hideHangPart();
                getPopMessage("pop-box-small", "You Win!", getPopMessageSmall());
                setPopButtonOnListening("pop-box-small");
                won++;
                printScore(won, lost);
            }
        }
        document.getElementById(attemptLetter).setAttribute("disabled", true);
    }

    if (lettersGuessForAttempt == 0) {
        (strike--)
        switch (strike) {
            case 0:
                setDefeat() 
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
            default:
                getPopMessage("pop-box-large", "Choose the topic", getPopMessageLarge()); 
                setPopButtonOnListening("pop-box-large");
        }

    }
}

function setDefeat() {
    getHangParts("hang-leg-l");
    getHangParts("hang-leg-r");
    setKeyboardDisabled();
    setPlayButtonDisabled();
    setWordVisible();
    getPopMessage("pop-box-small", "You lost...", getPopMessageSmall());
    setPopButtonOnListening("pop-box-small");
    lost++;
    printScore(won, lost);
}
