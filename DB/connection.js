const mongoose = require('mongoose');
const URI ="mongodb://127.0.0.1:27017/empManage";
const connectDB = async()=>{
    await mongoose.connect(URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("db connected....")
}


module.exports = connectDB;

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
//  var URI = "mongodb://127.0.0.1:27017/demo";


//  MongoClient.connect(URI,function(err,db){
//      if(err){
//          console.log(err);
//      }else{
//          console.log("db connected....!", URI);
//          db.close();
//      }
//  });