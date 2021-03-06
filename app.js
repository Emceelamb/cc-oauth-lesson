const express = require('express')
const path = require('path')
const app = express();

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public/home.html'))
})
app.get('/login', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public/login.html'))
})

app.get('/secret', (req, res)=>{
  res.send(`Welcome to the secret area!`)
})

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))