const Consumer = require('./consumer');

const Dare = new Consumer('Consumer');
const Kazeem = new Consumer('Consumer')

test('Checks if the Retailer class can instantiate', () => {
  expect(Dare).toBeInstanceOf(Consumer);
});

