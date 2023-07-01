import './levels.scss';
import { Elem } from '../../../types/index';
import View from '../view';
import LevelListView from './level-list-view';
import LevelHintsView from './level-hints-view';
import ElementCreator from '../../../utils/createElement';
import { levels } from './levels';
import { app } from '../../..';
import hljs from 'highlight.js';

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
        };

        const resetButton = new ElementCreator({
            tag: 'div',
            classNames: ['button', 'reset-btn'],
            textContent: 'Reset',
            callback: resetCallback,
        });
        this.makeView.addInnerElement(resetButton.getElement());
    }
    private addHintBtnCallback(): void {
        const hintCallback: Elem['callback'] = () => {
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
            app.input.classList.remove('hidden');
            app.input.focus();
        };
        this.levelHints.hintBtn.setCallback(hintCallback);
    }
}
