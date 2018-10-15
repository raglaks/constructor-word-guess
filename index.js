// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

const inquirer = require("inquirer");

const words = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid", "fishhook", "fjord", "gazebo", "gypsy"];

let input =;

function randomWord() {
    
    const arrayLength = words.length;

    const rando = Math.floor((Math.random() * arrayLength));

    //console.log(words[rando]);
}

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

            let guess = response.letter;

            input = guess;

            let n = guess.length;


            if (n > 1) {
                console.log("please input a single letter only:");
            } else {
                console.log(guess);
            }

        });
}

guess();

//randomWord();