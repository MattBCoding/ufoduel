// Globally needed variables
// Capture player system colour scheme preference

// FUNCTIONS

// SETTINGS
// Change Colour Scheme
// Change Game Difficulty
// Change Game Winning Condition

// FUNCTIONS NEEDED BY MORE THAN ONE SCREEN
// Set Game Mode
// Determine Game Mode
// Add Scoreboard to screen
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
// Classic Game Event Capture
// In game rules modal
// Classic Rules modal open
// Classic Rules modal close
// Quit Game button - Classic

// ENTER NAME SCREEN
// Capture Name Entry by player
// Change to Game Screen - Classic
// Change to Game Screen - Spock
// Back or Quit button

// HOME SCREEN
// Change to Name Screen
// M.M. What happens when player clicks play classic mode
// M.M. What happens when player clicks play spock mode
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
  }
}
// M.M. Open Game Settings Screen Modal
// M.M. Close Game Settings Screen Modal
// Get Main Menu Elements - getElementById
// Main Menu Event Listeners - capture player click events
// Main Menu Modal elements - getElementById
let mainRulesModalButton = document.getElementById("main-rules-button");
let mainRulesModal = document.getElementById("main-rules-modal");
let mainRulesModalCloseButton = document.getElementById("main-rules-modal-close");

// Main Menu Modal Event Listeners - capture player click events
mainRulesModalButton.addEventListener('click', openMainRulesModal);
mainRulesModalCloseButton.addEventListener('click', closeMainRulesModal);
window.addEventListener('click', outsideModalClick);