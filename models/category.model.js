const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an object to create, read, update and delete asset data in the MongoDB

let Category = new Schema({
    //we do not need to define the _id to identify the asset, mongoose does this automatically
    _id: {
        type: String
    },
    name: {
        type: String
    },
    pic_list: {
        type: String,
        type: Array
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Category', Category);