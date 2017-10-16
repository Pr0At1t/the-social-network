module.exports = {
    oauth: {
        google: {
            clientID: process.env.GOOGLE_CLIENT_ID || 'clientID',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'clientSecret'
        }
    },

    db: {
        mongoURI: process.env.MONGO_URI || 'mongoURI'
    },

    cookie: {
        key: process.env.COOKIE_KEY || 'cookie'
    }
};
