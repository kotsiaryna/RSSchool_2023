import { clickNumber } from "../counters";
import { size } from "../game/index";
import gameOver from "./gameOver";


let openedCellsCounter = {}
openedCellsCounter.n = localStorage.getItem('clicks') ?? 0


function openCell(target, size) {
  
  target.classList.add('opened');
  openedCellsCounter.n++ 

  if(target.classList.contains('mined')) {
    gameOver(false)
    openedCellsCounter.n = 0
    return
  } 

  const cells = [...document.querySelectorAll('.cell')]

  let index = cells.indexOf(target)
  let counter = 0;

  if(target.previousElementSibling && (index % size) && target.previousElementSibling.classList.contains('mined')) {
    counter++
  }

  if(target.nextElementSibling && (index % size !== size -1) && target.nextElementSibling.classList.contains('mined')) {
    counter++
  }
  if(cells[index - size] && cells[index-size].classList.contains('mined')) {
    counter++
  }
 
  if(cells[index - size -1] && (index % size) && cells[index-size-1].classList.contains('mined')) {
    counter++
  }
 
  if(cells[index - size + 1] && (index % size !== size -1) && cells[index-size + 1].classList.contains('mined')) {
    counter++
  }
 
  if(cells[index + size] && cells[index + size].classList.contains('mined')) {
    counter++
  }
 
  if(cells[index + size - 1] && (index % size) && cells[index + size - 1].classList.contains('mined')) {
    counter++
  }
 
  if(cells[index + size + 1] && (index % size !== size -1) && cells[index + size + 1].classList.contains('mined')) {
    counter++
  }
  if(!counter) {
   
    // if(cells[index-1] && index % size) {
    //   openCell(cells[index-1], size)
    // }
    // уходит в бесконечную рекурсию, когда оба условия включены
    // if(cells[index+1]) {
    //   console.log(`${index}  next`)
    //   openCell(cells[index+1], size)
    // }

    
    // openCell(target.nextElementSibling, size)
    // openCell(cells[index - size], size)
    // openCell(cells[index - size -1], size)
    // openCell(cells[index - size +1], size)
    // openCell(cells[index + size], size)
    // openCell(cells[index + size - 1], size)
    // openCell(cells[index + size + 1], size)
  } else {
    colorize(counter, target)
    target.textContent = counter;
  }
  console.log(openedCellsCounter.n)
  if (openedCellsCounter.n === size * (size-1)) {
    gameOver(true)
    openedCellsCounter.n = 0
  }
}

function colorize (n, target) {
  switch(n) {
    case 1: {
      target.style.color = 'blue'
    };
    break;
    case 2: {
      target.style.color = 'green'
    };
    break;
    case 3: {
      target.style.color = 'red'
    };
    break;
    case 4: {
      target.style.color = 'purple'
    };
    break;

  }
}



export default openCell
export {openedCellsCounter}