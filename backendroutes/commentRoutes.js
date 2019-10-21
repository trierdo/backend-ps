const express = require('express');
const commentRoutes = express.Router();
const Comment = require("../models/comments.model");

commentRoutes.get('user/getAllComments/:userID', (req, res) => {
    Comment.find({"ref_user" : req.params.userID})
    .then(commentDataFromDB => {
        console.log(commentDataFromDB);
        res.status(200).json({'addressData': commentDataFromDB});
    })
    .catch(error => {
     console.log(error) ;
    })
  });

  commentRoutes.get('product/getAllComments/:productID', (req, res) => {
    Comment.find({"ref_product" : req.params.productID})
    .then(commentDataFromDB => {
        console.log(commentDataFromDB);
        res.status(200).json({'addressData': commentDataFromDB});
    })
    .catch(error => {
     console.log(error) ;
    })
  });


  commentRoutes.post("/createComment/:userID", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const ref_user = req.params.userID;
    const ref_product = req.body.ref_product;
   
    Comment.create({
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



  commentRoutes.post('/deleteComment/:commentId', (req, res, next) => {
    Comment.findByIdAndRemove(req.params.commentId)
    .then()
    .catch((error) => {
      console.log(error);
    })
  });


  commentRoutes.post('/editComment/:commentId', (req, res) => {
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
  