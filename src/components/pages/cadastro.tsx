import React, { useState } from 'react'

function Cadastro() {
    const [nome, setNome] = useState('')
    const [sku, setSku] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState(0)
    const [fornecedor, setFornecedor] = useState('')

    function ButtonClick() {
        console.log({
            nome,
            sku,
            descricao,
            preco,
            fornecedor
        })
    }

    function Nome(evt) {
        setNome(evt.target.value)
    }

    function Sku(evt) {
        setSku(evt.target.value)
    }

    function Descricao(evt) {
        setDescricao(evt.target.value)
    }

    function Preco(evt) {
        setPreco(evt.target.value)
    }

    function Fornecedor(evt) {
        setFornecedor(evt.target.value)
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Cadastro Produto
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input value={nome}
                                className="form-control" 
                                type="text" onChange={Nome}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input value={sku} onChange={Sku} className="form-control" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea value={descricao} onChange={Descricao} className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input value={preco} onChange={Preco} className="form-control" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input value={fornecedor} onChange={Fornecedor} className="form-control" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-success" onClick={ButtonClick}>Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastro