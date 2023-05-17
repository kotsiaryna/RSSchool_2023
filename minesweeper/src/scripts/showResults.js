import { resultList } from "../Results"
import ResultButton from "../Results"
import createElement from "../utils/createElement"

function getResults () {
  let results = localStorage.getItem('result') 
  
  if(results) {
    results = JSON.parse(results).map(el => `Time: ${el.time}. Clicks: ${el.clicks}. ${el.win ? 'win' : 'loose'}`)
  } 
  console.log(results)
  return results
}

export function appendResults () {
  resultList.innerHTML = ''
  let results = getResults()
  
  if(!results) {
    resultList.textContent = 'No results'
    ResultButton.after(resultList)
  } else {
    resultList.textContent = ''
    ResultButton.after(resultList)
    for(let i = 0; i < results.length; i++) {
      let result = createElement('li', 'result__item', `${results.length - i}. ${results[i]}`)
      resultList.prepend(result)
    }
  }
  
}

function hideResults () {
  ResultButton.textContent = 'Show results'
  resultList.innerHTML = ''
}

export function toggleResultButton () {
  if(ResultButton.textContent === 'Show results') {
    ResultButton.textContent = 'Hide results'
    appendResults()
  } else {
    hideResults()
  }
}