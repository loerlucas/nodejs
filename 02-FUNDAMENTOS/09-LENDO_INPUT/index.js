const { toUSVString } = require("util")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a sua linguagem preferida? ", (language)=>
{
    if(language === 'Python')
    {
        console.log (`${language} nem eh Linguagem, tá!!`)
    }
    else
    {
        console.log (`A minha linguagem preferida eh ${language}`)
    }
    readline.close()
})
