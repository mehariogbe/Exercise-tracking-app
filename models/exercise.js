const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    notes: {type: String},
    date: {type: Date},
},{
    timestamps: true
})

const exerciseSchema = new Schema({
    typeOfExercise: {type: String},
    date: {type: Date},
    sets: {type: Number},
    reps: {type: Number},
    notes: [noteSchema]
},{
    timestamps: true
})



module.exports = mongoose.model('User', exerciseSchema);