module.exports = {
    oauth: {
        google: {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
    },

    db: {
        mongoURI: process.env.MONGO_URI
    },

    cookie: {
        key: process.env.COOKIE_KEY
    }
};
