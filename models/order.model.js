const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an object to create, read, update and delete asset data in the MongoDB

let Order = new Schema({
    //we do not need to define the _id to identify the asset, mongoose does this automatically
    _id: {
        type: String
    },
    order_id: {
        type: String
    },
    ref_user: [
        { type: Schema.Types.ObjectId, ref: 'User' }
    ],
    description: {
        type: String
    },
    product_list: 

});

module.exports = mongoose.model('Order', Order);