module.exports = function (what,paths,user,message){
    console.log(what+'  '+paths+'  '+user+'  '+message);
    var xmldom = require('xmldom').DOMParser,
    libxmljs = require('libxmljs'),
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

var createMessage = function(text,user,what){
  var element = doc.createElement(what);

  var textEl = doc.createElement("text");
  var textTxt = doc.createTextNode(text);
  textEl.appendChild(textTxt);
  element.appendChild(textEl);

  var fromEl = doc.createElement("user");
  var fromTxt = doc.createTextNode(user);
  fromEl.appendChild(fromTxt);
  element.appendChild(fromEl);



var now = new Date();
var fdate = now.getDate() +'/'+now.getMonth()+'/'+now.getFullYear()+' '+now.getHours()+':'+now.getMinutes();

   var dateEl = doc.createElement("date");
   var dateTxt = doc.createTextNode(fdate);
   dateEl.appendChild(dateTxt);
   element.appendChild(dateEl);


  genres = doc.documentElement.appendChild(element);
}

createMessage(message,user,what);

 var XMLSerializer = require('xmldom').XMLSerializer;
var serializer = new XMLSerializer();
var writetofile = serializer.serializeToString(doc);


var valid = function (text) {
    try {
        libxmljs.parseXml(text);
    } catch (e) {
        return false;
    }

    return true;
};

var validXML = valid(writetofile);

console.log('XML valid: '+validXML);
    
    //write if valid
    if(validXML){


          //writing file to the disk
          fs.writeFile(paths, doc, function(err) {
          if(err) {
                return console.log(err);
              }
          console.log("The file was saved!");
})
}
 //return false if not valid
    else{
        console.log('Problems with xml validation');
        return false;
        
    }

});
}