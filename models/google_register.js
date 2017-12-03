const mongoose = require('mongoose');
const { Schema } = mongoose;

const googleSchema = new Schema(
    {
        googleIdToken: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        fullName: { type: String },
        email: { type: String, required: true },
        localID: { type: String, required: true }
    },
    { collection: 'googleUser' }
);

module.exports = mongoose.model('GoogleRegister', googleSchema);
