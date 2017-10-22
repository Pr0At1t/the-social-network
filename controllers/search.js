var UserRegister = require('../models/register');

module.exports = {
    searchAll(req, res) {
        const userQuery = req.body.query;
        UserRegister.find(
            {
                $or: [
                    { firstName: { $regex: new RegExp(userQuery, 'i') } },
                    { email: { $regex: new RegExp(userQuery) } },
                    { firstName: { $regex: new RegExp(userQuery, 'i') } },
                    { email: { $regex: new RegExp(userQuery, 'i') } }
                ]
            },
            (err, users) => {
                if (err) {
                    return res.status('401').send();
                } else {
                    res.send(users);
                }
            }
        );
    }
};
