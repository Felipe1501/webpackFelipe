const produto = {
    nome: 'PS5',
    preco: 4441.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'PS5'

console.log(produto, novoProduto)