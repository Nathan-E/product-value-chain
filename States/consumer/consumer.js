const fs = require('fs');
const States = require('../../processor/loader');

//Consumer Class
class Consumer {
  constructor(state, product) {
    this.product = product;
    this.name = 'Consumer';
    this.nextState = 'Recycler';
    this.data = `${this.product} from ${this.name} to ${this.nextState}`;

    //moves the product to the next Stage
    this.flowChannel = (product, url) => {
      //appends the product  to the output file
      fs.appendFile(url, `${this.data}\n`, function (err) {
        // moves the product to the next state
        state.changeState(new States.Recycler(state, product));
      });
      console.log(this.data);
    }
  }
};


module.exports = Consumer;