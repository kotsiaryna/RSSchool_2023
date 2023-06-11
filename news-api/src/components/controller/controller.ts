import { Endpoint, callbackFunction } from '../../types/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources(callback: callbackFunction): void {
        super.getResp(
            {
                endpoint: Endpoint.sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: callbackFunction): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            console.log(e.target);
            console.log(e.currentTarget);
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
