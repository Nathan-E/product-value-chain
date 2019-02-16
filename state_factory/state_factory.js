const Producer = require('../participants/producer/producer');
const Retailer = require('../participants/retailer/retailer');
const Consumer = require('../participants/consumer/consumer');
const Recycler = require('../participants/recycler/recycler');

class StateFactory {
  constructor(chain) {
    this.initailState = (type, product) => {
      if (type === "Producer") {
        return new Producer(chain,product);
      } else if (type === "Retailer") {
        return new Retailer(chain, product);
      } else if (type === "Consumer") {
        return new Consumer(chain, product);
      } else if (type === "Recycler") {
        return new Recycler(chain, product);
      }
    }
  }
}

module.exports = StateFactory;