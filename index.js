require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');

mongoose.connect(keys.db.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookie.key]
    })
);

require('./routes/register')(app);
require('./routes/search')(app);

const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://${address}:${port}`);
});
