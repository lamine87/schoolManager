const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    city: String,
    email: String,
    gender: String,
    promo: String,
    notes: Number,
    speciality: String,
    picture: String
    
},{
    collection:'users',
    minimize: false,
    versionKey: false,
}).set('toJSON', {
    transform: (doc, ret) =>{
        ret.id = ret._id
        delete ret._id
    }
})

module.exports = Schema