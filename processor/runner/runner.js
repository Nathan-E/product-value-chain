const ProductCycler = require('../../product_cycler/product_cycler');

//moves the product and its state to the product_cycler
function run(productNameId, state = 'Producer', url) {
  const productFlow = new ProductCycler(productNameId, state, url);
  //starts the process
  productFlow.start();
}

module.exports = run;