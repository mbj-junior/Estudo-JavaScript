function tabuada(){
    let numElem = document.getElementById('txtNumero')
    let tabuElem = document.getElementById('selecTabuada')

    if (numElem.value.length == 0){
        window.alert('Digite um numero')
    }else{
        let numDigitado = Number(numElem.value) 
        tabuElem.innerHTML = '' //limpar a tabuada antes de iniciar

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${numDigitado} x ${i} = ${numDigitado*i}`
            item.value = `tabuada${i}`
            tabuElem.appendChild(item)
        }

    }

}