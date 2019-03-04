jest.mock('fs');
const Producer = require('./producer');
const fs = require('fs');

const Pharmacy = new Producer(this, 'coke');

test('Checks if the Producer class can be instantiated', () => {
  expect(Pharmacy).toBeInstanceOf(Producer);
});

test('Mocks the appendFile method of the fs module', () => {
  const Paracetamol = new Producer(this, 'pepsi')
  Paracetamol.flowChannel('pepsi', 'url');
  expect(fs.database['url'].trim() === 'pepsi from Producer to Retailer').toBeTruthy();
})
