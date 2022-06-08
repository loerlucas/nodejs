const express = require('express')
const path = require('path')

const app = express()
const port = 3000 // variavel ambiente
const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req,res,next)
{
    req.authStatus = true

    if(req.authStatus)
    {
        console.log('Está Logado, pode continuar')
        next()
    }
    else{
        console.log('Não esta logado, faça o login para continuar')
        next()
    }
}

app.use(checkAuth)

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`)
})