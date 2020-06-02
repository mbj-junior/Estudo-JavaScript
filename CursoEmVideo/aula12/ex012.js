let agora = new Date()
let hora = agora.getHours()

console.log(`hora do seu pc ${hora}:${agora.getMinutes()}`)

    if (hora < 12){
        console.log('Bom dia')
    }else if (hora <= 18){
        console.log('Boa Tarde')
    }else {
        console.log('Boa Noite')
    }