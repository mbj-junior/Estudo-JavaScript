function carregar(){

    let mensagem = window.document.getElementById('mensagem')
    let imagem = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    
    mensagem.innerHTML = `Agora são ${hora}:${data.getMinutes()}`
    
        if (hora >= 0 && hora < 12) {
            imagem.src = 'img/manha.png'
            imagem.width = 250
            imagem.height = 250
            document.body.style.background = '#e2cd9f'
        } else if (hora>=12 && hora <18){
            imagem.src = 'img/tarde.png'
            imagem.width = 250
            imagem.height = 250
            document.body.style.background = '#add8e6'
        } else{
            imagem.src = 'img/noite.png'
            imagem.width = 250
            imagem.height = 250
            document.body.style.background = '#515154'
        }
}



