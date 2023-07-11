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
