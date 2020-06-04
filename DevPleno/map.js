/*Um tipo especifico de aroow function é o map, que tem
a capacidade de transformar os itens de um vetor
O map tem tbm a capacidade de percorrer o vetor*/

const vetor = [
    { 
        id: 1,
        nome: 'Bicicleta',
        categoria: 1
    },
    { 
        id: 2,
        nome: 'Carro',
        categoria: 2
    }
]

vetor.map((item)=>{
    console.log(item)
    return item
})

//modo 1
/*const vetor2 = vetor.map((item)=>{
    return 'Nome: ' + item.nome
})
*/

//modo 2 simplificado
const vetor2 = vetor.map(item=>item.nome)



console.log(vetor2)