const User = require('../models/user');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'thisissecretkey';

// Post  Registered Form

exports.postRegister = (app) => {
  app.post('/user/register',(req, res) =>{
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
  })
    
}

// Post Login Form 

exports.postLogin =(req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    
  User.findOne({ email: email })
  .then(user => {
    if (!user) {
      res.status(404).json({message: 'The'})
    }
    bcrypt
      .compare(password, user.password)
      .then(doMatch => {
        if (doMatch) {
         const payload = {id: user.id};
         const token = jwt.sign(payload, jwtOptions.secretOrKey);
         res.json({message:'ok', token});
        }
        return res.status(401).json({message:''})
      })
      .catch(err => {
        console.log(err);
      });
  })
}