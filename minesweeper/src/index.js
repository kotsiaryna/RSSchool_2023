import Header from './header/index'
import Game from './game/index'
import Footer from './footer/index'

import placeMines from './scripts/placeMines'
import openCell from './scripts/openCells'
import { size } from './game/index'


document.body.append(Header, Game, Footer)
console.log('body is ready')

const gameField = document.querySelector('.game')

gameField.addEventListener('click', (e) => placeMines(e), {once:true})

gameField.addEventListener('click', (e) => {
  if(e.target.classList.contains('cell')) {
    openCell(e, size)
  }
})