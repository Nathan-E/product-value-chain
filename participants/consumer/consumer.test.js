jest.mock('fs');
const Consumer = require('./consumer');
const fs = require('fs');

const Dare = new Consumer(this, 'Keys');

test('Checks if the Retailer class can instantiate', () => {
  expect(Dare).toBeInstanceOf(Consumer);
});

test('Mocks the fs module', () => {
  const Kazeem = new Consumer(this, 'cakes')
  Kazeem.flowChannel('cakes', 'url');
  expect(fs.database['url'].trim() === 'cakes from Consumer to Recycler').toBeTruthy();
});