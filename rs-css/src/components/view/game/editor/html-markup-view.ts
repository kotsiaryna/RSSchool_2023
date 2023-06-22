import { Elem } from '../../../../types/index';
import View from '../../view';

export default class HTMLMarkupView extends View {
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['editor__markup'],
        };
        super(options);
    }
}
