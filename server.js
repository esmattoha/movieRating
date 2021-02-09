const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const MovieRoutes = require('./routers/movie');

mongoose.connect('mongodb://127.0.0.1:27017/movie_rating_app', ()=>{
    console.log("Conection have been made");
})
.catch(err=>{
    console.log('App starting error: ' , error.stack);
    process.exit(1);
});

app.use(MovieRoutes);

const port = process.env.API_PORT || 8081;
app.listen(port , ()=>{
    console.log(`Api running on port ${port}` );
});
