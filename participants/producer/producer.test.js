const Producer = require('./producer');

const Producer = require('./producer');

const Pharmacy = new Producer('Producer');
const Paracetamol = new Producer('Producer')

test('Checks if the Producer class can instantiate', () => {
  expect(Pharmacy).toBeInstanceOf(Producer);
});

