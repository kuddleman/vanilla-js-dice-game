// Create variables for game state:

let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const message = document.getElementById('message')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')


// add event listener to roll dice button.  Have it
// log out a random number between 1 and 6 inclusive
const handleRollClick = () => {
 let randomNum = Math.ceil(Math.random() * 6)
 console.log( randomNum )
 // 1. Find out which players turn it is
     // 2. log out the value e.g. "Player 1 rolled 5"
     // 3. Switch the turn back to the other player

  if ( player1Turn ) {
    console.log(`Player 1 rolled a ${ randomNum }`)
    
  } else {
    console.log(`Player 2 rolled a ${ randomNum }`)
    
  } 
  player1Turn = !player1Turn
}

rollBtn.addEventListener('click', handleRollClick)
