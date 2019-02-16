const StateFactory = require('./state_factory');

const stateFactory = new StateFactory(this);

test('Ensures the StateFactory Class returns an instance of the specified type', () => {
  const state = stateFactory.initailState('Producer', 'Panadol');
  expect(state).toBeInstanceOf(Producer);
});
test('Ensures the StateFactory Class returns an instance of the specified type', () => {
  const state = stateFactory.initailState('Retailer', 'Panadol');
  expect(state).toBeInstanceOf(Retailer);
});
test('Ensures the StateFactory Class returns an instance of the specified type', () => {
  const state = stateFactory.initailState('Consumer', 'Panadol');
  expect(state).toBeInstanceOf(Consumer);
});
test('Ensures the StateFactory Class returns an instance of the specified type', () => {
  const state = stateFactory.initailState('Recycler', 'Panadol');
  expect(state).toBeInstanceOf(Recycler);
});