const fs = require('fs');
const Recycler = require('../recycler/recycler');

//Consumer Class
class Consumer {
  constructor(state, product){
    this.product = product;
    this.name = 'Consumer';
    this.nextState = 'Recycler';
    this.flowChannel = (productName) => {
      const data = `Channelling ${this.product} from the ${this.name} to the ${this.nextState}`;
      //appends the product flow channels to the output file
      fs.appendFileSync('../../data/output.txt', `${data}\n`);
      console.log(data);
      //calls in the next State
      state.changeState(new Recycler(state, product));
    }
  }
}

module.exports = Consumer;