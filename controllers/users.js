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
           return user.save();
        })
        .then(result => {
            // console.log(result);
        })
        .catch(err => {
            console.log(err);
        })

}