import { cells, gameField } from '../index'
import { mineNumberEl, flagNumberEl } from '../counters';
import { size } from '../game/index'
import placeMines from './placeMines';
import GameOverMessage from '../gameover';
import { clickNumber } from '../counters';

function restartGame () { 
  
  cells.forEach(cell => {
    cell.className = 'cell';
    cell.textContent = ''
  })
  window.end = 0
  mineNumberEl.textContent = size;
  flagNumberEl.textContent = 0;
  GameOverMessage.remove()
  clickNumber.textContent = 0

  gameField.addEventListener('click', (e) => placeMines(e), {once:true})
}

export default restartGame

