const fs = require('fs');
const States = require('../../processor/loader');
const check = require('../../monitor/monitor');

//Producer Class
class Producer {
  constructor(state, product) {
    this.product = product;
    this.name = 'Producer';
    this.nextState = 'Retailer';
    this.data = `${this.product} from ${this.name} to ${this.nextState}`;
    this.flowChannel = (product, url) => {
      //appends the product flow channels to the output file
      fs.appendFile(url, `${this.data}\n`, function (err) {
        // if (err) console.log(err);
        if (check.value == null) state.changeState(new States.Retailer(state, product));
      });
      console.log(this.data);
    }
  }
}


module.exports = Producer;