const database = {}

function appendFile(link, data){
  database[link] = data;
}

// appendFile(database, 'Hello');
// console.log(database.includes('Hello'));

// function readFile(link, option){
//   return database[link];
// }

module.exports = {database, appendFile};
// module.exports = fs;