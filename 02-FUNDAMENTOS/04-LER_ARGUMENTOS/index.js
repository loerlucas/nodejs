//nome


console.log(process.argv)

const arg = process.argv.slice(2)

const nome = arg[0].split("=")[1]
const idade = arg[1].split("=")[1]
console.log(nome)
console.log(idade)
console.log(`O nome dele e ${nome} e ele tem ${idade} anos!`)
