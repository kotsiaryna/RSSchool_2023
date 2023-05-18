import { cells } from '../index'
import { mineNumberEl, flagNumberEl, timeValue } from '../counters';
import { size } from '../game/index'
import placeMines from './placeMines';
import GameOverMessage from '../gameover';
import { clickNumber } from '../counters';
import Game from '../game/index';
import { openedCellsCounter } from './openCells';
import {num } from './setFlags';


function restartGame () { 
  //  const cells = [...document.querySelectorAll('.cell')]
   cells.forEach(cell => {
    cell.className = 'cell';
    cell.textContent = ''
   
  })
  window.end = 1
  mineNumberEl.textContent = size;
  flagNumberEl.textContent = 0;
  GameOverMessage.textContent = ''
  clickNumber.textContent = 0
  timeValue.textContent = '00 : 00'
  Game.addEventListener('click', (e) => placeMines(e), {once:true})
  localStorage.setItem('clicks', 0)
  localStorage.removeItem('counters')
  localStorage.removeItem('game')
  localStorage.removeItem('num')
  
  openedCellsCounter.n = 0
  num.flags = 0
  num.mines = 10
 
}

export default restartGame

