const exercise = require('../models/exercise');
const Exercise = require('../models/exercise');
const User = require('../models/user');

module.exports = {
    new: newExercise,
    show,
    create,
    
  
}

function newExercise(req, res) {
    res.render('exercises/new', {
        userId: req.params.id,
        
        title: 'New Exercise',
        user: req.user
    });
    // console.log(userId)
}
function show(req, res){
    User.findById(req.params.id, function(err, user){
        Exercise.find({user: user._id}, function(err, exercises){
        res.render('exercises/index', {
            exercises,
            title: 'Exercsie page',
            user
        });
    }) 
});
 
}

function create(req, res) {
    userId = req.params.id;
    req.body.user = userId;
    let typeOfExercise = req.body.typeOfExercise;
    let date = req.body.date;
    let sets = req.body.sets;
    let reps = req.body.reps;
    let weight = req.body.weight;
    let user = req.params.id;
    let exercise = new Exercise({ typeOfExercise, date, sets, reps, weight, user });
    Exercise.create(req.body, function (err, exercise) {
        res.redirect(`/users/${userId}/exercises/index`);
    });
}

