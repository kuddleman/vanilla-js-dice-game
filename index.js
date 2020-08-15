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

const displayResetButton = () => {
  rollBtn.style.display = 'none'  
      resetBtn.style.display = 'block'
      resetBtn.style.margin = '30px auto'
}


const handleRollClick = () => {
 let randomNum = Math.ceil(Math.random() * 6)
 
  if ( player1Turn ) {
    
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
    player1Dice.textContent = randomNum
    player1Score += randomNum
    player1Scoreboard.textContent = player1Score

    if ( player1Score >= 20 ) {
      message.textContent = 'Player 1 WON!'
      displayResetButton()
    } else {
    message.textContent = 'It\'s Player 2 Turn'
    }

  } else {
    
    player1Dice.classList.remove('active')
    player2Dice.classList.add('active')
    player2Dice.textContent = randomNum
    player2Score += randomNum
    player2Scoreboard.textContent = player2Score

    if ( player2Score >= 20 ) {
      message.textContent = 'Player 2 WON!'
      displayResetButton()
    } else {
      message.textContent = 'It\'s Player 1 Turn'
    } 

   
  }
  player1Turn = !player1Turn
}

rollBtn.addEventListener('click', handleRollClick)

