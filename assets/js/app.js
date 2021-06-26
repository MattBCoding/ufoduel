// Globally needed variables
let gameIsHard = false; // true means hard difficulty
let colourMode = false; // true means dark scheme
let starsOn = false; //true means stars inserted for dark mode
let gameMode = '';
let menu;
let playerName = "";
// Capture player colour scheme preference
let colourModeToggle = document.getElementById('colour-mode-checkbox');
// Event listener for colour mode change
// Set colour mode
colourModeToggle.addEventListener('change', function(e) {
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
// Set game difficulty
gameDifficultyToggle.addEventListener('change', function(e){
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
    //change colours
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
    //change colours
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
    r.style.setProperty('--error', '#FF312E');
    r.style.setProperty('--ufo-body', '#b8b8b8');
    r.style.setProperty('--ufo-body-shadow', '#2f2f2f');
    r.style.setProperty('--ufo-glass', '#ffffff');
    r.style.setProperty('--ufo-light', '#f0d471');
    //change background image to darker version
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

// FUNCTIONS NEEDED BY MORE THAN ONE SCREEN
// Set Game Mode
function setGameModeClassic(){
  gameMode = 'classic';
  console.log(gameMode);
  openNameScreen();
}

function setGameModeSpock(){
  gameMode = 'spock';
  console.log(gameMode);
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
        <p id="round-message">test text to be removed for auto update</p>
      </div>
    </div>`;
}
// Classic Game Logic
// Spock Game Logic
// Computer move selection - Math.random for easy difficulty
// Computer move selection - hard difficulty
// Player win round
// Player lose round
// Round is a draw
// Player Win Game
// Player lose game

// SPOCK GAME SCREEN
// Spock Game Event Capture
// In game rules modal
// Spock Rules modal open
// Spock Rules modal close
// Quit Game button - Spock

// CLASSIC GAME SCREEN


// In game rules modal
// Classic Rules modal open
// Classic Rules modal close
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
      document.getElementById("error-message").innerHTML =`Commander, I forgot to tell you when the aliens ask you your name, don't include a space, their language doesn't understand them and it makes them angry.`
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
    console.log("start button pressed")
    console.log(playerName);
  }
}
// Change to Game Screen - Classic
function launchClassicGame() {
  document.getElementById("main-container").innerHTML=`
  <div class="game">
    <div class="game-grid">
<!--rock game tile-->    
      <div class="game-tile rock ufo slide-in-blurred-right" id="rock-tile-classic">
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
<!-- paper game tile-->
      <div class="game-tile paper ufo slide-in-blurred-right" id="paper-tile-classic">
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
<!-- scissors game tile-->
      <div class="game-tile scissors ufo slide-in-blurred-right" id="scissors-tile-classic">
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

      <div class="game-button rules" id="classic-rules-button">Rules</div>
      <div class="game-button quit" id="classic-quit-button">Quit</div>
    </div>
  </div>
  `;
  addScoreboard();
  // gameClassic();
}
// Change to Game Screen - Spock
// Back or Quit button

// HOME SCREEN
// Change to Name Screen
function openNameScreen() {
  menu = document.getElementById("main-container").innerHTML; //captures main menu elements so can be reinserted when needed
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
  console.log("function openNameScreen ran");
  console.log(menu);
  nameScreen();
}
// M.M. What happens when player clicks play classic mode
let playClassicButton = document.getElementById("play-classic");
playClassicButton.addEventListener('click', setGameModeClassic);
// M.M. What happens when player clicks play spock mode
let playSpockButton = document.getElementById("play-spock");
playSpockButton.addEventListener('click', setGameModeSpock);
// M.M. Open Rules Modal
function openMainRulesModal() {
  mainRulesModal.style.display = 'block';
}
// M.M. Close Rules Modal
function closeMainRulesModal() {
  mainRulesModal.style.display = 'none';
}
// M.M. Close Rules Modal if player clicks outside the modal content
function outsideModalClick(e) {
  if (e.target == mainRulesModal) {
    mainRulesModal.style.display = 'none';
  } if (e.target == mainSettingsModal) {
    mainSettingsModal.style.display = 'none';
  }
}
// M.M. Open Game Settings Screen Modal
function openMainSettingsModal() {
  mainSettingsModal.style.display = 'block';
}
// M.M. Close Game Settings Screen Modal
function closeMainSettingsModal() {
  mainSettingsModal.style.display = 'none';
}
// Get Main Menu Elements - getElementById
// Main Menu Event Listeners - capture player click events
// Main Menu Rules Modal elements - getElementById
let mainRulesModalButton = document.getElementById("main-rules-button");
let mainRulesModal = document.getElementById("main-rules-modal");
let mainRulesModalCloseButton = document.getElementById("main-rules-modal-close");

// Main Menu Rules Modal Event Listeners - capture player click events
mainRulesModalButton.addEventListener('click', openMainRulesModal);
mainRulesModalCloseButton.addEventListener('click', closeMainRulesModal);
window.addEventListener('click', outsideModalClick);

// Main Menu Settings Modal elements - getElementById
let mainSettingsModalButton = document.getElementById("main-settings-button");
let mainSettingsModal = document.getElementById("settings-modal");
let mainSettingsModalCloseButton = document.getElementById("settings-modal-close");

// Main Menu Settings Modal Event Listeners - capture player click events
mainSettingsModalButton.addEventListener('click', openMainSettingsModal);
mainSettingsModalCloseButton.addEventListener('click', closeMainSettingsModal);
