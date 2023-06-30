import GameView from './view/game/game-view';
import LevelsView from './view/levels/levels-view';

export default class App {
    private game = new GameView();
    public levels = new LevelsView();
    public levelList = this.levels.levelList.getHtmlElement();

    public sofa = this.game.editor.htmlMarkup.getHtmlElement().firstElementChild;
    public HTMLEditor = this.game.editor.htmlMarkup;
    public task = this.game.textTask.getHtmlElement();
    public imgTask = this.game.imgTask.getHtmlElement();
    public cssPre = this.game.editor.pre.getElement();
    public input = this.game.editor.cssInput.getHtmlElement() as HTMLInputElement;

    public levelID = this.levels.levelList.levelID;

    public start(): void {
        // const game = new GameView();
        // const levels = new LevelsView();
        document.body.append(this.game.getHtmlElement(), this.levels.getHtmlElement());
    }
}
