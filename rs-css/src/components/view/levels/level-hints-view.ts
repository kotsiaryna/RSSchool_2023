import View from '../view';
import { Elem } from '../../../types/index';
import ElementCreator from '../../../utils/createElement';

export default class LevelHintsView extends View {
    public hintBtn = new ElementCreator({ tag: 'div', classNames: ['button', 'hint__bt'], textContent: 'Hint' });
    public hintText = new ElementCreator({ tag: 'div', classNames: ['hint__text'] });

    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['level__hint'],
            textContent: 'Need help?',
        };
        super(options);
        this.addElements();
    }

    private addElements(): void {
        this.makeView.addInnerElement(this.hintBtn.getElement());
        this.makeView.addInnerElement(this.hintText.getElement());
    }
}
