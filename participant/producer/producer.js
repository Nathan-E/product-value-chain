class Producer {
  constructor(type) {
    if (!Producer.instance) {
      Producer.instance = this;
    }
    return Producer.instance;
    this.type = type;
  }
}

module.exports = Producer;