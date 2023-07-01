import './footer.scss';
import { Elem } from '../../../types';
import ElementCreator from '../../../utils/createElement';
import View from '../view';
import { logo } from './logo';

export default class FooterView extends View {
    constructor() {
        const options: Elem = {
            tag: 'footer',
            classNames: ['footer'],
        };
        super(options);
        this.addElements();
    }

    private addElements(): void {
        const ghLink = new ElementCreator({
            tag: 'a',
            classNames: ['footer__gh-link'],
            textContent: 'My GitHub',
        }).getElement() as HTMLAnchorElement;
        ghLink.href = 'https://github.com/katrin-brest';
        ghLink.target = 'blank';

        const year = new ElementCreator({ tag: 'span', classNames: ['footer__year'], textContent: '2023' });

        const rsLink = new ElementCreator({
            tag: 'a',
            classNames: ['footer__rs-link'],
        }).getElement() as HTMLAnchorElement;
        rsLink.href = 'https://rs.school/js/';
        rsLink.target = 'blank';
        rsLink.innerHTML = logo;

        // const rsLogo = new ElementCreator({
        //     tag: 'img',
        //     classNames: ['footer__logo'],
        // }).getElement() as HTMLImageElement;
        // rsLogo.src = '../../../assets/icons/rs.svg';

        // rsLink.append(rsLogo);
        this.makeView.addInnerElement(ghLink);
        this.makeView.addInnerElement(year.getElement());
        this.makeView.addInnerElement(rsLink);
    }
}
