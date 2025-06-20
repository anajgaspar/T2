import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class FormCadastroPet extends Component {
    render() {
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input type="text" className="form-control" id="nome"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="raca" className="form-label">Raça:</label>
                    <input type="text" className="form-control" id="raca"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="genero" className="form-label">Gênero:</label>
                    <input type="text" className="form-control" id="genero"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="tipo" className="form-label">Tipo:</label>
                    <input type="text" className="form-control" id="tipo"></input>
                </div>
                <button id="botao" className="rounded rounded-full">Cadastrar</button>
            </form>
        )
    }
}