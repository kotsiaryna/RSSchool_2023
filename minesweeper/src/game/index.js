import './style.scss'
import createElement from '../utils/createElement'
import { mineInput, sizeSelect } from '../choice';


const Game = createElement('div', 'game game_10')

export const options = {
  size: sizeSelect.value,
  mines: mineInput.value
}

export let size = 10; // удалить, когда все поменяю

export const fillGameField = () => {
  for (let i = 0; i < options.size ** 2; i++) {
 Game.append(createElement('div', 'cell'))
  
}
}
fillGameField()

console.log('game done')
export default Game