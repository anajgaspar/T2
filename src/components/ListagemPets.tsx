import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    nome: string,
    raca: string,
    genero: string
}

export default class ListagemPets extends Component<props> {
    render() {
        return (
            <>
                <li className="list-group-item d-flex justify-content-between align-items-center gap-4 flex-wrap">
                    <div className="d-flex flex-column">
                        <strong>{this.props.nome}</strong>
                        <small><span className="fw-semibold">Tipo/Raça: </span>{this.props.raca}</small>
                        <small><span className="fw-semibold">Gênero: </span>{this.props.genero}</small>
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