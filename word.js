// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

const Letter = require("./letter.js");

const Word = function (word) {

    this.word = word;

    this.array = [];

    this.letterObjects = [];

    this.arrSplit = function () {

        let str = this.word.split("");

        str.forEach(element => {

            this.array.push(element);

        });

    }

    this.letterObj = function () {

        for (i = 0; i < this.array.length; i++) {

            let letObjs = new Letter(this.array[i]);
            this.letterObjects.push(letObjs);

        }

    }

    this.argCheck2 = function (arg) {

        this.letterObjects.forEach(element => {

            element.argCheck(arg);

            element.toString();

        });

    }

    this.winner = function () {

        this.trueCheck = [];

        for (i = 0; i < this.letterObjects.length; i++) {

            let checkers = this.letterObjects[i].check;
            this.trueCheck.push(checkers);

        }

        function allTrue(n) {
            return n === true;
        }

        let gameWin = this.trueCheck.every(allTrue);

        if (gameWin === true) {
            process.exit();

            console.log("\nyou win!");
        }
    }

    
    //console.log(this.trueCheck);



}


//must pass selected word to this constructor var
//let word = new Word("four");

// word.arrSplit();

// word.letterObj();

// word.argCheck2("p");

// word.winner();

module.exports = Word;


