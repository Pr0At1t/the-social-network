var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registerSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        dob: { type: String },
        country: { type: String }
    },
    { collection: 'registeredUser' }
);

module.exports = mongoose.model('UserRegister', registerSchema);
