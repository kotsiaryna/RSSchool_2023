import { timeValue, clickNumber } from "../counters"

function getResults (isWin) {
    return  {
    time: timeValue.textContent,
    clicks: clickNumber.textContent,
    win: isWin
  }
  
}

function savetoLocal (isWin) {
  let jsonResults = localStorage.getItem('result')
  let results = jsonResults ? JSON.parse(jsonResults) : []
    if(results.length >= 10) {
    results.shift() 
  }
 
  results.push(getResults(isWin))
  localStorage.setItem('result', JSON.stringify(results))
}

export default savetoLocal