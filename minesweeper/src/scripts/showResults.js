import { noResultMessage, resultList } from "../Results"
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
  let results = getResults()
  
  if(!results) {
    ResultButton.after(noResultMessage)
  } else {
    ResultButton.after(resultList)
    for(let i = 0; i < results.length; i++) {
      let result = createElement('li', 'result__item', `${results.length - i}. ${results[i]}`)
      resultList.prepend(result)
    }
  }
  ResultButton.removeEventListener('click', appendResults)

}