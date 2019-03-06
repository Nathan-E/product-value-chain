const fs = require('fs');
const run = require('./processor/runner/runner');
let check = require('./monitor/monitor');

const productId= (function* IdGen() {
  let x = 0;
  while (true) yield ++x;
})();

const id2 = (function* IdGen() {
  let x = 0;
  while (true) yield ++x;
})();

let idw = null;

//reads the input file
function read() {
  let data = fs.readFileSync('./data/input.txt', 'utf-8').replace(/[^\w\s]/gm, '').split('\n');
  let result = data.length;

  data.forEach(function (line) {
    idw = id2.next().value;

    product = line.replace(/[^\w\s]/gm, '')
      .replace(/\s\s+/gm, ' ')
      .trim()
      .split(' ');
    if (product.length > 1) {
      //concatnate the product name and it state...into the run function
      run([productId.next().value, ...product.slice(0, 2)].join(' '), product[2], './data/output.txt');
    }
  });
  if (result === idw) {
    check.value = true;
  };

};


read();