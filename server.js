const express = require('express')
const date = require ('./midelware/Date')

const app = express()

const port = 3008

//route 
app.get('/get',(req,res)=>{
    res.send('you did first express project ')
})

// jiben les fichiers html 
app.use('/static',express.static(__dirname +'/public'))


app.get('/HomePage',date,(req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname + '/public/Contact.html')
})
app.get('/Services',date,(req,res)=>{
    res.sendFile(__dirname + '/public/Services.html')
})

app.listen(port,err=>{
err? console.log(err):console.log(`you are connected to the ${port}`)
})
