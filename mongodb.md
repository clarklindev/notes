# MONGODB

- MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.

- noSQL, data stored in objects
- M in MEAN stack
- download the community version of mongodb
- we are interested in basic CRUD operations - CREATE, READ, UPDATE, DELETE
- MOCHA (testing)

---

mkdir c:\data\db  
mkdir c:\data\log

---

add to path (\* note: here version 3.6):  
c:\Program Files\MongoDB\Server\3.6\bin\

---

always start mongodb  
mongod.exe

---

exercise files:

[https://github.com/iamshaunjp/mongodb-playlist.git]()

---

goto folder for exercise  
checkout branch:

```
git checkout lesson-1
```

run:

```
npm init --yes
```

---

## install dependencies

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

mongoose is a package that makes it easier to interact with mongodb.

mongoose - elegant mongodb object modeling for node.js

mongoose:

```
npm install mongoose --save
```

---

config file

by default you can create a folder at

```
c:\data\db
```

---

TRY:  
create a file at C:\Program Files\MongoDB\Server\3.6\mongod.cfg that specifies both systemLog.path and storage.dbPath:

```
systemLog:
destination: file
path: c:\data\log\mongod.log
storage:
dbPath: c:\data\db
```

---

## Connecting to MongoDB

- .connect() if testaroo does not exist, it will create it
- listen for when connection is successfully made

```js
//test/connection.js
const mongoose = require('mongoose');
//connect to mongodb database testaroo
mongoose.connect('mongodb://localhost/testaroo');

//listen to event once, listen for all errors
mongoose.connection
  .once('open', function() {
    console.log('Connection has been made');
  })
  .on('error', function(error) {
    console.log('Error: ', error);
  });
```

## Models and Collections

```js
//models/mariochar.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

//'mariochar' is the collection (the model) and its based on MarioCharSchema,

const MarioChar = mongoose.model('mariochar', MarioCharSchema);
module.exports = MarioChar;

var myChar = new MarioChar({});
```

## using mocha for testing

update 'test' script in package.json

```
  "test":"mocha"
```

cmd:

```
npm run test
```

---

### Use ES6 promises

in connection.js

```
mongoose.Promise = global.Promise;
```

---

### Connect to the database before tests run

```
before(function(done){
  //connect to mongodb
}
```

---

## Robomongo

visual representation of data in mongodb
[robomongo.org]()

---

### Dropping a collection

```
//Drop the characters collections before each test
beforeEach(function(done){
    //drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});
```

### Finding records

save() method was on a single instance..
myChar = new MarioChar({name:'Mario'})
myChar.save()

find() methods are used on the models themselves
MarioChar.find({name:'Mario'})

MarioChar.findOne({name:'Mario'}).then(function(result){
assert(result.name === 'Mario');
done();
});

### finding by ObjectID

finding specific records by ID

```
MarioChar.findOne({_id: char._id}).then(function(result){   //no need fo using .toString() here...
  assert(result._id.toString() === char._id.toString());    //comparing the string not object
  done();
});
```

### deleting records

char.remove() //remove single instance
MarioChar.remove() //remove collection
MarioChar.findOneAndRemove() //find first that matches criteria and remove

```
MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
    MarioChar.findOne({name:'Mario'}).then(function(result){
        assert(result === null);
        done();
    });
});
```

### process

- create and save a new record to db
- use findOneAndRemove() to remove the record
- try to findOne in the db (the one we just removed)
- assert that the result is null

---

### Updating records

- char.update() //update a single record instance of a particular model
- MarioChar.update() //update all to a specific criteria
- MarioChar.findOneAndUpdate() //update a single one

we also pass in a second argument, an object representing the changes we want to make to that record

### process

- create and save a new record to db
- use findOneAndUpdate() to update the name of the record
- try to findOne in the db (the one we just removed)
- assert that the result has the updated property value

---

### update operator

### Summary

- make a connection to MongoDb using mongoose
- set up a simple test environment with Mocha
- create a model and schema
- create an instance of a model (a single record) and save it to the database
- drop a collection from the database
- saving records: find() and findOne()
