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

// Event Listener for enter key press on colour-mode span to simulate click
let colourModeSpan = document.getElementById('colour-mode-span');
colourModeSpan.addEventListener('keydown', function(e){
  if (e.key === 'Enter') {
    colourModeToggle.click();
  }
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

// Event listener for enter key press on difficulty toggle span to simulate click
let gameDifficultySpan = document.getElementById('difficulty-span');
gameDifficultySpan.addEventListener('keydown', function(e){
  if (e.key === 'Enter') {
    gameDifficultyToggle.click();
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
    r.style.setProperty('--light-highlight', '#353535');
    r.style.setProperty('--shadow-light', '#353535');
    r.style.setProperty('--shadow-dark', '#121212');
    r.style.setProperty('--border', '#232323');
    r.style.setProperty('--text', '#f0d471');
    r.style.setProperty('--text-light', '#f9f9f9');
    r.style.setProperty('--toggle-button', '#f0d471');
    r.style.setProperty('--error', '#f18988');
    r.style.setProperty('--ufo-body', '#353535');
    r.style.setProperty('--ufo-glass', '#ffffff');
    r.style.setProperty('--ufo-light', '#72ded4');
    
    //change background image to darker version
    let background = document.getElementById('screen-container');
    background.style.backgroundImage = 'url(./assets/images/night.svg)';

    //toggle night class onto body
    let body = document.body;
    body.classList.toggle('night');
    body.classList.toggle('day');
    
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
    r.style.setProperty('--light-highlight', 'rgba(230,191,144,1)');
    r.style.setProperty('--shadow-light', 'rgba(159,123,94,1)');
    r.style.setProperty('--shadow-dark', 'rgba(97,58,28,1)');
    r.style.setProperty('--border', 'rgba(168,103,50,1)');
    r.style.setProperty('--text', 'rgba(43,32,18,1)');
    r.style.setProperty('--text-light', 'rgba(229,177,116,1)');
    r.style.setProperty('--toggle-button', 'rgba(230,191,144,1)');
    r.style.setProperty('--error', '#FF312E');
    r.style.setProperty('--ufo-body', '#b8b8b8');
    r.style.setProperty('--ufo-glass', '#ffffff');
    r.style.setProperty('--ufo-light', '#f0d471');
    
    //change background image to lighter version
    let background = document.getElementById('screen-container');
    background.style.backgroundImage = 'url(./assets/images/day.svg)';

    //toggle day class onto body
    let body = document.body;
    body.classList.toggle('day');
    body.classList.toggle('night');
    
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
      setTimeout(function(){
        playerWin(playerSelection, compSelection);
      }, 2300);
      previousPlayerChoice = playerSelection;
      previousCompChoice = compSelection;
      previousResult = "playerWin";
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      setTimeout(function(){
        playerLose(playerSelection, compSelection);
      }, 2300);
      previousPlayerChoice = playerSelection;
      previousCompChoice = compSelection;
      previousResult = "playerLose";
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      setTimeout(function(){
        playerDraw(playerSelection, compSelection);
      }, 2300);
      previousPlayerChoice = playerSelection;
      previousCompChoice = compSelection;
      previousResult = "playerDraw";
      break;
  }
}
// Spock Game Logic
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
      setTimeout(function(){
        playerWin(playerSelection, compSelection);
      }, 2300);
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
      setTimeout(function(){
        playerLose(playerSelection, compSelection);
      }, 2300);
      previousPlayerChoice = playerSelection;
      previousCompChoice = compSelection;
      previousResult = "playerLose";
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
    case 'lizardlizard':
    case 'spockspock':
      setTimeout(function(){
        playerDraw(playerSelection, compSelection);
      }, 2300);
      previousPlayerChoice = playerSelection;
      previousCompChoice = compSelection;
      previousResult = "playerDraw";
      break;
  }
}


/**
 * Generates computer move, if easy mode move is random, if hard mode move is calculated on prior rounds.
 * Calls compAssignLight function and passes through compMove variable to generate correct icon in comp tile
 * @returns compMove
 */
function getCompSelection() {
  if (gameIsHard === false && gameMode === "classic") {
    let compOptions = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * compOptions.length);
    let compMove = compOptions[randomChoice];
    compAssignLight(compMove);
    return compMove;  
  } else if (gameIsHard === false && gameMode === "spock") {
    let compOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomChoice = Math.floor(Math.random() * compOptions.length);
    let compMove = compOptions[randomChoice];
    compAssignLight(compMove);
    return compMove;  
  } else if (gameIsHard === true && gameMode === "classic") { //start of hard mode comp selection
      if (previousResult === "" || previousResult === "playerDraw") {
        let compOptions = ['rock', 'paper', 'scissors'];
        let randomChoice = Math.floor(Math.random() * compOptions.length);
        let compMove = compOptions[randomChoice];
        compAssignLight(compMove);
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
          return compMove;
      }
  } else if (gameIsHard === true && gameMode === "spock") {
    if (previousResult === "" || previousResult === "playerDraw") {
      let compOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let randomChoice = Math.floor(Math.random() * compOptions.length);
      let compMove = compOptions[randomChoice];
      compAssignLight(compMove);
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

  // gets rounds message div in scoreboard, inserts <p> element and populates with text, then assigns color and toggles class for animation. required for animation to work on iOS
  let resultMessageDiv = document.getElementById("round-message-div");
  resultMessageDiv.innerHTML = `<p id="round-message">${playerSelection} beats ${compSelection}. You win this round!</p>`;
  let resultMessage = document.getElementById("round-message");
  resultMessage.style.color = 'green';
  resultMessage.classList.toggle('round-message');

  // check for overall win else reset board
  if (playerScore == roundsWanted) {
    playerOverallWin();
  } else {
    //reset board
    setTimeout(function() {
    resetBoard(playerSelection);
    }, 500);
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

  // gets rounds message div in scoreboard, inserts <p> element and populates with text, then assigns color and toggles class for animation. required for animation to work on iOS
  let resultMessageDiv = document.getElementById("round-message-div");
  resultMessageDiv.innerHTML = `<p id="round-message">${playerSelection} loses to ${compSelection}. You lost this round!</p>`;
  let resultMessage = document.getElementById("round-message");
  resultMessage.style.color = 'red';
  resultMessage.classList.toggle('round-message');

  //check for overall loss else reset board
  if (compScore == roundsWanted) {
    playerOverallLost();
  } else {
    //reset board
    setTimeout(function() {
    resetBoard(playerSelection);
    }, 500);
  }
}

// Round is a draw
function playerDraw(playerSelection, compSelection) {
  // gets rounds message div in scoreboard, inserts <p> element and populates with text, then assigns color and toggles class for animation. required for animation to work on iOS
  let resultMessageDiv = document.getElementById("round-message-div");
  resultMessageDiv.innerHTML = `<p id="round-message">${playerSelection} draws with ${compSelection}. This round is a draw!</p>`;
  let resultMessage = document.getElementById("round-message");
  resultMessage.style.color = 'var(--text-light)';
  resultMessage.classList.toggle('round-message');

  //reset board
  setTimeout(function() {
    resetBoard(playerSelection);
  }, 500);
}

/**
 * Resets the playing board. Identifies original tile, toggles classes to reinsert original tile and clears player tile location.
 * @param {*} playerSelection 
 */
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

/**
 * Resets variables used in hard difficulty back to starting values
 */
function hardReset() {
  previousPlayerChoice = "";
  previousCompChoice = "";
  previousResult = "";
}

/**
 * Activates end game screen for overall win and populates message to player
 */
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

/**
 * Activates end game screen for overall loss and populates message to player
 */
function playerOverallLost(){
  let playerScoreSpan = document.getElementById("player-score");
  let playerScore = playerScoreSpan.innerHTML;

  let compScoreSpan = document.getElementById("comp-score");
  let compScore = compScoreSpan.innerHTML;

  document.getElementById("main-container").innerHTML=`
    <div class="endscreen-container">
      <div class="endscreen-text-container">
        <h2>You Lost!</h2>
        <p>"Commander ${playerName} you have lost to the aliens ${playerScore}:${compScore}! I suggest you try again! Military personnel in this conflict do not have permission to lose.<br>All unaddressed losses will be dealt with through court martial with punishment being dealt swiftly and severely.<br>Between you and me, I've heard on the grapevine that the last commander who refused to try again, was made to enter the Eurovision Song Contest!"</p>
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
  
  //event listeners for game tiles
  rock.addEventListener('click', function() {
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    moveCapturedTileToPlayerTileSpock(tileCapture);
    spockGameLogic('rock');
  });

  paper.addEventListener('click', function() {
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    moveCapturedTileToPlayerTileSpock(tileCapture);
    spockGameLogic('paper');
  });

  scissors.addEventListener('click', function() {
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    moveCapturedTileToPlayerTileSpock(tileCapture);
    spockGameLogic('scissors');
  });

  lizard.addEventListener('click', function() {
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    moveCapturedTileToPlayerTileSpock(tileCapture);
    spockGameLogic('lizard');
  });

  spock.addEventListener('click', function() {
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    moveCapturedTileToPlayerTileSpock(tileCapture);
    spockGameLogic('spock');
  });

  rock.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      rock.click();
    }
  });

  paper.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      paper.click();
    }
  });

  scissors.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      scissors.click();
    }
  });

  lizard.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      lizard.click();
    }
  });

  spock.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      spock.click();
    }
  });
}

/**
 * Inserts the HTML from the tile selected by the player into the player tile location
 * @param {*} tileCapture generated by playerSelectionSpock
 */
 function moveCapturedTileToPlayerTileSpock(tileCapture) {
  let player = document.getElementById("player-tile-spock");
  setTimeout(function() {
    player.innerHTML = tileCapture;
  }, 800);
}

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
  
  //event listeners for game tiles
  rock.addEventListener('click', function() {
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    moveCapturedTileToPlayerTileClassic(tileCapture);
    classicGameLogic('rock');
  });

  paper.addEventListener('click', function(){
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    moveCapturedTileToPlayerTileClassic(tileCapture);
    classicGameLogic('paper');
  });

  scissors.addEventListener('click', function(){
    let tileCapture = this.innerHTML;
    this.classList.toggle("slide-in-blurred-right");
    this.classList.toggle("slide-out-blurred-left");
    moveCapturedTileToPlayerTileClassic(tileCapture);
    classicGameLogic('scissors');
  });

  //keyboard event listeners
  rock.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      rock.click();
    }
  });

  paper.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      paper.click();
    }
  });

  scissors.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      scissors.click();
    }
  });
}

/**
 * Inserts the HTML from the tile selected by the player into the player tile location
 * @param {*} tileCapture generated by playerSelectionClassic
 */
function moveCapturedTileToPlayerTileClassic(tileCapture) {
  let player = document.getElementById("player-tile-classic");
  setTimeout(function() {
    player.innerHTML = tileCapture;
  }, 800);
}


/**
 * Adds a rules modal for the classic game type, creates HTML, adds event listeners and open close functionality
 */
function addClassicRulesModal() {
  // add classic rules modal into overall modal container
  document.getElementById("rules-modal-container").innerHTML = `
  <div class="modal-container" id="classic-rules-modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-close" id="classic-rules-modal-close" tabindex="0">&times;</span>
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
        <p>"If you were brave enough to try and beat them in the Hard mode you will be taking on the alien boss and not one of the minions, I wish you luck, you are going to need it. Some of the really crazy looking scientists keep muttering to themselves that there is a pattern to the way the boss plays but none of the previous commanders have ever survived to report back."</p> <div id="response"><p>"???"</p></div><p>"Oh, sorry, I thought you already knew you weren't the first choice"
        </p>
      </div>
    </div>
  </div>`;
  
  let rulesButton = document.getElementById("classic-rules-button");
  rulesButton.addEventListener('click', openClassicRulesModal);
  //keyboard functionality
  rulesButton.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      rulesButton.click();
    }
  });
  
  let classicRulesModalClose = document.getElementById("classic-rules-modal-close");
  classicRulesModalClose.addEventListener('click', closeClassicRulesModal);
  //keyboard functionality
  classicRulesModalClose.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      classicRulesModalClose.click();
    }
  });

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

/**
 * Adds a rules modal for the spock game type, creates HTML, adds event listeners and open close functionality
 */
function addSpockRulesModal() {
  // add spock rules modal into overall modal container
  document.getElementById("rules-modal-container").innerHTML = `
  <div class="modal-container" id="spock-rules-modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-close" id="spock-rules-modal-close" tabindex="0">&times;</span>
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
        <p>"If you were brave enough to try and beat them in the Hard mode you will be taking on the alien boss and not one of the minions, I wish you luck, you are going to need it. Some of the really crazy looking scientists keep muttering to themselves that there is a pattern to the way the boss plays but none of the previous commanders have ever survived to report back."</p> <div id="response"><p>"???"</p></div><p>"Oh, sorry, I thought you already knew you weren't the first choice"
        </p>
      </div>
    </div>
  </div>`;
  
  let rulesButton = document.getElementById("spock-rules-button");
  rulesButton.addEventListener('click', openSpockRulesModal);
  //keyboard functionality
  rulesButton.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      rulesButton.click();
    }
  });
  
  let spockRulesModalClose = document.getElementById("spock-rules-modal-close");
  spockRulesModalClose.addEventListener('click', closeSpockRulesModal);
  //keyboard functionality
  spockRulesModalClose.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      spockRulesModalClose.click();
    }
  });
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

/**
 * Adds a quit game modal to the game screen, creates HTML, adds event listeners and open and close functionality
 */
function addQuitModal() {
  document.getElementById("quit-modal-container").innerHTML = `
  <div class="modal-container" id="quit-modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-close" id="quit-modal-close" tabindex="0">&times;</span>
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
  // keyboard functionality
  quitGameButton.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      quitGameButton.click();
    }
  });
  
  let quitGameModalClose = document.getElementById("quit-modal-close");
  quitGameModalClose.addEventListener('click', closeQuitModal);
  // keyboard functionality
  quitGameModalClose.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      quitGameModalClose.click();
    }
  });
  
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

/**
 * sets quit modal display to none and calls return to menu function
 */
function quitFromQuitModal(){
  document.getElementById("quit-modal").style.display = 'none';
  returnToMenu();
}

/**
 * Returns game to main menu, inserts main menu html, removes scoreboard and recreates main menu elements
 */
function returnToMenu() {
  document.getElementById("main-container").innerHTML = menu;
  document.getElementById("middle-container").innerHTML = ``;
  mainMenuElements();
}

// ENTER NAME SCREEN

/**
 * controls the elements on the enter name screen, captures the user entry into the input field, triggers
 * the warning message if appropriate and starts the game when required.
 */
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
  // get back button
  let backButton = document.getElementById("name-input-back-button");
  // listen for click
  backButton.addEventListener('click', returnToMenu);
  backButton.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
      backButton.click();
    }
  });
}

/**
 * launches the classic game. inserts the HTML code into the main container to display the game.
 * Runs the scoreboard, classic rules modal, quit modal and player selection functions
 */
function launchClassicGame() {
  document.getElementById("main-container").innerHTML=`
  <div class="game">
    <div class="game-grid">
<!--rock game tile-->    
      <div class="rock" id="rock-tile-classic" tabindex="0" aria-label="rock">
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
      <div class="paper" id="paper-tile-classic" tabindex="0" aria-label="paper">
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
      <div class="scissors" id="scissors-tile-classic" tabindex="0" aria-label="scissors">
        <div class="ufo slide-in-blurred-right">
          <div class="glass"></div>
          <div class="separator"></div>
          <div class="body">
            <div class="window small window-left"></div>
            <div class="window window-center"></div>
            <div class="window small window-right"></div>
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
            <div class="window small window-left"></div>
            <div class="window window-center"></div>
            <div class="window small window-right"></div>
          </div>
          <div id="comp-light-container"></div>
        </div>
      </div>
<!-- grid spacer div -->
      <div class="grid-spacer"></div>
<!-- in game buttons -->
      <div class="game-button rules" id="classic-rules-button" tabindex="0" role="button">Rules</div>
      <div class="game-button quit" id="quit-button" tabindex="0" role="button">Quit</div>
    </div>
  </div>
  `;
  addClassicRulesModal();
  addQuitModal();
  addScoreboard();
  playerSelectionClassic();
}

/**
 * launches the spock game. inserts the HTML code into the main container to display the game.
 * Runs the scoreboard, spock rules modal, quit modal and player selection functions
 */
function launchSpockGame() {
  document.getElementById("main-container").innerHTML=`
  <div class="game">
    <div class="game-grid">
<!-- lizard game tile-->
    <div class="lizard" id="lizard-tile-spock" tabindex="0" aria-label="lizard">
      <div class="ufo slide-in-blurred-right">
        <div class="glass"></div>
        <div class="separator"></div>
        <div class="body">
          <div class="window small window-left"></div>
          <div class="window window-center"></div>
          <div class="window small window-right"></div>
        </div>
        <div class="light" id="lizard-light-spock"></div>
        <i class="far fa-hand-lizard"></i>
      </div>
    </div>
<!-- spock game tile-->
    <div class="spock" id="spock-tile-spock" tabindex="0" aria-label="spock">
      <div class="ufo slide-in-blurred-right">
        <div class="glass"></div>
        <div class="separator"></div>
        <div class="body">
          <div class="window small window-left"></div>
          <div class="window window-center"></div>
          <div class="window small window-right"></div>
        </div>
        <div class="light" id="spock-light-spock"></div>
        <i class="far fa-hand-spock"></i>
      </div>
    </div>
<!--rock game tile-->    
      <div class="rock" id="rock-tile-spock" tabindex="0" aria-label="rock">
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
      <div class="paper" id="paper-tile-spock" tabindex="0" aria-label="paper">
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
      <div class="scissors" id="scissors-tile-spock" tabindex="0" aria-label="scissors">
        <div class="ufo slide-in-blurred-right">
          <div class="glass"></div>
          <div class="separator"></div>
          <div class="body">
            <div class="window small window-left"></div>
            <div class="window window-center"></div>
            <div class="window small window-right"></div>
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
            <div class="window small window-left"></div>
            <div class="window window-center"></div>
            <div class="window small window-right"></div>
          </div>
          <div id="comp-light-container"></div>
        </div>
      </div>
<!-- grid spacer div -->
      <div class="grid-spacer"></div>
<!-- in game buttons -->
      <div class="game-button rules" id="spock-rules-button" tabindex="0" role="button">Rules</div>
      <div class="game-button quit" id="quit-button" tabindex="0" role="button">Quit</div>
    </div>
  </div>
  `;
  addSpockRulesModal();
  addQuitModal();
  addScoreboard();
  playerSelectionSpock();
}

// HOME SCREEN
// Change to Name Screen
function openNameScreen() {
  document.getElementById("main-container").innerHTML = `
  <div class="main-menu">
    <form action="#">  
      <div class="form">
        <span id="name-input-back-button" tabindex="0"><i class="far fa-caret-square-left"></i></span>
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

  // Main Menu Rules Modal event listener for enter key press on rules close button to simulate click
  mainRulesModalCloseButton.addEventListener('keydown', function(e){
    if (e.key === 'Enter') {
      mainRulesModalCloseButton.click();
    }
  });
    
  // Main Menu Settings Modal elements - getElementById
  let mainSettingsModalButton = document.getElementById("main-settings-button");
  let mainSettingsModalCloseButton = document.getElementById("settings-modal-close");
  
  // Main Menu Settings Modal Event Listeners - capture player click events
  mainSettingsModalButton.addEventListener('click', openMainSettingsModal);
  mainSettingsModalCloseButton.addEventListener('click', closeMainSettingsModal);

  // Event listener for enter key press on main settings close button to simulate click
  mainSettingsModalCloseButton.addEventListener('keydown', function(e){
    if (e.key === 'Enter') {
      mainSettingsModalCloseButton.click();
    }
  });
}

window.onload = returnToMenu();
