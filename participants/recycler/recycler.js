const fs = require('fs');
// const file = require('../../data/result.txt')

class Recycler {
  constructor(state, product) {
    this.product = product;
    this.name = 'Recycler';
    this.nextState = 'Producer';
    this.flowChannel = (productName) => {
      const data = `Channelling recycled ${this.product} from the ${this.name} to the ${this.nextState}`;
      //chains the next state
      fs.appendFileSync('../../data/output.txt', `${data}\n`);
      console.log(data);
      // state.changeState(new Producer(state, this.product));

    }
  };
}

module.exports = Recycler;