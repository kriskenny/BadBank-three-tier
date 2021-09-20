const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017';
let db            = null;
 
// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db('myproject');
});

// create user account
function create(name, email, password, balance){
    return new Promise((resolve, reject) => {    
        const collection = db.collection('users');
        balance = parseInt(balance);
        const doc = {name, email, password, balance};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });    
    })
}

// deposit in account
function deposit(email, balance) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');        
        balance = parseInt(balance);
        collection.updateOne(
                {"email":email}, 
                {$inc: {"balance":balance}},
                function(err, result) {err ? reject(err) : resolve(result);}
            )
    });   
}

// find user account
function find(email){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({email: email})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}

// all users
function all(){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}


module.exports = {create, all, deposit};