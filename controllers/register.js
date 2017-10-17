var UserRegister = require('../models/register');

module.exports = {
    register(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        var firstName = req.body.firstname;
        var lastName = req.body.lastname;
        var dob = req.body.dob;
        var country = req.body.country;

        req.assert('email', 'Email is not valid').isEmail();
        req.assert('email', 'Email cannot be blank').notEmpty();
        req
            .assert('password', 'Password must be at least 4 characters long')
            .len(4);

        req.assert('firstname', 'Name cannot be blank').notEmpty();
        req.assert('dob', 'Date of birth cannot be blank').notEmpty();
        req.sanitize('email').normalizeEmail({ remove_dots: false });

        var errors = req.validationErrors();
        if (errors) {
            return res.status(400).send(errors);
        }

        // Making sure the account doesn't exist already
        UserRegister.findOne({ email }, (err, user) => {
            if (user)
                return res.status(400).send({
                    msg:
                        'The email address you have entered is already associated with another account.'
                });

            user = new UserRegister({
                email,
                password,
                firstName,
                lastName,
                dob,
                country
            }).save(err => {
                if (err) {
                    console.log(err);
                    return res.status(500).send();
                }
            });
            return res.status(200).send();
        });
    }
};
