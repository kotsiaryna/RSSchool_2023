import { cells } from ".."
import Counters from "../counters"
import { openedCellsCounter } from "./openCells"
import { num } from "./setFlags"


export function saveGame () {
  const gameState = cells.map(el => {
    return {
      class: el.className,
      content: el.textContent,
      color: el.style.color
  }})
 
  const countersState = [...Counters.children].map(el=> el.lastChild.textContent)

  localStorage.setItem('game', JSON.stringify(gameState))
  localStorage.setItem('counters', JSON.stringify(countersState))
  localStorage.setItem('clicks', openedCellsCounter.n)
  localStorage.setItem('end', window.end)
  localStorage.setItem('num', JSON.stringify(num))
}
export function getGameState() {
  if(localStorage.getItem('game')) {
    const gameState = JSON.parse(localStorage.getItem('game')) 
    cells.forEach((el, i) => {
      el.className = gameState[i].class
      el.textContent = gameState[i].content
      el.style.color = gameState[i].color
     } )
  
  const countersState = JSON.parse(localStorage.getItem('counters')) 
  Array.from(Counters.children).forEach((el, i) => el.lastChild.textContent = countersState[i])
  
  window.end = localStorage.getItem('end')

  const numState = JSON.parse(localStorage.getItem('num')) 
  num.flags = numState.flags
  num.mines = numState.mines
  }
}

