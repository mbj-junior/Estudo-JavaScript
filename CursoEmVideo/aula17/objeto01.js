let amigo = {
    nome: 'jose', sexo:'M', peso: 85.4,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }

}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
amigo.engordar(33)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)