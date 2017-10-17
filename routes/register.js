var registerController = require('../controllers/register');
var loginController = require('../controllers/login');
var bodyParser = require('body-parser');
var validator = require('express-validator');

module.exports = app => {
    app.use(bodyParser.json()); // to support JSON-encoded bodies
    app.use(
        bodyParser.urlencoded({
            // to support URL-encoded bodies
            extended: true
        })
    );
    app.use(validator());

    app.post('/login', function(req, res) {
        loginController.logIn(req, res);
    });

    app.post('/register', (req, res) => {
        registerController.register(req, res);
    });
};
