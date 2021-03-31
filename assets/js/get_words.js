//List of hidden word
let wordsJson = [
    {
        word : "eagle",
        topic : "animals"
    },
    {
        word: "bedroom",
        topic: "part_of_the_house"
    },
    {
        word : "leopard",
        topic : "animals"
    },
    {
        word : "Knife",
        topic : "in_the_kitchen"
    },
    {
        word : "monkey",
        topic : "animals"
    },
    {
        word : "orange",
        topic : "fruitsAndvegetables"
    },
    {
        word : "bear",
        topic : "animals"
    },
    {
        word: "ruler",
        topic: "school_tools"
    },
    {
        word : "cat",
        topic : "animals"
    },
]


// //This function updates the word lists divided by topics
// function getAllCategoryOfWords() {
//     getOneCategoryOfwords("animals", animals)
//     getOneCategoryOfwords("fruitsAndvegetables", fruitsAndVagetables)
//     getOneCategoryOfwords("school_tools", schoolTools)
//     getOneCategoryOfwords("part_of_the_house", partOfTheHouse)
//     getOneCategoryOfwords("in_the_kitchen", inTheKitchen)
// }

// //This function updates only one word lists, starting from 
// //an array of word object. Each object consists of two properties: 
// //the word and the category to which it belongs.
// function getOneCategoryOfwords(category, listName) {
//     for (let wordsItem of wordsJson) {
//         for (let property in wordsItem) {
//           if (wordsItem [property] === category && 
//             listName.indexOf(wordsItem.word) === -1) {
//             listName.push(wordsItem.word);  
//           } 
//         }
//     }
// }
