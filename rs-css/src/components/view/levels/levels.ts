import { Level } from '../../../types/index';

const level1: Level = {
    id: 1,
    name: 'Level 1',
    code: '<div>&lt;div class="sofa"&gt;<div>&lt;cat/&gt;</div><div>&lt;cat/&gt;</div><div>&lt;cat /&gt;</div>&lt;/div&gt;</div>',
    task: 'Select all cats',
    hint: '',
    tableCode:
        '<sofa class="level1"><cat class="active"></cat><cat class="active"></cat><cat class="active"></cat></sofa>',
};
const level2: Level = {
    id: 2,
    name: 'Level 2',
    code: '<div>&lt;div class="sofa"&gt;<div>&lt;rabbit/&gt;</div><div>&lt;dog/&gt;</div><div>&lt;cat/&gt;</div><div>&lt;croco/&gt;</div><div>&lt;cat /&gt;</div>&lt;/div&gt;</div>',
    task: 'Select all who are not a cat',
    hint: 'Select all elements that do not have a specific tag using the :not() selector',
    tableCode:
        '<sofa class="level2"><rabbit class="active"></rabbit><dog class="active"></dog><cat></cat><croco class="active"></croco><cat></cat></sofa>',
};
const level3: Level = {
    id: 3,
    name: 'Level 3',
    code: '<div>&lt;div class="sofa"&gt;<div>&lt;chicken/&gt;</div><div>&lt;chicken/&gt;</div><div>&lt;chicken/&gt;</div><div>&lt;chicken/&gt;</div><div>&lt;chicken/&gt;</div>&lt;/div&gt;</div>',
    task: 'Select all even animals',
    hint: '',
    tableCode:
        '<sofa><chicken class="active"></chicken><chicken></chicken><chicken class="active"></chicken><chicken></chicken><chicken class="active"></chicken></sofa>',
};
const level4: Level = {
    id: 4,
    name: 'Level 4',
    code: '<div>&lt;div class="sofa"&gt;<div>&lt;dachshund/&gt;</div><div>&lt;dachshund/&gt;</div><div>&lt;dachshund/&gt;</div><div>&lt;dachshund/&gt;</div>&lt;/div&gt;</div>',
    task: 'Select all animals, that are immediate on the top of a dachshund',
    hint: '',
    tableCode:
        '<sofa><dachshund><pig class="active"></pig></dachshund><dachshund><rabbit class="active"><pig></pig></rabbit></dachshund><dachshund></dachshund><dachshund><chicken class="active"></chicken></dachshund></sofa>',
};

export const levels: Level[] = [level1, level2, level3, level4];
