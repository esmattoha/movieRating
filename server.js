const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'movieratingapplicationsecretkey';
const serveStatic = require('serve-static');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(serveStatic(__dirname + '/dist'));

const MovieRoutes = require('./routers/movie');
const UserRoutes = require('./routers/users')

mongoose.connect('mongodb://127.0.0.1:27017/movie_rating_app', ()=>{
    console.log("Conection have been made");
})
.catch(err=>{
    console.log('App starting error: ' , error.stack);
    process.exit(1);
});

app.use(MovieRoutes);
app.use(UserRoutes);

const port = process.env.API_PORT || 8081;
app.listen(port , ()=>{
    console.log(`Api running on port ${port}` );
});
