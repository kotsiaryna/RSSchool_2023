export interface Elem {
    tag: string;
    classNames: string[];
    textContent?: string;
    callback?: callback;
}

export type Level = {
    id: number;
    name: string;
    code: (string | string[] | (string[] | string)[] | ((string[] | string)[] | string)[])[];
    task: string;
    hint: string;
    tableCode: string;
};

type callback = (e: Event) => void;

export type genFunction<T> = (arg?: T) => void;
