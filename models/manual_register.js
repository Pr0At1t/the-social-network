const mongoose = require('mongoose');
const { Schema } = mongoose;

const registerSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        dob: { type: String },
        country: { type: String },
        localID: { type: String, required: true }
    },
    { collection: 'registeredUser' }
);

module.exports = mongoose.model('UserRegister', registerSchema);
