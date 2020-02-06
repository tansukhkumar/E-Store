const mongoose = require('mongoose');

var Product = mongoose.model('Product', {
    name : {type : String},
    discription : {type : String},
    price : {type : Number},
    image : {type : String},
    category : {type : String}    

})

module.exports = {Product}; 