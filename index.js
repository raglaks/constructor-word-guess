// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

const inquirer = require("inquirer");
const Word = require("./word.js");


const words = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid", "fishhook", "fjord", "gazebo", "gypsy"];

let input = null;

let wordString = null;

let count = 0;

let word = null;

function randomWord() {

    const arrayLength = words.length;

    const rando = Math.floor((Math.random() * arrayLength));

    wordString = words[rando];

    word = new Word(wordString);

    word.arrSplit();

    word.printWord();

}

function guessInput() {

    if (count <= 4) {

        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter",
                    name: "input"
                },

            ])
            .then(response => {

                let guess = response.input;

                input = guess;

                let n = guess.length;

                if (n > 1) {

                    console.log("please input one letter only");

                    guessInput();

                } else {

                    console.log(input);

                    console.log(word);

                    //let letter = new Letter(input);

                    // word.array.forEach(element => {

                    //     letter.a = element;

                    // });

                    // console.log(letter.a);

                    count++;

                    guessInput();

                }

            });

    } else {

        console.log(`no more guesses bub`);
        console.log(wordString);

    }

}

randomWord();

//guessInput();