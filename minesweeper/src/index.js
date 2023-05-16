import Header from './header/index'
import Game from './game/index'
import Footer from './footer/index'
import Counters from './counters/index'
import Buttons from './buttons/index'

import placeMines from './scripts/placeMines'
import openCell from './scripts/openCells'
import { size } from './game/index'

import setFlag from './scripts/setFlags'

import restartButton from './buttons/index';
import restartGame from './scripts/restart'

import timer from './scripts/timer'
import clickCounter from './scripts/clickCounter'


document.body.append(Header, Buttons, Counters, Game, Footer)
console.log('body is ready')

// global
export const gameField = document.querySelector('.game')
export const cells = [...document.querySelectorAll('.cell')]
export const start = 0
window.end = 0
//
 

gameField.addEventListener('click', (e) => placeMines(e), {once:true})

gameField.addEventListener('click', (e) => {
  if(e.target.classList.contains('cell') && !e.target.classList.contains('flagged')) {
    openCell(e.target, size)
    clickCounter()
  }
})

gameField.addEventListener('contextmenu', (e) => {
  if(e.target.classList.contains('cell')) {
    setFlag(e)
  }})

restartButton.addEventListener('click', restartGame)

setInterval(timer, 1000)

