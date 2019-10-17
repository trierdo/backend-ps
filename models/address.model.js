const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an object to create, read, update and delete asset data in the MongoDB

let Address = new Schema({
    //we do not need to define the _id to identify the asset, mongoose does this automatically
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
    ref_fav_products:
        [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  
});

module.exports = mongoose.model('Address', Address);