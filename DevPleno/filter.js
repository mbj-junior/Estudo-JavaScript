const carrinho = [
    {id: 1, preco: 2, qtd: 2, estoque: 10},
    {id: 2, preco: 3, qtd: 5, estoque: 2},
]

const subtotal = item => item.preco * item.qtd
const filtroEmEstoque = item => item.estoque >= item.qtd
const soma = (soma, subtotal) => subtotal + soma

const total = carrinho
                .filter(filtroEmEstoque)
                .map(subtotal)
                .reduce(soma,0)

console.log(`Preço total R$ ${total.toFixed(2)}`)

//modo de filtar 
//const semEstoque = carrinho.filter(item => item.estoque < item.qtd)
//console.log(semEstoque)
