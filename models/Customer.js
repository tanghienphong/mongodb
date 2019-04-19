const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
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

const Customer = mongoose.model('customerr', CustomerSchema)

module.exports = Customer