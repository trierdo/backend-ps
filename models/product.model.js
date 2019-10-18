const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an object to create, read, update and delete asset data in the MongoDB

let Product = new Schema({
    //we do not need to define the _id to identify the asset, mongoose does this automatically
    _id: {
        type: String
    },
    product_id: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    amount: {
        type: Number
    },
    ref_category: [
        { type: Schema.Types.ObjectId, ref: 'Category' }
    ],
    unit: {
        type: String,
        enum: ['g', 'kg', 'pound', 'l', 'ml', 'pcs']
    },
    manufacturer: {
        type: String
    },
    rating: {
        currentRating: Number,
        ref_rated_by_user: [
            { type: Schema.Types.ObjectId, ref: 'Category' }
        ]
    },
    pic_list: {
        type: String,
        type: Array
    }
});

module.exports = mongoose.model('Product', Product);