'use strict'

Question1();
function Question1(){
    let userinput = prompt ('Is Day[9] my favorite streamer? (type yes or y or no or n)');
   while (userinput.toUpperCase() === 'NO' || userinput.toUpperCase() === 'N'){
        console.log('Incorrect');
        alert('Incorrect');
        userinput = prompt ('Is Day[9] my favorite streamer? (type yes or y or no or n)');
    }
    console.log('Correct');
    alert('Correct');
}

Question2();
function Question2(){
    let userinput = prompt ('Is Sydney my dog? (type yes or y or no or n)');
    if (userinput.toUpperCase () === 'NO' || userinput.toUpperCase () === 'N'){
        console.log('Sydney is my puppo!')
        alert('She sure is!');
        userinput = prompt('Is Sydney my dog? (type yes or y or no or n)');
    } 
    console.log('Correct');
    alert('Correct');
}

Question3();
function Question3(){
    let userinput = prompt ('Is Golden Girls one of my favorite shows? (type yes or y or no or n)');
    if (userinput.toUpperCase() === 'NO' || userinput.toUpperCase() === 'N'){
        console.log('technically it is my bestest, most favoritist, show')
        alert('Darn tootin');
        userinput = prompt('Is Golden Girls one of my favorite shows? (type yes or y or no or n)');
    } 
    console.log('Correct');
    alert('Correct');
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
}

let firstName = prompt ('Give me your name!');
// console.log(document.getElementById("firstName"));
document.getElementById("firstName").innerHTML = 'Hello, ' +firstName+ ', welcome to my page'