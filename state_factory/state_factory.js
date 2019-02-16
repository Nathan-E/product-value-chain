

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