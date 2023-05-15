import { size } from "../game/index";
console.log('script starts')

function getRandomNumber(n) {
  return Math.floor(Math.random()*n)
}

function getMinedCells(n) {
  let minedCells = []
  for(let i = 0; i < n; i++) {
    let index = getRandomNumber(n**2);
    if(!minedCells.includes(index)) {
      minedCells.push(index)
    } else {
      i--
    }
  }
  return minedCells
}

export function markMinedCells (indexes) {
  console.log('marking is running')
  const cells = [...document.querySelectorAll('.cell')]
  indexes.forEach(index => {
    cells[index].classList.add('mined')
  });
  
}
export let mined = getMinedCells(size)

