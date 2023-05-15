import { size } from "../game/index";

function openCell(event, size) {
  let target = event.target
  target.classList.add('opened')

  if(target.classList.contains('mined')) return

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

  
  colorize(counter, target)
  target.textContent = counter ? counter : ''

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