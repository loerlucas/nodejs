const express = require('express')
const app = express()
const port = 3000 // variavel ambiente

const path = require('path')

app.get('/',(req,res)=>{
    res.send('Ola Mundo!')
})

app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`)
})