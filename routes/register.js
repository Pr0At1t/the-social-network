var UserRegister = require('../models/register');

module.exports = app => {
    app.post('/login', (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        UserRegister.findOne({ email, password }),
        (err, user) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            if (!user) {
                return res.status(404).send();
            }
            return res.status(200).send();
        };
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
