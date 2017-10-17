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
        //   isVerified: { type: Boolean, default: false },
        //   passwordResetToken: String,
        //   passwordResetExpires: Date
    },
    { collection: 'registeredUser' }
);

export default {
    comparePassword(email, password) {
        registerSchema.findOne({ email, password }, err => {
            if (err) {
                console.log(err);
            } else {
                return true;
            }
        });
    }
};

module.exports = mongoose.model('UserRegister', registerSchema);
