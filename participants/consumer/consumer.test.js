const Consumer = require('./consumer');

const Dare = new Consumer('Consumer');
const Kazeem = new Consumer('Consumer')

test('Checks if the Retailer class can instantiate', () => {
  expect(Dare).toBeInstanceOf(Consumer);
});

test('Ensures that several instances of the Retailer class can exist', () => {
  expect(Kazeem === Dare).toBeFalsy();
});