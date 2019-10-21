const express = require('express');
const addressRoutes = express.Router();
const Address = require("../models/user.model");

addressRoutes.get('/getAddressData/:userID', (req, res) => {
    Address.findOne({"ref_user" : req.params.userID})
    .then(addressDataFromDB => {
        console.log(addressDataFromDB);
        res.status(200).json({'addressData': addressDataFromDB});
    })
    .catch(error => {
     console.log(error) ;
    })
  });


  addressRoutes.post("/createAdress/:userID", (req, res) => {
    const type = req.body.type;
    const street = req.body.street;
    const zip_code = req.body.zip_code;
    const city = req.body.city;
    const iso_country_code = req.body.iso_country_code;
    const ref_user = req.params.userID;
    const pickup_station_id = req.body.pickup_station_id;
    const pickup_ident_no = req.body.pickup_ident_no;
    // ist alles ein pflichtfeld?
    const all_fields = [type, street, zip_code, city, iso_country_code, ref_user]
    const empty_fields = all_fields.filter(element => element === "");

    if (empty_fields.length > 0 ) {
        return res.status(401).json({ 'error': 'all fields must be filled' });
    }
    Address.create({
        type,
        street,
        zip_code,
        city,
        iso_country_code,
        ref_user,
        pickup_station_id,
        pickup_ident_no
        })
        return res.status(200).json({ 'success': 'registration was successfull' });
         
      })
      .catch(error => {
        console.log(error);
  });

  // Bisher gibt es nur eine Addresse für einen User
  addressRoutes.post('/editAdress/:userID', (req, res) => {
    const { type, street, zip_code, city, iso_country_code, pickup_station_id, pickup_ident_no } = req.body;
    console.log("log: " + req.params.userID);
    Address.update({ref_user: req.params.userID}, { $set: {type, street, zip_code, city, iso_country_code, pickup_station_id, pickup_ident_no }})
    .then((response) => {
        res.status(200).json({'response': response});
    })
    .catch((error) => {
      console.log(error);
    })
  });



module.exports = addressRoutes;