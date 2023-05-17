import createElement from '../utils/createElement'
import './style.scss'

const ResultButton = createElement ('div', 'btn result-btn', 'Show results')

export const resultList = createElement('ul', 'result__list')

export const noResultMessage = createElement('p', 'result__message', 'No results')

export default ResultButton