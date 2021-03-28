
//Attempts failed
let strike = 4;

//Game won
let won = 0;

//Game lost
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

//This function prepares the start of the game:
//Prepare the secret word on the screen, 
//remove all parts of the hanged man, 
//enable the keys in the play section
function gamePreparation() {
    
    hiddenWord = getHiddenWord(getTopic());
    wordLetters = hiddenWord.split("");

    printHiddenWord(hiddenWord);

    setKeyboardEnabled();
    setPlayButtonEnebled();

    strike = 4;

    hideHangPart();

    printScore(won, lost);

    console.log("Si comincia!")
    console.log(strike, " Attempts!");
}

//This function manages the game: 
//it checks if the chosen letter is present, 
//the score conditions and the status of the keys and hangman
function play(listOfLetters) {
    let LettersGuessForAttempt = 0;
    console.log("Attempt Letter:", attemptLetter);
    for (let i = 0; i < getLetter().length; i++) {
        if (getLetter()[i].innerHTML === attemptLetter) {
            getLetter()[i].classList.add("visible");
            LettersGuessForAttempt++;
            if (getLetterGuess().length === getLetter().length) {
                console.log("Hai vinto!!!");
                setKeyboardDisabled();
                setPlayButtonDisabled();
                getPopMessage("pop-box-small", "You Win!", popMessageSmall);
                setPopButtonOnListening("pop-box-small");
                won++;
                printScore(won, lost);
            } else console.log(strike, " more attempts...");
        }
        document.getElementById(attemptLetter).setAttribute("disabled", true);
    }

    if (LettersGuessForAttempt == 0) {
        (strike--)
        switch (strike) {
            case 0: 
                console.log("Hai perso...");
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
                console.log(strike, " more attempts...CASE-2");
                getHangParts("hang-arm-l");
                getHangParts("hang-arm-r");
                break;
            case 2:
                console.log(strike, " more attempts...CASE-2");
                getHangParts("hang-body");
                break;

            case 3:
                console.log(strike, " more attempts...CASE-3");
                getHangParts("hang-head");
                break;
        }
        
    }
}
