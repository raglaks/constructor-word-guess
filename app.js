const inquirer = require("inquirer");

const words = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid", "fishhook", "fjord", "gazebo", "gypsy"];

let input = null;

let wordString = null;

let count = 0;

function randomWord() {

    const arrayLength = words.length;

    const rando = Math.floor((Math.random() * arrayLength));

    wordString = words[rando];

}

function guessInput() {

    console.log(wordString);

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

                    count++;

                    inputCheck();

                }

            });

    } else {

        console.log(`no more guesses bub`);

        console.log(wordString);

    }

}

function inputCheck() {
    if (wordString.includes(input)) {
        console.log(input);
        console.log("correct");
    } else {
        console.log("wrong");
        console.log("_");
    }

    guessInput();
}

randomWord();

guessInput();

