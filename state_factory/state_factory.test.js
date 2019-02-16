const StateFactory = require('./state_factory');

// class StateFactory {
//   constructor(chain) {
//     this.initailState = (type, product) => {
//       if (type === "Producer") {
//         return new Producer(chain,product);
//       } else if (type === "Retailer") {
//         return new Retailer(chain, product);
//       } else if (type === "Consumer") {
//         return new Consumer(chain, product);
//       } else if (type === "Recycler") {
//         return new Recycler(chain, product);
//       }
//     }
//   }
// }
const stateFactory = new StateFactory(this);

test('Ensures the StateFactory Class returns an instance of the specified type', () => {
  expect()
});