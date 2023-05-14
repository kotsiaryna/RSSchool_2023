import './style.scss'

import createElement from '../utils/createElement'

const Game = createElement('div', 'game')

let size = 10;

for (let i = 0; i < size*size; i++) {
 Game.append(createElement('div', 'game__cell'))
}

export default Game

