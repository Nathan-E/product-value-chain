const Producer = require('./producer');

const Pharmacy = new Producer('Producer');
const Paracetamol = new Producer('Producer')

test('Checks if the Producer class can instantiate', () => {
  expect(Pharmacy).toBeInstanceOf(Producer);
});

test('Ensures that only one instance of the Producer class exist', () => {
  expect(Pharmacy === Paracetamol).toBeTruthy();
});