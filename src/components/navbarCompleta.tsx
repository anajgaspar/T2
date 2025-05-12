import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    rota: string
}

export default class NavbarCompleta extends Component<props> {
    render() {
        return (
            <>
                <nav className="navbar sticky-top">
                    <div className="container-fluid justify-content-between">
                        <a className="navbar-brand" href={ this.props.rota }>
                            <img id="icone-voltar" className="img-fluid" src="https://img.icons8.com/?size=100&id=89782&format=png&color=F39C12" alt="icone-voltar" width={45}></img>
                        </a>
                        <div className="navbar-brand">
                            <img id="logo" className="img-fluid" src="/logo.png" alt="logo" width={230}></img>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}