const StateFactory = require('./state_factory');
const Producer = require('../participants/producer/producer');
const Retailer = require('../participants/retailer/retailer');
const Consumer = require('../participants/consumer/consumer');
const Recycler = require('../participants/recycler/recycler');

const stateFactory = new StateFactory(this);

test('Ensures the StateFactory Class returns an instance of the specified type', () => {
  const state = stateFactory.getAgency('Producer', 'Panadol');
  expect(state).toBeInstanceOf(Producer);
});
test('Ensures the StateFactory Class returns an instance of the specified type', () => {
  const state = stateFactory.getAgency('Retailer', 'Panadol');
  expect(state).toBeInstanceOf(Retailer);
});
test('Ensures the StateFactory Class returns an instance of the specified type', () => {
  const state = stateFactory.getAgency('Consumer', 'Panadol');
  expect(state).toBeInstanceOf(Consumer);
});
test('Ensures the StateFactory Class returns an instance of the specified type', () => {
  const state = stateFactory.getAgency('Recycler', 'Panadol');
  expect(state).toBeInstanceOf(Recycler);
});