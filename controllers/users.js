const User = require('../models/user');
const Exercise = require('../models/exercise');

function userIndex(req, res) {
    User.find({}, function (err, users) {
        if (err) {
            return res.send('error =(');
        }
        res.render('users/index', {
            title: 'All Users',
            users,
            user: req.user
        });
    });
}



function updateUser(req, res) {
    const id = req.params.id;
    const name = req.params.name;
    const email = req.params.email;
    const birthday = req.params.birthday;
   User.findByIdAndUpdate(id, {name: name}, {email: email}, {birthday: birthday}, function(err, res) {
       if(err) {
           res.send(err);
       } else {
           res.redirect('/users');
       }
   }) 
}

function deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id, function (err, user) {
        if (err) return res.redirect('/users');
        res.redirect('/users');
    });

}

function show(req, res){
    User.findById(req.params.id, function(err, user){
        Exercise.find({user: user._id}, function(err, exercises){
        res.render('users/show', {
            exercises,
            title: 'User Detail',
            user
        });
    }) 
});
 
}


module.exports = {
    userIndex,
    updateUser,
    deleteUser,
    show,
}