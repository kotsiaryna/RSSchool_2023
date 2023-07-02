import { Level } from '../../../types/index';

const level1: Level = {
    id: 1,
    name: 'Level 1',
    code: ['cat', 'cat', 'cat'],
    task: 'Select all cats',
    hint: 'cat',
    tableCode:
        '<sofa class="level1"><cat class="active"></cat><cat class="active"></cat><cat class="active"></cat></sofa>',
};
const level2: Level = {
    id: 2,
    name: 'Level 2',
    code: ['rabbit', 'dog', 'cat', 'croco', 'cat'],
    task: 'Select all who are not a cat',
    hint: ':not(cat)',
    tableCode:
        '<sofa class="level2"><rabbit class="active"></rabbit><dog class="active"></dog><cat></cat><croco class="active"></croco><cat></cat></sofa>',
};
const level3: Level = {
    id: 3,
    name: 'Level 3',
    code: ['bird', 'bird', 'bird', 'bird', 'bird'],
    task: 'Select all odd birds',
    hint: ':nth-of-type(odd)',
    tableCode:
        '<sofa class="level3"><bird class="active"></bird><bird></bird><bird class="active"></bird><bird></bird><bird class="active"></bird></sofa>',
};
const level4: Level = {
    id: 4,
    name: 'Level 4',
    code: [['dachshund', ['pig']], ['dachshund', ['rabbit', ['hamster']]], 'dachshund', ['dachshund', ['bird']]],
    task: 'Select all animals on dachshunds',
    hint: 'dog > *',
    tableCode:
        '<sofa class="level4"><dachshund><hamster class="active"></hamster></dachshund><dachshund><rabbit class="active"><hamster></hamster></rabbit></dachshund><dachshund></dachshund><dachshund><bird class="active"></bird></dachshund></sofa>',
};
const level5: Level = {
    id: 5,
    name: 'Level 5',
    code: ['pig', 'pig id = "active"', 'dog', 'pig'],
    task: 'Select the active pig',
    hint: '#active',
    tableCode: '<sofa class="level5"><pig></pig><pig class="active"></pig><dog></dog><pig></pig></sofa>',
};
const level6: Level = {
    id: 6,
    name: 'Level 6',
    code: ['rabbit', 'rabbit', 'rabbit', 'rabbit', 'rabbit', 'pig'],
    task: 'Select the last rabbit',
    hint: ':last-of-type',
    tableCode:
        '<sofa class="level6"><rabbit></rabbit><rabbit></rabbit><rabbit></rabbit><rabbit></rabbit><rabbit class = "active"></rabbit><pig></pig></sofa>',
};
const level7: Level = {
    id: 7,
    name: 'Level 7',
    code: ['croco', 'hamster', 'croco', ['pig', ['croco']], 'hamster', 'croco'],
    task: 'Select crocos, who are next sibling to hamster',
    hint: 'hamster + croco',
    tableCode:
        '<sofa class="level7"><croco></croco><hamster></hamster><croco class = "active"></croco><pig><croco></croco></pig><hamster></hamster><croco class = "active"></croco></sofa>',
};
const level8: Level = {
    id: 8,
    name: 'Level 8',
    code: [
        'sphinx class = "mooving"',
        'sphinx class = "mooving"',
        'sphinx',
        'pig class = "mooving"',
        'sphinx',
        'sphinx class = "mooving"',
    ],
    task: 'Select all sphinx, who are mooving',
    hint: 'sphinx.mooving',
    tableCode:
        '<sofa class="level8"><sphinx  class = "active"></sphinx><sphinx  class = "active"></sphinx><sphinx></sphinx><pig  class = "mooving"></pig><sphinx></sphinx><sphinx class = "active"></sphinx>></sofa>',
};
const level9: Level = {
    id: 9,
    name: 'Level 9',
    code: [
        'sphinx color =  "pink"',
        'hamster color = "brown"',
        'croco color = "green"',
        'rabbit color = "white"',
        'bird color = "yellow"',
        'pig color = "pink"',
    ],
    task: 'Select all animals with attribute "color" contains  "n"',
    hint: '[color*="c"]',
    tableCode:
        '<sofa class="level9"><sphinx  class = "active"></sphinx><hamster class = "active"></hamster><croco class = "active"></croco><rabbit></rabbit><bird></bird><pig class = "active"></pig></sofa>',
};
const level10: Level = {
    id: 10,
    name: 'Level 10',
    code: [
        ['sphinx', ['bird', ['hamster']]],
        ['dachshund', ['pig']],
        'rabbit',
        ['bird', ['croco']],
        ['pig', ['cat', ['rabbit']]],
    ],
    task: 'Select those who are at the top level',
    hint: '* *',
    tableCode:
        '<sofa class="level10"><sphinx><bird><hamster class = "active"></hamster></bird></sphinx><dachshund><pig></pig></dachshund><rabbit></rabbit><bird><croco></croco></bird><pig><cat><rabbit class = "active"></rabbit></cat></pig></sofa>',
};

export const levels: Level[] = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];
