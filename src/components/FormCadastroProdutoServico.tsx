import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class FormCadastroProdutoServico extends Component {
    render() {
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input type="text" className="form-control" id="nome"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="valor" className="form-label">Valor(R$):</label>
                    <input type="number" className="form-control" id="valor"></input>
                </div>
                <button id="botao" className="rounded rounded-full">Cadastrar</button>
            </form>
        )
    }
}