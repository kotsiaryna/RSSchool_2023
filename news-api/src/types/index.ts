export interface ResponseObj {
    status: Status;
    totalResults: number;
    articles?: NewsAPI[];
    sources: Source[];
}

export enum Status {
    Unauthorized = 401,
    NotFound = 404,
}
export interface NewsAPI {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';
    country:
        | 'ae'
        | 'ar'
        | 'at'
        | 'au'
        | 'be'
        | 'bg'
        | 'br'
        | 'ca'
        | 'ch'
        | 'cn'
        | 'co'
        | 'cu'
        | 'cz'
        | 'de'
        | 'eg'
        | 'fr'
        | 'gb'
        | 'gr'
        | 'hk'
        | 'hu'
        | 'id'
        | 'ie'
        | 'il'
        | 'in'
        | 'it'
        | 'jp'
        | 'kr'
        | 'lt'
        | 'lv'
        | 'ma'
        | 'mx'
        | 'my'
        | 'ng'
        | 'nl'
        | 'no'
        | 'nz'
        | 'ph'
        | 'pl'
        | 'pt'
        | 'ro'
        | 'rs'
        | 'ru'
        | 'sa'
        | 'se'
        | 'sg'
        | 'si'
        | 'sk'
        | 'th'
        | 'tr'
        | 'tw'
        | 'ua'
        | 'us'
        | 've'
        | 'za';
}

export type Method = 'GET' | 'POST' | 'HEADERS';

export enum Endpoint {
    everything = 'everything',
    topHeadlines = 'top-headlines',
    sources = 'sources',
}

export type Options = {
    country?: string;
    language?: string;
    category?: 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
    q?: string;
    pageSize?: number;
    page?: number;
    sources?: string;
};

export type callbackFunction<T = ResponseObj> = (data?: T) => void;
