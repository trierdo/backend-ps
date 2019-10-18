/* {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema({
  _id: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  ref_user: 
    { type: Schema.Types.ObjectId, ref: 'User' }
  ,
  ref_product: 
    { type: Schema.Types.ObjectId, ref: 'Product' }
  ,
  ref_comment: 
    { type: Schema.Types.ObjectId, ref: 'Comment' }
  ,
  created: { 
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comment', Comment);