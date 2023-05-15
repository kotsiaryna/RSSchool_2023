import GameOverMessage from "../gameover/index"

function gameOver(isWin) {
  document.body.append(GameOverMessage)
  GameOverMessage.textContent = isWin ? 'Hoorray!!! Your are winner!!!' : 'Ooops! You are blown up. Game over '
  GameOverMessage.style.color = isWin ? 'green' : 'red'
}

export default gameOver