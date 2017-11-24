require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const morgan = require('morgan');

var jwt = require('jsonwebtoken');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.db.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookie.key]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/register')(app);
require('./routes/search')(app);

const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://${address}:${port}`);
});
