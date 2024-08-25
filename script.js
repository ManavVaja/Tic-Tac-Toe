// Global varibale for tracking the player score
var playerXScore = 0;
var player0Score = 0;

//Play the music when ever game reset, click, win and tie the game 
function playreset() {
  var playreset = document.getElementById('reset-sound');
  playreset.play();
}
function playclick() {
  var playclick = document.getElementById('click-sound');
  playclick.play();
}
function playwin() {
  var playwin= document.getElementById('win-sound');
  playwin.play();
}
function playtie() {
  var playtie= document.getElementById('tie-sound');
  playtie.play();
}

// This Function reset the game bored wwithout affecting the score bored
function resetGameBoard() {
  // Get all the buttons by their ID or class (assuming they are 'b1' to 'b9')
  const buttons = [
      document.getElementById('b1'),
      document.getElementById('b2'),
      document.getElementById('b3'),
      document.getElementById('b4'),
      document.getElementById('b5'),
      document.getElementById('b6'),
      document.getElementById('b7'),
      document.getElementById('b8'),
      document.getElementById('b9')
  ];

  // Loop through each button and reset its properties
  buttons.forEach(button => {
      button.value = ''; // Reset the text
      button.disabled = false; // Enable the button
      button.style.backgroundColor = ''; // Reset the background color
      button.style.color = ''; // Reset text color if it was changed
      button.classList.remove('win'); // Remove any winning class
  });

  // Reset turn indicator or any other game state
  document.getElementById("print").innerHTML = "Turn for X Player";
  currentPlayer = 'X'; // Reset the starting player
  gameActive = true; // Make sure the game is active
  gameState = ["", "", "", "", "", "", "", "", ""]; // Reset game state array
  playreset();
}

//Reset the game score bored 
function resetScores() {
  // Reset the score variables
  playerXScore = 0;
  player0Score= 0;

  // Update the score display
  document.getElementById("playerXScore").innerText = playerXScore;
  document.getElementById("player0Score").innerText = player0Score;
  playreset();
}


// Function to update the score for the winning player
function updateScore(winningPlayer) {
    if (winningPlayer === 'X') {
        playerXScore++;
        document.getElementById('playerXScore').innerText = playerXScore;
    } else if (winningPlayer === '0') {
        player0Score++;
        document.getElementById('player0Score').innerText = player0Score;
    }
}

// funtion that pridict the each posiblity of wining the game and for each of that posiblity we pass the message and discide the wining player 
function myfunc() {

  var b1, b2, b3, b4, b5, b6, b7, b8, b9;

  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;

  b1btn = document.getElementById("b1");
  b2btn = document.getElementById("b2");
  b3btn = document.getElementById("b3");
  b4btn = document.getElementById("b4");
  b5btn = document.getElementById("b5");
  b6btn = document.getElementById("b6");
  b7btn = document.getElementById("b7");
  b8btn = document.getElementById("b8");
  b9btn = document.getElementById("b9");

  if (
    (b1 == "x" || b1 == "X") &&
    (b2 == "x" || b2 == "X") &&
    (b3 == "x" || b3 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X Won";
    playerXScore++;
    document.getElementById("playerXScore").innerText = playerXScore;
    
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.classList.add('win');
    b2btn.classList.add('win');
    b3btn.classList.add('win');

    playwin();
    updateScore(X)  
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X Won";
    playerXScore++;
    document.getElementById("playerXScore").innerText = playerXScore;

    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b7btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;

    b1btn.classList.add('win');
    b5btn.classList.add('win');
    b9btn.classList.add('win');

    playwin();
    updateScore(X)
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b4 == "x" || b4 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X Won";
    playerXScore++;
    document.getElementById("playerXScore").innerText = playerXScore;

    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.classList.add('win');
    b4btn.classList.add('win');
    b7btn.classList.add('win');

    playwin();
    updateScore(winningPlayer)
  } else if (
    (b2 == "x" || b2 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b8 == "x" || b8 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X Won";
    playerXScore++;
    document.getElementById("playerXScore").innerText = playerXScore;

    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.classList.add('win');
    b5btn.classList.add('win');
    b8btn.classList.add('win');

    playwin();
    updateScore(X)
  } else if (
    (b4 == "x" || b4 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b6 == "x" || b6 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X Won";
    playerXScore++;
    document.getElementById("playerXScore").innerText = playerXScore;

    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b4btn.classList.add('win');
    b5btn.classList.add('win');
    b6btn.classList.add('win');

    playwin();
    updateScore(X)
  } else if (
    (b7 == "x" || b7 == "X") &&
    (b8 == "x" || b8 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X Won";
    playerXScore++;
    document.getElementById("playerXScore").innerText = playerXScore;

    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.classList.add('win');
    b8btn.classList.add('win');
    b9btn.classList.add('win');

    playwin();
    updateScore(X)
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b6 == "x" || b6 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X Won";
    playerXScore++;
    document.getElementById("playerXScore").innerText = playerXScore;

    b1btn.disabled = true;
    b2btn.disabled = true;
    b5btn.disabled = true;
    b4btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.classList.add('win');
    b6btn.classList.add('win');
    b9btn.classList.add('win');

    playwin();
    updateScore(X)
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X Won";
    playerXScore++;
    document.getElementById("playerXScore").innerText = playerXScore;

    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.classList.add('win');
    b5btn.classList.add('win');
    b7btn.classList.add('win');

    playwin();
    updateScore(X)
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b2 == "x" || b2 == "X") &&
    (b1 == "x" || b1 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X Won";
    playerXScore++;
    document.getElementById("playerXScore").innerText = playerXScore;

    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.classList.add('win');
    b2btn.classList.add('win');
    b1btn.classList.add('win');

    playwin();
    updateScore(X)
  }

  // X is finshed and 0 is started here...
  else if (
    (b1 == "0" || b1 == "0") &&
    (b2 == "0" || b2 == "0") &&
    (b3 == "0" || b3 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 Won";
    player0Score++;
    document.getElementById("player0Score").innerText = player0Score;

    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.classList.add('win');
    b2btn.classList.add('win');
    b3btn.classList.add('win');

    playwin();
    updateScore(0)
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 Won";
    player0Score++;
    document.getElementById("player0Score").innerText = player0Score;

    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b7btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;

    b1btn.classList.add('win');
    b5btn.classList.add('win');
    b9btn.classList.add('win');

    playwin();
    updateScore(0)
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b4 == "0" || b4 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 Won";
    player0Score++;
    document.getElementById("player0Score").innerText = player0Score;

    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.classList.add('win');
    b4btn.classList.add('win');
    b7btn.classList.add('win');

    playwin();
    updateScore(0)
  } else if (
    (b2 == "0" || b2 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b8 == "0" || b8 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 Won";
    player0Score++;
    document.getElementById("player0Score").innerText = player0Score;

    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.classList.add('win');
    b5btn.classList.add('win');
    b8btn.classList.add('win');

    playwin();
    updateScore(0)
  } else if (
    (b4 == "0" || b4 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b6 == "0" || b6 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 Won";
    player0Score++;
    document.getElementById("player0Score").innerText = player0Score;

    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b4btn.classList.add('win');
    b5btn.classList.add('win');
    b6btn.classList.add('win');

    playwin();
    updateScore(0)
  } else if (
    (b7 == "0" || b7 == "0") &&
    (b8 == "0" || b8 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 Won";
    player0Score++;
    document.getElementById("player0Score").innerText = player0Score;

    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.classList.add('win');
    b8btn.classList.add('win');
    b9btn.classList.add('win');

    playwin();
    updateScore(0)
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b6 == "0" || b6 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 Won";
    player0Score++;
    document.getElementById("player0Score").innerText = player0Score;

    b1btn.disabled = true;
    b2btn.disabled = true;
    b5btn.disabled = true;
    b4btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.classList.add('win');
    b6btn.classList.add('win');
    b9btn.classList.add('win');

    playwin();
    updateScore(0)
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 Won";
    player0Score++;
    document.getElementById("player0Score").innerText = player0Score;

    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.classList.add('win');
    b5btn.classList.add('win');
    b7btn.classList.add('win');

    playwin();
    updateScore(0)
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b2 == "0" || b2 == "0") &&
    (b1 == "0" || b1 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 Won";
    player0Score++;
    document.getElementById("player0Score").innerText = player0Score;

    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.classList.add('win');
    b2btn.classList.add('win');
    b1btn.classList.add('win');

    playwin();
    updateScore(0)
  } 
  // Checking of Player 0 finish 
  // Here, Checking about Tie 
  else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
      || b2 == '0') && (b3 == 'X' || b3 == '0') && 
      (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
          b5 == '0') && (b6 == 'X' || b6 == '0') && 
      (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
          b8 == '0') && (b9 == 'X' || b9 == '0')) { 
      document.getElementById('print') 
          .innerHTML = "Match Tie"; 

      playtie();
  } 
  else { 

      // Here, Printing Result 
      if (flag == 1) { 
          document.getElementById('print') 
              .innerHTML = "Player X Turn";
          playclick();
      } 
      else { 
          document.getElementById('print') 
              .innerHTML = "Player 0 Turn"; 
          playclick();
      } 
  } 
}

// check the each value either "X" or "0" based on that vlaue we disbale the button and switch the flage to "0" or "1"
flag = 1;
function myfunc_3() {
  if (flag == 1) {
      document.getElementById('b1').value = 'X';
      document.getElementById('b1').disabled = true;
      flag = 0;
  }
  else {
      document.getElementById('b1').value = '0';
      document.getElementById('b1').disabled = true;
      flag = 1;
  }
}
function myfunc_4() {
  if (flag == 1) {
      document.getElementById('b2').value = 'X';
      document.getElementById('b2').disabled = true;
      flag = 0;
  }
  else {
      document.getElementById('b2').value = '0';
      document.getElementById('b2').disabled = true;
      flag = 1;
  }
}
function myfunc_5() {
  if (flag == 1) {
      document.getElementById('b3').value = 'X';
      document.getElementById('b3').disabled = true;
      flag = 0;
  }
  else {
      document.getElementById('b3').value = '0';
      document.getElementById('b3').disabled = true;
      flag = 1;
  }
}
function myfunc_6() {
  if (flag == 1) {
      document.getElementById('b4').value = 'X';
      document.getElementById('b4').disabled = true;
      flag = 0;
  }
  else {
      document.getElementById('b4').value = '0';
      document.getElementById('b4').disabled = true;
      flag = 1;
  }
}
function myfunc_7() {
  if (flag == 1) {
      document.getElementById('b5').value = 'X';
      document.getElementById('b5').disabled = true;
      flag = 0;
  }
  else {
      document.getElementById('b5').value = '0';
      document.getElementById('b5').disabled = true;
      flag = 1;
  }
}
function myfunc_8() {
  if (flag == 1) {
      document.getElementById('b6').value = 'X';
      document.getElementById('b6').disabled = true;
      flag = 0;
  }
  else {
    document.getElementById('b6').value = '0';
    document.getElementById('b6').disabled = true;
    flag = 1;
  }
}
function myfunc_9() {
  if (flag == 1) {
      document.getElementById('b7').value = 'X';
      document.getElementById('b7').disabled = true;
      flag = 0;
  }
  else {
    document.getElementById('b7').value = '0';
    document.getElementById('b7').disabled = true;
    flag = 1;
  }
}
function myfunc_10() {
  if (flag == 1) {
      document.getElementById('b8').value = 'X';
      document.getElementById('b8').disabled = true;
      flag = 0;
  }
  else {
      document.getElementById('b8').value = '0';
      document.getElementById('b8').disabled = true;
      flag = 1;
  }
}
function myfunc_11() {
  if (flag == 1) {
      document.getElementById('b9').value = 'X';
      document.getElementById('b9').disabled = true;
      flag = 0;
  }
  else {
      document.getElementById('b9').value = '0';
      document.getElementById('b9').disabled = true;
      flag = 1;
  }
}

// Start playing background music when the page loads
window.onload = function() {
  const backgroundMusic = document.getElementById('backgroundMusic');
  backgroundMusic.play();

  const muteButton = document.getElementById('muteButton');
  let isMuted = false;

  // Mute/Unmute button functionality
  muteButton.onclick = function() {
      if (isMuted) {
          backgroundMusic.muted = false;
          muteButton.innerText = "Mute Music";
      } else {
          backgroundMusic.muted = true;
          muteButton.innerText = "Unmute Music";
      }
      isMuted = !isMuted;
  };
};
