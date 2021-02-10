const User = require('../models/user');

exports.getLogin = (req, res, next) =>{
    User.find({})
    .then(res => {
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.postLogin = (req, res, next )=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({
        username:username,
        email:email,
        password:password
    });
    user.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })

}