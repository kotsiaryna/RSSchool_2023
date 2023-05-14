import './style.scss'
import '../utils/createElement'
import createElement from '../utils/createElement'

const Footer = createElement('footer', 'footer')
const ghLink = createElement('a', 'footer__link', 'My GitHub')
ghLink.href = 'https://github.com/katrin-brest'

const date = createElement('div', 'footer__date', '2023')

Footer.append(ghLink, date)

export default Footer