import { Elem } from '../types/index';
export default class ElementCreator {
    private element;

    constructor(options: Elem) {
        this.element = document.createElement(options.tag);
        this.makeElement(options);
    }

    public getElement(): HTMLElement {
        return this.element;
    }

    public addInnerElement(element: HTMLElement): void {
        if (element && element instanceof ElementCreator) {
            this.element?.append(element.getElement());
        } else {
            this.element.append(element);
        }
    }

    private makeElement(options: Elem): void {
        // this.element = document.createElement(options.tag);
        this.setCssClasses(options.classNames);
        this.setTextContent(options.textContent);
        if (options.callback) {
            this.setCallback(options.callback);
        }
    }

    private setCssClasses(cssClasses: Elem['classNames'] = []): void {
        this.element?.classList.add(...cssClasses);
    }

    public setTextContent(Text = ''): void {
        if (this.element) {
            this.element.textContent = Text;
        }
    }

    public setCallback(callback: Elem['callback']): void {
        if (callback) {
            this.element.addEventListener('click', (event) => callback(event));
        }
    }
}
