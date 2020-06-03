let num = [3,2,5,1,6,1,32,6]
console.log(num)

num.sort() //valores estão como string por isso o 32 fica depois do 3
console.log(num)

num[6] = 2
console.log(num)

num.push(15)
console.log(num)

num.pop()
console.log(num)
/*
for (let i = 0; i < num.length; i++) {
    console.log(`Endereço [${i}] --> valor = ${num[i]}`)
}
*/

for (const i in num) {
    console.log(`Endereço [${i}] --> valor = ${num[i]}`)
}

console.log('o valor está na posição '+ num.indexOf(32))
console.log('o valor está na posição '+ num.indexOf(44)) //apresenta -1 quando não encontra