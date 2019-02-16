class Consumer {
  constructor(state, product){
    this.product = product;
    this.name = 'Consumer';
    this.nextState = 'Recycler';
    this.flowChannel = (productName) => {
      const data = `Channelling ${this.product} from the ${this.name} to the ${this.nextState}`;
      //chains the next state
      fs.appendFileSync('../data/result.txt', `${data}\n`);
      console.log(data);
      state.changeState(new Recycler(state, product));
    }
  }
}

module.exports = Consumer;