import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    link?: string
    conteudo: string
}

export default class BotaoLink extends Component<props> {
    render() {
        return (
            <>
                <a id="botao" className="rounded rounded-full" href={ this.props.link }>
                    {this.props.conteudo}
                </a>
            </>
        )
    }
}