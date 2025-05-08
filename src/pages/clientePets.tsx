import { Component } from "react";
import BarraPrincipal from "../components/navbarCompleta";
import "../styles/clientePets.css"

export default class ClientePets extends Component {
    render() {
        return (
            <>
                <BarraPrincipal rota="/clientes"></BarraPrincipal>
                <div>
                    
                </div>
            </>
        )
    }
}