/*Challenge 1: Your Age in days (the first way)

Description: When you click the "Click me" button and enter your year of birth, the web will returns your age in days. And you can click "Reset" button to reset it.

This is the first way for this challenge that I do, both ways will basically work the same accept for the second way with some validations

function ageInDays(){
    var birthYear = prompt("What year you were born my friend?");
    var result = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You were born in " + birthYear +". You are " + result + " days old!")
    h1.setAttribute('id', 'ageInDays'); //add id ageInDays to h1
    h1.appendChild(textAnswer);
    document.getElementsByClassName('flex-box-result')[0].appendChild(h1);
}

function reset(){
    document.getElementsByClassName('flex-box-result')[0].remove();
}
*/

//Challenge 1: Your Age in days (second way) -- do not accept invalid numbers or negative numbers
function ageInDays() {
    var birthYear = prompt("What year you were born my friend?");
    var result = (2020 - birthYear) * 365;
    if (isNaN(result) || birthYear <= 0 || birthYear > 2020) {
        alert("Please enter a valid number ");
        return;
    } else {
        var h1 = document.createElement('h1');
        var content = "You were born in " + birthYear + ". You are " + result + " days old!";
        h1.innerHTML = content;
        document.getElementsByClassName('flex-box-result')[0].append(h1);
    }
}

function reset() {
    document.getElementsByClassName('flex-box-result')[0].style.display = "none";
}

/*----------------------------------------------------------------------------------------*/

/*Challenge 2: Cat Generator

Description: Click "Generate Cat" to have your cat pictures randomly generated each time and reset to delete the pictures.*/

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

function resetCat() {
    document.getElementById('flex-cat-gen').style.display = "none";
}

/*----------------------------------------------------------------------------------------*/

/*Challenge 3: Rock, Paper, Scissors

Description: Rock, paper, scissors game.*/
function random() {
    return Math.floor(Math.random() * 3);
}

function randomToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinnner(humanChoice, botChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1}
    };
    
    var humanScore = rpsDatabase[humanChoice][botChoice];
    var botScore = rpsDatabase[botChoice][humanChoice];
    
    return [humanScore, botScore];
}

function finalMessage([humanScore, botScore]) {
    if(humanScore === 0){
        return {'message': 'You lost!', 'color': 'red'}
    }else if(humanScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'}
    }else{
        return {'message': 'You won!', 'color': 'green'}
    } 
}

function rpsFrontEnd(humanChoice, botChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messDiv = document.createElement('div');
    
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    
    messDiv.innerHTML = "<h1 style='color:" + finalMessage.color + "; font-size:60px; padding:30px'>" + finalMessage.message + "</h1>"
    document.getElementById('flex-box-rps-div').appendChild(messDiv);
    
    botDiv.innerHTML = "<img src='" + imagesDatabase[botChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
    document.getElementById('resetBtn').classList.remove('hidden');
}

function resetGame() {
    window.location.reload();
}

function rpsGame(yourChoice) {
    var botChoice = randomToChoice(random());
    var humanChoice = yourChoice.id; //get the ID from the pictures
    var result = decideWinnner(humanChoice, botChoice);
    var message = finalMessage(result);
    rpsFrontEnd(humanChoice, botChoice, message);
}

/*----------------------------------------------------------------------------------------*/

//Challenge 4: Change the color of all buttons

//Description: Change the color of the all the buttons by choosing from the box

var allButtons = document.getElementsByTagName('button');
var copyButtons = [];

for (let i = 0; i< allButtons.length; i++) {
    copyButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(button) {
    switch (button.value) {
        case 'red':
            buttonRed();
            break;
        case 'green':
            buttonGreen();
            break;
        case 'random':
            buttonRandom();
            break;
        case 'reset':
            buttonReset();
            break;
        default:
            return;
    }  
}

function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyButtons[i]);
    }
}

function buttonRandom() {
    var choice = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    
    for(let i = 0; i < allButtons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choice[randomNumber]);       
    }
}
