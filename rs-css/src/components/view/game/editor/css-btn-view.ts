import { Elem } from '../../../../types/index';
import View from '../../view';

export default class CssButtonView extends View {
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['button', 'css__btn'],
            textContent: 'Enter',
        };
        super(options);
    }
}
