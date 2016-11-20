# ========concepts ==========
#   SQL                 Mongodb
#   databse             database
#   table                   collection
#   row                     document
#   column               feild
#   index                   index
#   table join             not support
#   primary key         primary key
#========concepts end===========

# connect to mongodb
#  username:password@hostname:port/dbname
#  

show dbs;

# create database
use dbname;

show collections;

db.createCollection('collection1');

# insert doc to collection
document=({
    name:"shangerbin",
    age:23
});
db.collection1.insert(document);

# update doc
# db.collection.update(
#    <query>,
#    <update>,
#    {
#      upsert: <boolean>,
#      multi: <boolean>,
#      writeConcern: <document>
#    }
# )
db.col.update({'name':'shangerbin','age':{$gt:20}},{$set:{'name':'hejuan'}},{multi:true});

# drop doc
# db.collection.remove(
#    <query>,
#    {
#      justOne: <boolean>,
#      writeConcern: <document>
#    }
# )
 db.col.remove({'name':'shangerbin','age':{$gt:20}})
db.col.remove({});

#query doc

