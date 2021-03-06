
      // VARIABLES
      // ==========================================================================
      // First create an array from which a letter will ben randomly chosen and be the game's guessed letter.

      var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      // Create an array that will append the guesses of the user

      var letterGuesses = [];

      // Set the scores to zero

      var winsScore = 0;
      var lossScore = 0;
      var guessTracker = 9;

      function updateScore() {
        document.querySelector("#wins").innerHTML = "Wins: " + winsScore;
        document.querySelector("#losses").innerHTML = "Losses: " + lossScore;
        document.querySelector("#guesses").innerHTML = "Guesses: " + guessTracker;
        }  

      function updateGuesses() {
       document.querySelector("#yourguesses").innerHTML = letterGuesses;
      }
      // Select the letter to be guessed
      // 1 - 24
      // Make this a function to be called in the loop below
      function pickLetter() {
        newNbr = Math.floor(Math.random() * 26) + 1;
        selLetter=letterArray[newNbr];
        // alert(selLetter);
      }

      // Show the scores on the webpage even before the game starts.
      updateScore();
      pickLetter();
      updateGuesses();
      
      //Start the game by "listening" for a keystroke;
      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {
      // If guess tracker is at 9, start over.
        //Reset the guess aray, add on to loss score, reset guess tracker, update scores and repick letter
      if (guessTracker === 0) {
        letterGuesses = [];
        lossScore++;
        guessTracker=9;
        updateScore();
        pickLetter();
        alert("You've run out of guesses! Let's start over with a new letter.")
        }

      // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
      var userInput = String.fromCharCode(event.keyCode).toLowerCase(); 

      //if they guessed the correct letter, up the win score by one, decrease guess tracker by one, update score in hmtel section clearout the letters guessed array, 
        if (userInput === selLetter){
          alert("You're right - I was thinking of " + userInput + "!");
          winsScore++;
          guessTracker = 9;
          letterGuesses = [];
          updateScore();
          pickLetter();
        } 
        //Otherwise, they didn't get the right answer. They can keep on guessing until they reach 9 attempts;
        else {
          guessTracker--;
          letterGuesses.push(userInput);
          updateScore();
          updateGuesses();
        }  
      }

