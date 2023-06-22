import { Level } from '../../../types/index';

export const level1: Level = {
    id: 1,
    name: 'Level 1',
    code: '<div>&lt;div class="table"&gt;<div>&lt;plate /&gt;</div><div>&lt;plate /&gt;</div>&lt;/div&gt;</div>',
    task: 'Select all oranges',
    hint: '',
    tableCode: '<div class="plate"></div><div class="plate"></div>',
};
const level2: Level = {
    id: 2,
    name: 'Level 2',
    code: '',
    task: 'Select all oranges',
    hint: '',
    tableCode: '',
};
const level3: Level = {
    id: 3,
    name: 'Level 3',
    code: '',
    task: 'Select all oranges',
    hint: '',
    tableCode: '',
};
export const levels: Level[] = [level1, level2, level3];
