import './style.scss'
import createElement from '../utils/createElement'

const Tumblers = createElement('div', 'tumble')

const soundTumbler = createElement('div', 'sound')
const soundText = createElement('span', 'sound__text', 'Sound: ')
export const soundImg = createElement('div', 'sound__img sound__img_on')

soundTumbler.append(soundText, soundImg)

Tumblers.append(soundTumbler)

export default Tumblers