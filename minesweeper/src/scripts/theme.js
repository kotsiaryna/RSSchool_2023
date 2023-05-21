import { themeImg } from "../tumblers";
import { BODY } from "..";
import Game from "../game";

function changeTheme () {
  themeImg.classList.toggle('theme__img_light')
  themeImg.classList.toggle('theme__img_dark')

  
  BODY.classList.toggle('dark')
  Array.from(document.querySelectorAll('.btn')).forEach(el => el.classList.toggle('dark'));


}

export default changeTheme