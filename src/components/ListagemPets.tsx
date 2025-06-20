import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    nome: string,
    raca: string,
    genero: string,
    tipo: string
}

export default class ListagemPets extends Component<props> {
    render() {
        return (
            <>
                <li className="list-group-item d-flex justify-content-between align-items-center gap-4 flex-wrap">
                    <div className="d-flex flex-column">
                        <p className="mb-1"><strong>Nome:</strong> {this.props.nome}</p>
                        <p className="mb-1"><strong>Raça:</strong> {this.props.raca}</p>
                        <p className="mb-1"><strong>Gênero:</strong> {this.props.genero}</p>
                        <p className="mb-0"><strong>Tipo:</strong> {this.props.tipo}</p>
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