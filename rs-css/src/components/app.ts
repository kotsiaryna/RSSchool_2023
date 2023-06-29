import GameView from './view/game/game-view';
import LevelsView from './view/levels/levels-view';

export default class App {
    public game = new GameView();
    public sofa = this.game.editor.htmlMarkup.getHtmlElement().firstElementChild;
    public HTMLEditor = this.game.editor.htmlMarkup;
    public task = this.game.textTask.getHtmlElement();
    public imgTask = this.game.imgTask.getHtmlElement();

    public start(): void {
        // const game = new GameView();
        const levels = new LevelsView();
        document.body.append(this.game.getHtmlElement(), levels.getHtmlElement());
    }
}
