const StateFactory = require('../state_factory/state_factory');

class ProductCycler {
  constructor(product, initail, url) {
    this.product = product;
    
    //dynamically assigns a state based on the product state
    let currentState = new StateFactory(this).getAgency(initail, product);

    //changes the state to the next state on the value chain
    this.changeState = async (state) => {
      currentState = state;
      await currentState.flowChannel(product, url);
    };

    //start the ProducterCycler of state
    this.start = () => {
      currentState.flowChannel(product, url);
    };
  }
}

module.exports = ProductCycler;