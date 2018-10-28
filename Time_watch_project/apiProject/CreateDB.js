var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("time_watch");
  var myobj = [
    { id: 11, firstName: 'איל', lastName: 'קיציס',login:'false'},
    { id: 12, firstName: 'אלי', lastName: 'פיניש',login:'false'},
    { id: 13, firstName: 'מראינו', lastName: 'אידלמן',login:'false'},
    { id: 14, firstName: 'עלמה', lastName: 'זק',login:'false'},
    { id: 15, firstName: 'טל', lastName: 'פרידמן',login:'false'},
    { id: 16, firstName: 'יובל', lastName: 'סמו',login:'false'},
    { id: 17, firstName: 'אסי', lastName: 'כהן',login:'false'},
    { id: 18, firstName: 'שני', lastName: 'כהן',login:'false'},
    { id: 19, firstName: 'רועי', lastName: 'בר נתן',login:'false'},
    { id: 20, firstName: 'ירון', lastName: 'ברלד',login:'false'}
  ];
  dbo.collection("employees").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});


