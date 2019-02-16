const Retailer = require('./retailer');

const paxPharmacy = new Retailer('Retailer');
const wellPharmacy = new Retailer('Retailer')

test('Checks if the Retailer class can instantiate', () => {
  expect(paxPharmacy).toBeInstanceOf(Retailer);
});

test('Ensures that several instances of the Retailer class can exist', () => {
  expect(paxPharmacy === wellPharmacy).toBeFalsy();
});