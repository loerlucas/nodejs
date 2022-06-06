const chalk = require('chalk')
const inquirer = require("inquirer")

    inquirer.prompt([
        {name: "nome",  message: "Insira o Nome do primeiro Usuario",},
        {name: "idade", message: "Insira a idade do primeiro Usuario"},
    ])
    .then(answer =>{
        var numero = parseInt(answer.idade)
        if(!Number.isInteger(numero))
        {
            throw new Error("Idade Invalida")
        }
        console.log(chalk.bgYellow.black(`Nome do usuario: ${answer.nome}\nIdade do Usuario: ${answer.idade}  `))
    })
    .catch((error) => console.log(error.message))




