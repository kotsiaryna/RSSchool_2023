import pets from './pets.json' assert {type: "json"}

const cont = document.querySelector('.items_active') ?? document.querySelector('.gallery__inner')
const popup = document.querySelector('.popup') 
const popupWindow = document.querySelector('.popup__window') 
const body = document.querySelector('body')
const closeBtn = document.querySelector('.popup__btn')

const openPopup = (event) => {
  let target = event.target;
  let id
  if(target.classList.contains('card') || target.parentElement.classList.contains('card')) {
    popup.classList.remove('hidden');
    body.classList.add('no-scroll');
    id = pets.findIndex(el => el.name === target.closest('.card').children[1].textContent)
  }
  fillPopup(id)
}

const closePopup = () => {
  popup.classList.add('hidden')
  body.classList.remove('no-scroll')
}

cont.addEventListener('click', (e) => openPopup(e))
closeBtn.addEventListener('click', closePopup)

popup.addEventListener('click', (e) => {
  if(!e.composedPath().includes(popupWindow)) {
    closePopup()
  }
})

function fillPopup (id) {
  popup.querySelector('.popup__img').src = pets[id].img
  popup.querySelector('.popup__img').alt = pets[id].name
  popup.querySelector('.popup__heading').textContent = pets[id].name
  popup.querySelector('.popup__subheading').textContent = `${pets[id].type} - ${pets[id].breed}` 
  popup.querySelector('.popup__text').textContent = pets[id].description 
  popup.querySelector('.popup__age').textContent = pets[id].age 
  popup.querySelector('.popup__inoc').textContent = pets[id].inoculations 
  popup.querySelector('.popup__disease').textContent = pets[id].diseases 
  popup.querySelector('.popup__parasites').textContent = pets[id].parasites
}