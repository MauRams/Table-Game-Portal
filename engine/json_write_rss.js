//param is the argument which adds +1 to certain game..
module.exports = function(param){
    //reading json file from disk and assigning it
    // this will update rss file
  var readJson = require('../engine/json_read.js')('./jsonStorage/rss.json'),
        fs = require('fs');
  
  
  if(param =='game1'){
      
      var stringValue = readJson.rss[0].description,
      
     // getting current value and parsing it
      short = parseInt(stringValue.substr(29));
      short+=1;
      var ss = 'Avalable, games played total:'+short;
      readJson.rss[0].description = ss;
      
      
      
      
      
      var JSONformated = JSON.stringify(readJson, null, 4);
      fs.writeFileSync('./jsonStorage/rss.json', JSONformated);
      
      
  }
   if(param == 'game2'){
        var stringValue = readJson.rss[1].description,
        short = parseInt(stringValue.substr(29));
          short+=1;
        var ss = 'Avalable, games played total:'+short;
      
        readJson.rss[1].description = ss;
        console.log(ss);
        
        
      var JSONformated = JSON.stringify(readJson, null, 4);
      fs.writeFileSync('./jsonStorage/rss.json', JSONformated);
      
    }
    
};