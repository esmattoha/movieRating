const MovieSchema = require('../models/Movie');
const Rating = require('../models/Rating');
const passport = require('passport');


exports.getHome = (req, res) => {
    res.json({ messege: 'Api Initialized!' });
}

// Post A New Movie
exports.postMovie = (app) => {
    app.post('/movies', (req, res) => {
        const newMovie = new MovieSchema({
            name: req.body.name,
            description: req.body.description,
            release_year: req.body.release_year,
            genre: req.body.genre
        });
        newMovie.save((err, movie) => {
            if (err) {
                console.log(err);
            }
            res.send(movie);
        });
    })

}

// Fetched all Movies
exports.getMovies = (app) => {
    app.get('/movies', (req, res) => {
        MovieSchema.find({})
            .then((movies) => {
                res.send({ movies });
            })
            .catch(err => console.log(err));
    })

}

// Fetched a paticuler Movie using id 
exports.getMovie = (req, res) => {
    MovieSchema.findById(req.params.id)
        .then(movie => {
            res.send(movie);
        })
        .catch(err => console.log(err));
}

// Post Your Rating
exports.postRate = (req, res) => {
    const rating = new Rating({
        movie_id: req.params.id,
        user_id: req.params.user_id,
        rate: req.body.rate,
    })
    rating.save()
        .then(() => {
            res.send({
                movie_id: rating.movie_id,
                user_id: rating.user_id,
                rate: rating.rate
            })
        }).catch(err => {
            return err;
        })
}