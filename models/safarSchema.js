const mongoose = require('mongoose');

const safarSchema = new mongoose.Schema({

    username:{ type:String,required:true},

    location:{ type:String,required:true},

    image:{type:String,required:true},

    experience:{type:String,required:true},

    rating:{type:Number,required:true},

    places:{type:String,required:true},

    expenditure:{type:Number,required:true}
})

const Safar = mongoose.model('Safar',safarSchema);

module.exports = Safar;