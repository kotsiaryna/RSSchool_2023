import { size } from "../game/index";
console.log('script starts')

function getRandomNumber(n) {
  return Math.floor(Math.random()*n)
}

function setMinedCells(n, event) {
  const target = event.target
  const cells = [...document.querySelectorAll('.cell')]
  const targetIndex = cells.indexOf(target)
  console.log(targetIndex)
  let minedCells = []
  for(let i = 0; i < n; i++) {
    let index = getRandomNumber(n**2);
    if(!minedCells.includes(index) && index !== targetIndex) {
      minedCells.push(index)
    } else {
      i--
    }
  }
  return minedCells
}

function markMinedCells (indexes) {
  console.log('marking is running')
  const cells = [...document.querySelectorAll('.cell')]
  indexes.forEach(index => {
    cells[index].classList.add('mined')
  });
}

const placeMines = (e) => {
  const mined = setMinedCells(size, e)
  markMinedCells(mined)
}

export default placeMines
