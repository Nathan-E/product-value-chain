const fs = require('fs');
const States = require('../../processor/loader');

//Recycler Class
class Recycler {
  constructor(state, product) {
    this.product = product;
    this.name = 'Recycler';
    this.nextState = 'Producer';
    this.data = `${this.product} from ${this.name} to ${this.nextState}`;
    
    //moves the product to the next Stage
    this.nextState = (product, url) => {
      //appends the product to the output file
      fs.appendFile(url, `${this.data}\n`, function (err) {
        // moves the product to the next state
        state.changeState(new States.Producer(state, product));
      });
      console.log(this.data);
    }
  };
};

module.exports = Recycler;