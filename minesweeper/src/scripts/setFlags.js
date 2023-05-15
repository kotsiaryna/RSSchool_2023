import { size } from "../game/index"
import { flagNumberEl, mineNumberEl } from "../counters/index"

let flagNumber = +flagNumberEl.textContent
let mineNumber = +mineNumberEl.textContent

function setFlag(event) {
  event.preventDefault()
  const isFlagged = event.target.classList.contains('flagged')
  event.target.classList.toggle('flagged')

  if(isFlagged) {
    flagNumber--
    mineNumber++
  } else {
    flagNumber++
    mineNumber--
  }
  mineNumberEl.textContent = mineNumber
  flagNumberEl.textContent = flagNumber
}

export default setFlag