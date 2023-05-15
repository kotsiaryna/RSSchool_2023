import { cells, gameField } from '../index'
import { mineNumberEl, flagNumberEl } from '../counters';
import { size } from '../game/index'
import placeMines from './placeMines';


function restartGame () { 
  console.log(cells[0])
  cells.forEach(cell => {
    cell.className = 'cell';
    cell.textContent = ''
  })

  mineNumberEl.textContent = size;
  flagNumberEl.textContent = 0;

  gameField.addEventListener('click', (e) => placeMines(e), {once:true})
}

export default restartGame

