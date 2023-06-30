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
        // this.levelID = 1;
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
                const id = target?.children[1].textContent?.split(' ').at(-1);

                if (id) this.openNextLevel(+id - 1);
            }
        };
        this.makeView.setCallback(callback);
    }

    public openNextLevel(id?: Level['id']): void {
        const current = this.levels.findIndex((el) => el.getHtmlElement().classList.contains('active'));
        const next = id ?? current + 1;
        console.log(next);
        app.HTMLEditor.clearSofa();
        app.HTMLEditor.appendAnimals(levels[next]);

        app.task.textContent = levels[next].task;
        app.imgTask.innerHTML = levels[next].tableCode;
        app.input.value = '';
        if (app.cssPre.firstElementChild) app.cssPre.firstElementChild.textContent = '';
        this.levels.forEach((element) => {
            element.getHtmlElement().classList.remove('active');
        });
        this.levels[next].getHtmlElement().classList.add('active');
    }
}
