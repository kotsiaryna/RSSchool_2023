const burgerBtn = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const background = document.querySelector('.background')
const body = document.querySelector('body') 
const menuList = document.querySelector('.menu__list')
const burgerLines = [...document.querySelectorAll('.burger__line')]

burgerBtn.addEventListener('click', toggleMenu)

function toggleMenu () {
  menu.classList.toggle('menu_open')
  burgerBtn.classList.toggle('burger_transformed')
  background.classList.toggle('background_visible')
  body.classList.toggle('no-scroll')
  if(window.location.href.includes('pets')) {
    burgerLines.forEach(el => el.classList.toggle('burger__line_dark'))
  }
  
 
}
background.addEventListener('click', toggleMenu)

menuList.addEventListener('click', (event) => {
  if(event.target.classList.contains('menu__item') ||event.target.parentElement.classList.contains('menu__item') ) {
   toggleMenu()
  }
} )

