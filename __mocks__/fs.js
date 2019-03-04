//mocks the output text 
const database = {}

//mocks the appendFile method of the fs module
function appendFile(link, data){
  database[link] = data;
}

module.exports = {database, appendFile};
