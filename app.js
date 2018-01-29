const connection = require('./config')
const express = require('express')
const bodyparser = require('body-parser')
const parseurl = require('parseurl');
const path = require('path');
const expressValidator = require('express-validator');
const app = express()
const Post = require('./model/post')

connection.connect((err)=>{
    if(err) throw err;
    console.log('Db Connected Successfully')
})

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.get('/',(req,res) => {
    res.json({message:'You did it'})
})

app.post('/api/addPost',(req,res)=>{
    console.log(req.body)
    var post = {
        name:req.body.name,
        message:req.body.message
    }
    Post.addPost(post,(err,res)=>{
        if(err) throw err
        console.log(res)
        res.json({code:true,message:'inserted successfully'})
    })
})

app.get('/api/getPosts',(req,res)=>{
    Post.getAllPosts((err,result,fields)=>{
        if(err) throw err
        console.log(result)
        res.json(result)
    })
})

app.listen(process.env.PORT || 3000);