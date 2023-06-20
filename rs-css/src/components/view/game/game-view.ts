import { Elem } from '../../../types/index';
import ElementCreator from '../../../utils/createElement';
import View from '../view';
import EditorView from './editor/editor-view';
import TaskImgView from './task/task-img-view';
import TaskTextView from './task/task-text-view';

export default class GameView extends View {
    public textTask: TaskImgView;
    public imgTask: TaskImgView;

    constructor() {
        const options: Elem = {
            tag: 'section',
            classNames: ['game'],
        };
        super(options);
        this.textTask = new TaskTextView();
        this.imgTask = new TaskImgView();
        this.addElements();
    }

    private addElements(): void {
        const gameHeaderOptions: Elem = {
            tag: 'h1',
            classNames: ['game__heading'],
            textContent: 'RS-CSS',
        };
        const GameHeader = new ElementCreator(gameHeaderOptions);
        this.makeView.addInnerElement(GameHeader.getElement());
        this.makeView.addInnerElement(this.textTask.getHtmlElement());
        this.makeView.addInnerElement(this.imgTask.getHtmlElement());
        const GameEditor = new EditorView();
        this.makeView.addInnerElement(GameEditor.getHtmlElement());
    }
}
