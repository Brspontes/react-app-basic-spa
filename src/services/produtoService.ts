const PRODUTOS = '_PRODUTOS'

export default class ProdutoService {
    salvar = (produto) => {
        let produtos = localStorage.getItem(PRODUTOS)
        let array: string[] = []

        if(produtos) {
            produtos = JSON.parse(produtos)
            array.push(produtos || '')
        }
        produtos = JSON.stringify(produto)
        array.push(produtos)

        localStorage.setItem(PRODUTOS, JSON.stringify(array))
    }
}