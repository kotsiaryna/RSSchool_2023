import { size } from "../game/index"
import { flagNumberEl, mineNumberEl } from "../counters/index"


export let num = {
  flags: JSON.parse(localStorage.getItem('num'))?.flags ?? 0 ,
  mines: JSON.parse(localStorage.getItem('num'))?.mines ?? 10 
}

function setFlag(event) {
  event.preventDefault()
  if(event.target.classList.contains('opened')) return;

  const isFlagged = event.target.classList.contains('flagged')
  event.target.classList.toggle('flagged')

  if(isFlagged) {
    num.flags--
    num.mines++
  } else {
    num.flags++
    num.mines--
  }
  mineNumberEl.textContent = num.mines
  flagNumberEl.textContent = num.flags
}

export default setFlag