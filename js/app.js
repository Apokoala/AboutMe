'use strict'

let cooount = 0;

Question1();
function Question1(){
    let userinput = prompt ('Is Day[9] my favorite streamer? (type yes or y or no or n)');
   while (userinput.toUpperCase() === 'NO' || userinput.toUpperCase() === 'N'){
        console.log('Incorrect');
        alert('Incorrect');
        userinput = prompt ('Is Day[9] my favorite streamer? (type yes or y or no or n)');
    }
    console.log('Correct');
    cooount++;
    alert('Correct');
   
}

Question2();
function Question2(){
    let userinput = prompt ('Is Sydney my dog? (type yes or y or no or n)');
    if (userinput.toUpperCase () === 'NO' || userinput.toUpperCase () === 'N'){
        console.log('Sydney is my puppo!');
        alert('She sure is!');
        userinput = prompt('Is Sydney my dog? (type yes or y or no or n)');
    } 
    console.log('Correct');
    cooount++;
    alert('Correct');
  
}

Question3();
function Question3(){
    let userinput = prompt ('Is Golden Girls one of my favorite shows? (type yes or y or no or n)');
    if (userinput.toUpperCase() === 'NO' || userinput.toUpperCase() === 'N'){
        console.log('technically it is my bestest, most favoritist, show')
        alert('technically it is my bestest, most favoritist, show');
        userinput = prompt('Is Golden Girls one of my favorite shows? (type yes or y or no or n)');
    } 
    console.log('Correct');
    alert('Correct');
    cooount++;
  
}

Question4();
function Question4(){
    let userinput = prompt ('Do I have two eyes? (type yes or y or no or n)');
    while (userinput.toUpperCase() === 'NO' || userinput.toUpperCase() === 'N'){
        console.log('Do you think I\'m a pirate')
        alert('¯\_(ツ)_/¯');
        userinput = prompt('Do I have two eyes? (type yes or y or no or n)');
    } 
    console.log('Correct');
    alert('Correct');
    cooount++;
  
}

Question4();
function Question4(){
    let userinput = prompt ('Is Brandon Sanderson my favorite author?');
    while (userinput.toUpperCase() === 'NO' || userinput.toUpperCase() === 'N'){
        console.log('Think again')
        alert('WROOOOOOONG!');
        userinput = prompt('Is Brandon Sanderson my favorite author?');
    } 
    console.log('Correct');
    alert('Correct');
    cooount++;

}

let firstName = prompt ('Give me your name!');
// // console.log(document.getElementById("firstName"));
// document.getElementById("firstName").innerHTML = 'Hello, ' +firstName+ ', welcome to my page'

window.alert ('Hello ' +firstName+ ', Here is a quick number game!')


GuessingGame();
function GuessingGame(){
    for (let i = 3; i >= 0; i--){
     let userInput = prompt ('Guess a number between 1 and 10');
     let answerMe = 7;
        if (userInput == answerMe){
                console.log ('Correct');
                alert('Perfect!~');
                cooount++;
                break;
        }
            else if (i < 0){
                alert ('No more attempts bruv...')
         }
            else if (userInput < answerMe) {
                console.log ('This is not the number');
                alert('Too Low, you have '+(i)+ ' guesses left!');   
        }   
            else if (userInput > answerMe) {
                console.log ('This is not the number');
                alert('Too High, you have '+(i)+ ' guesses left!');
         }   
            else {
                alert('Not valid, you have '+(i)+ ' guesses left!');
        }
    }
}


// let score = 0;

function fourtyTwoForYou (){
    let attmeptsGiven  = 4;
  for (let i  = 3; i < attmeptsGiven; i--) {
    let response = prompt('please guess the number of about all things in the universe and everything');
    let favoriteNumber = '42';

    if (response === favoriteNumber) {
      alert ('Now there is a man who knows where his towel is!');
      coount++;
      return;
    } else if (response > favoriteNumber) {
      alert('Don\'t Panic: Too High');
    } else if (response < favoriteNumber) {
      alert('Don\'t Panic: Too Low');
    } else {
      alert('WHAT YOU TALKING ABOUT, WILLIS?');
    }

    if(i === 0){
      alert('Thanks for playing, my favorite number is 42');
    }s
  }
}

fourtyTwoForYou ();

alert(`You got ${cooount} answers correct!`);


    // console.log ('This is not the number');
    // alert ('Wrong, you have ' +(attempt--)+ ' guesses left!' );
    // userInput = prompt ('Guess a number between 1 and 10');
    
    // console.log ('Correct');
    // alert ('Nailed it!!')
    // break