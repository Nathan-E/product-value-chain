const fs = require('fs');
const run = require('./processor/runner/runner');
const stopper = require('./monitor/monitor');

//Generates unique Id for product
const productId = (function* IdGen() {
  let id = 0;
  while (true) yield ++id;
})();

//reads the input file
function read() {
  //reads the input file, removes impunities and convert it to an array
  let data = fs.readFileSync('./data/input.txt', 'utf-8').replace(/[^\w\s]/gm, '').split('\n');

  //loops through the array
  data.forEach(function (line) {
    //removes spaces and tabs
    stage = line.replace(/[^\w\s]/gm, '')
      .replace(/\s\s+/gm, ' ')
      .trim()
      .split(' ');
    if (stage.length > 1) {
      //passes the product with a unique ID, its state and the to the output file
      run([productId.next().value, ...stage.slice(0, 2)].join(' '), stage[2], './data/output.txt');
    }
  });
  //reflect when the last item has been read, and changes the value of the stopper
  stopper.value = true;

};


read();