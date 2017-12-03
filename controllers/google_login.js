const GoogleAuth = require('google-auth-library');

const keys = require('../config/keys');
const GoogleRegister = require('../models/google_register');

const auth = new GoogleAuth();
const client = new auth.OAuth2(keys.oauth.google.clientID, '', '');

module.exports = {
    login(req, res) {
        const { googleIdToken } = req.body;

        client.verifyIdToken(
            googleIdToken,
            keys.oauth.google.clientID,
            (e, login) => {
                const payload = login.getPayload();
                const userid = payload['sub'];
                console.log(payload['name']);
                res.json(payload);
            }
        );
    }
};
