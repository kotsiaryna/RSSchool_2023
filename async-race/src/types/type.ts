export interface Elem {
  tag: string;
  className?: string[];
  text?: string;
  callback?: (e: Event, el?: HTMLElement, el2?: HTMLElement) => void;
}

export interface Car {
  name: string;
  color: string;
  id: number;
  velocity?: number;
  distance?: number;
}
export interface DriveParams {
  velocity: number;
  distance: number;
}

export interface Winner {
  id: number;
  color?: string;
  name?: string;
  wins: number;
  time: number;
}
export type AnimationKeys = {
  animationId: number;
};

export type SortOrder = "ASC" | "DESC";

export type ColumnToSort = "wins" | "time";
