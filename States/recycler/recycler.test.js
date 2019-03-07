jest.mock('fs');
const Recycler = require('./recycler');
const fs = require('fs');

const Moses = new Recycler(this, 'sofa');

test('Checks if the Retailer class can instantiate', () => {
  expect(Moses).toBeInstanceOf(Recycler);
});
test('Mocks the appendFile method of the fs module', () => {
  Moses.nextState('sofa', 'url');
  expect(fs.database['url'].trim() === 'sofa from Recycler to Producer').toBeTruthy();
})
