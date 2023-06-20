export interface Elem {
    tag: string;
    classNames: string[];
    textContent?: string;
    callback?: (e: Event) => void;
}
