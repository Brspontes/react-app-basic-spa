import React, { useState } from 'react'
import ProdutoService from '../../services/produtoService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cadastro() {
    const [nome, setNome] = useState('')
    const [sku, setSku] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState(0)
    const [fornecedor, setFornecedor] = useState('')
    const service = new ProdutoService()

    const notify = () => toast.error("Todos os campos obrigatórios devem estar preenchidos",{ 
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
     })

     const notifySuccess = () => toast.success("Dados armazendos com sucesso", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
     })

    function ButtonClick() {

        if(!nome || !sku || !preco || !fornecedor) {
            notify()
            return
        }

        service.salvar({
            nome,
            sku,
            descricao,
            preco,
            fornecedor
        })
        notifySuccess()
    }

    function LimparCampos() {
        setNome('')
        setSku('')
        setDescricao('')
        setPreco(0)
        setFornecedor('')
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
            <ToastContainer/>
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
                            <button className="btn btn-primary" onClick={LimparCampos}>Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastro