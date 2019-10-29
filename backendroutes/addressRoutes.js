const express = require('express');
const addressRoutes = express.Router();
const Address = require("../models/address.model");
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');


addressRoutes.route('/getAddressData/:userId').get((req, res) => {
  console.log("req.params.userId",req.params.userId)
    Address.find({"ref_user" : ObjectId(req.params.userId)})
    .then(addressDataFromDB => {
        res.status(200).json({'addressData': addressDataFromDB});
    })
    .catch(error => {

     console.log("Keine Adresse?",error) ;
    })
  });

  addressRoutes.route('/deleteAddressData/:addressId').get((req, res) => {
    console.log("req.params.addressId",req.params.addressId)
      Address.findOneAndDelete({"_id" : ObjectId(req.params.addressId)})
      .then(addressDataFromDB => {
          res.status(200).json({'addressData': addressDataFromDB});
      })
      .catch(error => {
  
       console.log("Keine Adresse?",error) ;
      })
    });

  addressRoutes.route("/createAddress").post((req, res) => {
    console.log("req.body für create address",req.body)
    
    
    const type = req.body.type;
    const street = req.body.street;
    const zip_code = req.body.zip_code;
    const city = req.body.city;
    const iso_country_code = req.body.iso_country_code;
    const ref_user = req.body.ref_user;
    const pickup_station_id = req.body.pickup_station_id;

    const pickup_ident_no = req.body.pickup_ident_no;
    // ist alles ein pflichtfeld?
    const all_fields = [type, street, zip_code, city, iso_country_code, ref_user]
    const empty_fields = all_fields.filter(element => element === "");

    if (empty_fields.length > 0 ) {
        return res.status(401).json({ 'error': 'all fields must be filled' });
    }
    
    Address.create({
        _id: new mongoose.mongo.ObjectId(),
        type,
        street,
        zip_code,
        city,
        iso_country_code,
        ref_user,
        pickup_station_id,
        pickup_ident_no
        })
        .then(() => { return res.status(200).json({ 'success': 'registration was successfull'});

          })
      .catch(error => {
        console.log(error);
  })
});

  // Bisher gibt es nur eine Addresse für einen User
  addressRoutes.route('/editAddress/:userID').post((req, res) => {
    const { type, street, zip_code, city, iso_country_code, pickup_station_id, pickup_ident_no } = req.body;
    console.log("log: " + req.params.userID);
    Address.update({ref_user: ObjectId(req.params.userID)}, { $set: {type, street, zip_code, city, iso_country_code, pickup_station_id, pickup_ident_no }})
    .then((response) => {
        res.status(200).json({'response': response});
    })
    .catch((error) => {
      console.log(error);
    })
  });



module.exports = addressRoutes;