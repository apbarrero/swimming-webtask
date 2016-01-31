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

var getMeters = function(text) {
   var re = /(\d+) meters/;
   var match = re.exec(text);
   return match[1];
};

var getSeconds = function(text) {
   var re = /(\d+)'(\d{2})/;
   var match = re.exec(text);
   return (match[1]*60) + parseInt(match[2], 10);
};

module.exports = function (ctx, done) {
   var dbUri = ctx.data.MONGO_URL;
   var date = new Date(ctx.data.createdAt);
   var meters = getMeters(ctx.data.text);
   var seconds = getSeconds(ctx.data.text);

   console.log(ctx.data.createdAt);
   console.log(ctx.data.text);

   MongoClient.connect(dbUri, function (err, db) {
      if(err) done(err);


      insertSwimming(db, date, meters, seconds, function() {
         db.close();
         done(null, 'Success');
      });
   });
};

