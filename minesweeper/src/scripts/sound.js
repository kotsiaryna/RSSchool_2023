
import click from '../assets/sounds/click.mp3'
import win from '../assets/sounds/win.mp3'
import loose from '../assets/sounds/loose.mp3'
import { soundImg } from '../tumblers'

export const winSound = new Audio (win)
export const looseSound = new Audio(loose)
export const clickSound = new Audio(click)


export function toggleSound(isOn) {

 soundImg.classList.toggle('sound__img_on')
 soundImg.classList.toggle('sound__img_off')

 if(isOn) {
    clickSound.muted = true
    winSound.muted = true
    looseSound.muted = true
 } else {
   clickSound.muted = false
   winSound.muted = false
   looseSound.muted = false
 }

}




