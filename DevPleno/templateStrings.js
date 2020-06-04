//Pular linha é só da ENTER
const strMultilinha =  `linha 1
linha 2
linha 3`
console.log(strMultilinha)

//interpolar
const a = 10
const interpolar = `
exemplo 1 = ${1+1}
exemplo 2 = ${a}`
console.log(interpolar)

//criar TAG
function tag(strings, ...values){
    console.log(strings, values)
    console.log(strings.raw[0])
    return 'opa'
}

const str = tag `Olá 
${10} mundo ${20}`
console.log(str)


