// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

const Letter = require("./letter.js");

let letter = new Letter();

//console.log(letter);

const Word = function (word) {

    
    
    this.word = word;

    this.arrSplit = function () {

        let str = this.word.split("");

        str.forEach(element => {

            this.array.push(element);
            console.log(this.array);
        });

    }

    this.array = [];
    
} 

module.exports = Word;


 