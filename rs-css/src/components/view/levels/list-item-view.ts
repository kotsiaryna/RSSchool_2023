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
        const elements = [this.levelText.getElement(), this.checkmark.getElement(), this.HelpText.getElement()];
        this.addElements(elements);
    }

    private addElements(elements: HTMLElement[]): void {
        elements.forEach((el) => this.makeView.addInnerElement(el));
    }
}
