//modulos externos
const express = require('express')
const path = require('path')
const app = express()
const port = 5000

// modulos internos
const users = require('./users')

//middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())
app.use('/users', users)

//arquivos estaticos
app.use(express.static('public'))


const basePath = path.join(__dirname, 'templates')

//rota principal
app.get("/",(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

//not Found
app.use(function(req,res,next){
    res.status(404).sendFile(`${basePath}/404.html`)

})

//Listen
app.listen(port,function(){
    console.log(`Aplicação rodando na porta: ${port}`)
})