const fs = require('fs');
const Retailer = require('../retailer/retailer');

//Producer Class
class Producer {
  constructor(state) {
    this.name = 'Producer';
    this.nextState = 'Retailer';
    this.flowChannel = (product) => {
      const data = `Channelling ${product} from the ${this.name} to the ${this.nextState}`;
      //appends the product flow channels to the output file
      fs.appendFileSync('../../data/output.txt', `${data}\n`);
      console.log(data);
      //calls in the next State
      state.changeState(new Retailer(state, product));
    }
    if (!Producer.instance) {
      Producer.instance = this;
    }
    return Producer.instance;
  }
}


module.exports = Producer;