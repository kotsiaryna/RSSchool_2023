// import hljs from 'highlight.js';
import View from '../view';
import { Elem, Level } from '../../../types/index';
import ListItemView from './list-item-view';
import { levels } from './levels';
import { app } from '../../../index';

export default class LevelListView extends View {
    public levels: ListItemView[] = [];
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
        const activeLevel = localStorage.getItem('level') ?? '1';
        const doneLevels = localStorage.getItem('doneLevels') ?? '';
        const doneLevelsArray: number[] = doneLevels ? JSON.parse(doneLevels) : [];

        const hintLevels = localStorage.getItem('hintLevels') ?? '';
        const hintLevelsArray: number[] = hintLevels ? JSON.parse(hintLevels) : [];

        for (let i = 1; i <= 10; i++) {
            const item = new ListItemView();
            item.levelText.setTextContent(`Level ${i}`);
            this.makeView.addInnerElement(item.getHtmlElement());
            this.levels.push(item);

            if (i == +activeLevel) {
                setTimeout(() => this.openNextLevel(i - 1), 0);
            }
            if (doneLevelsArray && doneLevelsArray.includes(i - 1)) {
                item.getHtmlElement().classList.add('done');
            }
            if (hintLevels && hintLevelsArray.includes(i - 1)) {
                item.getHtmlElement().classList.add('hint');
            }
        }
    }

    private addListener(): void {
        const callback = (e: Event): void => {
            // if (e.target instanceof HTMLElement && e.target?.classList.contains('list__item')) return; ??
            let target: HTMLElement | null;
            if (e.target instanceof HTMLElement) {
                target = e.target.closest('.list__item');
                const id = target?.children[0].textContent?.split(' ').at(-1);

                if (id) this.openNextLevel(+id - 1);
            }
        };
        this.makeView.setCallback(callback);
    }

    public openNextLevel(id?: Level['id']): void {
        const current = this.levels.findIndex((el) => el.getHtmlElement().classList.contains('active'));
        const next = id ?? current + 1;

        app.HTMLEditor.clearSofa();
        app.HTMLEditor.appendAnimals(levels[next]);

        app.task.textContent = levels[next].task;
        app.imgTask.innerHTML = levels[next].tableCode;
        app.input.value = '';
        app.input.classList.remove('hidden');
        if (app.cssPre.firstElementChild) app.cssPre.firstElementChild.textContent = '';
        this.levels.forEach((element) => {
            element.getHtmlElement().classList.remove('active');
        });
        this.levels[next].getHtmlElement().classList.add('active');
        localStorage.setItem('level', `${next + 1}`);
    }

    public markDoneLevel(id: number): void {
        this.levels[id].getHtmlElement().classList.add('done');
    }
    public checkWin(): boolean {
        const doneLevelsCount = this.levels.filter((el) => el.getHtmlElement().classList.contains('done')).length;
        return doneLevelsCount === 10; //change to 10
    }
}
