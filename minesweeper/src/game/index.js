import './style.scss'

import createElement from '../utils/createElement'

const Game = createElement('div', 'game')


export let size = 10;

for (let i = 0; i < size*size; i++) {
 Game.append(createElement('div', 'cell'))
 
}
console.log('game done')
export default Game