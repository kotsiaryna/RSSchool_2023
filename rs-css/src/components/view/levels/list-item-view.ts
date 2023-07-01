import View from '../view';
import { Elem } from '../../../types/index';
import ElementCreator from '../../../utils/createElement';

export default class ListItemView extends View {
    public checkmark = new ElementCreator({ tag: 'span', classNames: ['checkmark'], textContent: 'done' });
    public levelText = new ElementCreator({ tag: 'span', classNames: ['text'] });
    public HelpText = new ElementCreator({ tag: 'span', classNames: ['help'], textContent: 'with help' });
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['list__item'],
        };
        super(options);
        this.addElements();
    }

    private addElements(): void {
        this.makeView.addInnerElement(this.levelText.getElement());
        this.makeView.addInnerElement(this.checkmark.getElement());
        this.makeView.addInnerElement(this.HelpText.getElement());
    }
}
