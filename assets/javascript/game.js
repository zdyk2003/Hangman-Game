// variable for wins, losses, letters guessed, guesses left
// variable for hangman letters chosen
// variable for reset at end of guesses left
var wins = 0;
document.getElementById("wins").innerHTML = wins;
var guessesLeft = 10;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
var wordBank= ["SNOW", "SKIS", "GLOVES", "SKIBOOT", "COAT", "HELMET"];
var imgBank = ['snow.jpg', 'ski.jpg', 'gloves.jpg', 'skiboot.jpg', 'coat.jpg', 'helmet.jpg'];
var randomNum = Math.floor(Math.random() * wordBank.length);
var currentWord= wordBank[randomNum];
var currentImg = imgBank[randomNum];
console.log(currentWord);
var blankWord = [];
var incorrectLetters = [];
// var image = [
// 	"assets/images/coat.jpg"
// 	"assets/images/gloves.jpg"
// 	"assets/images/helmet.jpg"
// 	"assets/images/skiboot.jpg"
// 	"assets/images/skis.jpg"
// 	"assets/images/snow.jpg"
// 	];

for (i = 0; i < currentWord.length; i++) {
	blankWord[i] = "_ ";
}
console.log(blankWord);

document.getElementById("currentWord").innerHTML = blankWord.join("");

document.onkeyup = function(event) {

	var userChoice = event.key;
	userChoice = userChoice.toUpperCase();
	console.log(userChoice);

	var misses = 0;

	for (i = 0; i < currentWord.length; i++) {
		if(currentWord[i] === userChoice){
			blankWord[i] = userChoice;
			document.getElementById("currentWord").innerHTML = blankWord.join("");
		}	
		else{
			misses++;
		}

	}
	
		if  (misses === currentWord.length) {
				var counter = 0;
				for(var i = 0; i < incorrectLetters.length; i++) {
					if(userChoice === incorrectLetters[i]) {
						break;
					}
					else {
						counter ++;
					}
				}

				if(counter === incorrectLetters.length) {
					incorrectLetters.push(userChoice);
					guessesLeft--;
					document.getElementById("guessesLeft").innerHTML = guessesLeft;
					document.getElementById("lettersGuessed").innerHTML = incorrectLetters;
					}
				}
				checkIfDone();
		}
function checkIfDone () {
	var counter = 0;
	for(var i = 0; i < blankWord.length; i++) {
		if (blankWord[i] === "_ ") {
			break;
		}
		else{
			counter++;
		}
	}
	if(counter === blankWord.length) {
		wins++;
		$(".image").attr("src", "assets/images/" + currentImg);
		setTimeout(function() {
			$(".image").attr("src", "");	
			newGame();
		}, 3000);
	}

}

function newGame() {
	guessesLeft = 10;
	incorrectLetters= [];
	randomNum = Math.floor(Math.random() * wordBank.length);
	currentWord= wordBank[randomNum];
	currentImg = imgBank[randomNum];
	blankWord = [];
	for (i = 0; i <currentWord.length; i++){
		blankWord[i] = "_ ";
	}

	console.log(currentWord);
	console.log(blankWord);
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("currentWord").innerHTML = blankWord.join("");
	document.getElementById("lettersGuessed").innerHTML = incorrectLetters;


}
