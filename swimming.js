var MongoClient = require('mongodb').MongoClient;

var insertSwimming = function(db, date, meters, seconds, cb) {
   db
   .collection('swimming')
   .insertOne({
      "date": date,
      "meters": meters,
      "seconds": seconds
   }, function (err, result) {
      if (err) return cb(err);
      console.log("Inserted one document into swimming collection");
      cb(result);
   });
};

module.exports = function (ctx, done) {
   var dbUri = ctx.data.MONGO_URL;
   MongoClient.connect(dbUri, function (err, db) {
      if(err) done(err);

      var date = ctx.data.date;
      var meters = ctx.data.meters;
      var seconds = ctx.data.seconds;

      insertSwimming(db, date, meters, seconds, function() {
         db.close();
         done(null, 'Success');
      });
   });
};

