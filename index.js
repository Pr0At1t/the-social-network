const express = require('express');

const PORT = process.env.PORT || 5001;
const app = express();

require('./routes/authRoutes')(app);

app.listen(PORT, () => {
   console.log('Listening on port 5001');
});
