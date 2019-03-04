const State = require('../processor/loader');

class StateFactory {
  constructor(chain) {

    this.stateFactories = {
      'Producer': State.Producer,
      'Retailer': State.Retailer,
      'Consumer': State.Consumer,
      'Recycler': State.Recycler
    };

    //return the unique class of the State of a product
    this.getAgency = (state,product) => {
      return new this.stateFactories[state](chain, product);
    }
  }
}

module.exports = StateFactory;