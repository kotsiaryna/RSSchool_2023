import { Elem, Level } from '../../../../types/index';
import { levels } from '../../levels/levels';
import View from '../../view';

export default class HTMLMarkupView extends View {
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['editor__markup'],
        };
        super(options);
        this.addStartLevel(levels[0]);
    }
    private addStartLevel(level: Level): void {
        this.makeView.getElement().innerHTML = level.code;
    }
}
