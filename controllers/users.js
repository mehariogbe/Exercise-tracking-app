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

function create (req, res) {
    const user = new User(req.body);
    user.save(function (err) {
        if (err)
        return res.send(err);
        return res.redirect('/users');
    })
}

function updateUser(req, res) {
    
}

function deleteUser(req, res) {

}


module.exports = {
    userIndex, updateUser, deleteUser,
}