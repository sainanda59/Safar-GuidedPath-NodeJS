const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://safar:pass@cluster0.5ne74.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const db = mongoose.connection;

db.on('error', console.error.bind
(console, "Error Connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database');
})


module.exports = db;