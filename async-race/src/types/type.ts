export interface Elem {
  tag: string;
  className?: string[];
  text?: string;
  callback?: () => void;
}

export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface Winner {
  id: number;
  color: string;
  name: string;
  wins: number;
  time: number;
}
