require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const backendRoutes = express.Router();
const userRoutes = require('./backendroutes/userRoutes');
const addressRoutes = require('./backendroutes/addressRoutes');
const commentRoutes = require('./backendroutes/commentRoutes');
const productRoutes = require('./backendroutes/productRoute')
const orderRoutes = require('./backendroutes/orderRoute')
const categoryRoutes = require('./backendroutes/categoryRoute')
const PORT = process.env.PORT;

/*
user
address
product
category
order
comments
*/

mongoose
    .connect(`${process.env.MONGO_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));  

app.use('/', backendRoutes);
app.use('/user', userRoutes);
app.use('/address', addressRoutes);
app.use('/comment', commentRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/category', categoryRoutes);
app.listen(PORT, function () {
    console.log("Server should be running on Port: " + PORT);
});

let MasterData = require('./data/sample-data.js');

module.exports = app;


/*

let Asset = require('./asset.model');

// we need cors because JavaScript could otherwise not make requests to other servers than the one that delivered the JavaScript 

app.use(cors());

//to parse the JSON string in the body of the post requests into JavaScript objects we use the bodyParser

app.use(bodyParser.json());

//we connect the mongoose object to the MongoDB database "assets" that will store and deliver our asset data

mongoose.connect('mongodb://127.0.0.1:27017/new-assets', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})


//now we define the rest endpoints for the CRUD methods and implement the CRUD methods

//R: read all assets

assetRoutes.route('/').get(function (req, res) {
    console.log("got a request");
    Asset.find(function (err, assets) {
        if (err) {
            console.log(err);
        } else {
            res.json(assets);
        }
    });
});

//C: creat a new asset

assetRoutes.route('/add').post(function (req, res) {
    console.log("Reqest to save this asset:" + JSON.stringify(req.body));
    let asset = new Asset(req.body);
    asset.save()
        .then(asset => {
            res.status(200).json({ 'asset': 'asset added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new asset failed');
        });
});

//R: read one asset defined be the id of the asset

assetRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Asset.findById(id, function (err, asset) {
        res.json(asset);
    });
});

//U: update the asset with the given id

assetRoutes.route('/update/:id').post(function (req, res) {
    Asset.findById(req.params.id, function (err, asset) {
        if (!asset) res.status(404).send("Asset to update not found, asset _id:" + req.params.id);
        else {
            asset.asset_id = req.body.asset_id;
            asset.asset_name = req.body.asset_name;
            asset.asset_value = req.body.asset_value;

            asset.save().then(asset => {
                res.json('asset updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    });
});

//D: delete the asset with the given id

assetRoutes.route('/delete/:id').get(function (req, res) {
    Asset.deleteOne({ "_id": req.params.id }, function (err, asset) {
        if (!asset)
            res.status(404).send("data is not found");
        else
            res.json('asset deleted!');
    });
});

//connect the rest endpoints to the express server

app.use('/assets', assetRoutes);

//start the server and make it listen and answer to requests to the defined port

app.listen(PORT, function () {
    console.log("Server should be running on Port: " + PORT);
});

*/