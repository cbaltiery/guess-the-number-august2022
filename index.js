const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
const num = Math.ceil(Math.random() * 100);




async function start() {
  console.log ("Hello, do you want to play a game?");
  let response = await ask("Yes or No?");
  while ((response != "No"||"no"||"N"||"n") && (response != "Yes"||"yes"||"y"||"Y")){
  } if (response != "No"||"no"||"N"||"n"){
    console.log("Good-Bye")
  } else if (response = "Yes"||"yes"||"y"||"Y"){
  console.log("OK!...Please think of a number between 1 and 100.\n I will try and guess it!")
  let randomNumber = num
  console.log(randomNumber)
  promtGuess(randomNumber)
  }
}
  async function promptGuess(answer) {
  let guessNumber = await ask("What is your guess?\nI won't peek, I swear...\n");
  console.log('Your guess is: ' + guessNumber);
  






  


 process.exit();
}

start();
