module.exports = function (user,from_client){

var paths = './xmlStorage/last_game_scores.xml';

    var xmldom = require('xmldom').DOMParser,
    fs = require('fs');
    
    
fs.readFile(paths, 'utf-8', function (err, data) {
  if (err) {
    throw err;
  }
  var genreno,
      thisgenreobject,
      thisgenre,
      doc,
      genres;
  doc = new xmldom().parseFromString(data, 'application/xml');
  
  
  //removing last child child
  //IF there would be more than 10 elements, remove last one
  console.log(doc.getElementsByTagName('score').length);
  
  if(doc.getElementsByTagName('score').length>=10){
  var lastElement = doc.getElementsByTagName("score")[0];
  doc.documentElement.removeChild(lastElement);
  }
  
  var element = doc.createElement('score');
  
  var textEl = doc.createElement("game");
  var textTxt = doc.createTextNode(from_client.game);
  textEl.appendChild(textTxt);
  element.appendChild(textEl);
  
    var fromEl = doc.createElement("computerScore");
  var fromTxt = doc.createTextNode(from_client.computer_score);
  fromEl.appendChild(fromTxt);
  element.appendChild(fromEl);


   var dateEl = doc.createElement("userScore");
   var dateTxt = doc.createTextNode(from_client.player_score);
   dateEl.appendChild(dateTxt);
   element.appendChild(dateEl);
  
     var dateElx = doc.createElement("playerName");
   var dateTxtx = doc.createTextNode(user);
   dateElx.appendChild(dateTxtx);
   element.appendChild(dateElx);
  
  genres = doc.documentElement.appendChild(element);
  
 var XMLSerializer = require('xmldom').XMLSerializer;
var serializer = new XMLSerializer();
var writetofile = serializer.serializeToString(doc);

          //writing file to the disk
          fs.writeFile(paths, doc, function(err) {
          if(err) {
                return console.log(err);
              }
          console.log("The file was saved!");
})

});
}