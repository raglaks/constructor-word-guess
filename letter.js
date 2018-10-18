// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

const Letter = function (input) {

    //this is the string value that stores the underlying character
    this.input = input;

    this.check = false;

    this.toString = function () {

        if (this.check === true) {

            console.log(`${input}`);

        } else {

            console.log("_");

        }

    }

    this.argCheck = function (arg) {

        if (this.input === arg) {

            this.check = true;

        } 
    }
}


//each letter of the selected word must be built into objects like so:
//let letter = new Letter("f");


//letter.toString();

//this is where the user input has to go
//letter.argCheck("d");

//letter.toString();

//console.log(letter);


module.exports = Letter;



