const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Order = new Schema({
    _id: {
        type: String
    },
    order_id: {
        type: String
    },
    description: {
        type: String
    },
    total_price: {
        type: Number
    },
    product_list: [
        {ref_product: 
            { type: Schema.Types.ObjectId, ref: 'Product'}
        ,
         amount: Number}
    ],
    ref_address: 
        { type: Schema.Types.ObjectId, ref: 'Address'}
    ,
    ref_user: 
        { type: Schema.Types.ObjectId, ref: 'User' }
    
});

module.exports = mongoose.model('Order', Order);