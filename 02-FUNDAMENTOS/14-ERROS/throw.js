const x = 10

//checar se o x eh numero
if(!Number.isInteger(x)){
    throw new Error('O valor de x nao eh um numero');
}
console.log("Continuando o Programa")