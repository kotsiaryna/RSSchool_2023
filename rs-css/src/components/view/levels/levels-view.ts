import { Elem } from '../../../types/index';
import View from '../view';

export default class LevelsView extends View {
    constructor() {
        const options: Elem = {
            tag: 'section',
            classNames: ['levels'],
        };
        super(options);
    }
}
