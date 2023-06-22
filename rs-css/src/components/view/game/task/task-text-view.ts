import { Elem } from '../../../../types/index';
import View from '../../view';

export default class TaskTextView extends View {
    constructor() {
        const options: Elem = {
            tag: 'h2',
            classNames: ['game__text-task'],
            textContent: 'Task will be here',
        };
        super(options);
    }
}
