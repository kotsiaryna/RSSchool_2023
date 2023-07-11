import './levels.scss';
import { Elem } from '../../../types/index';
import View from '../view';
import LevelListView from './level-list-view';
import LevelHintsView from './level-hints-view';
import ElementCreator from '../../../utils/createElement';
import { levels } from './levels';
import { app } from '../../..';
import hljs from 'highlight.js';
import { burgerBtnClass, levelsClass } from '../../classes';

export default class LevelsView extends View {
    public levelList = new LevelListView();
    public levelHints = new LevelHintsView();
    constructor() {
        const options: Elem = {
            tag: 'section',
            classNames: ['level'],
        };
        super(options);
        this.addElements();
        this.addHintBtnCallback();
        this.addLevelsCallback();
    }

    private addElements(): void {
        this.makeView.addInnerElement(this.levelList.getHtmlElement());
        this.makeView.addInnerElement(this.levelHints.getHtmlElement());

        const resetCallback = (): void => {
            this.levelList.levels.forEach((el) => {
                el.getHtmlElement().classList.remove('done');
                el.getHtmlElement().classList.remove('hint');
            });
            this.levelList.openNextLevel(0);
            localStorage.removeItem('doneLevels');
            localStorage.removeItem('hintLevels');
        };

        const resetButton = new ElementCreator({
            tag: 'div',
            classNames: ['button', 'reset-btn'],
            textContent: 'Reset',
            callback: resetCallback,
        });
        this.levelHints.makeView.addInnerElement(resetButton.getElement());
    }
    private addHintBtnCallback(): void {
        const hintCallback: Elem['callback'] = (e) => {
            const hintBtn = e.target as HTMLElement;
            if (hintCallback) hintBtn.removeEventListener('click', hintCallback);
            const activeLevelIndex = this.levelList.levels.findIndex((el) =>
                el.getHtmlElement().classList.contains('active')
            );
            this.levelList.levels[activeLevelIndex].getHtmlElement().classList.add('hint');
            const hint = levels[activeLevelIndex].hint;
            app.input.textContent = '';
            app.input.classList.add('hidden');
            if (app.cssPre.firstChild) app.cssPre.firstChild.textContent = '';
            let delay = 0;
            for (let i = 0; i < hint.length; i++) {
                delay += 300;
                setTimeout(() => {
                    app.input.value += hint[i];
                    if (app.cssPre.firstChild) {
                        app.cssPre.firstChild.textContent += hint[i];
                        hljs.highlightAll();
                    }
                }, delay);
            }
            if (hintCallback) setTimeout(() => hintBtn.addEventListener('click', hintCallback), delay);
            app.input.classList.remove('hidden');
            app.input.focus();

            const hintLevels = localStorage.getItem('hintLevels');
            if (hintLevels) {
                const hintArr = JSON.parse(hintLevels);
                hintArr.push(activeLevelIndex);
                localStorage.setItem('hintLevels', JSON.stringify(hintArr));
            } else {
                localStorage.setItem('hintLevels', JSON.stringify([activeLevelIndex]));
            }
        };
        this.levelHints.hintBtn.setCallback(hintCallback);
    }
    private addLevelsCallback(): void {
        const levelsCallback: Elem['callback'] = () => {
            const burgerBtn = app.game.burgerBtn.getElement();
            if (burgerBtn.classList.contains(burgerBtnClass.closed)) {
                burgerBtn.classList.remove(burgerBtnClass.closed);
                burgerBtn.classList.add(burgerBtnClass.opened);
                app.levels.getHtmlElement().classList.remove(levelsClass.opened);
            }
        };
        this.makeView.setCallback((e) => levelsCallback(e));
    }
}
