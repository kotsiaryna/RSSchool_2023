import View from '../view';
import { Elem } from '../../../types/index';
import ListItemView from './list-item-view';
import { levels } from './levels';
import { app } from '../../../index';

export default class LevelListView extends View {
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['level__list'],
            textContent: 'Choose a level',
        };
        super(options);
        this.addElements();
        this.addListener();
    }

    private addElements(): void {
        for (let i = 1; i <= 10; i++) {
            const item = new ListItemView();
            item.levelText.setTextContent(`Level ${i}`);
            this.makeView.addInnerElement(item.getHtmlElement());
        }
    }

    private addListener(): void {
        const callback = (e: Event): void => {
            if (e.target instanceof HTMLElement && e.target?.classList.contains('list__item')) return;
            let target;
            if (e.target instanceof HTMLElement) {
                target = e.target.closest('.list__item');
            }
            const id = target?.children[1].textContent?.split(' ').at(-1);
            if (id) {
                const level = levels.find((el) => el.id === +id) || levels[0];
                app.markup.innerHTML = level.code;
                app.task.textContent = level.task;
                app.imgTask.innerHTML = level.tableCode;
            }
        };
        this.makeView.setCallback(callback);
    }
}
