const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Category = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    pic_list: [String],
    description: {
        type: String
    }
});

module.exports = mongoose.model('Category', Category);