import './style.scss'
import createElement from "../utils/createElement";

const Choice = createElement('div', 'choice')

const sizeWrapper = createElement('div', 'size')

const sizeLabel = createElement('label', 'size__label', 'Choose size:')
sizeLabel.for = 'size'

export const sizeSelect = createElement('select', 'size__select')
sizeSelect.id = 'size'

const sizes = ['10 x 10', '15 x 15', '25 x 25']

for(let i = 0; i < 3; i++) {
  const opt = createElement('option', 'size__opt', sizes[i])
  opt.value = sizes[i].slice(0,2)
  sizeSelect.append(opt)
}
console.dir(sizeSelect.value)
sizeWrapper.append(sizeLabel, sizeSelect)

const mineWrapper = createElement('div', 'mines')
const mineLabel = createElement('label', 'mines__label', 'Number of mines:')
mineLabel.for = 'mine'
export const mineInput = createElement('input', 'mines__input')
mineInput.type = 'range'
mineInput.id = 'mine'
mineInput.value = 10
mineInput.min = '10'
mineInput.max = '99'
mineLabel.textContent += ` ${mineInput.value}`
mineWrapper.append(mineLabel, mineInput)

Choice.append(sizeWrapper, mineWrapper)

export default Choice
