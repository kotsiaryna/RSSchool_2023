import { Source } from '../../../types/index';
import './sources.css';

class Sources {
    public draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const elem = {
                name: sourceClone.querySelector('.source__item-name'),
                id: sourceClone.querySelector('.source__item'),
            };

            if (elem.name) elem.name.textContent = item.name;
            if (elem.id) elem.id.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
