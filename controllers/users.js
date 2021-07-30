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



// function updateUser(req, res) {
//     const id = req.params.id;
//     const name = req.body.name;
//     const email = req.body.email;
//     const birthday = req.body.birthday;
//    User.findByIdAndUpdate(id, {name: name}, {email: email}, {birthday: birthday}, function(err, res) {
//        if(err) {
//            res.send(err);
//        } else {
//            res.redirect('/users/update');
//        }
//    }) 
// }
function updateIndex(req,res) {
    let userId = req.params.id;
    User.findById(userId)
        .then(user => {
          res.render("users/update", {
            user: user,
            title: 'User update'
          });
        })
        .catch(error => {
          console.log(`Error fetching user by ID: ${error.message}`);
          next(error);
        });

} 

function updateUser(req, res, next)  {
    console.log(req.params.id);
    let userId = req.params.id,
    userParams = {
        name: req.body.name,
        email: req.body.email,
        birthday: req.body.birthday,
    };
    User.findByIdAndUpdate(userId, {
        $set: userParams
    })
    .then(user => {
        console.log(user)
        res.redirect(`/users/${userId}`);
        // res.user = user;
        next();
    })
    .catch(error => {
        console.log(`Error:${error.message}`);
        next(error);
    });
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
    updateIndex,
}