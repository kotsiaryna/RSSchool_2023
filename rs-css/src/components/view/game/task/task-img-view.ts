import { Elem, Level } from '../../../../types/index';
import ElementCreator from '../../../../utils/createElement';
import { levels } from '../../levels/levels';
import View from '../../view';

export default class TaskImgView extends View {
    private table = new ElementCreator({ tag: 'sofa', classNames: ['table'] });
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['game__img-task'],
        };
        super(options);
        this.appendLevelTask(levels[0]);
    }

    private appendLevelTask(level: Level): void {
        this.makeView.getElement().innerHTML = level.tableCode;
    }
}
