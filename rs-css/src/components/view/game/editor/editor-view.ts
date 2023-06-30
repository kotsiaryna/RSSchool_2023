/* eslint-disable max-lines-per-function */
import './editor.scss';
import { Elem } from '../../../../types/index';
import ElementCreator from '../../../../utils/createElement';
import View from '../../view';
import CssInputView from './css-input-view';
import HTMLMarkupView from './html-markup-view';
import CssButtonView from './css-btn-view';
import hljs from 'highlight.js';
import { app } from '../../../..';
import { levels } from '../../levels/levels';

export default class EditorView extends View {
    public cssInput = new CssInputView();
    public htmlMarkup = new HTMLMarkupView();
    public enterBtn = new CssButtonView();
    public pre = new ElementCreator({ tag: 'pre', classNames: ['editor__pre'] });
    private answer = '';
    private input = this.cssInput.getHtmlElement() as HTMLInputElement;

    constructor() {
        const options: Elem = {
            tag: 'main',
            classNames: ['editor'],
        };
        super(options);
        this.addElements();
        this.addInputHighligh();
        this.addInputListener();
        this.addButtonListener();
    }
    private addElements(): void {
        const css = new ElementCreator({
            tag: 'div',
            classNames: ['editor__css'],
        });
        const html = new ElementCreator({
            tag: 'div',
            classNames: ['editor__html'],
        });

        this.makeView.addInnerElement(
            new ElementCreator({
                tag: 'h3',
                classNames: ['editor__heading', 'css__heading'],
                textContent: 'CSS Editor',
            }).getElement()
        );
        this.makeView.addInnerElement(css.getElement());

        this.makeView.addInnerElement(
            new ElementCreator({
                tag: 'h3',
                classNames: ['editor__heading', 'html__heading'],
                textContent: 'HTML Viewer',
            }).getElement()
        );
        this.makeView.addInnerElement(html.getElement());
        const numbers = new ElementCreator({
            tag: 'div',
            classNames: ['editor__numbers'],
        });
        for (let i = 1; i <= 20; i += 1) {
            numbers.addInnerElement(
                new ElementCreator({ tag: 'span', classNames: ['numbers__item'], textContent: `${i}` }).getElement()
            );
        }
        const cssCode = new ElementCreator({ tag: 'code', classNames: ['hljs', 'language-css'] });
        this.pre.addInnerElement(cssCode.getElement());

        html.addInnerElement(numbers.getElement());
        css.addInnerElement(this.cssInput.getHtmlElement());
        this.addPlaceHolder();
        css.addInnerElement(this.enterBtn.getHtmlElement());
        css.addInnerElement(this.pre.getElement());
        html.addInnerElement(this.htmlMarkup.getHtmlElement());
    }

    private addPlaceHolder(): void {
        const input = this.cssInput.getHtmlElement() as HTMLInputElement;
        input.placeholder = 'Type in a CSS Selector';
    }

    private addInputHighligh(): void {
        const input = this.cssInput.getHtmlElement() as HTMLInputElement;
        const pre = this.pre.getElement();
        const code = pre.firstElementChild;
        input.addEventListener('keyup', () => {
            input.classList.add('hidden');
            pre.classList.add('visible');
            if (code) code.textContent = input.value;
            hljs.highlightAll();
        });
        input.addEventListener('blur', () => {
            input.classList.remove('hidden');
            input.classList.remove('visible');
        });
    }
    private checkAnswer(): boolean {
        console.log(this.input);
        this.answer = this.input.value;
        const id = [...app.levelList.getHtmlElement().children].findIndex((el) => el.classList.contains('active'));
        const hint = levels[id].hint;
        const isCorrect = this.answer === hint;
        if (isCorrect) app.levelList.openNextLevel();
        return isCorrect;
    }

    private addInputListener(): void {
        this.input.addEventListener('keydown', (e) => {
            if (e.code === 'Enter') {
                this.checkAnswer();
            }
        });
    }

    private addButtonListener(): void {
        this.enterBtn.makeView.setCallback(() => this.checkAnswer());
        // this.enterBtn.getHtmlElement().addEventListener('click', () => this.checkAnswer());
    }
}
