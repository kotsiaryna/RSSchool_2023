import './style.scss'
import createElement from '../utils/createElement'

const Buttons = createElement('div','button__cont')

export const restartButton = createElement('div', 'restart-btn', 'Restart')

export const saveButton = createElement('div', 'save-btn', 'Save')

Buttons.append(restartButton, saveButton)

export default Buttons