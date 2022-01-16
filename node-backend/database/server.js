const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'franny',
    database: 'angular',
});


app.get('/users',(req,res)=>{
    let qr = `select * from users`;
    connect.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        if(result.length>0){
            res.send({
                message:'all user data',
                data:result
            });
        }
    })
});

app.listen(3000,()=>{
    console.log("success at port 3000!!")
    connect.connect(function(err){
        if(err) throw err; 
        console.log("Connected!");
    })
});


app.post('/users',(req,res)=>{
    console.log(req.body,'createdata');

    let username = req.body.username;
    let password = req.body.password;

    let qr = `insert into users(username,password) value('${username}','${password}') `
    connect.query(qr,(err,result)=>{
        if(err){console.log(err);}
        if(result.length>0){
            res.send({
                message: 'data inserted'
            });
        }
    })
})

app.get('/users',(req,res)=>{
    let qr = `select * from users(username,password) value('a','1')`;
    connect.query(qr,(err,result)=>{
        if(result.length>0){
            res.send({
                data:result
            })
        }
    })
})
