const express= require('express')

const app=express()
const port= 5001
const date=require('./midle/date')

app.get('/homepage',(req,res)=>{
    res.sendFile(__dirname+'/public/homepage.html')
})
app.get('/service',date,(req,res)=>{
    res.sendFile(__dirname+'/public/service.html')
})











app.listen(port, err=>{
    err? console.log(err):console.log(`You did good go the port ${port}`)
})