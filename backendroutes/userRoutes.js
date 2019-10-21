const express = require('express');
const userRoutes = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


userRoutes.post("/login", (req, res) => {
    const theUsername = req.body.username;
    const thePassword = req.body.password;
  
    if (theUsername === "" || thePassword === "") {
      
      return res.status(401).json({ 'error': 'One input was empty' });
    }
  
    User.findOne({ "user_name": theUsername })
    .then(user => {
        if (!user) {
        
          return res.status(401).json({ 'error': 'no such user found' });
        }
        if (bcrypt.compareSync(thePassword, user.user_password)) {
            return res.status(200).json({ 'user': user });
        } else {
            return res.status(401).json({ 'error': 'wrong password' });
        }
    })
    .catch(error => {
      console.log(error);
    })
  });


  userRoutes.post("/signup", (req, res) => {
    const user_name = req.body.user_name;
    const user_password = req.body.user_password;
    const user_first_name = req.body.user_first_name;
    const user_last_name = req.body.user_last_name;
    const user_email = req.body.user_email;
    const user_phone = req.body.user_phone;
    const all_fields = [user_name, user_password, user_first_name, user_last_name, user_email, user_phone]
    const empty_fields = all_fields.filter(element => element === "");

    if (empty_fields.length > 0 ) {
        return res.status(401).json({ 'error': 'all fields must be filled' });
    }
    User.findOne({ "user_name": user_name})
      .then(user => {
        if (user !== null) {
          return res.status(401).json({ 'error': 'user already exists' });
        } else if(!emailValidation(user_email)){
            return res.status(401).json({ 'error': 'not a real email' });
        }
        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(user_password, salt);
        User.create({
            user_name,
            user_password: hashPass,
            user_first_name,
            user_last_name,
            user_email,
            user_phone
        })
        return res.status(200).json({ 'success': 'registration was successfull' });
         
      })
      .catch(error => {
        console.log(error);
      })
  });

  userRoutes.get('/getUserData/:userName', (req, res) => {
    User.findOne({"user_name": req.params.userName})
    .then(userDataFromDB => {
        console.log(userDataFromDB);
        res.status(200).json({'userdata': userDataFromDB});
    })
    .catch(error => {
     console.log(error) ;
    })
  });


  userRoutes.post('/editUser/:userID', (req, res) => {
    const { user_name, user_first_name, user_last_name, user_password, user_email, user_phone } = req.body;
    console.log("log: " + req.params.userID);
    User.update({_id: req.params.userID}, { $set: {user_name, user_first_name, user_last_name, user_password, user_email, user_phone }})
    .then((response) => {
        res.status(200).json({'response': response});
    })
    .catch((error) => {
      console.log(error);
    })
  });


  function emailValidation (email){
    let realEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return realEmail.test(String(email).toLowerCase());
  }

  module.exports = userRoutes;