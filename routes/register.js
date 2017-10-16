var UserRegister = require('../models/register');
var bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json()); // to support JSON-encoded bodies
    app.use(
        bodyParser.urlencoded({
            // to support URL-encoded bodies
            extended: true
        })
    );

    app.post('/login', function(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        UserRegister.findOne({ email, password }, (err, user) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            if (!user) {
                return res.status(404).send();
            }
            return res.status(200).send(user);
        });
    });

    app.post('/register', (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        var firstName = req.body.firstname;
        var lastName = req.body.lastname;
        var dob = req.body.dob;
        var country = req.body.country;

        var newUser = new UserRegister({
            email,
            password,
            firstName,
            lastName,
            dob,
            country
        }).save((err, savedUser) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            return res.status(200).send();
        });
    });
};
