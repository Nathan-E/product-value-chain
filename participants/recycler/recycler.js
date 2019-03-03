const fs = require('fs');
const States = require('../../processor/loader');
// let check = require('../../monitor/monitor');

class Recycler {
  constructor(state, product) {
    this.product = product;
    this.name = 'Recycler';
    this.nextState = 'Producer';
    this.data = `${this.product} from ${this.name} to ${this.nextState}`;

    this.flowChannel = (product, url) => {
      //appends the product flow channels to the output file
      fs.appendFile(url, `${this.data}\n`, function (err) {
        // if (err) console.log(err);
        state.changeState(new States.Producer(state, product));
      });
      console.log(this.data);
    }
  };
};

module.exports = Recycler;