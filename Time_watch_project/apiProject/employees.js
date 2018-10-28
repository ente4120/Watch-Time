var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var results = "";


router.get('', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("time_watch");
        dbo.collection("employees").find({}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
        });
      }); 
  //res.send(results);
});

module.exports = router;
