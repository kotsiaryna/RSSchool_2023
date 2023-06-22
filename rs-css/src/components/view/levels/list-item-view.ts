import View from '../view';
import { Elem } from '../../../types/index';
import ElementCreator from '../../../utils/createElement';

export default class ListItemView extends View {
    private checkmark = new ElementCreator({ tag: 'span', classNames: ['checkmark'] });
    public levelText = new ElementCreator({ tag: 'span', classNames: ['text'] });
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['list__item'],
        };
        super(options);
        this.addElements();
    }

    private addElements(): void {
        // this.checkmark.getElement().innerHTML =
        this.makeView.addInnerElement(this.checkmark.getElement());
        this.makeView.addInnerElement(this.levelText.getElement());
    }
}
