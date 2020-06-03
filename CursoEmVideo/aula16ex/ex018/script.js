let numero = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')

let valores = []

function isNumero(numero){
    if(Number(numero) >= 1 && Number(numero) <= 100){
        return true
    } else {
        return false
    }
    
}

function inLista(numero, lista){
    if(lista.indexOf(Number(numero)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `${numero.value} add`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('Valores Invalidos')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Sem valores')
    } else {
        let totalElementos = valores.length
        let maiorNumero = valores[0]
        let menorNumero = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maiorNumero)
                maiorNumero = valores[pos]
            if(valores[pos] < menorNumero)
                menorNumero = valores[pos]
        }

        media = soma / totalElementos

        res.innerHTML = ''
        res.innerHTML += `<p>Total de ${totalElementos} numeros</p>`
        res.innerHTML += `<p>Maior numero ${maiorNumero}</p>`
        res.innerHTML += `<p>Menor numero ${menorNumero}</p>`
        res.innerHTML += `<p>Soma dos numeros ${soma}</p>`
        res.innerHTML += `<p>Média dos numeros ${media.toFixed(2)}</p>`

    }
}

