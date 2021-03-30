//List of hidden word
let wordsJson = [
    {
        word : "eagle",
        category : "animals"
    },
    {
        word: "bedroom",
        category: "part_of_the_house"
    },
    {
        word : "Knife",
        category : "in_the_kitchen"
    },
    {
        word : "orange",
        category : "fruitsAndvegetables"
    },
    {
        word: "ruler",
        categoty: "school_tools"
    }
]


//This function updates the word lists divided by topics
function getAllCategoryOfWords() {
    getOneCategoryOfwords("animals", animals)
    getOneCategoryOfwords("fruitsAndvegetables", fruitsAndVagetables)
    getOneCategoryOfwords("school_tools", schoolTools)
    getOneCategoryOfwords("part_of_the_house", partOfTheHouse)
    getOneCategoryOfwords("in_the_kitchen", inTheKitchen)
}

//This function updates only one word lists, starting from 
//an array of word object. Each object consists of two properties: 
//the word and the category to which it belongs.
function getOneCategoryOfwords(category, listName) {
    for (let wordsItem of wordsJson) {
        for (let property in wordsItem) {
          if (wordsItem [property] === category &&                                             listName.indexOf(wordsItem.word) === -1) {
            listName.push(wordsItem.word);  
          } 
        }
    }
}
