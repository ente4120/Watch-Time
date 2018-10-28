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
        dbo.collection("employees").find(query).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
  //res.send(employe);
});

router.put('/:id/:firstName/:lastName/:login', function(req, res) {
    var idEmpl = parseInt (req.params.id);
    console.log(req.params.login);
    var firstEmpl = req.params.firstName;
    var lastEmpl =req.params.lastName;
    var loginEmpl = req.params.login;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("time_watch");
    var query = { id: idEmpl};
    var newvalues = {$set: {firstName:firstEmpl,lastName:lastEmpl,login:loginEmpl } };
    dbo.collection("employees").updateMany(query, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        db.close();
    });
  });
  //res.send(employe);
});

router.post('/:id/:firstName/:lastName/:login', function(req, res) {
    var idEmpl = parseInt (req.params.id);
    var firstEmpl = req.params.firstName;
    var lastEmpl =req.params.lastName;
    var loginEmpl = req.params.login;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("time_watch");
        var myobj = [
            {id: idEmpl, firstName:firstEmpl,lastName:lastEmpl,login:loginEmpl }
        ];
        dbo.collection("employees").insertMany(myobj, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          db.close();
        });
      });
});
router.delete('/:id', function(req, res) {
    var idEmpl = parseInt (req.params.id);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("time_watch");
        var myobj = [
            {id: idEmpl}
        ];
        dbo.collection("employees").deleteOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 deleted");
          db.close();
        });
      });
});

module.exports = router;
