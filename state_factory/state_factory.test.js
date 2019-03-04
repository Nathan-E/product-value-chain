const StateFactory = require('./state_factory');
const Producer = require('../States/producer/producer');
const Retailer = require('../States/retailer/retailer');
const Consumer = require('../States/consumer/consumer');
const Recycler = require('../States/recycler/recycler');

const stateFactory = new StateFactory(this);

test('Ensures the StateFactory Class returns an instance of the Producer Class', () => {
  const state = stateFactory.getAgency('Producer', 'Panadol');
  expect(state).toBeInstanceOf(Producer);
});
test('Ensures the StateFactory Class returns an instance of the Retailer Class', () => {
  const state = stateFactory.getAgency('Retailer', 'Panadol');
  expect(state).toBeInstanceOf(Retailer);
});
test('Ensures the StateFactory Class returns an instance of the Consumer Class', () => {
  const state = stateFactory.getAgency('Consumer', 'Panadol');
  expect(state).toBeInstanceOf(Consumer);
});
test('Ensures the StateFactory Class returns an instance of the Recycler Class', () => {
  const state = stateFactory.getAgency('Recycler', 'Panadol');
  expect(state).toBeInstanceOf(Recycler);
});