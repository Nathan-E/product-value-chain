const fs = require('fs');
const Consumer = require('../consumer/consumer');

//Retailer Class
class Retailer {
  constructor(state, product) {
    this.product = product;
    this.name = 'Retailer';
    this.nextState = 'Consumer';
    this.flowChannel = (productName) => {
      const data = `Channelling ${this.product} from the ${this.name} to the ${this.nextState}`;
      //appends the product flow channels to the output file
      fs.appendFileSync('../../data/output.txt', `${data}\n`);
      console.log(data);
      //calls in the next State
      state.changeState(new Consumer(state, product));
    }
  }
}

module.exports = Retailer;