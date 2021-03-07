import React, { useState, useEffect } from 'react'
import { Produto } from '../../models/ProdutoModel'
import ProdutoService from '../../services/produtoService'

function Listagem () {

const [produtos, setProdutos] = useState<Produto[]>([])

useEffect(() => {
    const produtoService = new ProdutoService()
    const produtosRetorno = produtoService.consultarTodos()

    if(produtosRetorno)
        setProdutos(produtosRetorno)
       
}, [] || [produtos])

return (
    <div className="card">
        <div className="card-header">
            Consultar Produtos
        </div>
        <div className="card-body">
        
            <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>SKU</th>
                            <th>Preço</th>
                            <th>Fornecedor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                produtos.map((produto, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{produto.nome}</th>
                                            <th>{produto.sku}</th>
                                            <th>{produto.preco}</th>
                                            <th>{produto.fornecedor}</th>
                                            <th></th>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Listagem