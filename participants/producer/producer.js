class Producer {
  constructor(state) {
    this.name = 'Producer';
    this.nextState = 'Retailer';
    this.flowChannel = (product) => {
      const data = `Channelling ${product} from the ${this.name} to the ${this.nextState}`;
      //chains the next state
      fs.appendFileSync('../data/result.txt', `${data}\n`);
      console.log(data);
      state.changeState(new Retailer(state, product));
    }
    if (!Producer.instance) {
      Producer.instance = this;
    }
    return Producer.instance;
  }
}


module.exports = Producer;