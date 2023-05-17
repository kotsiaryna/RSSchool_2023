import Header from './header/index'
import Game from './game/index'
import Footer from './footer/index'
import Counters from './counters/index'
import Buttons from './buttons/index'
import Tumblers from './tumblers'
import ResultButton from './Results'

import placeMines from './scripts/placeMines'
import openCell from './scripts/openCells'
import { size } from './game/index'

import setFlag from './scripts/setFlags'

import restartButton from './buttons/index';
import restartGame from './scripts/restart'

import timer from './scripts/timer'
import clickCounter from './scripts/clickCounter'

import { clickSound, toggleSound } from './scripts/sound'
import { soundImg } from './tumblers'

import { themeImg } from './tumblers'

import changeTheme from './scripts/theme'
import GameOverMessage from './gameover'

import { appendResults } from './scripts/showResults'

export const BODY = document.querySelector('body')

BODY.append(Header, Buttons, Tumblers, GameOverMessage, Counters, Game, ResultButton)
// BODY.classList.add('light')
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
    clickCounter()
    openCell(e.target, size)
    clickSound.play()
  }
})

gameField.addEventListener('contextmenu', (e) => {
  if(e.target.classList.contains('cell')) {
    setFlag(e)
  }})

export let timerID = setInterval(timer, 1000)

let newID
restartButton.addEventListener('click', () => {
  restartGame()
  clearInterval(timerID)
  newID = setInterval(timer, 1000)

} )



let soundIsOn = true

soundImg.addEventListener('click', () => {
  toggleSound(soundIsOn)
  soundIsOn = !soundIsOn
} )

themeImg.addEventListener('click', changeTheme)
ResultButton.addEventListener('click', appendResults)

export {newID} 

