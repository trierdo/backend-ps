require('dotenv').config();
const express = require('express');
const productRoutes = express.Router();
let Product = require('../models/product.model');

// we need cors because JavaScript could otherwise not make requests to other servers than the one that delivered the JavaScript 

//to parse the JSON string in the body of the post requests into JavaScript objects we use the bodyParser


//we connect the mongoose object to the MongoDB database "product" that will store and deliver our product data


//now we define the rest endpoints for the CRUD methods and implement the CRUD methods

//R: read all products

productRoutes.route('/').get(function (req, res) {
    console.log("got a request");
    Product.find(function (err, product) {
        if (err) {
            console.log(err);
        } else {
            res.json(product);
        }
    });
});

//C: creat a new product

productRoutes.route('/add').post(function (req, res) {
    console.log("Reqest to save this product:" + JSON.stringify(req.body));
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({ 'product': 'product added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new product failed');
        });
});

//R: read one product defined be the id of the product

productRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Product.findById(id, function (err, product) {
        res.json(product);
    });
});

//U: update the product with the given id

productRoutes.route('/update/:id').post(function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (!product) res.status(404).send("product to update not found, product _id:" + req.params.id);
        else {
            product.product_id = req.body.product_id;
            product.product_name = req.body.product_name;
            product.product_value = req.body.product_value;

            product.save().then(product => {
                res.status(200).json('product updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    });
});

//D: delete the product with the given id 

productRoutes.route('/delete/:id').get(function (req, res) {
    Product.deleteOne({ "_id": req.params.id }, function (err, product) {
        if (!product)
            res.status(404).send("data is not found");
        else
            res.json('product deleted!');
    });
});

module.exports = productRoutes;