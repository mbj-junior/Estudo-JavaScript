//funções anonimas
//this está referenciando internamente
const func1 = function(param1){

}

//tem esse nome pela seta "=>"
// ela tem instruções dentro dela mesma
//this está referenciando externamente
const func11 = (param)=>{

}//expression body
const func2 = function(valor){
    return valor *2
}
const func2 = (valor) => valor *2
const func2 = valor => valor *2 //quando se tem somente um valor podemos reduzir assim

const vetor = [1,2,3]
vetor
    .map(valor=>valor*2)
    .map // podemos acrescentar mais execuções de modo mais simples


