const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27036/badbankdata';
 
// connect to mongo
MongoClient.connect(url, {useNewUrlParser: true, user:'clarkjoey', pass:'abadbadbank'}, {useUnifiedTopology: true}, function(err, client) {
  console.log("Connected successfully to server"); 
  
  const dbName = 'myproject2';
  const db = client.db(dbName);

  var name = 'user' + Math.floor(Math.random()*10000);
  var email = name + '@mit.edu';

  var collection = db.collection('customers');
  var doc = (name, email);
  collection.insertOne(doc, {w:1}, function(err, result) {
    console.log('Document insert');
  });
});
