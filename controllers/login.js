const UserRegister = require('../models/manual_register');

module.exports = {
    logIn(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        req.assert('email', 'Email is not valid').isEmail();
        req.assert('email', 'Email cannot be blank').notEmpty();
        req.assert('password', 'Password cannot be blank').notEmpty();
        req.sanitize('email').normalizeEmail({ remove_dots: false });

        //Check for validation Errors
        const errors = req.validationErrors();
        if (errors) return res.status(400).send(errors);

        UserRegister.findOne({ email }, (err, user) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            if (!user) {
                return res.status(404).send({
                    msg: `The email address ${email} is not associated with any account. Double-check your email address and try again`
                });
            }
            comparePassword(email, password, (err, isMatch) => {
                if (!isMatch)
                    return res
                        .status(401)
                        .send({ msg: 'Invalid email or password' });

                //Successful Login
                res.json(user);
            });
        });
    }
};

function comparePassword(email, password, callback) {
    UserRegister.findOne({ email, password }, err => {
        if (err) {
            callback(null, false);
        } else {
            callback(null, true);
        }
    });
}
