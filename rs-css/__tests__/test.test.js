/* eslint-disable no-undef */
// import view from '../src/components/view/view.js';
const view = require('../src/components/view/view');
// import createElements from '../src/utils/createElement.js';
const createElements =  require('../src/utils/createElement');
const hints = require('../src/components/view/levels/level-hints-view');
const levelListView = require('../src/components/view/levels/level-list-view')

// import app from '../src/components/app.js';

test('function createElement has one param', () => {
    expect(createElements['default']).toHaveLength(1);
});

test('class LevelHintsView has method addElements', () => {
    expect(hints['default'].prototype).toHaveProperty('addElements');
});

test('class View is declared in view.ts ', () => {
    expect(view['default']['name']).toBe('View');
});
test('method checkWin return nothing', () => {
    expect(levelListView["default"].prototype.checkWin()).toBeUndefined();
});
