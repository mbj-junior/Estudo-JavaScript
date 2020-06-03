function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let anoInformado = document.getElementById('txtano')
    let res = document.getElementById('res')
    //let res = document.querySelector('div#res')

    if (anoInformado.value.length == 0 || anoInformado.value > ano) {
        window.alert(`${anoInformado.value} Não é válido`)
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(anoInformado.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade>=0 && idade<17) {
                    img.setAttribute('src', 'img/homemCrianca.png')                    
                }else if(idade<65) {
                    img.setAttribute('src', 'img/homemAdulto.png') 
                }else{
                    img.setAttribute('src', 'img/homemIdoso.png') 
                }
            } else if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade>=0 && idade<17) {
                    img.setAttribute('src', 'img/mulherCrianca.png')
                }else if(idade<65) {
                    img.setAttribute('src', 'img/mulherAdulta.png')
                }else {
                    img.setAttribute('src', 'img/mulherIdosa.png')
                }
            }
        res.style.textAlign = 'center' // alinhamento pelo JS
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}