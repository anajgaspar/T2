import { Component } from "react";
import NavbarCompleta from "../components/NavbarCompleta";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/perfilCliente.css"

export default class PerfilCliente extends Component {
    render() {
        return (
            <>
                <NavbarCompleta rota="/clientes"></NavbarCompleta>
                <div className="container-lg py-5">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="mb-4">
                            <div className="card card-body">
                                <h4 id="enfase" className="card-title">Nome: Lavínia Piratello Pansutti dos Anjos</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Nome Social: Lavínia</h6>
                                <p className="mb-1"><strong>CPF:</strong> 123.456.789-00</p>
                                <p className="mb-3"><strong>RG:</strong> 12.345.678-9</p>
                                <h6 id="enfase" className="mt-3">Telefones:</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">+55 12 98765-4321</li>
                                    <li className="list-group-item">+55 12 99876-5432</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="card card-body p-4">
                                <h4 id="enfase" className="card-title">Pets:</h4>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <p className="mb-1"><strong>Nome:</strong> Yuumi</p>
                                        <p className="mb-1"><strong>Raça:</strong> Siamês</p>
                                        <p className="mb-1"><strong>Gênero:</strong> Fêmea</p>
                                        <p className="mb-0"><strong>Tipo:</strong> Gato</p>
                                    </li>
                                    <li className="list-group-item">
                                        <p className="mb-1"><strong>Nome:</strong> Lily</p>
                                        <p className="mb-1"><strong>Raça:</strong> SRD</p>
                                        <p className="mb-1"><strong>Gênero:</strong> Fêmea</p>
                                        <p className="mb-0"><strong>Tipo:</strong> Gato</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}