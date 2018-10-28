var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("time_watch");
    var myobj = [
    { id: 11, start:Date.now(), end: ''},
    { id: 12, start:Date.now(), end: ''},
    { id: 13, start:Date.now(), end: ''},
    { id: 14, start:Date.now(), end: ''},
    { id: 15, start:Date.now(), end: ''},
    { id: 16, start:Date.now(), end: ''},
    { id: 17, start:Date.now(), end: ''},
    { id: 18, start:Date.now(), end: ''},
    { id: 19, start:Date.now(), end: ''},
    { id: 20, start:Date.now(), end: ''}
  ];
  dbo.collection("watch").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});