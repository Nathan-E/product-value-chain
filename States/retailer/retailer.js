const fs = require('fs');
const States = require('../../processor/loader');
// const check = require('../../monitor/monitor');

//Retailer Class
 class Retailer {
  constructor(state, product) {
    this.product = product;
    this.name = 'Retailer';
    this.nextState = 'Consumer';
    this.data = `${this.product} from ${this.name} to ${this.nextState}`;

    //moves the product to the next Stage
    this.flowChannel = (product, url) => {
      //appends the product flow channels to the output file
      fs.appendFile(url, `${this.data}\n`, function (err) {
        // moves the product to the next state
        state.changeState(new States.Consumer(state, product));
      });
      console.log(this.data);
    }
  }
};

module.exports = Retailer;