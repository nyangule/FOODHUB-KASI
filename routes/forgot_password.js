const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');

router.get('/forgot', function(req, res) {
  
    var cell_no = req.body.cell_no;

    datb.query('SELECT * FROM customer WHERE cell_no = ?',[cell_no],(error,result)=>{
        if(error){
            res.send("error ocurred")
        } else{
            if(result[0]){
                res.send("change your password");
            } else{
                res.send("This cellphone number is not registered");
            }
        }
    });

});

module.exports = router;
