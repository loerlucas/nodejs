const  fs  = require('fs')
const http = require('http')


const port = 3000
const server = http.createServer((req, res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const nome = urlInfo.query.nome


    if(!nome){
        fs.readFile('index.html',(err,data)=>{
            res.writeHead(200, {'content-type':'text/html'})
            res.write(data)
            return res.end()
        })
    }
    else{

        const nameNewLine = nome + '\r\n'
        fs.appendFile("arquivo.txt", nameNewLine, function (err, data) {
            res.writeHead(302, {
                location:"/",
            })
            res.end()
        })
    }

    
    
    
}) 
server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})