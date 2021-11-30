// require express
const express = require('express');
// initialise express
const app = express();
// define port
const port = process.env.PORT || 8000;

// require db and schema
const db = require('./config/mongoose');
const Safar = require('./models/safarSchema');

app.set('view engine', 'ejs');
app.set('views','views');


app.use(express.urlencoded());
app.use(express.static('static'));

// use express router
app.use('/', require('./routes/index'));

// listening to port for changes
app.listen(port,function(err){
    if(err){
        console.log('Error:',err);
    }
    console.log('Server is running on port:',port);
})

