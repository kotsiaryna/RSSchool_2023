import './game.scss';
import { Elem } from '../../../types/index';
import ElementCreator from '../../../utils/createElement';
import View from '../view';
import EditorView from './editor/editor-view';
import TaskImgView from './task/task-img-view';
import TaskTextView from './task/task-text-view';
import { app } from '../../..';

export default class GameView extends View {
    public textTask: TaskTextView;
    public imgTask: TaskImgView;
    public editor: EditorView;
    public burgerBtn: ElementCreator;

    constructor() {
        const options: Elem = {
            tag: 'section',
            classNames: ['game'],
        };
        super(options);
        this.textTask = new TaskTextView();
        this.imgTask = new TaskImgView();
        this.editor = new EditorView();
        this.burgerBtn = this.makeBurgerButton();
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
        this.makeView.addInnerElement(this.editor.getHtmlElement());
        this.makeView.addInnerElement(this.burgerBtn.getElement());
    }

    private makeBurgerButton(): ElementCreator {
        const burgerBtnCallback: Elem['callback'] = () => {
            const burgerBtn = this.burgerBtn.getElement();
            if (burgerBtn.classList.contains('burger-btn_open')) {
                burgerBtn.classList.remove('burger-btn_open');
                burgerBtn.classList.add('burger-btn_close');
                app.levels.getHtmlElement().classList.add('opened');
            } else {
                burgerBtn.classList.remove('burger-btn_close');
                burgerBtn.classList.add('burger-btn_open');
                app.levels.getHtmlElement().classList.remove('opened');
            }
        };

        const options: Elem = {
            tag: 'div',
            classNames: ['burger-btn', 'burger-btn_open'],
            callback: burgerBtnCallback,
        };

        this.burgerBtn = new ElementCreator(options);
        return this.burgerBtn;
    }
}
