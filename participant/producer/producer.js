class Producer {
  constructor(type) {
    if (!Producer.instance) {
      Producer.instance = this;
    }
    return Producer.instance;
  }
}

module.exports = Producer;