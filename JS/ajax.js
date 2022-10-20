
const express =require('express')
const mysql = require('mysql')//导入模块
//连接数据库
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'jquery'
})


//express框架 配置
const app = new express()

app.all('/server-denglu',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    // console.log(req.query.username);
    let sql='select * from login where username="'+req.query.username+'" and password="'+req.query.password+'"'
   
    db.query(sql,(err,results)=>{
        if(err) return console.log(err.message)
        if(results[0]){
            console.log(results)
            res.send('1')
        }else{
            res.send('0')
        }
    })
})

app.all('/server-zhuce',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    // console.log(req.query.username);
    let sql='insert into login values("'+req.query.usernameX+'","'+req.query.passwordX+'","'+req.query.phoneX+'","'+req.query.addressX+'")'
    db.query(sql,(err,results)=>{
        if(err) return console.log(err.message)
        res.send(true)
    })
})

app.listen(8000,()=>{
    console.log('服务器已经启动，8000端口')
})