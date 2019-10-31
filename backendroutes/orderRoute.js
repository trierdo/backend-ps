require('dotenv').config();
const express = require('express');
const orderRoutes = express.Router();
let Order = require('../models/order.model');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');

// we need cors because JavaScript could otherwise not make requests to other servers than the one that delivered the JavaScript 

//to parse the JSON string in the body of the post requests into JavaScript objects we use the bodyParser


//we connect the mongoose object to the MongoDB database "order" that will store and deliver our order data


//now we define the rest endpoints for the CRUD methods and implement the CRUD methods

//R: read all orders

orderRoutes.route('/').get(function (req, res) {
    console.log("got a request");
    Order.find(function (err, order) {
        if (err) {
            console.log(err);
        } else {
            res.json(order);
        }
    });
});

//C: creat a new order

orderRoutes.route('/add').post(function (req, res) {
    const order_id = "od" + Math.random().toString().slice(2);
    const description = req.body.description;
    const total_price = req.body.total_price;
    const product_list = req.body.product_list;
    const ref_address = req.body.ref_address;
    const ref_user = req.body.ref_user;
    console.log("Reqest to save this order:" + JSON.stringify(req.body));

    Order.create({
        _id: new mongoose.mongo.ObjectId(),
        order_id,
        description,
        total_price,
        product_list,
        ref_address,
        ref_user
        })
        .then(() => { return res.status(200).json({ 'success': 'order added successfully'});

          })
      .catch(error => {
        console.log(error);
  })
});

//R: read one order defined be the id of the order

orderRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Order.findById(id, function (err, order) {
        res.json(order);
    });
});

//U: update the order with the given id

orderRoutes.route('/update/:id').post(function (req, res) {
    Order.findById(req.params.id, function (err, order) {
        if (!order) res.status(404).send("order to update not found, order _id:" + req.params.id);
        else {
            order.order_id = req.body.order_id;
            order.order_name = req.body.order_name;
            order.order_value = req.body.order_value;

            order.save().then(order => {
                res.json('order updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    });
});

//D: delete the order with the given id 

orderRoutes.route('/delete/:id').get(function (req, res) {
    Order.deleteOne({ "_id": req.params.id }, function (err, order) {
        if (!order)
            res.status(404).send("data is not found");
        else
            res.json('order deleted!');
    });
});

module.exports = orderRoutes;