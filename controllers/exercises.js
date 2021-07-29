const Exercise = require('../models/exercise');
const User = require('../models/user');

module.exports = {
    new: newExercise,
}

function newExercise(req, res) {
    res.render('exercises/new', {
        userId: req.params.id,
        
        title: 'New Exercise',
    });
    // console.log(userId)
}