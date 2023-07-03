const view = require('../src/components/view/view.ts')
const createElements = require('../src/utils/createElement.ts')
const  hints = require('../src/components/view/levels/level-hints-view.ts')

test('function createElement has one param', () => {
   
    expect(createElements["default"]).toHaveLength(1);
})

test('class LevelHintsView has method addElements', () => {
   
    expect(hints["default"].prototype).toHaveProperty('addElements');
})

test('class View is declared in view.ts ', () => {
   
    expect(view["default"]["name"]).toBe("View");
})
