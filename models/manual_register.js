const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const registerSchema = new Schema(
    {
        email: { type: String, required: true, lowercase: true, unique: true },
        password: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        dob: { type: String },
        country: { type: String },
        localID: { type: String, required: true }
    },
    { collection: 'registeredUser' }
);

// Saves the user's password as hashed
registerSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

module.exports = mongoose.model('UserRegister', registerSchema);
