import './style.scss'
import createElement from '../utils/createElement'

const Tumblers = createElement('div', 'tumble')

const soundTumbler = createElement('div', 'sound')
const soundText = createElement('span', 'sound__text', 'Sound: ')
export const soundImg = createElement('div', 'sound__img sound__img_on')

soundTumbler.append(soundText, soundImg)

const themeTumble = createElement('div', 'theme')
const themeText = createElement('span', 'theme__text', 'Theme: ')
export const themeImg = createElement('div', 'theme__img theme__img_light')

themeTumble.append(themeText, themeImg)

Tumblers.append(soundTumbler, themeTumble)

export default Tumblers