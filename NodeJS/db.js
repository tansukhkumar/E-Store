const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Project_E-Store',(err) => 
{
    if(!err)
        console.log('MongoDB Connection Successed..');
    else
        console.log("Error = "+JSON.stringify(err,undefined,2))
});
 module.exports = mongoose;