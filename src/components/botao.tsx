import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    link: string
}

export default class Botao extends Component<props> {
    render() {
        return (
            <>
                <button className="rounded border border-0 px-2 py-1">
                    <a href={ this.props.link }>Acessar</a>
                </button>
            </>
        )
    }
}