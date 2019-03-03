jest.mock('fs');
const Retailer = require('./retailer');
const fs = require('fs');

const paxPharmacy = new Retailer('Retailer');

test('Checks if the Retailer class can instantiate', () => {
  expect(paxPharmacy).toBeInstanceOf(Retailer);
});

test('Mocks the fs module', () => {
const wellPharmacy = new Retailer(this, 'syrup')
  wellPharmacy.flowChannel('syrup', 'url');
  expect(fs.database['url'].trim() === 'syrup from Retailer to Consumer').toBeTruthy();
})