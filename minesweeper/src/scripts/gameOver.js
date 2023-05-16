import GameOverMessage from "../gameover/index"
import { winSound, looseSound } from "./sound"
import {timerID} from "../index"

function gameOver(isWin) {
  document.body.append(GameOverMessage)
  GameOverMessage.textContent = isWin ? 'Hoorray!!! Your are winner!!!' : 'Ooops! You are exposed. Game over.'
  GameOverMessage.style.color = isWin ? 'green' : 'red'
  if(isWin) {
    winSound.play()
  } else {
    looseSound.play()
  }
  clearInterval(timerID)
}

export default gameOver