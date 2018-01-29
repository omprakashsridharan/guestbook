const db = require('../config')

var post ={
    getAllPosts :(callback) => {
        db.query('select * from post',callback)
    },
    addPost :(post,callback) =>{
        db.query('insert into post (name,message) values(?,?)',[post.name,post.message],callback)
    }
}

module.exports=post
