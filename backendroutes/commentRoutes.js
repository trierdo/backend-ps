const express = require('express');
const commentRoutes = express.Router();
const Comment = require("../models/comments.model");
const ObjectId = require('mongodb').ObjectID;

commentRoutes.route('/user/getAllComments/:userID').get((req, res) => {
    Comment.find({"ref_user" : ObjectId(req.params.userID)})
    .then(commentDataFromDB => {
        console.log(commentDataFromDB);
        res.status(200).json({'addressData': commentDataFromDB});
    })
    .catch(error => {
     console.log(error) ;
    })
  });

  commentRoutes.route('/product/getAllComments/:productID').get((req, res) => {
    Comment.find({"ref_product" : ObjectId(req.params.productID)})
    .then(commentDataFromDB => {
        console.log(commentDataFromDB);
        res.status(200).json({'addressData': commentDataFromDB});
    })
    .catch(error => {
     console.log(error) ;
    })
  });


  commentRoutes.route("/createComment/:userID").post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const ref_user = ObjectId(req.params.userID);
    const ref_product = ObjectId(req.body.ref_product);
   
    Comment.create({
        _id: new mongoose.mongo.ObjectId(),
        title,
        description,
        ref_user,
        ref_product
        })
        .then(() =>{
            return res.status(200).json({ 'success': 'registration was successfull' });
        })
        
         

      .catch(error => {
        console.log(error);
  })
});



  commentRoutes.route('/deleteComment/:commentId').post((req, res, next) => {
    Comment.findByIdAndRemove(req.params.commentId)
    .then()
    .catch((error) => {
      console.log(error);
    })
  });


  commentRoutes.route('/editComment/:commentId').post((req, res) => {
    const { title, description } = req.body;
    Comment.update({_id: req.params.commentId}, { $set: {title, description}})
    .then((response) => {
        res.status(200).json({'response': response});
    })
    .catch((error) => {
      console.log(error);
    })
  });

  

module.exports = commentRoutes;
  