import { Elem } from '../../../../types/index';
import View from '../../view';

export default class CssInputView extends View {
    public answer = '';
    constructor() {
        const options: Elem = {
            tag: 'input',
            classNames: ['input', 'css__input'],
        };
        super(options);
        this.addInputListener();
        // this.addInputHighligh();
    }

    private addInputListener(): void {
        const input = this.makeView.getElement() as HTMLInputElement;
        input.addEventListener('keydown', (e) => {
            if (e.code === 'Enter') {
                this.answer = input.value;
            }
        });
        console.log(this.answer);
    }
    // private addInputHighligh(): void {
    //     const input = this.makeView.getElement() as HTMLInputElement;
    //     input.addEventListener('focus', () => {
    //         input.classList.add('hidden');
    //     });
    //     console.log(this.answer);
    // }

    // private callback(e: Event): void {
    //     const target = e.target as HTMLInputElement;
    //     console.log(e.code);
    // }
}
