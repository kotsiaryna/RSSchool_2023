import { Elem, Level } from '../../../../types/index';
import ElementCreator from '../../../../utils/createElement';
import { level1 } from '../../levels/levels';
import View from '../../view';

export default class TaskImgView extends View {
    private table = new ElementCreator({ tag: 'div', classNames: ['table'] });
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['game__img-task'],
        };
        super(options);
        this.appendTable();
        this.appendLevelTask(level1);
    }

    private appendTable(): void {
        this.makeView.addInnerElement(this.table.getElement());
    }

    private appendLevelTask(level: Level): void {
        this.table.getElement().innerHTML = level.tableCode;
    }
}
