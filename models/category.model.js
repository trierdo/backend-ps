const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an object to create, read, update and delete asset data in the MongoDB

let Product = new Schema({
    //we do not need to define the _id to identify the asset, mongoose does this automatically
    product_id: {
        type: Number
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
    currency: {
        type: String,
        enum: ['€', '$']
    },
    amount: {
        type: Number
    },
    ref_category:
        [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    unit: {
        type: String,
        enum: ['g','kg','pound','l','L','ml']
    },
    manufacturer: {
        type: String
    },
    rating: {

    },
    pic_list: [
        {
                        
        }
    ]
  
});

module.exports = mongoose.model('Product', Product);