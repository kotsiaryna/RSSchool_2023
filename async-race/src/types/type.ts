export interface Elem {
  tag: string;
  className?: string[];
  text?: string;
  callback?: () => void;
}
