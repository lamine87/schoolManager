const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    gender: String,
    promo: String,
    note: String,
    speciality: String,
    picture: String,
    password: String,
    confirmPassword: String,
    
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