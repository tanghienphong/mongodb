const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true 
    },
    password: {
        type: String,        
    },
    birthday: Date,
    phone: {
        type: String,
        default: '0000000000'
    }
})

const User = mongoose.model('user', UserSchema)

module.exports = User