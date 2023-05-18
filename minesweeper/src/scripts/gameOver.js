import GameOverMessage from "../gameover/index"
import { winSound, looseSound } from "./sound"
import {timerID, newID} from "../index"
import Tumblers from "../tumblers"
import savetoLocal from "./saveResults"
import { appendResults } from "./showResults"
import { clickNumber, timeValue } from "../counters"
import Game from "../game"
import { open, flag } from "../index"


function gameOver(isWin) {
 Tumblers.after(GameOverMessage)
  GameOverMessage.textContent = isWin ? `Hooray! You found all mines in ${timeValue.textContent} and ${clickNumber.textContent} moves!` : 'Game over. Try again.'
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
  Game.removeEventListener('click', open)
  Game.removeEventListener('contextmenu', flag)

}

export default gameOver