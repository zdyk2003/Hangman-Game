// variable for wins, losses, letters guessed, guesses left
// variable for hangman letters chosen
// variable for reset at end of guesses left

var words= ["snow", "skis", "gloves", "skiboot", "coat", "helmet"];
var arrIndex= Math.floor(Math.random() * words.length);
var randomWord= words[arrIndex];
	console.log(randomWord);
var letters = randomWord.split("");
// the letters that make up the answer in the spaces
var guessesLeft = 10;
var wins = 0;
var lettersGuessed = [];
var display = randomWord.length;
	for (var i = 0; i < randomWord.length; i++) {
			display[i]= "_ ";
		}

	document.onkeyup = function (event) {

		var userChoice = event.key;
			console.log(userChoice);

	// for (var i = 0; i < randomWord.length; i++) {
	// 	if(randomWord[i] === userChoice){
	// 		display[i] = userChoice + "";
	// 		}	
	// 	}
	
		if  (guessesLeft == 0) {
				guessesLeft = 10;
				lettersGuessed = [];
				alert("YARDSALE!! Try Again!");
			}	
		
			else if (userChoice == randomWord) {
				wins++;
				guessesLeft = 10;
				alert("You are a downhill master!");
			}

				else if (lettersGuessed != letters) {
				  	guessesLeft--;
				  	lettersGuessed.push(userChoice);
				}

			var html = 
			
			"<p>Wins: " + wins + "</p>" +
			"<br>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
			"<br>" +
			"<p>Current Word:  " + display + "</p>" +
			"<br>" +
			"<p>Letters you have guessed so far: " +  lettersGuessed  + "</p>";

			document.querySelector(".gameBoard").innerHTML = html;

		}

