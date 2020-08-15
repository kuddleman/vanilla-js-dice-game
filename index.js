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



const handleRollClick = () => {
 let randomNum = Math.ceil(Math.random() * 6)
 
  if ( player1Turn ) {
    console.log(`Player 1 rolled a ${ randomNum }`)
  } else {
    console.log(`Player 2 rolled a ${ randomNum }`)
  } 
  player1Turn = !player1Turn
}



rollBtn.addEventListener('click', handleRollClick)
