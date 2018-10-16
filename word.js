// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

const letter = require("./letter.js");

    // let wordy = new Word(w[0]);
    // wordy.arrSplit();

let w = ["awkward"];

function Word(word) {
    
    this.word = word;

    this.arrSplit = function () {

        let str = this.word.split("");

        str.forEach(element => {
            console.log(`\n${element}\n`);
        });

    }
} 

// let test1 = new Word(w[0]);

// test1.arrSplit();

console.log(letter.test);
 