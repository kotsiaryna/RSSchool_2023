// import hljs from 'highlight.js';
import View from '../view';
import { Elem, Level } from '../../../types/index';
import ListItemView from './list-item-view';
import { levels } from './levels';
import { app } from '../../../index';

export default class LevelListView extends View {
    private levels: ListItemView[] = [];
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
            this.levels.push(item);
            if (i === 1) {
                item.getHtmlElement().classList.add('active');
            }
        }
    }

    private addListener(): void {
        const callback = (e: Event): void => {
            if (e.target instanceof HTMLElement && e.target?.classList.contains('list__item')) return;
            let target: HTMLElement | null;
            if (e.target instanceof HTMLElement) {
                target = e.target.closest('.list__item');

                app.HTMLEditor.clearSofa();

                const id = target?.children[1].textContent?.split(' ').at(-1);
                let level: Level;
                if (id) {
                    level = levels.find((el) => el.id === +id) || levels[0];
                    app.HTMLEditor.appendAnimals(level);

                    app.task.textContent = level.task;
                    app.imgTask.innerHTML = level.tableCode;

                    this.levels.forEach((element) => {
                        element.getHtmlElement().classList.remove('active');
                    });
                    this.levels[+id - 1].getHtmlElement().classList.add('active');
                }
            }
        };
        this.makeView.setCallback(callback);
    }
}
