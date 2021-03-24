//Given a string made up of a list of words without punctuation marks,
//it returns a random word
function getHiddenWord(stringOfWords) {
    let hiddenWord = stringOfWords.split(" ");
    let i = randomIndex(hiddenWord);
    return hiddenWord[i].toUpperCase();
  }
  
  //Given an array, it always returns a different random index
  function randomIndex(list) {
    let index = Math.floor(Math.random() * list.length);
    while (index == wordsListIndex) {
      console.log()
      index = Math.floor(Math.random() * list.length);  
    }
      wordsListIndex = index;
      console.log("the current index is: ", index);
      console.log("the global index is: ", wordsListIndex);
      return index;
  }