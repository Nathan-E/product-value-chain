const ProductCycler = require('../../product_cycler/product_cycler');


function run(productName, state = 'Producer') {
  const productFlow = new ProductCycler(productName, state);
  productFlow.start();
}

module.exports = run;