const Recycler = require('./recycler');

const Moses = new Recycler('Recycler');
const Grace = new Recycler('Recycler')

test('Checks if the Retailer class can instantiate', () => {
  expect(Moses).toBeInstanceOf(Recycler);
});

test('Ensures that several instances of the Retailer class can exist', () => {
  expect(Grace === Moses).toBeFalsy();
});