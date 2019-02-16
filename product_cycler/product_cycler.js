const StateFactory = require('../state_factory/state_factory');

class ProductCycler {
  constructor(product, initail) {
    //execution begins 
    this.product = product;
    //dynamically assigns a state based on the product state
    let currentState = new StateFactory(this).initailState(initail, product);

    //changes the state to the next state on the value chain
    this.changeState = (state) => {
      currentState = state;
      currentState.flowChannel(product);
    };

    //start the ProducterCycler of state
    this.start = () => {
      currentState.flowChannel(product);
    };
  }
}

module.exports = ProductCycler;