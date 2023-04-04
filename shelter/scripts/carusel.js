import pets from './pets.json' assert { type: "json" }

const rightBtn = document.querySelector('.arrow_right')
const leftBtn = document.querySelector('.arrow_left')

const sliderCont = document.querySelector('.slider__inner')
const leftItems = document.querySelector('.items_left')
const rightItems = document.querySelector('.items_right')
const activeItems = document.querySelector('.items_active')

// number of cards in slider
let cardsNumber

const mediaQueryDesktop = window.matchMedia('(min-width:1101px)')
const mediaQueryTablet = window.matchMedia('(min-width:721px) and (max-width:1100px)')
const mediaQueryMobile = window.matchMedia('(max-width:720px)')


if(mediaQueryDesktop.matches) {
  cardsNumber = 3
}
if(mediaQueryTablet.matches) {
  cardsNumber = 2
}
if(mediaQueryMobile.matches) {
  cardsNumber = 1
}
const matchMedia = (e, n) => {
  if(e.matches) {
    cardsNumber = n
    activeItems.innerHTML = ''
    rightItems.innerHTML = ''
    leftItems.innerHTML = ''
    createActiveCards(n)
  }
}

mediaQueryDesktop.addEventListener('change', (e) => matchMedia(e,3))
mediaQueryTablet.addEventListener('change', (e) => matchMedia(e,2))
mediaQueryMobile.addEventListener('change', (e) => matchMedia(e,1))


// create active cards and append them on load 
function createActiveCards(n) {
  let activeCards = getRandomCards([])

  for (let i = 0; i <n; i++) {
    activeItems.append(createCard(activeCards[i]))
  }
} 

createActiveCards(cardsNumber)

const moveLeft = () => {
  sliderCont.classList.add('move_left');
  let activeCards = [...activeItems.querySelectorAll('.card')].map(card => pets.findIndex(el => el.name === card.children[1].textContent))
  
  if(!rightItems.innerHTML) {
    let newCards = getRandomCards(activeCards)
    for (let i = 0; i <cardsNumber; i++) {
    rightItems.append(createCard(newCards[i]))
    }
  }
  rightBtn.removeEventListener('click', moveRight)
  leftBtn.removeEventListener('click', moveLeft)

}

const moveRight = ()=> {
  sliderCont.classList.add('move_right')
  let activeCards = [...activeItems.querySelectorAll('.card')].map(card => pets.findIndex(el => el.name === card.children[1].textContent))

  if(!leftItems.innerHTML) {
    let newCards = getRandomCards(activeCards)
    for (let i = 0; i < cardsNumber; i++) {
     leftItems.append(createCard(newCards[i]))
    }
  }

  rightBtn.removeEventListener('click', moveRight)
  leftBtn.removeEventListener('click', moveLeft)

}

rightBtn.addEventListener('click', moveRight)
leftBtn.addEventListener('click', moveLeft)

sliderCont.addEventListener('animationend', (animationEvent) => {
  if(animationEvent.animationName === 'moveLeft') {
    sliderCont.classList.remove('move_left')
    leftItems.innerHTML = activeItems.innerHTML
    activeItems.innerHTML = rightItems.innerHTML
    rightItems.innerHTML = ''

  } else {
    sliderCont.classList.remove('move_right')
    rightItems.innerHTML = activeItems.innerHTML
    activeItems.innerHTML = leftItems.innerHTML
    leftItems.innerHTML = ''
  }

  rightBtn.addEventListener('click', moveRight)
  leftBtn.addEventListener('click', moveLeft)
})


// get random number
function getRandomNum() {     
  return Math.trunc(Math.random()*8)
}

// get array with correct random numbers
function getRandomCards(currCards) {
  let nextCards = []
  let num = 3
  for (let i = 0; i < num; i++) {
    let random = getRandomNum();
   if(!currCards.includes(random) && !nextCards.includes(random)) {
      nextCards.push(random)
    } else {
      i--
    }
  }
  return nextCards
}

//create new card
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