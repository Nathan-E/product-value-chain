const fs = require('fs');

//Recycler Class
class Recycler {
  constructor(state, product) {
    this.product = product;
    this.name = 'Recycler';
    this.nextState = 'Producer';
    this.flowChannel = (productName) => {
      const data = `Channelling recycled ${this.product} from the ${this.name} to the ${this.nextState}`;
      //appends the product flow channels to the output file
      fs.appendFileSync('../../data/output.txt', `${data}\n`);
      console.log(data);
    }
  };
}

module.exports = Recycler;