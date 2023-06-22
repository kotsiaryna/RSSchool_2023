import './levels.scss';
import { Elem } from '../../../types/index';
import View from '../view';
import LevelListView from './level-list-view';
import LevelHintsView from './level-hints-view';

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
    }

    private addElements(): void {
        this.makeView.addInnerElement(this.levelList.getHtmlElement());
        this.makeView.addInnerElement(this.levelHints.getHtmlElement());
    }
}
