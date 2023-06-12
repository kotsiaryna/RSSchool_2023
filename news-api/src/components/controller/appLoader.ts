import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
