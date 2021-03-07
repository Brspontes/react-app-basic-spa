import { Produto } from "../models/ProdutoModel"

const PRODUTOS = '_PRODUTOS'

export default class ProdutoService {

    consultarTodos(): Produto[] {
        let produtosStorage = localStorage.getItem(PRODUTOS)
        let produtosString: string[] = []
        let produtosObject: Produto[] = []

        produtosString = JSON.parse(produtosStorage || '')

        produtosString.map(c => {
            produtosObject.push(JSON.parse(c))
        })

        console.log('localstorage')
        console.log(produtosObject)

        return produtosObject
    }

    salvar(produto) {
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