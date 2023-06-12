import './search.css';

class AppLetters {
    private searchCont = document.querySelector('.search');
    private makeButtons(): void {
        const letters: readonly string[] = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'W',
            'X',
            'Y',
            'Z',
        ];

        const lettersButtons = letters.map((el) => {
            const elem = document.createElement('div');
            elem.className = 'letter';
            elem.textContent = el;
            return elem;
        });
        this.searchCont?.append(...lettersButtons);
    }

    private makeFilter(): void {
        this.searchCont?.addEventListener('click', (e) => {
            const target = e.target as HTMLDivElement;
            if (target.className !== 'letter') return;

            const firstLetter = target.textContent;
            const sources = [...document.querySelectorAll('.source__item')];

            for (let i = 0; i < sources.length; i++) {
                const elem = sources[i] as HTMLDivElement;
                elem.hidden = false;
                const value = elem.getAttribute('data-source-id');
                if (value && value[0].toUpperCase() !== firstLetter) {
                    elem.hidden = true;
                }
            }
        });
    }
    public drawLetters(): void {
        this.makeButtons();
        this.makeFilter();
    }
}

export default AppLetters;
