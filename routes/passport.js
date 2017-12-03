var bodyParser = require('body-parser');
const passport = require('passport');

module.exports = app => {
    // app.use(bodyParser.json()); // to support JSON-encoded bodies
    // app.use(
    //     bodyParser.urlencoded({
    //         // to support URL-encoded bodies
    //         extended: true
    //     })
    // );
    app.get(
        '/authenticate',
        passport.authenticate('jwt', { session: false }),
        function(req, res) {
            res.send('It worked! User id is: ' + req.user._id + '.');
        }
    );
};
