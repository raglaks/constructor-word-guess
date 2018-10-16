// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

const inquirer = require("inquirer");

let a = "a";

let input = null;

function guess() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter",
                name: "letter"
            },

        ])
        .then(function (response) {

            input = response.letter;

            let n = input.length;


            if (n > 1) {
                console.log("please input a single letter only:");
            } else {
                console.log(input);

                let test = new Letter(input);
                test.argCheck();
                test.guessCheck();

                module.exports = {
                    test: test,
                }
            }

        });
}

function Letter(input) {
    this.input = input;
    this.check = false;
    this.guessCheck = function () {
        if (this.check === true) {
            console.log(`${input}`);
        } else {
            console.log("_");
        }
    }

    this.argCheck = function () {
        if (this.input == a) {
            this.check = true;
            console.log("\ngood guess");
        } else {
            console.log("\nkeep trying");
        }
    }
}

guess();




