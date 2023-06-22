/* eslint-disable max-lines-per-function */
import './editor.scss';
import { Elem } from '../../../../types/index';
import ElementCreator from '../../../../utils/createElement';
import View from '../../view';
import CssInputView from './css-input-view';
import HTMLMarkupView from './html-markup-view';
import CssButtonView from './css-btn-view';

export default class EditorView extends View {
    public cssInput = new CssInputView();
    public htmlMarkup = new HTMLMarkupView();
    public enterBtn = new CssButtonView();

    constructor() {
        const options: Elem = {
            tag: 'main',
            classNames: ['editor'],
        };
        super(options);
        this.addElements();
    }
    private addElements(): void {
        const LeftSide = new ElementCreator({
            tag: 'div',
            classNames: ['editor__css'],
        });
        const RightSide = new ElementCreator({
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
        this.makeView.addInnerElement(LeftSide.getElement());

        this.makeView.addInnerElement(
            new ElementCreator({
                tag: 'h3',
                classNames: ['editor__heading', 'html__heading'],
                textContent: 'HTML Viewer',
            }).getElement()
        );
        this.makeView.addInnerElement(RightSide.getElement());
        const numbers = new ElementCreator({
            tag: 'div',
            classNames: ['editor__numbers'],
        });
        for (let i = 1; i <= 20; i += 1) {
            numbers.addInnerElement(
                new ElementCreator({ tag: 'span', classNames: ['numbers__item'], textContent: `${i}` }).getElement()
            );
        }
        RightSide.addInnerElement(numbers.getElement());
        LeftSide.addInnerElement(this.cssInput.getHtmlElement());
        LeftSide.addInnerElement(this.enterBtn.getHtmlElement());
        RightSide.addInnerElement(this.htmlMarkup.getHtmlElement());
    }
}
