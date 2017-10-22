var searchController = require('../controllers/search');
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

    app.post('/search', searchController.searchAll);
};
