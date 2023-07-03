import hljs from 'highlight.js';
import { Elem, Level } from '../../../../types/index';
import { levels } from '../../levels/levels';
import View from '../../view';

export default class HTMLMarkupView extends View {
    private appendPlace = document.createElement('span');
    public sofa = document.createElement('div');
    constructor() {
        const options: Elem = {
            tag: 'div',
            classNames: ['editor__markup'],
        };
        super(options);
        this.addSofa(levels[0]);
    }
    private addSofa(level: Level): void {
        this.sofa.className = 'sofa';

        this.appendPlace.textContent = '<div class = "sofa">';
        hljs.highlightElement(this.appendPlace);

        const lastSpan = document.createElement('span');
        lastSpan.textContent = '</div>';
        hljs.highlightElement(lastSpan);

        this.sofa.append(this.appendPlace, lastSpan);

        if (lastSpan.firstElementChild) {
            lastSpan.firstElementChild.className = 'hljs-keyword';
        }

        this.addAnimals(level);

        this.makeView.getElement().append(this.sofa);
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

    public clearSofa(): void {
        const length = this.sofa.childElementCount;
        for (let i = length - 2; i > 0; i--) {
            this.sofa.children[i].remove();
        }
    }

    public appendAnimals(level: Level): void {
        for (let i = level.code.length - 1; i >= 0; i--) {
            const element = document.createElement('div');
            if (typeof level.code[i] === 'string') {
                element.textContent = `<${level.code[i]}/>`;
                hljs.highlightElement(element);
            } else {
                element.textContent = `<${level.code[i][0]}>`;
                hljs.highlightElement(element);

                for (let j = 0; j < level.code[i][1].length; j++) {
                    if (j === 0 && Array.isArray(level.code[i][1][j + 1])) {
                        const upperAnimal = document.createElement('div');
                        upperAnimal.textContent = `<${level.code[i][1][j]}>`;
                        hljs.highlightElement(upperAnimal);

                        for (let k = 0; k < level.code[i][1][j + 1].length; k++) {
                            const topAnimal = document.createElement('div');
                            topAnimal.textContent = `<${level.code[i][1][j + 1][k]}/>`;
                            hljs.highlightElement(topAnimal);
                            upperAnimal.append(topAnimal);
                        }

                        const endUpperAnimal = document.createElement('span');
                        endUpperAnimal.textContent = `</${level.code[i][1][j]}>`;
                        endUpperAnimal.className = 'hljs-section';
                        upperAnimal.append(endUpperAnimal);
                        element.append(upperAnimal);
                    } else if (j === 0 && !Array.isArray(level.code[i][1][j + 1])) {
                        const upperAnimal = document.createElement('div');
                        upperAnimal.textContent = `<${level.code[i][1][j]}/>`;
                        hljs.highlightElement(upperAnimal);
                        element.append(upperAnimal);
                    }
                }

                const endSection = document.createElement('span');
                endSection.textContent = `</${level.code[i][0]}>`;
                endSection.className = 'hljs-section';
                element.append(endSection);
            }

            this.sofa.firstElementChild?.after(element);
        }
    }
}
