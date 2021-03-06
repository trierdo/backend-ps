const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let User = new Schema({
    _id: {
        type: String
    },
    user_name: {
        type: String
    },
    user_first_name: {
        type: String
    },
    user_last_name: {
        type: String
    },
    user_password: {
        type: String
    },
    user_email: {
        type: String
    },
    user_phone: {
        type: String
    },
    ref_fav_products: [
        { type: Schema.Types.ObjectId, ref: 'Product' }
    ]  
});

module.exports = mongoose.model('User', User);