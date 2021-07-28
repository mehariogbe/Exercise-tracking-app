const User = require('../models/user');

function userIndex(req, res) {
    User.find({}, function (err, users) {
        if (err) {
            return res.send('error =(');
        }
        res.render('users/index', {
            users
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


module.exports = {
    userIndex, updateUser, deleteUser,
}