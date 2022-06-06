const fs = require('fs')
var soma = 0

fs.readFile('variaveis.txt','utf-8',(err,data)=>{
    if(err)    {
    console.log(err)
    return
    }
    var linhas = data.split(" ")
    
    linhas.forEach(function(linha){
        soma = soma +  parseInt(linha)
    });
    console.log(soma)
})
