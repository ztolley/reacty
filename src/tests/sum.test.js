const sum = require('./sum');
/*
guide how to write tests using jest: https://jestjs.io/docs/en/getting-started.html

*/

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});