function contar(){
    let inicio = document.getElementById('txtInicio')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.getElementById('res')

        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            window.alert('Faltar preencher os dados')
        }else{
            res.innerHTML = 'Contando: <br>'
            let nInicio = Number(inicio.value)
            let nFim = Number(fim.value)
            let NPasso = Number(passo.value)
            if (NPasso<=0){
                window.alert('passo invalido alterado para Passo para 1')
                NPasso=1
            }

            if(nInicio<nFim){
                //Contagem crescente
                for (let i = nInicio; i <= nFim; i += NPasso) {
                    res.innerHTML += `${i} \u{1F449}`
                    
                }
            }else{
                //Contagem decrescente
                for (let i = nInicio; i >= nFim; i -= NPasso) {
                    res.innerHTML += `${i} \u{1F449}`
                    
                }
            }
            res.innerHTML += `\u{1F3c1}`

        }
}