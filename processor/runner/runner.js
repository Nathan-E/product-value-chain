const ProductCycler = require('../../product_cycler/product_cycler');


function run(productNameId, state = 'Producer', url) {
  const productFlow = new ProductCycler(productNameId, state, url);
  productFlow.start();
}

module.exports = run;