import { Component } from "react";
import BotaoLink from "./BotaoLink";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    icone: string,
    titulo: string,
    descricao: string,
    rota: string
}

export default class CardsHome extends Component<props> {
    render() {
        return (
            <div className="container-lg d-flex flex-row p-3">
                <div className="d-flex flex-row align-items-start gap-4">
                    <img className="img-fluid" src={ this.props.icone } alt="icone" width={40}></img>
                    <div className="flex-column">
                        <h5>{ this.props.titulo }</h5>
                        <p>{ this.props.descricao }</p>
                        <BotaoLink link={this.props.rota} conteudo="Acessar"></BotaoLink>
                    </div>
                </div>
            </div>
        )
    }
}