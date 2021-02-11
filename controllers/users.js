const User = require('../models/user');
const bcrypt = require('bcryptjs');

// exports.getLogin = (req, res, next) =>{
//     User.find({})
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err=>{
//         console.log(err);
//     })
// }
exports.postRegister = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, 12)
        .then(hashpassword => {
            const user = new User({
                username: username,
                email: email,
                password: hashpassword
            });
            user.save((error, newuser) => {
                if (error) {
                    res.status(422).json({
                        message: 'Something went wrong , please try some time later! '
                    });
                }
                res.send({ newuser });
            })
        })


}