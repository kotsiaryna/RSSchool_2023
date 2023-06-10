import { NewsAPI } from '../../../types/index';
import './news.css';

class News {
    public draw(data: NewsAPI[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLTemplateElement;
            const news = {
                item: newsClone.querySelector('.news__item'),
                photo: newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement,
                author: newsClone.querySelector('.news__meta-author'),
                date: newsClone.querySelector('.news__meta-date'),
                title: newsClone.querySelector('.news__description-title'),
                source: newsClone.querySelector('.news__description-source'),
                content: newsClone.querySelector('.news__description-content'),
                more: newsClone.querySelector('.news__read-more a'),
            };

            if (idx % 2 && news.item) news.item.classList.add('alt');

            if (news.photo) news.photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            if (news.author) news.author.textContent = item.author || item.source.name;
            if (news.date) news.date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            if (news.title) news.title.textContent = item.title;
            if (news.source) news.source.textContent = item.source.name;
            if (news.content) news.content.textContent = item.description;
            if (news.more) news.more.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const newsItem = document.querySelector('.news');
        if (newsItem) {
            newsItem.innerHTML = '';
            newsItem.appendChild(fragment);
        }
    }
}

export default News;
