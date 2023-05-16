import { start } from ".."
import { timeValue } from "../counters"


function timer() {
  let seconds = window.end - start
  let minutes = Math.trunc(seconds / 60)
  minutes = minutes < 10 ? '0' + minutes : minutes
  let sec = seconds % 60
  sec = sec < 10 ? '0' + sec : sec
  
  timeValue.textContent = `${minutes} : ${sec}`
  window.end++ 
}

export default timer