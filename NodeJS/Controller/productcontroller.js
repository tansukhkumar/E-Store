const express = require('express');
var router = express.Router();

var {Product} = require('../Models/product');


// get All the  Product 
router.get('/',(req,res) => {
    Product.find((err,docs) => {
        if(!err)
            {
                res.send(docs);
            }
        else
        {
            console.log('Error  : '+JSON.stringify(err,undefined,2));
        }
    })
});

// get product With Id 
router.get('/:id',(req,res) => {
    if(!ObjectId.isvalid(req.param.id))
    {
        return res.status(400).send('No Record Found : ${req.param.i})')
    }
    Product.findById(req.param.id, (err,doc) => {
        if(!err)
        {
            res.send(doc);
        }
        else
        {
            console.log('Error In Find With Id :'+JSON.stringify(err,undefined,2));
        }

    })
})

//save product Details
router.post('/',(req,res) => {
    var p = new Product({
        name: req.body.name,
        discription: req.body.discription,
        price: req.body.price,
        image:req.body.image,
        category:req.body.category

    });

    p.save((err,doc) => {
        if(err)
        {
            res.send(doc);
        }
        else
        {
            console.log('Error In Save : '+JSON.stringify(err,undefined,2));
        }
    });
});


router.put('/:id',(req,res) => {
    if(!ObjectId.isvalid(req.param.id))
    {
        return res.status(400).send('No Record Found : ${req.param.i})')
    }
    var p ={
        name: req.body.name,
        discription: req.body.discription,
        price: req.body.price,
        image:req.body.image,
        category:req.body.category
    };
    Product.findByIdAndUpdate(req.param.id, {$set : p}, {new : true},(err,doc) =>{
        if(!err)
        {
            res.send(doc);
        }
        else
        {
            console.log('Error In Update : '+JSON.stringify(err,undefined,2));
        }
    });
});

// delete product

router.delete('/:id',(req,res) => {
    if(!ObjectId.isvalid(req.param.id))
    {
        return res.status(400).send('No Record Found : ${req.param.i})')
    }
    Product.findByIdAndRemove(req.param.id,(err,doc) => {
        if(!err)
        {
            res.send(doc);
        }
        else
        {
            console.log('Error In Remove : '+JSON.stringify(err,undefined,2));
        }
    });

});
module.exports = router;