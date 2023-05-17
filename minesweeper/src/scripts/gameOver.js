import GameOverMessage from "../gameover/index"
import { winSound, looseSound } from "./sound"
import {timerID} from "../index"
import Tumblers from "../tumblers"

function gameOver(isWin) {
 Tumblers.after(GameOverMessage)
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