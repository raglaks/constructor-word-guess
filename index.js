// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

const inquirer = require("inquirer");
const Word = require("./word.js");

const words = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid", "fishhook", "fjord", "gazebo", "gypsy"];

let input = null;

let wordString = null;

let count = 0;

function randomWord() {

    const arrayLength = words.length;

    const rando = Math.floor((Math.random() * arrayLength));

    wordString = words[rando];

    console.log(wordString);

    let word = new Word(wordString);

    word.arrSplit();

    console.log(word);

}

function guessInput() {

    if (count <= 4) {

        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter",
                    name: "letter"
                },

            ])
            .then(response => {

                let guess = response.letter;

                input = guess;

                let n = guess.length;

                if (n > 1) {
                
                    console.log("please input one letter only");

                    guessInput();

                } else {

                    console.log(input);

                    count++;

                    guessInput();

                }

            });

    } else {

        console.log(`no more guesses bub`);

        //console.log(wordbuilder.wordBuild.word = wordString);

    }

}

//guessInput();

randomWord();