import { clickNumber } from "../counters";
import { size } from "../game/index";
import gameOver from "./gameOver";
import { options } from "../game/index";


let openedCellsCounter = {}
openedCellsCounter.n = localStorage.getItem('clicks') ?? 0


function openCell(target) {
 
  if(!target.classList.contains('opened')) {
    target.classList.add('opened');
    openedCellsCounter.n++ 
  }
 
  if(target.classList.contains('mined')) {
    gameOver(false)
    openedCellsCounter.n = 0
    return
  } 

  const cells = [...document.querySelectorAll('.cell')]

  let index = cells.indexOf(target)
  let counter = 0;

  if(target.previousElementSibling && (index % options.size) && target.previousElementSibling.classList.contains('mined')) {
    counter++
  }

  if(target.nextElementSibling && (index % options.size !== options.size -1) && target.nextElementSibling.classList.contains('mined')) {
    counter++
  }
  if(cells[index - options.size] && cells[index-options.size].classList.contains('mined')) {
    counter++
  }
 
  if(cells[index - options.size -1] && (index % options.size) && cells[index-options.size-1].classList.contains('mined')) {
    counter++
  }
 
  if(cells[index - options.size + 1] && (index % options.size !== options.size -1) && cells[index-options.size + 1].classList.contains('mined')) {
    counter++
  }
 
  if(cells[index + options.size] && cells[index + options.size].classList.contains('mined')) {
    counter++
  }
 
  if(cells[index + options.size - 1] && (index % options.size) && cells[index + options.size - 1].classList.contains('mined')) {
    counter++
  }
 
  if(cells[index + options.size + 1] && (index % options.size !== options.size -1) && cells[index + options.size + 1].classList.contains('mined')) {
    counter++
  }
    if(!counter) {
    // prev
    if(cells[index-1] && index % options.size && !cells[index-1].classList.contains('opened') && !cells[index-1].classList.contains('flagged')) {
      openCell(cells[index-1])
    }
    // next
    if(cells[index+1] && (index % options.size !== options.size-1) && !cells[index+1].classList.contains('opened') && !cells[index+1].classList.contains('flagged')) {
     openCell(cells[index+1])
    }
    // top
    if(cells[index-options.size] && !cells[index-options.size].classList.contains('opened') && !cells[index-options.size].classList.contains('flagged')) {
      openCell(cells[index-options.size])
    }
    // top left
    if(cells[index-options.size -1] && index % options.size && !cells[index-options.size -1].classList.contains('opened') && !cells[index-options.size -1].classList.contains('flagged')) {
      openCell(cells[index-options.size -1])
    }
    // top right
    if(cells[index-options.size + 1] && index % options.size !== options.size-1 && !cells[index-options.size +1].classList.contains('opened') && !cells[index- options.size +1].classList.contains('flagged')) {
      openCell(cells[index-options.size+1])
    }
    // bottom
    if(cells[index+options.size] && !cells[index+options.size].classList.contains('opened') && !cells[index+options.size].classList.contains('flagged')) {
      openCell(cells[index+options.size])
    }
    // bottom left
    if(cells[index + options.size - 1] && index % options.size && !cells[index + options.size - 1].classList.contains('opened') && !cells[index + options.size - 1].classList.contains('flagged')) {
      openCell(cells[index+options.size -1]);
    }
    // bottom right
    if(cells[index + options.size + 1] && index % options.size !== options.size-1 && !cells[index + options.size + 1].classList.contains('opened')&& !cells[index + options.size +1].classList.contains('flagged')) {
      openCell(cells[index+options.size + 1])
    }
  } else {
    colorize(counter, target)
    target.textContent = counter;
  }
  // console.log(openedCellsCounter.n)
  if (openedCellsCounter.n === options.size**2 - options.mines) {
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
    case 5: {
      target.style.color = 'coral'
    };
    break;
    case 6: {
      target.style.color = 'brown'
    };
    break;
    case 7: {
      target.style.color = 'darkslategrey'
    };
    break;
    case 8: {
      target.style.color = 'yellow'
    };
    break;

  }
}

export default openCell
export {openedCellsCounter}