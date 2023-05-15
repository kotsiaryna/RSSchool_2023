import Header from './header/index'
import Game from './game/index'
import Footer from './footer/index'
import Counters from './counters/index'

import placeMines from './scripts/placeMines'
import openCell from './scripts/openCells'
import { size } from './game/index'

import setFlag from './scripts/setFlags'


document.body.append(Header, Counters, Game, Footer)
console.log('body is ready')

const gameField = document.querySelector('.game')

gameField.addEventListener('click', (e) => placeMines(e), {once:true})

gameField.addEventListener('click', (e) => {
  if(e.target.classList.contains('cell')) {
    openCell(e, size)
  }
})

gameField.addEventListener('contextmenu', (e) => {
  if(e.target.classList.contains('cell')) {
    setFlag(e)
  }})