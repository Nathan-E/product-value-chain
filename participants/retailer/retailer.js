const fs = require('fs');
const Consumer = require('../consumer/consumer');
// const file = require('../../data/result.txt')


class Retailer {
  constructor(state, product) {
    this.product = product;
    this.name = 'Retailer';
    this.nextState = 'Consumer';
    this.flowChannel = (productName) => {
      const data = `Channelling ${this.product} from the ${this.name} to the ${this.nextState}`;
      //chains the next state
      fs.appendFileSync('../../data/output.txt', `${data}\n`);
      console.log(data);
      state.changeState(new Consumer(state, product));
    }
  }
}

module.exports = Retailer;