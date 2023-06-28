import hljs from 'highlight.js';
import { Elem, Level } from '../../../../types/index';
import { levels } from '../../levels/levels';
import View from '../../view';

export default class HTMLMarkupView extends View {
    private appendPlace = document.createElement('span');
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['editor__markup'],
        };
        super(options);
        this.addStartLevel(levels[0]);
    }
    private addStartLevel(level: Level): void {
        const sofa = document.createElement('div');
        sofa.className = 'sofa';

        this.appendPlace.textContent = '<div class = "sofa">';
        hljs.highlightElement(this.appendPlace);

        const lastSpan = document.createElement('span');
        lastSpan.textContent = '</div>';
        hljs.highlightElement(lastSpan);

        sofa.append(this.appendPlace, lastSpan);

        if (lastSpan.firstElementChild) {
            lastSpan.firstElementChild.className = 'hljs-keyword';
        }

        this.addAnimals(level);

        this.makeView.getElement().append(sofa);
        console.log(level.id);
    }

    private addAnimals(level: Level): void {
        if (level.code) {
            for (let i = 0; i < level.code?.length; i++) {
                const element = document.createElement('div');
                level.code?.map((el) => {
                    element.textContent = `<${el}/>`;
                });
                hljs.highlightElement(element);
                this.appendPlace.after(element);
            }
        }
    }
}
