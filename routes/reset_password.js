const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');

/* GET users listing. */
router.put('/reset', function(req, res) {

    var email_address = req.body.email_address;
    var newPassword = req.body.newPassword;
    var confirmPassword = req.body.confirmPassword;
    
    if(newPassword != confirmPassword){
        res.send("confirm password is not matched")
    } else{
        datb.query('UPDATE customer SET ? WHERE ?',[{password: newPassword}, {email_address: email_address}],(error,result)=>{
            if(error){
                res.send("error occurred")
            } else{
                res.send("Password has been successfully changed");       
            }
        });
    }

    
});

module.exports = router;
