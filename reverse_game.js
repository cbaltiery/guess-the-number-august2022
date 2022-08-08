const readline = require('readline')

const readlineInterface = readline.createInterface(
    process.stdin, 
    process.stdout
    );

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve)
    })
}
async function start() {
    console.log(`\n I'm thinking of a number.\n And it's between 1 and 100...`)
    let randomNumber = Math.round(Math.random() * (100 - 1) + 1) 
    console.log(randomNumber) 
    promptGuess(randomNumber)
}

async function promptGuess(answer) {
    let guessNumber = await ask("\n Guess the number!\n")
    guessNumber = parseFloat(guessNumber) 

    while (isNaN(guessNumber)) { 
        console.log('\nUmm no!\nI said a number between 1 and 100 please!')
        return promptGuess(answer)
    }
    if (guessNumber < 1 || guessNumber > 100) { 
        console.log('\nOMG I said it was between 1 and 100!!')
        return promptGuess(answer)
    }
    if (guessNumber === answer) {
        console.log(" \nYesssss you got it!!  The number was " + answer + " Congrats!")
        process.exit()
    }
    if (guessNumber > answer) {
        console.log("\nAhh no!  My number is actually LOWER than that")
        return promptGuess(answer)
    } else {
        console.log("\nWoops! My number is defiitely HIGHER than that")
        return promptGuess(answer)
    }
}
start();