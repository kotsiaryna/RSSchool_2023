import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import AppLetters from '../view/search/search';

class App {
    private controller: AppController;
    private view: AppView;
    private letters: AppLetters;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.letters = new AppLetters();
    }

    public start(): void {
        const sources = document.querySelector('.sources');
        if (sources) {
            sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
            this.controller.getSources((data) => this.view.drawSources(data));
            this.letters.drawLetters();
        }
    }
}

export default App;
