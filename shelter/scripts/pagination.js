// import { getRandomNum } from "./carusel.js";
import pets from './pets.json' assert { type: "json" }

const gallery = document.querySelector('.gallery__inner')
const startBtn = document.querySelector('.start-btn')
const endBtn = document.querySelector('.end-btn')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const pageBtn = document.querySelector('.number-btn')

// create 48 arr
function getRandomNum() {     
  return Math.trunc(Math.random()*8)
}
const arr = []

const getRandomSlot = () => {
  let slot = []
  for(let i = 0; i < 8; i++) {
    let card = getRandomNum()
    if(!slot.includes(card)) {
      slot.push(card)
    } else {
      i--
    }
  }
  return slot
}

for(let i = 0; i < 6; i++) {
  arr.push(...getRandomSlot())
}
console.log(arr)
// 

// media queries
const mediaQueryDesktop = window.matchMedia('(min-width:1121px)')
const mediaQueryTablet = window.matchMedia('(min-width:741px) and (max-width:1120px)')
const mediaQueryMobile = window.matchMedia('(max-width:740px)')

let cardsNumber

if(mediaQueryDesktop.matches) {
  cardsNumber = 8
}
if(mediaQueryTablet.matches) {
  cardsNumber = 6
}
if(mediaQueryMobile.matches) {
  cardsNumber = 3
}

mediaQueryDesktop.addEventListener('change', (e)=> {
  if(e.matches) {
    console.log('desktop!!!')
    cardsNumber = 8
    gallery.innerHTML = ""
    pageBtn.textContent = +pageBtn.textContent > 6 ? 6 : +pageBtn.textContent
    fillGallery(cardsNumber, +pageBtn.textContent)
    
  }
 })

mediaQueryTablet.addEventListener('change', (e)=> {
  if(e.matches) {
    cardsNumber = 6
    gallery.innerHTML = ""
    pageBtn.textContent = +pageBtn.textContent > 8 ? 8 : +pageBtn.textContent
    fillGallery(cardsNumber, +pageBtn.textContent)
    if(+pageBtn.textContent !== 48/ cardsNumber) {
      endBtn.disabled = false
      nextBtn.disabled = false
    }
  }
})

mediaQueryMobile.addEventListener('change', (e)=> {
  if(e.matches) {
    cardsNumber = 3
    gallery.innerHTML = ""
    fillGallery(cardsNumber, +pageBtn.textContent)
    if(+pageBtn.textContent !== 48/ cardsNumber) {
      endBtn.disabled = false
      nextBtn.disabled = false
    }

  }

})




function fillGallery (n, page = 1) {
  for(let i = n* (page-1); i < n*page; i++) {
    gallery.append(createCard(arr[i])) 
    console.log(i)
  }
}

fillGallery(cardsNumber)


// хорошо бы запихнуть в модуль куда
function createCard (num) {
  let card = document.createElement('div');
  card.classList.add('card')

  let cardImg = document.createElement('img')
  cardImg.className = 'card__img'
  cardImg.src = pets[num].img
  cardImg.alt = pets[num].name
  
  let cardHeading = document.createElement('h3')
  cardHeading.className = 'card__heading'
  cardHeading.textContent = pets[num].name

  let cardBtn = document.createElement('button')
  cardBtn.className = 'card__btn'
  cardBtn.textContent = 'Learn more'

  card.append(cardImg, cardHeading,cardBtn)
  return card
}
// change page
nextBtn.addEventListener('click', ()=> {
  let page = +pageBtn.textContent + 1
  gallery.innerHTML = ''
  fillGallery(cardsNumber, page)
  pageBtn.textContent = page
  if (page === 48 / cardsNumber) {
    nextBtn.disabled = true
    endBtn.disabled = true
  }
  prevBtn.disabled = false
  startBtn.disabled = false

})

prevBtn.addEventListener('click', ()=> {
  let page = +pageBtn.textContent - 1
  gallery.innerHTML = ''
  fillGallery(cardsNumber, page)
  pageBtn.textContent = page
  if(page === 1 ) {
    prevBtn.disabled = true
    startBtn.disabled = true
  }
  nextBtn.disabled = false
  endBtn.disabled = false
})

startBtn.addEventListener('click', () => {
  gallery.innerHTML = ''
  fillGallery(cardsNumber, 1)
  pageBtn.textContent = 1
  prevBtn.disabled = true
  startBtn.disabled = true
  nextBtn.disabled = false
  endBtn.disabled = false
})

endBtn.addEventListener('click', () => {
  gallery.innerHTML = ''
  fillGallery(cardsNumber, 48/cardsNumber)
  pageBtn.textContent = 48/cardsNumber
  nextBtn.disabled = true
  endBtn.disabled = true
  prevBtn.disabled = false
  startBtn.disabled = false

})


