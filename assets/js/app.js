// Globally needed variables
let gameIsHard = false; // true means hard difficulty
let colourMode = false; // true means dark scheme
let starsOn = false; //true means stars inserted for dark mode
let gameMode = '';
let playerName = "";
let previousPlayerChoice = "";
let previousCompChoice = "";
let previousResult = "";
let classicRulesModal;
let spockRulesModal;
let quitModal;
let roundsWanted = 5;
let menu = `<div class="main-menu">
<button class="main-menu-button" id="play-classic">Play Classic</button>
<button class="main-menu-button" id="play-spock">Play Spock</button>
<button class="main-menu-button" id="main-rules-button">Rules</button>
<button class="main-menu-button" id="main-settings-button">Settings</button>
</div>`;
let mainSettingsModal = document.getElementById("settings-modal");
let mainRulesModal = document.getElementById("main-rules-modal");

// Capture player colour scheme preference
let colourModeToggle = document.getElementById('colour-mode-checkbox');

// Event listener for colour mode change
colourModeToggle.addEventListener('change', function(e) {
  // Set colour mode
  if (colourModeToggle.checked) {
    colourMode = true;
  } else {
    colourMode = false;
  }
  changeColour();
});

// Capture game difficulty setting
let gameDifficultyToggle = document.getElementById('difficulty-checkbox');

// Event listener for game difficulty change 
gameDifficultyToggle.addEventListener('change', function(e){
  // Set game difficulty
  if (gameDifficultyToggle.checked) {
    gameIsHard = true;
  } else {
    gameIsHard = false;
  }
});

// FUNCTIONS

// SETTINGS
// Change Colour Scheme
function changeColour() {
  if (colourMode == true) {
    //change colours to dark mode
    let r = document.querySelector(':root');
    r.style.setProperty('--dark', '#232323');
    r.style.setProperty('--light', '#2f2f2f');
    r.style.setProperty('--light-highlight', '#353535');
    r.style.setProperty('--shadow-light', '#353535');
    r.style.setProperty('--shadow-dark', '#121212');
    r.style.setProperty('--border', '#232323');
    r.style.setProperty('--sky-light', '#4e667c8e');
    r.style.setProperty('--sky-dark', '#0b3564');
    r.style.setProperty('--text', '#f0d471');
    r.style.setProperty('--text-light', '#f9f9f9');
    r.style.setProperty('--toggle-button', '#f0d471');
    r.style.setProperty('--error', '#f18988');
    r.style.setProperty('--ufo-body', '#353535');
    r.style.setProperty('--ufo-body-shadow', '#232323');
    r.style.setProperty('--ufo-glass', '#ffffff');
    r.style.setProperty('--ufo-light', '#72ded4');
    
    //change background image to darker version
    let background = document.getElementById('screen-container');
    background.style.backgroundImage = 'url(./assets/images/night.svg)';
    
    // call star function
    starsOn = true;
    stars(background);
    
    // moon comes up
    let moon = document.getElementById('moon');
    moon.style.display = 'inline';
    
    // sun goes down
    let sun = document.getElementById('sun');
    sun.style.display = 'none';
  } else {
    //change colours back to light mode
    let r = document.querySelector(':root');
    r.style.setProperty('--dark', 'rgba(43,32,18,1)');
    r.style.setProperty('--light', 'rgba(229,177,116,1)');
    r.style.setProperty('--light-highlight', 'rgba(230,191,144,1)');
    r.style.setProperty('--shadow-light', 'rgba(159,123,94,1)');
    r.style.setProperty('--shadow-dark', 'rgba(97,58,28,1)');
    r.style.setProperty('--border', 'rgba(168,103,50,1)');
    r.style.setProperty('--sky-light', '#9bcaf58e');
    r.style.setProperty('--sky-dark', '#1876e2');
    r.style.setProperty('--text', 'rgba(43,32,18,1)');
    r.style.setProperty('--text-light', 'rgba(229,177,116,1)');
    r.style.setProperty('--toggle-button', 'rgba(230,191,144,1)');
    r.style.setProperty('--error', '#FF312E');
    r.style.setProperty('--ufo-body', '#b8b8b8');
    r.style.setProperty('--ufo-body-shadow', '#2f2f2f');
    r.style.setProperty('--ufo-glass', '#ffffff');
    r.style.setProperty('--ufo-light', '#f0d471');
    
    //change background image to lighter version
    let background = document.getElementById('screen-container');
    background.style.backgroundImage = 'url(./assets/images/day.svg)';
    
    // call star function
    starsOn = false;
    stars(background);
    
    // moon goes down
    let moon = document.getElementById('moon');
    moon.style.display = 'none';
    
    // sun comes up
    let sun = document.getElementById('sun');
    sun.style.display = 'inline';
  }
}

// stars on or off function
function stars(background) {
  if (starsOn == true) {
    let starContainer = document.createElement('div');
    starContainer.setAttribute('id','star-container');
    background.appendChild(starContainer);
    let count = 100;
    let s = 0;
    while(s < count) {
      let star = document.createElement('i');
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor((Math.random() * window.innerHeight)/2);
      let duration = Math.random() * 10;
      let size = Math.random() * 2;
      star.style.left = x + 'px';
      star.style.top = y + 'px';
      star.style.width = 1+size+'px';
      star.style.height = 1+size+'px';
      star.style.animationDuration = 5+duration+'s';
      star.style.animationDelay = duration+'s';
      starContainer.appendChild(star);
      s++;
    } 
  } else {
    let starContainer = document.getElementById('star-container');
    starContainer.remove();
  }
}

// Change Game Difficulty

// Change Game Winning Condition
function updateRoundsWanted(){
  roundsWanted = document.getElementById("rounds-slider").value;
  document.getElementById("rounds-wanted").innerHTML = roundsWanted;
}

// FUNCTIONS NEEDED BY MORE THAN ONE SCREEN

// Set Game Mode
function setGameModeClassic(){
  gameMode = 'classic';
  openNameScreen();
}

function setGameModeSpock(){
  gameMode = 'spock';
  openNameScreen();
}

// Determine Game Mode
function launchGame() {
  if (gameMode === "classic") {
    launchClassicGame();
  } else if (gameMode == "spock") {
    launchSpockGame();
  } else {
    // error message displayed - safety measure incase user finds way to element without going through the menu
    alert("No game type selected - restarting game");
    //refresh page - forces game to restart
    location.reload();
  }
}

// Add Scoreboard to screen
function addScoreboard() {
  document.getElementById("middle-container").innerHTML = `
    <div class="scoreboard">
      <div class="scoreboard-top-row" id="scoreboard-top-row">
        <span id="player-name">${playerName}</span>
        <span id="name-vs">vs</span>
        <span id="comp-name">Q</span>
      </div>
      <div class="scoreboard-middle-row" id="scoreboard-middle-row">
        <span class="player-score" id="player-score">0</span>
        <span class="score-vs" id="score-vs">:</span>
        <span class="comp-score" id="comp-score">0</span>
      </div>
      <div id="round-message-div">
        <p id="round-message"></p>
      </div>
    </div>`;
}

// Classic Game Logic
function classicGameLogic(playerSelection) {
  let compSelection = getCompSelection();
  switch (playerSelection + compSelection) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
        playerWin(playerSelection, compSelection);
        previousPlayerChoice = playerSelection;
        previousCompChoice = compSelection;
        previousResult = "playerWin";
        break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
        playerLose(playerSelection, compSelection);
        previousPlayerChoice = playerSelection;
        previousCompChoice = compSelection;
        previousResult = "playerLose";
        break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
        playerDraw(playerSelection, compSelection);
        previousPlayerChoice = playerSelection;
        previousCompChoice = compSelection;
        previousResult = "playerDraw";
        break;
  }
}
// Spock Game Logic 2
function spockGameLogic(playerSelection) {
  let compSelection = getCompSelection();
  switch (playerSelection + compSelection) {
      case 'rockscissors':
      case 'rocklizard':
      case 'paperrock':
      case 'paperspock':
      case 'scissorspaper':
      case 'scissorslizard':
      case 'lizardspock':
      case 'lizardpaper':
      case 'spockscissors':
      case 'spockrock':
          playerWin(playerSelection, compSelection);
          previousPlayerChoice = playerSelection;
          previousCompChoice = compSelection;
          previousResult = "playerWin";
          break;
      case 'rockpaper':
      case 'rockspock':
      case 'paperscissors':
      case 'paperlizard':
      case 'scissorsspock':
      case 'scissorsrock':
      case 'lizardrock':
      case 'lizardscissors':
      case 'spocklizard':
      case 'spockpaper':
          playerLose(playerSelection, compSelection);
          previousPlayerChoice = playerSelection;
          previousCompChoice = compSelection;
          previousResult = "playerLose";
          break;
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
      case 'lizardlizard':
      case 'spockspock':
          playerDraw(playerSelection, compSelection);
          previousPlayerChoice = playerSelection;
          previousCompChoice = compSelection;
          previousResult = "playerDraw";
          break;
  }
}
// Spock Game Logic broken switch case related to || OR operator somehow.
// function spockGameLogic(playerSelection) {
//   let compSelection = getCompSelection();
//   switch (playerSelection + compSelection) {
//       case 'rockscissors' || 'rocklizard':
//       case 'paperrock' || 'paperspock':
//       case 'scissorspaper' || 'scissorslizard':
//       case 'lizardspock' || 'lizardpaper':
//       case 'spockscissors' || 'spockrock':
//           playerWin(playerSelection, compSelection);
//           break;
//       case 'rockpaper' || 'rockspock':
//       case 'paperscissors' || 'paperlizard':
//       case 'scissorsspock' || 'scissorsrock':
//       case 'lizardrock' || 'lizardscissors':
//       case 'spocklizard' || 'spockpaper':
//           playerLose(playerSelection, compSelection);
//           break;
//       case 'rockrock':
//       case 'paperpaper':
//       case 'scissorsscissors':
//       case 'lizardlizard':
//       case 'spockspock':
//           playerDraw(playerSelection, compSelection);
//           break;
//   }
// }

// Computer move selection - Math.random for easy difficulty
// Computer move selection - hard difficulty

function getCompSelection() {
  if (gameIsHard === false && gameMode === "classic") {
    let compOptions = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * compOptions.length);
    let compMove = compOptions[randomChoice];
// need to move this out into its own function. causing error when game ended by overall win or lose.
    compAssignLight(compMove);
    // setTimeout(function(){
    //   document.getElementById("comp-light-container").innerHTML = `
    //     <div class="light" id="${compMove}-light-classic"></div>
    //     <i class="far fa-hand-${compMove}"></i>`;
    // }, 800);
    return compMove;  
  } else if (gameIsHard === false && gameMode === "spock") {
    let compOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomChoice = Math.floor(Math.random() * compOptions.length);
    let compMove = compOptions[randomChoice];
    compAssignLight(compMove);
    // setTimeout(function(){
    //   document.getElementById("comp-light-container").innerHTML = `
    //     <div class="light" id="${compMove}-light-classic"></div>
    //     <i class="far fa-hand-${compMove}"></i>`;
    // }, 800);
    return compMove;  
  } else if (gameIsHard === true && gameMode === "classic") { //start of hard mode comp selection
      if (previousResult === "" || previousResult === "playerDraw") {
        let compOptions = ['rock', 'paper', 'scissors'];
        let randomChoice = Math.floor(Math.random() * compOptions.length);
        let compMove = compOptions[randomChoice];
        compAssignLight(compMove);
        // setTimeout(function(){
        //   document.getElementById("comp-light-container").innerHTML = `
        //     <div class="light" id="${compMove}-light-classic"></div>
        //     <i class="far fa-hand-${compMove}"></i>`;
        // }, 800);

        return compMove;

      } else if (previousResult === "playerWin") {
          let compMove ="";
          switch (previousPlayerChoice) {
            case "rock":{
              compMove = "paper";
              break;}
            case "paper":{
              compMove = "scissors";
              break;}
            case "scissors":{
              compMove = "rock";
              break;}
          } 
          compAssignLight(compMove);
          // setTimeout(function(){
          //   document.getElementById("comp-light-container").innerHTML = `
          //     <div class="light" id="${compMove}-light-classic"></div>
          //     <i class="far fa-hand-${compMove}"></i>`;
          // }, 800);
          
          return compMove;

      } else if (previousResult === "playerLose") {
          let compMove ="";
          switch (previousCompChoice) {
            case "rock":{
              compMove = "scissors";
              break;}
            case "paper":{
              compMove = "rock";
              break;}
            case "scissors":{
              compMove = "paper";
              break;}
          } 
          compAssignLight(compMove);
          // setTimeout(function(){
          //   document.getElementById("comp-light-container").innerHTML = `
          //     <div class="light" id="${compMove}-light-classic"></div>
          //     <i class="far fa-hand-${compMove}"></i>`;
          // }, 800);
          
          return compMove;

      } 
    // need to add options for when gameIsHard === true for hard difficulty mode.
  }
  else if (gameIsHard === true && gameMode === "spock") {
    if (previousResult === "" || previousResult === "playerDraw") {
      let compOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let randomChoice = Math.floor(Math.random() * compOptions.length);
      let compMove = compOptions[randomChoice];
      compAssignLight(compMove);
      // setTimeout(function(){
      //   document.getElementById("comp-light-container").innerHTML = `
      //     <div class="light" id="${compMove}-light-classic"></div>
      //     <i class="far fa-hand-${compMove}"></i>`;
      // }, 800);

      return compMove;
    } else if (previousResult === "playerWin") {
        let compMove ="";
        switch (previousPlayerChoice) {
          case "rock":{
            let compOptions = ['paper', 'spock'];
            let randomChoice = Math.floor(Math.random() * compOptions.length);
            compMove = compOptions[randomChoice];
            break;}
          case "paper":{
            let compOptions = ['scissors', 'lizard'];
            let randomChoice = Math.floor(Math.random() * compOptions.length);
            compMove = compOptions[randomChoice];
            break;}
          case "scissors":{
            let compOptions = ['rock', 'spock'];
            let randomChoice = Math.floor(Math.random() * compOptions.length);
            compMove = compOptions[randomChoice];
            break;}
          case "lizard":{
            let compOptions = ['rock', 'scissors'];
            let randomChoice = Math.floor(Math.random() * compOptions.length);
            compMove = compOptions[randomChoice];
            break;}
          case "spock":{
            let compOptions = ['paper', 'lizard'];
            let randomChoice = Math.floor(Math.random() * compOptions.length);
            compMove = compOptions[randomChoice];
            break;}
        } 
        compAssignLight(compMove);
        // setTimeout(function(){
        //   document.getElementById("comp-light-container").innerHTML = `
        //     <div class="light" id="${compMove}-light-classic"></div>
        //     <i class="far fa-hand-${compMove}"></i>`;
        // }, 800);
        
        return compMove;
    } else if (previousResult === "playerLose") {
        let compMove ="";
        switch (previousCompChoice) {
          case "rock":{
            compMove = "lizard";
            break;}
          case "paper":{
            compMove = "rock";
            break;}
          case "scissors":{
            compMove = "paper";
            break;}
          case "lizard":{
            compMove = "spock";
            break;}
          case "spock":{
            compMove = "scissors";
            break;}
        }
        compAssignLight(compMove);
        // setTimeout(function(){
        //   document.getElementById("comp-light-container").innerHTML = `
        //     <div class="light" id="${compMove}-light-classic"></div>
        //     <i class="far fa-hand-${compMove}"></i>`;
        // }, 800);
        return compMove;
      }
}
} //end of comp selection function

function compAssignLight(compMove){
  setTimeout(function(){
    document.getElementById("comp-light-container").innerHTML = `
      <div class="light" id="${compMove}-light-classic"></div>
      <i class="far fa-hand-${compMove}"></i>`;
  }, 800);
}

// Player win round comp loses
function playerWin(playerSelection, compSelection) {
  //get current player score
  let playerScoreSpan = document.getElementById("player-score");
  let playerScore = playerScoreSpan.innerHTML;

  //update player score
  playerScore++;
  playerScoreSpan.innerHTML = playerScore;

  //display round result message
  let resultMessage = document.getElementById("round-message");
  resultMessage.style.color = 'green';
  resultMessage.innerHTML = `${playerSelection} beats ${compSelection}. You win this round!`;

  // check for overall win else reset board
  if (playerScore == roundsWanted) {
    playerOverallWin();
  } else {

    //reset board
    setTimeout(function() {
    resetBoard(playerSelection);
    }, 3000);

    // setTimeout(function() {
    //   let playerGridIdentifier = "player-tile-" + gameMode;
    //   document.getElementById(playerGridIdentifier).classList.toggle("slide-out-blurred-left");

    //   let tileIdentifier = playerSelection + "-tile-" + gameMode; //identifies original tile
    //   let playerTile = document.getElementById(tileIdentifier); //grabs original tile
      
    //   playerTile.classList.toggle("slide-out-blurred-left"); //removes class that made it slide out
    //   playerTile.classList.toggle("slide-in-blurred-right"); //adds class that makes it slide in

    //   setTimeout(function() {
    //     document.getElementById(playerGridIdentifier).innerHTML = ``; //clears player tile
    //     document.getElementById(playerGridIdentifier).classList.toggle("slide-out-blurred-left");//removes the slide out class once the tile has been cleared allowing for next move to enter ok.
    //   }, 500);
    // }, 3000);
  } 
}

// Player lose round
function playerLose(playerSelection, compSelection) {
  //get current comp score
  let compScoreSpan = document.getElementById("comp-score");
  let compScore = compScoreSpan.innerHTML;

  //update comp score
  compScore++;
  compScoreSpan.innerHTML = compScore;

  //display round result message
  let resultMessage = document.getElementById("round-message");
  resultMessage.style.color = "red";
  resultMessage.innerHTML = `${playerSelection} loses to ${compSelection}. You lost this round!`;

  //check for overall loss else reset board
  if (compScore == roundsWanted) {
    playerOverallLost();
  } else {

    //reset board
    setTimeout(function() {
    resetBoard(playerSelection);
    }, 3000);

    // setTimeout(function() {
    //   let playerGridIdentifier = "player-tile-" + gameMode;
    //   document.getElementById(playerGridIdentifier).classList.toggle("slide-out-blurred-left");

    //   let tileIdentifier = playerSelection + "-tile-" + gameMode; //identifies original tile
    //   let playerTile = document.getElementById(tileIdentifier); //grabs original tile
      
    //   playerTile.classList.toggle("slide-out-blurred-left"); //removes class that made it slide out
    //   playerTile.classList.toggle("slide-in-blurred-right"); //adds class that makes it slide in

    //   setTimeout(function() {
    //     document.getElementById(playerGridIdentifier).innerHTML = ``; //clears player tile
    //     document.getElementById(playerGridIdentifier).classList.toggle("slide-out-blurred-left");//removes the slide out class once the tile has been cleared allowing for next move to enter ok.
    //   }, 500);
    // }, 3000);
  }
}

// Round is a draw
function playerDraw(playerSelection, compSelection) {
  //display round result message
  let resultMessage = document.getElementById("round-message");
  resultMessage.style.color = "var(--text-light)";
  resultMessage.innerHTML = `${playerSelection} draws with ${compSelection}. This round is a draw!`;

  //reset board
  setTimeout(function() {
    resetBoard(playerSelection);
  }, 3000);

  // setTimeout(function() {
  //   let playerGridIdentifier = "player-tile-" + gameMode;
  //   document.getElementById(playerGridIdentifier).classList.toggle("slide-out-blurred-left");

  //   let tileIdentifier = playerSelection + "-tile-" + gameMode; //identifies original tile
  //   let playerTile = document.getElementById(tileIdentifier); //grabs original tile
    
  //   playerTile.classList.toggle("slide-out-blurred-left"); //removes class that made it slide out
  //   playerTile.classList.toggle("slide-in-blurred-right"); //adds class that makes it slide in
    
  //   setTimeout(function() {
  //     document.getElementById(playerGridIdentifier).innerHTML = ``; //clears player tile
  //     document.getElementById(playerGridIdentifier).classList.toggle("slide-out-blurred-left");//removes the slide out class once the tile has been cleared allowing for next move to enter ok.
  //   }, 500);
  // }, 3000);
}

//Reset Board function
function resetBoard(playerSelection) {
  let playerGridIdentifier = "player-tile-" + gameMode;
    document.getElementById(playerGridIdentifier).classList.toggle("slide-out-blurred-left");

    let tileIdentifier = playerSelection + "-tile-" + gameMode; //identifies original tile
    let playerTile = document.getElementById(tileIdentifier); //grabs original tile
    
    playerTile.classList.toggle("slide-out-blurred-left"); //removes class that made it slide out
    playerTile.classList.toggle("slide-in-blurred-right"); //adds class that makes it slide in
    
    setTimeout(function() {
      document.getElementById(playerGridIdentifier).innerHTML = ``; //clears player tile
      document.getElementById(playerGridIdentifier).classList.toggle("slide-out-blurred-left");//removes the slide out class once the tile has been cleared allowing for next move to enter ok.
    }, 500);
}

//Reset hard mode variables

function hardReset() {
  previousPlayerChoice = "";
  previousCompChoice = "";
  previousResult = "";
}

// Player Win Game
function playerOverallWin(){
  let playerScoreSpan = document.getElementById("player-score");
  let playerScore = playerScoreSpan.innerHTML;

  let compScoreSpan = document.getElementById("comp-score");
  let compScore = compScoreSpan.innerHTML;

  document.getElementById("main-container").innerHTML=`
    <div class="endscreen-container">
      <div class="endscreen-text-container">
        <h2>You Won!</h2>
        <p>Congratulations Commander ${playerName} you have beaten the aliens back. People will sing songs about your ${playerScore}:${compScore} victory for generations! Well at least until someone better comes along and people forget all about your victory and start singing about them instead.</p>
      </div>
      <button class="main-menu-button" id="end-back-to-menu-button">Back to Menu</button>
    </div>`;
    let button = document.getElementById("end-back-to-menu-button");
    button.addEventListener('click', returnToMenu);
    hardReset();
}

// Player lose game
function playerOverallLost(){
  let playerScoreSpan = document.getElementById("player-score");
  let playerScore = playerScoreSpan.innerHTML;

  let compScoreSpan = document.getElementById("comp-score");
  let compScore = compScoreSpan.innerHTML;

  document.getElementById("main-container").innerHTML=`
    <div class="endscreen-container">
      <div class="endscreen-text-container">
        <h2>You Lost!</h2>
        <p>"Commander ${playerName} you have lost to the aliens ${playerScore}:${compScore}! I suggest you try again, military personnel in this conflict do not have permission to lose.<br>All unaddressed losses will be dealt with through court martial with punishment being dealt swiftly and severely.<br>Between you and me, I've heard on the grapevine that the last commander who refused to try again, was made to enter the Eurovision Song Contest!"</p>
      </div>
      <button class="main-menu-button" id="end-back-to-menu-button">Back to Menu</button>
    </div>`;
    let button = document.getElementById("end-back-to-menu-button");
    button.addEventListener('click', returnToMenu);
    hardReset();
}

// SPOCK GAME SCREEN
/**
 * Captures the player tile selection on the spock game mode screen,
 * then runs animation to move tile off screen and place tile in player tile location,
 * then sends player choice to the spockGameLogic function
 */
function playerSelectionSpock() {
  //capture game tiles
  let rock = document.getElementById("rock-tile-spock");
  let paper = document.getElementById("paper-tile-spock");
  let scissors = document.getElementById("scissors-tile-spock");
  let lizard = document.getElementById("lizard-tile-spock");
  let spock = document.getElementById("spock-tile-spock");
  let player = document.getElementById("player-tile-spock");
  
  //event listeners for game tiles
  rock.addEventListener('click', function() {
    //temp needs animation added. phase original location out and phase in on new location
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    setTimeout(function() {
      player.innerHTML = tileCapture;
    }, 800);
    spockGameLogic('rock');
  });

  paper.addEventListener('click', function() {
    //temp needs animation added. phase original location out and phase in on new location
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    setTimeout(function() {
      player.innerHTML = tileCapture;
    }, 800);
    spockGameLogic('paper');
  });

  scissors.addEventListener('click', function() {
    //temp needs animation added. phase original location out and phase in on new location
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    setTimeout(function() {
      player.innerHTML = tileCapture;
    }, 800);
    spockGameLogic('scissors');
  });

  lizard.addEventListener('click', function() {
    //temp needs animation added. phase original location out and phase in on new location
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    setTimeout(function() {
      player.innerHTML = tileCapture;
    }, 800);
    spockGameLogic('lizard');
  });

  spock.addEventListener('click', function() {
    //temp needs animation added. phase original location out and phase in on new location
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    setTimeout(function() {
      player.innerHTML = tileCapture;
    }, 800);
    spockGameLogic('spock');
  });
}
// Spock Game Event Capture
// In game rules modal
// Spock Rules modal open
// Spock Rules modal close
// Quit Game button - Spock

/**
 * Captures the player tile selection on the classic game mode screen,
 * then runs animation to move tile off screen and place tile in player tile location,
 * then sends player choice to the classicGameLogic function
 */
function playerSelectionClassic() {
  //capture game tiles
  let rock = document.getElementById("rock-tile-classic");
  let paper = document.getElementById("paper-tile-classic");
  let scissors = document.getElementById("scissors-tile-classic");
  let player = document.getElementById("player-tile-classic");
  
  //event listeners for game tiles
  rock.addEventListener('click', function() {
    //temp needs animation added. phase original location out and phase in on new location
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    setTimeout(function() {
      player.innerHTML = tileCapture;
    }, 800);
    classicGameLogic('rock');
  });

  paper.addEventListener('click', function(){
    //temp needs animation added. phase original location out and phase in on new location
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    setTimeout(function() {
      player.innerHTML = tileCapture;
    }, 800);
    classicGameLogic('paper');
  });

  scissors.addEventListener('click', function(){
    //temp needs animation added. phase original location out and phase in on new location
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    setTimeout(function() {
      player.innerHTML = tileCapture;
    }, 800);
    classicGameLogic('scissors');
  });
}


// In game rules modal
function addClassicRulesModal() {
  // add classic rules modal into overall modal container
  document.getElementById("rules-modal-container").innerHTML = `
  <div class="modal-container" id="classic-rules-modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-close" id="classic-rules-modal-close">&times;</span>
        <h2>Rules of the game</h2>
      </div>
      <div class="modal-body">
        <h3>How to win</h3>
        <p>
          <i class="far fa-hand-rock"></i>
          Rock beats Scissors 
          <i class="far fa-hand-scissors"></i>
          <br>
          <i class="far fa-hand-scissors"></i>
            Scissors beats Paper 
          <i class="far fa-hand-paper"></i>
          <br>
          <i class="far fa-hand-paper"></i>
            Paper beats Rock 
          <i class="far fa-hand-rock"></i>
        </p>
        <br>
        <p>"Commander, you need to decide which hand you want to play by touching or clicking on the ufo that is lighting it up. The aliens will have already decided which move they are going to make way before you, their minds are much quicker than ours. You don't have to worry about them cheating either, they may spend their time invading other planets, destroying everything and stealing anything of potential value, but they pride themselves on the fact they do it honourably, in a fair fight."</p>
        <h3>Hard Mode</h3>
        <p>"If you were brave enough to try and beat them in the Hard mode you will be taking on the alien boss and not one of the minions, I wish you luck, you are going to need it. Some of the really crazy looking scientists keep muttering to themselves that there is a pattern to the way the boss plays but none of the previous commanders have ever survived to report back."</p> <span id="response"><p>"???"</p></span><p>"Oh, sorry, I thought you already knew you weren't the first choice"
        </p>
      </div>
    </div>
  </div>`;
  
  let rulesButton = document.getElementById("classic-rules-button");
  rulesButton.addEventListener('click', openClassicRulesModal);
  
  let classicRulesModalClose = document.getElementById("classic-rules-modal-close");
  classicRulesModalClose.addEventListener('click', closeClassicRulesModal);

  classicRulesModal = document.getElementById("classic-rules-modal");

  // Classic Rules modal open
  function openClassicRulesModal() {
    classicRulesModal.style.display = 'block';
  }

  // Classic Rules modal close
  function closeClassicRulesModal() {
    classicRulesModal.style.display = 'none';
  }
}

// spock rules modal
function addSpockRulesModal() {
  // add spock rules modal into overall modal container
  document.getElementById("rules-modal-container").innerHTML = `
  <div class="modal-container" id="spock-rules-modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-close" id="spock-rules-modal-close">&times;</span>
        <h2>Rules of the game</h2>
      </div>
      <div class="modal-body">
        <h3>How to win</h3>
        <p>
        <i class="far fa-hand-rock"></i>
        Rock beats Scissors 
        <i class="far fa-hand-scissors"></i>
         and Lizard <i class="far fa-hand-lizard"></i>
        <br>
        <i class="far fa-hand-scissors"></i>
         Scissors beats Paper 
        <i class="far fa-hand-paper"></i>
        and Lizard <i class="far fa-hand-lizard"></i>
        <br>
        <i class="far fa-hand-paper"></i>
          Paper beats Rock 
        <i class="far fa-hand-rock"></i>
          and Spock <i class="far fa-hand-spock"></i>
        <br>
        <i class="far fa-hand-lizard"></i> Lizard beats Spock and Paper 
        <i class="far fa-hand-paper"></i>
        <br>
        <i class="far fa-hand-spock"></i> Spock beats Scissors 
        <i class="far fa-hand-scissors"></i>
             and Rock 
        <i class="far fa-hand-rock"></i>
        </p>
        <br>
        <p>"Commander, you need to decide which hand you want to play by touching or clicking on the ufo that is lighting it up. The aliens will have already decided which move they are going to make way before you, their minds are much quicker than ours. You don't have to worry about them cheating either, they may spend their time invading other planets, destroying everything and stealing anything of potential value, but they pride themselves on the fact they do it honourably, in a fair fight."</p>
        <h3>Hard Mode</h3>
        <p>"If you were brave enough to try and beat them in the Hard mode you will be taking on the alien boss and not one of the minions, I wish you luck, you are going to need it. Some of the really crazy looking scientists keep muttering to themselves that there is a pattern to the way the boss plays but none of the previous commanders have ever survived to report back."</p> <span id="response"><p>"???"</p></span><p>"Oh, sorry, I thought you already knew you weren't the first choice"
        </p>
      </div>
    </div>
  </div>`;
  
  let rulesButton = document.getElementById("spock-rules-button");
  rulesButton.addEventListener('click', openSpockRulesModal);
  
  let spockRulesModalClose = document.getElementById("spock-rules-modal-close");
  spockRulesModalClose.addEventListener('click', closeSpockRulesModal);

  spockRulesModal = document.getElementById("spock-rules-modal");

  // Spock Rules modal open
  function openSpockRulesModal() {
    spockRulesModal.style.display = 'block';
  }

  // Spock Rules modal close
  function closeSpockRulesModal() {
    spockRulesModal.style.display = 'none';
  }
}

// quit game modal
function addQuitModal() {
  document.getElementById("quit-modal-container").innerHTML = `
  <div class="modal-container" id="quit-modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-close" id="quit-modal-close">&times;</span>
        <h2>Quit Game</h2>
      </div>
      <div class="modal-body">
        <h3>Are you sure?</h3>
        <p>"Woah...Commander, you need to think carefully! Going A.W.O.L. in our moment of need is not going to go down well, hell, I might shoot you myself."</p>
        <button class="game-button" id="quit-modal-quit-button">Quit</button>
        <button class="game-button" id="quit-modal-cancel-button">Stay and Fight</button>
      </div>
    </div>
  </div>`;
  
  let quitGameButton = document.getElementById("quit-button");
  quitGameButton.addEventListener('click', openQuitModal);
  
  let quitGameModalClose = document.getElementById("quit-modal-close");
  quitGameModalClose.addEventListener('click', closeQuitModal);
  
  let quitGameCancelButton = document.getElementById("quit-modal-cancel-button");
  quitGameCancelButton.addEventListener('click', closeQuitModal);

  let quitModalQuitButton = document.getElementById("quit-modal-quit-button");
  quitModalQuitButton.addEventListener('click', quitFromQuitModal);

  quitModal = document.getElementById("quit-modal");
  
  // Quit modal open
  function openQuitModal() {
    quitModal.style.display = 'block';
  }
  
  // Quit modal close
  function closeQuitModal() {
    quitModal.style.display = 'none';
  }
}

function quitFromQuitModal(){
  document.getElementById("quit-modal").style.display = 'none';
  returnToMenu();
}

// returns game to main menu
function returnToMenu() {
  document.getElementById("main-container").innerHTML = menu;
  document.getElementById("middle-container").innerHTML = ``;
  mainMenuElements();
}

// Quit Game button - Classic

// ENTER NAME SCREEN

// Capture Name Entry by player
function nameScreen() {
  //get button
  let start = document.getElementById("start-button");
  //listen for click
  start.addEventListener('click', captureName);
  function captureName(e){
    //prevent default action
    e.preventDefault();
    let name = document.getElementById("name");
    if (name.value.includes(' ')) {
      document.getElementById("error-message").innerHTML =`Commander, I forgot to tell you when the aliens ask you your name, don't include a space or go over 15 characters, their language doesn't contain spaces, whilst their names are all really short, so they get confused and that just makes them angry.`;
      //reset form field
      name.value = '';
    } else if(name.value == ''){
      playerName = 'Mystery Person';
      // start game
      launchGame();
    } else {
      //capture name input
      playerName = name.value;
      // start game
      launchGame();
    }
  }
}

// Change to Game Screen - Classic
function launchClassicGame() {
  document.getElementById("main-container").innerHTML=`
  <div class="game">
    <div class="game-grid">
<!--rock game tile-->    
      <div class="rock" id="rock-tile-classic">
        <div class="ufo slide-in-blurred-right">
          <div class="glass"></div>
          <div class="separator"></div>
          <div class="body">
            <div class="window small window-left"></div>
            <div class="window window-center"></div>
            <div class="window small window-right"></div>
          </div>
          <div class="light" id="rock-light-classic"></div>
          <i class="far fa-hand-rock"></i>
        </div>
      </div>
<!-- paper game tile-->
      <div class="paper" id="paper-tile-classic">
        <div class="ufo slide-in-blurred-right">
          <div class="glass"></div>
          <div class="separator"></div>
          <div class="body">
            <div class="window small window-left"></div>
            <div class="window window-center"></div>
            <div class="window small window-right"></div>
          </div>
          <div class="light" id="paper-light-classic"></div>
          <i class="far fa-hand-paper"></i>
        </div>
      </div>
<!-- scissors game tile-->
      <div class="scissors" id="scissors-tile-classic">
        <div class="ufo slide-in-blurred-right">
          <div class="glass"></div>
          <div class="separator"></div>
          <div class="body">
            <div class="window small window-left" id="window-left"></div>
            <div class="window window-center" id="window-center"></div>
            <div class="window small window-right" id="window-right"></div>
          </div>
          <div class="light" id="scissors-light-classic"></div>
          <i class="far fa-hand-scissors"></i>
        </div>
      </div>
<!-- tile location to display player choice -->      
      <div id="player-tile-classic"></div>
<!-- comp choice tile -->
      <div class="comp-choice" id="comp-tile-classic">
        <div class="ufo slide-in-blurred-right">
          <div class="glass"></div>
          <div class="separator"></div>
          <div class="body-comp">
            <div class="window small window-left" id="window-left"></div>
            <div class="window window-center" id="window-center"></div>
            <div class="window small window-right" id="window-right"></div>
          </div>
          <div id="comp-light-container"></div>
        </div>
      </div>
<!-- grid spacer div -->
      <div class="grid-spacer"></div>
<!-- in game buttons -->
      <div class="game-button rules" id="classic-rules-button">Rules</div>
      <div class="game-button quit" id="quit-button">Quit</div>
    </div>
  </div>
  `;
  addClassicRulesModal();
  addQuitModal();
  addScoreboard();
  playerSelectionClassic();
}

// Change to Game Screen - Spock
function launchSpockGame() {
  document.getElementById("main-container").innerHTML=`
  <div class="game">
    <div class="game-grid">
<!-- lizard game tile-->
    <div class="lizard" id="lizard-tile-spock">
      <div class="ufo slide-in-blurred-right">
        <div class="glass"></div>
        <div class="separator"></div>
        <div class="body">
          <div class="window small window-left" id="window-left"></div>
          <div class="window window-center" id="window-center"></div>
          <div class="window small window-right" id="window-right"></div>
        </div>
        <div class="light" id="lizard-light-spock"></div>
        <i class="far fa-hand-lizard"></i>
      </div>
    </div>
<!-- spock game tile-->
    <div class="spock" id="spock-tile-spock">
      <div class="ufo slide-in-blurred-right">
        <div class="glass"></div>
        <div class="separator"></div>
        <div class="body">
          <div class="window small window-left" id="window-left"></div>
          <div class="window window-center" id="window-center"></div>
          <div class="window small window-right" id="window-right"></div>
        </div>
        <div class="light" id="spock-light-spock"></div>
        <i class="far fa-hand-spock"></i>
      </div>
    </div>
<!--rock game tile-->    
      <div class="rock" id="rock-tile-spock">
        <div class="ufo slide-in-blurred-right">
          <div class="glass"></div>
          <div class="separator"></div>
          <div class="body">
            <div class="window small window-left"></div>
            <div class="window window-center"></div>
            <div class="window small window-right"></div>
          </div>
          <div class="light" id="rock-light-spock"></div>
          <i class="far fa-hand-rock"></i>
        </div>
      </div>
<!-- paper game tile-->
      <div class="paper" id="paper-tile-spock">
        <div class="ufo slide-in-blurred-right">
          <div class="glass"></div>
          <div class="separator"></div>
          <div class="body">
            <div class="window small window-left"></div>
            <div class="window window-center"></div>
            <div class="window small window-right"></div>
          </div>
          <div class="light" id="paper-light-spock"></div>
          <i class="far fa-hand-paper"></i>
        </div>
      </div>
<!-- scissors game tile-->
      <div class="scissors" id="scissors-tile-spock">
        <div class="ufo slide-in-blurred-right">
          <div class="glass"></div>
          <div class="separator"></div>
          <div class="body">
            <div class="window small window-left" id="window-left"></div>
            <div class="window window-center" id="window-center"></div>
            <div class="window small window-right" id="window-right"></div>
          </div>
          <div class="light" id="scissors-light-spock"></div>
          <i class="far fa-hand-scissors"></i>
        </div>
      </div>
<!-- tile location to display player choice -->      
      <div id="player-tile-spock"></div>
<!-- comp choice tile -->
      <div class="comp-choice" id="comp-tile-spock">
        <div class="ufo slide-in-blurred-right">
          <div class="glass"></div>
          <div class="separator"></div>
          <div class="body-comp">
            <div class="window small window-left" id="window-left"></div>
            <div class="window window-center" id="window-center"></div>
            <div class="window small window-right" id="window-right"></div>
          </div>
          <div id="comp-light-container"></div>
        </div>
      </div>
<!-- grid spacer div -->
      <div class="grid-spacer"></div>
<!-- in game buttons -->
      <div class="game-button rules" id="spock-rules-button">Rules</div>
      <div class="game-button quit" id="quit-button">Quit</div>
    </div>
  </div>
  `;
  addSpockRulesModal();
  addQuitModal();
  addScoreboard();
  playerSelectionSpock();
}
// Back or Quit button - name screen

// HOME SCREEN
// Change to Name Screen
function openNameScreen() {
  document.getElementById("main-container").innerHTML = `
  <div class="main-menu">
    <form action="#">  
      <div class="form">
        <span id="error-message"></span>
        <label for="name">Enter name:</label>
        <input type="text" id="name" name="name" pattern="[A-Za-z0-9]{1,15}" maxlength="15">
      </div>
      <button type="submit" class="main-menu-button" id="start-button">Start</button>
    </form>
  </div>
  `;
  nameScreen();
}

// M.M. Open Rules Modal
function openMainRulesModal() {
  mainRulesModal.style.display = 'block';
}

// M.M. Close Rules Modal
function closeMainRulesModal() {
  mainRulesModal.style.display = 'none';
}

/**
 * M.M. Closes Modals if player clicks outside the modal content
 */
function outsideModalClick(e) {
  if (e.target == mainRulesModal) {
    mainRulesModal.style.display = 'none';
  } if (e.target == mainSettingsModal) {
    mainSettingsModal.style.display = 'none';
  } if (e.target == classicRulesModal) {
    classicRulesModal.style.display = 'none';
  } if (e.target == spockRulesModal) {
    spockRulesModal.style.display = 'none';
  } if (e.target == quitModal) {
    quitModal.style.display = 'none';
  }
}

// M.M. Open Game Settings Screen Modal
function openMainSettingsModal() {
  mainSettingsModal.style.display = 'block';
  document.getElementById("rounds-slider").addEventListener('input', updateRoundsWanted);
}

// M.M. Close Game Settings Screen Modal
function closeMainSettingsModal() {
  mainSettingsModal.style.display = 'none';
}

/**
 * Captures menu elements and adds event listeners for each button
 */
function mainMenuElements() {
  // M.M. What happens when player clicks play classic mode
  let playClassicButton = document.getElementById("play-classic");
  playClassicButton.addEventListener('click', setGameModeClassic);

  // M.M. What happens when player clicks play spock mode
  let playSpockButton = document.getElementById("play-spock");
  playSpockButton.addEventListener('click', setGameModeSpock);
  
  // Main Menu Rules Modal elements - getElementById
  let mainRulesModalButton = document.getElementById("main-rules-button");
  let mainRulesModalCloseButton = document.getElementById("main-rules-modal-close");
  
  // Main Menu Rules Modal Event Listeners - capture player click events
  mainRulesModalButton.addEventListener('click', openMainRulesModal);
  mainRulesModalCloseButton.addEventListener('click', closeMainRulesModal);
  window.addEventListener('click', outsideModalClick);
    
  // Main Menu Settings Modal elements - getElementById
  let mainSettingsModalButton = document.getElementById("main-settings-button");
  let mainSettingsModalCloseButton = document.getElementById("settings-modal-close");
  
  // Main Menu Settings Modal Event Listeners - capture player click events
  mainSettingsModalButton.addEventListener('click', openMainSettingsModal);
  mainSettingsModalCloseButton.addEventListener('click', closeMainSettingsModal); 
}

window.onload = returnToMenu();
