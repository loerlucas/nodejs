const fs = require('fs')

fs.stat("pasta", (err,stat) => {
    if(err){
        console.log(err)
        return
    }
    console.log(stat.isFile())
    console.log(stat.isDirectory())
    console.log(stat.isSymbolicLink())
    console.log(stat.ctime)
    console.log(stat.size)

})