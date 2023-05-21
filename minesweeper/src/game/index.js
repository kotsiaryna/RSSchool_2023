import './style.scss'
import createElement from '../utils/createElement'
import { mineInput, sizeSelect } from '../choice';


const Game = createElement('div', 'game game_10')

export const options = {
  size: +sizeSelect.value,
  mines: +mineInput.value
}
const optionsState = JSON.parse(localStorage.getItem('options'))
if(optionsState) {
  options.size = optionsState.size
  options.mines = optionsState.mines
}

export const fillGameField = () => {
  for (let i = 0; i < options.size ** 2; i++) {
 Game.append(createElement('div', 'cell'))
  
}
}
fillGameField()

console.log('game done')
export default Game