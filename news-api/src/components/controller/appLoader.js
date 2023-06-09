import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'a6748dc91b9e4f7a8af5cc41a1090947', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
