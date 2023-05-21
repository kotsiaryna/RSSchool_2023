
import Choice, { mineInput, sizeSelect } from './choice'
import Header from './header/index'
import Game, { fillGameField, options } from './game/index'
import Counters from './counters/index'
import Buttons, { saveButton, restartButton } from './buttons/index'
import Tumblers from './tumblers'
import ResultButton from './Results'

import placeMines from './scripts/placeMines'
import openCell from './scripts/openCells'

import {setFlag} from './scripts/setFlags'

import restartGame from './scripts/restart'

import timer from './scripts/timer'
import clickCounter from './scripts/clickCounter'

import { clickSound, toggleSound } from './scripts/sound'
import { soundImg } from './tumblers'

import { themeImg } from './tumblers'

import changeTheme from './scripts/theme'
import GameOverMessage from './gameover'

import {toggleResultButton } from './scripts/showResults'
import {saveGame, getGameState} from './scripts/saveGame'

export const BODY = document.querySelector('body')

BODY.append( Header, Buttons, Tumblers, GameOverMessage, Counters, Game, Choice, ResultButton)

document.addEventListener('DOMContentLoaded', getGameState)

// global
export const cells = [...document.querySelectorAll('.cell')]
export const start = 0
window.end = 0
//
 
if(!localStorage.getItem('game')) {
  Game.addEventListener('click', placeMines, {once:true})
}

export const open = (e) => {
 if(e.target.classList.contains('cell') && !e.target.classList.contains('flagged')) {
    clickCounter()
    openCell(e.target, size)
    clickSound.play()
  }
}

Game.addEventListener('click', open)

export const flag = (e) => setFlag(e)
Game.addEventListener('contextmenu', flag)

export let timerID = setInterval(timer, 1000)

let newID
restartButton.addEventListener('click', () => {
  restartGame()
  if(newID) {
    clearInterval(newID)
  } else {
    clearInterval(timerID)
  }
  
  newID = setInterval(timer, 1000)
  Game.addEventListener('click', (e) => placeMines(e), {once:true})
  Game.addEventListener('contextmenu', flag)
  Game.addEventListener('click', open)
} )

let soundIsOn = true

soundImg.addEventListener('click', () => {
  toggleSound(soundIsOn)
  soundIsOn = !soundIsOn
} )

themeImg.addEventListener('click', changeTheme)
ResultButton.addEventListener('click', toggleResultButton)

saveButton.addEventListener('click', saveGame)

export {newID} 

// выбор размера поля

sizeSelect.addEventListener('change', (e) => {
  options.size = +e.target.value
  Game.innerHTML = ''
  fillGameField()
  Game.className = `game game_${options.size}`
  restartGame()
  
  Game.removeEventListener('contextmenu', flag)
  Game.removeEventListener('click', open)
  Game.removeEventListener('click', placeMines, {once:true})

  Game.addEventListener('click', placeMines, {once:true})
  Game.addEventListener('contextmenu', flag)
  Game.addEventListener('click', open)
  if(newID) {
    clearInterval(newID)
  } else {
    clearInterval(timerID)
  }
  
  newID = setInterval(timer, 1000)
})

// выбор количества мин
mineInput.addEventListener('change', (e) => {
  e.target.previousSibling.textContent = e.target.previousSibling.textContent.replace(/[\d]+/, e.target.value)
  options.mines = +e.target.value
  restartGame()
  Game.removeEventListener('contextmenu', flag)
  Game.removeEventListener('click', open)
  Game.removeEventListener('click', placeMines, {once:true})

  Game.addEventListener('click', placeMines, {once:true})
  Game.addEventListener('contextmenu', flag)
  Game.addEventListener('click', open)
  if(newID) {
    clearInterval(newID)
  } else {
    clearInterval(timerID)
  }
  
  newID = setInterval(timer, 1000)
})