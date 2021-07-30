const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    notes: {type: String},
    date: {type: Date},
},{
    timestamps: true
})

const userSchema = new Schema({
    name: {type: String},
    email: {type: String},
    googleId: {type: String},
    birthday: {type: Date},
    notes: [noteSchema],
},{
    timestamps: true
})



module.exports = mongoose.model('User', userSchema);