import { Elem } from '../../../../types/index';
import ElementCreator from '../../../../utils/createElement';
import View from '../../view';
import CssInputView from './css-input-view';
import HTMLMarkupView from './html-markup-view';

export default class EditorView extends View {
    public cssInput = new CssInputView();
    public htmlMarkup = new HTMLMarkupView();

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
            classNames: ['editor__side', 'css'],
        });
        const RightSide = new ElementCreator({
            tag: 'div',
            classNames: ['editor__side', 'html'],
        });
        this.makeView.addInnerElement(LeftSide.getElement());
        this.makeView.addInnerElement(RightSide.getElement());

        LeftSide.addInnerElement(
            new ElementCreator({ tag: 'h3', classNames: ['side__heading', 'css__heading'] }).getElement()
        );
        RightSide.addInnerElement(
            new ElementCreator({ tag: 'h3', classNames: ['side__heading', 'html__heading'] }).getElement()
        );

        LeftSide.addInnerElement(new ElementCreator({ tag: 'div', classNames: ['side__numbers'] }).getElement());
        RightSide.addInnerElement(new ElementCreator({ tag: 'div', classNames: ['side__numbers'] }).getElement());

        LeftSide.addInnerElement(this.cssInput.getHtmlElement());
        RightSide.addInnerElement(this.htmlMarkup.getHtmlElement());
    }
}
