const mongoose = require('mongoose')

const Register= new  mongoose.Schema({

    username:String,
    email:String,
    password:String
})


const Userdetails = mongoose.model("userdetails" , Register);

module.exports = Userdetails;

