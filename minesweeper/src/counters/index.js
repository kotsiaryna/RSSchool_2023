import './style.scss'
import createElement from '../utils/createElement'
import { options } from '../game/index'

const Counters = createElement('div', 'count__wrapper')

const mineCounter = createElement('div', 'mine')
const mineImg = createElement('div', 'mine__img')
export const mineNumberEl = createElement('span', 'mine__number', options.size)
mineCounter.append(mineImg, mineNumberEl)

const flagCounter = createElement('div', 'flag')
const flagImg = createElement('div', 'flag__img')
export const flagNumberEl = createElement('span', 'flag__number', '0')
flagCounter.append(flagImg, flagNumberEl)

const timeCounter = createElement('div', 'time')
const timeText = createElement('div', 'time__img')
export const timeValue = createElement('span', 'time__value', '00 : 00')
timeCounter.append(timeText, timeValue)

const clickCounter = createElement('div', 'click')
const clickImg = createElement('div', 'click__img')
export const clickNumber = createElement('span', 'click__value', '0')
clickCounter.append(clickImg, clickNumber)

Counters.append(mineCounter, flagCounter, timeCounter, clickCounter)

export default Counters

