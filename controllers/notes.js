const Exercise = require('../models/exercise');
const User = require('../models/user');



function noteIndex(req, res) {
    // console.log("here")
    // User.findById(req.params.id, function (err, user) {
    //     console.log(user);
    //     if(err) console.log(err)
    //   user.notes.push(req.body);
    //   user.save(function (err) {
    //     if(err) console.log(err)
    //     res.redirect(`/user/${user._id}`);
    //   });
    // });
    res.render('exercises/notes',
    {
        title: 'All Users',
        user: req.user,
        userId: req.params.id
    })
  }

  function create(req, res) {
      console.log(req.user);
 User.findById(req.params.id, function (err, user) {
        if(err) console.log(err)
      user.notes.push(req.body);
      user.save(function (err) {
        if(err) console.log(err)
        res.redirect(`/user/${user._id}`);
      });
    });
  }

  module.exports = {noteIndex, create}
