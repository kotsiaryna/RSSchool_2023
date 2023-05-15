let flagNumber = 0
function setFlag(event) {
  event.preventDefault()
  const isFlagged = event.target.classList.contains('flagged')
  event.target.classList.toggle('flagged')
  
  flagNumber = isFlagged ? --flagNumber : ++flagNumber
}

export default setFlag