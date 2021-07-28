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
    
}

function deleteUser(req, res) {

}


module.exports = {
    userIndex, updateUser, deleteUser,
}