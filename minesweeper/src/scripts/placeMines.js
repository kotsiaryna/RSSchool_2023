import { options, size } from "../game/index";
console.log('script starts')

function getRandomNumber(n) {
  return Math.floor(Math.random()*n)
}

function setMinedCells(event) {
  const target = event.target
  const cells = [...document.querySelectorAll('.cell')]
  const targetIndex = cells.indexOf(target)
  let minedCells = []
  for(let i = 0; i < options.mines; i++) {
    let index = getRandomNumber(options.size**2);
    if(!minedCells.includes(index) && index !== targetIndex) {
      minedCells.push(index)
    } else {
      i--
    }
  }
  return minedCells
}

function markMinedCells (indexes) {
  const cells = [...document.querySelectorAll('.cell')]
  indexes.forEach(index => {
    cells[index].classList.add('mined')
  });
}

const placeMines = (e) => {
  if(!e.target.classList.contains('cell')) return
  const mined = setMinedCells(e)
  markMinedCells(mined)
}

export default placeMines
