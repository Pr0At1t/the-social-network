var express = require('express');
var app = express.Router();
var UserRegister = require('../models/UserRegister');

app.post('/register', function(req, res) {
    var email = req.body.email;
    var password = req.body.passoword;
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;

    var newUser = new UserRegister({
        email,
        password,
        firstName,
        lastName
    }).save((err, savedUser) => {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }

        return res.status(200).send();
    });
});

module.exports = app;
