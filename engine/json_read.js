var fs = require('fs');

module.exports = function(paths){
  //Reading from the rss.json and assembling object
 //SNIPPET FROM http://stackoverflow.com/questions/10011011/using-node-js-how-do-i-read-a-json-object-into-server-memory
 //ASYNC FILE READ
var obj = fs.readFileSync(paths, 'utf8'),
    xobj = JSON.parse(obj);
    
    
// fs.readFile(paths, 'utf8', function (err, data) {
//   if (err) throw err;
//   obj = JSON.parse(data);
//   console.log(obj);
// });
return xobj;
};