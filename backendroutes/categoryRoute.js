require('dotenv').config();
const express = require('express');
const categoryRoutes = express.Router();
let Category = require('../models/category.model');

categoryRoutes.route('/').get(function (req, res) {
    console.log("got a request");
    Category.find(function (err, category) {
        if (err) {
            console.log(err);
        } else {
            res.json(category);
        }
    });
});

//C: creat a new category

categoryRoutes.route('/add').post(function (req, res) {
    console.log("Reqest to save this category:" + JSON.stringify(req.body));
    let category = new Category(req.body);
    category.save()
        .then(category => {
            res.status(200).json({ 'category': 'category added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new category failed');
        });
});

//R: read one category defined be the id of the category

categoryRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Category.findById(id, function (err, category) {
        res.json(category);
    });
});

//U: update the category with the given id

categoryRoutes.route('/update/:id').post(function (req, res) {
    Category.findById(req.params.id, function (err, category) {
        if (!category) res.status(404).send("category to update not found, category _id:" + req.params.id);
        else {
            category.category_id = req.body.category_id;
            category.category_name = req.body.category_name;
            category.category_value = req.body.category_description;
            category.save().then(category => {
                res.json('category updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    });
});

//D: delete the category with the given id 

categoryRoutes.route('/delete/:id').get(function (req, res) {
    Category.deleteOne({ "_id": req.params.id }, function (err, category) {
        if (!category)
            res.status(404).send("data is not found");
        else
            res.json('category deleted!');
    });
});

module.exports = categoryRoutes;