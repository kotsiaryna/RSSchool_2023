import GameOverMessage from "../gameover/index"
import { winSound, looseSound } from "./sound"
import {timerID, newID} from "../index"
import Tumblers from "../tumblers"
import savetoLocal from "./saveResults"
import { appendResults } from "./showResults"

function gameOver(isWin) {
 Tumblers.after(GameOverMessage)
  GameOverMessage.textContent = isWin ? 'Hoorray!!! Your are winner!!!' : 'Ooops! You are exposed. Game over.'
  GameOverMessage.style.color = isWin ? 'green' : 'red'

  savetoLocal(isWin)
  appendResults()


  if(isWin) {
    winSound.play()
  } else {
    looseSound.play()
  }
  if(newID) {
    clearInterval(newID)
  } else {
    clearInterval(timerID)
  }
  
}

export default gameOver