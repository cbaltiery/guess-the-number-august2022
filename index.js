const prompt = require("prompt-sync")({ sigint: true});
const readline = require('readline');
const { isTypedArray } = require("util/types");

const readlineInterface = readline.createInterface(
    process.stdin, 
    process.stdout
    );

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve)
    })
}
let randomNum = Math.ceil(Math.random() * 100)
let H ="higher"
let L = "lower"
let C = "correct"


async function start() { 
  let promptIntro= await ask("Hi, let's play a game!\nPlease type in a number from 1 to 100 and I will try and guess it!: ");
  promptIntro = parseFloat(promptIntro)  
  return promptGuess();
}  
 async function promptGuess() {
  let guessNumber= await ask("Is your number..."+randomNum+"?")
  let response = await ask ("\nPlease let me know if it was higher(H), lower(L) or if I was correct(C)?")

    if(response === C) {
      console.log(" \nYesssss you got it!!  The number was " + guessNumber + " Congrats!")
    process.exit()
    } else if (response === L){
      console.log("No it is actually lower than that!")
      return promptGuess()
    } else if (response === H){
      console.log("No it's actually higher than that!")
      return promptGuess()
    }

}
start();