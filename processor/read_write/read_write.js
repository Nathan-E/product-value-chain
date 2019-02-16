const fs = require('fs');
const run = require('../runner/runner');

//reads the input file
function read() {
  fs.readFile('../../data/input.txt', 'utf-8', (err, data) => {
    //removes special characters
    const regex = /[\,\/\)\&\*\=\>\{\}\'\"\[\]\ˆ\%\$\#\@\!\`\˜\.\<\;\:\_\+\=\(\-\\\/\|]/g;
    data.replace(regex, '').split('\n').forEach(function (line) {
      //removes spaces and tabs
      product = line.replace(/[^\w\s]/gm, '')
        .replace(/\s\s+/gm, ' ')
        .trim()
        .split(' ');
      if (product.length > 1) {
        //concatnate the product name and it state...into the run function
        run([...product.slice(0, 2)].join(' '), product[2]);
      }
    });
  });
}

read();
// module.exports = read;