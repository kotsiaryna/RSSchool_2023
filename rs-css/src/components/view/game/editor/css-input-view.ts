import { Elem } from '../../../../types/index';
import View from '../../view';

export default class CssInputView extends View {
    public answer = '';
    constructor() {
        const options: Elem = {
            tag: 'input',
            classNames: ['input', 'css__input'],
        };
        super(options);
    }
}
