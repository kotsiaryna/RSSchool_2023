import { Elem } from '../../../../types/index';
import View from '../../view';

export default class HTMLMarkupView extends View {
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['markup'],
        };
        super(options);
    }
}
