const fs = require('fs')

if(!fs.existsSync('./minhaPasta')){
    console.log("Nao existe")
    fs.mkdirSync("minhaPasta")
} else if(fs.existsSync('./minhaPasta')){
    console.log("Existe")
}