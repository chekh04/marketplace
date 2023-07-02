const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
let _db = null;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        console.log('CONNECTED to mongo');
        _db = client.db('shop');
        callback();
    }).catch(() => {
        console.log('Connection lost');
    });
}
const getDb = () => {
    if(_db) return _db;
    return null;
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;