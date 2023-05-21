import { cells } from ".."
import { mineInput, sizeSelect } from "../choice"
import Counters from "../counters"
import Game, { options } from "../game"
import { openedCellsCounter } from "./openCells"
import { num } from "./setFlags"


export function saveGame () {
  const gameState = [...document.querySelectorAll('.cell')].map(el => {
    return {
      class: el.className,
      content: el.textContent,
      color: el.style.color
  }})

 
  const countersState = [...Counters.children].map(el=> el.lastChild.textContent)

  const optionsState = JSON.stringify(options)

  localStorage.setItem('game', JSON.stringify(gameState))
  localStorage.setItem('counters', JSON.stringify(countersState))
  localStorage.setItem('clicks', openedCellsCounter.n)
  localStorage.setItem('end', window.end)
  localStorage.setItem('num', JSON.stringify(num))
  localStorage.setItem('options', optionsState)
}
export function getGameState() {
  if(localStorage.getItem('game')) {
    const optionsState = JSON.parse(localStorage.getItem('options'))
    mineInput.value = options.mines
    mineInput.previousElementSibling.textContent = `Number of mines: ${options.mines}`
    sizeSelect.value = options.size

    Game.className = `game game_${options.size}`

    const gameState = JSON.parse(localStorage.getItem('game')) 
    Array.from(document.querySelectorAll('.cell')).forEach((el, i) => {
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

