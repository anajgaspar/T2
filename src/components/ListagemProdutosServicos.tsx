import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    nome: string,
    valor?: number
}

export default class ListagemProdutosServicos extends Component<props> {
    render() {
        return (
            <>
                <li className="list-group-item d-flex justify-content-between align-items-center gap-4 flex-wrap">
                    <div className="d-flex flex-column">
                        <strong>{this.props.nome}</strong>
                        <small><span className="fw-semibold">Valor: </span>{this.props.valor}</small>
                    </div>
                    <div className="d-flex gap-4">
                        <a href="/">
                            <img className="img-fluid" src="https://img.icons8.com/?size=100&id=85081&format=png&color=000000" alt="delete" width={20}></img>
                        </a>
                        <a href="/">
                            <img className="img-fluid" src="https://img.icons8.com/?size=100&id=82744&format=png&color=000000" alt="update" width={20}></img>
                        </a>
                    </div>
                </li>
            </>
        )
    }
}