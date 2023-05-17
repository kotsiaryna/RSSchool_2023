import './style.scss'
import createElement from '../utils/createElement'

const Buttons = createElement('div','button__cont')

export const restartButton = createElement('div', 'btn restart-btn', 'Restart')

export const saveButton = createElement('div', 'btn save-btn', 'Save')

Buttons.append(restartButton, saveButton)

export default Buttons