jest.mock('fs');
// const ProductCycler = require('../../product_cycler/product_cycler');
const Producer = require('./producer');
const Retailer = require('../retailer/retailer');
const fs = require('fs');

const Pharmacy = new Producer(this, 'coke');
// const productcycler = new ProductCycler('coke', 'Producer');

test('Checks if the Producer class can be instantiated', () => {
  expect(Pharmacy).toBeInstanceOf(Producer);
});

test('Mocks the fs module', () => {
  const Paracetamol = new Producer(this, 'pepsi')
  Paracetamol.flowChannel('pepsi', 'url');
  expect(fs.database['url'].trim() === 'pepsi from Producer to Retailer').toBeTruthy();
})

// test('test the change of state', () => {
//   // console.log(productcycler.changeState('Retailer').then());
//   // expect(productcycler.changeState('Retailer').then(obj=() => return obj)).toBeInstanceOf({Retailer});
// });