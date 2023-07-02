import { Elem } from '../../types/index';
import ElementCreator from '../../utils/createElement';

export default class View {
    public makeView: ElementCreator;

    constructor(options: Pick<Elem, 'tag' | 'classNames'> = { tag: 'section', classNames: [] }) {
        this.makeView = this.createView(options);
    }

    public getHtmlElement(): HTMLElement {
        return this.makeView.getElement();
    }

    private createView(params: Pick<Elem, 'tag' | 'classNames'>): ElementCreator {
        const elementParams: Elem = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: '',
        };
        this.makeView = new ElementCreator(elementParams);

        return this.makeView;
    }
}
