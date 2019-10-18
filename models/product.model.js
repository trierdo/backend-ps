const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({    
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
    pic_list: [String],
    unit: {
        type: String,
        enum: ['g', 'kg', 'pound', 'l', 'ml', 'pcs']
    },
    manufacturer: {
        type: String
    },
    ref_category:
        { type: Schema.Types.ObjectId, ref: 'Category' }
    ,
    rating: [{
        Rating: Number,
        ref_rated_by_user: 
            { type: Schema.Types.ObjectId, ref: 'User' }
        
    }]
    
    
});

module.exports = mongoose.model('Product', Product);