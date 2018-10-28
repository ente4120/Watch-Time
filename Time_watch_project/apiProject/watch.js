var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var employe = "";


router.get('/:id', function(req, res) {
    var idEmpl = parseInt (req.params.id);
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("time_watch");
    var query = { id: idEmpl };
    dbo.collection("watch").find(query).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});

router.put('/:id/:start', function(req, res) {
    var idEmpl = parseInt (req.params.id);
    var startEmpl = parseInt (req.params.start);
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("time_watch");
    var query = {id:idEmpl, start: startEmpl};
    var newvalues = {$set: {end: Date.now()} };
    dbo.collection("watch").updateMany(query, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        db.close();
    });
  });
});

router.post('/:id', function(req, res) {
    var idEmpl = parseInt (req.params.id);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("time_watch");
        var myobj = [
            {id: idEmpl, start:Date.now(),end:""}
        ];
        dbo.collection("watch").insertMany(myobj, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          db.close();
        });
      });
});
module.exports = router;
