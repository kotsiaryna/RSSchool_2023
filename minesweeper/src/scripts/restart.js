import { cells, open, flag } from '../index'
import { mineNumberEl, flagNumberEl, timeValue } from '../counters';
import { options, size } from '../game/index'
import GameOverMessage from '../gameover';
import { clickNumber } from '../counters';
import Game from '../game/index';
import { openedCellsCounter } from './openCells';
import {num } from './setFlags';


function restartGame () { 
  const cells =[...document.querySelectorAll('.cell')] 
    cells.forEach(cell => {
    cell.className = 'cell';
    cell.textContent = '';
    cell.removeAttribute('style')
   
  })
  window.end = 1
  mineNumberEl.textContent = options.mines;
  flagNumberEl.textContent = 0;
  GameOverMessage.textContent = ''
  clickNumber.textContent = 0
  timeValue.textContent = '00 : 00'
  
  localStorage.setItem('clicks', 0)
  localStorage.removeItem('counters')
  localStorage.removeItem('game')
  localStorage.removeItem('num')
  
  openedCellsCounter.n = 0
  num.flags = 0
  num.mines = options.mines

  Game.removeEventListener('click', open)
  Game.removeEventListener('contextmenu', flag)
 
}

export default restartGame

