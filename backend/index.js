const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const logindetails = require('./models/model')

const server = express();
server.use(express.json()); 
server.use(cors());

const port = process.env.PORT || 3005;

mongoose.connect('mongodb://127.0.0.1:27017/projectdata');

server.post('/login', (req, res)=>{
    const {username , password}= req.body;

    logindetails.find({username:username})
    .then(user=>{
        if(user){
            if(user.password === password){

                res.json('sucessful')
            }
            else{
                res.json('incorrect password')
            }
         
        }
        else{
            res.json('no data found ')
        }
    })


})


server.post('/signup', (req , res)=>{

    logindetails.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))

});


server.get('/home', (req, res)=>{

  

})

server.listen(port, ()=>{
    console.log(`server is running on port :${port}`);
})
