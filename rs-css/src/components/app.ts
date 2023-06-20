import GameView from './view/game/game-view';
import LevelsView from './view/levels/levels-view';

export default class App {
    public game = new GameView();

    public start(): void {
        // const game = new GameView();
        const levels = new LevelsView();
        document.body.append(this.game.getHtmlElement(), levels.getHtmlElement());
        console.log(this.game.textTask);
    }
}
