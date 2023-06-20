import { Elem } from '../../../../types/index';
import View from '../../view';

export default class TaskImgView extends View {
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['game__img-task'],
        };
        super(options);
    }
}
