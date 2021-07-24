const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String},
    email: {type: String},
    googleId: {type: String},
    birthday: {type: Date}
},{
    timestamps: true
})



module.exports = mongoose.model('User', userSchema);