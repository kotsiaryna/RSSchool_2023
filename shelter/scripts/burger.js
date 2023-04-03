const burgerBtn = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const background = document.querySelector('.background')
const body = document.querySelector('body') 
const menuList = document.querySelector('.menu__list')
const burgerLines = [...document.querySelectorAll('.burger__line')]

burgerBtn.addEventListener('click', toggleMenu) // toggle on burger click
background.addEventListener('click', toggleMenu)  // close on background click
menuList.addEventListener('click', (event) => {  //close on link click
  if(event.target.classList.contains('menu__item') || event.target.parentElement.classList.contains('menu__item') ) {
   toggleMenu()
  }
} )

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth > 767 && menu.classList.contains('menu_open')) {
    toggleMenu()
  }
})

function toggleMenu () {
  menu.classList.toggle('menu_open')
  burgerBtn.classList.toggle('burger_transformed')
  background.classList.toggle('background_visible')
  body.classList.toggle('no-scroll')
  
  if(window.location.href.includes('pets')) {
    burgerLines.forEach(el => el.classList.toggle('burger__line_dark'))
  }
}